import { useMemo, useState, type MouseEvent } from "react";
import { Check, ChevronsUpDown, Search } from "lucide-react";
import mapData from "@/data/parana-votes-2022.json";

type Municipality = {
  properties: {
    code: string;
    name: string;
    region: string;
    intermediateRegion: string;
    population: number;
    votes: number;
    hasData: boolean;
  };
};

type MunicipalityData = {
  summary: {
    spreadsheetVotes: number;
  };
  features: Municipality[];
};

const DATA = mapData as MunicipalityData;
const NUMBER = new Intl.NumberFormat("pt-BR");
const DECIMAL = new Intl.NumberFormat("pt-BR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function getCitySize(population: number) {
  if (population >= 500_000) return "Grande polo urbano";
  if (population >= 100_000) return "Centro regional";
  if (population >= 50_000) return "Cidade média";
  if (population >= 20_000) return "Pequeno centro urbano";
  return "Município de pequeno porte";
}

function getProfileNameSize(name: string) {
  if (name.length <= 15) return 42;
  if (name.length <= 20) return 36;
  if (name.length <= 25) return 31;
  return 27;
}

function getElectoralReading(votesPerThousand: number, votes: number) {
  if (votes >= 1000 && votesPerThousand >= 10) {
    return "Base eleitoral consolidada: território prioritário para presença, mobilização e defesa de voto.";
  }
  if (votes >= 300 || votesPerThousand >= 5) {
    return "Território de consolidação: comunicação recorrente pode ampliar reconhecimento e intenção.";
  }
  if (votes > 0) {
    return "Território de expansão: combinar alcance digital com lideranças locais e ativação de base.";
  }
  return "Sem votos associados na planilha: território para prospecção, reconhecimento e construção de presença.";
}

