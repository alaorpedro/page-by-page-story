import { SlideLayout } from "@/components/SlideLayout";

type Pillar = {
  number: string;
  title: string;
  headline: string;
  action: string;
  items: {
    title: string;
    explanation: string;
  }[];
};

const PILLARS: Pillar[] = [
  {
    number: "01",
    title: "Publicidade",
    headline: "A Onmid transforma presença em reconhecimento.",
    action:
      "Vamos estruturar a campanha publicitária para que o candidato seja visto com clareza: linha visual, mensagens-chave, criativos, calendário de veiculação e consistência entre rua, redes sociais e mídia paga.",
    items: [
      {
        title: "Identidade reconhecível",
        explanation:
          "Criamos um padrão visual e verbal para o eleitor reconhecer a candidatura rapidamente, aumentando lembrança e percepção de profissionalismo.",
      },
      {
        title: "Campanha por fase",
        explanation:
          "Organizamos a publicidade em etapas: primeiro apresenta, depois constrói autoridade e então mobiliza. Isso evita gasto disperso e dá previsibilidade.",
      },
      {
        title: "Mensagem sob controle",
        explanation:
          "Definimos o que repetir, onde repetir e com qual intensidade, para o candidato ganhar presença sem parecer improvisado ou contraditório.",
      },
    ],
  },
  {
    number: "02",
    title: "Marketing",
    headline: "A Onmid organiza a estratégia antes da exposição.",
    action:
      "Vamos definir o posicionamento da candidatura, a narrativa central, os públicos prioritários e os argumentos que sustentam a mensagem. A campanha passa a ter direção, não apenas volume de conteúdo.",
    items: [
      {
        title: "Posicionamento claro",
        explanation:
          "Mostramos onde a candidatura deve se diferenciar e qual espaço ocupar na mente do eleitor, reduzindo comparação por popularidade ou barulho.",
      },
      {
        title: "Narrativa de confiança",
        explanation:
          "Transformamos propostas, história e território em uma linha de comunicação simples, defensável e fácil de ser repetida pela equipe.",
      },
      {
        title: "Agenda com intenção",
        explanation:
          "Cada conteúdo, visita e pauta passa a cumprir um papel estratégico, conectando exposição pública com construção real de reputação.",
      },
    ],
  },
  {
    number: "03",
    title: "Relacionamento",
    headline: "A Onmid cria rotina para transformar atenção em vínculo.",
    action:
      "Vamos desenhar canais, cadências e processos para ouvir pessoas, responder demandas, registrar sinais do território e manter uma presença próxima, responsável e constante durante a campanha.",
    items: [
      {
        title: "Atendimento organizado",
        explanation:
          "Criamos fluxos para responder apoiadores, dúvidas e críticas com velocidade e critério, evitando perda de oportunidades por falta de processo.",
      },
      {
        title: "Base de relacionamento",
        explanation:
          "Estruturamos comunidades, lideranças e multiplicadores para que o apoio não dependa apenas de postagem, mas de vínculo contínuo.",
      },
      {
        title: "Escuta que vira pauta",
        explanation:
          "Registramos sinais do território e transformamos demandas reais em conteúdo, agenda e prestação de contas com mais aderência local.",
      },
    ],
  },
  {
    number: "04",
    title: "Inteligência Artificial",
    headline: "A Onmid usa IA como método, não como atalho.",
    action:
      "Vamos aplicar IA para acelerar diagnóstico, produção e análise sem abrir mão de revisão humana, transparência e responsabilidade. A tecnologia entra para dar velocidade com governança.",
    items: [
      {
        title: "Diagnóstico mais rápido",
        explanation:
          "Usamos IA para organizar temas, dúvidas e padrões de conversa, dando ao candidato uma leitura mais clara do que merece atenção.",
      },
      {
        title: "Produção com método",
        explanation:
          "Aceleramos roteiros, legendas e variações de linguagem, sempre com direção estratégica e revisão humana antes de qualquer publicação.",
      },
      {
        title: "Governança e segurança",
        explanation:
          "Criamos filtros para reduzir risco de inconsistência, promessa frágil ou uso inadequado de tecnologia na comunicação da campanha.",
      },
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
          gridTemplateColumns: PILLARS.map((_, i) => (i === active ? "1.85fr" : "0.55fr")).join(
            " ",
          ),
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
                padding: isActive ? "32px 34px 34px" : "30px 28px",
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
                  fontSize: isActive ? 48 : 34,
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  marginBottom: isActive ? 20 : 0,
                }}
              >
                {pillar.title}
              </h3>

              {isActive && (
                <div className="animate-fade-in-up" style={{ animationDelay: "0.34s" }}>
                  <p
                    style={{
                      fontSize: 25,
                      lineHeight: 1.28,
                      color: "oklch(1 0 0 / 0.72)",
                      marginBottom: 24,
                    }}
                  >
                    {pillar.action}
                  </p>
                  <div className="grid grid-cols-3" style={{ gap: 18 }}>
                    {pillar.items.map((item) => (
                      <div
                        key={item.title}
                        style={{
                          paddingTop: 18,
                          borderTop: "1px solid oklch(0.88 0.24 138 / 0.35)",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 900,
                            fontSize: 21,
                            lineHeight: 1,
                            letterSpacing: "-0.025em",
                            color: "oklch(1 0 0 / 0.88)",
                            marginBottom: 12,
                          }}
                        >
                          {item.title}
                        </div>
                        <p
                          style={{
                            color: "oklch(1 0 0 / 0.62)",
                            fontSize: 15,
                            lineHeight: 1.32,
                          }}
                        >
                          {item.explanation}
                        </p>
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
