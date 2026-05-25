import { SlideLayout } from "@/components/SlideLayout";
import cover from "@/assets/cover-gold-dollar.png";

export function Slide01() {
  return (
    <SlideLayout variant="hero">
      {/* Hero visual right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[46%] flex items-center justify-center">
        {/* Radial glow behind the dollar to blend with bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 60% 50%, oklch(0.88 0.24 138 / 0.18) 0%, transparent 55%)",
          }}
        />
        <img
          src={cover}
          alt=""
          className="relative w-[78%] h-auto object-contain animate-fade-in-up drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          style={{ animationDelay: "0.2s" }}
        />
        {/* Soft left-edge fade into bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, var(--onmid-bg) 0%, transparent 25%, transparent 100%)",
          }}
        />
        {/* Pulsing lime dot accent */}
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            bottom: 120,
            right: 80,
            width: 56,
            height: 56,
            background: "var(--onmid-lime)",
            boxShadow: "0 0 80px oklch(0.88 0.24 138 / 0.6)",
          }}
        />
      </div>


      {/* Main copy bottom-left */}
      <div className="absolute left-[8%] bottom-[18%] max-w-[1100px]">
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
