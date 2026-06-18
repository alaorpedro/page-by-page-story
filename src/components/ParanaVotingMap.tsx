import { useMemo, useState, type MouseEvent } from "react";
import mapData from "@/data/parana-votes-2022.json";

type Position = [number, number];
type PolygonCoordinates = Position[][];
type MultiPolygonCoordinates = Position[][][];

type MapFeature = {
  type: "Feature";
  geometry: {
    type: "Polygon" | "MultiPolygon";
    coordinates: PolygonCoordinates | MultiPolygonCoordinates;
  };
  properties: {
    code: string;
    name: string;
    region: string;
    votes: number;
    hasData: boolean;
  };
};

type MapData = {
  summary: {
    spreadsheetRows: number;
    matchedMunicipalities: number;
    unmatchedRows: number;
    matchedVotes: number;
    spreadsheetVotes: number;
  };
  features: MapFeature[];
};

const DATA = mapData as MapData;
const NUMBER = new Intl.NumberFormat("pt-BR");
const MAP_WIDTH = 1080;
const MAP_HEIGHT = 590;
const MAP_PADDING = 18;

function visitPositions(
  coordinates: PolygonCoordinates | MultiPolygonCoordinates,
  callback: (position: Position) => void,
) {
  const visit = (value: Position | Position[] | Position[][]) => {
    if (typeof value[0] === "number") {
      callback(value as Position);
      return;
    }
    for (const child of value as Position[] | Position[][]) visit(child);
  };

  visit(coordinates);
}

function getFill(votes: number, active: boolean) {
  if (active) return "oklch(0.69 0.2 138)";
  if (votes >= 5000) return "oklch(0.56 0.18 138)";
  if (votes >= 1000) return "oklch(0.64 0.17 138)";
  if (votes >= 300) return "oklch(0.72 0.15 138)";
  if (votes >= 100) return "oklch(0.8 0.12 138)";
  if (votes > 0) return "oklch(0.88 0.08 138)";
  return "oklch(0.84 0.01 90)";
}

