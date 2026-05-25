import { useEffect, useState } from "react";
import brainVideo from "@/assets/brain-rotate-alpha.webm";

import { SlideLayout } from "@/components/SlideLayout";

type Stage = {
  ord: string;
  kicker: string;
  title: string;
  body: string;
  chem: string;
  tone: "alert" | "tension" | "call" | "reward";
};

const STAGES: Stage[] = [
  {
    ord: "01",
    kicker: "Estado inicial",
    title: "Cortisol & Noradrenalina",
    body: "O cliente assume a procrastinação ou a dor emocional — alerta e frustração tomam conta.",
    chem: "↑ Cortisol",
    tone: "alert",
  },
  {
    ord: "02",
    kicker: "Pressão interna",
    title: "Estado de tensão",
    body: "Ele quer sair disso. O corpo busca alívio, resolução e uma saída clara.",
    chem: "Tensão acumulada",
    tone: "tension",
  },
  {
    ord: "03",
    kicker: "Chamado à ação",
    title: "Você oferece o desafio",
    body: "A pressão vira tensão positiva: um caminho concreto de superação aparece.",
    chem: "Foco direcionado",
    tone: "call",
  },
  {
    ord: "04",
    kicker: "Decisão de compra",
    title: "O cérebro recompensa a coragem",
    body: "A ação tomada libera o coquetel químico que reforça a decisão e cria vínculo com quem guiou.",
    chem: "Dopamina · Ocitocina · Endorfina",
    tone: "reward",
  },
];

const REWARDS = [
  { name: "Dopamina", role: "motivação e prazer por agir" },
  { name: "Ocitocina", role: "vínculo com quem guiou a decisão — você" },
  { name: "Endorfina", role: "alívio emocional por sair da estagnação" },
];

