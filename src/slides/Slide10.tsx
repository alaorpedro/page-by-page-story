import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

export function Slide10() {
  // 0 = só pergunta | 1 = revela AGORA com splash
  const [step, setStep] = useState(0);
  const MAX = 1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const fwd = e.key === "ArrowRight" || e.key === " " || e.key === "PageDown";
      const back = e.key === "ArrowLeft" || e.key === "PageUp";
      if (fwd && step < MAX) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(MAX, s + 1));
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
      if (step < MAX) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(MAX, s + 1));
      }
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [step]);

  const revealed = step >= 1;

  return (
    <SlideLayout variant="statement" tone="light" bgLetter="?">
      {/* Header chrome */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-30">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.13 0.005 240)",
          }}
        >
          10<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[420px]" style={{ background: "oklch(0 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(0.13 0.005 240 / 0.55)" }}
        >
          O momento da abordagem
        </div>
      </div>

      {/* Conteúdo central */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 z-20">
        {/* Pergunta */}
        <div
          className="text-center uppercase font-bold animate-fade-in-up"
          style={{
            fontSize: 44,
            letterSpacing: "0.04em",
            color: "oklch(0.13 0.005 240 / 0.78)",
            lineHeight: 1.15,
            maxWidth: 1200,
            transition: "transform 700ms cubic-bezier(0.22,1,0.36,1), opacity 500ms ease",
            transform: revealed ? "translateY(-32px) scale(0.95)" : "translateY(0)",
            opacity: revealed ? 0.55 : 1,
          }}
        >
          Qual o momento certo para falar
          <br />
          com nossos leads?
        </div>

        {/* AGORA com splash */}
        <div
          className="relative flex items-center justify-center"
          style={{ marginTop: 8, minHeight: 380 }}
        >
          {!revealed ? (
            <div
              className="uppercase font-bold animate-fade-in"
              style={{
                fontSize: 22,
                letterSpacing: "0.35em",
                color: "oklch(0.13 0.005 240 / 0.4)",
                marginTop: 60,
              }}
            >
              Clique para revelar →
            </div>
          ) : (
            <div
              key="agora"
              className="relative flex items-center justify-center animate-[pop-in_0.7s_cubic-bezier(0.34,1.56,0.64,1)_both]"
            >
              {/* Ondas concêntricas */}
              {[0, 0.25, 0.5].map((delay, idx) => (
                <span
                  key={`ring-${idx}`}
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width: 560,
                    height: 560,
                    border: "3px solid var(--onmid-lime)",
                    opacity: 0,
                    animation: `now-ring 2s ease-out ${delay}s infinite`,
                  }}
                />
              ))}
              {/* Faíscas em 360° */}
              {Array.from({ length: 14 }).map((_, idx) => {
                const angle = (idx / 14) * Math.PI * 2;
                const dist = 360;
                return (
                  <span
                    key={`spark-${idx}`}
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: 10,
                      height: 10,
                      left: "50%",
                      top: "50%",
                      background: "var(--onmid-lime)",
                      opacity: 0,
                      animation: `now-spark 1.2s ease-out ${0.2 + (idx % 7) * 0.04}s both`,
                      ["--x" as string]: `${Math.cos(angle) * dist}px`,
                      ["--y" as string]: `${Math.sin(angle) * dist}px`,
                    }}
                  />
                );
              })}
              {/* Halo de fundo */}
              <span
                className="absolute rounded-full pointer-events-none"
                style={{
                  width: 720,
                  height: 720,
                  background:
                    "radial-gradient(circle, oklch(0.88 0.24 138 / 0.35) 0%, transparent 65%)",
                  filter: "blur(20px)",
                  animation: "now-halo 2.4s ease-in-out infinite",
                }}
              />

              {/* AGORA */}
              <h1
                className="italic relative z-10"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 320,
                  lineHeight: 1,
                  fontWeight: 900,
                  letterSpacing: "-0.05em",
                  color: "var(--onmid-lime)",
                  WebkitTextStroke: "3px oklch(0.13 0.005 240)",
                  textShadow: "0 30px 80px oklch(0.84 0.18 130 / 0.5)",
                }}
              >
                AGORA<span style={{ color: "oklch(0.13 0.005 240)" }}>!</span>
              </h1>
            </div>
          )}
        </div>

        {/* Subtexto pós-revelação */}
        {revealed && (
          <div
            className="text-center uppercase font-bold animate-[fade-in-up_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_both]"
            style={{
              fontSize: 18,
              letterSpacing: "0.4em",
              color: "oklch(0.13 0.005 240 / 0.6)",
              marginTop: 32,
            }}
          >
            O lead está aqui · O contexto é hoje · A janela é curta
          </div>
        )}
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-14 left-16 z-30 flex items-center gap-2">
        {Array.from({ length: MAX + 1 }).map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all"
            style={{
              width: i === step ? 32 : 12,
              background: i <= step ? "var(--onmid-lime)" : "oklch(0.13 0.005 240 / 0.18)",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes now-ring {
          0%   { transform: scale(0.6); opacity: 0.6; }
          80%  { opacity: 0; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes now-spark {
          0%   { transform: translate(-50%, -50%) translate(0, 0) scale(0.5); opacity: 0; }
          20%  { opacity: 1; }
          100% { transform: translate(-50%, -50%) translate(var(--x), var(--y)) scale(0.3); opacity: 0; }
        }
        @keyframes now-halo {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.1); }
        }
      `}</style>
    </SlideLayout>
  );
}
