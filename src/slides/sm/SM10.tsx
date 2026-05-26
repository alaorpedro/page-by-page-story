import { SlideLayout } from "@/components/SlideLayout";

export function SM10() {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter=".">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="slide-kicker animate-fade-in-up"
          style={{
            color: "var(--onmid-lime)",
            letterSpacing: "0.5em",
            marginBottom: 48,
          }}
        >
          Para fechar
        </p>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 180,
            lineHeight: 0.92,
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.2s",
            maxWidth: 1700,
          }}
        >
          Marca{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            antes
          </span>{" "}
          de mídia.
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 56,
            fontSize: 36,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.7)",
            maxWidth: 1300,
            fontWeight: 500,
            animationDelay: "0.4s",
          }}
        >
          Anúncio amplifica o que sua marca já diz. Se a marca não diz nada,
          anúncio só acelera o esquecimento.
        </p>

        <div
          className="animate-fade-in-up flex items-center gap-5 mt-20"
          style={{ animationDelay: "0.6s" }}
        >
          <div
            style={{
              width: 80,
              height: 4,
              background: "var(--onmid-lime)",
              boxShadow: "0 0 40px oklch(0.88 0.24 138 / 0.6)",
            }}
          />
          <span
            className="font-black uppercase"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              color: "oklch(1 0 0 / 0.6)",
              letterSpacing: "0.4em",
            }}
          >
            Onmid · @alaorpedro10
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
