import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";
import attendant from "@/assets/attendant-headset.png";

// Steps:
// 0 typing (início)
// 1 troca inicial educada (3 bolhas)
// 2 typing (mais tarde, mesmo dia)
// 3 mensagens finais — cliente frustrado (2 bolhas)
// 4 callout final
const STEPS = 5;

type Msg = {
  text: string;
  time: string;
  from: "client" | "company";
  group: 1 | 2; // 1 = troca inicial, 2 = finalização
};
const MESSAGES: Msg[] = [
  { text: "Boa noite", time: "08:16 PM", from: "client", group: 1 },
  { text: "Boa noite 👋", time: "08:17 PM", from: "company", group: 1 },
  { text: "Quero pedir pizza", time: "08:17 PM", from: "client", group: 1 },
  { text: "Vcs perderam cliente", time: "10:12 PM", from: "client", group: 2 },
  {
    text: "Obrigada pelas desculpas, porém não volto mais.",
    time: "10:13 PM",
    from: "client",
    group: 2,
  },
];

export function Slide06() {
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

  // step → quantas mensagens já apareceram + se mostra typing
  // 0: nada + typing | 1: grupo 1 (3 msgs) | 2: grupo 1 + typing | 3: tudo | 4: tudo + callout
  const group1Count = MESSAGES.filter((m) => m.group === 1).length;
  const visibleCount =
    step === 0 ? 0 : step === 1 || step === 2 ? group1Count : MESSAGES.length;
  const showTyping = step === 0 || step === 2;

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="6">
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
          06<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[460px]" style={{ background: "oklch(1 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(1 0 0 / 0.55)" }}
        >
          Caso real
        </div>
      </div>

      {/* iPhone mockup (left) */}
      <div
        className="absolute animate-fade-in-up z-20"
        style={{ left: 160, top: 260, animationDelay: "0.1s" }}
      >
        <Iphone visibleCount={visibleCount} showTyping={showTyping} />
      </div>

      {/* Attendant photo (right) */}
      <div
        className="absolute z-20 animate-fade-in-up"
        style={{ right: 80, top: 200, width: 720, animationDelay: "0.2s" }}
      >
        {/* Lime backdrop circle */}
        <div
          className="absolute rounded-full"
          style={{
            width: 620,
            height: 620,
            right: 40,
            top: 60,
            background: "var(--onmid-lime)",
            opacity: 0.95,
          }}
        />
        <img
          src={attendant}
          alt="Atendente com headset"
          loading="lazy"
          width={1024}
          height={1024}
          className="relative"
          style={{
            width: 720,
            height: "auto",
            filter: "drop-shadow(0 30px 60px oklch(0 0 0 / 0.45))",
          }}
        />
      </div>

      {/* Headline + callout (bottom right) */}
      <div
        className="absolute z-30"
        style={{ right: 80, bottom: 140, maxWidth: 720 }}
      >
        <div
          className="uppercase font-black mb-3 animate-fade-in-up"
          style={{
            fontSize: 18,
            letterSpacing: "0.35em",
            color: "var(--onmid-lime)",
            animationDelay: "0.3s",
          }}
        >
          O que ficou de fora
        </div>
        <div
          className="font-black animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 56,
            lineHeight: 1,
            letterSpacing: "-0.035em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.4s",
          }}
        >
          A atendente até{" "}
          <span
            className="px-2 inline-block"
            style={{
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              transform: "skewX(-4deg)",
            }}
          >
            resolveu
          </span>
          .
        </div>

        {step >= 3 && (
          <p
            className="mt-6 font-medium animate-fade-in-up"
            style={{
              fontSize: 28,
              lineHeight: 1.3,
              color: "oklch(1 0 0 / 0.8)",
            }}
          >
            Mas não mudou o estado emocional da cliente — e o relacionamento
            terminou ali.
          </p>
        )}
      </div>

      {/* Step indicator */}
      <div className="absolute bottom-14 left-16 z-30 flex items-center gap-2">
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

      {/* keyframes for typing dots */}
      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        @keyframes bubble-in {
          0% { transform: translateY(8px) scale(0.92); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
      `}</style>
    </SlideLayout>
  );
}

function Iphone({
  visibleCount,
  showTyping,
}: {
  visibleCount: number;
  showTyping: boolean;
}) {
  return (
    <div
      style={{
        width: 480,
        height: 980,
        background: "linear-gradient(180deg, #1a1a1c 0%, #0a0a0c 100%)",
        borderRadius: 64,
        padding: 12,
        boxShadow:
          "0 40px 80px oklch(0 0 0 / 0.55), inset 0 0 0 2px oklch(1 0 0 / 0.08)",
        position: "relative",
      }}
    >
      {/* Screen */}
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 54,
          overflow: "hidden",
          background: "#e5ddd5",
          position: "relative",
        }}
      >
        {/* Dynamic island */}
        <div
          className="absolute top-3 left-1/2 -translate-x-1/2"
          style={{
            width: 130,
            height: 36,
            background: "#000",
            borderRadius: 22,
            zIndex: 10,
          }}
        />

        {/* WhatsApp header */}
        <div
          className="flex items-center gap-3 px-4"
          style={{
            background: "#075E54",
            color: "white",
            paddingTop: 56,
            paddingBottom: 14,
          }}
        >
          <span style={{ fontSize: 22, opacity: 0.9 }}>‹</span>
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center"
            style={{ background: "#cfd8dc", color: "#37474f", fontWeight: 700, fontSize: 18 }}
          >
            C
          </div>
          <div className="leading-tight">
            <div style={{ fontWeight: 600, fontSize: 18 }}>Cliente</div>
            <div style={{ fontSize: 13, opacity: 0.85 }}>online</div>
          </div>
          <div className="ml-auto flex gap-4" style={{ fontSize: 18, opacity: 0.9 }}>
            <span>📹</span>
            <span>📞</span>
            <span>⋮</span>
          </div>
        </div>

        {/* WhatsApp wallpaper pattern */}
        <div
          className="absolute"
          style={{
            top: 116,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 30%, oklch(0 0 0 / 0.03) 1px, transparent 1px), radial-gradient(circle at 80% 70%, oklch(0 0 0 / 0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />

        {/* Messages */}
        <div
          className="absolute left-0 right-0 px-4 flex flex-col gap-2"
          style={{ top: 130, bottom: 24 }}
        >
          {MESSAGES.slice(0, visibleCount).map((m, i) => (
            <Bubble key={i} msg={m} delay={i * 0.05} />
          ))}
          {showTyping && <Typing />}
        </div>
      </div>
    </div>
  );
}

function Bubble({ msg, delay }: { msg: { text: string; time: string }; delay: number }) {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        maxWidth: "85%",
        background: "white",
        borderRadius: 12,
        borderTopLeftRadius: 4,
        padding: "10px 14px 8px",
        boxShadow: "0 1px 1px oklch(0 0 0 / 0.13)",
        animation: `bubble-in 320ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}s both`,
        position: "relative",
      }}
    >
      <div style={{ fontSize: 18, color: "#111b21", lineHeight: 1.3 }}>
        {msg.text}
      </div>
      <div
        style={{
          fontSize: 11,
          color: "#667781",
          textAlign: "right",
          marginTop: 2,
        }}
      >
        {msg.time}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div
      style={{
        alignSelf: "flex-start",
        background: "white",
        borderRadius: 12,
        borderTopLeftRadius: 4,
        padding: "12px 16px",
        boxShadow: "0 1px 1px oklch(0 0 0 / 0.13)",
        display: "flex",
        gap: 5,
        animation: "bubble-in 320ms cubic-bezier(0.22, 1, 0.36, 1) both",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 8,
            height: 8,
            borderRadius: 999,
            background: "#8696a0",
            animation: `typing-dot 1.1s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