export function Slide12() {
  const TOTAL = STAGES.length;
  const [step, setStep] = useState(0);
  const [intro, setIntro] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIntro(false), 5000);
    return () => clearTimeout(t);
  }, []);




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

  const current = step > 0 ? STAGES[step - 1] : null;
  const isReward = current?.tone === "reward";

  const INK = "oklch(0.13 0.005 240)";
  const INK_MUTED = "oklch(0.13 0.005 240 / 0.6)";
  const INK_FAINT = "oklch(0.13 0.005 240 / 0.12)";

  return (
    <SlideLayout variant="content" tone="light" bgLetter="N">
      {/* Brain 3D rotativo — vídeo gerado, em loop, com fade no fim */}
      {intro && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center"
        >
          <video
            src={brainVideo}
            autoPlay
            muted
            playsInline
            preload="auto"
            style={{
              width: 1200,
              height: 1200,
              objectFit: "contain",
              background: "transparent",
              animation: "brain-intro 5s cubic-bezier(0.6,0,0.25,1) both",
            }}
          />
        </div>
      )}



      {/* Header */}
      <div
        className="absolute left-16 right-16 top-44 flex items-center gap-8 z-30"
        style={{
          opacity: intro ? 0 : 1,
          transform: intro ? "translateY(-12px)" : "translateY(0)",
          transition: "opacity 600ms ease 3900ms, transform 600ms ease 3900ms",
        }}
      >

        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: INK,
          }}
        >
          12<span style={{ color: "var(--onmid-lime)" }}>.</span>
        </div>
        <div className="flex-1 h-px max-w-[420px]" style={{ background: INK_FAINT }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: INK_MUTED }}
        >
          Neuroquímica · A cascata da decisão
        </div>
      </div>

      {/* Título lateral vertical */}
      <div
        className="absolute z-20"
        style={{
          left: 64,
          top: 260,
          maxWidth: 620,
          opacity: intro ? 0 : 1,
          transform: intro ? "translateY(20px)" : "translateY(0)",
          transition: "opacity 700ms ease 4050ms, transform 700ms ease 4050ms",
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
          O que acontece
        </div>
        <h1
          className="font-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 124,
            lineHeight: 0.88,
            letterSpacing: "-0.05em",
            color: INK,
          }}
        >
          No cérebro
          <br />
          <span className="italic" style={{ fontWeight: 300 }}>
            nesse instante
          </span>
        </h1>

        {/* Label da química atual */}
        {current && (
          <div
            key={`chem-${step}`}
            className="mt-10 inline-flex uppercase font-black whitespace-nowrap animate-[fade-in-up_0.5s_cubic-bezier(0.22,1,0.36,1)_both]"
            style={{
              fontSize: 14,
              letterSpacing: "0.28em",
              color: isReward ? "var(--onmid-lime)" : INK,
              background: isReward ? INK : "oklch(0.98 0.005 90)",
              padding: "12px 20px",
              borderRadius: 999,
              border: `1px solid ${isReward ? INK : INK_FAINT}`,
              boxShadow: "0 10px 30px oklch(0 0 0 / 0.08)",
            }}
          >
            {current.chem}
          </div>
        )}
      </div>




      {/* HERO do stage (lado direito) */}
      <div
        className="absolute z-20"
        style={{
          left: "48%",
          right: 64,
          top: 240,
          bottom: 220,
          opacity: intro ? 0 : 1,
          transition: "opacity 700ms ease 4200ms",
        }}
      >

        {current ? (
          <div
            key={step}
            className="relative h-full flex flex-col animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <div className="flex items-end gap-6 mb-6">
              <div
                className="font-black animate-[pop-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_both]"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 200,
                  lineHeight: 0.85,
                  letterSpacing: "-0.05em",
                  color: isReward ? "var(--onmid-lime)" : INK_FAINT,
                  textShadow: isReward
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
                  color: isReward ? "var(--onmid-lime)" : INK_MUTED,
                }}
              >
                {current.kicker}
              </div>
            </div>

            <h2
              className="font-black mb-5 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.2s_both]"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 60,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: INK,
              }}
            >
              {current.title}
            </h2>

            <p
              className="mb-7 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]"
              style={{
                fontSize: 24,
                lineHeight: 1.4,
                color: INK_MUTED,
                maxWidth: 720,
              }}
            >
              {current.body}
            </p>

            {/* Cards de recompensa só aparecem no último stage */}
            {isReward && (
              <div className="flex flex-col gap-3">
                {REWARDS.map((r, idx) => (
                  <div
                    key={r.name}
                    className="flex items-center gap-5"
                    style={{
                      padding: "16px 22px",
                      borderRadius: 18,
                      background: "oklch(0.98 0.005 90)",
                      border: `1px solid ${INK_FAINT}`,
                      boxShadow: "0 8px 24px oklch(0 0 0 / 0.04)",
                      animation: `chip-pop 0.55s cubic-bezier(0.34,1.56,0.64,1) ${
                        0.45 + idx * 0.1
                      }s both`,
                    }}
                  >
                    <span
                      className="rounded-full shrink-0"
                      style={{
                        width: 14,
                        height: 14,
                        background: "var(--onmid-lime)",
                        boxShadow: "0 0 0 4px oklch(0.84 0.18 130 / 0.15)",
                      }}
                    />
                    <div className="flex items-baseline gap-3 min-w-0">
                      <span
                        className="font-black uppercase"
                        style={{
                          fontSize: 22,
                          letterSpacing: "0.04em",
                          color: INK,
                        }}
                      >
                        {r.name}
                      </span>
                      <span style={{ fontSize: 18, color: INK_MUTED }}>
                        {r.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div
            className="h-full flex items-center justify-start animate-fade-in"
            style={{ fontSize: 28, color: INK_MUTED, letterSpacing: "0.05em" }}
          >
            Clique para revelar a cascata química →
          </div>
        )}
      </div>

      {/* Trilha inferior — 4 estágios */}
      <div className="absolute z-20" style={{ left: 64, right: 64, bottom: 110 }}>
        <div
          className="absolute"
          style={{
            left: 40,
            right: 40,
            top: 30,
            height: 2,
            background:
              "repeating-linear-gradient(to right, oklch(0.13 0.005 240 / 0.18) 0 8px, transparent 8px 16px)",
          }}
        />
        <div className="relative grid grid-cols-4 gap-4">
          {STAGES.map((s, i) => {
            const revealed = i < step;
            const isCurrent = i === step - 1;
            const isLast = s.tone === "reward";
            return (
              <div
                key={i}
                className="flex items-center gap-3"
                style={{
                  opacity: revealed ? 1 : 0.35,
                  filter: revealed ? "none" : "saturate(0.2) blur(4px)",
                  transition: "opacity 500ms ease, filter 500ms ease, transform 400ms ease",
                  transform: isCurrent ? "translateY(-6px)" : "translateY(0)",
                }}
              >
                <div
                  className="rounded-2xl flex items-center justify-center font-black shrink-0"
                  style={{
                    width: 62,
                    height: 62,
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    background:
                      isCurrent && isLast
                        ? "var(--onmid-lime)"
                        : isCurrent
                        ? INK
                        : revealed && isLast
                        ? "var(--onmid-lime)"
                        : revealed
                        ? "oklch(0.98 0.005 90)"
                        : "transparent",
                    color:
                      (isCurrent && isLast) || (revealed && isLast)
                        ? INK
                        : isCurrent
                        ? "oklch(0.98 0 0)"
                        : INK,
                    border:
                      revealed || isCurrent ? "none" : `2px solid ${INK_FAINT}`,
                    boxShadow: isCurrent
                      ? isLast
                        ? "0 14px 36px oklch(0.84 0.18 130 / 0.4)"
                        : "0 14px 36px oklch(0 0 0 / 0.15)"
                      : "none",
                    letterSpacing: "-0.04em",
                    transition: "all 400ms ease",
                  }}
                >
                  {s.ord}
                </div>
                <div className="min-w-0">
                  <div
                    className="uppercase font-black mb-1 truncate"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.26em",
                      color: isCurrent
                        ? isLast
                          ? "var(--onmid-lime)"
                          : INK
                        : INK_MUTED,
                    }}
                  >
                    {s.kicker}
                  </div>
                  <div
                    className="font-bold truncate"
                    style={{ fontSize: 15, lineHeight: 1.2, color: INK }}
                  >
                    {s.title}
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
              background: i <= step ? "var(--onmid-lime)" : INK_FAINT,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes brain-pulse {
          0%   { transform: scale(0.85); opacity: 0.55; }
          80%  { opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @keyframes chip-pop {
          0%   { opacity: 0; transform: translateY(10px) scale(0.94); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pop-in {
          0%   { opacity: 0; transform: scale(0.7); }
          60%  { opacity: 1; transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes brain-intro {
          0%   { opacity: 0; transform: scale(0.6); filter: blur(12px); }
          8%   { opacity: 1;                        filter: blur(0); }
          80%  { opacity: 1; transform: scale(1);   filter: blur(0); }
          100% { opacity: 0; transform: scale(1.7); filter: blur(10px); }
        }

      `}</style>

    </SlideLayout>
  );
}
