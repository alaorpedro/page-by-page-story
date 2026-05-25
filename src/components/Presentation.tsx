import { useCallback, useEffect, useMemo, useState } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { Slide01Cover } from "@/slides/Slide01Cover";
import { Slide02Presenter } from "@/slides/Slide02Presenter";
import { Slide03Concept } from "@/slides/Slide03Concept";
import { Slide04EmotionalChange } from "@/slides/Slide04EmotionalChange";
import { Slide05WhatsAppMeme } from "@/slides/Slide05WhatsAppMeme";

type SlideEntry = { id: string; title: string; node: React.ReactNode };

const SLIDES: SlideEntry[] = [
  { id: "01", title: "Capa", node: <Slide01Cover /> },
  { id: "02", title: "Apresentador", node: <Slide02Presenter /> },
  { id: "03", title: "Conceito de Vendas", node: <Slide03Concept /> },
  { id: "04", title: "Mudança do Estado Emocional", node: <Slide04EmotionalChange /> },
  { id: "05", title: "Caso WhatsApp", node: <Slide05WhatsAppMeme /> },
];

export function Presentation() {
  const [index, setIndex] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const total = SLIDES.length;
  const current = SLIDES[index];
  // Re-mount slide on change so entry animations replay
  const slideKey = useMemo(() => `${current.id}-${index}`, [current.id, index]);

  const next = useCallback(() => setIndex((i) => Math.min(total - 1, i + 1)), [total]);
  const prev = useCallback(() => setIndex((i) => Math.max(0, i - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
      else if (e.key.toLowerCase() === "f") toggleFullscreen();
      else if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, total]);

  useEffect(() => {
    const onChange = () => setIsFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

  // Auto-hide chrome after inactivity
  useEffect(() => {
    let t: number | undefined;
    const reveal = () => {
      setChromeVisible(true);
      window.clearTimeout(t);
      t = window.setTimeout(() => setChromeVisible(false), 2500);
    };
    reveal();
    window.addEventListener("mousemove", reveal);
    window.addEventListener("keydown", reveal);
    return () => {
      window.removeEventListener("mousemove", reveal);
      window.removeEventListener("keydown", reveal);
      window.clearTimeout(t);
    };
  }, []);

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  return (
    <div className={`fixed inset-0 ${chromeVisible ? "" : "cursor-none"}`} style={{ background: "oklch(0.13 0.005 240)" }}>
      <ScaledSlide key={slideKey}>{current.node}</ScaledSlide>

      {/* Top-right slide counter & fullscreen */}
      <div
        className={`absolute top-5 right-6 flex items-center gap-3 transition-opacity duration-500 ${
          chromeVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={toggleFullscreen}
          className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-widest backdrop-blur"
          title="Tela cheia (F)"
        >
          {isFull ? "Sair" : "Tela cheia"}
        </button>
        <div className="px-3 py-1.5 rounded-full bg-white/10 text-white/80 text-xs font-mono backdrop-blur">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </div>

      {/* Bottom-center nav */}
      <div
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 transition-opacity duration-500 ${
          chromeVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 backdrop-blur flex items-center justify-center"
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5 px-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          disabled={index === total - 1}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 backdrop-blur flex items-center justify-center"
          aria-label="Próximo slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}
