import { SlideLayout } from "@/components/SlideLayout";

export function SM02() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="A">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <div
          className="uppercase font-bold animate-fade-in-up"
          style={{
            fontSize: 16,
            letterSpacing: "0.45em",
            color: "oklch(0.18 0.01 240 / 0.55)",
            marginBottom: 32,
          }}
        >
          Quem está falando com você
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 140,
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
            color: "oklch(0.18 0.01 240)",
            animationDelay: "0.15s",
          }}
        >
          Alaor Pedro<br />
          de <span style={{ color: "oklch(0.55 0.2 138)", fontStyle: "italic" }}>Oliveira</span>
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 48,
            fontSize: 30,
            lineHeight: 1.4,
            color: "oklch(0.18 0.01 240 / 0.7)",
            maxWidth: 1100,
            fontWeight: 500,
            animationDelay: "0.3s",
          }}
        >
          Mais de uma década traduzindo dados em estratégia de alta performance
          para marcas e franquias em todo o Brasil — agora aplicado ao universo
          das clínicas odontológicas.
        </p>

        <div
          className="animate-fade-in-up flex items-center gap-4 mt-16"
          style={{ animationDelay: "0.45s" }}
        >
          <div
            style={{
              width: 60,
              height: 4,
              background: "oklch(0.55 0.2 138)",
            }}
          />
          <span
            className="font-black"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 28,
              color: "oklch(0.55 0.2 138)",
              letterSpacing: "-0.02em",
            }}
          >
            @alaorpedro10
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
