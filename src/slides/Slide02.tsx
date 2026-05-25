import { SlideLayout } from "@/components/SlideLayout";
import alaorPhoto from "@/assets/alaor.jpg";

export function Slide02() {
  return (
    <SlideLayout variant="content" tone="light">
      {/* ============ LEFT: contained portrait card ============ */}
      <div
        className="absolute animate-fade-in"
        style={{ left: 96, top: 168, width: 760, height: 808 }}
      >
        {/* Lime offset block behind the photo (depth) */}
        <div
          className="absolute rounded-sm"
          style={{
            left: -22,
            top: 22,
            right: 22,
            bottom: -22,
            background: "var(--onmid-lime)",
          }}
        />

        {/* Photo card */}
        <div
          className="absolute inset-0 overflow-hidden rounded-sm"
          style={{ boxShadow: "0 40px 90px oklch(0 0 0 / 0.18)" }}
        >
          <img
            src={alaorPhoto}
            alt="Alaor Pedro de Oliveira"
            className="w-full h-full object-cover"
            style={{ filter: "grayscale(1) contrast(1.1) brightness(0.96)" }}
            draggable={false}
          />
          {/* Soft duotone wash */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{ background: "var(--onmid-lime)", opacity: 0.42 }}
          />
          {/* Bottom gradient for the role tag */}
          <div
            className="absolute inset-x-0 bottom-0 h-64 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, oklch(0 0 0 / 0) 0%, oklch(0.13 0.005 240 / 0.85) 100%)",
            }}
          />
          {/* Role tag inside photo */}
          <div className="absolute left-8 bottom-8 right-8 flex items-end justify-between">
            <div>
              <div
                className="uppercase font-bold mb-2"
                style={{
                  fontSize: 14,
                  letterSpacing: "0.4em",
                  color: "var(--onmid-lime)",
                }}
              >
                Apresentador
              </div>
              <div
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  lineHeight: 1.05,
                  color: "oklch(0.98 0.005 100)",
                  letterSpacing: "-0.02em",
                }}
              >
                @alaorpedro10
              </div>
            </div>
          </div>
        </div>

        {/* Big editorial "02." floating on top-right corner of photo */}
        <div
          className="absolute font-black animate-fade-in-up"
          style={{
            right: -56,
            top: -72,
            fontFamily: "var(--font-display)",
            fontSize: 180,
            lineHeight: 0.85,
            letterSpacing: "-0.07em",
            color: "oklch(0.13 0.005 240)",
            animationDelay: "0.1s",
          }}
        >
          02<span className="text-lime">.</span>
        </div>
      </div>

      {/* ============ BRIDGE: lime horizontal rule crossing the seam ============ */}
      <div
        className="absolute animate-fade-in"
        style={{
          left: 760,
          top: 360,
          width: 240,
          height: 6,
          background: "var(--onmid-lime)",
          animationDelay: "0.2s",
        }}
      />

      {/* ============ RIGHT: editorial content column ============ */}
      <div
        className="absolute animate-fade-in-up"
        style={{ left: 920, right: 96, top: 240, animationDelay: "0.25s" }}
      >
        <div
          className="uppercase font-bold mb-5"
          style={{
            fontSize: 16,
            letterSpacing: "0.45em",
            color: "oklch(0.18 0.01 240 / 0.55)",
          }}
        >
          Diretor de Planejamento
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 104,
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            color: "oklch(0.13 0.005 240)",
          }}
        >
          Alaor<br />
          Pedro de<br />
          <span className="text-lime">Oliveira</span>
        </h2>

        <p
          className="mt-10 max-w-[640px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1.45,
            color: "oklch(0.18 0.01 240 / 0.7)",
            fontWeight: 500,
          }}
        >
          Mais de uma década traduzindo dados em estratégia de alta performance
          para marcas e franquias em todo o Brasil.
        </p>

        <div className="grid grid-cols-2 gap-10 mt-12 max-w-[680px]">
          <div>
            <div
              className="uppercase font-black mb-4 flex items-center gap-3"
              style={{
                fontSize: 12,
                letterSpacing: "0.35em",
                color: "oklch(0.13 0.005 240)",
              }}
            >
              <span style={{ width: 22, height: 2, background: "var(--onmid-lime)" }} />
              Formação
            </div>
            <ul
              className="space-y-2"
              style={{
                fontSize: 15,
                color: "oklch(0.18 0.01 240 / 0.78)",
                lineHeight: 1.5,
              }}
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
              style={{
                fontSize: 12,
                letterSpacing: "0.35em",
                color: "oklch(0.13 0.005 240)",
              }}
            >
              <span style={{ width: 22, height: 2, background: "var(--onmid-lime)" }} />
              Contato
            </div>
            <ul
              className="space-y-2"
              style={{
                fontSize: 15,
                color: "oklch(0.18 0.01 240 / 0.78)",
                lineHeight: 1.5,
              }}
            >
              <li>onmid.com.br</li>
              <li>alaor@onmid.com.br</li>
              <li>Av. Higienópolis, 1601</li>
              <li>Londrina · PR</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
