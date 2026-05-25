import { SlideLayout } from "@/components/SlideLayout";

export function Slide12() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 px-[6%] py-[7%]">
        <h2
          className="text-white inline-block animate-[fade-in-up_0.8s_ease-out_both] uppercase"
          style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}
        >
          <span className="hl-lime">O QUE ACONTECE NO CÉREBRO</span>
          <br />
          <span className="hl-lime">NESSE MOMENTO?</span>
        </h2>

        <div className="grid grid-cols-2 gap-12 mt-16">
          <div className="space-y-7 text-white slide-body" style={{ fontWeight: 400 }}>
            <div className="animate-[fade-in-up_0.7s_ease-out_0.2s_both]">
              <p className="uppercase" style={{ fontWeight: 700 }}>
                CORTISOL / NORADRENALINA
              </p>
              <p>
                o cliente assume a procrastinação ou a dor emocional (alerta,
                frustração);
              </p>
            </div>
            <div className="animate-[fade-in-up_0.7s_ease-out_0.35s_both]">
              <p className="uppercase" style={{ fontWeight: 700 }}>
                ESTADO DE TENSÃO INTERNA
              </p>
              <p>ele quer sair disso, o corpo busca alívio e resolução;</p>
            </div>
            <div className="animate-[fade-in-up_0.7s_ease-out_0.5s_both]">
              <p className="uppercase" style={{ fontWeight: 700 }}>
                VOCÊ OFERECE UM DESAFIO (UM CHAMADO DE AÇÃO)
              </p>
              <p>cria tensão positiva: um caminho de superação;</p>
            </div>
            <div className="animate-[fade-in-up_0.7s_ease-out_0.65s_both]">
              <p
                className="uppercase inline-block px-2"
                style={{
                  fontWeight: 700,
                  background: "oklch(1 0 0 / 0.1)",
                }}
              >
                AÇÃO TOMADA (DECISÃO DE COMPRA)
              </p>
              <p className="inline-block px-2" style={{ background: "oklch(1 0 0 / 0.1)" }}>
                o cérebro recompensa a coragem e o movimento com:
              </p>
            </div>
          </div>

          <div className="relative animate-[fade-in_1s_ease-out_0.3s_both]">
            {/* Brain placeholder */}
            <div
              className="ml-auto rounded-full"
              style={{
                width: 360,
                height: 360,
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.85 0.18 320), oklch(0.55 0.22 290) 50%, oklch(0.3 0.18 280) 100%)",
                filter: "drop-shadow(0 20px 50px oklch(0.55 0.22 290 / 0.6))",
              }}
            />

            <div
              className="absolute right-0 bottom-0 rounded-3xl p-8 text-white space-y-4 slide-body animate-[slide-in-right_0.8s_ease-out_0.6s_both]"
              style={{
                width: 540,
                background: "oklch(0.25 0.01 240 / 0.9)",
                border: "1px solid oklch(1 0 0 / 0.1)",
              }}
            >
              <p>
                <span className="hl-lime" style={{ fontWeight: 700 }}>
                  DOPAMINA
                </span>{" "}
                (motivação e prazer por agir);
              </p>
              <p>
                <span className="hl-lime" style={{ fontWeight: 700 }}>
                  OCITOCINA
                </span>{" "}
                (vínculo com quem guiou a decisão — você);
              </p>
              <p>
                <span className="hl-lime" style={{ fontWeight: 700 }}>
                  ENDORFINA
                </span>{" "}
                (alívio emocional por sair da estagnação).
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
