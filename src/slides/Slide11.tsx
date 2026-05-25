import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

type Pillar = {
  ord: string;
  kicker: string;
  question: string;
  answer: string;
  tags: string[];
  highlight?: boolean;
};

const PILLARS: Pillar[] = [
  {
    ord: "01",
    kicker: "Análise",
    question: "Como analisar o lead?",
    answer:
      "Cruzamos sinais que revelam contexto, intenção e poder de decisão antes do primeiro contato.",
    tags: ["Origem", "Horário", "Gênero", "Idade", "Localização", "Fotos"],
  },
  {
    ord: "02",
    kicker: "Discurso",
    question: "O que dizer para o lead?",
    answer:
      "Um discurso que constrói autoridade sem soar arrogante. Empatia primeiro, técnica depois.",
    tags: [
      "Sinceridade",
      "Confiança",
      "Segurança",
      "Autoridade",
      "Superioridade",
      "Empatia",
    ],
  },
  {
    ord: "03",
    kicker: "Qualificação",
    question: "Quais informações qualificam o lead?",
    answer:
      "As perguntas certas separam curiosos de compradores reais — e direcionam toda a conversa.",
    tags: [
      "Entendeu o anúncio?",
      "Está no momento de compra?",
      "O que impossibilitou até hoje?",
      "Topa um desafio?",
    ],
    highlight: true,
  },
];

