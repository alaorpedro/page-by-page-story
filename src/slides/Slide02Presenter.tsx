import { SlideLayout } from "@/components/SlideLayout";

/** 02 — Apresentação pessoal */
export function Slide02Presenter() {
  return (
    <SlideLayout arcs="corners" logo="tl" logoSize={120}>
      <div className="absolute inset-0 grid grid-cols-2 gap-24 px-32 pt-40 pb-24">
        {/* Left: photo placeholder */}
        <div
          className="relative flex items-center justify-center"
          style={{ animation: "fade-in-up 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="relative w-[640px] h-[760px] rounded-[40px] overflow-hidden border-2 border-lime/40"
               style={{ borderColor: "oklch(0.88 0.24 138 / 0.4)" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-white/40">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <span className="slide-caption">Foto / vídeo do apresentador</span>
            </div>
            <div className="absolute inset-0 ring-1 ring-white/10 rounded-[40px]" />
          </div>
        </div>

        {/* Right: bio */}
        <div className="flex flex-col justify-center">
          <div
            className="slide-kicker text-lime"
            style={{ animation: "fade-in-up 0.8s 0.5s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Apresentador
          </div>
          <h1
            className="mt-6 slide-title text-white"
            style={{ animation: "fade-in-up 0.9s 0.7s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Alaor Pedro <br />
            <span className="text-lime">de Oliveira</span>
          </h1>
          <p
            className="mt-8 slide-subtitle text-white/80"
            style={{
              fontSize: "44px",
              animation: "fade-in-up 0.9s 0.95s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            Diretor de Planejamento
          </p>

          <div
            className="mt-16 space-y-6"
            style={{ animation: "fade-in-up 0.9s 1.2s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <div className="flex items-start gap-5">
              <div className="mt-2 w-3 h-3 rounded-full bg-onmid-green" style={{ background: "oklch(0.72 0.27 142)" }} />
              <div className="slide-body-lg text-white/90">
                Av. Higienópolis, 1601 — Sala 07, Térreo
                <br />
                <span className="text-white/60">Londrina / PR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