export function ParanaVotingMap({ visible }: { visible: boolean }) {
  const ranked = useMemo(
    () =>
      [...DATA.features]
        .filter((feature) => feature.properties.hasData)
        .sort((a, b) => b.properties.votes - a.properties.votes),
    [],
  );
  const [selectedCode, setSelectedCode] = useState(ranked[0]?.properties.code ?? "");
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);

  const projection = useMemo(() => {
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;

    for (const feature of DATA.features) {
      visitPositions(feature.geometry.coordinates, ([x, y]) => {
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        minY = Math.min(minY, y);
        maxY = Math.max(maxY, y);
      });
    }

    const availableWidth = MAP_WIDTH - MAP_PADDING * 2;
    const availableHeight = MAP_HEIGHT - MAP_PADDING * 2;
    const scale = Math.min(availableWidth / (maxX - minX), availableHeight / (maxY - minY));
    const projectedWidth = (maxX - minX) * scale;
    const projectedHeight = (maxY - minY) * scale;
    const offsetX = (MAP_WIDTH - projectedWidth) / 2;
    const offsetY = (MAP_HEIGHT - projectedHeight) / 2;

    const project = ([x, y]: Position) => [
      offsetX + (x - minX) * scale,
      offsetY + (maxY - y) * scale,
    ];

    const ringToPath = (ring: Position[]) =>
      `${ring
        .map((position, index) => {
          const [x, y] = project(position);
          return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(" ")} Z`;

    return (feature: MapFeature) => {
      if (feature.geometry.type === "Polygon") {
        return (feature.geometry.coordinates as PolygonCoordinates).map(ringToPath).join(" ");
      }
      return (feature.geometry.coordinates as MultiPolygonCoordinates)
        .flatMap((polygon) => polygon.map(ringToPath))
        .join(" ");
    };
  }, []);

  const activeCode = hoveredCode ?? selectedCode;
  const activeFeature =
    DATA.features.find((feature) => feature.properties.code === activeCode) ?? ranked[0];
  const activeRank = ranked.findIndex(
    (feature) => feature.properties.code === activeFeature?.properties.code,
  );

  const stopInteraction = (event: MouseEvent<HTMLElement>) => event.stopPropagation();

  return (
    <div
      data-slide-chrome
      className="absolute left-20 right-20 bottom-20 grid transition-all duration-700"
      style={{
        top: 350,
        gridTemplateColumns: "minmax(0, 1.65fr) minmax(360px, 0.72fr)",
        gap: 34,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onClick={stopInteraction}
      onMouseDown={stopInteraction}
    >
      <div
        className="relative overflow-hidden border"
        style={{
          background: "oklch(0.97 0.005 90)",
          borderColor: "oklch(0.16 0.01 240 / 0.12)",
        }}
      >
        <svg
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="h-full w-full"
          role="img"
          aria-label="Mapa interativo da votação de Cobra Repórter no Paraná em 2022"
          onMouseLeave={() => setHoveredCode(null)}
        >
          {DATA.features.map((feature) => {
            const isActive = feature.properties.code === activeCode;
            return (
              <path
                key={feature.properties.code}
                d={projection(feature)}
                fill={getFill(feature.properties.votes, isActive)}
                stroke={isActive ? "oklch(0.16 0.01 240)" : "oklch(0.99 0 0)"}
                strokeWidth={isActive ? 2.2 : 0.8}
                vectorEffect="non-scaling-stroke"
                className="cursor-pointer transition-colors duration-150"
                onMouseEnter={() => setHoveredCode(feature.properties.code)}
                onClick={() => setSelectedCode(feature.properties.code)}
              >
                <title>
                  {feature.properties.name}: {NUMBER.format(feature.properties.votes)} votos
                </title>
              </path>
            );
          })}
        </svg>

        <div
          className="absolute left-6 bottom-5 flex items-center gap-4 uppercase font-bold"
          style={{ fontSize: 11, letterSpacing: "0.18em", color: "oklch(0.2 0.01 240 / 0.58)" }}
        >
          <span>Menor votação</span>
          <div className="flex">
            {[0, 30, 100, 300, 1000, 5000].map((value) => (
              <span
                key={value}
                style={{
                  display: "block",
                  width: 34,
                  height: 10,
                  background: getFill(value, false),
                }}
              />
            ))}
          </div>
          <span>Maior votação</span>
        </div>
      </div>

      <aside
        className="border flex flex-col"
        style={{
          padding: "30px 30px 26px",
          background: "oklch(1 0 0 / 0.72)",
          borderColor: "oklch(0.16 0.01 240 / 0.1)",
        }}
      >
        <div
          className="uppercase font-bold"
          style={{ fontSize: 13, letterSpacing: "0.28em", color: "oklch(0.48 0.18 138)" }}
        >
          Município selecionado
        </div>
        <h3
          style={{
            marginTop: 16,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 42,
            lineHeight: 0.98,
            color: "oklch(0.16 0.01 240)",
          }}
        >
          {activeFeature?.properties.name}
        </h3>
        <div className="flex items-end justify-between" style={{ marginTop: 24 }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 64,
                lineHeight: 0.9,
                color: "oklch(0.16 0.01 240)",
              }}
            >
              {NUMBER.format(activeFeature?.properties.votes ?? 0)}
            </div>
            <div
              className="uppercase font-bold"
              style={{
                marginTop: 10,
                fontSize: 12,
                letterSpacing: "0.25em",
                color: "oklch(0.2 0.01 240 / 0.55)",
              }}
            >
              votos nominais
            </div>
          </div>
          <div
            className="font-mono"
            style={{ fontSize: 15, color: "oklch(0.48 0.18 138)", letterSpacing: "0.12em" }}
          >
            #{activeRank + 1}
          </div>
        </div>

        <div
          className="grid grid-cols-2"
          style={{
            marginTop: 28,
            padding: "18px 0",
            borderTop: "1px solid oklch(0.16 0.01 240 / 0.1)",
            borderBottom: "1px solid oklch(0.16 0.01 240 / 0.1)",
          }}
        >
          <div>
            <strong style={{ display: "block", fontSize: 24 }}>
              {NUMBER.format(DATA.summary.spreadsheetVotes)}
            </strong>
            <span style={{ fontSize: 13, color: "oklch(0.2 0.01 240 / 0.55)" }}>
              votos na planilha
            </span>
          </div>
          <div>
            <strong style={{ display: "block", fontSize: 24 }}>
              {DATA.summary.matchedMunicipalities}
            </strong>
            <span style={{ fontSize: 13, color: "oklch(0.2 0.01 240 / 0.55)" }}>
              municípios mapeados
            </span>
          </div>
        </div>

        <div
          className="uppercase font-bold"
          style={{
            marginTop: 22,
            marginBottom: 12,
            fontSize: 12,
            letterSpacing: "0.24em",
            color: "oklch(0.2 0.01 240 / 0.48)",
          }}
        >
          Maiores votações
        </div>
        <div className="flex-1">
          {ranked.slice(0, 5).map((feature, index) => (
            <button
              key={feature.properties.code}
              type="button"
              onClick={() => setSelectedCode(feature.properties.code)}
              className="flex w-full items-center justify-between text-left transition-colors"
              style={{
                padding: "9px 0",
                color:
                  feature.properties.code === selectedCode
                    ? "oklch(0.48 0.18 138)"
                    : "oklch(0.16 0.01 240)",
              }}
            >
              <span style={{ fontWeight: 750, fontSize: 16 }}>
                {String(index + 1).padStart(2, "0")} · {feature.properties.name}
              </span>
              <span className="font-mono" style={{ fontSize: 14 }}>
                {NUMBER.format(feature.properties.votes)}
              </span>
            </button>
          ))}
        </div>
      </aside>
    </div>
  );
}
