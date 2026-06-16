import { SlideLayout } from "@/components/SlideLayout";

const LAYERS = [
  ["Posicionamento", "Por que esta candidatura existe?"],
  ["Narrativa", "Que mudança ela representa?"],
  ["Prova", "O que sustenta a promessa pública?"],
];

export function MP04() {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Pilar 02" bgLetter="M">
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
          Marketing
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 132,
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            maxWidth: 1320,
            animationDelay: "0.12s",
          }}
        >
          Campanha não é só peça. É sistema de sentido.
        </h2>
      </div>

      <div
        className="absolute grid grid-cols-3"
        style={{ left: 110, right: 110, bottom: 145, gap: 28 }}
      >
        {LAYERS.map(([title, text], i) => (
          <div
            key={title}
            className="animate-fade-in-up"
            style={{
              animationDelay: `${0.24 + i * 0.1}s`,
              paddingTop: 34,
              borderTop: "2px solid oklch(0.88 0.24 138 / 0.65)",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 48,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                marginBottom: 24,
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: 30, lineHeight: 1.32, color: "oklch(1 0 0 / 0.72)" }}>{text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
