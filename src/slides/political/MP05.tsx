import { SlideLayout } from "@/components/SlideLayout";

const STEPS = [
  "Ouvir antes de responder",
  "Registrar demandas reais",
  "Prestar contas com frequência",
  "Transformar apoio em comunidade",
];

export function MP05() {
  return (
    <SlideLayout variant="statement" tone="dark" kicker="Pilar 03">
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
          Relacionamento
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 136,
            lineHeight: 0.94,
            letterSpacing: "-0.055em",
            maxWidth: 1360,
            animationDelay: "0.12s",
          }}
        >
          Voto nasce de confiança repetida.
        </h2>
      </div>

      <div
        className="absolute grid grid-cols-4"
        style={{ left: 110, right: 110, bottom: 145, gap: 24 }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.24 + i * 0.1}s`,
              padding: "34px 28px 38px",
              background: "oklch(1 0 0 / 0.055)",
              border: "1px solid oklch(1 0 0 / 0.1)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 18,
                letterSpacing: "0.22em",
                color: "var(--onmid-lime)",
                marginBottom: 54,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <p style={{ fontSize: 30, lineHeight: 1.22, color: "oklch(1 0 0 / 0.78)" }}>{step}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
