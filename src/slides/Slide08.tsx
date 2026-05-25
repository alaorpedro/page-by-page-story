import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";

const MESSAGES: { text: React.ReactNode; bold?: boolean }[] = [
  { text: "Fala Alaor, tudo bem?" },
  {
    text: (
      <>
        Aqui é o Beto da{" "}
        <span
          style={{
            display: "inline-block",
            width: 160,
            height: 26,
            background: "oklch(0.55 0.01 240)",
            borderRadius: 6,
            verticalAlign: "middle",
            filter: "blur(2px)",
          }}
        />
        , você clicou no nosso anúncio do{" "}
        <span className="font-bold" style={{ color: "var(--onmid-lime)" }}>
          Yamaha P-121
        </span>
        , ele está com uma condição especial para o mês de outubro em até{" "}
        <span className="font-bold">12x sem Juros</span> ou a vista com{" "}
        <span className="font-bold">15% de desconto</span>.
      </>
    ),
  },
  {
    text: (
      <>
        Vi no seu instagram que você toca na igreja, e tenho outras opções
        que podem te atender melhor, principalmente com{" "}
        <span className="font-bold">pads e controladores</span>.
      </>
    ),
  },
  { text: "Posso te enviar por aqui as opções?" },
  {
    bold: true,
    text: (
      <>
        Ou se preferir podemos agendar para você vir na loja e conhecer os
        modelos e já deixo até eles ligados aqui no showroom pra você
        experimentar
      </>
    ),
  },
];

export function Slide08() {
  const TOTAL = MESSAGES.length;
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

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="8">
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
          08<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[460px]" style={{ background: "oklch(1 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(1 0 0 / 0.55)" }}
        >
          Abordagem · Primeiro contato
        </div>
      </div>

      {/* Chat panel */}
      <div
        className="absolute z-20 mx-auto rounded-3xl flex flex-col"
        style={{
          left: "8%",
          right: "8%",
          top: 256,
          bottom: 110,
          background: "oklch(0.18 0.008 240 / 0.85)",
          border: "1px solid oklch(1 0 0 / 0.07)",
          backdropFilter: "blur(8px)",
          boxShadow: "0 40px 100px oklch(0 0 0 / 0.5)",
          padding: "28px 40px 32px",
        }}
      >
        {/* Chat header */}
        <div
          className="flex items-center gap-4 pb-5 mb-6 animate-fade-in-up"
          style={{ borderBottom: "1px solid oklch(1 0 0 / 0.08)" }}
        >
          <div
            className="rounded-full flex items-center justify-center font-black"
            style={{
              width: 56,
              height: 56,
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              fontFamily: "var(--font-display)",
              fontSize: 26,
            }}
          >
            B
          </div>
          <div className="flex-1">
            <div
              className="font-bold"
              style={{ fontSize: 22, color: "oklch(0.98 0 0)" }}
            >
              Beto · CRC
            </div>
            <div
              className="flex items-center gap-2"
              style={{ fontSize: 14, color: "oklch(1 0 0 / 0.55)" }}
            >
              <span
                className="inline-block rounded-full"
                style={{ width: 8, height: 8, background: "var(--onmid-lime)" }}
              />
              online agora
            </div>
          </div>
          <div
            className="font-mono uppercase"
            style={{ fontSize: 12, letterSpacing: "0.25em", color: "oklch(1 0 0 / 0.4)" }}
          >
            {String(Math.min(step, TOTAL)).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 flex flex-col gap-4 overflow-hidden justify-end">
          {MESSAGES.map((m, i) => {
            const revealed = i < step;
            return (
              <div
                key={i}
                className="flex"
                style={{
                  opacity: revealed ? 1 : 0,
                  transform: revealed ? "translateY(0)" : "translateY(20px)",
                  transition:
                    "opacity 500ms cubic-bezier(0.22,1,0.36,1), transform 500ms cubic-bezier(0.22,1,0.36,1)",
                  transitionDelay: revealed ? "60ms" : "0ms",
                }}
              >
                <div
                  className="rounded-3xl"
                  style={{
                    padding: "20px 28px",
                    maxWidth: "92%",
                    background: m.bold
                      ? "var(--onmid-lime)"
                      : "oklch(0.26 0.008 240)",
                    color: m.bold
                      ? "oklch(0.13 0.005 240)"
                      : "oklch(0.98 0 0)",
                    fontSize: 28,
                    lineHeight: 1.32,
                    fontWeight: m.bold ? 700 : 400,
                    borderTopLeftRadius: 8,
                    boxShadow: m.bold
                      ? "0 20px 50px oklch(0.84 0.18 130 / 0.35)"
                      : "0 14px 40px oklch(0 0 0 / 0.35)",
                  }}
                >
                  {m.text}
                </div>
              </div>
            );
          })}

          {/* Typing indicator while not finished */}
          {step < TOTAL && (
            <div className="flex animate-fade-in">
              <div
                className="rounded-3xl flex items-center gap-2"
                style={{
                  padding: "16px 22px",
                  background: "oklch(0.26 0.008 240)",
                  borderTopLeftRadius: 8,
                }}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="inline-block rounded-full"
                    style={{
                      width: 10,
                      height: 10,
                      background: "oklch(1 0 0 / 0.55)",
                      animation: `typing-bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
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
        @keyframes typing-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </SlideLayout>
  );
}
