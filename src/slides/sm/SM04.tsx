import { SlideLayout } from "@/components/SlideLayout";

export function SM04() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="P" kicker="01 · Posicionamento">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 120,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "oklch(0.98 0 0)",
            maxWidth: 1500,
          }}
        >
          O que sua clínica<br />
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            defende
          </span>
          ?
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 48,
            fontSize: 32,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.7)",
            maxWidth: 1200,
            fontWeight: 500,
            animationDelay: "0.2s",
          }}
        >
          Posicionamento não é um slogan. É a resposta clara para três perguntas
          que o paciente faz em silêncio antes de seguir você:
        </p>

        <div
          className="grid grid-cols-3 gap-8 animate-fade-in-up"
          style={{ marginTop: 72, animationDelay: "0.35s" }}
        >
          {[
            { n: "01", t: "Para quem?", d: "Que paciente você atende melhor que ninguém." },
            { n: "02", t: "Para quê?", d: "Que transformação você entrega — não que procedimento." },
            { n: "03", t: "Por quê você?", d: "O que só a sua clínica tem ou faz." },
          ].map((c) => (
            <div
              key={c.n}
              className="p-8 rounded-2xl"
              style={{
                background: "oklch(1 0 0 / 0.04)",
                border: "1px solid oklch(1 0 0 / 0.1)",
              }}
            >
              <div
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 56,
                  color: "var(--onmid-lime)",
                  lineHeight: 1,
                }}
              >
                {c.n}
              </div>
              <div
                className="font-black mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  color: "oklch(0.98 0 0)",
                  letterSpacing: "-0.02em",
                }}
              >
                {c.t}
              </div>
              <p
                className="mt-3"
                style={{
                  fontSize: 22,
                  color: "oklch(1 0 0 / 0.65)",
                  lineHeight: 1.4,
                }}
              >
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
