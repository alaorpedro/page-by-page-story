import { SlideLayout } from "@/components/SlideLayout";

export function SM08() {
  const pillars = [
    {
      n: "01",
      t: "Autoridade",
      d: "Mostra que você domina. Educa, traz dados, desmente mitos.",
    },
    {
      n: "02",
      t: "Prova",
      d: "Casos reais, depoimentos, transformações com contexto.",
    },
    {
      n: "03",
      t: "Bastidor",
      d: "Como sua equipe trabalha, o cuidado invisível, a rotina.",
    },
    {
      n: "04",
      t: "Conexão",
      d: "Opinião, posicionamento, histórias humanas que aproximam.",
    },
  ];

  return (
    <SlideLayout variant="content" tone="dark" bgLetter="4" kicker="05 · Pilares de conteúdo">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 110,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "oklch(0.98 0 0)",
            maxWidth: 1500,
          }}
        >
          Os{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            4 pilares
          </span>{" "}
          que sustentam uma marca.
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 28,
            fontSize: 28,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.65)",
            maxWidth: 1200,
            animationDelay: "0.2s",
          }}
        >
          Toda postagem deve responder a um deles. Sem pilar, é só barulho.
        </p>

        <div
          className="grid grid-cols-4 gap-5 animate-fade-in-up"
          style={{ marginTop: 64, animationDelay: "0.35s" }}
        >
          {pillars.map((p) => (
            <div
              key={p.n}
              className="p-7 rounded-2xl"
              style={{
                background: "oklch(1 0 0 / 0.04)",
                border: "1px solid oklch(1 0 0 / 0.1)",
                minHeight: 320,
              }}
            >
              <div
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 48,
                  color: "var(--onmid-lime)",
                  lineHeight: 1,
                }}
              >
                {p.n}
              </div>
              <div
                className="font-black mt-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 34,
                  color: "oklch(0.98 0 0)",
                  letterSpacing: "-0.02em",
                }}
              >
                {p.t}
              </div>
              <p
                className="mt-3"
                style={{
                  fontSize: 20,
                  color: "oklch(1 0 0 / 0.65)",
                  lineHeight: 1.4,
                }}
              >
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
