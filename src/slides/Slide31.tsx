import { SlideLayout } from "@/components/SlideLayout";

export function Slide31() {
  return (
    <SlideLayout
      variant="hero"
      tone="dark"
      blob={{ variant: "lime", side: "left", top: 240, size: 720, opacity: 0.9 }}
    >
      {/* Giant background number */}
      <div
        aria-hidden
        className="absolute pointer-events-none select-none animate-fade-in"
        style={{
          right: "-4%",
          bottom: "-18%",
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: 1500,
          lineHeight: 1,
          letterSpacing: "-0.08em",
          color: "oklch(1 0 0 / 0.035)",
        }}
      >
        31
      </div>

      <div className="absolute left-[42%] top-1/2 -translate-y-1/2 max-w-[1000px]">
        <div
          className="h-3 mb-10 animate-slide-in-left"
          style={{ width: 200, background: "var(--onmid-lime)" }}
        />
        <h1
          className="text-foreground uppercase animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 144,
            lineHeight: 0.92,
            letterSpacing: "-0.055em",
          }}
        >
          Obrigado<br />
          <span className="text-lime">pelo tempo</span><br />
          e presença
        </h1>

        <div
          className="mt-14 animate-fade-in-up flex items-center gap-6"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="w-1 h-20" style={{ background: "var(--onmid-lime)" }} />
          <div>
            <p
              className="font-black text-foreground"
              style={{ fontSize: 32, lineHeight: 1.1 }}
            >
              Alaor Pedro de Oliveira
            </p>
            <p
              className="text-foreground/55 mt-1 font-light"
              style={{ fontSize: 22, letterSpacing: "0.02em" }}
            >
              Diretor de Planejamento · Onmid
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
