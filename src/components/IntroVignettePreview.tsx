import { useState } from "react";

/**
 * Radical intro vignette — preview only.
 * Sequence (~4s):
 *  0.0s  black flash
 *  0.2s  "ONMID" zoom from 1000% with RGB glitch
 *  1.0s  cut to "VENDAS" glitch
 *  1.8s  cut to "DE ALTA" lime block slam
 *  2.6s  cut to "PERFORMANCE" zoom-in
 *  3.2s  settle into final composition
 */
export function IntroVignettePreview({ hideReplay = false }: { hideReplay?: boolean } = {}) {
  const [runKey, setRunKey] = useState(0);


  return (
    <div className="relative w-full h-full bg-black overflow-hidden" key={runKey}>
      <style>{`
        @keyframes vig-flash {
          0%,100% { opacity: 0 }
          50% { opacity: 1 }
        }
        /* Slide from right + massive zoom + skew, settle with overshoot */
        @keyframes vig-swoosh {
          0%   { transform: translateX(140vw) scale(14) skewX(-20deg); filter: blur(60px); opacity: 0 }
          12%  { opacity: 1 }
          45%  { transform: translateX(35vw)  scale(5)  skewX(-12deg); filter: blur(14px) }
          60%  { filter: blur(0) }
          75%  { transform: translateX(-3vw)  scale(0.94) skewX(-2deg) }
          85%  { transform: translateX(2vw)   scale(1.06) skewX(2deg) }
          100% { transform: translateX(0)     scale(1)    skewX(0); opacity: 1 }
        }
        @keyframes vig-exit-left {
          0%   { transform: translateX(0) scale(1) skewX(0); opacity: 1; filter: blur(0) }
          100% { transform: translateX(-160vw) scale(0.35) skewX(22deg); opacity: 0; filter: blur(28px) }
        }
        @keyframes vig-glitch {
          0%, 100% { transform: translate(0,0); text-shadow: 0 0 0 transparent; clip-path: inset(0 0 0 0) }
          8%   { transform: translate(-16px, 4px); text-shadow: 12px 0 #ff003c, -12px 0 #00f0ff; clip-path: inset(15% 0 35% 0) }
          16%  { transform: translate(14px, -5px); text-shadow: -10px 0 #ff003c, 10px 0 #00f0ff; clip-path: inset(60% 0 8% 0) }
          24%  { transform: translate(-6px, 2px); text-shadow: 6px 0 #ff003c, -6px 0 #00f0ff; clip-path: inset(0 0 0 0) }
          40%  { transform: translate(8px, 1px); text-shadow: -5px 0 #ff003c, 5px 0 #00f0ff; clip-path: inset(40% 0 30% 0) }
          55%  { transform: translate(0,0); text-shadow: 0 0 0 transparent }
        }
        @keyframes vig-shake {
          0%, 100% { transform: translate(0,0) }
          25% { transform: translate(-14px, 7px) }
          50% { transform: translate(12px, -9px) }
          75% { transform: translate(-7px, 5px) }
        }
        @keyframes vig-bar-flicker {
          0%, 100% { opacity: 0 }
          10%, 30%, 60% { opacity: 1 }
          20%, 50%, 80% { opacity: 0.2 }
        }
        @keyframes vig-final-fade-in {
          0%, 95% { opacity: 0 }
          100% { opacity: 1 }
        }
        @keyframes vig-cut-show {
          0%, 100% { opacity: 0 }
          5%, 95%  { opacity: 1 }
        }
        @keyframes vig-scanlines {
          0% { background-position: 0 0 }
          100% { background-position: 0 8px }
        }
        @keyframes vig-strobe {
          0%, 60%, 100% { opacity: 0 }
          20%, 40% { opacity: 0.4 }
        }

        .vig-stage { position: absolute; inset: 0; display: grid; place-items: center; overflow: hidden; }
        .vig-word {
          font-family: var(--font-display);
          font-weight: 900;
          color: oklch(0.97 0.01 100);
          font-size: 360px;
          line-height: 0.85;
          letter-spacing: -0.06em;
          text-transform: uppercase;
          white-space: nowrap;
          will-change: transform, opacity, filter, text-shadow, clip-path;
        }
        .vig-scanlines {
          position: absolute; inset: 0; pointer-events: none; z-index: 50;
          background: repeating-linear-gradient(
            to bottom,
            oklch(0 0 0 / 0.22) 0px,
            oklch(0 0 0 / 0.22) 1px,
            transparent 1px,
            transparent 4px
          );
          mix-blend-mode: multiply;
          animation: vig-scanlines 0.6s linear infinite;
        }
        .vig-noise {
          position: absolute; inset: 0; pointer-events: none; z-index: 40;
          background-image: radial-gradient(oklch(0 0 0 / 0.4) 1px, transparent 1px);
          background-size: 3px 3px;
          opacity: 0.3;
          mix-blend-mode: overlay;
        }

        /* timeline */
        .vig-flash-1 { animation: vig-flash 0.18s ease-out 0s    1 both; background:#fff;              position:absolute; inset:0; z-index:60 }
        .vig-flash-2 { animation: vig-flash 0.14s ease-out 0.95s 1 both; background:var(--onmid-lime); position:absolute; inset:0; z-index:60 }
        .vig-flash-3 { animation: vig-flash 0.14s ease-out 1.75s 1 both; background:#fff;              position:absolute; inset:0; z-index:60 }
        .vig-flash-4 { animation: vig-flash 0.12s ease-out 2.55s 1 both; background:var(--onmid-lime); position:absolute; inset:0; z-index:60 }

        /* Each stage: swoosh in from right with zoom + glitch + exit left */
        .vig-stage-1 { animation: vig-cut-show 1.05s steps(1,end) 0.15s 1 both; }
        .vig-stage-1 .vig-word {
          animation:
            vig-swoosh   0.85s cubic-bezier(.16,.84,.2,1) 0.15s 1 both,
            vig-glitch   0.55s steps(1,end)               0.95s 2 both,
            vig-exit-left 0.22s cubic-bezier(.6,0,.9,.3)  1.05s 1 both;
        }

        .vig-stage-2 { animation: vig-cut-show 0.85s steps(1,end) 1.0s 1 both; }
        .vig-stage-2 .vig-word {
          animation:
            vig-swoosh   0.7s  cubic-bezier(.16,.84,.2,1) 1.0s  1 both,
            vig-glitch   0.45s steps(1,end)               1.55s 2 both,
            vig-exit-left 0.2s cubic-bezier(.6,0,.9,.3)   1.78s 1 both;
        }

        .vig-stage-3 { animation: vig-cut-show 0.85s steps(1,end) 1.8s 1 both; }
        .vig-stage-3 .vig-word {
          background: var(--onmid-lime);
          color: oklch(0.13 0.005 240);
          padding: 0 32px;
          animation:
            vig-swoosh   0.7s  cubic-bezier(.16,.84,.2,1) 1.8s  1 both,
            vig-shake    0.18s steps(2,end)               2.35s 2 both,
            vig-exit-left 0.2s cubic-bezier(.6,0,.9,.3)   2.58s 1 both;
        }

        .vig-stage-4 { animation: vig-cut-show 0.95s steps(1,end) 2.6s 1 both; }
        .vig-stage-4 .vig-word {
          font-size: 240px;
          animation:
            vig-swoosh 0.8s  cubic-bezier(.16,.84,.2,1) 2.6s  1 both,
            vig-glitch 0.45s steps(1,end)               3.25s 2 both;
        }

        .vig-final { animation: vig-final-fade-in 3.85s linear 0s 1 both; }

        .vig-bar { animation: vig-bar-flicker 0.6s steps(1,end) 0.4s 3 both; }
      `}</style>

      {/* ============== STAGE 1: ONMID ============== */}
      <div className="vig-stage vig-stage-1">
        <div className="vig-word">ONMID</div>
        <div
          className="vig-bar absolute left-0 right-0 h-2 bg-lime"
          style={{ top: "30%", background: "var(--onmid-lime)" }}
        />
        <div
          className="vig-bar absolute left-0 right-0 h-1"
          style={{ top: "62%", background: "#ff003c" }}
        />
      </div>

      {/* ============== STAGE 2: VENDAS ============== */}
      <div className="vig-stage vig-stage-2">
        <div className="vig-word">Vendas</div>
      </div>

      {/* ============== STAGE 3: DE ALTA (lime slam) ============== */}
      <div className="vig-stage vig-stage-3">
        <div className="vig-word">DE ALTA</div>
      </div>

      {/* ============== STAGE 4: PERFORMANCE ============== */}
      <div className="vig-stage vig-stage-4">
        <div className="vig-word">PERFORMANCE</div>
      </div>

      {/* ============== FINAL COMPOSITION ============== */}
      <div className="vig-final absolute inset-0" style={{ background: "oklch(0.13 0.005 240)" }}>
        <div className="absolute left-24 top-44 flex items-center gap-4">
          <div style={{ width: 36, height: 2, background: "var(--onmid-lime)" }} />
          <span
            className="uppercase font-bold"
            style={{ fontSize: 16, letterSpacing: "0.4em", color: "oklch(0.97 0.01 100 / 0.7)" }}
          >
            Onmid · Treinamento 2026
          </span>
        </div>
        <div className="absolute left-24 top-1/2 -translate-y-1/2">
          <h1
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 200,
              lineHeight: 0.88,
              letterSpacing: "-0.06em",
              color: "oklch(0.97 0.01 100)",
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
      </div>

      {/* Flashes (high z) */}
      <div className="vig-flash-1" />
      <div className="vig-flash-2" />
      <div className="vig-flash-3" />
      <div className="vig-flash-4" />

      {/* CRT overlays */}
      <div className="vig-scanlines" />
      <div className="vig-noise" />

      {/* Replay button */}
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
