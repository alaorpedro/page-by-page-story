import { useEffect, useState } from "react";
import { SlideLayout } from "@/components/SlideLayout";
import { IntroVignettePreview } from "@/components/IntroVignettePreview";
import { LiveInfoBar } from "@/components/LiveInfoBar";


const STATIC_MS = 10000; // hold the static slide for 10s
const ANIM_MS = 3400;    // vignette duration (~3.4s)

export function Slide01() {
  const [playKey, setPlayKey] = useState<number | null>(null);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const cycle = () => {
      t = setTimeout(() => {
        setPlayKey((k) => (k ?? 0) + 1);
        t = setTimeout(() => {
          setPlayKey(null);
          cycle();
        }, ANIM_MS);
      }, STATIC_MS);
    };
    cycle();
    return () => clearTimeout(t);
  }, []);

  return (
    <>
    <SlideLayout variant="hero" tone="dark">

      {/* Thin lime vertical rail */}
      <div
        className="absolute left-16 top-44 bottom-32 animate-fade-in"
        style={{ width: 2, background: "oklch(0.88 0.24 138 / 0.4)" }}
      />

      {/* Kicker top-left aligned to rail */}
      <div
        className="absolute left-24 top-44 animate-fade-in-up flex items-center gap-4"
        style={{ animationDelay: "0.05s" }}
      >
        <div style={{ width: 36, height: 2, background: "var(--onmid-lime)" }} />
        <span
          className="uppercase font-bold text-foreground/70"
          style={{ fontSize: 16, letterSpacing: "0.4em" }}
        >
          Onmid · Treinamento 2026
        </span>
      </div>

      {/* Live info: hora de Londrina, clima, data, status */}
      <LiveInfoBar />


      {/* Center-left main copy */}
      <div className="absolute left-24 top-1/2 -translate-y-1/2 max-w-[1500px]">
        <h1
          className="text-foreground uppercase animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 200,
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            animationDelay: "0.15s",
          }}
        >
          Vendas<br />
          <span
            className="inline-block px-6 mt-4"
            style={{
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              transform: "skewX(-4deg)",
            }}
          >
            de alta
          </span>
          <br />
          performance
        </h1>
      </div>

      {/* Bottom-left subtitle aligned to rail */}
      <div
        className="absolute left-24 bottom-32 animate-fade-in-up max-w-[900px]"
        style={{ animationDelay: "0.4s" }}
      >
        <p
          className="text-foreground/55 font-light"
          style={{ fontSize: 32, letterSpacing: "0.02em", lineHeight: 1.3 }}
        >
          Atendimento online <span className="text-foreground/85 font-semibold">para times comerciais</span> que precisam converter sob pressão.
        </p>
      </div>

      {/* Bottom-right meta */}
      <div
        className="absolute right-16 bottom-32 text-right animate-fade-in-up"
        style={{ animationDelay: "0.5s" }}
      >
        <div
          className="uppercase font-bold text-foreground/40"
          style={{ fontSize: 13, letterSpacing: "0.35em" }}
        >
          Conduzido por
        </div>
        <div
          className="text-foreground font-black mt-2"
          style={{ fontSize: 22, lineHeight: 1.1 }}
        >
          Alaor Pedro de Oliveira
        </div>
        <div
          className="text-foreground/50 mt-1"
          style={{ fontSize: 16 }}
        >
          Diretor de Planejamento
        </div>
      </div>
    </SlideLayout>

    {/* Vignette overlay — covers slide during the animation phase */}
    {playKey !== null && (
      <div key={playKey} className="absolute inset-0 z-50 pointer-events-none">
        <IntroVignettePreview hideReplay />
      </div>

    )}
    </>
  );
}

