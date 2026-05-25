import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

const STEPS = 3; // 0: pergunta, 1: DE → PARA, 2: síntese final

const FROM_STATES = ["Dor", "Dúvida", "Desejo reprimido", "Insegurança", "Apatia"];
const TO_STATES = ["Confiança", "Entusiasmo", "Urgência", "Pertencimento", "Clareza"];

export function Slide05() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const fwd = e.key === "ArrowRight" || e.key === " " || e.key === "PageDown";
      const back = e.key === "ArrowLeft" || e.key === "PageUp";
      if (fwd && step < STEPS - 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(STEPS - 1, s + 1));
      } else if (back && step > 0) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.max(0, s - 1));
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [step]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("button") || target.closest("a") || target.closest("[role=dialog]")) return;
      if (step < STEPS - 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(STEPS - 1, s + 1));
      }
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [step]);

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="5">
      {/* Kicker */}
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
          05<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[520px]" style={{ background: "oklch(1 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(1 0 0 / 0.55)" }}
        >
          Mudança de estado
        </div>
      </div>

      {/* Body */}
      <div className="absolute left-16 right-16 top-[280px] bottom-32 z-20">
        {/* Step 0 — Title question + opener */}
        <div
          style={{
            transition: "opacity 600ms ease, transform 600ms ease",
            opacity: step === 0 ? 1 : 0.35,
            transform: step === 0 ? "translateY(0)" : "translateY(-12px)",
          }}
        >
          <h2
            className="animate-fade-in-up"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: step === 0 ? 120 : 72,
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              color: "oklch(0.98 0 0)",
              maxWidth: 1500,
              transition: "font-size 600ms ease",
            }}
          >
            O que é a{" "}
            <span
              className="px-3 inline-block"
              style={{
                background: "var(--onmid-lime)",
                color: "oklch(0.13 0.005 240)",
                transform: "skewX(-4deg)",
              }}
            >
              mudança
            </span>{" "}
            do estado emocional?
          </h2>

          {step === 0 && (
            <p
              className="mt-10 font-medium animate-fade-in-up"
              style={{
                fontSize: 36,
                lineHeight: 1.3,
                color: "oklch(1 0 0 / 0.78)",
                maxWidth: 1280,
                animationDelay: "0.2s",
              }}
            >
              Uma das estratégias mais poderosas para influenciar a decisão de
              compra: mover o cliente de um estado emocional atual para outro,
              mais propenso à ação.
            </p>
          )}
        </div>

        {/* Step 1 — DE → PARA */}
        {step >= 1 && (
          <div
            className="absolute left-0 right-0 animate-fade-in"
            style={{ top: 240 }}
          >
            <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-12">
              {/* DE */}
              <div>
                <div
                  className="uppercase font-black mb-6"
                  style={{
                    fontSize: 22,
                    letterSpacing: "0.4em",
                    color: "oklch(0.72 0.18 25 / 0.95)",
                  }}
                >
                  De
                </div>
                <div className="flex flex-wrap gap-3">
                  {FROM_STATES.map((s, i) => (
                    <span
                      key={s}
                      className="animate-fade-in-up"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 800,
                        fontSize: 36,
                        lineHeight: 1,
                        padding: "16px 24px",
                        border: "2px solid oklch(1 0 0 / 0.18)",
                        borderRadius: 999,
                        color: "oklch(1 0 0 / 0.75)",
                        textDecoration: "line-through",
                        textDecorationColor: "oklch(0.72 0.18 25 / 0.6)",
                        textDecorationThickness: 3,
                        animationDelay: `${0.05 + i * 0.06}s`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div
                className="flex items-center justify-center animate-pop-in"
                style={{ paddingTop: 40, animationDelay: "0.35s" }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 120,
                    height: 120,
                    borderRadius: 999,
                    background: "var(--onmid-lime)",
                    boxShadow: "0 20px 60px oklch(0.88 0.24 138 / 0.35)",
                  }}
                >
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="oklch(0.13 0.005 240)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* PARA */}
              <div>
                <div
                  className="uppercase font-black mb-6"
                  style={{
                    fontSize: 22,
                    letterSpacing: "0.4em",
                    color: "var(--onmid-lime)",
                  }}
                >
                  Para
                </div>
                <div className="flex flex-wrap gap-3">
                  {TO_STATES.map((s, i) => (
                    <span
                      key={s}
                      className="animate-fade-in-up"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 900,
                        fontSize: 36,
                        lineHeight: 1,
                        padding: "16px 24px",
                        borderRadius: 999,
                        background: "var(--onmid-lime)",
                        color: "oklch(0.13 0.005 240)",
                        animationDelay: `${0.45 + i * 0.07}s`,
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 — Síntese final */}
        {step >= 2 && (
          <div
            className="absolute left-0 right-0 animate-fade-in-up"
            style={{ bottom: -10, maxWidth: 1500 }}
          >
            <div
              className="font-medium"
              style={{
                fontSize: 36,
                lineHeight: 1.25,
                color: "oklch(1 0 0 / 0.85)",
              }}
            >
              Vender é, antes de tudo,{" "}
              <span
                className="px-3 inline-block font-black"
                style={{
                  background: "var(--onmid-lime)",
                  color: "oklch(0.13 0.005 240)",
                  transform: "skewX(-4deg)",
                }}
              >
                provocar essa travessia
              </span>
              .
            </div>
          </div>
        )}
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-14 left-16 z-20 flex items-center gap-2">
        {Array.from({ length: STEPS }).map((_, i) => (
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
    </SlideLayout>
  );
}
