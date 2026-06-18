import { useState } from "react";
import { Check, X } from "lucide-react";
import { LiveInfoBar } from "@/components/LiveInfoBar";
import { DigitalPresenceAnalysis } from "@/components/DigitalPresenceAnalysis";
import { MunicipalityProfile } from "@/components/MunicipalityProfile";
import { ParanaVotingMap } from "@/components/ParanaVotingMap";
import { SlideLayout } from "@/components/SlideLayout";
import cobraReporterWatermark from "@/assets/cobra-reporter-watermark.jpg";

type ElectoralSlideProps = {
  revealStep: number;
};

type Card = {
  title: string;
  text: string;
};

type IntegratedPackage = {
  title: string;
  short: string;
  price: string;
  role: string;
  deliveries: string[];
};

const GREEN = "var(--onmid-lime)";
const WHITE = "oklch(0.98 0 0)";
const MUTED = "oklch(1 0 0 / 0.66)";
const INK = "oklch(0.16 0.01 240)";
const INK_MUTED = "oklch(0.2 0.01 240 / 0.68)";

const INTEGRATED_PACKAGES: IntegratedPackage[] = [
  {
    title: "Studio",
    short: "Visual e peças.",
    price: "R$ 35.000,00",
    role: "Sistema visual e criativo para dar unidade, reconhecimento e velocidade à campanha.",
    deliveries: [
      "Identidade visual da campanha e manual de aplicação.",
      "Artes para feed, stories, carrosséis, agenda e mobilização.",
      "Capas, cards, cortes e peças de oportunidade.",
      "Santinhos, adesivos, folders e materiais para reuniões.",
      "Templates para respostas rápidas e comunicação territorial.",
      "Organização da linguagem visual por tema e fase da campanha.",
    ],
  },
  {
    title: "Tráfego",
    short: "Distribuição.",
    price: "R$ 50.000,00",
    role: "Distribuição estratégica para transformar conteúdo em alcance qualificado e frequência.",
    deliveries: [
      "Planejamento de mídia por território, público e fase eleitoral.",
      "Configuração, publicação e monitoramento das campanhas.",
      "Testes A/B de criativos, mensagens, públicos e formatos.",
      "Otimização diária de verba, alcance, frequência e custo.",
      "Campanhas de reconhecimento, conteúdo, mobilização e WhatsApp.",
      "Relatórios de desempenho com criativos e territórios prioritários.",
    ],
  },
  {
    title: "Consultoria",
    short: "Gestão de meta.",
    price: "R$ 25.000,00",
    role: "Inteligência estratégica para conectar comunicação, território e meta de votos.",
    deliveries: [
      "Diagnóstico eleitoral, riscos, ativos e oportunidades.",
      "Plano de campanha com fases, narrativas e prioridades.",
      "Meta de votos distribuída por município e faixa territorial.",
      "War Room semanal para leitura de cenário e tomada de decisão.",
      "Painel de indicadores de comunicação, mobilização e território.",
      "Recomendações de pauta, posicionamento e correções de rota.",
    ],
  },
  {
    title: "Produção",
    short: "Foto e vídeo.",
    price: "R$ 60.000,00",
    role: "Cobertura audiovisual para transformar agenda e presença em percepção pública.",
    deliveries: [
      "Captação fotográfica e audiovisual da agenda do candidato.",
      "Vídeos verticais, bastidores, depoimentos e conteúdos espontâneos.",
      "Cobertura de reuniões, visitas, eventos e encontros com lideranças.",
      "Edição de Reels, Stories, cortes rápidos e vídeos institucionais.",
      "Legendas, versões por formato e peças de reação rápida.",
      "Banco organizado de fotos e vídeos para uso durante a campanha.",
    ],
  },
];

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
        fontSize: expanded ? Math.max(size, 124) : Math.min(size, 88),
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
  const expanded = revealStep === 0;

  return (
    <div
      className="absolute left-24 right-24"
      style={{
        top: expanded ? expandedTop : compactTop,
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

export function MP01() {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="100" showHomeButton>
      <img
        src={cobraReporterWatermark}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        style={{
          opacity: 0.48,
          filter: "grayscale(0.08) contrast(1.12) saturate(0.95)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.005 240 / 0.92) 0%, oklch(0.13 0.005 240 / 0.64) 48%, oklch(0.13 0.005 240 / 0.54) 100%)",
        }}
      />
      <LiveInfoBar layout="vertical" />

      <div
        className="absolute inset-0 flex flex-col justify-center px-32"
        style={{ transform: "translateY(140px)" }}
      >
        <Kicker>
          Proposta estratégica
          <br />
          Campanha eleitoral
        </Kicker>
        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 188,
            lineHeight: 0.88,
            letterSpacing: "-0.06em",
            color: WHITE,
            maxWidth: 1420,
            animationDelay: "0.12s",
          }}
        >
          Cobra
          <br />
          <span style={{ color: GREEN, fontStyle: "italic" }}>Repórter</span>
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
          Marketing eleitoral com método, produção diária e mensuração para perseguir a meta de 100
          mil votos.
        </p>
        <DigitalPresenceAnalysis />
      </div>
    </SlideLayout>
  );
}

