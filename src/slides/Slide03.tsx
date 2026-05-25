import { SlideLayout } from "@/components/SlideLayout";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import familiaPhoto from "@/assets/familia.jpg";

const FONT_CYCLE = [
  { family: "'Sora', sans-serif", weight: 900, style: "normal", letter: "-0.05em" },
  { family: "'Instrument Serif', serif", weight: 400, style: "italic", letter: "-0.03em" },
  { family: "'Archivo Black', sans-serif", weight: 900, style: "normal", letter: "-0.04em" },
  { family: "'Cormorant Garamond', serif", weight: 700, style: "italic", letter: "-0.02em" },
  { family: "'Bebas Neue', sans-serif", weight: 400, style: "normal", letter: "0.02em" },
  { family: "'Caveat', cursive", weight: 700, style: "normal", letter: "-0.01em" },
  { family: "'Major Mono Display', monospace", weight: 400, style: "normal", letter: "-0.04em" },
  { family: "'Abril Fatface', serif", weight: 400, style: "normal", letter: "-0.03em" },
  { family: "'Bungee', sans-serif", weight: 400, style: "normal", letter: "-0.02em" },
  { family: "'Playfair Display', serif", weight: 900, style: "italic", letter: "-0.03em" },
  { family: "'Rubik Mono One', monospace", weight: 400, style: "normal", letter: "-0.05em" },
  { family: "'Pacifico', cursive", weight: 400, style: "normal", letter: "-0.01em" },
];

export function Slide03() {
  const [fontIdx, setFontIdx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const t = setInterval(() => {
      setFontIdx((i) => (i + 1) % FONT_CYCLE.length);
    }, 400);
    return () => clearInterval(t);
  }, []);

  useLayoutEffect(() => {
    const fit = () => {
      const c = containerRef.current;
      const t = textRef.current;
      if (!c || !t) return;
      const cw = c.clientWidth;
      const tw = t.scrollWidth;
      setScale(tw > 0 ? Math.min(1, cw / tw) : 1);
    };
    fit();
    // refit after webfont loads
    (document as any).fonts?.ready?.then(fit);
    const id = requestAnimationFrame(fit);
    return () => cancelAnimationFrame(id);
  }, [fontIdx]);

  const f = FONT_CYCLE[fontIdx];

  return (
    <SlideLayout variant="content" tone="light">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0 animate-fade-in overflow-hidden">
        <img
          src={familiaPhoto}
          alt="Família do Alaor"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.18) brightness(0.9)", objectPosition: "center 30%" }}
          draggable={false}
        />
        {/* Lime duotone wash */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: "var(--onmid-lime)", opacity: 0.42 }}
        />
        {/* Bottom dark gradient — keeps faces clean while giving room for the word */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "62%",
            background:
              "linear-gradient(to top, oklch(0.11 0.005 240 / 0.96) 0%, oklch(0.11 0.005 240 / 0.78) 35%, oklch(0.11 0.005 240 / 0) 100%)",
          }}
        />
        {/* Subtle top vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, oklch(0 0 0 / 0.35) 0%, oklch(0 0 0 / 0) 25%)",
          }}
        />
      </div>

      {/* Section marker — top right */}
      <div
        className="absolute right-[120px] top-44 flex items-center gap-8 animate-fade-in-up z-10"
        style={{ width: "32%" }}
      >
        <div className="flex-1 h-px" style={{ background: "oklch(1 0 0 / 0.25)" }} />
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 72,
            lineHeight: 1,
            color: "oklch(0.98 0.005 100)",
          }}
        >
          03<span className="text-lime">.</span>
        </div>
      </div>

      {/* Kicker */}
      <div
        className="absolute left-[120px] z-10 animate-fade-in-up"
        style={{ bottom: 440, animationDelay: "0.2s" }}
      >
        <div
          className="uppercase font-bold"
          style={{
            fontSize: 18,
            letterSpacing: "0.5em",
            color: "var(--onmid-lime)",
          }}
        >
          O que me move
        </div>
      </div>

      {/* Giant animated "propósito" — auto-fits to slide width */}
      <div
        ref={containerRef}
        className="absolute inset-x-0 z-10 px-[80px] animate-fade-in-up overflow-hidden"
        style={{ bottom: 140, animationDelay: "0.35s" }}
      >
        <div
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "left bottom",
            width: "fit-content",
            height: 320 * 0.95,
          }}
        >
          <div
            ref={textRef}
            key={fontIdx}
            className="leading-none"
            style={{
              fontFamily: f.family,
              fontWeight: f.weight as number,
              fontStyle: f.style,
              letterSpacing: f.letter,
              fontSize: 320,
              color: "oklch(0.98 0.005 100)",
              lineHeight: 0.9,
              whiteSpace: "nowrap",
              animation: "fade-in 0.25s ease-out both",
            }}
          >
            propósito<span className="text-lime">.</span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
