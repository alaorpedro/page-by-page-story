import { SlideLayout } from "@/components/SlideLayout";

export function Slide02() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="A">
      {/* Section kicker */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.18 0.01 240)",
          }}
        >
          02<span className="text-lime">.</span>
        </div>
        <div className="flex-1 h-px" style={{ background: "oklch(0 0 0 / 0.12)" }} />
        <div
          className="uppercase font-bold"
          style={{ fontSize: 18, letterSpacing: "0.35em", color: "oklch(0.18 0.01 240 / 0.55)" }}
        >
          Apresentador
        </div>
      </div>

      {/* Body grid */}
      <div className="absolute left-16 right-16 top-[280px] bottom-32 grid grid-cols-12 gap-12">
        {/* Duotone circle "photo" — col 5 */}
        <div
          className="col-span-5 flex items-center justify-center animate-scale-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative" style={{ width: 560, height: 560 }}>
            {/* Lime circle backdrop */}
            <div
              className="absolute rounded-full"
              style={{
                inset: 0,
                background: "var(--onmid-lime)",
                boxShadow: "0 40px 100px oklch(0.88 0.24 138 / 0.4)",
              }}
            />
            {/* Inner dark circle with monogram */}
            <div
              className="absolute rounded-full flex items-center justify-center overflow-hidden"
              style={{
                inset: 40,
                background:
                  "radial-gradient(ellipse at 30% 30%, oklch(0.28 0.01 240), oklch(0.13 0.005 240))",
              }}
            >
              <span
                className="font-black text-lime"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 320,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                A
              </span>
            </div>
            {/* Floating small lime dot */}
            <div
              className="absolute rounded-full animate-pulse"
              style={{
                right: -20,
                top: 60,
                width: 56,
                height: 56,
                background: "oklch(0.13 0.005 240)",
                border: "4px solid var(--onmid-lime)",
              }}
            />
          </div>
        </div>

        {/* Bio col 7 */}
        <div
          className="col-span-7 flex flex-col justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2
            className="uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 108,
              lineHeight: 0.95,
              letterSpacing: "-0.05em",
              color: "oklch(0.13 0.005 240)",
            }}
          >
            Alaor Pedro<br />
            <span className="text-lime">de Oliveira</span>
          </h2>
          <p
            className="mt-6 font-semibold"
            style={{ fontSize: 26, color: "oklch(0.18 0.01 240 / 0.7)" }}
          >
            @alaorpedro10 · Diretor de Planejamento na ONMID
          </p>

          <div className="grid grid-cols-2 gap-10 mt-12">
            <div>
              <div
                className="uppercase font-black mb-3"
                style={{ fontSize: 16, letterSpacing: "0.3em", color: "oklch(0.13 0.005 240)" }}
              >
                <span className="text-lime">●</span> Formação
              </div>
              <ul
                className="space-y-2"
                style={{ fontSize: 22, color: "oklch(0.18 0.01 240 / 0.78)", lineHeight: 1.35 }}
              >
                <li>Marketing e Publicidade · UNOPAR</li>
                <li>Gestão de RH · UNOPAR</li>
                <li>Gestão Comercial · UNOPAR</li>
                <li>Practitioner em PNL · INEMP</li>
              </ul>
            </div>
            <div>
              <div
                className="uppercase font-black mb-3"
                style={{ fontSize: 16, letterSpacing: "0.3em", color: "oklch(0.13 0.005 240)" }}
              >
                <span className="text-lime">●</span> Atuação
              </div>
              <ul
                className="space-y-2"
                style={{ fontSize: 22, color: "oklch(0.18 0.01 240 / 0.78)", lineHeight: 1.35 }}
              >
                <li>Associação Brasileira de Franchising</li>
                <li>onmid.com.br</li>
                <li>alaor@onmid.com.br</li>
                <li>Av. Higienópolis, 1601 · Londrina/PR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
