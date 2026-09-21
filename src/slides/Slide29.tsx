import { SlideLayout } from "@/components/SlideLayout";

export function Slide29() {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="29">
      {/*
        A rotação fica no wrapper e a animação no filho: `animate-scale-in`
        anima `transform` com fill-mode `both`, então na mesma tag ela
        sobrescreveria o `rotate(-9deg)` e a faixa ficaria reta.
      */}
      <div className="absolute inset-x-[-12%] top-[32%]" style={{ transform: "rotate(-9deg)" }}>
        <div
          className="py-16 animate-scale-in"
          style={{
            background: "var(--onmid-lime)",
            boxShadow: "0 30px 100px oklch(0 0 0 / 0.6)",
          }}
        >
          <p
            className="text-center uppercase"
            style={{
              fontFamily: "var(--font-display)",
              color: "oklch(0.13 0.005 240)",
              fontSize: 130,
              fontWeight: 900,
              letterSpacing: "-0.03em",
              lineHeight: 0.95,
            }}
          >
            Não atenda para
            <br />
            vender;{" "}
            <span style={{ color: "oklch(0.08 0.005 240)" }}>
              entenda
              <br />
              para atender.
            </span>
          </p>
        </div>
      </div>

      {/* Assinatura da seção — no topo, única faixa que a diagonal não cobre */}
      <div
        className="absolute left-16 top-44 z-30 animate-fade-in-up"
        style={{ animationDelay: "0.6s" }}
      >
        <div className="flex items-center gap-5">
          <span
            className="rounded-full"
            style={{
              width: 14,
              height: 14,
              background: "var(--onmid-lime)",
              boxShadow: "0 0 18px oklch(0.84 0.18 130 / 0.8)",
            }}
          />
          <span
            className="uppercase font-black"
            style={{
              fontSize: 22,
              letterSpacing: "0.4em",
              color: "var(--onmid-lime)",
            }}
          >
            A virada de chave
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
