import { SlideLayout } from "@/components/SlideLayout";

export function Slide01() {
  return (
    <SlideLayout variant="hero" tone="dark" blob={{ variant: "lime", side: "right", top: -120, size: 980, opacity: 0.95 }}>
      {/* Giant background O */}
      <div
        aria-hidden
        className="absolute pointer-events-none select-none animate-fade-in"
        style={{
          left: "-3%",
          top: "-12%",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 1500,
          lineHeight: 1,
          letterSpacing: "-0.1em",
          color: "oklch(1 0 0 / 0.03)",
        }}
      >
        O
      </div>

      {/* Small kicker top-left */}
      <div
        className="absolute left-16 top-44 animate-fade-in-up flex items-center gap-4"
        style={{ animationDelay: "0.05s" }}
      >
        <div style={{ width: 48, height: 2, background: "var(--onmid-lime)" }} />
        <span
          className="uppercase font-bold text-foreground/70"
          style={{ fontSize: 18, letterSpacing: "0.35em" }}
        >
          Onmid · 2026
        </span>
      </div>

      {/* Main copy bottom-left */}
      <div className="absolute left-16 bottom-[14%] max-w-[1300px]">
        <h1
          className="slide-title-xl text-foreground uppercase animate-fade-in-up"
          style={{ animationDelay: "0.15s", fontWeight: 900, letterSpacing: "-0.055em" }}
        >
          Treinamento<br />
          <span className="text-lime">de Vendas</span>
        </h1>
        <p
          className="slide-subtitle text-foreground/55 mt-8 font-light animate-fade-in-up max-w-[1000px]"
          style={{ animationDelay: "0.35s", letterSpacing: "0.01em" }}
        >
          Atendimento Online de Alta Performance
        </p>
      </div>
    </SlideLayout>
  );
}
