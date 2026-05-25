import { SlideLayout } from "@/components/SlideLayout";

export function Slide07b() {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="?">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="slide-kicker animate-fade-in-up"
          style={{
            color: "var(--onmid-lime)",
            letterSpacing: "0.4em",
            marginBottom: 40,
          }}
        >
          A pergunta que ninguém faz
        </p>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 140,
            lineHeight: 0.98,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.2s",
            maxWidth: 1600,
          }}
        >
          Mas por que os leads<br />
          clicam{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            e não respondem
          </span>
          ?
        </h1>

        <div
          className="animate-fade-in-up"
          style={{
            marginTop: 80,
            width: 120,
            height: 4,
            background: "var(--onmid-lime)",
            animationDelay: "0.5s",
            boxShadow: "0 0 40px oklch(0.88 0.24 138 / 0.6)",
          }}
        />
      </div>
    </SlideLayout>
  );
}
