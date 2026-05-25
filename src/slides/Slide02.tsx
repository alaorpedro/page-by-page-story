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
        className="absolute right-[196px] top-44 flex items-center gap-8 animate-fade-in-up z-10"
        style={{ width: "40%" }}
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
        className="absolute right-[196px] top-[280px] animate-fade-in-up text-right z-10"
        style={{ width: "52%", animationDelay: "0.15s" }}
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
          Alaor Pedro<br />
          de <span className="text-lime">Oliveira</span>
        </h2>

        <p
          className="mt-10 ml-auto"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            lineHeight: 1.45,
            color: "oklch(0.98 0.005 100 / 0.78)",
            fontWeight: 500,
            maxWidth: 720,
          }}
        >
          Mais de uma década traduzindo dados em estratégia de alta performance
          para marcas e franquias em todo o Brasil.
        </p>

        <div
          className="grid grid-cols-2 gap-6 mt-14 ml-auto text-left"
          style={{ maxWidth: 720 }}
        >
          {/* Formação card */}
          <div
            className="relative p-7 rounded-2xl"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="absolute -top-3 left-7 px-3 py-1 uppercase font-black rounded-full"
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                background: "var(--onmid-lime)",
                color: "oklch(0.13 0.005 240)",
              }}
            >
              Formação
            </span>
            <ul
              className="space-y-3 mt-2"
              style={{
                fontSize: 16,
                color: "oklch(0.98 0.005 100 / 0.92)",
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              <li className="flex items-start gap-3">
                <span className="mt-2" style={{ width: 6, height: 6, borderRadius: 999, background: "var(--onmid-lime)", flexShrink: 0 }} />
                <span>Marketing e Publicidade <span style={{ opacity: 0.55 }}>· UNOPAR</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2" style={{ width: 6, height: 6, borderRadius: 999, background: "var(--onmid-lime)", flexShrink: 0 }} />
                <span>Gestão de RH <span style={{ opacity: 0.55 }}>· UNOPAR</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2" style={{ width: 6, height: 6, borderRadius: 999, background: "var(--onmid-lime)", flexShrink: 0 }} />
                <span>Gestão Comercial <span style={{ opacity: 0.55 }}>· UNOPAR</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2" style={{ width: 6, height: 6, borderRadius: 999, background: "var(--onmid-lime)", flexShrink: 0 }} />
                <span>Practitioner em PNL <span style={{ opacity: 0.55 }}>· INEMP</span></span>
              </li>
            </ul>
          </div>

          {/* Contato card */}
          <div
            className="relative p-7 rounded-2xl"
            style={{
              background: "oklch(1 0 0 / 0.06)",
              border: "1px solid oklch(1 0 0 / 0.12)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span
              className="absolute -top-3 left-7 px-3 py-1 uppercase font-black rounded-full"
              style={{
                fontSize: 11,
                letterSpacing: "0.32em",
                background: "var(--onmid-lime)",
                color: "oklch(0.13 0.005 240)",
              }}
            >
              Contato
            </span>
            <ul
              className="space-y-3 mt-2"
              style={{
                fontSize: 16,
                color: "oklch(0.98 0.005 100 / 0.92)",
                lineHeight: 1.4,
                fontWeight: 500,
              }}
            >
              <li className="flex items-center gap-3">
                <span style={{ fontSize: 10, letterSpacing: "0.3em", opacity: 0.5, width: 32 }}>WEB</span>
                <span>onmid.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ fontSize: 10, letterSpacing: "0.3em", opacity: 0.5, width: 32 }}>MAIL</span>
                <span>alaor@onmid.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ fontSize: 10, letterSpacing: "0.3em", opacity: 0.5, width: 32 }}>END</span>
                <span>Av. Higienópolis, 1601</span>
              </li>
              <li className="flex items-center gap-3">
                <span style={{ fontSize: 10, letterSpacing: "0.3em", opacity: 0.5, width: 32 }}>LOC</span>
                <span>Londrina · PR</span>
              </li>
            </ul>
          </div>
        </div>


      </div>

      {/* Handle — left side over the photo */}
      <div
        className="absolute left-24 bottom-24 font-black animate-fade-in-up z-10"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 28,
          color: "var(--onmid-lime)",
          letterSpacing: "-0.02em",
          animationDelay: "0.3s",
        }}
      >
        @alaorpedro10
      </div>
    </SlideLayout>
  );
}
