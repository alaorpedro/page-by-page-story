import { SlideLayout } from "@/components/SlideLayout";

export function Slide18() {
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
          Compra emocional
        </h2>

        <p
          className="slide-body-lg text-white mt-10 max-w-[1500px] animate-[fade-in-up_0.8s_ease-out_0.25s_both]"
          style={{ fontWeight: 500 }}
        >
          Cada abordagem de vendas bem sucedida, ou cria ou{" "}
          <span className="hl-lime" style={{ fontWeight: 700 }}>
            aumenta esses estados emocionais.
          </span>{" "}
          E, quanto mais estados emocionais o discurso incita, maior o sucesso
          do vendedor e, maior a possibilidade de você convencer.
        </p>

        <p
          className="slide-body-lg text-white mt-10 max-w-[1400px] animate-[fade-in-up_0.8s_ease-out_0.5s_both]"
          style={{ fontWeight: 500 }}
        >
          Nada como{" "}
          <span className="hl-lime" style={{ fontWeight: 700 }}>
            influenciar
          </span>{" "}
          pessoas a comprar por meio de um bom discurso!
        </p>
      </div>
    </SlideLayout>
  );
}
