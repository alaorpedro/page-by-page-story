import { SlideLayout } from "@/components/SlideLayout";

export function Slide10() {
  return (
    <SlideLayout variant="statement">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16">
        <p
          className="slide-subtitle text-foreground/85 text-center uppercase font-medium animate-fade-in-up"
          style={{ letterSpacing: "0.04em" }}
        >
          Qual o momento certo para falar<br />com nossos leads?
        </p>
        <h1
          className="text-lime italic animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 280,
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            marginTop: 32,
            animationDelay: "0.3s",
            textShadow: "0 0 120px oklch(0.88 0.24 138 / 0.4)",
          }}
        >
          AGORA!
        </h1>
      </div>
    </SlideLayout>
  );
}
