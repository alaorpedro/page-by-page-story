import { SlideLayout } from "@/components/SlideLayout";

export function Slide10() {
  return (
    <SlideLayout arcs="none" logo="none">
      {/* Placeholder for relaxed-woman photo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.4 0.02 240) 0%, oklch(0.18 0.005 240) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-[18%] left-[8%]">
        <p
          className="slide-subtitle text-white/85 uppercase tracking-wide animate-[fade-in-up_0.8s_ease-out_both]"
          style={{ fontWeight: 500, letterSpacing: "0.04em" }}
        >
          Qual o momento certo para falar<br />com nossos leads?
        </p>
        <h1
          className="text-[220px] leading-none mt-6 animate-[fade-in-up_1s_ease-out_0.3s_both]"
          style={{
            color: "var(--onmid-lime)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            fontStyle: "italic",
          }}
        >
          AGORA!
        </h1>
      </div>
    </SlideLayout>
  );
}