export function Slide11() {
  const TOTAL = PILLARS.length;
  const [step, setStep] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const fwd = e.key === "ArrowRight" || e.key === " " || e.key === "PageDown";
      const back = e.key === "ArrowLeft" || e.key === "PageUp";
      if (fwd && step < TOTAL) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(TOTAL, s + 1));
      } else if (back && step > 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.max(0, s - 1));
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [step, TOTAL]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("[role=dialog]")) return;
      if (step < TOTAL) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(TOTAL, s + 1));
      }
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [step, TOTAL]);

  const current = step > 0 ? PILLARS[step - 1] : null;
  const isHighlight = current?.highlight ?? false;

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="P">
      {/* Header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-30">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.98 0 0)",
          }}
        >
          11<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[420px]" style={{ background: "oklch(1 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(1 0 0 / 0.55)" }}
        >
          Planejamento · Os 3 pilares
        </div>
      </div>

      {/* Título lateral vertical */}
      <div
        className="absolute z-20 animate-fade-in-up"
        style={{
          left: 64,
          top: 260,
          animationDelay: "0.1s",
        }}
      >
        <div
          className="uppercase font-black"
          style={{
            fontSize: 18,
            letterSpacing: "0.32em",
            color: "var(--onmid-lime)",
            marginBottom: 16,
          }}
        >
          O método
        </div>
        <h1
          className="font-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 130,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            color: "oklch(0.98 0 0)",
          }}
        >
          Plane
          <br />
          <span className="italic" style={{ fontWeight: 300 }}>
            jamento
          </span>
        </h1>
      </div>

      {/* HERO da pergunta atual (lado direito) */}
      <div
        className="absolute z-20"
        style={{
          left: "44%",
          right: 64,
          top: 240,
          bottom: 340,
        }}
      >
        {current ? (
          <div
            key={step}
            className="relative h-full flex flex-col animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            {/* Ondas se highlight */}
            {isHighlight && (
              <>
                {[0, 0.25, 0.5].map((delay, idx) => (
                  <span
                    key={`ring-${idx}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: 420,
                      height: 420,
                      left: -60,
                      top: -40,
                      border: "2px solid var(--onmid-lime)",
                      opacity: 0,
                      animation: `pillar-ring 2.2s ease-out ${delay}s infinite`,
                    }}
                  />
                ))}
              </>
            )}

            {/* Número gigante + kicker */}
            <div className="flex items-end gap-6 mb-6 relative z-10">
              <div
                className="font-black animate-[pop-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_both]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 200,
                  lineHeight: 0.85,
                  letterSpacing: "-0.05em",
                  color: isHighlight ? "var(--onmid-lime)" : "oklch(1 0 0 / 0.12)",
                  textShadow: isHighlight
                    ? "0 20px 60px oklch(0.84 0.18 130 / 0.4)"
                    : "none",
                }}
              >
                {current.ord}
              </div>
              <div
                className="uppercase font-black pb-6 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]"
                style={{
                  fontSize: 22,
                  letterSpacing: "0.32em",
                  color: isHighlight ? "var(--onmid-lime)" : "oklch(1 0 0 / 0.6)",
                }}
              >
                {current.kicker}
              </div>
            </div>

            {/* Pergunta */}
            <h2
              className="font-black mb-5 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 64,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "oklch(0.98 0 0)",
              }}
            >
              {current.question}
            </h2>

            {/* Resposta */}
            <p
              className="mb-7 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]"
              style={{
                fontSize: 24,
                lineHeight: 1.35,
                color: "oklch(1 0 0 / 0.75)",
                maxWidth: 720,
              }}
            >
              {current.answer}
            </p>

            {/* Tags como chips */}
            <div className="flex flex-wrap gap-3 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.4s_both]">
              {current.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="rounded-full font-bold"
                  style={{
                    padding: "10px 20px",
                    fontSize: 16,
                    background: isHighlight
                      ? "var(--onmid-lime)"
                      : "oklch(1 0 0 / 0.08)",
                    color: isHighlight
                      ? "oklch(0.13 0.005 240)"
                      : "oklch(0.98 0 0)",
                    border: isHighlight
                      ? "none"
                      : "1px solid oklch(1 0 0 / 0.12)",
                    animation: `chip-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.5 + idx * 0.07}s both`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="h-full flex items-center justify-start animate-fade-in"
            style={{
              fontSize: 28,
              color: "oklch(1 0 0 / 0.4)",
              letterSpacing: "0.05em",
            }}
          >
            Clique para revelar os 3 pilares →
          </div>
        )}
      </div>

      {/* Trilha inferior — 3 pilares como chips conectados */}
      <div
        className="absolute z-20"
        style={{ left: 64, right: 64, bottom: 110 }}
      >
        {/* Linha conectora */}
        <div
          className="absolute"
          style={{
            left: 60,
            right: 60,
            top: 38,
            height: 2,
            background:
              "repeating-linear-gradient(to right, oklch(1 0 0 / 0.18) 0 8px, transparent 8px 16px)",
          }}
        />

        <div className="relative grid grid-cols-3 gap-6">
          {PILLARS.map((p, i) => {
            const revealed = i < step;
            const isCurrent = i === step - 1;
            return (
              <div
                key={i}
                className="flex items-center gap-4"
                style={{
                  opacity: revealed ? 1 : 0.3,
                  filter: revealed ? "none" : "saturate(0.2) blur(5px)",
                  transition:
                    "opacity 500ms ease, filter 500ms ease, transform 400ms ease",
                  transform: isCurrent ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                <div
                  className="rounded-2xl flex items-center justify-center font-black shrink-0"
                  style={{
                    width: 76,
                    height: 76,
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    background:
                      isCurrent && p.highlight
                        ? "var(--onmid-lime)"
                        : isCurrent
                        ? "oklch(0.98 0 0)"
                        : revealed && p.highlight
                        ? "var(--onmid-lime)"
                        : "oklch(1 0 0 / 0.08)",
                    color:
                      (isCurrent && !p.highlight) || (!isCurrent && !p.highlight)
                        ? isCurrent
                          ? "oklch(0.13 0.005 240)"
                          : "oklch(0.98 0 0)"
                        : "oklch(0.13 0.005 240)",
                    border:
                      revealed || isCurrent
                        ? "none"
                        : "2px solid oklch(1 0 0 / 0.15)",
                    boxShadow: isCurrent
                      ? "0 16px 40px oklch(0.84 0.18 130 / 0.4)"
                      : "none",
                    letterSpacing: "-0.04em",
                    transition: "all 400ms ease",
                  }}
                >
                  {p.ord}
                </div>
                <div className="min-w-0">
                  <div
                    className="uppercase font-black mb-1"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.28em",
                      color: isCurrent
                        ? "var(--onmid-lime)"
                        : "oklch(1 0 0 / 0.5)",
                    }}
                  >
                    {p.kicker}
                  </div>
                  <div
                    className="font-bold truncate"
                    style={{
                      fontSize: 18,
                      lineHeight: 1.2,
                      color: "oklch(0.98 0 0)",
                    }}
                  >
                    {p.question}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-14 left-16 z-30 flex items-center gap-2">
        {Array.from({ length: TOTAL + 1 }).map((_, i) => (
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
        @keyframes pillar-ring {
          0%   { transform: scale(0.85); opacity: 0.45; }
          80%  { opacity: 0; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes chip-pop {
          0%   { opacity: 0; transform: translateY(10px) scale(0.92); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </SlideLayout>
  );
}
