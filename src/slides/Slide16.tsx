import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

const QUESTIONS = [
  <>
    O produto / serviço é caro em
    <br />
    relação a quê?
  </>,
  <>
    É menos caro não adquirir
    <br />
    nosso produto / serviço?
  </>,
];

export function Slide16() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="16">
      <SlideHeader number="16" label="Quebra de objeção" tone="dark" />

      <div className="absolute left-16 right-16 top-[290px] bottom-28 flex flex-col justify-center gap-10">
        {QUESTIONS.map((q, i) => (
          <div
            key={i}
            className="relative animate-fade-in-up"
            style={{
              background: i === 0 ? "var(--onmid-lime)" : "transparent",
              color: i === 0 ? "oklch(0.13 0.005 240)" : "oklch(0.98 0 0)",
              border: i === 0 ? "none" : "3px solid oklch(1 0 0 / 0.18)",
              borderRadius: 44,
              padding: "64px 72px",
              animationDelay: `${0.15 + i * 0.25}s`,
              boxShadow: i === 0 ? "0 40px 100px oklch(0.84 0.18 130 / 0.25)" : "none",
            }}
          >
            <span
              className="absolute uppercase font-black"
              style={{
                top: 28,
                left: 72,
                fontSize: 16,
                letterSpacing: "0.35em",
                color: i === 0 ? "oklch(0.13 0.005 240 / 0.45)" : "var(--onmid-lime)",
              }}
            >
              Pergunta {i + 1}
            </span>
            <p
              className="uppercase font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 82,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginTop: 18,
              }}
            >
              {q}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
