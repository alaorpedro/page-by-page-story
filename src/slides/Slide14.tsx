import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

const STEPS = [
  "Analisei",
  "Apresentei",
  "Venci objeções / argumentei",
  "Mas não fechei…",
];

export function Slide14() {
  const [revealed, setRevealed] = useState(0);
  const [punchline, setPunchline] = useState(false);

  useEffect(() => {
    const timers: number[] = [];
    // Checklist: cada item entra com ~450ms de intervalo
    STEPS.forEach((_, i) => {
      timers.push(
        window.setTimeout(() => setRevealed((r) => Math.max(r, i + 1)), 400 + i * 450),
      );
    });
    // Punchline depois do último item
    timers.push(
      window.setTimeout(() => setPunchline(true), 400 + STEPS.length * 450 + 350),
    );
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="$">
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
          14<span style={{ color: "var(--onmid-lime)" }}>.</span>
        </div>
        <div className="flex-1 h-px max-w-[420px]" style={{ background: "oklch(1 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(1 0 0 / 0.55)" }}
        >
          A desculpa preferida do vendedor
        </div>
      </div>

      {/* Bloco principal */}
      <div className="absolute inset-0 px-[7%] flex items-center">
        <div className="w-full max-w-[1700px]">
          {/* Kicker "SE EU:" */}
          <div
            className="flex items-center gap-5 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.05s" }}
          >
            <span
              className="rounded-full"
              style={{
                width: 14,
                height: 14,
                background: "var(--onmid-lime)",
                boxShadow: "0 0 18px oklch(0.84 0.18 130 / 0.8)",
              }}
            />
            <span
              className="uppercase font-black"
              style={{
                fontSize: 28,
                letterSpacing: "0.4em",
                color: "var(--onmid-lime)",
              }}
            >
              Se eu
            </span>
          </div>

          {/* Checklist */}
          <ul className="space-y-5">
            {STEPS.map((label, i) => {
              const on = i < revealed;
              const isLast = i === STEPS.length - 1;
              return (
                <li
                  key={label}
                  className="flex items-center gap-8"
                  style={{
                    opacity: on ? 1 : 0,
                    transform: on ? "translateX(0)" : "translateX(-30px)",
                    transition:
                      "opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                >
                  {/* Checkbox */}
                  <span
                    className="relative shrink-0 flex items-center justify-center"
                    style={{
                      width: 76,
                      height: 76,
                      borderRadius: 16,
                      background: on && !isLast ? "var(--onmid-lime)" : "transparent",
                      border: on && !isLast
                        ? "none"
                        : "3px solid oklch(1 0 0 / 0.35)",
                      transition: "background 400ms ease, border 400ms ease",
                      boxShadow: on && !isLast
                        ? "0 16px 40px oklch(0.84 0.18 130 / 0.35)"
                        : "none",
                    }}
                  >
                    {on && !isLast && (
                      <svg
                        viewBox="0 0 24 24"
                        width="40"
                        height="40"
                        fill="none"
                        stroke="oklch(0.13 0.005 240)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          animation: "check-draw 0.45s ease-out 0.05s both",
                          strokeDasharray: 30,
                          strokeDashoffset: 30,
                        }}
                      >
                        <polyline points="4,12 10,18 20,6" />
                      </svg>
                    )}
                    {on && isLast && (
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 56,
                          fontWeight: 900,
                          color: "oklch(1 0 0 / 0.45)",
                          lineHeight: 1,
                          marginTop: -4,
                        }}
                      >
                        ?
                      </span>
                    )}
                  </span>

                  {/* Texto */}
                  <span
                    className="uppercase font-black"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: isLast ? 68 : 64,
                      lineHeight: 1.05,
                      letterSpacing: "-0.025em",
                      color: isLast && on ? "oklch(1 0 0 / 0.6)" : "oklch(0.98 0 0)",
                      fontStyle: isLast ? "italic" : "normal",
                    }}
                  >
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>

          {/* Punchline */}
          <div
            className="mt-16 relative"
            style={{
              opacity: punchline ? 1 : 0,
              transform: punchline ? "translateY(0) scale(1)" : "translateY(30px) scale(0.92)",
              transition:
                "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.34,1.56,0.64,1)",
            }}
          >
            {/* Barra lateral lime */}
            <span
              aria-hidden
              className="absolute left-0 top-2 bottom-2 rounded-full"
              style={{
                width: 8,
                background: "var(--onmid-lime)",
                boxShadow: "0 0 24px oklch(0.84 0.18 130 / 0.6)",
              }}
            />
            <h2
              className="uppercase font-black pl-12"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 104,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                color: "oklch(0.98 0 0)",
              }}
            >
              Só pode ser o{" "}
              <span
                className="relative inline-block"
                style={{
                  color: "oklch(0.13 0.005 240)",
                  background: "var(--onmid-lime)",
                  padding: "0 22px",
                  transform: "rotate(-1.5deg)",
                  display: "inline-block",
                  boxShadow:
                    "0 20px 50px oklch(0.84 0.18 130 / 0.4), inset 0 -8px 0 oklch(0 0 0 / 0.08)",
                }}
              >
                preço
              </span>
              <span style={{ color: "var(--onmid-lime)" }}>…</span>
            </h2>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes check-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </SlideLayout>
  );
}
