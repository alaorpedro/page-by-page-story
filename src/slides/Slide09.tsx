import { SlideLayout } from "@/components/SlideLayout";
import morning from "@/assets/slide09-morning.jpg";
import gym from "@/assets/slide09-gym.jpg";
import traffic from "@/assets/slide09-traffic.jpg";
import meeting from "@/assets/slide09-meeting.jpg";

export function Slide09() {
  const tiles = [
    { label: "Dormindo / cansaço (manhã)", img: morning, ord: "01" },
    { label: "Academia / treino", img: gym, ord: "02" },
    { label: "Trânsito / transporte", img: traffic, ord: "03" },
    { label: "Reunião / trabalho", img: meeting, ord: "04" },
  ];

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="9">
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

      {/* Grid de situações */}
      <div
        className="absolute grid grid-cols-2 gap-6 z-20"
        style={{ left: 64, right: 64, top: 240, bottom: 110 }}
      >
        {tiles.map((t, i) => (
          <div
            key={i}
            className="relative rounded-3xl overflow-hidden animate-[scale-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both] group"
            style={{
              animationDelay: `${i * 0.12}s`,
              border: "1px solid oklch(1 0 0 / 0.08)",
              boxShadow: "0 30px 80px oklch(0 0 0 / 0.45)",
            }}
          >
            <img
              src={t.img}
              alt={t.label}
              width={1280}
              height={1280}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              style={{ filter: "saturate(0.85) contrast(1.05)" }}
            />
            {/* Vinheta inferior */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, oklch(0.13 0.005 240 / 0.92) 0%, oklch(0.13 0.005 240 / 0.35) 45%, transparent 70%)",
              }}
            />
            {/* Numerador */}
            <div
              className="absolute top-6 left-7 font-black"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                color: "var(--onmid-lime)",
                letterSpacing: "-0.02em",
              }}
            >
              {t.ord}
            </div>
            {/* Label */}
            <div className="absolute inset-x-0 bottom-0 p-8 flex items-end justify-between gap-6">
              <div
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 38,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  color: "oklch(0.98 0 0)",
                  maxWidth: "85%",
                }}
              >
                {t.label}
              </div>
              <div
                className="shrink-0 rounded-full"
                style={{
                  width: 14,
                  height: 14,
                  background: "var(--onmid-lime)",
                  boxShadow: "0 0 24px oklch(0.84 0.18 130 / 0.7)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
