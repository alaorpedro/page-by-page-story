import { SlideLayout } from "@/components/SlideLayout";

export function Slide05() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex items-center justify-center px-[8%]">
        <div className="text-center max-w-[1500px]">
          <h2
            className="slide-title text-white animate-[fade-in-up_0.8s_ease-out_both]"
            style={{ fontWeight: 700 }}
          >
            O que é mudança do Estado Emocional?
          </h2>
          <p
            className="slide-body-lg text-white mt-12 animate-[fade-in-up_0.9s_ease-out_0.2s_both]"
            style={{ fontWeight: 500 }}
          >
            É uma das{" "}
            <span className="hl-yellow" style={{ fontWeight: 700 }}>
              estratégias mais poderosas
            </span>{" "}
            para influenciar a decisão de compra. Ela consiste em mover o
            cliente de um estado emocional atual (dor, dúvida, desejo
            reprimido, insegurança, apatia){" "}
            <span className="hl-yellow" style={{ fontWeight: 700 }}>
              para um estado emocional mais propenso à ação
            </span>
            , como confiança, entusiasmo, urgência, pertencimento ou clareza.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
