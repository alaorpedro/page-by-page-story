import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

const STEPS = 3; // 0: p1, 1: + "Mas isso não é tudo.", 2: + frase final

export function Slide04() {
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
    window.addEventListener("keydown", onKey, true); // capture phase, beats Presentation
    return () => window.removeEventListener("keydown", onKey, true);
  }, [step]);

  const onClick = () => setStep((s) => Math.min(STEPS - 1, s + 1));

  return (
    <SlideLayout variant="content" tone="light" bgLetter="4">
      {/* click overlay to advance internal steps */}
      {step < STEPS - 1 && (
        <button
          aria-label="Avançar"
          onClick={onClick}
          className="absolute inset-0 z-10 cursor-pointer"
          style={{ background: "transparent" }}
        />
      )}

      {/* Section kicker */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-20">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.18 0.01 240)",
          }}
        >
          04<span className="text-lime">.</span>
        </div>
        <div
          className="flex-1 h-px max-w-[600px]"
          style={{ background: "oklch(0 0 0 / 0.12)" }}
        />
        <div
          className="uppercase font-bold mr-auto"
          style={{
            fontSize: 18,
            letterSpacing: "0.35em",
            color: "oklch(0.18 0.01 240 / 0.55)",
          }}
        >
          Nossa Crença
        </div>
      </div>

      {/* Body */}
      <div className="absolute left-16 right-16 top-[300px] bottom-32 max-w-[1400px] z-20">
        {/* Step 0 — first paragraph */}
        <p
          key={`p1-${step}`}
          className="font-medium animate-fade-in-up"
          style={{
            fontSize: 44,
            lineHeight: 1.28,
            color:
              step === 0
                ? "oklch(0.13 0.005 240)"
                : "oklch(0.18 0.01 240 / 0.45)",
            transition: "color 600ms ease",
          }}
        >
          Nós acreditamos que os clientes tomam decisões de compra porque
          consideraram cuidadosamente nossa oferta, proposta e benefícios.
        </p>

        {/* Step 1 — "Mas isso não é tudo." */}
        {step >= 1 && (
          <p
            key={`p2-${step}`}
            className="mt-12 animate-fade-in-up"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: step === 1 ? 132 : 96,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              color:
                step === 1
                  ? "oklch(0.13 0.005 240)"
                  : "oklch(0.18 0.01 240 / 0.45)",
              transition: "font-size 600ms ease, color 600ms ease",
            }}
          >
            Mas isso não é tudo.
          </p>
        )}

        {/* Step 2 — final sentence with HUGE highlighted phrase */}
        {step >= 2 && (
          <div className="mt-12 animate-fade-in-up">
            <p
              className="font-medium"
              style={{
                fontSize: 40,
                lineHeight: 1.25,
                color: "oklch(0.13 0.005 240)",
              }}
            >
              Decisões de compra são sempre o resultado de uma
            </p>
            <p
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 148,
                lineHeight: 0.92,
                letterSpacing: "-0.055em",
                color: "oklch(0.13 0.005 240)",
              }}
            >
              <span
                className="px-4 inline-block"
                style={{
                  background: "var(--onmid-lime)",
                  transform: "skewX(-4deg)",
                }}
              >
                mudança em seu
              </span>
              <br />
              <span
                className="px-4 inline-block"
                style={{
                  background: "var(--onmid-lime)",
                  transform: "skewX(-4deg)",
                }}
              >
                estado emocional.
              </span>
            </p>
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
              background:
                i <= step ? "var(--onmid-lime)" : "oklch(0 0 0 / 0.15)",
            }}
          />
        ))}
      </div>
    </SlideLayout>
  );
}
