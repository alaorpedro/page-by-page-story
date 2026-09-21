import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

type Props = {
  /** Número do gatilho (1–6), usado no badge e na letra de fundo. */
  number: string;
  /** Número do slide no deck, exibido no cabeçalho. */
  slideNumber: string;
  title: string;
  lead: string;
  example1: string;
  example2: string;
  tone?: "dark" | "light";
};

export function TriggerSlide({
  number,
  slideNumber,
  title,
  lead,
  example1,
  example2,
  tone = "dark",
}: Props) {
  const isLight = tone === "light";
  const text = isLight ? "oklch(0.13 0.005 240)" : "oklch(0.98 0 0)";
  const muted = isLight ? "oklch(0.18 0.01 240 / 0.72)" : "oklch(1 0 0 / 0.72)";
  const cardBg = isLight ? "oklch(0 0 0 / 0.04)" : "oklch(1 0 0 / 0.05)";
  const cardLabel = isLight ? "oklch(0.18 0.01 240 / 0.55)" : "oklch(1 0 0 / 0.5)";

  const examples = [example1, example2];

  return (
    <SlideLayout variant="content" tone={tone} bgLetter={number}>
      <SlideHeader number={slideNumber} label="Gatilho mental" tone={tone} />

      <div className="absolute left-16 right-16 top-[280px] bottom-28 flex flex-col">
        {/* Título do gatilho */}
        <div
          className="flex items-center gap-8 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span
            className="shrink-0 flex items-center justify-center font-black"
            style={{
              width: 92,
              height: 92,
              borderRadius: 22,
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              fontFamily: "var(--font-display)",
              fontSize: 52,
              boxShadow: "0 18px 44px oklch(0.84 0.18 130 / 0.32)",
            }}
          >
            {number}
          </span>
          <h2
            className="uppercase font-black"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 96,
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              color: text,
            }}
          >
            {title}
          </h2>
        </div>

        {/* Conceito */}
        <p
          className="mt-10 font-medium max-w-[1620px] animate-fade-in-up"
          style={{
            fontSize: 32,
            lineHeight: 1.38,
            color: muted,
            animationDelay: "0.25s",
          }}
        >
          {lead}
        </p>

        {/* Exemplos */}
        <div className="mt-auto grid grid-cols-2 gap-8">
          {examples.map((example, i) => (
            <div
              key={i}
              className="relative animate-fade-in-up"
              style={{
                background: cardBg,
                borderLeft: "6px solid var(--onmid-lime)",
                borderRadius: "0 20px 20px 0",
                padding: "34px 38px",
                animationDelay: `${0.45 + i * 0.18}s`,
              }}
            >
              <div
                className="uppercase font-black mb-3"
                style={{
                  fontSize: 15,
                  letterSpacing: "0.3em",
                  color: cardLabel,
                }}
              >
                Exemplo {i + 1}
              </div>
              <p
                className="font-bold"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  lineHeight: 1.32,
                  letterSpacing: "-0.015em",
                  color: text,
                }}
              >
                “{example}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
