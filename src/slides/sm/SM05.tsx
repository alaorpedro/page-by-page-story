import { SlideLayout } from "@/components/SlideLayout";

export function SM05() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="P" kicker="02 · Persona">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 120,
            lineHeight: 0.95,
            letterSpacing: "-0.045em",
            color: "oklch(0.18 0.01 240)",
            maxWidth: 1500,
          }}
        >
          Quem é o paciente<br />
          que vale o{" "}
          <span style={{ color: "oklch(0.55 0.2 138)", fontStyle: "italic" }}>
            ouro
          </span>
          ?
        </h2>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 40,
            fontSize: 30,
            lineHeight: 1.35,
            color: "oklch(0.18 0.01 240 / 0.7)",
            maxWidth: 1200,
            animationDelay: "0.2s",
          }}
        >
          Falar com todo mundo é falar com ninguém. Defina sua persona em três camadas:
        </p>

        <div
          className="grid grid-cols-3 gap-6 animate-fade-in-up"
          style={{ marginTop: 64, animationDelay: "0.35s" }}
        >
          {[
            {
              t: "Demografia",
              items: ["Idade, renda, região", "Profissão e rotina", "Estado civil / família"],
            },
            {
              t: "Dores reais",
              items: ["O que tira o sono", "Medos com tratamento", "Frustrações anteriores"],
            },
            {
              t: "Desejos profundos",
              items: ["Como quer se sentir", "O que quer mostrar", "O que evita admitir"],
            },
          ].map((c) => (
            <div
              key={c.t}
              className="p-8 rounded-2xl"
              style={{
                background: "oklch(0.18 0.01 240 / 0.04)",
                border: "1px solid oklch(0.18 0.01 240 / 0.1)",
              }}
            >
              <div
                className="font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  color: "oklch(0.18 0.01 240)",
                  letterSpacing: "-0.02em",
                }}
              >
                {c.t}
              </div>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-3"
                    style={{
                      fontSize: 22,
                      color: "oklch(0.18 0.01 240 / 0.75)",
                      lineHeight: 1.35,
                    }}
                  >
                    <span
                      className="mt-3"
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: "oklch(0.55 0.2 138)",
                        flexShrink: 0,
                      }}
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
