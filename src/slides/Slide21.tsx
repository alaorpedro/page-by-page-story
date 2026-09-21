import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

const TRIGGERS = [
  "Pertencimento",
  "Reciprocidade",
  "Coerência e compromisso",
  "Afeição",
  "Aprovação social",
  "Escassez",
];

export function Slide21() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="6">
      <SlideHeader number="21" label="Gatilhos mentais" tone="light" />

      <div className="absolute left-16 right-16 top-[280px] bottom-28 grid grid-cols-2 gap-20 items-center">
        <div>
          <p
            className="font-medium animate-fade-in-up"
            style={{
              fontSize: 34,
              lineHeight: 1.3,
              color: "oklch(0.18 0.01 240 / 0.7)",
              animationDelay: "0.1s",
            }}
          >
            E na prática, o que fazer?
          </p>

          <h2
            className="uppercase mt-8 animate-fade-in-up"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 92,
              lineHeight: 0.98,
              letterSpacing: "-0.045em",
              color: "oklch(0.13 0.005 240)",
              animationDelay: "0.2s",
            }}
          >
            Ativar todos os{" "}
            <span
              className="px-3 inline-block"
              style={{
                background: "var(--onmid-lime)",
                transform: "skewX(-4deg)",
              }}
            >
              gatilhos
            </span>{" "}
            mentais necessários para efetivar a venda
          </h2>
        </div>

        <ul className="space-y-6">
          {TRIGGERS.map((t, i) => (
            <li
              key={t}
              className="flex items-center gap-7 animate-slide-in-right"
              style={{ animationDelay: `${0.3 + i * 0.1}s` }}
            >
              <span
                className="shrink-0 flex items-center justify-center font-black"
                style={{
                  width: 62,
                  height: 62,
                  borderRadius: 16,
                  background: "var(--onmid-lime)",
                  color: "oklch(0.13 0.005 240)",
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  boxShadow: "0 14px 34px oklch(0.84 0.18 130 / 0.3)",
                }}
              >
                {i + 1}
              </span>
              <span
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: "oklch(0.13 0.005 240)",
                }}
              >
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </SlideLayout>
  );
}
