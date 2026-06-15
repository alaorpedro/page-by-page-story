import { SlideLayout } from "@/components/SlideLayout";

const STEPS = ["Diagnosticar", "Implementar", "Acompanhar", "Otimizar"];

export function PF03() {
  return (
    <SlideLayout variant="statement" tone="light" kicker="Metodologia Onmid">
      <div className="absolute left-24 top-36 right-24">
        <div
          className="uppercase font-bold animate-fade-in-up"
          style={{
            fontSize: 18,
            letterSpacing: "0.45em",
            color: "oklch(0.48 0.18 138)",
            marginBottom: 44,
          }}
        >
          Método de acompanhamento
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 142,
            lineHeight: 0.92,
            letterSpacing: "-0.055em",
            color: "oklch(0.16 0.01 240)",
            maxWidth: 1320,
            animationDelay: "0.12s",
          }}
        >
          Performance melhora
          <br />
          quando o processo
          <br />
          fica visível.
        </h2>
      </div>

      <div
        className="absolute grid grid-cols-4"
        style={{ left: 110, right: 110, bottom: 155, gap: 24 }}
      >
        {STEPS.map((step, i) => (
          <div
            key={step}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.25 + i * 0.1}s`,
              padding: "34px 30px 38px",
              background: "oklch(1 0 0 / 0.72)",
              border: "1px solid oklch(0.16 0.01 240 / 0.08)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 18,
                letterSpacing: "0.22em",
                color: "oklch(0.48 0.18 138)",
                marginBottom: 56,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 42,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "oklch(0.16 0.01 240)",
              }}
            >
              {step}
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
