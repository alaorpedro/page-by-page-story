import { SlideLayout } from "@/components/SlideLayout";

export function Slide17() {
  return (
    <SlideLayout
      variant="content"
      tone="light"
      bgLetter="?"
    >

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
          17<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px max-w-[600px]" style={{ background: "oklch(0 0 0 / 0.12)" }} />
        <div
          className="uppercase font-bold mr-auto"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(0.18 0.01 240 / 0.55)" }}
        >
          Decisão de Compra
        </div>
      </div>

      {/* Body */}
      <div className="absolute left-16 right-16 top-[270px] max-w-[1300px]">
        <h2
          className="uppercase animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 124,
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            color: "oklch(0.13 0.005 240)",
            animationDelay: "0.1s",
          }}
        >
          Por que<br />
          as pessoas{" "}
          <span
            className="px-4 inline-block"
            style={{
              background: "var(--onmid-lime)",
              color: "oklch(0.13 0.005 240)",
              transform: "skewX(-4deg)",
            }}
          >
            compram?
          </span>
        </h2>

        <p
          className="mt-8 font-medium max-w-[920px] animate-fade-in-up"
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            color: "oklch(0.18 0.01 240 / 0.75)",
            animationDelay: "0.3s",
          }}
        >
          O primeiro passo é identificar se o que atrai o cliente é o{" "}
          <span className="font-black" style={{ color: "oklch(0.13 0.005 240)" }}>
            desejo
          </span>{" "}
          ou a{" "}
          <span className="font-black" style={{ color: "oklch(0.13 0.005 240)" }}>
            necessidade
          </span>
          .
        </p>
      </div>

      {/* Bottom cards */}
      <div
        className="absolute left-16 right-16 bottom-24 grid grid-cols-2 gap-6 max-w-[1200px] animate-fade-in-up"
        style={{ animationDelay: "0.45s" }}
      >
        <div
          className="p-6"
          style={{
            background: "oklch(0.13 0.005 240)",
            color: "oklch(0.98 0 0)",
            borderLeft: "6px solid var(--onmid-lime)",
          }}
        >
          <div
            className="text-lime uppercase font-black mb-2"
            style={{ fontSize: 16, letterSpacing: "0.25em" }}
          >
            Necessidade
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.35 }}>
            Motiva a compra de serviços e produtos essenciais.
          </div>
        </div>
        <div
          className="p-6"
          style={{
            background: "oklch(0 0 0 / 0.04)",
            borderLeft: "6px solid oklch(0 0 0 / 0.2)",
          }}
        >
          <div
            className="uppercase font-black mb-2"
            style={{ fontSize: 16, letterSpacing: "0.25em", color: "oklch(0.18 0.01 240 / 0.6)" }}
          >
            Desejo
          </div>
          <div style={{ fontSize: 20, lineHeight: 1.35, color: "oklch(0.18 0.01 240 / 0.8)" }}>
            Motiva a compra do que melhora a qualidade de vida.
          </div>
        </div>
      </div>

    </SlideLayout>
  );
}
