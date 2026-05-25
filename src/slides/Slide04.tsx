import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide04() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 flex items-center px-[7%] gap-16">
        <div className="flex-1 max-w-[1050px]">
          <div className="animate-[fade-in-up_0.7s_ease-out_both]">
            <OnmidLogo size={170} />
          </div>
          <p
            className="slide-body-lg text-white mt-10 animate-[fade-in-up_0.8s_ease-out_0.15s_both]"
            style={{ fontWeight: 500 }}
          >
            Nós acreditamos que os clientes tomam decisões de
            compra porque consideraram cuidadosamente nossa
            oferta, proposta e benefícios.
          </p>

          <p
            className="slide-body-lg text-white mt-8 inline-block px-3 py-1 animate-[fade-in-up_0.8s_ease-out_0.45s_both]"
            style={{
              fontWeight: 700,
              border: "3px solid oklch(0.68 0.24 27)",
              borderRadius: "999px",
            }}
          >
            Mas isso não é tudo.
          </p>

          <p
            className="slide-body-lg text-white mt-8 animate-[fade-in-up_0.8s_ease-out_0.7s_both]"
            style={{ fontWeight: 500 }}
          >
            Decisões de compra são sempre o resultado de uma{" "}
            <span className="hl-yellow" style={{ fontWeight: 700 }}>
              mudança em seu estado emocional
            </span>
          </p>
        </div>

        {/* Right-side man with phone placeholder */}
        <div
          className="relative rounded-3xl overflow-hidden animate-[fade-in_1s_ease-out_0.3s_both]"
          style={{
            width: 560,
            height: 780,
            background:
              "linear-gradient(135deg, oklch(0.3 0.02 240), oklch(0.18 0.005 240))",
            border: "1px solid oklch(1 0 0 / 0.08)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="slide-caption text-white/40 uppercase tracking-widest">
              Foto: cliente sorrindo com celular
            </span>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
