import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide17() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute top-14 left-14 animate-fade-in">
        <OnmidLogo size={170} />
      </div>

      <div className="absolute inset-0 flex items-center px-[6%] gap-12">
        <div
          className="relative animate-slide-in-left flex-shrink-0 rounded-3xl border"
          style={{
            width: 600,
            height: 760,
            background:
              "linear-gradient(180deg, var(--onmid-bg-2), var(--onmid-bg))",
            borderColor: "oklch(1 0 0 / 0.08)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <span className="slide-caption slide-kicker text-foreground/40">
              Foto: senhor sorrindo<br />com celular e cartão
            </span>
          </div>
        </div>

        <div className="flex-1 max-w-[900px]">
          <h2 className="slide-title-lg text-lime animate-fade-in-up">
            Porque as<br />pessoas compram?
          </h2>

          <p
            className="slide-body-lg text-foreground mt-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            O primeiro passo para entender o processo de compra é
            identificar se o que atrai o cliente até o serviço é o{" "}
            <span className="hl-lime font-bold">desejo</span> ou a{" "}
            <span className="hl-lime font-bold">necessidade.</span>
          </p>

          <p
            className="slide-body-lg text-foreground mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            A necessidade motiva a compra de serviços e produtos{" "}
            <span className="hl-lime font-bold">essenciais.</span> O desejo
            motiva a compra de produtos que melhoram a sua{" "}
            <span className="hl-lime font-bold">qualidade de vida.</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
