import { SlideLayout } from "@/components/SlideLayout";

type Step = {
  ord: string;
  title: string;
  desc: string;
  accent?: boolean;
};

const STEPS: Step[] = [
  {
    ord: "1º",
    title: "Descoberta",
    desc: "Dia a dia do lead, situações que encaram a realidade.",
    accent: true,
  },
  {
    ord: "2º",
    title: "A Busca",
    desc: "Lembrança da Marca (marketing), Redes Sociais, Televisão, etc...",
  },
  {
    ord: "3º",
    title: "O Contato",
    desc: "Passo de confiança, apresentação pessoal, venda da imagem do CRC.",
  },
  {
    ord: "4º",
    title: "Persuasão",
    desc: "Argumentações, quebra de objeções, escuta ativa.",
  },
  {
    ord: "5º",
    title: "Fechamento",
    desc: "Agendamento confiante, transação financeira, fidelização.",
  },
];

export function Slide07() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="7">
      {/* Header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-20">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.98 0 0)",
          }}
        >
          07<span className="text-lime">.</span>
        </div>
        <div
          className="flex-1 h-px max-w-[460px]"
          style={{ background: "oklch(1 0 0 / 0.15)" }}
        />
        <div
          className="uppercase font-bold mr-auto"
          style={{
            fontSize: 18,
            letterSpacing: "0.35em",
            color: "oklch(1 0 0 / 0.55)",
          }}
        >
          Fluxo de anúncios
        </div>
      </div>

      {/* Title */}
      <div
        className="absolute left-16 right-16 animate-fade-in-up z-20"
        style={{ top: 280, animationDelay: "0.1s" }}
      >
        <div
          className="uppercase font-black mb-4"
          style={{
            fontSize: 22,
            letterSpacing: "0.3em",
            color: "var(--onmid-lime)",
          }}
        >
          Entendendo o fluxo de
        </div>
        <h1
          className="font-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 120,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "oklch(0.98 0 0)",
          }}
        >
          Anúncios{" "}
          <span style={{ color: "oklch(1 0 0 / 0.35)" }}>/</span>{" "}
          <span className="italic" style={{ fontWeight: 300 }}>
            Divulgação
          </span>
        </h1>
      </div>

      {/* Flow row */}
      <div
        className="absolute left-16 right-16 z-20"
        style={{ bottom: 140 }}
      >
        {/* Connector line */}
        <div
          className="absolute animate-[fade-in_0.8s_ease-out_0.3s_both]"
          style={{
            left: 60,
            right: 60,
            top: 56,
            height: 2,
            background:
              "repeating-linear-gradient(to right, oklch(1 0 0 / 0.25) 0 8px, transparent 8px 16px)",
          }}
        />

        <div className="relative grid grid-cols-5 gap-6">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-start animate-fade-in-up"
              style={{ animationDelay: `${0.25 + i * 0.12}s` }}
            >
              {/* Number badge */}
              <div
                className="rounded-full flex items-center justify-center font-black mb-6 relative"
                style={{
                  width: 112,
                  height: 112,
                  fontFamily: "var(--font-display)",
                  fontSize: s.accent ? 52 : 48,
                  background: s.accent
                    ? "var(--onmid-lime)"
                    : "oklch(1 0 0 / 0.06)",
                  color: s.accent
                    ? "oklch(0.13 0.005 240)"
                    : "oklch(0.98 0 0)",
                  border: s.accent
                    ? "none"
                    : "2px solid oklch(1 0 0 / 0.18)",
                  boxShadow: s.accent
                    ? "0 20px 50px oklch(0.84 0.18 130 / 0.35)"
                    : "none",
                  letterSpacing: "-0.04em",
                }}
              >
                {s.ord}
                {s.accent && (
                  <span
                    className="absolute"
                    style={{
                      right: -14,
                      top: -10,
                      fontSize: 56,
                      fontWeight: 900,
                      color: "var(--onmid-lime)",
                      WebkitTextStroke: "3px oklch(0.13 0.005 240)",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    ?
                  </span>
                )}
              </div>

              {/* Title */}
              <div
                className="font-black mb-3"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 38,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                  color: s.accent
                    ? "var(--onmid-lime)"
                    : "oklch(0.98 0 0)",
                }}
              >
                {s.title}
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.35,
                  color: "oklch(1 0 0 / 0.65)",
                  maxWidth: 260,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
