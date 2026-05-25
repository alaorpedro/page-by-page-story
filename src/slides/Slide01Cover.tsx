import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

/** 01 — Capa */
export function Slide01Cover() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-24">
        <div className="animate-[fade-in_0.8s_ease-out_both]">
          <OnmidLogo size={300} />
        </div>

        <div
          className="mt-20 slide-kicker text-lime"
          style={{ animation: "fade-in-up 0.9s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Onmid — Marketing & Performance
        </div>

        <h1
          className="mt-10 slide-title-xl text-white"
          style={{ animation: "fade-in-up 1s 0.55s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Treinamento <span className="text-lime">de Vendas</span>
        </h1>
        <h2
          className="mt-6 slide-subtitle text-white/80"
          style={{ animation: "fade-in-up 1s 0.85s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Atendimento Online — Clínicas Odontológicas
        </h2>

        <div
          className="mt-24 flex items-center gap-6 slide-chrome text-white/60"
          style={{ animation: "fade-in 1s 1.2s ease-out both" }}
        >
          <span className="h-px w-16 bg-white/30" />
          <span className="tracking-[0.3em] uppercase">Conversão de Leads em Agendamentos</span>
          <span className="h-px w-16 bg-white/30" />
        </div>
      </div>
    </SlideLayout>
  );
}
