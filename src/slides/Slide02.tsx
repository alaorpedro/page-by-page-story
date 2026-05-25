import { SlideLayout } from "@/components/SlideLayout";
import alaorPhoto from "@/assets/alaor.jpg";

export function Slide02() {
  return (
    <SlideLayout variant="content" tone="light">
      {/* Stylized full-bleed background photo on the right */}
      <div
        className="absolute inset-y-0 right-0 animate-fade-in"
        style={{ width: "58%", overflow: "hidden" }}
      >
        <img
          src={alaorPhoto}
          alt="Alaor Pedro de Oliveira"
          className="w-full h-full object-cover"
          style={{
            filter: "grayscale(1) contrast(1.15) brightness(0.95)",
          }}
          draggable={false}
        />
        {/* Lime duotone wash */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: "var(--onmid-lime)", opacity: 0.55 }}
        />
        {/* Soft fade from the left so text side blends cleanly */}
        <div
          className="absolute inset-y-0 left-0"
          style={{
            width: "45%",
            background:
              "linear-gradient(to right, oklch(0.97 0.01 100) 0%, oklch(0.97 0.01 100 / 0) 100%)",
          }}
        />
        {/* Subtle grain via top vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, oklch(0 0 0 / 0.12) 0%, oklch(0 0 0 / 0) 30%, oklch(0 0 0 / 0) 70%, oklch(0 0 0 / 0.18) 100%)",
          }}
        />
      </div>

      {/* Text column — fully on the left, never crossing the face */}
      <div className="absolute left-16 top-44 flex items-center gap-8 animate-fade-in-up" style={{ width: "38%" }}>
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
        <div className="flex-1 h-px" style={{ background: "oklch(0 0 0 / 0.15)" }} />
      </div>

      <div
        className="absolute left-16 top-[300px] animate-fade-in-up"
        style={{ width: "38%", animationDelay: "0.15s" }}
      >
        <div
          className="uppercase font-bold mb-6"
          style={{ fontSize: 16, letterSpacing: "0.4em", color: "oklch(0.18 0.01 240 / 0.6)" }}
        >
          Apresentador
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 88,
            lineHeight: 0.94,
            letterSpacing: "-0.045em",
            color: "oklch(0.13 0.005 240)",
          }}
        >
          Alaor Pedro<br />
          <span className="text-lime">de Oliveira</span>
        </h2>

        <div
          className="mt-6 font-semibold"
          style={{ fontSize: 20, color: "oklch(0.18 0.01 240 / 0.7)", lineHeight: 1.4 }}
        >
          Diretor de Planejamento · ONMID
          <div className="mt-1" style={{ fontSize: 16, color: "oklch(0.18 0.01 240 / 0.55)" }}>
            @alaorpedro10
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-12">
          <div>
            <div
              className="uppercase font-black mb-3 flex items-center gap-3"
              style={{ fontSize: 12, letterSpacing: "0.35em", color: "oklch(0.13 0.005 240)" }}
            >
              <span style={{ width: 16, height: 2, background: "var(--onmid-lime)" }} />
              Formação
            </div>
            <ul
              className="space-y-2"
              style={{ fontSize: 14, color: "oklch(0.18 0.01 240 / 0.78)", lineHeight: 1.45 }}
            >
              <li>Marketing e Publicidade · UNOPAR</li>
              <li>Gestão de RH · UNOPAR</li>
              <li>Gestão Comercial · UNOPAR</li>
              <li>Practitioner em PNL · INEMP</li>
            </ul>
          </div>
          <div>
            <div
              className="uppercase font-black mb-3 flex items-center gap-3"
              style={{ fontSize: 12, letterSpacing: "0.35em", color: "oklch(0.13 0.005 240)" }}
            >
              <span style={{ width: 16, height: 2, background: "var(--onmid-lime)" }} />
              Atuação
            </div>
            <ul
              className="space-y-2"
              style={{ fontSize: 14, color: "oklch(0.18 0.01 240 / 0.78)", lineHeight: 1.45 }}
            >
              <li>ABF · Franchising</li>
              <li>onmid.com.br</li>
              <li>alaor@onmid.com.br</li>
              <li>Av. Higienópolis, 1601 · Londrina/PR</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
