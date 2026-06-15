import { SlideLayout } from "@/components/SlideLayout";
import { LiveInfoBar } from "@/components/LiveInfoBar";

export function PF01() {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="%">
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
          Treinamento Onmid · Performance
        </div>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 190,
            lineHeight: 0.9,
            letterSpacing: "-0.055em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.15s",
            maxWidth: 1500,
          }}
        >
          Tráfego pago
          <br />
          de alta{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>performance</span>
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 56,
            fontSize: 32,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.65)",
            maxWidth: 1050,
            fontWeight: 500,
            animationDelay: "0.35s",
          }}
        >
          Metodologia Exclusiva Onmid de acompanhamento de tráfego pago.
        </p>

        <div
          className="animate-fade-in-up"
          style={{
            marginTop: 80,
            width: 180,
            height: 4,
            background: "var(--onmid-lime)",
            animationDelay: "0.55s",
            boxShadow: "0 0 50px oklch(0.88 0.24 138 / 0.7)",
          }}
        />
      </div>
    </SlideLayout>
  );
}
