import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide02() {
  return (
    <SlideLayout arcs="none" logo="none">
      {/* Concentric ring background */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
        {Array.from({ length: 14 }).map((_, i) => (
          <ellipse
            key={i}
            cx="960"
            cy="540"
            rx={520 + i * 70}
            ry={300 + i * 38}
            fill="none"
            stroke="oklch(1 0 0 / 0.05)"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="absolute inset-0 flex items-center justify-between px-[8%] gap-16">
        {/* Toggle-shape photo placeholder */}
        <div
          className="relative animate-[scale-in_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{ width: 720, height: 360 }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: "var(--onmid-green)" }}
          />
          <div
            className="absolute top-1/2 right-6 -translate-y-1/2 rounded-full bg-[#0d0d0d]"
            style={{ width: 280, height: 280 }}
          />
          <div className="absolute inset-0 flex items-center justify-start pl-16">
            <span className="text-black/40 slide-caption font-semibold uppercase tracking-widest">
              Foto do apresentador
            </span>
          </div>
        </div>

        <div className="flex-1 animate-[fade-in-up_0.9s_ease-out_0.2s_both]">
          <h2 className="slide-subtitle text-white" style={{ fontWeight: 700 }}>
            Alaor Pedro de Oliveira
          </h2>
          <p className="slide-body text-white/60 mt-1">@alaorpedro10</p>
          <ul className="slide-body text-white/90 mt-8 space-y-2">
            <li>· Marketing e Publicidade · UNOPAR</li>
            <li>· Gestão de RH · UNOPAR</li>
            <li>· Gestão Comercial · UNOPAR</li>
            <li>· Practitioner em PNL · INEMP</li>
          </ul>
          <ul className="slide-body text-white/90 mt-6 space-y-2">
            <li>· Diretor de Planejamento na ONMID</li>
            <li>· Associação Brasileira de Franchising</li>
          </ul>
        </div>
      </div>

      {/* Footer band */}
      <div className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-12 animate-[fade-in_1s_ease-out_0.6s_both]">
        <OnmidLogo size={130} />
        <div className="slide-caption text-white/80 leading-tight">
          alaor@onmid.com.br<br />(43) 9 9664 2777
        </div>
        <div className="slide-caption text-white/80 leading-tight">
          onmid.com.br<br />Av. Higienópolis, 1601 · Sala 07 · Térreo · Londrina/PR
        </div>
      </div>
    </SlideLayout>
  );
}
