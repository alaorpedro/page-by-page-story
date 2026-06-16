import { useCallback, useEffect, useMemo, useState } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { SlideContext } from "./SlideContext";
import {
  MP01,
  MP02,
  MP03,
  MP04,
  MP05,
  MP06,
  MP07,
  MP08,
  MP09,
  MP10,
  MP11,
  MP12,
  MP13,
  MP14,
} from "@/slides/political/ElectoralSlides";

type SlideComponent = (props: { revealStep: number }) => React.ReactNode;
type SlideEntry = {
  id: string;
  title: string;
  component: SlideComponent;
  revealSteps?: number;
};

const SLIDES: SlideEntry[] = [
  { id: "01", title: "Proposta estratégica", component: MP01 },
  { id: "02", title: "Desafio", component: MP02, revealSteps: 3 },
  { id: "03", title: "Tese central", component: MP03, revealSteps: 5 },
  { id: "04", title: "Capital político", component: MP04, revealSteps: 4 },
  { id: "05", title: "Arquitetura", component: MP05, revealSteps: 4 },
  { id: "06", title: "Studio de Criação", component: MP06, revealSteps: 3 },
  { id: "07", title: "Tráfego Pago", component: MP07, revealSteps: 3 },
  { id: "08", title: "Consultoria", component: MP08, revealSteps: 4 },
  { id: "09", title: "Produção de Conteúdo", component: MP09, revealSteps: 3 },
  { id: "10", title: "War Room", component: MP10, revealSteps: 5 },
  { id: "11", title: "Indicadores", component: MP11, revealSteps: 4 },
  { id: "12", title: "Mapa de conteúdo", component: MP12, revealSteps: 6 },
  { id: "13", title: "Pacotes integrados", component: MP13, revealSteps: 4 },
  { id: "14", title: "Próximo passo", component: MP14, revealSteps: 4 },
];

export function PoliticalMarketingPresentation() {
  const [index, setIndex] = useState(0);
  const [revealStep, setRevealStep] = useState(0);
  const [isFull, setIsFull] = useState(false);
  const [chromeVisible, setChromeVisible] = useState(true);

  const total = SLIDES.length;
  const current = SLIDES[index];
  const revealTotal = current.revealSteps ?? 0;
  const slideKey = useMemo(() => `${current.id}-${index}`, [current.id, index]);

  const nextSlide = useCallback(() => {
    setRevealStep(0);
    setIndex((i) => Math.min(total - 1, i + 1));
  }, [total]);
  const prevSlide = useCallback(() => {
    setRevealStep(0);
    setIndex((i) => Math.max(0, i - 1));
  }, []);

  const advance = useCallback(() => {
    if (revealStep < revealTotal) {
      setRevealStep((s) => Math.min(revealTotal, s + 1));
      return;
    }
    nextSlide();
  }, [nextSlide, revealStep, revealTotal]);

  const retreat = useCallback(() => {
    if (revealStep > 0) {
      setRevealStep((s) => Math.max(0, s - 1));
      return;
    }
    prevSlide();
  }, [prevSlide, revealStep]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        advance();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        retreat();
      } else if (e.key === "Home") {
        setRevealStep(0);
        setIndex(0);
      } else if (e.key === "End") {
        setRevealStep(0);
        setIndex(total - 1);
      } else if (e.key.toLowerCase() === "f") toggleFullscreen();
      else if (e.key === "Escape" && document.fullscreenElement) document.exitFullscreen();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [advance, retreat, total]);

  useEffect(() => {
    const onChange = () => setIsFull(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onChange);
    return () => document.removeEventListener("fullscreenchange", onChange);
  }, []);

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
        const target = e.target as HTMLElement;
        if (
          target.closest("[data-slide-chrome]") ||
          target.closest("button") ||
          target.closest("a") ||
          target.closest("[role=dialog]")
        )
          return;
        advance();
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        retreat();
      }}
    >
      <SlideContext.Provider value={{ index: index + 1, total }}>
        <ScaledSlide key={slideKey}>{current.component({ revealStep })}</ScaledSlide>
      </SlideContext.Provider>

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

      <div
        className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 transition-opacity duration-500 ${
          chromeVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={retreat}
          disabled={index === 0 && revealStep === 0}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 backdrop-blur flex items-center justify-center"
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <div className="flex items-center gap-1.5 px-3">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => {
                setRevealStep(0);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={advance}
          disabled={index === total - 1 && revealStep >= revealTotal}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white disabled:opacity-30 backdrop-blur flex items-center justify-center"
          aria-label="Próximo slide"
        >
          ›
        </button>
      </div>
    </div>
  );
}
