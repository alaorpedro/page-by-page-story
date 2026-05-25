import { SlideLayout } from "@/components/SlideLayout";
import { OnmidMark } from "@/components/OnmidMark";

export function Slide31() {
  return (
    <SlideLayout variant="hero">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <div
          className="h-3 mb-12 animate-slide-in-left"
          style={{ width: 200, background: "var(--onmid-lime)" }}
        />
        <h1 className="slide-title-xl text-foreground uppercase animate-fade-in-up">
          Obrigado pelo<br />
          <span className="text-lime">tempo e presença</span>
        </h1>

        <div
          className="mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <OnmidMark size={64} />
        </div>

        <div
          className="mt-12 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="slide-subtitle text-foreground font-bold">
            Alaor Pedro de Oliveira
          </p>
          <p className="slide-body text-foreground/60 mt-1">
            Diretor de Planejamento
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
