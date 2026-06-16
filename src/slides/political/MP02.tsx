import { SlideLayout } from "@/components/SlideLayout";

const PILLARS = ["Publicidade", "Marketing", "Relacionamento", "Inteligência Artificial"];

export function MP02() {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Arquitetura">
      <div className="absolute left-24 top-40 right-24">
        <div
          className="uppercase font-bold animate-fade-in-up"
          style={{
            fontSize: 18,
            letterSpacing: "0.45em",
            color: "var(--onmid-lime)",
            marginBottom: 42,
          }}
        >
          Os quatro pilares da campanha
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 138,
            lineHeight: 0.94,
            letterSpacing: "-0.055em",
            maxWidth: 1390,
            animationDelay: "0.12s",
          }}
        >
          Visibilidade sem estratégia vira ruído.
        </h2>
      </div>

      <div
        className="absolute grid grid-cols-4"
        style={{ left: 110, right: 110, bottom: 150, gap: 24 }}
      >
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.24 + i * 0.1}s`,
              paddingTop: 34,
              borderTop: "2px solid oklch(0.88 0.24 138 / 0.65)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 18,
                letterSpacing: "0.22em",
                color: "var(--onmid-lime)",
                marginBottom: 30,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 38,
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {pillar}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
