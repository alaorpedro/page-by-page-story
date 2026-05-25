import { SlideLayout } from "@/components/SlideLayout";
import cover from "@/assets/cover-gold-dollar.jpg";

export function Slide01() {
  return (
    <SlideLayout variant="hero">
      {/* Hero visual right side */}
      <div className="absolute right-0 top-0 bottom-0 w-[42%]">
        <img
          src={cover}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "saturate(1.1)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--onmid-bg) 0%, transparent 35%, transparent 100%)",
          }}
        />
        {/* Pulsing lime dot accent */}
        <div
          className="absolute rounded-full animate-pulse"
          style={{
            bottom: 120,
            right: 100,
            width: 64,
            height: 64,
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
