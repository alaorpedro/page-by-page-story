import { SlideLayout } from "@/components/SlideLayout";

const USES = [
  ["Diagnóstico", "Organizar dúvidas, temas recorrentes e prioridades do território."],
  ["Produção", "Acelerar rascunhos, calendários e variações de linguagem."],
  ["Governança", "Revisar riscos, fontes, transparência e consistência da mensagem."],
];

export function MP06() {
  return (
    <SlideLayout variant="content" tone="light" kicker="Pilar 04" bgLetter="IA">
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
          Inteligência Artificial
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 132,
            lineHeight: 0.94,
            letterSpacing: "-0.055em",
            color: "oklch(0.16 0.01 240)",
            maxWidth: 1420,
            animationDelay: "0.12s",
          }}
        >
          IA deve aumentar responsabilidade, não improviso.
        </h2>
      </div>

      <div
        className="absolute grid grid-cols-3"
        style={{ left: 110, right: 110, bottom: 145, gap: 28 }}
      >
        {USES.map(([title, text], i) => (
          <div
            key={title}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.24 + i * 0.1}s`,
              paddingTop: 34,
              borderTop: "2px solid oklch(0.48 0.18 138 / 0.75)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 48,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "oklch(0.16 0.01 240)",
                marginBottom: 24,
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: 29, lineHeight: 1.32, color: "oklch(0.2 0.01 240 / 0.68)" }}>
              {text}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
