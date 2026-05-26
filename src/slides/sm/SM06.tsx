import { SlideLayout } from "@/components/SlideLayout";

export function SM06() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="V" kicker="03 · Tom de voz">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 120,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "oklch(0.98 0 0)",
            maxWidth: 1600,
          }}
        >
          Pare de soar como{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            consultório
          </span>
          .
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 32,
            fontSize: 32,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.7)",
            maxWidth: 1300,
            animationDelay: "0.2s",
          }}
        >
          Ninguém segue um CNPJ. As pessoas seguem gente — com opinião, com
          jeito de falar, com cara.
        </p>

        <div
          className="grid grid-cols-2 gap-10 animate-fade-in-up"
          style={{ marginTop: 72, animationDelay: "0.35s" }}
        >
          <div
            className="p-10 rounded-2xl"
            style={{
              background: "oklch(1 0 0 / 0.04)",
              border: "1px solid oklch(1 0 0 / 0.12)",
            }}
          >
            <div
              className="uppercase font-bold mb-4"
              style={{
                fontSize: 16,
                letterSpacing: "0.35em",
                color: "oklch(0.7 0.18 25)",
              }}
            >
              Evite
            </div>
            <ul
              className="space-y-4"
              style={{ fontSize: 26, color: "oklch(1 0 0 / 0.7)", lineHeight: 1.4 }}
            >
              <li>"Agende sua avaliação gratuita."</li>
              <li>"Excelência em odontologia há 15 anos."</li>
              <li>"Tecnologia de ponta a serviço do seu sorriso."</li>
            </ul>
          </div>

          <div
            className="p-10 rounded-2xl"
            style={{
              background: "oklch(0.88 0.24 138 / 0.08)",
              border: "1px solid var(--onmid-lime)",
            }}
          >
            <div
              className="uppercase font-bold mb-4"
              style={{
                fontSize: 16,
                letterSpacing: "0.35em",
                color: "var(--onmid-lime)",
              }}
            >
              Use
            </div>
            <ul
              className="space-y-4"
              style={{ fontSize: 26, color: "oklch(0.98 0 0)", lineHeight: 1.4 }}
            >
              <li>"Você ri sem pensar antes?"</li>
              <li>"Hoje atendi uma paciente que chorou ao se ver no espelho."</li>
              <li>"Estética dental não é vaidade. É voltar a aparecer."</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
