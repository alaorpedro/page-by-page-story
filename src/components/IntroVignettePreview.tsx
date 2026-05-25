import { useState } from "react";
import logoWhite from "@/assets/onmid-logo-white.png";

type Props = { hideReplay?: boolean };

/**
 * Radical intro vignette.
 * Sequence (~3.4s):
 *  0.0s  white flash
 *  0.2s  Logo Onmid zoom-out + RGB glitch
 *  1.0s  cut to "VENDAS" glitch
 *  1.8s  cut to "DE ALTA" lime slam
 *  2.6s  cut to "PERFORMANCE" zoom-in
 *  3.2s  settle
 */
export function IntroVignettePreview({ hideReplay = false }: Props) {
  const [runKey, setRunKey] = useState(0);

  return (
    <div className="relative w-full h-full bg-black overflow-hidden" key={runKey}>
      <style>{`
        @keyframes vig-flash {
          0%,100% { opacity: 0 }
          50% { opacity: 1 }
        }
        @keyframes vig-zoom-out {
          0% { transform: scale(10); filter: blur(40px); opacity: 0 }
          20% { opacity: 1 }
          100% { transform: scale(1); filter: blur(0); opacity: 1 }
        }
        @keyframes vig-zoom-out-logo {
          0% { transform: scale(8); filter: blur(30px); opacity: 0 }
          20% { opacity: 1 }
          100% { transform: scale(1); filter: blur(0); opacity: 1 }
        }
        @keyframes vig-glitch {
          0%, 100% { transform: translate(0,0); text-shadow: 0 0 0 transparent }
          10% { transform: translate(-8px, 2px); text-shadow: 6px 0 #ff003c, -6px 0 #00f0ff }
          20% { transform: translate(6px, -3px); text-shadow: -4px 0 #ff003c, 4px 0 #00f0ff }
          30% { transform: translate(-3px, 1px); text-shadow: 3px 0 #ff003c, -3px 0 #00f0ff }
          40% { transform: translate(0,0); text-shadow: 0 0 0 transparent }
        }
        @keyframes vig-shake {
          0%, 100% { transform: translate(0,0) }
          25% { transform: translate(-12px, 6px) }
          50% { transform: translate(10px, -8px) }
          75% { transform: translate(-6px, 4px) }
        }
        @keyframes vig-bar-flicker {
          0%, 100% { opacity: 0 }
          10%, 30%, 60% { opacity: 1 }
          20%, 50%, 80% { opacity: 0.2 }
        }
        @keyframes vig-slam-in {
          0% { transform: scale(20) skewX(-12deg); opacity: 0; filter: blur(20px) }
          60% { transform: scale(0.9) skewX(-6deg); opacity: 1; filter: blur(0) }
          80% { transform: scale(1.05) skewX(-4deg) }
          100% { transform: scale(1) skewX(-4deg) }
        }
        @keyframes vig-cut-show {
          0%, 100% { opacity: 0 }
          5%, 95% { opacity: 1 }
        }
        @keyframes vig-scanlines {
          0% { background-position: 0 0 }
          100% { background-position: 0 8px }
        }

        .vig-stage { position: absolute; inset: 0; display: grid; place-items: center; }
        .vig-word {
          font-family: var(--font-display);
          font-weight: 900;
          color: oklch(0.97 0.01 100);
          font-size: 360px;
          line-height: 0.85;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          will-change: transform, opacity, filter;
        }
        .vig-logo-img {
          width: 60%;
          max-width: 900px;
          height: auto;
          will-change: transform, opacity, filter;
          filter: drop-shadow(0 0 40px oklch(0.88 0.24 138 / 0.5));
        }
        .vig-scanlines {
          position: absolute; inset: 0; pointer-events: none; z-index: 50;
          background: repeating-linear-gradient(
            to bottom,
            oklch(0 0 0 / 0.18) 0px,
            oklch(0 0 0 / 0.18) 1px,
            transparent 1px,
            transparent 4px
          );
          mix-blend-mode: multiply;
          animation: vig-scanlines 0.6s linear infinite;
        }
        .vig-noise {
          position: absolute; inset: 0; pointer-events: none; z-index: 40;
          background-image: radial-gradient(oklch(0 0 0 / 0.35) 1px, transparent 1px);
          background-size: 3px 3px;
          opacity: 0.25;
          mix-blend-mode: overlay;
        }

        /* timeline */
        .vig-flash-1 { animation: vig-flash 0.2s ease-out 0s 1 both; background:#fff; position:absolute; inset:0; z-index:60 }
        .vig-flash-2 { animation: vig-flash 0.12s ease-out 1.0s 1 both; background:var(--onmid-lime); position:absolute; inset:0; z-index:60 }
        .vig-flash-3 { animation: vig-flash 0.12s ease-out 1.8s 1 both; background:#fff; position:absolute; inset:0; z-index:60 }
        .vig-flash-4 { animation: vig-flash 0.1s ease-out 2.6s 1 both; background:var(--onmid-lime); position:absolute; inset:0; z-index:60 }

        .vig-stage-1 { animation: vig-cut-show 0.8s steps(1,end) 0.2s 1 both; }
        .vig-stage-1 .vig-logo-img { animation: vig-zoom-out-logo 0.7s cubic-bezier(.2,.8,.2,1) 0.2s 1 both; }

        .vig-stage-2 { animation: vig-cut-show 0.8s steps(1,end) 1.0s 1 both; }
        .vig-stage-2 .vig-word { animation: vig-zoom-out 0.5s cubic-bezier(.2,.8,.2,1) 1.0s 1 both, vig-glitch 0.4s steps(1,end) 1.4s 1 both; }

        .vig-stage-3 { animation: vig-cut-show 0.8s steps(1,end) 1.8s 1 both; }
        .vig-stage-3 .vig-word {
          background: var(--onmid-lime);
          color: oklch(0.13 0.005 240);
          padding: 0 32px;
          animation: vig-slam-in 0.6s cubic-bezier(.2,.8,.2,1) 1.8s 1 both, vig-shake 0.2s steps(2,end) 2.3s 2 both;
        }

        .vig-stage-4 { animation: vig-cut-show 0.6s steps(1,end) 2.6s 1 both; }
        .vig-stage-4 .vig-word { font-size: 240px; animation: vig-zoom-out 0.55s cubic-bezier(.2,.8,.2,1) 2.6s 1 both, vig-glitch 0.3s steps(1,end) 3.0s 1 both; }

        .vig-bar { animation: vig-bar-flicker 0.6s steps(1,end) 0.4s 3 both; }
      `}</style>

      {/* STAGE 1: Logo Onmid */}
      <div className="vig-stage vig-stage-1">
        <img src={logoWhite} alt="Onmid" className="vig-logo-img" draggable={false} />
        <div
          className="vig-bar absolute left-0 right-0 h-2"
          style={{ top: "30%", background: "var(--onmid-lime)" }}
        />
        <div
          className="vig-bar absolute left-0 right-0 h-1"
          style={{ top: "62%", background: "#ff003c" }}
        />
      </div>

      {/* STAGE 2: VENDAS */}
      <div className="vig-stage vig-stage-2">
        <div className="vig-word">Vendas</div>
      </div>

      {/* STAGE 3: DE ALTA (lime slam) */}
      <div className="vig-stage vig-stage-3">
        <div className="vig-word">DE ALTA</div>
      </div>

      {/* STAGE 4: PERFORMANCE */}
      <div className="vig-stage vig-stage-4">
        <div className="vig-word">PERFORMANCE</div>
      </div>

      {/* Flashes */}
      <div className="vig-flash-1" />
      <div className="vig-flash-2" />
      <div className="vig-flash-3" />
      <div className="vig-flash-4" />

      {/* CRT overlays */}
      <div className="vig-scanlines" />
      <div className="vig-noise" />

      {!hideReplay && (
        <button
          onClick={() => setRunKey((k) => k + 1)}
          className="absolute bottom-8 right-8 z-[100] uppercase font-bold px-6 py-3 rounded-full"
          style={{
            fontSize: 14,
            letterSpacing: "0.3em",
            background: "var(--onmid-lime)",
            color: "oklch(0.13 0.005 240)",
          }}
        >
          ▶ Reproduzir de novo
        </button>
      )}
    </div>
  );
}
