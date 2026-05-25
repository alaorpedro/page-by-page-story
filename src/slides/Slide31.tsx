import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide31() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <h1 className="slide-title-lg text-lime animate-fade-in-up">
          Obrigado pelo<br />tempo e presença
        </h1>

        <div
          className="mt-20 animate-scale-in"
          style={{ animationDelay: "0.3s" }}
        >
          <OnmidLogo size={300} />
        </div>

        <div
          className="mt-14 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="slide-subtitle text-foreground font-bold">
            Alaor Pedro de Oliveira
          </p>
          <p className="slide-body text-foreground/80 mt-1">
            Diretor de Planejamento
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
