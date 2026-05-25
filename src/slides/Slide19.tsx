import { SlideLayout } from "@/components/SlideLayout";

export function Slide19() {
  return (
    <SlideLayout arcs="corners" logo="bc">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <h2
          className="animate-[fade-in-up_0.8s_ease-out_both]"
          style={{
            fontSize: 110,
            fontWeight: 800,
            color: "var(--onmid-lime)",
            letterSpacing: "-0.03em",
          }}
        >
          Marketing Emocional
        </h2>

        <p
          className="slide-body-lg text-white mt-10 max-w-[1500px] animate-[fade-in-up_0.8s_ease-out_0.25s_both]"
          style={{ fontWeight: 500 }}
        >
          Se você está criando emoções que impulsionam a tomada de decisão,
          você não precisa saber apenas o estado emocional do seu potencial
          comprador, mas principalmente as{" "}
          <span className="hl-lime" style={{ fontWeight: 700 }}>
            crenças que eles usam para avaliar o peso emocional de qualquer
            coisa que você possa apresentar a eles.
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
