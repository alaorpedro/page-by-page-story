import { SlideLayout } from "@/components/SlideLayout";

export function Slide16() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex items-center justify-center px-[6%]">
        <div
          className="rounded-[44px] py-20 px-16 text-center animate-[scale-in_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{
            background: "var(--onmid-lime)",
            color: "oklch(0.3 0.01 240)",
            maxWidth: 1500,
          }}
        >
          <p style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.2 }}>
            O produto / serviço é caro em<br />relação a que?
          </p>
          <p
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.2,
              marginTop: 64,
            }}
          >
            É menos caro não fazer o<br />adquirir nosso produto / serviço?
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
