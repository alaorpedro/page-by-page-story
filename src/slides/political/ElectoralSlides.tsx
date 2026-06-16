import { LiveInfoBar } from "@/components/LiveInfoBar";
import { SlideLayout } from "@/components/SlideLayout";
import cobraReporterWatermark from "@/assets/cobra-reporter-watermark.jpg";

type ElectoralSlideProps = {
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
}: {
  children: React.ReactNode;
  tone?: "dark" | "light";
  size?: number;
  maxWidth?: number;
}) {
  return (
    <h2
      className="animate-fade-in-up"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 900,
        fontSize: Math.min(size, 88),
        lineHeight: 0.98,
        letterSpacing: "-0.045em",
        color: tone === "dark" ? WHITE : INK,
        maxWidth,
        animationDelay: "0.12s",
      }}
    >
      {children}
    </h2>
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
          className="animate-fade-in-up"
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
          className="animate-fade-in-up"
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
      <LiveInfoBar />

      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <Kicker>Proposta estratégica · Campanha eleitoral</Kicker>
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
      </div>
    </SlideLayout>
  );
}

export function MP02({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Desafio">
      <div className="absolute left-24 top-40 right-24">
        <Kicker>O desafio</Kicker>
        <BigTitle>Campanha não se vence no improviso.</BigTitle>
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
          Voto é consequência de repetição, confiança e presença organizada.
        </p>
      </div>
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
      <div className="absolute left-24 top-40 right-24">
        <Kicker>Tese central da Onmid</Kicker>
        <BigTitle maxWidth={1500}>
          Campanha eleitoral precisa operar como uma máquina editorial com inteligência de dados.
        </BigTitle>
      </div>
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
      <div className="absolute left-24 top-36 right-24">
        <Kicker tone="light">Capital político que precisa virar comunicação</Kicker>
        <BigTitle tone="light" maxWidth={1420}>
          A campanha deve organizar os ativos já existentes em narrativas de alto valor.
        </BigTitle>
      </div>
      <MetricStrip
        tone="light"
        metrics={[
          { value: "150+", label: "projetos apresentados" },
          { value: "50+", label: "leis sancionadas" },
          { value: "Norte", label: "liderança regional" },
          { value: "Dia a dia", label: "presença pública" },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP05({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="dark" kicker="Arquitetura">
      <div className="absolute left-24 top-40 right-24">
        <Kicker>Arquitetura da campanha</Kicker>
        <BigTitle>Quatro frentes trabalhando como um único sistema.</BigTitle>
      </div>
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
      <div className="absolute left-24 top-36 right-24">
        <Kicker tone="light">Pacote 1 · Studio de Criação</Kicker>
        <BigTitle tone="light">
          O sistema visual que dá consistência, reconhecimento e velocidade.
        </BigTitle>
      </div>
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
      <div className="absolute left-24 top-40 right-24">
        <Kicker>Pacote 2 · Tráfego Pago</Kicker>
        <BigTitle>
          Distribuição estratégica para transformar conteúdo em alcance qualificado.
        </BigTitle>
      </div>
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
      <div className="absolute left-24 top-36 right-24">
        <Kicker tone="light">Pacote 3 · Consultoria de Marketing</Kicker>
        <BigTitle tone="light">
          Método de mensuração e acompanhamento da meta de 100 mil votos.
        </BigTitle>
      </div>
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
      <div className="absolute left-24 top-40 right-24">
        <Kicker>Pacote 4 · Produção de Conteúdo</Kicker>
        <BigTitle>A câmera acompanha para transformar presença em percepção pública.</BigTitle>
      </div>
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
      <div className="absolute left-24 top-40 right-24">
        <Kicker>Método Onmid</Kicker>
        <BigTitle>War Room eleitoral para publicar, impulsionar e corrigir.</BigTitle>
      </div>
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
      <div className="absolute left-24 top-36 right-24">
        <Kicker tone="light">Painel de indicadores</Kicker>
        <BigTitle tone="light">
          Decisão de campanha sem confundir vaidade com avanço eleitoral.
        </BigTitle>
      </div>
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
  return (
    <SlideLayout variant="content" tone="dark" kicker="Conteúdo">
      <div className="absolute left-24 top-40 right-24">
        <Kicker>Mapa de conteúdo</Kicker>
        <BigTitle>Para cada publicação, uma função dentro da campanha.</BigTitle>
      </div>
      <CardGrid
        bottom={105}
        columns={3}
        cards={[
          { title: "Prova de entrega", text: "Obras, leis, recursos e solução concreta." },
          { title: "Território", text: "Cidades, lideranças, demandas e presença local." },
          { title: "Humanização", text: "Família, bastidores, rotina, valores e proximidade." },
          { title: "Autoridade", text: "Comissões, projetos, pautas e experiência." },
          { title: "Mobilização", text: "Convites, eventos, voluntários e participação." },
          { title: "Contraste positivo", text: "Por que seguir junto, sem ataque vazio." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP13({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="content" tone="light" kicker="Entrega integrada">
      <div className="absolute left-24 top-36 right-24">
        <Kicker tone="light">Pacotes integrados</Kicker>
        <BigTitle tone="light">Quatro entregas, um comando estratégico.</BigTitle>
      </div>
      <CardGrid
        tone="light"
        columns={4}
        cards={[
          { title: "Studio", text: "Visual e peças." },
          { title: "Tráfego", text: "Distribuição." },
          { title: "Consultoria", text: "Gestão de meta." },
          { title: "Produção", text: "Foto e vídeo." },
        ]}
        revealStep={revealStep}
      />
    </SlideLayout>
  );
}

export function MP14({ revealStep }: ElectoralSlideProps) {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="→">
      <div className="absolute inset-0 flex flex-col justify-center px-32">
        <Kicker>Próximo passo</Kicker>
        <BigTitle maxWidth={1500}>Vamos transformar a campanha em operação.</BigTitle>
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
      </div>
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
