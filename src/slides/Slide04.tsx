import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

type TermKey = "oferta" | "proposta" | "beneficios";
const TERMS: Record<TermKey, { title: string; body: string }> = {
  oferta: {
    title: "Oferta",
    body: "É o que está sendo vendido — o produto ou serviço em si, com suas características, condições comerciais e o pacote completo que chega às mãos do cliente.",
  },
  proposta: {
    title: "Proposta",
    body: "É a promessa de valor: o motivo pelo qual aquela oferta é relevante para esse cliente específico, naquele momento, em comparação às alternativas disponíveis.",
  },
  beneficios: {
    title: "Benefícios",
    body: "São os ganhos práticos e emocionais que o cliente passa a ter ao escolher a oferta — o que muda na vida, na rotina ou no negócio dele depois da compra.",
  },
};

const STEPS = 3; // 0: p1, 1: + "Mas isso não é tudo.", 2: + frase final

export function Slide04() {
  const [step, setStep] = useState(0);
  const [openTerm, setOpenTerm] = useState<TermKey | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openTerm) {
        if (e.key === "Escape") {
          e.preventDefault();
          e.stopImmediatePropagation();
          setOpenTerm(null);
        } else if (
          e.key === "ArrowRight" ||
          e.key === " " ||
          e.key === "PageDown" ||
          e.key === "ArrowLeft" ||
          e.key === "PageUp"
        ) {
          // bloqueia avanço/volta de slide enquanto modal está aberto
          e.preventDefault();
          e.stopImmediatePropagation();
        }
        return;
      }
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
  }, [step, openTerm]);

  // Click capture: intercepts slide advance to step through internal states first.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // ignore clicks on interactive elements (term buttons, modal, chrome)
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role=dialog]")
      )
        return;
      if (openTerm) return;
      if (step < STEPS - 1) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setStep((s) => Math.min(STEPS - 1, s + 1));
      }
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [step, openTerm]);

  return (
    <SlideLayout variant="content" tone="light" bgLetter="4">


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
          consideraram cuidadosamente nossa{" "}
          <TermBtn k="oferta" onOpen={setOpenTerm}>oferta</TermBtn>,{" "}
          <TermBtn k="proposta" onOpen={setOpenTerm}>proposta</TermBtn> e{" "}
          <TermBtn k="beneficios" onOpen={setOpenTerm}>benefícios</TermBtn>.
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
            <div
              className="mt-4"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 148,
                lineHeight: 1.05,
                letterSpacing: "-0.055em",
                color: "oklch(0.13 0.005 240)",
              }}
            >
              <div className="flex flex-col items-start gap-3">
                <span
                  className="glitch px-4"
                  data-text="mudança em seu"
                  style={{
                    background: "var(--onmid-lime)",
                    transform: "skewX(-4deg)",
                    transformOrigin: "left center",
                    backfaceVisibility: "hidden",
                  }}
                >
                  mudança em seu
                </span>
                <span
                  className="glitch px-4"
                  data-text="estado emocional."
                  style={{
                    background: "var(--onmid-lime)",
                    transform: "skewX(-4deg)",
                    transformOrigin: "left center",
                    backfaceVisibility: "hidden",
                  }}
                >
                  estado emocional.
                </span>
              </div>
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
              background:
                i <= step ? "var(--onmid-lime)" : "oklch(0 0 0 / 0.15)",
            }}
          />
        ))}
      </div>

      {/* Term modal */}
      {openTerm && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in"
          style={{ background: "oklch(0.13 0.005 240 / 0.55)", backdropFilter: "blur(8px)" }}
          onClick={() => setOpenTerm(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="relative animate-scale-in"
            style={{
              width: 880,
              maxWidth: "90%",
              background: "oklch(0.985 0.004 90)",
              color: "oklch(0.13 0.005 240)",
              padding: "72px 80px",
              borderRadius: 8,
              boxShadow: "0 60px 120px oklch(0 0 0 / 0.45)",
              borderTop: "8px solid var(--onmid-lime)",
            }}
          >
            <button
              onClick={() => setOpenTerm(null)}
              aria-label="Fechar"
              className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center hover:opacity-70 transition"
              style={{ background: "oklch(0 0 0 / 0.06)", fontSize: 22 }}
            >
              ×
            </button>
            <div
              className="uppercase font-bold mb-4"
              style={{
                fontSize: 14,
                letterSpacing: "0.35em",
                color: "oklch(0.18 0.01 240 / 0.55)",
              }}
            >
              Definição
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 96,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                marginBottom: 24,
              }}
            >
              {TERMS[openTerm].title}
              <span className="text-lime">.</span>
            </h3>
            <p
              className="font-medium"
              style={{
                fontSize: 28,
                lineHeight: 1.4,
                color: "oklch(0.18 0.01 240 / 0.82)",
              }}
            >
              {TERMS[openTerm].body}
            </p>
          </div>
        </div>
      )}
    </SlideLayout>
  );
}

function TermBtn({
  k,
  onOpen,
  children,
}: {
  k: TermKey;
  onOpen: (k: TermKey) => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onOpen(k);
      }}
      className="relative font-black inline-block transition-transform hover:-translate-y-0.5"
      style={{
        color: "oklch(0.13 0.005 240)",
        backgroundImage:
          "linear-gradient(var(--onmid-lime), var(--onmid-lime))",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 38%",
        backgroundPosition: "0 88%",
        padding: "0 6px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}
