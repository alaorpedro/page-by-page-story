import { SlideLayout } from "@/components/SlideLayout";

export function Slide19() {
  return (
    <SlideLayout arcs="corners" logo="bc">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <h2 className="slide-title-lg text-lime animate-fade-in-up">
          Marketing Emocional
        </h2>

        <p
          className="slide-body-lg text-foreground mt-10 max-w-[1500px] animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          Se você está criando emoções que impulsionam a tomada de decisão,
          você não precisa saber apenas o estado emocional do seu potencial
          comprador, mas principalmente as{" "}
          <span className="hl-lime font-bold">
            crenças que eles usam para avaliar o peso emocional de qualquer
            coisa que você possa apresentar a eles.
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
