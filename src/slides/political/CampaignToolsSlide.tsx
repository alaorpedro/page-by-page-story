import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Check,
  ClipboardList,
  Mail,
  MessageCircle,
  Monitor,
  Smartphone,
  X,
} from "lucide-react";
import { SlideLayout } from "@/components/SlideLayout";

type CampaignTool = {
  title: string;
  short: string;
  role: string;
  result: string;
  icon: LucideIcon;
  applications: string[];
};

type CampaignToolsSlideProps = {
  revealStep: number;
};

const GREEN = "var(--onmid-lime)";
const WHITE = "oklch(0.98 0 0)";
const MUTED = "oklch(1 0 0 / 0.66)";
const INK = "oklch(0.16 0.01 240)";
const INK_MUTED = "oklch(0.2 0.01 240 / 0.68)";

const CAMPAIGN_TOOLS: CampaignTool[] = [
  {
    title: "API WhatsApp",
    short: "Atendimento e mobilização em escala.",
    role: "Transforma o WhatsApp em um canal organizado para receber demandas, ativar apoiadores e acompanhar cada contato.",
    result:
      "Mais velocidade de resposta e uma base de relacionamento que não se perde em conversas soltas.",
    icon: MessageCircle,
    applications: [
      "Fluxos automáticos para cadastro, agenda, eventos e materiais.",
      "Distribuição segmentada por cidade, liderança, pauta ou perfil.",
      "Histórico de atendimento e encaminhamento para a equipe responsável.",
    ],
  },
  {
    title: "Landing Page",
    short: "Campanhas focadas em conversão.",
    role: "Cria páginas rápidas para transformar interesse em cadastro, participação, pedido de material ou entrada no WhatsApp.",
    result:
      "Cada ação passa a ter uma porta de entrada mensurável, com origem e resultado identificados.",
    icon: Monitor,
    applications: [
      "Páginas específicas para agendas, propostas, cidades e mobilizações.",
      "Captação de apoiadores com integração ao WhatsApp e formulários.",
      "Medição de acessos, conversões e campanhas que geram mais resposta.",
    ],
  },
  {
    title: "Aplicativo de Campanha",
    short: "A operação no bolso da equipe.",
    role: "Centraliza agenda, missões, materiais e comunicação para coordenadores, lideranças, voluntários e equipes de rua.",
    result:
      "Uma campanha mais alinhada, com menos ruído operacional e maior capacidade de mobilização.",
    icon: Smartphone,
    applications: [
      "Agenda oficial, avisos e notificações para grupos da campanha.",
      "Biblioteca de peças, propostas, orientações e materiais de apoio.",
      "Missões de mobilização com registro de participação e território.",
    ],
  },
  {
    title: "Formulários Inteligentes",
    short: "Dados úteis desde o primeiro contato.",
    role: "Coleta informações com perguntas condicionais e organiza automaticamente cada pessoa conforme interesse, região e potencial de mobilização.",
    result:
      "Cadastros mais completos e prontos para orientar relacionamento, território e próximas ações.",
    icon: ClipboardList,
    applications: [
      "Inscrição de voluntários, lideranças, eventos e demandas locais.",
      "Perguntas que se adaptam às respostas e reduzem formulários longos.",
      "Classificação automática por cidade, pauta, perfil e prioridade.",
    ],
  },
  {
    title: "Mala Direta",
    short: "Relacionamento segmentado e recorrente.",
    role: "Mantém apoiadores, lideranças e públicos informados com mensagens personalizadas para cada região, tema ou momento da campanha.",
    result: "Mais frequência de contato sem depender exclusivamente do alcance das redes sociais.",
    icon: Mail,
    applications: [
      "Boletins de prestação de contas, agenda e propostas da campanha.",
      "Comunicações personalizadas por cidade, grupo e tema de interesse.",
      "Acompanhamento de abertura, cliques e assuntos com maior resposta.",
    ],
  },
  {
    title: "IA Aplicada",
    short: "Inteligência para ganhar escala e clareza.",
    role: "Apoia a equipe na leitura de dados, organização de demandas e produção assistida, sempre com revisão e decisão humana.",
    result:
      "Menos tempo em tarefas repetitivas e mais capacidade para perceber padrões e agir rápido.",
    icon: BrainCircuit,
    applications: [
      "Classificação de mensagens, demandas, comentários e temas recorrentes.",
      "Resumos de reuniões, relatórios e sinais vindos dos territórios.",
      "Apoio a roteiros, respostas e variações de conteúdo para revisão.",
    ],
  },
];

