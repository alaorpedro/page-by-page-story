import { SlideLayout } from "@/components/SlideLayout";

type Pillar = {
  number: string;
  title: string;
  headline: string;
  action: string;
  bullets: string[];
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Publicidade",
    headline: "A Onmid transforma presença em reconhecimento.",
    action:
      "Vamos estruturar a campanha publicitária para que o candidato seja visto com clareza: linha visual, mensagens-chave, criativos, calendário de veiculação e consistência entre rua, redes sociais e mídia paga.",
    bullets: [
      "Peças de impacto com identidade reconhecível",
      "Campanhas por fase: apresentação, autoridade e mobilização",
      "Controle de frequência, linguagem e promessa pública",
    ],
  },
  {
    number: "02",
    title: "Marketing",
    headline: "A Onmid organiza a estratégia antes da exposição.",
    action:
      "Vamos definir o posicionamento da candidatura, a narrativa central, os públicos prioritários e os argumentos que sustentam a mensagem. A campanha passa a ter direção, não apenas volume de conteúdo.",
    bullets: [
      "Mapa de posicionamento e diferenciação",
      "Narrativa da candidatura e matriz de temas",
      "Calendário editorial integrado à agenda política",
    ],
  },
  {
    number: "03",
    title: "Relacionamento",
    headline: "A Onmid cria rotina para transformar atenção em vínculo.",
    action:
      "Vamos desenhar canais, cadências e processos para ouvir pessoas, responder demandas, registrar sinais do território e manter uma presença próxima, responsável e constante durante a campanha.",
    bullets: [
      "Fluxos de atendimento e resposta para apoiadores",
      "Organização de comunidades, lideranças e multiplicadores",
      "Rituais de prestação de contas e escuta ativa",
    ],
  },
  {
    number: "04",
    title: "Inteligência Artificial",
    headline: "A Onmid usa IA como método, não como atalho.",
    action:
      "Vamos aplicar IA para acelerar diagnóstico, produção e análise sem abrir mão de revisão humana, transparência e responsabilidade. A tecnologia entra para dar velocidade com governança.",
    bullets: [
      "Análise de dúvidas, temas e oportunidades de pauta",
      "Apoio a roteiros, variações de linguagem e calendários",
      "Checagem de consistência, riscos e aderência à estratégia",
    ],
  },
];

type Props = {
  active: 0 | 1 | 2 | 3;
};

export function PoliticalPillarSlide({ active }: Props) {
  const current = PILLARS[active];

  return (
    <SlideLayout variant="content" tone="dark" kicker={`Pilar ${current.number}`}>
      <div className="absolute left-24 top-40 right-24">
        <div
          className="uppercase font-bold animate-fade-in-up"
          style={{
            fontSize: 18,
            letterSpacing: "0.45em",
            color: "var(--onmid-lime)",
            marginBottom: 42,
          }}
        >
          Os quatro pilares da campanha
        </div>

        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 96,
            lineHeight: 0.96,
            letterSpacing: "-0.05em",
            maxWidth: 1180,
            animationDelay: "0.12s",
          }}
        >
          {current.headline}
        </h2>
      </div>

      <div
        className="absolute grid"
        style={{
          left: 110,
          right: 110,
          bottom: 125,
          gridTemplateColumns: "1.42fr 0.72fr 0.72fr 0.72fr",
          gap: 24,
        }}
      >
        {PILLARS.map((pillar, i) => {
          const isActive = i === active;
          return (
            <div
              key={pillar.title}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${0.2 + i * 0.08}s`,
                minHeight: 390,
                padding: isActive ? "34px 36px 38px" : "30px 28px",
                background: isActive
                  ? "linear-gradient(180deg, oklch(0.88 0.24 138 / 0.16), oklch(1 0 0 / 0.045))"
                  : "oklch(1 0 0 / 0.035)",
                borderTop: `2px solid ${
                  isActive ? "var(--onmid-lime)" : "oklch(0.88 0.24 138 / 0.42)"
                }`,
                borderLeft: isActive ? "1px solid oklch(0.88 0.24 138 / 0.18)" : "none",
                borderRight: isActive ? "1px solid oklch(0.88 0.24 138 / 0.18)" : "none",
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: 18,
                  letterSpacing: "0.22em",
                  color: "var(--onmid-lime)",
                  marginBottom: isActive ? 26 : 58,
                }}
              >
                {pillar.number}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: isActive ? 54 : 34,
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  marginBottom: isActive ? 26 : 0,
                }}
              >
                {pillar.title}
              </h3>

              {isActive && (
                <div className="animate-fade-in-up" style={{ animationDelay: "0.34s" }}>
                  <p
                    style={{
                      fontSize: 25,
                      lineHeight: 1.34,
                      color: "oklch(1 0 0 / 0.72)",
                      marginBottom: 28,
                    }}
                  >
                    {pillar.action}
                  </p>
                  <div className="grid grid-cols-3" style={{ gap: 18 }}>
                    {pillar.bullets.map((bullet) => (
                      <div
                        key={bullet}
                        style={{
                          paddingTop: 18,
                          borderTop: "1px solid oklch(0.88 0.24 138 / 0.35)",
                          color: "oklch(1 0 0 / 0.68)",
                          fontSize: 18,
                          lineHeight: 1.28,
                        }}
                      >
                        {bullet}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
