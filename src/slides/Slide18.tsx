import { SlideLayout } from "@/components/SlideLayout";

export function Slide18() {
  return (
    <SlideLayout arcs="corners" logo="bc">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <h2 className="slide-title-lg text-lime animate-fade-in-up">
          Compra emocional
        </h2>

        <p
          className="slide-body-lg text-foreground mt-10 max-w-[1500px] animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Cada abordagem de vendas bem sucedida, ou cria ou{" "}
          <span className="hl-lime font-bold">aumenta esses estados emocionais.</span>{" "}
          E, quanto mais estados emocionais o discurso incita, maior o sucesso
          do vendedor e, maior a possibilidade de você convencer.
        </p>

        <p
          className="slide-body-lg text-foreground mt-10 max-w-[1400px] animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          Nada como <span className="hl-lime font-bold">influenciar</span>{" "}
          pessoas a comprar por meio de um bom discurso!
        </p>
      </div>
    </SlideLayout>
  );
}
