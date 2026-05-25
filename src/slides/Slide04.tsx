import { SlideLayout } from "@/components/SlideLayout";

export function Slide04() {
  return (
    <SlideLayout variant="content">
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up">
        <div
          className="font-extrabold text-lime"
          style={{ fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 1 }}
        >
          04.
        </div>
        <div className="flex-1 h-px bg-foreground/10" />
        <div
          className="text-foreground/40 uppercase font-semibold"
          style={{ fontSize: 22, letterSpacing: "0.3em" }}
        >
          Mudança do Estado Emocional
        </div>
      </div>

      <div className="absolute left-16 right-16 top-72 bottom-32 grid grid-cols-12 gap-12">
        <div className="col-span-5 flex items-center">
          <h2 className="slide-title text-foreground">
            Mover o cliente<br />
            do{" "}
            <span className="bg-[var(--onmid-lime)] text-[var(--onmid-bg)] px-3">
              estado atual
            </span>
          </h2>
        </div>

        <div
          className="col-span-7 flex flex-col justify-center pl-12 border-l"
          style={{ borderColor: "oklch(0.88 0.24 138 / 0.3)" }}
        >
          <p
            className="slide-body-lg text-foreground font-medium animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Vendas é a arte de provocar uma{" "}
            <span className="text-lime font-bold">
              mudança no estado emocional
            </span>{" "}
            do lead — sair da dor, dúvida e hesitação rumo a confiança,
            urgência e desejo de ação.
          </p>

          <div className="flex gap-4 mt-12">
            <div
              className="flex-1 bg-foreground/5 p-6 animate-fade-in-up"
              style={{
                borderBottom: "2px solid oklch(1 0 0 / 0.2)",
                animationDelay: "0.3s",
              }}
            >
              <div
                className="text-foreground/60 uppercase font-bold mb-2"
                style={{ fontSize: 18, letterSpacing: "0.2em" }}
              >
                Estado Atual
              </div>
              <div className="slide-caption text-foreground/80">
                Dor · dúvida · hesitação · medo
              </div>
            </div>
            <div
              className="flex-1 bg-foreground/5 p-6 animate-fade-in-up"
              style={{
                borderBottom: "2px solid var(--onmid-lime)",
                animationDelay: "0.45s",
              }}
            >
              <div
                className="text-lime uppercase font-bold mb-2"
                style={{ fontSize: 18, letterSpacing: "0.2em" }}
              >
                Estado Desejado
              </div>
              <div className="slide-caption text-foreground/80">
                Confiança · urgência · ação
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
