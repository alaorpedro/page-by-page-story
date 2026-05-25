import { SlideLayout } from "@/components/SlideLayout";

export function Slide11() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 px-[8%] py-[6%]">
        <h2
          className="text-white animate-[fade-in-up_0.8s_ease-out_both]"
          style={{ fontSize: 120, fontWeight: 800, letterSpacing: "-0.04em" }}
        >
          Planejamento
        </h2>

        <div className="mt-10 space-y-8 max-w-[1400px]">
          <div className="animate-[fade-in-up_0.7s_ease-out_0.2s_both]">
            <p
              className="slide-body-lg"
              style={{ color: "var(--onmid-lime)", fontWeight: 700 }}
            >
              Como analisar o lead?
            </p>
            <p className="slide-body-lg text-white mt-2" style={{ fontWeight: 400 }}>
              Origem, horário de contato, gênero, idade, localização, fotos, etc...
            </p>
          </div>

          <div className="animate-[fade-in-up_0.7s_ease-out_0.4s_both]">
            <p
              className="slide-body-lg"
              style={{ color: "var(--onmid-lime)", fontWeight: 700 }}
            >
              O que dizer para o lead?
            </p>
            <p className="slide-body-lg text-white mt-2" style={{ fontWeight: 400 }}>
              Sinceridade, confiança, segurança, autoridade, superioridade, empatia, etc...
            </p>
          </div>

          {/* Circled item */}
          <div className="relative inline-block animate-[fade-in-up_0.7s_ease-out_0.6s_both]">
            <svg
              className="absolute -inset-x-10 -inset-y-6 pointer-events-none"
              viewBox="0 0 1300 250"
              preserveAspectRatio="none"
            >
              <ellipse
                cx="650"
                cy="125"
                rx="640"
                ry="110"
                fill="none"
                stroke="oklch(0.68 0.24 27)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ transform: "rotate(-2deg)", transformOrigin: "center" }}
              />
            </svg>
            <div className="relative">
              <p
                className="slide-body-lg"
                style={{ color: "var(--onmid-lime)", fontWeight: 700 }}
              >
                Quais informações necessárias para qualificar o lead?
              </p>
              <p className="slide-body text-white mt-2" style={{ fontWeight: 400 }}>
                Se entendeu o anúncio, se está no momento de compra, o que
                impossibilitou de fazer até hoje, se está disposto a participar
                de um desafio
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
