import { SlideLayout } from "@/components/SlideLayout";

export function Slide02() {
  return (
    <SlideLayout variant="content">
      {/* Section header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up">
        <div
          className="font-extrabold text-lime"
          style={{ fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 1 }}
        >
          02.
        </div>
        <div className="flex-1 h-px bg-foreground/10" />
        <div
          className="text-foreground/40 uppercase font-semibold"
          style={{ fontSize: 22, letterSpacing: "0.3em" }}
        >
          Apresentador
        </div>
      </div>

      {/* Content grid */}
      <div className="absolute left-16 right-16 top-72 bottom-32 grid grid-cols-12 gap-12">
        {/* Photo placeholder (col-span-5) */}
        <div
          className="col-span-5 animate-scale-in flex items-center justify-center"
          style={{ animationDelay: "0.1s" }}
        >
          <div
            className="relative rounded-3xl overflow-hidden border w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, var(--onmid-bg-2), var(--onmid-bg))",
              borderColor: "oklch(1 0 0 / 0.08)",
              maxHeight: 620,
            }}
          >
            <div
              className="absolute -top-4 -left-4 w-12 h-12"
              style={{
                borderTop: "3px solid var(--onmid-lime)",
                borderLeft: "3px solid var(--onmid-lime)",
              }}
            />
            <div
              className="absolute -bottom-4 -right-4 w-12 h-12"
              style={{
                borderBottom: "3px solid var(--onmid-lime)",
                borderRight: "3px solid var(--onmid-lime)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <span
                className="text-foreground/40 uppercase font-semibold"
                style={{ fontSize: 18, letterSpacing: "0.25em" }}
              >
                Foto do<br />Apresentador
              </span>
            </div>
          </div>
        </div>

        {/* Bio (col-span-7) */}
        <div
          className="col-span-7 flex flex-col justify-center pl-12 border-l animate-fade-in-up"
          style={{
            borderColor: "oklch(0.88 0.24 138 / 0.3)",
            animationDelay: "0.2s",
          }}
        >
          <h2 className="slide-title text-foreground">
            Alaor Pedro<br />de Oliveira
          </h2>
          <p className="slide-body text-lime mt-3 font-semibold">
            @alaorpedro10 · Diretor de Planejamento na ONMID
          </p>

          <div className="grid grid-cols-2 gap-8 mt-10">
            <div>
              <div
                className="text-lime uppercase font-bold mb-3"
                style={{ fontSize: 18, letterSpacing: "0.2em" }}
              >
                Formação
              </div>
              <ul className="slide-caption text-foreground/85 space-y-2">
                <li>Marketing e Publicidade · UNOPAR</li>
                <li>Gestão de RH · UNOPAR</li>
                <li>Gestão Comercial · UNOPAR</li>
                <li>Practitioner em PNL · INEMP</li>
              </ul>
            </div>
            <div>
              <div
                className="text-lime uppercase font-bold mb-3"
                style={{ fontSize: 18, letterSpacing: "0.2em" }}
              >
                Atuação
              </div>
              <ul className="slide-caption text-foreground/85 space-y-2">
                <li>Associação Brasileira de Franchising</li>
                <li>onmid.com.br</li>
                <li>alaor@onmid.com.br</li>
                <li>Av. Higienópolis, 1601 · Sala 07 · Londrina/PR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
