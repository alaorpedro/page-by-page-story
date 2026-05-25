import { useCallback, useEffect, useMemo, useState } from "react";
import { ScaledSlide } from "./ScaledSlide";
import { Slide01 } from "@/slides/Slide01";
import { Slide02 } from "@/slides/Slide02";
import { Slide03 } from "@/slides/Slide03";
import { Slide04 } from "@/slides/Slide04";
import { Slide05 } from "@/slides/Slide05";
import { Slide06 } from "@/slides/Slide06";
import { Slide07 } from "@/slides/Slide07";
import { Slide08 } from "@/slides/Slide08";
import { Slide09 } from "@/slides/Slide09";
import { Slide10 } from "@/slides/Slide10";
import { Slide11 } from "@/slides/Slide11";
import { Slide12 } from "@/slides/Slide12";
import { Slide13 } from "@/slides/Slide13";
import { Slide14 } from "@/slides/Slide14";
import { Slide15 } from "@/slides/Slide15";
import { Slide16 } from "@/slides/Slide16";
import { Slide17 } from "@/slides/Slide17";
import { Slide18 } from "@/slides/Slide18";
import { Slide19 } from "@/slides/Slide19";
import { Slide20 } from "@/slides/Slide20";
import { Slide21 } from "@/slides/Slide21";
import { Slide22 } from "@/slides/Slide22";
import { Slide23 } from "@/slides/Slide23";
import { Slide24 } from "@/slides/Slide24";
import { Slide25 } from "@/slides/Slide25";
import { Slide26 } from "@/slides/Slide26";
import { Slide27 } from "@/slides/Slide27";
import { Slide28 } from "@/slides/Slide28";
import { Slide29 } from "@/slides/Slide29";
import { Slide30 } from "@/slides/Slide30";
import { Slide31 } from "@/slides/Slide31";

type SlideEntry = { id: string; title: string; node: React.ReactNode };

const SLIDES: SlideEntry[] = [
  { id: "01", title: "Capa", node: <Slide01 /> },
  { id: "02", title: "Apresentador", node: <Slide02 /> },
  { id: "03", title: "Família", node: <Slide03 /> },
  { id: "04", title: "Decisão de compra", node: <Slide04 /> },
  { id: "05", title: "Mudança do Estado Emocional", node: <Slide05 /> },
  { id: "06", title: "Caso WhatsApp", node: <Slide06 /> },
  { id: "07", title: "Fluxo de Anúncios", node: <Slide07 /> },
  { id: "08", title: "Mensagem Beto/Yamaha", node: <Slide08 /> },
  { id: "09", title: "Rotina das pessoas", node: <Slide09 /> },
  { id: "10", title: "Agora!", node: <Slide10 /> },
  { id: "11", title: "Planejamento", node: <Slide11 /> },
  { id: "12", title: "O que acontece no cérebro", node: <Slide12 /> },
  { id: "13", title: "Modo autor", node: <Slide13 /> },
  { id: "14", title: "Só pode ser o preço", node: <Slide14 /> },
  { id: "15", title: "Quote Julius", node: <Slide15 /> },
  { id: "16", title: "Caro em relação a quê", node: <Slide16 /> },
  { id: "17", title: "Por que as pessoas compram?", node: <Slide17 /> },
  { id: "18", title: "Compra emocional", node: <Slide18 /> },
  { id: "19", title: "Marketing Emocional", node: <Slide19 /> },
  { id: "20", title: "Crenças", node: <Slide20 /> },
  { id: "21", title: "6 Gatilhos", node: <Slide21 /> },
  { id: "22", title: "Pertencimento", node: <Slide22 /> },
  { id: "23", title: "Reciprocidade", node: <Slide23 /> },
  { id: "24", title: "Coerência e compromisso", node: <Slide24 /> },
  { id: "25", title: "Afeição", node: <Slide25 /> },
  { id: "26", title: "Aprovação social", node: <Slide26 /> },
  { id: "27", title: "Escassez", node: <Slide27 /> },
  { id: "28", title: "100% presente", node: <Slide28 /> },
  { id: "29", title: "Não atenda para vender", node: <Slide29 /> },
  { id: "30", title: "Texto para reflexão", node: <Slide30 /> },
  { id: "31", title: "Obrigado", node: <Slide31 /> },
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
