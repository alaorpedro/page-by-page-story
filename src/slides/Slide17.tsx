import { SlideLayout } from "@/components/SlideLayout";

export function Slide17() {
  return (
    <SlideLayout variant="content">
      {/* Section header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up">
        <div
          className="font-extrabold text-lime"
          style={{ fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 1 }}
        >
          17.
        </div>
        <div className="flex-1 h-px bg-foreground/10" />
        <div
          className="text-foreground/40 uppercase font-semibold"
          style={{ fontSize: 22, letterSpacing: "0.3em" }}
        >
          Decisão de Compra
        </div>
      </div>

      {/* Body */}
      <div className="absolute left-16 right-16 top-72 bottom-32 grid grid-cols-12 gap-12">
        {/* Left: photo placeholder col-span-5 */}
        <div
          className="col-span-5 animate-scale-in flex items-center"
          style={{ animationDelay: "0.1s" }}
        >
          <div
            className="relative rounded-3xl overflow-hidden border w-full"
            style={{
              background:
                "linear-gradient(180deg, var(--onmid-bg-2), var(--onmid-bg))",
              borderColor: "oklch(1 0 0 / 0.08)",
              height: 600,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-center px-6">
              <span
                className="text-foreground/40 uppercase font-semibold"
                style={{ fontSize: 18, letterSpacing: "0.25em" }}
              >
                Foto: senhor sorrindo<br />com celular e cartão
              </span>
            </div>
          </div>
        </div>

        {/* Right: copy col-span-7 with lime left border */}
        <div
          className="col-span-7 flex flex-col justify-center pl-12 border-l animate-fade-in-up"
          style={{
            borderColor: "oklch(0.88 0.24 138 / 0.3)",
            animationDelay: "0.2s",
          }}
        >
          <h2 className="slide-title text-foreground">
            Porque as pessoas<br />
            <span className="bg-[var(--onmid-lime)] text-[var(--onmid-bg)] px-3">
              compram?
            </span>
          </h2>

          <p className="slide-body-lg text-foreground mt-10 max-w-[820px] font-medium">
            O primeiro passo é identificar se o que atrai o cliente é o{" "}
            <span className="text-lime font-bold">desejo</span> ou a{" "}
            <span className="text-lime font-bold">necessidade.</span>
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div
              className="bg-foreground/5 p-6"
              style={{ borderBottom: "2px solid var(--onmid-lime)" }}
            >
              <div
                className="text-lime uppercase font-bold mb-2"
                style={{ fontSize: 18, letterSpacing: "0.2em" }}
              >
                Necessidade
              </div>
              <div className="slide-caption text-foreground/80">
                Motiva a compra de serviços e produtos essenciais.
              </div>
            </div>
            <div
              className="bg-foreground/5 p-6"
              style={{ borderBottom: "2px solid oklch(1 0 0 / 0.2)" }}
            >
              <div
                className="text-foreground/60 uppercase font-bold mb-2"
                style={{ fontSize: 18, letterSpacing: "0.2em" }}
              >
                Desejo
              </div>
              <div className="slide-caption text-foreground/80">
                Motiva a compra do que melhora a qualidade de vida.
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
