import { SlideLayout } from "@/components/SlideLayout";

export function Slide29() {
  return (
    <SlideLayout variant="statement">
      {/* Diagonal lime banner */}
      <div
        className="absolute inset-x-[-12%] top-[32%] py-16 animate-scale-in"
        style={{
          background: "var(--onmid-lime)",
          transform: "rotate(-9deg)",
          boxShadow: "0 30px 100px rgba(0,0,0,0.6)",
        }}
      >
        <p
          className="text-center uppercase"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--onmid-bg)",
            fontSize: 130,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
          }}
        >
          Não atenda para<br />
          vender;{" "}
          <span style={{ color: "oklch(0.08 0.005 240)" }}>
            entenda
            <br />
            para atender.
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
