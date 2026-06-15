import { SlideLayout } from "@/components/SlideLayout";

const POINTS = [
  {
    label: "Métrica",
    text: "Leitura clara do que gera demanda, agendamento e oportunidade real.",
  },
  {
    label: "Rotina",
    text: "Acompanhamento constante para transformar dados em decisão.",
  },
  {
    label: "Ajuste",
    text: "Otimização do investimento com foco em performance comercial.",
  },
];

export function PF02() {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Acompanhamento">
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
          Tráfego pago não é só campanha
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 132,
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            maxWidth: 1280,
            animationDelay: "0.12s",
          }}
        >
          É leitura, rotina
          <br />e tomada de decisão.
        </h2>
      </div>

      <div
        className="absolute grid grid-cols-3"
        style={{ left: 110, right: 110, bottom: 150, gap: 28 }}
      >
        {POINTS.map((point, i) => (
          <div
            key={point.label}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.25 + i * 0.1}s`,
              paddingTop: 34,
              borderTop: "2px solid oklch(0.88 0.24 138 / 0.65)",
            }}
          >
            <div
              className="uppercase font-bold"
              style={{
                fontSize: 17,
                letterSpacing: "0.36em",
                color: "var(--onmid-lime)",
                marginBottom: 24,
              }}
            >
              {point.label}
            </div>
            <p
              style={{
                fontSize: 30,
                lineHeight: 1.32,
                color: "oklch(1 0 0 / 0.72)",
                maxWidth: 480,
              }}
            >
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
