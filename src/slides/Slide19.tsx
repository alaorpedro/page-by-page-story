import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

export function Slide19() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="19">
      <SlideHeader number="19" label="Marketing Emocional" tone="light" />

      <div className="absolute left-16 right-16 top-[280px] max-w-[1500px]">
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
          Marketing
          <br />
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

        <p
          className="mt-12 font-medium animate-fade-in-up"
          style={{
            fontSize: 32,
            lineHeight: 1.4,
            color: "oklch(0.18 0.01 240 / 0.75)",
            animationDelay: "0.3s",
          }}
        >
          Se você está criando emoções que impulsionam a tomada de decisão, você não precisa saber
          apenas o estado emocional do seu potencial comprador, mas principalmente as
        </p>

        <div className="relative pl-12 mt-10 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <span
            aria-hidden
            className="absolute left-0 top-1 bottom-1 rounded-full"
            style={{ width: 8, background: "var(--onmid-lime)" }}
          />
          <p
            className="font-bold"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 46,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "oklch(0.13 0.005 240)",
            }}
          >
            crenças que eles usam para avaliar o peso emocional de qualquer coisa que você possa
            apresentar a eles.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
