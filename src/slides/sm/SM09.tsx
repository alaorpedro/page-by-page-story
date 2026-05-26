import { SlideLayout } from "@/components/SlideLayout";

export function SM09() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="ID" kicker="06 · Identidade">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 110,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "oklch(0.18 0.01 240)",
            maxWidth: 1500,
          }}
        >
          Repetição cria{" "}
          <span style={{ color: "oklch(0.55 0.2 138)", fontStyle: "italic" }}>
            memória
          </span>
          .
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 32,
            fontSize: 30,
            lineHeight: 1.35,
            color: "oklch(0.18 0.01 240 / 0.7)",
            maxWidth: 1200,
            animationDelay: "0.2s",
          }}
        >
          Identidade visual não é "ficar bonito" — é ser reconhecido em meio segundo
          de scroll. Três coisas precisam ser inegociáveis:
        </p>

        <div
          className="grid grid-cols-3 gap-8 animate-fade-in-up"
          style={{ marginTop: 64, animationDelay: "0.35s" }}
        >
          {[
            { t: "Paleta", d: "2 cores principais + 1 destaque. Sempre as mesmas." },
            { t: "Tipografia", d: "1 fonte para títulos, 1 para texto. Em todos os formatos." },
            { t: "Fotografia", d: "Mesmo tratamento, mesma luz, mesmo recorte." },
          ].map((c, i) => (
            <div
              key={c.t}
              className="p-10 rounded-2xl relative overflow-hidden"
              style={{
                background:
                  i === 1
                    ? "oklch(0.18 0.01 240)"
                    : "oklch(0.18 0.01 240 / 0.04)",
                border: "1px solid oklch(0.18 0.01 240 / 0.1)",
                minHeight: 280,
              }}
            >
              <div
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 44,
                  color: i === 1 ? "var(--onmid-lime)" : "oklch(0.18 0.01 240)",
                  letterSpacing: "-0.02em",
                }}
              >
                {c.t}
              </div>
              <p
                className="mt-4"
                style={{
                  fontSize: 24,
                  color:
                    i === 1
                      ? "oklch(1 0 0 / 0.75)"
                      : "oklch(0.18 0.01 240 / 0.7)",
                  lineHeight: 1.4,
                }}
              >
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
