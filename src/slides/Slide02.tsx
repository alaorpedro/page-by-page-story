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

      {/* Body grid — generous breathing room */}
      <div className="absolute left-16 right-16 top-[340px] bottom-40 grid grid-cols-12 gap-20 items-center">
        {/* Duotone circle "photo" — smaller, more air */}
        <div
          className="col-span-4 flex items-center justify-center animate-scale-in"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="relative" style={{ width: 440, height: 440 }}>
            <div
              className="absolute rounded-full"
              style={{
                inset: 0,
                background: "var(--onmid-lime)",
                boxShadow: "0 30px 80px oklch(0.88 0.24 138 / 0.3)",
              }}
            />
            <div
              className="absolute rounded-full flex items-center justify-center overflow-hidden"
              style={{
                inset: 28,
                background:
                  "radial-gradient(ellipse at 30% 30%, oklch(0.28 0.01 240), oklch(0.13 0.005 240))",
              }}
            >
              <span
                className="font-black text-lime"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 260,
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                A
              </span>
            </div>
          </div>
        </div>

        {/* Bio col 8 — wider, more space between blocks */}
        <div
          className="col-span-8 flex flex-col justify-center animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 96,
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
              color: "oklch(0.13 0.005 240)",
            }}
          >
            Alaor Pedro<br />
            <span className="text-lime">de Oliveira</span>
          </h2>

          <div
            className="mt-5 font-semibold flex items-center gap-3"
            style={{ fontSize: 22, color: "oklch(0.18 0.01 240 / 0.65)" }}
          >
            <span>@alaorpedro10</span>
            <span style={{ width: 4, height: 4, borderRadius: 999, background: "var(--onmid-lime)" }} />
            <span>Diretor de Planejamento · ONMID</span>
          </div>

          <div className="grid grid-cols-2 gap-16 mt-16">
            <div>
              <div
                className="uppercase font-black mb-4 flex items-center gap-3"
                style={{ fontSize: 14, letterSpacing: "0.35em", color: "oklch(0.13 0.005 240)" }}
              >
                <span style={{ width: 18, height: 2, background: "var(--onmid-lime)" }} />
                Formação
              </div>
              <ul
                className="space-y-3"
                style={{ fontSize: 20, color: "oklch(0.18 0.01 240 / 0.78)", lineHeight: 1.4 }}
              >
                <li>Marketing e Publicidade · UNOPAR</li>
                <li>Gestão de RH · UNOPAR</li>
                <li>Gestão Comercial · UNOPAR</li>
                <li>Practitioner em PNL · INEMP</li>
              </ul>
            </div>
            <div>
              <div
                className="uppercase font-black mb-4 flex items-center gap-3"
                style={{ fontSize: 14, letterSpacing: "0.35em", color: "oklch(0.13 0.005 240)" }}
              >
                <span style={{ width: 18, height: 2, background: "var(--onmid-lime)" }} />
                Atuação
              </div>
              <ul
                className="space-y-3"
                style={{ fontSize: 20, color: "oklch(0.18 0.01 240 / 0.78)", lineHeight: 1.4 }}
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