export function CampaignToolsSlide({ revealStep }: CampaignToolsSlideProps) {
  const [selectedTool, setSelectedTool] = useState<CampaignTool | null>(null);

  useEffect(() => {
    if (!selectedTool) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        setSelectedTool(null);
      }
    };

    window.addEventListener("keydown", closeOnEscape, true);
    return () => window.removeEventListener("keydown", closeOnEscape, true);
  }, [selectedTool]);

  return (
    <SlideLayout variant="content" tone="dark" kicker="Tecnologia">
      <div className="absolute left-24 right-24" style={{ top: 122 }}>
        <div className="flex items-baseline justify-between">
          <div
            className="uppercase font-bold animate-fade-in-up"
            style={{ fontSize: 18, letterSpacing: "0.45em", color: GREEN }}
          >
            Painel de ferramentas
          </div>
          <span
            className="uppercase font-bold animate-fade-in-up"
            style={{
              fontSize: 16,
              letterSpacing: "0.28em",
              color: "oklch(1 0 0 / 0.3)",
              animationDelay: "0.1s",
            }}
          >
            Clique para explorar
          </span>
        </div>
        <h2
          className="animate-fade-in-up"
          style={{
            marginTop: 28,
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 72,
            lineHeight: 0.98,
            letterSpacing: "-0.045em",
            color: WHITE,
            maxWidth: 1420,
            animationDelay: "0.12s",
          }}
        >
          Tecnologia para transformar mobilização em operação.
        </h2>
      </div>

      <div
        data-slide-chrome
        className="absolute grid"
        style={{
          left: 110,
          right: 110,
          bottom: 104,
          gap: 16,
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        }}
      >
        {CAMPAIGN_TOOLS.map((tool, index) => {
          const Icon = tool.icon;
          const isVisible = revealStep > index;

          return (
            <button
              key={tool.title}
              type="button"
              onClick={() => setSelectedTool(tool)}
              className="group text-left"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 420ms ease, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), background-color 180ms ease, border-color 180ms ease",
                transitionDelay: `${index * 45}ms`,
                pointerEvents: isVisible ? "auto" : "none",
                minHeight: 236,
                padding: "28px 30px 26px",
                background: "oklch(1 0 0 / 0.045)",
                border: "1px solid oklch(1 0 0 / 0.08)",
                borderTop: `2px solid ${GREEN}`,
                color: WHITE,
              }}
            >
              <div className="flex items-start justify-between">
                <span
                  className="flex items-center justify-center"
                  style={{
                    width: 48,
                    height: 48,
                    color: GREEN,
                    background: "oklch(0.88 0.24 138 / 0.1)",
                  }}
                >
                  <Icon size={25} strokeWidth={1.8} aria-hidden />
                </span>
                <span
                  className="font-mono"
                  style={{ fontSize: 13, letterSpacing: "0.18em", color: "oklch(1 0 0 / 0.28)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                style={{
                  marginTop: 24,
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 35,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                }}
              >
                {tool.title}
              </h3>
              <div className="mt-4 flex items-end justify-between gap-6">
                <p style={{ fontSize: 19, lineHeight: 1.35, color: MUTED }}>{tool.short}</p>
                <span
                  aria-hidden
                  className="shrink-0 transition-transform group-hover:translate-x-1"
                  style={{ fontSize: 26, color: GREEN }}
                >
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {selectedTool && (
        <div
          data-slide-chrome
          className="absolute inset-0 z-50 flex items-center justify-center"
          style={{ background: "oklch(0.07 0.004 240 / 0.82)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="campaign-tool-title"
          onClick={() => setSelectedTool(null)}
        >
          <div
            className="relative grid overflow-hidden"
            style={{
              width: 1340,
              minHeight: 700,
              gridTemplateColumns: "0.78fr 1.22fr",
              background: "oklch(0.98 0.004 90)",
              color: INK,
              boxShadow: "0 44px 120px oklch(0 0 0 / 0.45)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="flex flex-col justify-between"
              style={{
                padding: "54px 50px 48px",
                background: "oklch(0.15 0.006 240)",
                color: WHITE,
              }}
            >
              <div>
                <span
                  className="flex items-center justify-center"
                  style={{ width: 62, height: 62, color: INK, background: GREEN }}
                >
                  <selectedTool.icon size={31} strokeWidth={1.8} aria-hidden />
                </span>
                <div
                  className="uppercase font-bold"
                  style={{ marginTop: 38, fontSize: 14, letterSpacing: "0.3em", color: GREEN }}
                >
                  Ferramenta de campanha
                </div>
                <h3
                  id="campaign-tool-title"
                  style={{
                    marginTop: 24,
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: 58,
                    lineHeight: 0.96,
                    letterSpacing: "-0.04em",
                  }}
                >
                  {selectedTool.title}
                </h3>
                <p style={{ marginTop: 28, fontSize: 21, lineHeight: 1.45, color: MUTED }}>
                  {selectedTool.role}
                </p>
              </div>
              <div style={{ paddingTop: 28, borderTop: "1px solid oklch(1 0 0 / 0.12)" }}>
                <span
                  className="uppercase font-bold"
                  style={{ fontSize: 12, letterSpacing: "0.24em", color: GREEN }}
                >
                  Resultado esperado
                </span>
                <p style={{ marginTop: 14, fontSize: 19, lineHeight: 1.42, color: WHITE }}>
                  {selectedTool.result}
                </p>
              </div>
            </div>

            <div style={{ padding: "58px 62px 52px" }}>
              <button
                type="button"
                onClick={() => setSelectedTool(null)}
                className="absolute flex items-center justify-center transition-colors hover:bg-black/5"
                style={{ right: 26, top: 24, width: 46, height: 46, color: INK }}
                aria-label="Fechar detalhes da ferramenta"
              >
                <X size={25} aria-hidden />
              </button>

              <div
                className="uppercase font-bold"
                style={{ fontSize: 14, letterSpacing: "0.28em", color: "oklch(0.48 0.18 138)" }}
              >
                Como ajuda a campanha
              </div>
              <div className="grid" style={{ marginTop: 34, gap: 18 }}>
                {selectedTool.applications.map((application, index) => (
                  <div
                    key={application}
                    className="flex items-start gap-5"
                    style={{
                      minHeight: 120,
                      padding: "25px 26px",
                      background: "white",
                      border: "1px solid oklch(0.16 0.01 240 / 0.09)",
                    }}
                  >
                    <span
                      className="flex shrink-0 items-center justify-center rounded-full"
                      style={{ width: 34, height: 34, background: GREEN, color: INK }}
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
                      <p style={{ fontSize: 20, lineHeight: 1.38, color: INK_MUTED }}>
                        {application}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </SlideLayout>
  );
}
