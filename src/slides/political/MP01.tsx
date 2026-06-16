import { LiveInfoBar } from "@/components/LiveInfoBar";
import { SlideLayout } from "@/components/SlideLayout";

export function MP01() {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="V" showHomeButton>
      <LiveInfoBar />

      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <div
          className="uppercase font-bold animate-fade-in-up"
          style={{
            fontSize: 18,
            letterSpacing: "0.45em",
            color: "var(--onmid-lime)",
            marginBottom: 48,
          }}
        >
          Treinamento Onmid · Eleições 2026
        </div>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 185,
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.15s",
            maxWidth: 1560,
          }}
        >
          Marketing
          <br />
          político <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>2026</span>
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 56,
            fontSize: 32,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.65)",
            maxWidth: 1120,
            fontWeight: 500,
            animationDelay: "0.35s",
          }}
        >
          Uma campanha forte precisa ser lembrada, compreendida e confiável antes de pedir voto.
        </p>
      </div>
    </SlideLayout>
  );
}
