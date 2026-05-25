import { useEffect, useState } from "react";
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
  // step: 0 = nenhuma etapa ativa | 1..STEPS.length = etapas reveladas
  const STEPS_COUNT = STEPS.length;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const fwd = e.key === "ArrowRight" || e.key === " " || e.key === "PageDown";
      const back = e.key === "ArrowLeft" || e.key === "PageUp";
      if (fwd && step < STEPS_COUNT) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(STEPS_COUNT, s + 1));
      } else if (back && step > 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.max(0, s - 1));
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [step, STEPS_COUNT]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("[role=dialog]")) return;
      if (step < STEPS_COUNT) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(STEPS_COUNT, s + 1));
      }
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [step, STEPS_COUNT]);

  return (
    <SlideLayout variant="content" tone="light" bgLetter="7">
      {/* Header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-20">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.13 0.005 240)",
          }}
        >
          07<span className="text-lime">.</span>
        </div>
        <div
          className="flex-1 h-px max-w-[460px]"
          style={{ background: "oklch(0 0 0 / 0.15)" }}
        />
        <div
          className="uppercase font-bold mr-auto"
          style={{
            fontSize: 18,
            letterSpacing: "0.35em",
            color: "oklch(0.13 0.005 240 / 0.55)",
          }}
        >
          Fluxo de anúncios
        </div>
      </div>

      {/* Title (top, mais compacto) */}
      <div
        className="absolute left-16 right-16 animate-fade-in-up z-20"
        style={{ top: 260, animationDelay: "0.1s" }}
      >
        <div
          className="uppercase font-black mb-3"
          style={{
            fontSize: 20,
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
            fontSize: 80,
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

      {/* HERO: etapa atual em destaque no centro */}
      <div
        className="absolute z-20"
        style={{ left: "8%", right: "8%", top: 460, height: 360 }}
      >
        {step === 0 ? (
          <div
            className="h-full flex items-center justify-center text-center animate-fade-in"
            style={{
              fontSize: 28,
              color: "oklch(1 0 0 / 0.45)",
              letterSpacing: "0.05em",
            }}
          >
            Clique para avançar pelas etapas →
          </div>
        ) : (
          (() => {
            const current = STEPS[step - 1];
            const isFinal = step === STEPS_COUNT;
            return (
              <div
                key={step}
                className="h-full flex items-center gap-16 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
              >
                {/* Big badge */}
                <div
                  className="rounded-full flex items-center justify-center font-black relative shrink-0 animate-[pop-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_both]"
                  style={{
                    width: 280,
                    height: 280,
                    fontFamily: "var(--font-display)",
                    fontSize: 140,
                    background:
                      current.accent || isFinal
                        ? "var(--onmid-lime)"
                        : "oklch(1 0 0 / 0.06)",
                    color:
                      current.accent || isFinal
                        ? "oklch(0.13 0.005 240)"
                        : "oklch(0.98 0 0)",
                    border:
                      current.accent || isFinal
                        ? "none"
                        : "2px solid oklch(1 0 0 / 0.2)",
                    boxShadow:
                      current.accent || isFinal
                        ? "0 30px 80px oklch(0.84 0.18 130 / 0.45)"
                        : "0 30px 80px oklch(0 0 0 / 0.5)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {/* Ondas concêntricas em todas as etapas */}
                  {[0, 0.25, 0.5].map((delay, idx) => (
                    <span
                      key={`ring-${idx}`}
                      className="absolute rounded-full pointer-events-none"
                      style={{
                        inset: 0,
                        border: "2px solid var(--onmid-lime)",
                        opacity: 0,
                        animation: `success-ring 1.8s ease-out ${delay}s infinite`,
                      }}
                    />
                  ))}
                  {/* Faíscas extras apenas no fechamento (5º) */}
                  {isFinal &&
                    Array.from({ length: 10 }).map((_, idx) => {
                      const angle = (idx / 10) * Math.PI * 2;
                      const dist = 200;
                      return (
                        <span
                          key={`spark-${idx}`}
                          className="absolute rounded-full pointer-events-none"
                          style={{
                            width: 6,
                            height: 6,
                            left: "50%",
                            top: "50%",
                            background: "var(--onmid-lime)",
                            opacity: 0,
                            animation: `success-spark 1.1s ease-out ${0.15 + (idx % 5) * 0.05}s both`,
                            ["--x" as string]: `${Math.cos(angle) * dist}px`,
                            ["--y" as string]: `${Math.sin(angle) * dist}px`,
                          }}
                        />
                      );
                    })}
                  {current.ord}
                  {current.accent && (
                    <span
                      className="absolute"
                      style={{
                        right: -28,
                        top: -22,
                        fontSize: 140,
                        fontWeight: 900,
                        color: "var(--onmid-lime)",
                        WebkitTextStroke: "6px oklch(0.13 0.005 240)",
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      ?
                    </span>
                  )}
                </div>

                {/* Title + description */}
                <div className="flex-1">
                  <div
                    className="font-black mb-5"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 96,
                      lineHeight: 0.95,
                      letterSpacing: "-0.035em",
                      color: current.accent || isFinal
                        ? "var(--onmid-lime)"
                        : "oklch(0.98 0 0)",
                    }}
                  >
                    {current.title}
                  </div>
                  <p
                    style={{
                      fontSize: 30,
                      lineHeight: 1.3,
                      color: "oklch(1 0 0 / 0.78)",
                      maxWidth: 820,
                    }}
                  >
                    {current.desc}
                  </p>
                </div>
              </div>
            );
          })()
        )}
      </div>

      {/* TIMELINE inferior — chips compactos das 5 etapas */}
      <div
        className="absolute left-16 right-16 z-20"
        style={{ bottom: 110 }}
      >
        {/* Linha conectora */}
        <div
          className="absolute"
          style={{
            left: 40,
            right: 40,
            top: 28,
            height: 2,
            background:
              "repeating-linear-gradient(to right, oklch(1 0 0 / 0.18) 0 8px, transparent 8px 16px)",
          }}
        />

        <div className="relative grid grid-cols-5 gap-4">
          {STEPS.map((s, i) => {
            const revealed = i < step;
            const current = i === step - 1;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center"
                style={{
                  opacity: revealed ? 1 : 0.3,
                  filter: revealed ? "none" : "saturate(0.3) blur(6px)",
                  transition:
                    "opacity 500ms ease, filter 500ms ease, transform 400ms ease",
                  transform: current ? "translateY(-4px)" : "translateY(0)",
                }}
              >
                <div
                  className="rounded-full flex items-center justify-center font-black mb-3"
                  style={{
                    width: 56,
                    height: 56,
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    background:
                      current && s.accent
                        ? "var(--onmid-lime)"
                        : current
                        ? "oklch(0.98 0 0)"
                        : revealed && s.accent
                        ? "var(--onmid-lime)"
                        : "oklch(0.13 0.005 240)",
                    color:
                      current && !s.accent
                        ? "oklch(0.13 0.005 240)"
                        : s.accent && revealed
                        ? "oklch(0.13 0.005 240)"
                        : "oklch(0.98 0 0)",
                    border: revealed
                      ? "none"
                      : "2px solid oklch(1 0 0 / 0.2)",
                    boxShadow: current
                      ? "0 10px 30px oklch(0.84 0.18 130 / 0.4)"
                      : "none",
                    letterSpacing: "-0.04em",
                    transition: "all 400ms ease",
                  }}
                >
                  {s.ord}
                </div>
                <div
                  className="font-bold uppercase"
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.15em",
                    color: current
                      ? "var(--onmid-lime)"
                      : "oklch(1 0 0 / 0.7)",
                  }}
                >
                  {s.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-14 left-16 z-30 flex items-center gap-2">
        {Array.from({ length: STEPS_COUNT + 1 }).map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all"
            style={{
              width: i === step ? 32 : 12,
              background: i <= step ? "var(--onmid-lime)" : "oklch(1 0 0 / 0.18)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes success-ring {
          0%   { transform: scale(0.9); opacity: 0.55; }
          80%  { opacity: 0; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes success-spark {
          0%   { transform: translate(-50%, -50%) translate(0, 0) scale(0.6); opacity: 0; }
          25%  { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(0.4); opacity: 0; }
        }
      `}</style>
    </SlideLayout>
  );
}
