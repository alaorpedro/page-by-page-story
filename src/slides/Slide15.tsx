import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

export function Slide15() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="”">
      <SlideHeader number="15" label="A desculpa do cliente" tone="dark" />

      <div className="absolute left-16 right-16 top-[280px] bottom-28 flex items-center gap-14">
        {/* Personagem */}
        <div
          className="relative shrink-0 animate-slide-in-left"
          style={{
            width: 380,
            height: 600,
            borderRadius: 20,
            background: "linear-gradient(180deg, oklch(0.35 0.02 240), oklch(0.18 0.005 240))",
            border: "1px solid oklch(1 0 0 / 0.08)",
            animationDelay: "0.1s",
          }}
        >
          <span
            aria-hidden
            className="absolute rounded-full"
            style={{
              left: -6,
              top: 40,
              bottom: 40,
              width: 6,
              background: "var(--onmid-lime)",
              boxShadow: "0 0 24px oklch(0.84 0.18 130 / 0.6)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-6">
            <span
              className="uppercase font-bold"
              style={{
                fontSize: 20,
                letterSpacing: "0.3em",
                color: "oklch(1 0 0 / 0.4)",
                lineHeight: 1.6,
              }}
            >
              Foto: Julius
              <br />
              (personagem)
            </span>
          </div>
        </div>

        {/* Balão de fala */}
        <div
          className="relative flex-1 animate-scale-in"
          style={{
            background: "var(--onmid-lime)",
            color: "oklch(0.13 0.005 240)",
            borderRadius: 44,
            padding: "72px 64px",
            animationDelay: "0.35s",
            boxShadow: "0 40px 100px oklch(0.84 0.18 130 / 0.25)",
          }}
        >
          {/* Bico do balão */}
          <span
            aria-hidden
            className="absolute"
            style={{
              left: -26,
              top: 120,
              width: 0,
              height: 0,
              borderTop: "22px solid transparent",
              borderBottom: "22px solid transparent",
              borderRight: "28px solid var(--onmid-lime)",
            }}
          />
          <p
            className="uppercase font-black"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 76,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}
          >
            Se eu não comprar nada
            <br />o desconto é maior
          </p>
          <p
            className="mt-12 text-right italic font-bold animate-fade-in-up"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 44,
              color: "oklch(0.13 0.005 240 / 0.6)",
              animationDelay: "0.8s",
            }}
          >
            – Julius
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
