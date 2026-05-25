import { SlideLayout } from "@/components/SlideLayout";

export function Slide01() {
  return (
    <SlideLayout variant="hero">
      {/* Decorative lime accents */}
      <div
        className="absolute right-[10%] top-[18%] rounded-full animate-pulse"
        style={{
          width: 18,
          height: 18,
          background: "var(--onmid-lime)",
          boxShadow: "0 0 60px oklch(0.88 0.24 138 / 0.7)",
        }}
      />
      <div
        className="absolute right-[18%] bottom-[24%] animate-slide-in-left"
        style={{
          width: 220,
          height: 2,
          background: "var(--onmid-lime)",
          opacity: 0.6,
        }}
      />

      {/* Main copy bottom-left */}
      <div className="absolute left-[8%] bottom-[18%] max-w-[1300px]">
        <div
          className="h-3 mb-10 animate-slide-in-left"
          style={{ width: 140, background: "var(--onmid-lime)" }}
        />
        <h1
          className="slide-title-xl text-foreground uppercase animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Treinamento<br />
          <span className="text-lime">de Vendas</span>
        </h1>
        <p
          className="slide-subtitle text-foreground/60 mt-8 font-light animate-fade-in-up"
          style={{ animationDelay: "0.3s", letterSpacing: "0.02em" }}
        >
          Atendimento Online de Alta Performance
        </p>
      </div>
    </SlideLayout>
  );
}
