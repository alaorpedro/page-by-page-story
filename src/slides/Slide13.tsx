import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

// Reveal sequence:
// 0 → setup: "Você tira o cliente do…"
// 1 → reveal "modo vítima" (estado inicial, opaco)
// 2 → tachado em "vítima" + impacto
// 3 → coloca no "modo AUTOR" (lime, pop)
// 4 → frase final completa + selo "da própria mudança"
const TOTAL = 4;

export function Slide13() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequência automática: dispara todos os passos da animação em um único frame de entrada.
    const delays = [200, 900, 1700, 2400]; // ms para steps 1, 2, 3, 4
    const timers = delays.map((d, i) =>
      window.setTimeout(() => setStep(i + 1), d),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);


  const showIntro = step >= 0;
  const showVitima = step >= 1;
  const crossVitima = step >= 2;
  const showAutor = step >= 3;
  const showOutro = step >= 4;

  return (
    <SlideLayout variant="content" tone="light" bgLetter="A">
      {/* Header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-30">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.18 0.01 240)",
          }}
        >
          13<span style={{ color: "var(--onmid-lime)" }}>.</span>
        </div>
        <div className="flex-1 h-px max-w-[420px]" style={{ background: "oklch(0 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(0.18 0.01 240 / 0.55)" }}
        >
          A virada · vítima → autor
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="absolute inset-0 flex items-center justify-center px-[7%]">
        <div className="max-w-[1700px] w-full">
          {/* Linha 1 — Você tira o cliente do */}
          <h2
            className="font-black"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "oklch(0.18 0.01 240)",
              opacity: showIntro ? 1 : 0,
              transform: showIntro ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            Você tira o cliente do
          </h2>

          {/* Linha 2 — "modo vítima" → tachado */}
          <div
            className="mt-6 flex items-baseline gap-6 flex-wrap"
            style={{
              opacity: showVitima ? 1 : 0,
              transform: showVitima ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease, transform 600ms ease",
            }}
          >
            <span
              className="font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 120,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "oklch(0.18 0.01 240 / 0.45)",
              }}
            >
              "modo
            </span>
            <span
              className="relative inline-block font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 120,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: crossVitima ? "oklch(0.18 0.01 240 / 0.3)" : "oklch(0.18 0.01 240 / 0.55)",
                transition: "color 500ms ease",
              }}
            >
              vítima"
              {/* Linha de tacho animada */}
              <span
                aria-hidden
                className="absolute left-0 top-1/2 -translate-y-1/2 h-[8px] rounded-full"
                style={{
                  background: "var(--onmid-lime)",
                  width: crossVitima ? "108%" : "0%",
                  transition: "width 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                  transformOrigin: "left center",
                  boxShadow: "0 0 24px oklch(0.84 0.18 130 / 0.6)",
                }}
              />
            </span>
            <span
              className="font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 96,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "oklch(0.18 0.01 240)",
              }}
            >
              e coloca ele no
            </span>
          </div>

          {/* Linha 3 — modo AUTOR (impacto lime) */}
          <div
            className="mt-8 flex items-baseline gap-6 flex-wrap"
            style={{
              opacity: showAutor ? 1 : 0,
              transform: showAutor ? "translateY(0) scale(1)" : "translateY(30px) scale(0.92)",
              transition:
                "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            <span
              className="font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 120,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "oklch(0.18 0.01 240)",
              }}
            >
              "modo
            </span>
            <span
              className="relative inline-block font-black uppercase"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 180,
                lineHeight: 0.95,
                letterSpacing: "-0.05em",
                color: "oklch(0.13 0.005 240)",
                padding: "0 28px",
                background: showAutor ? "var(--onmid-lime)" : "transparent",
                boxShadow: showAutor
                  ? "0 20px 60px oklch(0.84 0.18 130 / 0.45), inset 0 -10px 0 oklch(0 0 0 / 0.08)"
                  : "none",
                transform: showAutor ? "rotate(-1.5deg)" : "rotate(0)",
                transition: "transform 600ms cubic-bezier(0.34,1.56,0.64,1) 100ms",
              }}
            >
              autor
            </span>
            <span
              className="font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 96,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "oklch(0.18 0.01 240)",
              }}
            >
              da
            </span>
          </div>

          {/* Linha 4 — selo "própria mudança" */}
          <div
            className="mt-6"
            style={{
              opacity: showOutro ? 1 : 0,
              transform: showOutro ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 600ms ease 100ms, transform 600ms ease 100ms",
            }}
          >
            <h2
              className="font-black italic"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 132,
                lineHeight: 1,
                letterSpacing: "-0.045em",
                color: "oklch(0.18 0.01 240)",
              }}
            >
              própria mudança<span style={{ color: "var(--onmid-lime)" }}>.</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Legenda canto inferior esquerdo */}
      <div
        className="absolute z-30 flex items-center gap-3"
        style={{
          left: 64,
          bottom: 56,
          opacity: showOutro ? 1 : 0,
          transition: "opacity 600ms ease 300ms",
        }}
      >
        <span
          className="rounded-full"
          style={{
            width: 10,
            height: 10,
            background: "var(--onmid-lime)",
            boxShadow: "0 0 18px oklch(0.84 0.18 130 / 0.8)",
          }}
        />
        <span
          className="uppercase font-bold"
          style={{
            fontSize: 14,
            letterSpacing: "0.32em",
            color: "oklch(0.18 0.01 240 / 0.6)",
          }}
        >
          ele decide · ele age · ele assina
        </span>
      </div>

    </SlideLayout>
  );
}
