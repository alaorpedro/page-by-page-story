import { useState } from "react";
import logoWhite from "@/assets/onmid-logo-white.png";

type Props = { hideReplay?: boolean };

export function IntroVignettePreview({ hideReplay = false }: Props) {
  const [key, setKey] = useState(0);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black" key={key}>
      <style>{`
        @keyframes vigZoomLogo {
          0%   { transform: scale(0.4); opacity: 0; filter: blur(20px); }
          15%  { transform: scale(1); opacity: 1; filter: blur(0); }
          55%  { transform: scale(1.05); opacity: 1; filter: blur(0); }
          70%  { transform: scale(8); opacity: 0.9; filter: blur(2px); }
          85%  { transform: scale(14); opacity: 0; filter: blur(8px); }
          100% { transform: scale(14); opacity: 0; }
        }
        @keyframes vigZoomWord {
          0%   { transform: scale(0.2) skewX(-12deg); opacity: 0; }
          10%  { transform: scale(1.1) skewX(-4deg); opacity: 1; }
          40%  { transform: scale(1.15) skewX(-4deg); opacity: 1; }
          60%  { transform: scale(10) skewX(8deg); opacity: 0.6; filter: blur(4px); }
          100% { transform: scale(14) skewX(8deg); opacity: 0; }
        }
        @keyframes vigGlitch {
          0%,100% { transform: translate(0,0); }
          20% { transform: translate(-6px,2px); }
          40% { transform: translate(5px,-3px); }
          60% { transform: translate(-3px,4px); }
          80% { transform: translate(4px,1px); }
        }
        @keyframes vigBarSlam {
          0%   { transform: scaleX(0); transform-origin: left; }
          25%  { transform: scaleX(1); transform-origin: left; }
          75%  { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes vigFlash {
          0%, 100% { opacity: 0; }
          32%, 33% { opacity: 0.5; }
          65%, 66% { opacity: 0.5; }
        }
        .vig-stage {
          position: absolute; inset: 0;
          display: flex; align-items: center; justify-content: center;
          opacity: 0;
        }
        .vig-stage-1 { animation: vigStage1 4s steps(1) forwards; }
        .vig-stage-2 { animation: vigStage2 4s steps(1) forwards; }
        .vig-stage-3 { animation: vigStage3 4s steps(1) forwards; }
        @keyframes vigStage1 { 0%,32% { opacity: 1; } 33%,100% { opacity: 0; } }
        @keyframes vigStage2 { 0%,32% { opacity: 0; } 33%,65% { opacity: 1; } 66%,100% { opacity: 0; } }
        @keyframes vigStage3 { 0%,65% { opacity: 0; } 66%,100% { opacity: 1; } }
        .vig-logo {
          height: 380px; width: auto; object-fit: contain;
          filter: drop-shadow(0 0 40px oklch(0.88 0.24 138 / 0.4));
          animation: vigZoomLogo 1.3s cubic-bezier(.2,.7,.2,1) forwards,
                     vigGlitch 0.12s steps(2) 0.3s 4;
        }
        .vig-word {
          font-family: var(--font-display, system-ui);
          font-weight: 900; color: white;
          font-size: 360px; line-height: 0.85;
          letter-spacing: -0.06em; text-transform: uppercase;
          animation: vigZoomWord 1.3s cubic-bezier(.2,.7,.2,1) forwards,
                     vigGlitch 0.12s steps(2) 0.3s 4;
        }
        .vig-word-lime { color: var(--onmid-lime, #c7ff3a); }
        .vig-bar {
          position: absolute; left: 0; right: 0; height: 14px;
          background: var(--onmid-lime, #c7ff3a);
          animation: vigBarSlam 1.2s ease-out forwards;
        }
        .vig-flash {
          position: absolute; inset: 0; background: white;
          animation: vigFlash 1.3s steps(1) infinite;
          mix-blend-mode: screen;
        }
        .vig-scanlines {
          position: absolute; inset: 0; pointer-events: none;
          background: repeating-linear-gradient(to bottom,
            transparent 0, transparent 3px,
            rgba(255,255,255,0.04) 3px, rgba(255,255,255,0.04) 4px);
        }
      `}</style>

      <div className="vig-stage vig-stage-1">
        <img src={logoWhite} alt="Onmid" className="vig-logo" draggable={false} />
        <div className="vig-bar" style={{ top: "30%" }} />
        <div className="vig-bar" style={{ top: "62%", background: "#ff003c", height: 4 }} />
      </div>

      <div className="vig-stage vig-stage-2">
        <div className="vig-word">Vendas</div>
      </div>

      <div className="vig-stage vig-stage-3">
        <div className="vig-word vig-word-lime">DE ALTA</div>
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
