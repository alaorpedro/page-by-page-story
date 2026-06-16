import { SlideLayout } from "@/components/SlideLayout";

export function MP07() {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="4">
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
          Síntese
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 150,
            lineHeight: 0.92,
            letterSpacing: "-0.055em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.15s",
            maxWidth: 1500,
          }}
        >
          Boa campanha combina alcance, sentido, vínculo e método.
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 60,
            fontSize: 34,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.65)",
            maxWidth: 1180,
            fontWeight: 500,
            animationDelay: "0.35s",
          }}
        >
          Publicidade dá presença. Marketing dá direção. Relacionamento dá confiança. IA dá
          velocidade com governança.
        </p>
      </div>
    </SlideLayout>
  );
}