export function MunicipalityProfile() {
  const municipalities = useMemo(
    () => [...DATA.features].sort((a, b) => a.properties.name.localeCompare(b.properties.name)),
    [],
  );
  const ranked = useMemo(
    () =>
      [...DATA.features]
        .filter((feature) => feature.properties.hasData)
        .sort((a, b) => b.properties.votes - a.properties.votes),
    [],
  );
  const initialCode =
    municipalities.find((municipality) => municipality.properties.name === "Rolândia")?.properties
      .code ?? municipalities[0].properties.code;
  const [selectedCode, setSelectedCode] = useState(initialCode);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const selected =
    municipalities.find((municipality) => municipality.properties.code === selectedCode) ??
    municipalities[0];
  const selectedProps = selected.properties;
  const votesPerThousand =
    selectedProps.population > 0 ? (selectedProps.votes / selectedProps.population) * 1000 : 0;
  const voteShare = (selectedProps.votes / DATA.summary.spreadsheetVotes) * 100;
  const rank = ranked.findIndex(
    (municipality) => municipality.properties.code === selectedProps.code,
  );
  const filtered = municipalities.filter((municipality) =>
    normalize(municipality.properties.name).includes(normalize(search)),
  );

  const stopInteraction = (event: MouseEvent<HTMLElement>) => event.stopPropagation();

  return (
    <div
      data-slide-chrome
      className="absolute left-20 right-20 grid"
      style={{
        top: 310,
        bottom: 72,
        gridTemplateColumns: "minmax(390px, 0.72fr) minmax(0, 1.55fr)",
        gap: 28,
      }}
      onClick={stopInteraction}
      onMouseDown={stopInteraction}
    >
      <section
        className="relative border"
        style={{
          padding: "34px 34px 30px",
          background: "oklch(1 0 0 / 0.76)",
          borderColor: "oklch(0.16 0.01 240 / 0.1)",
        }}
      >
        <div
          className="uppercase font-bold"
          style={{ fontSize: 13, letterSpacing: "0.28em", color: "oklch(0.48 0.18 138)" }}
        >
          Selecione um município
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="mt-5 flex w-full items-center justify-between border text-left"
          style={{
            height: 64,
            padding: "0 20px",
            background: "white",
            borderColor: "oklch(0.16 0.01 240 / 0.16)",
            color: "oklch(0.16 0.01 240)",
            fontSize: 19,
            fontWeight: 750,
          }}
          aria-expanded={open}
        >
          <span className="truncate">{selectedProps.name}</span>
          <ChevronsUpDown size={20} aria-hidden />
        </button>

        {open && (
          <div
            className="absolute z-40 border"
            style={{
              left: 34,
              right: 34,
              top: 132,
              background: "white",
              borderColor: "oklch(0.16 0.01 240 / 0.16)",
              boxShadow: "0 22px 50px oklch(0 0 0 / 0.16)",
            }}
          >
            <div
              className="flex items-center gap-3"
              style={{
                height: 56,
                padding: "0 16px",
                borderBottom: "1px solid oklch(0 0 0 / 0.08)",
              }}
            >
              <Search size={18} aria-hidden />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar cidade"
                autoFocus
                className="h-full flex-1 border-0 bg-transparent outline-none"
                style={{ fontSize: 17 }}
              />
            </div>
            <div style={{ maxHeight: 290, overflowY: "auto", padding: 6 }}>
              {filtered.map((municipality) => (
                <button
                  key={municipality.properties.code}
                  type="button"
                  onClick={() => {
                    setSelectedCode(municipality.properties.code);
                    setOpen(false);
                    setSearch("");
                  }}
                  className="flex w-full items-center justify-between text-left"
                  style={{
                    padding: "12px 12px",
                    color: "oklch(0.16 0.01 240)",
                    fontSize: 16,
                    background:
                      municipality.properties.code === selectedCode
                        ? "oklch(0.92 0.08 138)"
                        : "transparent",
                  }}
                >
                  <span>{municipality.properties.name}</span>
                  {municipality.properties.code === selectedCode && (
                    <Check size={17} color="oklch(0.48 0.18 138)" aria-hidden />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 34 }}>
          <div
            className="uppercase font-bold"
            style={{ fontSize: 12, letterSpacing: "0.22em", color: "oklch(0.2 0.01 240 / 0.48)" }}
          >
            Retrato municipal
          </div>
          <h3
            style={{
              marginTop: 14,
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: getProfileNameSize(selectedProps.name),
              lineHeight: 1,
              color: "oklch(0.16 0.01 240)",
              whiteSpace: "nowrap",
            }}
          >
            {selectedProps.name}
          </h3>
          <p
            style={{
              marginTop: 18,
              fontSize: 20,
              lineHeight: 1.45,
              color: "oklch(0.2 0.01 240 / 0.68)",
            }}
          >
            {getCitySize(selectedProps.population)} da região imediata de {selectedProps.region},
            inserido na região intermediária de {selectedProps.intermediateRegion}.
          </p>
        </div>

        <div
          style={{
            marginTop: 30,
            paddingTop: 24,
            borderTop: "1px solid oklch(0.16 0.01 240 / 0.1)",
          }}
        >
          <strong style={{ display: "block", fontSize: 32, color: "oklch(0.16 0.01 240)" }}>
            {NUMBER.format(selectedProps.population)}
          </strong>
          <span style={{ color: "oklch(0.2 0.01 240 / 0.52)", fontSize: 15 }}>
            habitantes · Censo 2022
          </span>
        </div>
      </section>

      <section
        className="border grid"
        style={{
          padding: "36px 38px 32px",
          background: "oklch(0.15 0.006 240)",
          borderColor: "oklch(1 0 0 / 0.08)",
          color: "white",
          gridTemplateRows: "auto auto 1fr",
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div
              className="uppercase font-bold"
              style={{ fontSize: 13, letterSpacing: "0.3em", color: "var(--onmid-lime)" }}
            >
              Resultado eleitoral 2022
            </div>
            <div
              style={{
                marginTop: 20,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 104,
                lineHeight: 0.85,
              }}
            >
              {NUMBER.format(selectedProps.votes)}
            </div>
            <div
              className="uppercase font-bold"
              style={{
                marginTop: 18,
                color: "oklch(1 0 0 / 0.52)",
                fontSize: 13,
                letterSpacing: "0.25em",
              }}
            >
              votos nominais
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <strong style={{ display: "block", color: "var(--onmid-lime)", fontSize: 29 }}>
              {rank >= 0 ? `#${rank + 1}` : "—"}
            </strong>
            <span style={{ color: "oklch(1 0 0 / 0.5)", fontSize: 14 }}>posição na votação</span>
          </div>
        </div>

        <div
          className="grid grid-cols-2"
          style={{
            marginTop: 34,
            padding: "24px 0",
            borderTop: "1px solid oklch(1 0 0 / 0.1)",
            borderBottom: "1px solid oklch(1 0 0 / 0.1)",
          }}
        >
          <div>
            <strong style={{ display: "block", fontSize: 31 }}>
              {DECIMAL.format(votesPerThousand)}
            </strong>
            <span style={{ color: "oklch(1 0 0 / 0.52)", fontSize: 14 }}>
              votos por mil habitantes
            </span>
          </div>
          <div>
            <strong style={{ display: "block", fontSize: 31 }}>{DECIMAL.format(voteShare)}%</strong>
            <span style={{ color: "oklch(1 0 0 / 0.52)", fontSize: 14 }}>da votação total</span>
          </div>
        </div>

        <div className="flex flex-col justify-end">
          <div
            className="uppercase font-bold"
            style={{ fontSize: 12, letterSpacing: "0.26em", color: "var(--onmid-lime)" }}
          >
            Leitura estratégica
          </div>
          <p style={{ marginTop: 16, maxWidth: 890, fontSize: 25, lineHeight: 1.35 }}>
            {getElectoralReading(votesPerThousand, selectedProps.votes)}
          </p>
          <div className="flex items-center gap-4" style={{ marginTop: 28 }}>
            {["Digital geolocalizado", "Lideranças locais", "Mobilização", "Mala direta"].map(
              (channel) => (
                <span
                  key={channel}
                  style={{
                    padding: "9px 13px",
                    border: "1px solid oklch(1 0 0 / 0.13)",
                    color: "oklch(1 0 0 / 0.68)",
                    fontSize: 13,
                  }}
                >
                  {channel}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
