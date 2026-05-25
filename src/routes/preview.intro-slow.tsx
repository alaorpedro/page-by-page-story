import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoWhite from "@/assets/onmid-logo-white.png";

/** SLOW-MOTION test of the vignette to validate visual correctness. */
function SlowVignette() {
  const [key, setKey] = useState(0);
  return (
    <div className="fixed inset-0 bg-black overflow-hidden" key={key}>
      <style>{`
        @keyframes vigZoomLogo {
          0%   { transform: scale(0.4); opacity: 0; filter: blur(20px); }
          15%  { transform: scale(1); opacity: 1; filter: blur(0); }
          55%  { transform: scale(1.05); opacity: 1; filter: blur(0); }
          70%  { transform: scale(8); opacity: 0.9; filter: blur(2px); }
          100% { transform: scale(14); opacity: 0; filter: blur(8px); }
        }
        @keyframes vigZoomWord {
          0%   { transform: scale(0.2) skewX(-12deg); opacity: 0; }
          10%  { transform: scale(1.1) skewX(-4deg); opacity: 1; }
          40%  { transform: scale(1.15) skewX(-4deg); opacity: 1; }
          60%  { transform: scale(10) skewX(8deg); opacity: 0.6; filter: blur(4px); }
          100% { transform: scale(14) skewX(8deg); opacity: 0; }
        }
        @keyframes vigFlash {
          0%, 31%   { opacity: 0; }
          32%       { opacity: 0.85; }
          34%, 64%  { opacity: 0; }
          65%       { opacity: 0.85; }
          67%, 100% { opacity: 0; }
        }
        @keyframes vigStage1 { 0%,32% { opacity: 1; } 33%,100% { opacity: 0; } }
        @keyframes vigStage2 { 0%,32% { opacity: 0; } 33%,65% { opacity: 1; } 66%,100% { opacity: 0; } }
        @keyframes vigStage3 { 0%,65% { opacity: 0; } 66%,100% { opacity: 1; } }
        .s { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; opacity: 0; }
        .s1 { animation: vigStage1 12s steps(1) forwards; }
        .s2 { animation: vigStage2 12s steps(1) forwards; }
        .s3 { animation: vigStage3 12s steps(1) forwards; }
        .logo { height: 380px; animation: vigZoomLogo 3.84s cubic-bezier(.2,.7,.2,1) forwards; }
        .word { font-weight: 900; color: white; font-size: 360px; line-height: 0.85; letter-spacing: -0.06em; text-transform: uppercase; font-family: var(--font-display, system-ui); }
        .s2 .word { animation: vigZoomWord 3.84s cubic-bezier(.2,.7,.2,1) 3.96s both; }
        .s3 .word { animation: vigZoomWord 3.84s cubic-bezier(.2,.7,.2,1) 7.92s both; }
        .lime { color: var(--onmid-lime, #c7ff3a); }
        .flash { position: absolute; inset: 0; background: white; animation: vigFlash 12s steps(1) forwards; opacity: 0; }
      `}</style>
      <div className="s s1"><img src={logoWhite} alt="" className="logo" /></div>
      <div className="s s2"><div className="word">Vendas</div></div>
      <div className="s s3"><div className="word lime">DE ALTA</div></div>
      <div className="flash" />
      <button onClick={() => setKey(k => k + 1)} className="absolute bottom-6 right-6 z-50 px-4 py-2 bg-white text-black font-bold rounded">Replay</button>
    </div>
  );
}

export const Route = createFileRoute("/preview/intro-slow")({
  component: SlowVignette,
});
