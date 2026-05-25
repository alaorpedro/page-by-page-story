import { SlideLayout } from "@/components/SlideLayout";

export function Slide15() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex items-center px-[6%] gap-10">
        {/* Character placeholder (Julius / Terry Crews) */}
        <div
          className="relative animate-[slide-in-left_0.9s_ease-out_both]"
          style={{
            width: 380,
            height: 700,
            borderRadius: 20,
            background:
              "linear-gradient(180deg, oklch(0.35 0.02 240), oklch(0.18 0.005 240))",
            border: "1px solid oklch(1 0 0 / 0.08)",
            flexShrink: 0,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <span className="slide-caption text-white/40 uppercase tracking-widest">
              Foto: Julius<br />(personagem)
            </span>
          </div>
        </div>

        {/* Yellow speech bubble */}
        <div
          className="relative flex-1 rounded-[44px] p-16 animate-[scale-in_0.8s_cubic-bezier(0.22,1,0.36,1)_0.25s_both]"
          style={{ background: "var(--onmid-lime)", color: "oklch(0.3 0.01 240)" }}
        >
          <p style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.15 }}>
            Se eu não comprar nada<br />o desconto é maior
          </p>
          <p
            className="mt-10 text-right italic"
            style={{ fontSize: 44, fontWeight: 600 }}
          >
            – Julius
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
