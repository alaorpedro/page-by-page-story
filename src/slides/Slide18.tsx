import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

export function Slide18() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="18">
      <SlideHeader number="18" label="Neurovendas" tone="dark" />

      <div className="absolute left-16 right-16 top-[280px] max-w-[1500px]">
        <h2
          className="uppercase animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 124,
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.1s",
          }}
        >
          Compra{" "}
          <span
            className="px-4 inline-block"
            style={{
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              transform: "skewX(-4deg)",
            }}
          >
            emocional
          </span>
        </h2>

        <div className="mt-12 space-y-9">
          <p
            className="font-medium animate-fade-in-up"
            style={{
              fontSize: 32,
              lineHeight: 1.4,
              color: "oklch(1 0 0 / 0.78)",
              animationDelay: "0.3s",
            }}
          >
            Cada abordagem de vendas bem sucedida, ou cria ou{" "}
            <span className="hl-lime font-bold">aumenta esses estados emocionais.</span> E, quanto
            mais estados emocionais o discurso incita, maior o sucesso do vendedor e, maior a
            possibilidade de você convencer.
          </p>

          <div className="relative pl-12 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <span
              aria-hidden
              className="absolute left-0 top-1 bottom-1 rounded-full"
              style={{
                width: 8,
                background: "var(--onmid-lime)",
                boxShadow: "0 0 24px oklch(0.84 0.18 130 / 0.6)",
              }}
            />
            <p
              className="font-bold"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 44,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                color: "oklch(0.98 0 0)",
              }}
            >
              Nada como <span className="text-lime">influenciar</span> pessoas a comprar por meio de
              um bom discurso!
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
