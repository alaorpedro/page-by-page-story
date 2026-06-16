import { SlideLayout } from "@/components/SlideLayout";

const ITEMS = [
  "Mensagem simples, visual reconhecível e repetição com disciplina.",
  "Criativos que apresentam causa, preparo e proposta sem confundir o eleitor.",
  "Transparência sobre autoria, impulsionamento e limites da propaganda eleitoral.",
];

export function MP03() {
  return (
    <SlideLayout variant="statement" tone="light" kicker="Pilar 01">
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
          Publicidade
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 136,
            lineHeight: 0.92,
            letterSpacing: "-0.055em",
            color: "oklch(0.16 0.01 240)",
            maxWidth: 1320,
            animationDelay: "0.12s",
          }}
        >
          Ser visto é diferente de ser entendido.
        </h2>
      </div>

      <div className="absolute left-24 right-24 grid grid-cols-3 gap-7" style={{ bottom: 150 }}>
        {ITEMS.map((item, i) => (
          <div
            key={item}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.24 + i * 0.1}s`,
              padding: 34,
              background: "oklch(1 0 0 / 0.72)",
              border: "1px solid oklch(0.16 0.01 240 / 0.08)",
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 16,
                letterSpacing: "0.22em",
                color: "oklch(0.48 0.18 138)",
                marginBottom: 34,
              }}
            >
              0{i + 1}
            </div>
            <p style={{ fontSize: 28, lineHeight: 1.32, color: "oklch(0.2 0.01 240 / 0.72)" }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