export function MP02({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Desafio">
      <RevealHeader revealStep={revealStep}>
        <Kicker>O desafio</Kicker>
        <BigTitle expanded={revealStep === 0}>
          Voto é consequência de repetição, confiança e presença organizada.
        </BigTitle>
        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 34,
            fontSize: 27,
            lineHeight: 1.35,
            color: MUTED,
            maxWidth: 1040,
            animationDelay: "0.28s",
          }}
        >
          Campanha não se vence no improviso.
        </p>
      </RevealHeader>
      <CardGrid
        cards={[
          {
            title: "Narrativa precisa",
            text: "Transformar histórico, entregas e posicionamento em mensagens simples, memoráveis e repetíveis.",
          },
          {
            title: "Produção constante",
            text: "A campanha exige volume diário sem perder padrão visual, consistência e velocidade de resposta.",
          },
          {
            title: "Mensuração real",
            text: "Sem método, a campanha vira sensação. Com indicadores, vira gestão de meta.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP03({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="M" kicker="Tese central">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Tese central da Onmid</Kicker>
        <BigTitle maxWidth={1500} expanded={revealStep === 0}>
          Campanha eleitoral precisa operar como uma máquina editorial com inteligência de dados.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        bottom={112}
        columns={5}
        cards={[
          { title: "Estratégia", text: "Define o que dizer." },
          { title: "Criação", text: "Transforma em linguagem." },
          { title: "Produção", text: "Entrega velocidade." },
          { title: "Tráfego", text: "Distribui para as pessoas certas." },
          { title: "Mensuração", text: "Mostra se a campanha está ficando mais forte." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP04({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Capital político">
      <RevealHeader revealStep={revealStep} compactTop={110}>
        <Kicker tone="light">Votação por município · Eleições 2022</Kicker>
        <BigTitle tone="light" size={54} maxWidth={1650} expanded={revealStep === 0}>
          O mapa revela onde a confiança já foi transformada em voto.
        </BigTitle>
      </RevealHeader>
      <ParanaVotingMap visible={revealStep > 0} />
    </SlideLayout>
  );
}

export function MP04Profile() {
  return (
    <SlideLayout variant="content" tone="light" kicker="Consulta municipal">
      <div className="absolute left-24 right-24" style={{ top: 105 }}>
        <Kicker tone="light">Inteligência territorial · Paraná</Kicker>
        <BigTitle tone="light" size={56} maxWidth={1600}>
          Selecione uma cidade e transforme dados públicos em decisão de campanha.
        </BigTitle>
      </div>
      <MunicipalityProfile />
    </SlideLayout>
  );
}

const GROWTH_TIERS = [
  {
    label: "Bases prioritárias",
    detail: "6 cidades · acima de 1.000 votos",
    base: "25.413",
    growth: "+14.000",
    rate: "+55%",
    share: "36% da meta",
  },
  {
    label: "Consolidação regional",
    detail: "9 cidades · entre 300 e 999 votos",
    base: "5.623",
    growth: "+5.100",
    rate: "+91%",
    share: "13% da meta",
  },
  {
    label: "Escala territorial",
    detail: "136 cidades · entre 100 e 299 votos",
    base: "21.984",
    growth: "+15.400",
    rate: "+70%",
    share: "39% da meta",
  },
  {
    label: "Expansão de presença",
    detail: "129 cidades · abaixo de 100 votos",
    base: "6.444",
    growth: "+4.770",
    rate: "+74%",
    share: "12% da meta",
  },
];

export function MP04Growth({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Meta 2026">
      <RevealHeader revealStep={revealStep} compactTop={118} expandedTop={250}>
        <Kicker>Projeção ponderada · 100 mil votos</Kicker>
        <BigTitle maxWidth={1600} size={70} expanded={revealStep === 0}>
          A meta cresce pelo peso real de cada território, não por percentuais iguais.
        </BigTitle>
      </RevealHeader>

      <div
        className="absolute left-20 right-20 grid"
        style={{
          top: 365,
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 20,
        }}
      >
        {GROWTH_TIERS.map((tier, index) => (
          <div
            key={tier.label}
            style={{
              minHeight: 330,
              padding: "28px 28px 26px",
              background: "oklch(1 0 0 / 0.045)",
              borderTop: `2px solid ${GREEN}`,
              opacity: revealStep > index ? 1 : 0,
              transform: revealStep > index ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 420ms ease, transform 420ms ease",
            }}
          >
            <div
              className="font-mono"
              style={{ color: GREEN, fontSize: 14, letterSpacing: "0.2em" }}
            >
              {String(index + 1).padStart(2, "0")} · {tier.share}
            </div>
            <h3
              style={{
                marginTop: 24,
                minHeight: 76,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 31,
                lineHeight: 1,
                color: WHITE,
              }}
            >
              {tier.label}
            </h3>
            <p
              style={{ marginTop: 12, minHeight: 48, fontSize: 16, lineHeight: 1.35, color: MUTED }}
            >
              {tier.detail}
            </p>
            <div className="flex items-end justify-between" style={{ marginTop: 24 }}>
              <div>
                <span
                  className="uppercase font-bold"
                  style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: MUTED }}
                >
                  Base 2022
                </span>
                <strong style={{ display: "block", marginTop: 7, fontSize: 25, color: WHITE }}>
                  {tier.base}
                </strong>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  className="uppercase font-bold"
                  style={{ display: "block", fontSize: 11, letterSpacing: "0.2em", color: MUTED }}
                >
                  Incremento
                </span>
                <strong
                  style={{
                    display: "block",
                    marginTop: 7,
                    fontFamily: "var(--font-display)",
                    fontSize: 35,
                    color: GREEN,
                  }}
                >
                  {tier.growth}
                </strong>
              </div>
            </div>
            <div
              className="flex items-center justify-between"
              style={{
                marginTop: 22,
                paddingTop: 18,
                borderTop: "1px solid oklch(1 0 0 / 0.1)",
              }}
            >
              <span style={{ fontSize: 14, color: MUTED }}>crescimento local</span>
              <strong style={{ fontSize: 22, color: WHITE }}>{tier.rate}</strong>
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute left-20 right-20 bottom-16 flex items-center justify-between"
        style={{
          opacity: revealStep > 0 ? 1 : 0,
          transition: "opacity 420ms ease",
        }}
      >
        <div className="flex items-center gap-5">
          {[
            ["Digital", "35%"],
            ["Cabos eleitorais", "25%"],
            ["Propaganda gratuita", "20%"],
            ["Mala direta", "15%"],
            ["CRM e mobilização", "5%"],
          ].map(([channel, share]) => (
            <div key={channel}>
              <strong style={{ color: GREEN, fontSize: 18 }}>{share}</strong>
              <span style={{ marginLeft: 8, color: MUTED, fontSize: 14 }}>{channel}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "right" }}>
          <strong
            style={{
              display: "block",
              fontFamily: "var(--font-display)",
              fontSize: 38,
              lineHeight: 1,
              color: WHITE,
            }}
          >
            60.730 + 39.270 = <span style={{ color: GREEN }}>100.000</span>
          </strong>
          <span style={{ color: MUTED, fontSize: 14 }}>crescimento global necessário: 64,7%</span>
        </div>
      </div>
    </SlideLayout>
  );
}

export function MP05({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Arquitetura">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Arquitetura da campanha</Kicker>
        <BigTitle expanded={revealStep === 0}>
          Quatro frentes trabalhando como um único sistema.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        columns={4}
        cards={[
          {
            title: "Studio de Criação",
            text: "Identidade, artes sociais, impressos e peças de reação rápida.",
          },
          {
            title: "Tráfego Pago",
            text: "Estratégia de distribuição, execução e otimização por região e público.",
          },
          {
            title: "Consultoria & Métricas",
            text: "Método de acompanhamento da meta de 100 mil votos e tomada de decisão.",
          },
          {
            title: "Foto & Vídeo",
            text: "Captação, edição e cobertura do dia a dia do candidato.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP06({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Pacote 01">
      <RevealHeader revealStep={revealStep}>
        <Kicker tone="light">Pacote 1 · Studio de Criação</Kicker>
        <BigTitle tone="light" expanded={revealStep === 0}>
          O sistema visual que dá consistência, reconhecimento e velocidade.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        tone="light"
        cards={[
          {
            title: "Redes sociais",
            text: "Feed, stories, carrosséis, cards de agenda, cortes, capas de vídeo e peças de oportunidade.",
          },
          {
            title: "Impressos",
            text: "Santinhos, praguinhas, adesivos, folders, materiais de reunião e peças de apoio para bases.",
          },
          {
            title: "Sistema de linguagem",
            text: "Hierarquia visual, mensagens por tema, chamadas de ação e padrão de reconhecimento.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP07({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Pacote 02">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Pacote 2 · Tráfego Pago</Kicker>
        <BigTitle expanded={revealStep === 0}>
          Distribuição estratégica para transformar conteúdo em alcance qualificado.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        cards={[
          {
            title: "Estratégia",
            text: "Geografia eleitoral, públicos, segmentações permitidas, calendário de impulsionamento e prioridade por fase.",
          },
          {
            title: "Execução",
            text: "Subida de campanhas, testes A/B, otimização, controle de verba e leitura de desempenho por tema.",
          },
          {
            title: "Relatórios",
            text: "Análise de alcance, frequência, custo, engajamento, criativos vencedores e oportunidades de pauta.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP08({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Pacote 03">
      <RevealHeader revealStep={revealStep}>
        <Kicker tone="light">Pacote 3 · Consultoria de Marketing</Kicker>
        <BigTitle tone="light" expanded={revealStep === 0}>
          Método de mensuração e acompanhamento da meta de 100 mil votos.
        </BigTitle>
      </RevealHeader>
      <MetricStrip
        tone="light"
        metrics={[
          { value: "Meta", label: "100 mil votos" },
          { value: "Território", label: "cidades e bases" },
          { value: "Narrativas", label: "temas de força" },
          { value: "Dados", label: "painel semanal" },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP09({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Pacote 04">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Pacote 4 · Produção de Conteúdo</Kicker>
        <BigTitle expanded={revealStep === 0}>
          A câmera acompanha para transformar presença em percepção pública.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        cards={[
          {
            title: "Captação",
            text: "Fotos, vídeos verticais, bastidores, agendas com lideranças, visitas, reuniões e momentos espontâneos.",
          },
          {
            title: "Edição",
            text: "Cortes rápidos, legendas, versões para Reels/Stories, compilados, depoimentos e peças de oportunidade.",
          },
          {
            title: "Cobertura inteligente",
            text: "Antes de gravar, a equipe entende qual narrativa aquela agenda precisa provar.",
          },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP10({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="W" kicker="War Room">
      <RevealHeader revealStep={revealStep}>
        <Kicker>Método Onmid</Kicker>
        <BigTitle expanded={revealStep === 0}>
          War Room eleitoral para publicar, impulsionar e corrigir.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        bottom={110}
        columns={5}
        cards={[
          { title: "Segunda", text: "Planejamento, prioridades e agenda crítica." },
          { title: "Terça a quinta", text: "Produção, cobertura e otimização de tráfego." },
          { title: "Sexta", text: "Relatório parcial e ajustes rápidos." },
          { title: "Fim de semana", text: "Conteúdo de presença e mobilização." },
          { title: "Semanal", text: "Leitura da meta e próximos movimentos." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP11({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Indicadores">
      <RevealHeader revealStep={revealStep}>
        <Kicker tone="light">Painel de indicadores</Kicker>
        <BigTitle tone="light" expanded={revealStep === 0}>
          Decisão de campanha sem confundir vaidade com avanço eleitoral.
        </BigTitle>
      </RevealHeader>
      <CardGrid
        tone="light"
        columns={4}
        cards={[
          { title: "Alcance e frequência", text: "Repetição por território e público." },
          {
            title: "Engajamento qualificado",
            text: "Comentários, salvamentos, compartilhamentos e respostas.",
          },
          {
            title: "Custo e eficiência",
            text: "CPM, CPV, custo por interação e criativos vencedores.",
          },
          { title: "Mobilização", text: "Cadastros, WhatsApp, eventos, lideranças e voluntários." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP12({ revealStep }: ElectoralSlideProps) {
  const CARDS = [
    { title: "Prova de entrega", text: "Obras, leis, recursos e solução concreta." },
    { title: "Território", text: "Cidades, lideranças, demandas e presença local." },
    { title: "Humanização", text: "Família, bastidores, rotina, valores e proximidade." },
    { title: "Autoridade", text: "Comissões, projetos, pautas e experiência." },
    { title: "Mobilização", text: "Convites, eventos, voluntários e participação." },
    { title: "Contraste positivo", text: "Por que seguir junto, sem ataque vazio." },
  ];

  return (
    <SlideLayout variant="content" tone="dark" kicker="Conteúdo">
      <div
        className="absolute left-24 right-24"
        style={{ top: 122, transition: "top 600ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <div className="flex items-baseline justify-between animate-fade-in-up">
          <Kicker>Mapa de conteúdo</Kicker>
          <span
            className="font-bold uppercase animate-fade-in-up"
            style={{
              fontSize: 18,
              letterSpacing: "0.28em",
              color: "oklch(1 0 0 / 0.28)",
              animationDelay: "0.1s",
            }}
          >
            Conteúdo
          </span>
        </div>
        <h2
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 78,
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            color: WHITE,
            maxWidth: 1280,
            animationDelay: "0.14s",
          }}
        >
          Para cada publicação, uma função dentro da campanha.
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
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="flex flex-col"
            style={{
              opacity: revealStep > i ? 1 : 0,
              transform: revealStep > i ? "translateY(0)" : "translateY(28px)",
              transition: "opacity 440ms ease, transform 440ms cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: `${i * 60}ms`,
              padding: "44px 42px 46px",
              minHeight: 288,
              background: "oklch(1 0 0 / 0.045)",
              borderTop: `3px solid ${GREEN}`,
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 18,
                letterSpacing: "0.2em",
                color: GREEN,
                marginBottom: 34,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 44,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: WHITE,
                fontStyle: "italic",
                marginBottom: 18,
              }}
            >
              {card.title}
            </h3>
            <p style={{ fontSize: 24, lineHeight: 1.4, color: MUTED, maxWidth: 420 }}>
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

function IntegratedPackageCards({ revealStep }: ElectoralSlideProps) {
  const [selectedPackage, setSelectedPackage] = useState<IntegratedPackage | null>(null);

  return (
    <>
      <div
        data-slide-chrome
        className="absolute grid"
        style={{
          left: 110,
          right: 110,
          bottom: 130,
          gap: 24,
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        }}
      >
        {INTEGRATED_PACKAGES.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setSelectedPackage(item)}
            className="group text-left transition-colors"
            style={{
              opacity: revealStep > index ? 1 : 0,
              transform: revealStep > index ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 420ms ease, transform 420ms ease, background-color 180ms ease",
              pointerEvents: revealStep > index ? "auto" : "none",
              padding: "34px 32px 30px",
              minHeight: 290,
              background: "oklch(1 0 0 / 0.72)",
              borderTop: "2px solid oklch(0.48 0.18 138)",
              borderLeft: "1px solid oklch(0.16 0.01 240 / 0.08)",
              borderRight: "1px solid oklch(0.16 0.01 240 / 0.08)",
              color: INK,
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 16,
                letterSpacing: "0.22em",
                color: "oklch(0.48 0.18 138)",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3
              style={{
                marginTop: 28,
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 42,
                lineHeight: 1,
              }}
            >
              {item.title}
            </h3>
            <p style={{ marginTop: 20, fontSize: 24, color: INK_MUTED }}>{item.short}</p>
            <div
              className="flex items-end justify-between"
              style={{
                marginTop: 42,
                paddingTop: 22,
                borderTop: "1px solid oklch(0.16 0.01 240 / 0.09)",
              }}
            >
              <div>
                <span
                  className="uppercase font-bold"
                  style={{
                    display: "block",
                    fontSize: 11,
                    letterSpacing: "0.2em",
                    color: INK_MUTED,
                  }}
                >
                  Investimento
                </span>
                <strong
                  style={{
                    display: "block",
                    marginTop: 8,
                    fontFamily: "var(--font-display)",
                    fontSize: 25,
                    color: "oklch(0.48 0.18 138)",
                  }}
                >
                  {item.price}
                </strong>
              </div>
              <span
                aria-hidden
                style={{
                  fontSize: 30,
                  color: "oklch(0.48 0.18 138)",
                  transition: "transform 180ms ease",
                }}
                className="group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedPackage && (
        <div
          data-slide-chrome
          className="absolute inset-0 z-50 flex items-center justify-center"
          style={{ background: "oklch(0.08 0.005 240 / 0.76)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="package-modal-title"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="relative grid overflow-hidden"
            style={{
              width: 1320,
              minHeight: 720,
              gridTemplateColumns: "0.72fr 1.28fr",
              background: "oklch(0.98 0.004 90)",
              color: INK,
              boxShadow: "0 44px 120px oklch(0 0 0 / 0.42)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="flex flex-col justify-between"
              style={{
                padding: "54px 48px 48px",
                background: "oklch(0.15 0.006 240)",
                color: WHITE,
              }}
            >
              <div>
                <div
                  className="uppercase font-bold"
                  style={{ fontSize: 14, letterSpacing: "0.3em", color: GREEN }}
                >
                  Pacote integrado
                </div>
                <h3
                  id="package-modal-title"
                  style={{
                    marginTop: 28,
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 70,
                    lineHeight: 0.92,
                  }}
                >
                  {selectedPackage.title}
                </h3>
                <p style={{ marginTop: 28, fontSize: 22, lineHeight: 1.4, color: MUTED }}>
                  {selectedPackage.role}
                </p>
              </div>
              <div>
                <span
                  className="uppercase font-bold"
                  style={{
                    display: "block",
                    fontSize: 12,
                    letterSpacing: "0.24em",
                    color: MUTED,
                  }}
                >
                  Investimento
                </span>
                <strong
                  style={{
                    display: "block",
                    marginTop: 14,
                    fontFamily: "var(--font-display)",
                    fontSize: 48,
                    lineHeight: 1,
                    color: GREEN,
                  }}
                >
                  {selectedPackage.price}
                </strong>
              </div>
            </div>

            <div style={{ padding: "54px 58px 48px" }}>
              <button
                type="button"
                onClick={() => setSelectedPackage(null)}
                className="absolute flex items-center justify-center transition-colors hover:bg-black/5"
                style={{
                  right: 26,
                  top: 24,
                  width: 46,
                  height: 46,
                  color: INK,
                }}
                aria-label="Fechar detalhes do pacote"
              >
                <X size={25} aria-hidden />
              </button>

              <div
                className="uppercase font-bold"
                style={{
                  fontSize: 14,
                  letterSpacing: "0.28em",
                  color: "oklch(0.48 0.18 138)",
                }}
              >
                Entregas incluídas
              </div>
              <div className="grid grid-cols-2" style={{ marginTop: 34, gap: "24px 34px" }}>
                {selectedPackage.deliveries.map((delivery, index) => (
                  <div
                    key={delivery}
                    className="flex items-start gap-4"
                    style={{
                      minHeight: 120,
                      padding: "22px 20px",
                      background: "white",
                      border: "1px solid oklch(0.16 0.01 240 / 0.09)",
                    }}
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full"
                      style={{
                        width: 32,
                        height: 32,
                        background: "oklch(0.9 0.14 138)",
                        color: INK,
                      }}
                    >
                      <Check size={18} strokeWidth={2.6} aria-hidden />
                    </span>
                    <div>
                      <span
                        className="font-mono"
                        style={{
                          display: "block",
                          marginBottom: 8,
                          fontSize: 12,
                          color: "oklch(0.48 0.18 138)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p style={{ fontSize: 18, lineHeight: 1.34, color: INK_MUTED }}>{delivery}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function MP13({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Entrega integrada">
      <RevealHeader revealStep={revealStep}>
        <Kicker tone="light">Pacotes integrados</Kicker>
        <BigTitle tone="light" expanded={revealStep === 0}>
          Quatro entregas, um comando estratégico.
        </BigTitle>
      </RevealHeader>
      <IntegratedPackageCards revealStep={revealStep} />
    </SlideLayout>
  );
}

export function MP14({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="→">
      <RevealHeader revealStep={revealStep} compactTop={160} expandedTop={310}>
        <Kicker>Próximo passo</Kicker>
        <BigTitle maxWidth={1500} expanded={revealStep === 0}>
          Vamos transformar a campanha em operação.
        </BigTitle>
        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 58,
            fontSize: 28,
            lineHeight: 1.35,
            color: MUTED,
            maxWidth: 1180,
            animationDelay: "0.32s",
          }}
        >
          A Onmid assume a inteligência estratégica, a força criativa e a capacidade de produção
          para perseguir a meta de 100 mil votos com método.
        </p>
      </RevealHeader>
      <CardGrid
        bottom={88}
        columns={4}
        cards={[
          {
            title: "Diagnóstico inicial",
            text: "Leitura da campanha, ativos, riscos e prioridades.",
          },
          { title: "Plano de 90 dias", text: "Fases, narrativas, entregas e ritmo de publicação." },
          { title: "War Room", text: "Instalação do método semanal de gestão." },
          { title: "Produção", text: "Calendário, captação, criação e distribuição." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}
