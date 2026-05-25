import { SlideLayout } from "@/components/SlideLayout";

export function Slide04() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="4">
      {/* Section kicker */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.18 0.01 240)",
          }}
        >
          04<span className="text-lime">.</span>
        </div>
        <div
          className="flex-1 h-px max-w-[600px]"
          style={{ background: "oklch(0 0 0 / 0.12)" }}
        />
        <div
          className="uppercase font-bold mr-auto"
          style={{
            fontSize: 18,
            letterSpacing: "0.35em",
            color: "oklch(0.18 0.01 240 / 0.55)",
          }}
        >
          Nossa Crença
        </div>
      </div>


      {/* Body */}
      <div className="absolute left-16 right-16 top-[300px] bottom-32 max-w-[1280px]">
        <p
          className="font-medium animate-fade-in-up"
          style={{
            fontSize: 44,
            lineHeight: 1.28,
            color: "oklch(0.18 0.01 240 / 0.78)",
            animationDelay: "0.1s",
          }}
        >
          Nós acreditamos que os clientes tomam decisões de compra porque
          consideraram cuidadosamente nossa oferta, proposta e benefícios.
        </p>

        <p
          className="mt-10 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 72,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "oklch(0.13 0.005 240)",
            animationDelay: "0.25s",
          }}
        >
          Mas isso não é tudo.
        </p>

        <p
          className="mt-10 font-medium animate-fade-in-up"
          style={{
            fontSize: 44,
            lineHeight: 1.28,
            color: "oklch(0.18 0.01 240 / 0.78)",
            animationDelay: "0.4s",
          }}
        >
          Decisões de compra são sempre o resultado de uma{" "}
          <span
            className="px-3 inline-block font-black"
            style={{
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              transform: "skewX(-4deg)",
            }}
          >
            mudança em seu estado emocional
          </span>
          .
        </p>

      </div>
    </SlideLayout>
  );
}
