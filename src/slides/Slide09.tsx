import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";
import morning from "@/assets/slide09-morning.jpg";
import gym from "@/assets/slide09-gym.jpg";
import traffic from "@/assets/slide09-traffic.jpg";
import meeting from "@/assets/slide09-meeting.jpg";

type Situation = {
  ord: string;
  label: string;
  title: string;
  desc: string;
  img: string;
};

const SITUATIONS: Situation[] = [
  {
    ord: "01",
    label: "Manhã",
    title: "Dormindo / cansaço",
    desc: "O lead acorda exausto, sem energia para o dia. É nesse momento que a dor começa a aparecer.",
    img: morning,
  },
  {
    ord: "02",
    label: "Treino",
    title: "Academia / treino",
    desc: "Busca disposição, autoestima e disciplina. O esforço físico ativa a vontade de mudar.",
    img: gym,
  },
  {
    ord: "03",
    label: "Transporte",
    title: "Trânsito / deslocamento",
    desc: "Horas no trânsito ouvindo rádio, redes sociais e podcasts. Tempo livre para reflexões e descobertas.",
    img: traffic,
  },
  {
    ord: "04",
    label: "Trabalho",
    title: "Reunião / trabalho",
    desc: "Pressão, decisões e contas. A realidade do dia a dia que vai gerar a necessidade da nossa solução.",
    img: meeting,
  },
];

export function Slide09() {
  const TOTAL = SITUATIONS.length;
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

  const current = step > 0 ? SITUATIONS[step - 1] : null;

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="9">
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
          09<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[420px]" style={{ background: "oklch(1 0 0 / 0.15)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(1 0 0 / 0.55)" }}
        >
          Descoberta · Dia a dia do lead
        </div>
      </div>

      {/* Title */}
      <div
        className="absolute left-16 right-16 animate-fade-in-up z-20"
        style={{ top: 256, animationDelay: "0.1s" }}
      >
        <div
          className="uppercase font-black mb-2"
          style={{ fontSize: 18, letterSpacing: "0.3em", color: "var(--onmid-lime)" }}
        >
          Situações que encaram a realidade
        </div>
      </div>

      {/* HERO da situação atual */}
      <div
        className="absolute z-20 rounded-3xl overflow-hidden"
        style={{
          left: 64,
          right: 64,
          top: 320,
          height: 500,
          border: "1px solid oklch(1 0 0 / 0.08)",
          boxShadow: "0 40px 100px oklch(0 0 0 / 0.55)",
          background: "oklch(0.13 0.005 240)",
        }}
      >
        {current ? (
          <div
            key={step}
            className="absolute inset-0 animate-[fade-in_0.55s_cubic-bezier(0.22,1,0.36,1)_both]"
          >
            <img
              src={current.img}
              alt={current.label}
              width={1280}
              height={1280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover animate-[hero-zoom_8s_ease-out_both]"
              style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
            {/* Vinheta */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.13 0.005 240 / 0.92) 0%, oklch(0.13 0.005 240 / 0.55) 45%, oklch(0.13 0.005 240 / 0.05) 100%)",
              }}
            />
            {/* Conteúdo */}
            <div className="absolute inset-0 flex flex-col justify-center pl-16 pr-[55%]">
              <div className="flex items-center gap-4 mb-5 animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.1s_both]">
                <div
                  className="font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 80,
                    lineHeight: 1,
                    color: "var(--onmid-lime)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {current.ord}
                </div>
                <div
                  className="uppercase font-bold"
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.3em",
                    color: "oklch(1 0 0 / 0.6)",
                  }}
                >
                  {current.label}
                </div>
              </div>
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
                {current.title}
              </h2>
              <p
                className="animate-[fade-in-up_0.6s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]"
                style={{
                  fontSize: 22,
                  lineHeight: 1.35,
                  color: "oklch(1 0 0 / 0.8)",
                  maxWidth: 560,
                }}
              >
                {current.desc}
              </p>
            </div>
          </div>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center animate-fade-in text-center"
            style={{
              fontSize: 28,
              color: "oklch(1 0 0 / 0.45)",
              letterSpacing: "0.05em",
            }}
          >
            Clique para revelar cada situação →
          </div>
        )}
      </div>

      {/* Thumbnails / mini galeria inferior */}
      <div
        className="absolute left-16 right-16 z-20 grid grid-cols-4 gap-4"
        style={{ bottom: 90, height: 110 }}
      >
        {SITUATIONS.map((s, i) => {
          const revealed = i < step;
          const isCurrent = i === step - 1;
          return (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden"
              style={{
                opacity: revealed ? 1 : 0.35,
                filter: revealed ? "none" : "saturate(0.2) blur(6px)",
                transform: isCurrent ? "translateY(-6px)" : "translateY(0)",
                transition:
                  "opacity 500ms ease, filter 500ms ease, transform 400ms ease, box-shadow 400ms ease",
                border: isCurrent
                  ? "2px solid var(--onmid-lime)"
                  : "1px solid oklch(1 0 0 / 0.08)",
                boxShadow: isCurrent
                  ? "0 18px 50px oklch(0.84 0.18 130 / 0.45)"
                  : "0 6px 20px oklch(0 0 0 / 0.35)",
              }}
            >
              <img
                src={s.img}
                alt={s.label}
                width={1280}
                height={1280}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "saturate(0.85) contrast(1.05)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, oklch(0.13 0.005 240 / 0.85) 0%, oklch(0.13 0.005 240 / 0.1) 60%)",
                }}
              />
              <div className="absolute inset-x-0 bottom-0 px-3 py-2 flex items-center justify-between">
                <span
                  className="font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    color: isCurrent ? "var(--onmid-lime)" : "oklch(0.98 0 0)",
                  }}
                >
                  {s.ord}
                </span>
                <span
                  className="uppercase font-bold truncate ml-2"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    color: "oklch(1 0 0 / 0.8)",
                  }}
                >
                  {s.label}
                </span>
              </div>
            </div>
          );
        })}
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
        @keyframes hero-zoom {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1.0); }
        }
      `}</style>
    </SlideLayout>
  );
}
