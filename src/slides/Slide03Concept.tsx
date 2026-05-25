import { SlideLayout } from "@/components/SlideLayout";

/** 03 — Primeiro conceito de vendas */
export function Slide03Concept() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-40 text-center">
        <div
          className="slide-kicker text-lime"
          style={{ animation: "fade-in-up 0.8s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Conceito 01
        </div>

        <h2
          className="mt-8 slide-title text-white"
          style={{ animation: "fade-in-up 0.9s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          Por que as pessoas compram?
        </h2>

        <p
          className="mt-16 slide-body-lg text-white/85 max-w-[1400px]"
          style={{
            fontSize: "40px",
            animation: "fade-in-up 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          Nós acreditamos que os clientes tomam decisões de compra porque
          consideraram cuidadosamente nossa oferta, proposta e benefícios.
        </p>

        <p
          className="mt-10 slide-subtitle text-onmid-red"
          style={{
            fontSize: "52px",
            animation: "pop-in 0.9s 1.1s cubic-bezier(0.34,1.56,0.64,1) both",
          }}
        >
          Mas isso não é tudo.
        </p>

        <p
          className="mt-10 slide-body-lg text-white max-w-[1400px]"
          style={{
            fontSize: "40px",
            animation: "fade-in-up 0.9s 1.5s cubic-bezier(0.22,1,0.36,1) both",
          }}
        >
          Decisões de compra são sempre o resultado de uma{" "}
          <span className="hl-lime">mudança em seu estado emocional</span>.
        </p>
      </div>
    </SlideLayout>
  );
}
