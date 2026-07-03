import { Check, Instagram, Target, Users, Vote } from "lucide-react";
import { CampaignToolsSlide } from "./CampaignToolsSlide";
import { ThankYouSlide } from "./ThankYouSlide";
import type { PoliticalSlideEntry } from "@/components/PoliticalMarketingPresentation";
import { LiveInfoBar } from "@/components/LiveInfoBar";
import { SlideLayout } from "@/components/SlideLayout";

type SlideProps = {
  revealStep: number;
};

type Card = {
  title: string;
  text: string;
};

const GREEN = "var(--onmid-lime)";
const WHITE = "oklch(0.98 0 0)";
const MUTED = "oklch(1 0 0 / 0.66)";
const INK = "oklch(0.16 0.01 240)";
const INK_MUTED = "oklch(0.2 0.01 240 / 0.68)";

function Kicker({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className="uppercase font-bold animate-fade-in-up"
      style={{
        fontSize: 18,
        letterSpacing: "0.45em",
        color: tone === "dark" ? GREEN : "oklch(0.48 0.18 138)",
        marginBottom: 38,
      }}
    >
      {children}
    </div>
  );
}

function BigTitle({
  children,
  tone = "dark",
  size = 82,
  maxWidth = 1420,
  expanded = false,
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  size?: number;
  maxWidth?: number;
  expanded?: boolean;
}) {
  return (
    <h2
      className="animate-fade-in-up"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: expanded ? Math.max(size, 116) : Math.min(size, 88),
        lineHeight: expanded ? 0.9 : 0.98,
        letterSpacing: "-0.045em",
        color: tone === "dark" ? WHITE : INK,
        maxWidth,
        animationDelay: "0.12s",
        transition:
          "font-size 600ms cubic-bezier(0.22, 1, 0.36, 1), line-height 600ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </h2>
  );
}

