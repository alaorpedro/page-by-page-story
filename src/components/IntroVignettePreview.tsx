import { useState } from "react";
import logoWhite from "@/assets/onmid-logo-white.png";

type Props = { hideReplay?: boolean };

/**
 * Vinheta "radical": Logo → VENDAS → DE ALTA → PERFORMANCE.
 * Cada palavra desliza da direita, dá um pulse de zoom curto (sem escalar
 * para 10x — isso borrava o texto) e some com glitch + flash sincronizado.
 * Duração total: 5.2s (4 estágios × 1.3s).
 */
export function IntroVignettePreview({ hideReplay = false }: Props) {
  const [key, setKey] = useState(0);

  const TOTAL = 5.2; // seconds
  const STAGE = TOTAL / 4; // 1.3s each
  // stage windows as %: 0-25, 25-50, 50-75, 75-100

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" key={key}>
      <style>{`
        @keyframes vigLogo {
          0%   { transform: translateX(40vw) scale(0.6); opacity: 0; filter: blur(16px); }
          25%  { transform: translateX(0) scale(1); opacity: 1; filter: blur(0); }
          70%  { transform: translateX(0) scale(1.04); opacity: 1; filter: blur(0); }
          85%  { transform: translateX(-15vw) scale(1.1); opacity: 0.9; filter: blur(3px); }
          100% { transform: translateX(-60vw) scale(1.15); opacity: 0; filter: blur(10px); }
        }
        @keyframes vigWord {
          0%   { transform: translateX(60vw) scale(0.85) skewX(-10deg); opacity: 0; filter: blur(8px); }
          22%  { transform: translateX(0) scale(1) skewX(-4deg); opacity: 1; filter: blur(0); }
          70%  { transform: translateX(0) scale(1.03) skewX(-4deg); opacity: 1; filter: blur(0); }
          85%  { transform: translateX(-20vw) scale(1.08) skewX(4deg); opacity: 0.85; filter: blur(2px); }
          100% { transform: translateX(-80vw) scale(1.15) skewX(8deg); opacity: 0; filter: blur(12px); }
        }
        @keyframes vigGlitch {
          0%,100% { transform: translate(0,0); }
          25% { transform: translate(-5px,2px); }
          50% { transform: translate(4px,-3px); }
          75% { transform: translate(-2px,3px); }
        }
        @keyframes vigFlash {
          0%, 24%  { opacity: 0; }
          25%      { opacity: 0.85; }
          27%, 49% { opacity: 0; }
          50%      { opacity: 0.85; }
          52%, 74% { opacity: 0; }
          75%      { opacity: 0.85; }
          77%, 100%{ opacity: 0; }
        }
        @keyframes vigBar {
          0%   { transform: scaleX(0); transform-origin: left; }
          30%  { transform: scaleX(1); transform-origin: left; }
          70%  { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }

        .vig-stage {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
        }
        .vig-s1 { animation: vigS1 ${TOTAL}s steps(1) forwards; }
        .vig-s2 { animation: vigS2 ${TOTAL}s steps(1) forwards; }
        .vig-s3 { animation: vigS3 ${TOTAL}s steps(1) forwards; }
        .vig-s4 { animation: vigS4 ${TOTAL}s steps(1) forwards; }
        @keyframes vigS1 { 0%,24% { opacity: 1; } 25%,100% { opacity: 0; } }
        @keyframes vigS2 { 0%,24% { opacity: 0; } 25%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
        @keyframes vigS3 { 0%,49% { opacity: 0; } 50%,74% { opacity: 1; } 75%,100% { opacity: 0; } }
        @keyframes vigS4 { 0%,74% { opacity: 0; } 75%,100% { opacity: 1; } }

        .vig-logo {
          height: 42vh; width: auto; object-fit: contain;
          filter: drop-shadow(0 0 60px oklch(0.88 0.24 138 / 0.45));
          animation: vigLogo ${STAGE}s cubic-bezier(.2,.7,.2,1) 0s both,
                     vigGlitch 0.1s steps(2) ${STAGE * 0.25}s 5;
        }
        .vig-word {
          font-family: var(--font-display, system-ui);
          font-weight: 900; color: white;
          /* tamanho base ENORME — sem precisar escalar p/ 10x e perder qualidade */
          font-size: clamp(120px, 22vw, 380px);
          line-height: 0.85;
          letter-spacing: -0.06em; text-transform: uppercase;
          white-space: nowrap;
          will-change: transform, opacity, filter;
          -webkit-font-smoothing: antialiased;
        }
        .vig-s2 .vig-word { animation: vigWord ${STAGE}s cubic-bezier(.2,.7,.2,1) ${STAGE}s both,
                                       vigGlitch 0.1s steps(2) ${STAGE * 1.25}s 5; }
        .vig-s3 .vig-word { animation: vigWord ${STAGE}s cubic-bezier(.2,.7,.2,1) ${STAGE * 2}s both,
                                       vigGlitch 0.1s steps(2) ${STAGE * 2.25}s 5; }
        .vig-s4 .vig-word { animation: vigWord ${STAGE}s cubic-bezier(.2,.7,.2,1) ${STAGE * 3}s both,
                                       vigGlitch 0.1s steps(2) ${STAGE * 3.25}s 5; }

        .vig-word-lime { color: var(--onmid-lime, #c7ff3a); }
        .vig-word-outline {
          color: transparent;
          -webkit-text-stroke: 3px var(--onmid-lime, #c7ff3a);
        }

        .vig-bar {
          position: absolute; left: 0; right: 0; height: 12px;
          background: var(--onmid-lime, #c7ff3a);
        }
        .vig-s1 .vig-bar { animation: vigBar ${STAGE}s ease-out forwards; }

        .vig-flash {
          position: absolute; inset: 0; background: white;
          animation: vigFlash ${TOTAL}s steps(1) forwards;
          opacity: 0; pointer-events: none;
        }
        .vig-scanlines {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(to bottom,
            transparent 0, transparent 3px,
            rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px);
        }
      `}</style>

      {/* Stage 1 — Logo */}
      <div className="vig-stage vig-s1">
        <img src={logoWhite} alt="Onmid" className="vig-logo" draggable={false} />
        <div className="vig-bar" style={{ top: "28%" }} />
        <div className="vig-bar" style={{ top: "68%", background: "#ff003c", height: 4 }} />
      </div>

      {/* Stage 2 — Vendas */}
      <div className="vig-stage vig-s2">
        <div className="vig-word">Vendas</div>
      </div>

      {/* Stage 3 — DE ALTA */}
      <div className="vig-stage vig-s3">
        <div className="vig-word vig-word-outline">DE ALTA</div>
      </div>

      {/* Stage 4 — PERFORMANCE */}
      <div className="vig-stage vig-s4">
        <div className="vig-word vig-word-lime">Performance</div>
      </div>

      <div className="vig-flash" />
      <div className="vig-scanlines" />

      {!hideReplay && (
        <button
          onClick={() => setKey((k) => k + 1)}
          className="absolute bottom-6 right-6 z-50 px-4 py-2 bg-white text-black font-bold text-sm rounded"
        >
          Replay
        </button>
      )}
    </div>
  );
}
