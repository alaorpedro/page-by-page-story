import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide17() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute top-14 left-14 animate-[fade-in_0.7s_ease-out_both]">
        <OnmidLogo size={170} />
      </div>

      <div className="absolute inset-0 flex items-center px-[6%] gap-12">
        {/* Photo placeholder */}
        <div
          className="relative animate-[slide-in-left_0.9s_ease-out_both]"
          style={{
            width: 600,
            height: 760,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, oklch(0.32 0.02 240), oklch(0.18 0.005 240))",
            border: "1px solid oklch(1 0 0 / 0.08)",
            flexShrink: 0,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <span className="slide-caption text-white/40 uppercase tracking-widest">
              Foto: senhor sorrindo<br />com celular e cartão
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-[900px]">
          <h2
            className="animate-[fade-in-up_0.8s_ease-out_0.2s_both]"
            style={{
              fontSize: 120,
              fontWeight: 800,
              lineHeight: 1.0,
              color: "var(--onmid-lime)",
              letterSpacing: "-0.03em",
            }}
          >
            Porque as<br />pessoas compram?
          </h2>

          <p
            className="slide-body-lg text-white mt-10 animate-[fade-in-up_0.8s_ease-out_0.4s_both]"
            style={{ fontWeight: 500 }}
          >
            O primeiro passo para entender o processo de compra é
            identificar se o que atrai o cliente até o serviço é o{" "}
            <span className="hl-lime" style={{ fontWeight: 700 }}>
              desejo
            </span>{" "}
            ou a{" "}
            <span className="hl-lime" style={{ fontWeight: 700 }}>
              necessidade.
            </span>
          </p>

          <p
            className="slide-body-lg text-white mt-8 animate-[fade-in-up_0.8s_ease-out_0.6s_both]"
            style={{ fontWeight: 500 }}
          >
            A necessidade motiva a compra de serviços e produtos{" "}
            <span className="hl-lime" style={{ fontWeight: 700 }}>
              essenciais.
            </span>{" "}
            O desejo motiva a compra de produtos que melhoram a sua{" "}
            <span className="hl-lime" style={{ fontWeight: 700 }}>
              qualidade de vida.
            </span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
