import { SlideLayout } from "@/components/SlideLayout";
import alaorPhoto from "@/assets/alaor.jpg";

export function Slide02() {
  return (
    <SlideLayout variant="content" tone="light">
      {/* Full-bleed background photo */}
      <div className="absolute inset-0 animate-fade-in overflow-hidden">
        <img
          src={alaorPhoto}
          alt="Alaor Pedro de Oliveira"
          className="w-full h-full object-cover"
          style={{ filter: "grayscale(1) contrast(1.15) brightness(0.92)", objectPosition: "left center" }}
          draggable={false}
        />
        {/* Lime duotone wash */}
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{ background: "var(--onmid-lime)", opacity: 0.5 }}
        />
        {/* Right-side dark gradient for text legibility — does not cover the face on the left */}
        <div
          className="absolute inset-y-0 right-0"
          style={{
            width: "52%",
            background:
              "linear-gradient(to left, oklch(0.13 0.005 240 / 0.94) 0%, oklch(0.13 0.005 240 / 0.78) 55%, oklch(0.13 0.005 240 / 0) 100%)",
          }}
        />
        {/* Subtle top/bottom vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, oklch(0 0 0 / 0.18) 0%, oklch(0 0 0 / 0) 25%, oklch(0 0 0 / 0) 75%, oklch(0 0 0 / 0.25) 100%)",
          }}
        />
      </div>

      {/* Section marker — right side */}
      <div
        className="absolute right-24 top-44 flex items-center gap-8 animate-fade-in-up z-10"
        style={{ width: "44%" }}
      >
        <div className="flex-1 h-px" style={{ background: "oklch(1 0 0 / 0.25)" }} />
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 72,
            lineHeight: 1,
            color: "oklch(0.98 0.005 100)",
          }}
        >
          02<span className="text-lime">.</span>
        </div>
      </div>

      {/* Text column over photo */}
      <div
        className="absolute right-24 top-[280px] animate-fade-in-up text-right z-10"
        style={{ width: "48%", animationDelay: "0.15s" }}
      >
        <div
          className="uppercase font-bold mb-6"
          style={{
            fontSize: 16,
            letterSpacing: "0.45em",
            color: "var(--onmid-lime)",
          }}
        >
          Apresentador
        </div>

        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 104,
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            color: "oklch(0.98 0.005 100)",
          }}
        >
          Alaor<br />
          Pedro de<br />
          <span className="text-lime">Oliveira</span>
        </h2>

        <p
          className="mt-10 ml-auto"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1.45,
            color: "oklch(0.98 0.005 100 / 0.78)",
            fontWeight: 500,
            maxWidth: 640,
          }}
        >
          Mais de uma década traduzindo dados em estratégia de alta performance
          para marcas e franquias em todo o Brasil.
        </p>

        <div
          className="grid grid-cols-2 gap-10 mt-12 ml-auto text-left"
          style={{ maxWidth: 680 }}
        >
          <div>
            <div
              className="uppercase font-black mb-4 flex items-center gap-3"
              style={{
                fontSize: 12,
                letterSpacing: "0.35em",
                color: "oklch(0.98 0.005 100)",
              }}
            >
              <span style={{ width: 22, height: 2, background: "var(--onmid-lime)" }} />
              Formação
            </div>
            <ul
              className="space-y-2"
              style={{
                fontSize: 15,
                color: "oklch(0.98 0.005 100 / 0.78)",
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
                color: "oklch(0.98 0.005 100)",
              }}
            >
              <span style={{ width: 22, height: 2, background: "var(--onmid-lime)" }} />
              Contato
            </div>
            <ul
              className="space-y-2"
              style={{
                fontSize: 15,
                color: "oklch(0.98 0.005 100 / 0.78)",
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

        <div
          className="mt-8 inline-block font-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            color: "var(--onmid-lime)",
            letterSpacing: "-0.02em",
          }}
        >
          @alaorpedro10
        </div>
      </div>
    </SlideLayout>
  );
}
