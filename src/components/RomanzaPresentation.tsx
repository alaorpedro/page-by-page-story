import { useCallback, useEffect, useMemo, useState } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { SlideContext } from "./SlideContext";
import { ROMANZA_SLIDES } from "@/slides/romanza/RomanzaDeck";

export function RomanzaPresentation() {
  const [index, setIndex] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const total = ROMANZA_SLIDES.length;
  const current = ROMANZA_SLIDES[index];
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
      else if (["1", "2", "3", "4"].includes(e.key)) {
        // Atalho: pula para a abertura do módulo
        const target = ROMANZA_SLIDES.findIndex((s) => s.module === Number(e.key));
        if (target >= 0) setIndex(target);
      }
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
    <div
      className={`fixed inset-0 ${chromeVisible ? "" : "cursor-none"}`}
      style={{ background: "oklch(0.13 0.005 240)" }}
      onClick={(e) => {
        // Ignore clicks on chrome / interactive elements
        const target = e.target as HTMLElement;
        if (target.closest("[data-slide-chrome]") || target.closest("button") || target.closest("a") || target.closest("[role=dialog]"))
          return;
        next();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        prev();
      }}
    >
      <SlideContext.Provider value={{ index: index + 1, total }}>
        <ScaledSlide key={slideKey}>{current.node}</ScaledSlide>
      </SlideContext.Provider>

      {/* Top-right fullscreen toggle (counter is now part of slide chrome) */}
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
          {ROMANZA_SLIDES.map((s, i) => (
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