function RevealHeader({
  children,
  revealStep,
  compactTop = 144,
  expandedTop = 270,
}: {
  children: React.ReactNode;
  revealStep: number;
  compactTop?: number;
  expandedTop?: number;
}) {
  return (
    <div
      className="absolute left-24 right-24"
      style={{
        top: revealStep === 0 ? expandedTop : compactTop,
        transition: "top 600ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {children}
    </div>
  );
}

function CardGrid({
  cards,
  tone = "dark",
  columns,
  bottom = 130,
  revealStep,
}: {
  cards: Card[];
  tone?: "dark" | "light";
  columns?: number;
  bottom?: number;
  revealStep: number;
}) {
  const isLight = tone === "light";

  return (
    <div
      className="absolute grid"
      style={{
        left: 110,
        right: 110,
        bottom,
        gap: 24,
        gridTemplateColumns: `repeat(${columns ?? cards.length}, minmax(0, 1fr))`,
      }}
    >
      {cards.map((card, i) => (
        <div
          key={card.title}
          style={{
            opacity: revealStep > i ? 1 : 0,
            transform: revealStep > i ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 420ms ease, transform 420ms ease",
            padding: "36px 34px 40px",
            minHeight: 290,
            background: isLight ? "oklch(1 0 0 / 0.72)" : "oklch(1 0 0 / 0.045)",
            borderTop: `2px solid ${isLight ? "oklch(0.48 0.18 138)" : GREEN}`,
            borderLeft: isLight ? "1px solid oklch(0.16 0.01 240 / 0.08)" : "none",
            borderRight: isLight ? "1px solid oklch(0.16 0.01 240 / 0.08)" : "none",
          }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: 16,
              letterSpacing: "0.22em",
              color: isLight ? "oklch(0.48 0.18 138)" : GREEN,
              marginBottom: 28,
            }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 42,
              lineHeight: 1,
              letterSpacing: "-0.035em",
              color: isLight ? INK : WHITE,
              marginBottom: 20,
            }}
          >
            {card.title}
          </h3>
          <p style={{ fontSize: 25, lineHeight: 1.32, color: isLight ? INK_MUTED : MUTED }}>
            {card.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function MetricStrip({
  metrics,
  tone = "dark",
  revealStep,
}: {
  metrics: { value: string; label: string }[];
  tone?: "dark" | "light";
  revealStep: number;
}) {
  const isLight = tone === "light";

  return (
    <div
      className="absolute grid"
      style={{
        left: 110,
        right: 110,
        bottom: 132,
        gap: 24,
        gridTemplateColumns: `repeat(${metrics.length}, minmax(0, 1fr))`,
      }}
    >
      {metrics.map((metric, i) => (
        <div
          key={metric.label}
          style={{
            opacity: revealStep > i ? 1 : 0,
            transform: revealStep > i ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 420ms ease, transform 420ms ease",
            paddingTop: 30,
            borderTop: `2px solid ${isLight ? "oklch(0.48 0.18 138)" : GREEN}`,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 58,
              lineHeight: 1,
              letterSpacing: "-0.045em",
              color: isLight ? INK : WHITE,
              marginBottom: 18,
            }}
          >
            {metric.value}
          </div>
          <div
            className="uppercase font-bold"
            style={{
              fontSize: 16,
              letterSpacing: "0.28em",
              color: isLight ? "oklch(0.48 0.18 138)" : GREEN,
            }}
          >
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function AndreaCover() {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="AZ" showHomeButton>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 70% 25%, oklch(0.88 0.24 138 / 0.16), transparent 32%), linear-gradient(90deg, oklch(0.13 0.005 240 / 0.96), oklch(0.13 0.005 240 / 0.62))",
        }}
      />
      <LiveInfoBar layout="vertical" />

      <div
        className="absolute inset-0 flex flex-col justify-center px-32"
        style={{ transform: "translateY(118px)" }}
      >
        <Kicker>
          Proposta estratégica
          <br />
          Primeira candidatura
        </Kicker>
        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 172,
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            color: WHITE,
            maxWidth: 1420,
            animationDelay: "0.12s",
          }}
        >
          Andrea
          <br />
          <span style={{ color: GREEN, fontStyle: "italic" }}>Zancko</span>
        </h1>
        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 52,
            fontSize: 27,
            lineHeight: 1.35,
            color: MUTED,
            maxWidth: 1180,
            animationDelay: "0.34s",
          }}
        >
          Plano de marketing eleitoral para transformar reconhecimento inicial em confiança,
          comunidade e intenção de voto.
        </p>
        <a
          data-slide-chrome
          href="https://www.instagram.com/andreazancko/"
          target="_blank"
          rel="noreferrer"
          className="animate-fade-in-up inline-flex items-center gap-3"
          style={{
            marginTop: 34,
            width: "fit-content",
            height: 58,
            padding: "0 28px",
            background: GREEN,
            color: "oklch(0.12 0.005 240)",
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            animationDelay: "0.48s",
          }}
        >
          <Instagram size={19} strokeWidth={2.5} aria-hidden />
          @andreazancko
        </a>
      </div>
    </SlideLayout>
  );
}

function AndreaChallenge({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Desafio">
      <RevealHeader revealStep={revealStep}>
        <Kicker>O desafio da estreia</Kicker>
        <BigTitle expanded={revealStep === 0}>
          Primeira candidatura não começa pedindo voto. Começa construindo lembrança.
        </BigTitle>
        <p style={{ marginTop: 34, fontSize: 27, lineHeight: 1.35, color: MUTED, maxWidth: 1040 }}>
          Sem mandato, a campanha precisa provar identidade, causa e capacidade de mobilização.
        </p>
      </RevealHeader>
      <CardGrid
        cards={[
          {
            title: "Reconhecimento",
            text: "Fazer o eleitor entender rapidamente quem é Andrea, por que entrou e o que representa.",
          },
          {
            title: "Autoridade",
            text: "Transformar experiência, valores e causas em uma narrativa pública clara e repetível.",
          },
          {
            title: "Base própria",
            text: "Captar apoiadores identificados para reduzir dependência de alcance orgânico e grupos soltos.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

function AndreaThesis({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="1" kicker="Tese central">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Tese central da Onmid</Kicker>
        <BigTitle maxWidth={1500} expanded={revealStep === 0}>
          A campanha precisa apresentar Andrea como uma nova liderança antes de vender qualquer
          número.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        bottom={112}
        columns={5}
        cards={[
          { title: "Nome", text: "Memorização e associação visual." },
          { title: "Causa", text: "O motivo emocional da candidatura." },
          { title: "Território", text: "Presença física e digital por comunidade." },
          { title: "Prova social", text: "Pessoas reais validando a caminhada." },
          { title: "Conversão", text: "Apoiadores saindo da audiência para a base." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

function AndreaPositioning({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Posicionamento">
      <RevealHeader revealStep={revealStep} compactTop={118}>
        <Kicker tone="light">Narrativa de primeira candidatura</Kicker>
        <BigTitle tone="light" size={62} maxWidth={1600} expanded={revealStep === 0}>
          Uma candidatura nova precisa parecer próxima, preparada e impossível de ignorar.
        </BigTitle>
      </RevealHeader>
      <div
        className="absolute grid"
        style={{
          left: 110,
          right: 110,
          bottom: 118,
          gap: 24,
          gridTemplateColumns: "0.95fr 1.05fr",
        }}
      >
        <div
          style={{
            opacity: revealStep > 0 ? 1 : 0,
            transform: revealStep > 0 ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 420ms ease, transform 420ms ease",
            padding: "48px",
            background: "oklch(0.16 0.01 240)",
            color: WHITE,
            minHeight: 470,
          }}
        >
          <span
            className="uppercase font-bold"
            style={{ fontSize: 14, letterSpacing: "0.3em", color: GREEN }}
          >
            Persona pública
          </span>
          <h3
            style={{
              marginTop: 30,
              fontFamily: "var(--font-display)",
              fontSize: 74,
              lineHeight: 0.92,
              fontWeight: 900,
            }}
          >
            A voz nova que organiza demandas reais.
          </h3>
          <p style={{ marginTop: 28, fontSize: 24, lineHeight: 1.4, color: MUTED }}>
            Premissa fictícia: posicionar Andrea como liderança cidadã, acessível, técnica e
            conectada com problemas cotidianos da comunidade.
          </p>
        </div>
        <div className="grid grid-cols-2" style={{ gap: 18 }}>
          {[
            ["Tom", "Firme, humano, direto e sem linguagem política tradicional."],
            ["Promessa", "Escutar, organizar e defender demandas com método."],
            ["Prova", "Histórias, encontros, bastidores, causas e apoiadores reais."],
            [
              "Cuidado",
              "Não parecer campanha genérica: toda pauta precisa ter rosto e território.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              style={{
                opacity: revealStep > index + 1 ? 1 : 0,
                transform: revealStep > index + 1 ? "translateY(0)" : "translateY(24px)",
                transition: "opacity 420ms ease, transform 420ms ease",
                padding: "34px 32px",
                background: "white",
                borderTop: "2px solid oklch(0.48 0.18 138)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 38,
                  fontWeight: 900,
                  color: INK,
                }}
              >
                {title}
              </h3>
              <p style={{ marginTop: 16, fontSize: 22, lineHeight: 1.35, color: INK_MUTED }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

function AndreaDiagnosis({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Diagnóstico">
      <RevealHeader revealStep={revealStep} compactTop={120} expandedTop={245}>
        <Kicker>Premissas fictícias · a validar</Kicker>
        <BigTitle size={68} maxWidth={1600} expanded={revealStep === 0}>
          O ponto de partida é pequeno o suficiente para crescer rápido — se virar sistema.
        </BigTitle>
      </RevealHeader>
      <MetricStrip
        revealStep={revealStep}
        metrics={[
          { value: "12–18%", label: "conhecimento inicial simulado" },
          { value: "3–5", label: "causas prioritárias" },
          { value: "8–12", label: "núcleos territoriais" },
          { value: "90 dias", label: "pré-campanha organizada" },
        ]}
      />
      <p
        className="absolute left-28 bottom-64"
        style={{
          opacity: revealStep > 0 ? 1 : 0,
          maxWidth: 1340,
          fontSize: 20,
          lineHeight: 1.45,
          color: MUTED,
          transition: "opacity 420ms ease",
        }}
      >
        Estes números são hipóteses de trabalho para diagramação estratégica. A campanha real deve
        validar base, cargo, município, partido, calendário, histórico de relacionamento e
        pesquisas.
      </p>
    </SlideLayout>
  );
}

function AndreaTerritory({ revealStep }: SlideProps) {
  const rows = [
    [
      "Núcleo afetivo",
      "Família, amigos, rede profissional e apoiadores próximos.",
      "Primeiros 300 cadastros",
    ],
    [
      "Território-base",
      "Bairros, comunidades, causas e locais onde Andrea pode ser reconhecida.",
      "Agenda semanal",
    ],
    [
      "Públicos de pauta",
      "Mulheres, empreendedores, saúde, educação, proteção social ou causa definida.",
      "Conteúdo segmentado",
    ],
    [
      "Expansão digital",
      "Audiência fria atingida por conteúdo, mídia e colaborações.",
      "Conversão para WhatsApp",
    ],
  ];

  return (
    <SlideLayout variant="content" tone="light" kicker="Território">
      <div className="absolute left-24 right-24" style={{ top: 112 }}>
        <Kicker tone="light">Mapa de construção de base</Kicker>
        <BigTitle tone="light" size={60} maxWidth={1550}>
          Para quem estreia, território não é só geografia. É rede de confiança.
        </BigTitle>
      </div>
      <div className="absolute left-28 right-28" style={{ top: 418 }}>
        {rows.map(([stage, description, output], index) => (
          <div
            key={stage}
            className="grid items-center"
            style={{
              gridTemplateColumns: "0.52fr 1fr 0.45fr",
              minHeight: 120,
              padding: "0 34px",
              background: index % 2 === 0 ? "white" : "oklch(0.97 0.004 90)",
              borderTop:
                index === 0
                  ? "2px solid oklch(0.48 0.18 138)"
                  : "1px solid oklch(0.16 0.01 240 / 0.08)",
              opacity: revealStep > index ? 1 : 0,
              transform: revealStep > index ? "translateX(0)" : "translateX(-24px)",
              transition: "opacity 420ms ease, transform 420ms ease",
            }}
          >
            <strong style={{ fontFamily: "var(--font-display)", fontSize: 34, color: INK }}>
              {stage}
            </strong>
            <span style={{ fontSize: 22, lineHeight: 1.35, color: INK_MUTED }}>{description}</span>
            <span
              className="uppercase font-bold"
              style={{ fontSize: 13, letterSpacing: "0.2em", color: "oklch(0.48 0.18 138)" }}
            >
              {output}
            </span>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

function AndreaGoal({ revealStep }: SlideProps) {
  const tiers = [
    ["Reconhecimento", "Alcance qualificado, frequência e associação do nome.", "40%"],
    ["Relacionamento", "Cadastro, WhatsApp, eventos e lista de apoiadores.", "30%"],
    ["Prova social", "Depoimentos, lideranças, encontros e validações públicas.", "20%"],
    ["Conversão", "Convocação final, lembrança de número e mobilização.", "10%"],
  ];

  return (
    <SlideLayout variant="content" tone="dark" kicker="Meta operacional">
      <RevealHeader revealStep={revealStep} compactTop={118} expandedTop={250}>
        <Kicker>Funil da primeira candidatura</Kicker>
        <BigTitle maxWidth={1600} size={70} expanded={revealStep === 0}>
          A meta não nasce no voto. Nasce no cadastro, na repetição e na liderança local.
        </BigTitle>
      </RevealHeader>
      <div
        className="absolute left-20 right-20 grid"
        style={{ top: 400, gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 20 }}
      >
        {tiers.map(([title, text, share], index) => (
          <div
            key={title}
            style={{
              minHeight: 350,
              padding: "30px 28px",
              background: "oklch(1 0 0 / 0.045)",
              borderTop: `2px solid ${GREEN}`,
              opacity: revealStep > index ? 1 : 0,
              transform: revealStep > index ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 420ms ease, transform 420ms ease",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 68,
                fontWeight: 900,
                color: GREEN,
                lineHeight: 1,
              }}
            >
              {share}
            </div>
            <h3
              style={{
                marginTop: 28,
                fontFamily: "var(--font-display)",
                fontSize: 36,
                fontWeight: 900,
                lineHeight: 1,
                color: WHITE,
              }}
            >
              {title}
            </h3>
            <p style={{ marginTop: 20, fontSize: 22, lineHeight: 1.38, color: MUTED }}>{text}</p>
          </div>
        ))}
      </div>
      <div className="absolute left-20 right-20 bottom-18 flex items-center justify-between">
        <span style={{ fontSize: 18, color: MUTED }}>
          Faixas de voto e metas finais devem ser definidas após cargo, partido, nominata e
          pesquisa.
        </span>
        <strong style={{ fontFamily: "var(--font-display)", fontSize: 40, color: WHITE }}>
          Meta simulada: <span style={{ color: GREEN }}>15–25 mil votos</span>
        </strong>
      </div>
    </SlideLayout>
  );
}

function AndreaArchitecture({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Arquitetura">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Arquitetura da campanha</Kicker>
        <BigTitle expanded={revealStep === 0}>
          Quatro frentes para transformar uma estreia em presença pública.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        columns={4}
        cards={[
          { title: "Identidade", text: "Nome, slogan, visual, tom de voz e mensagem central." },
          {
            title: "Conteúdo",
            text: "Rotina de vídeos, bastidores, causas, perguntas e provas de escuta.",
          },
          {
            title: "Mídia",
            text: "Distribuição por reconhecimento, engajamento, WhatsApp e remarketing.",
          },
          {
            title: "Base",
            text: "CRM, voluntários, lideranças, eventos e régua de relacionamento.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

function AndreaIndicators({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Indicadores">
      <RevealHeader revealStep={revealStep}>
        <Kicker tone="light">Painel de indicadores</Kicker>
        <BigTitle tone="light" expanded={revealStep === 0}>
          Na primeira candidatura, vaidade digital só importa quando vira base identificada.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        tone="light"
        columns={4}
        cards={[
          {
            title: "Lembrança",
            text: "Busca pelo nome, alcance recorrente e comentários citando Andrea.",
          },
          {
            title: "Comunidade",
            text: "Cadastros, grupos, respostas no WhatsApp e presença em encontros.",
          },
          {
            title: "Conteúdo vencedor",
            text: "Temas que geram salvamentos, compartilhamentos e conversas reais.",
          },
          {
            title: "Território",
            text: "Bairros ativados, líderes cadastrados e agendas com retorno.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

function AndreaContentMap({ revealStep }: SlideProps) {
  const cards = [
    ["Quem é Andrea", "Origem, valores, família, trajetória e motivação."],
    ["Por que candidata", "A causa que justifica entrar na disputa."],
    ["Escuta real", "Perguntas, visitas, demandas e resposta pública."],
    ["Propostas simples", "Ideias compreensíveis, concretas e repetíveis."],
    ["Apoiadores", "Depoimentos, encontros, lideranças e prova social."],
    ["Chamadas de ação", "Entrar no WhatsApp, participar, voluntariar e compartilhar."],
  ];

  return (
    <SlideLayout variant="content" tone="dark" kicker="Conteúdo">
      <div className="absolute left-24 right-24" style={{ top: 122 }}>
        <Kicker>Mapa de conteúdo</Kicker>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 78,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: WHITE,
            maxWidth: 1280,
          }}
        >
          Toda publicação precisa responder uma pergunta do eleitor.
        </h2>
      </div>
      <div
        className="absolute grid"
        style={{
          left: 110,
          right: 110,
          bottom: 118,
          gap: 2,
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {cards.map(([title, text], i) => (
          <div
            key={title}
            style={{
              opacity: revealStep > i ? 1 : 0,
              transform: revealStep > i ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 440ms ease, transform 440ms cubic-bezier(0.22, 1, 0.36, 1)",
              padding: "44px 42px 46px",
              minHeight: 288,
              background: "oklch(1 0 0 / 0.045)",
              borderTop: `3px solid ${GREEN}`,
            }}
          >
            <div
              className="font-mono"
              style={{ fontSize: 18, letterSpacing: "0.2em", color: GREEN, marginBottom: 34 }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 44,
                lineHeight: 1,
                color: WHITE,
                fontStyle: "italic",
                marginBottom: 18,
              }}
            >
              {title}
            </h3>
            <p style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, maxWidth: 420 }}>{text}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

function AndreaPackages({ revealStep }: SlideProps) {
  const items = [
    ["Studio", "Identidade, peças, impressos e templates.", "R$ 35.000"],
    ["Tráfego", "Reconhecimento, engajamento e WhatsApp.", "R$ 50.000"],
    ["Consultoria", "Plano, metas, leitura e correção de rota.", "R$ 25.000"],
    ["Produção", "Foto, vídeo, bastidores e agenda.", "R$ 60.000"],
  ];

  return (
    <SlideLayout variant="content" tone="light" kicker="Entrega integrada">
      <RevealHeader revealStep={revealStep}>
        <Kicker tone="light">Pacotes integrados</Kicker>
        <BigTitle tone="light" expanded={revealStep === 0}>
          Quatro entregas, uma estreia com método.
        </BigTitle>
      </RevealHeader>
      <div
        className="absolute grid"
        style={{
          left: 110,
          right: 110,
          bottom: 130,
          gap: 24,
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {items.map(([title, text, price], index) => (
          <div
            key={title}
            style={{
              opacity: revealStep > index ? 1 : 0,
              transform: revealStep > index ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 420ms ease, transform 420ms ease",
              padding: "34px 32px 30px",
              minHeight: 290,
              background: "oklch(1 0 0 / 0.72)",
              borderTop: "2px solid oklch(0.48 0.18 138)",
              color: INK,
            }}
          >
            <Check size={28} strokeWidth={2.4} style={{ color: "oklch(0.48 0.18 138)" }} />
            <h3
              style={{
                marginTop: 28,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 42,
                lineHeight: 1,
              }}
            >
              {title}
            </h3>
            <p style={{ marginTop: 20, fontSize: 24, color: INK_MUTED }}>{text}</p>
            <strong
              style={{
                display: "block",
                marginTop: 42,
                fontFamily: "var(--font-display)",
                fontSize: 31,
                color: "oklch(0.48 0.18 138)",
              }}
            >
              {price}
            </strong>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

function AndreaNextStep({ revealStep }: SlideProps) {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="→">
      <RevealHeader revealStep={revealStep} compactTop={160} expandedTop={310}>
        <Kicker>Próximo passo</Kicker>
        <BigTitle maxWidth={1500} expanded={revealStep === 0}>
          Vamos transformar Andrea em uma candidatura reconhecida.
        </BigTitle>
        <p style={{ marginTop: 58, fontSize: 28, lineHeight: 1.35, color: MUTED, maxWidth: 1180 }}>
          A Onmid estrutura a narrativa, a rotina de conteúdo, a inteligência de dados e a operação
          de base para tirar a candidatura do zero com velocidade.
        </p>
      </RevealHeader>
      <CardGrid
        bottom={88}
        columns={4}
        cards={[
          { title: "Diagnóstico", text: "Ativos, riscos, públicos, causas e repertório pessoal." },
          {
            title: "Posicionamento",
            text: "Mensagem central, tom, identidade e primeiras pautas.",
          },
          { title: "Plano de 90 dias", text: "Conteúdo, mídia, agenda, CRM e metas de base." },
          { title: "Operação", text: "Rotina semanal de produção, publicação, tráfego e leitura." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export const ANDREA_ZANCKO_SLIDES: PoliticalSlideEntry[] = [
  { id: "01", title: "Proposta estratégica", component: AndreaCover },
  { id: "02", title: "Desafio", component: AndreaChallenge, revealSteps: 3 },
  { id: "03", title: "Tese central", component: AndreaThesis, revealSteps: 5 },
  { id: "04", title: "Posicionamento", component: AndreaPositioning, revealSteps: 5 },
  { id: "05", title: "Diagnóstico", component: AndreaDiagnosis, revealSteps: 4 },
  { id: "06", title: "Território", component: AndreaTerritory, revealSteps: 4 },
  { id: "07", title: "Meta operacional", component: AndreaGoal, revealSteps: 4 },
  { id: "08", title: "Arquitetura", component: AndreaArchitecture, revealSteps: 4 },
  { id: "09", title: "Painel de ferramentas", component: CampaignToolsSlide, revealSteps: 6 },
  { id: "10", title: "Indicadores", component: AndreaIndicators, revealSteps: 4 },
  { id: "11", title: "Mapa de conteúdo", component: AndreaContentMap, revealSteps: 6 },
  { id: "12", title: "Pacotes integrados", component: AndreaPackages, revealSteps: 4 },
  { id: "13", title: "Próximo passo", component: AndreaNextStep, revealSteps: 4 },
  { id: "14", title: "Obrigado", component: ThankYouSlide },
];
