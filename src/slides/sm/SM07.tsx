import { SlideLayout } from "@/components/SlideLayout";

export function SM07() {
  return (
    <SlideLayout variant="statement" tone="light" bgLetter="=">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="slide-kicker animate-fade-in-up"
          style={{
            color: "oklch(0.55 0.2 138)",
            letterSpacing: "0.4em",
            marginBottom: 40,
          }}
        >
          04 · Diferenciação
        </p>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 140,
            lineHeight: 0.95,
            fontWeight: 900,
            letterSpacing: "-0.045em",
            color: "oklch(0.18 0.01 240)",
            animationDelay: "0.2s",
            maxWidth: 1700,
          }}
        >
          Se eu apagar sua logo,<br />
          <span style={{ color: "oklch(0.55 0.2 138)", fontStyle: "italic" }}>
            dá pra saber
          </span>{" "}
          que é você?
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 56,
            fontSize: 32,
            lineHeight: 1.35,
            color: "oklch(0.18 0.01 240 / 0.65)",
            maxWidth: 1200,
            fontWeight: 500,
            animationDelay: "0.4s",
          }}
        >
          90% das clínicas no Instagram parecem a mesma clínica. Mesma paleta,
          mesma frase, mesma foto de "antes e depois". Diferenciação começa
          quando você assume{" "}
          <span style={{ color: "oklch(0.55 0.2 138)", fontWeight: 800 }}>
            uma opinião que outros evitam
          </span>
          .
        </p>
      </div>
    </SlideLayout>
  );
}
