import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  ExternalLink,
  Gauge,
  Globe2,
  Map,
  Newspaper,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";

const GREEN = "var(--onmid-lime)";
const WHITE = "oklch(0.98 0 0)";
const MUTED = "oklch(1 0 0 / 0.64)";
const INK = "oklch(0.16 0.01 240)";
const INK_MUTED = "oklch(0.2 0.01 240 / 0.68)";

const ELECTION_HISTORY = [
  { year: "2014", votes: 29000, label: "1º mandato" },
  { year: "2018", votes: 47000, label: "+62%" },
  { year: "2022", votes: 60730, label: "+29%" },
  { year: "2026", votes: 80000, label: "cenário orgânico", projected: true },
  { year: "Meta", votes: 100000, label: "expansão", projected: true },
];

const TOP_CITIES = [
  { name: "Rolândia", votes: 15229 },
  { name: "Londrina", votes: 3513 },
  { name: "Cambé", votes: 2544 },
  { name: "Arapongas", votes: 1833 },
  { name: "Rancho Alegre", votes: 1240 },
  { name: "Jandaia do Sul", votes: 1054 },
  { name: "Ibiporã", votes: 987 },
  { name: "Apucarana", votes: 890 },
  { name: "Cornélio Procópio", votes: 812 },
  { name: "Florestópolis", votes: 785 },
];

const SCENARIOS = [
  {
    name: "Conservador",
    range: "58–66 mil",
    value: 62000,
    color: "oklch(0.66 0.04 240)",
    description: "Base atual sob pressão, sem expansão territorial consistente.",
  },
  {
    name: "Orgânico",
    range: "72–82 mil",
    value: 78000,
    color: "oklch(0.76 0.16 138)",
    description: "Continuidade da trajetória com comunicação e agenda mais organizadas.",
  },
  {
    name: "Expansão",
    range: "88–100 mil",
    value: 94000,
    color: GREEN,
    description: "Operação territorial, mídia e conversão digital trabalhando juntas.",
  },
  {
    name: "Excepcional",
    range: "100–110 mil",
    value: 105000,
    color: "oklch(0.93 0.21 105)",
    description: "Alta eficiência, conjuntura favorável e execução disciplinada.",
  },
];

const PRIORITIES = [
  {
    number: "01",
    title: "Dominar a busca pelo nome",
    text: "Portal oficial indexável, páginas por município e canais oficiais ocupando os primeiros resultados.",
    impact: "Autoridade",
  },
  {
    number: "02",
    title: "Converter entrega em prova",
    text: "Série contínua “O que Cobra entregou para sua cidade”, com valor, obra, prazo e beneficiários.",
    impact: "Confiança",
  },
  {
    number: "03",
    title: "Expandir fora do núcleo",
    text: "Planos municipais para cidades com potencial, combinando lideranças, conteúdo local e distribuição paga.",
    impact: "Território",
  },
  {
    number: "04",
    title: "Transformar audiência em base",
    text: "Landing pages, WhatsApp e formulários para identificar apoiadores, demandas e lideranças.",
    impact: "Mobilização",
  },
  {
    number: "05",
    title: "Operar uma rede de imprensa",
    text: "Releases adaptados por cidade, fotos prontas, dados locais e relacionamento recorrente com portais.",
    impact: "Repercussão",
  },
  {
    number: "06",
    title: "Medir avanço eleitoral",
    text: "Painel semanal de alcance territorial, cadastros, lideranças, presença e intenção declarada de apoio.",
    impact: "Decisão",
  },
];

const NAV_ITEMS = [
  { id: "overview", label: "Visão geral", icon: Gauge },
  { id: "trajectory", label: "Trajetória", icon: TrendingUp },
  { id: "territory", label: "Território", icon: Map },
  { id: "scenarios", label: "Cenários", icon: BarChart3 },
  { id: "diagnosis", label: "Presença digital", icon: Search },
  { id: "priorities", label: "Plano de ação", icon: Target },
  { id: "method", label: "Metodologia", icon: ShieldCheck },
];

function formatVotes(value: number) {
  return new Intl.NumberFormat("pt-BR").format(value);
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div style={{ marginBottom: 38 }}>
      <div
        className="uppercase font-bold"
        style={{ fontSize: 13, letterSpacing: "0.3em", color: "oklch(0.48 0.18 138)" }}
      >
        {eyebrow}
      </div>
      <h3
        style={{
          marginTop: 14,
          fontFamily: "var(--font-display)",
          fontSize: 46,
          lineHeight: 1,
          letterSpacing: "-0.04em",
          fontWeight: 900,
          color: INK,
        }}
      >
        {title}
      </h3>
      {description && (
        <p
          style={{
            marginTop: 18,
            maxWidth: 1000,
            fontSize: 19,
            lineHeight: 1.55,
            color: INK_MUTED,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

function scrollToSection(id: string) {
  document.getElementById(`analysis-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function DigitalPresenceAnalysis() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    if (!isOpen) return;

    const interceptKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopImmediatePropagation();
        setIsOpen(false);
        return;
      }

      if (
        ["ArrowLeft", "ArrowRight", "PageUp", "PageDown", " ", "Home", "End"].includes(event.key)
      ) {
        event.stopImmediatePropagation();
      }
    };

    window.addEventListener("keydown", interceptKeys, true);
    return () => window.removeEventListener("keydown", interceptKeys, true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const root = document.getElementById("digital-analysis-scroll");
    if (!root) return;

    const sectionIds = NAV_ITEMS.map((item) => `analysis-${item.id}`);
    const onScroll = () => {
      const rootTop = root.getBoundingClientRect().top;
      let closest = sectionIds[0];
      let closestDistance = Number.POSITIVE_INFINITY;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;
        const distance = Math.abs(element.getBoundingClientRect().top - rootTop - 80);
        if (distance < closestDistance) {
          closest = id;
          closestDistance = distance;
        }
      }

      setActiveSection(closest.replace("analysis-", ""));
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => root.removeEventListener("scroll", onScroll);
  }, [isOpen]);

  return (
    <>
      <button
        data-slide-chrome
        type="button"
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-4 transition-all"
        style={{
          marginTop: 36,
          width: "fit-content",
          padding: "17px 22px 17px 24px",
          background: GREEN,
          color: INK,
          fontSize: 15,
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          boxShadow: "0 18px 48px oklch(0 0 0 / 0.24)",
        }}
      >
        <BarChart3 size={21} strokeWidth={2.4} aria-hidden />
        Análise de presença digital
        <ArrowUpRight
          size={20}
          strokeWidth={2.4}
          aria-hidden
          className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            data-slide-chrome
            className="fixed inset-0 z-[999] flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="digital-analysis-title"
            style={{
              padding: 24,
              background: "oklch(0.05 0.004 240 / 0.92)",
              backdropFilter: "blur(14px)",
            }}
            onClick={() => setIsOpen(false)}
          >
            <div
              className="relative grid overflow-hidden"
              style={{
                width: "min(1680px, calc(100vw - 48px))",
                height: "min(920px, calc(100vh - 48px))",
                gridTemplateColumns: "minmax(250px, 300px) minmax(0, 1fr)",
                background: "oklch(0.965 0.005 90)",
                color: INK,
                boxShadow: "0 48px 140px oklch(0 0 0 / 0.55)",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <aside
                className="relative flex min-h-0 flex-col overflow-y-auto"
                style={{
                  padding: "28px 24px 22px",
                  background: "oklch(0.135 0.006 240)",
                  color: WHITE,
                }}
              >
                <div>
                  <div
                    className="uppercase font-bold"
                    style={{ fontSize: 11, letterSpacing: "0.3em", color: GREEN }}
                  >
                    Onmid Intelligence
                  </div>
                  <h2
                    id="digital-analysis-title"
                    style={{
                      marginTop: 14,
                      fontFamily: "var(--font-display)",
                      fontSize: 27,
                      lineHeight: 1.02,
                      letterSpacing: "-0.035em",
                      fontWeight: 900,
                    }}
                  >
                    Presença digital
                    <br />
                    Cobra Repórter
                  </h2>
                  <div
                    className="font-mono"
                    style={{ marginTop: 10, fontSize: 10, color: "oklch(1 0 0 / 0.4)" }}
                  >
                    LEITURA · 18 JUN 2026
                  </div>
                </div>

                <nav className="flex flex-col" style={{ marginTop: 24, gap: 3 }}>
                  {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const active = activeSection === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center gap-3 text-left transition-colors"
                        style={{
                          padding: "9px 12px",
                          background: active ? "oklch(0.88 0.24 138 / 0.12)" : "transparent",
                          borderLeft: active ? `2px solid ${GREEN}` : "2px solid transparent",
                          color: active ? WHITE : "oklch(1 0 0 / 0.54)",
                          fontSize: 13,
                          fontWeight: active ? 800 : 600,
                        }}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.9}
                          style={{ color: active ? GREEN : undefined }}
                        />
                        {item.label}
                      </button>
                    );
                  })}
                </nav>

                <div
                  style={{
                    marginTop: 18,
                    padding: "13px 14px",
                    border: "1px solid oklch(1 0 0 / 0.1)",
                    background: "oklch(1 0 0 / 0.035)",
                  }}
                >
                  <div className="flex items-center gap-2" style={{ color: GREEN }}>
                    <CircleDot size={15} aria-hidden />
                    <span
                      className="uppercase font-bold"
                      style={{ fontSize: 10, letterSpacing: "0.22em" }}
                    >
                      Leitura estratégica
                    </span>
                  </div>
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 10,
                      lineHeight: 1.4,
                      color: "oklch(1 0 0 / 0.5)",
                    }}
                  >
                    Projeções são cenários, não pesquisa eleitoral nem garantia de resultado.
                  </p>
                </div>
              </aside>

              <main
                id="digital-analysis-scroll"
                className="overflow-y-auto overscroll-contain"
                style={{ scrollBehavior: "smooth" }}
                onWheel={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="absolute z-20 flex items-center justify-center transition-colors hover:bg-black/5"
                  style={{
                    right: 22,
                    top: 20,
                    width: 46,
                    height: 46,
                    color: INK,
                    background: "oklch(1 0 0 / 0.72)",
                    border: "1px solid oklch(0.16 0.01 240 / 0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  aria-label="Fechar análise"
                >
                  <X size={24} aria-hidden />
                </button>

                <section
                  id="analysis-overview"
                  style={{ padding: "62px 68px 70px", scrollMarginTop: 30 }}
                >
                  <SectionTitle
                    eyebrow="Resumo executivo"
                    title="Há trajetória de crescimento. O desafio é transformar alcance em território."
                    description="A base eleitoral mostra força real no Norte do Paraná e evolução contínua desde 2014. O salto para 100 mil votos exige reduzir a dependência do núcleo atual, ampliar descoberta digital e converter audiência em base identificada."
                  />

                  <div className="grid grid-cols-4" style={{ gap: 14 }}>
                    {[
                      { value: "60.730", label: "votos em 2022", icon: Users },
                      { value: "+29%", label: "crescimento 2018–22", icon: TrendingUp },
                      { value: "41%", label: "nos 5 maiores municípios", icon: Map },
                      { value: "+39.270", label: "votos para a meta", icon: Target },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          style={{
                            minHeight: 164,
                            padding: "25px 24px",
                            background: "white",
                            borderTop: "2px solid oklch(0.48 0.18 138)",
                            boxShadow: "0 12px 32px oklch(0.16 0.01 240 / 0.06)",
                          }}
                        >
                          <Icon
                            size={21}
                            strokeWidth={1.9}
                            style={{ color: "oklch(0.48 0.18 138)" }}
                          />
                          <strong
                            style={{
                              display: "block",
                              marginTop: 20,
                              fontFamily: "var(--font-display)",
                              fontSize: 38,
                              lineHeight: 1,
                              color: INK,
                            }}
                          >
                            {item.value}
                          </strong>
                          <span
                            style={{
                              display: "block",
                              marginTop: 10,
                              fontSize: 13,
                              color: INK_MUTED,
                            }}
                          >
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className="grid"
                    style={{
                      marginTop: 18,
                      gridTemplateColumns: "1.2fr 0.8fr",
                      gap: 18,
                    }}
                  >
                    <div
                      style={{
                        padding: "32px 34px",
                        background: "oklch(0.16 0.006 240)",
                        color: WHITE,
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Sparkles size={21} style={{ color: GREEN }} />
                        <span
                          className="uppercase font-bold"
                          style={{ fontSize: 12, letterSpacing: "0.24em", color: GREEN }}
                        >
                          Leitura Onmid
                        </span>
                      </div>
                      <p style={{ marginTop: 22, fontSize: 24, lineHeight: 1.4, fontWeight: 700 }}>
                        80 mil votos é uma meta plausível com continuidade. Entre 90 e 100 mil
                        depende de expansão territorial mensurável.
                      </p>
                    </div>
                    <div
                      style={{
                        padding: "32px 34px",
                        background: "oklch(0.9 0.13 138)",
                        color: INK,
                      }}
                    >
                      <span
                        className="uppercase font-bold"
                        style={{ fontSize: 12, letterSpacing: "0.24em" }}
                      >
                        Índice de oportunidade
                      </span>
                      <div className="flex items-end gap-3" style={{ marginTop: 20 }}>
                        <strong
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 58,
                            lineHeight: 0.9,
                          }}
                        >
                          78
                        </strong>
                        <span style={{ paddingBottom: 5, fontSize: 16, color: INK_MUTED }}>
                          / 100
                        </span>
                      </div>
                      <p
                        style={{ marginTop: 16, fontSize: 14, lineHeight: 1.45, color: INK_MUTED }}
                      >
                        Ativo de reconhecimento forte; infraestrutura digital e conversão ainda
                        abaixo do potencial.
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  id="analysis-trajectory"
                  style={{
                    padding: "66px 68px 74px",
                    background: "white",
                    scrollMarginTop: 30,
                  }}
                >
                  <SectionTitle
                    eyebrow="Trajetória eleitoral"
                    title="Três eleições, uma curva consistente."
                    description="O crescimento desacelerou entre 2018 e 2022. Para retomar uma curva mais agressiva, a campanha precisa adicionar novos territórios sem perder densidade na base."
                  />

                  <div
                    className="relative"
                    style={{
                      height: 360,
                      padding: "38px 32px 28px",
                      background: "oklch(0.97 0.004 90)",
                      border: "1px solid oklch(0.16 0.01 240 / 0.08)",
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        left: 70,
                        right: 70,
                        bottom: 74,
                        height: 1,
                        background: "oklch(0.16 0.01 240 / 0.12)",
                      }}
                    />
                    <div className="flex h-full items-end justify-between" style={{ gap: 26 }}>
                      {ELECTION_HISTORY.map((item) => {
                        const height = (item.votes / 110000) * 240;
                        return (
                          <div
                            key={item.year}
                            className="flex flex-1 flex-col items-center justify-end"
                          >
                            <div style={{ marginBottom: 10, textAlign: "center" }}>
                              <strong
                                style={{
                                  display: "block",
                                  fontFamily: "var(--font-display)",
                                  fontSize: 23,
                                  color: INK,
                                }}
                              >
                                {formatVotes(item.votes)}
                              </strong>
                              <span style={{ fontSize: 11, color: INK_MUTED }}>{item.label}</span>
                            </div>
                            <div
                              style={{
                                width: "68%",
                                height,
                                minHeight: 44,
                                background: item.projected
                                  ? "repeating-linear-gradient(135deg, oklch(0.82 0.16 138), oklch(0.82 0.16 138) 10px, oklch(0.9 0.13 138) 10px, oklch(0.9 0.13 138) 20px)"
                                  : "oklch(0.48 0.18 138)",
                                borderTop: item.projected ? `3px solid ${GREEN}` : "none",
                              }}
                            />
                            <span
                              className="font-mono"
                              style={{ marginTop: 13, fontSize: 12, color: INK_MUTED }}
                            >
                              {item.year}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-3" style={{ marginTop: 18, gap: 14 }}>
                    {[
                      ["2014 → 2018", "+18 mil votos", "Crescimento aproximado de 62%."],
                      ["2018 → 2022", "+13,7 mil votos", "Crescimento aproximado de 29%."],
                      ["2022 → 100 mil", "+39,3 mil votos", "Salto necessário de 64,7%."],
                    ].map(([period, value, text]) => (
                      <div
                        key={period}
                        style={{
                          padding: "24px 26px",
                          border: "1px solid oklch(0.16 0.01 240 / 0.08)",
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{ fontSize: 11, color: "oklch(0.48 0.18 138)" }}
                        >
                          {period}
                        </span>
                        <strong
                          style={{
                            display: "block",
                            marginTop: 12,
                            fontFamily: "var(--font-display)",
                            fontSize: 25,
                          }}
                        >
                          {value}
                        </strong>
                        <p
                          style={{ marginTop: 9, fontSize: 13, lineHeight: 1.45, color: INK_MUTED }}
                        >
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section
                  id="analysis-territory"
                  style={{ padding: "66px 68px 74px", scrollMarginTop: 30 }}
                >
                  <SectionTitle
                    eyebrow="Geografia eleitoral"
                    title="Força concentrada. Expansão ainda aberta."
                    description="A leitura municipal usa 59.464 votos identificados na base geográfica do projeto. Há concentração relevante no eixo Rolândia–Londrina–Cambé e uma cauda longa de municípios com baixa densidade."
                  />

                  <div className="grid" style={{ gridTemplateColumns: "1.1fr 0.9fr", gap: 24 }}>
                    <div
                      style={{
                        padding: "30px 30px 26px",
                        background: "white",
                        border: "1px solid oklch(0.16 0.01 240 / 0.08)",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <strong style={{ fontFamily: "var(--font-display)", fontSize: 23 }}>
                          Dez maiores municípios
                        </strong>
                        <span className="font-mono" style={{ fontSize: 11, color: INK_MUTED }}>
                          VOTOS · 2022
                        </span>
                      </div>
                      <div style={{ marginTop: 27 }}>
                        {TOP_CITIES.map((city, index) => (
                          <div
                            key={city.name}
                            className="grid items-center"
                            style={{
                              gridTemplateColumns: "28px 140px minmax(0, 1fr) 74px",
                              gap: 12,
                              padding: "9px 0",
                            }}
                          >
                            <span className="font-mono" style={{ fontSize: 10, color: INK_MUTED }}>
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <span style={{ fontSize: 13, fontWeight: 700 }}>{city.name}</span>
                            <div style={{ height: 8, background: "oklch(0.16 0.01 240 / 0.06)" }}>
                              <div
                                style={{
                                  width: `${Math.max(5, (city.votes / TOP_CITIES[0].votes) * 100)}%`,
                                  height: "100%",
                                  background: index === 0 ? GREEN : "oklch(0.48 0.18 138)",
                                }}
                              />
                            </div>
                            <strong
                              className="font-mono"
                              style={{ fontSize: 11, textAlign: "right" }}
                            >
                              {formatVotes(city.votes)}
                            </strong>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col" style={{ gap: 16 }}>
                      {[
                        {
                          value: "41%",
                          title: "nos 5 maiores",
                          text: "Alta dependência dos municípios mais fortes.",
                        },
                        {
                          value: "48,6%",
                          title: "nos 10 maiores",
                          text: "Metade do resultado vem de poucos territórios.",
                        },
                        {
                          value: "47,7%",
                          title: "na região de Londrina",
                          text: "O Norte é a base; o restante do estado é a avenida de crescimento.",
                        },
                      ].map((item, index) => (
                        <div
                          key={item.title}
                          className="grid items-center"
                          style={{
                            flex: 1,
                            gridTemplateColumns: "130px 1fr",
                            gap: 22,
                            padding: "25px 28px",
                            background: index === 2 ? "oklch(0.16 0.006 240)" : "white",
                            color: index === 2 ? WHITE : INK,
                            border: "1px solid oklch(0.16 0.01 240 / 0.08)",
                          }}
                        >
                          <strong
                            style={{
                              fontFamily: "var(--font-display)",
                              fontSize: 48,
                              lineHeight: 1,
                              color: index === 2 ? GREEN : "oklch(0.48 0.18 138)",
                            }}
                          >
                            {item.value}
                          </strong>
                          <div>
                            <div style={{ fontSize: 17, fontWeight: 800 }}>{item.title}</div>
                            <p
                              style={{
                                marginTop: 7,
                                fontSize: 13,
                                lineHeight: 1.45,
                                color: index === 2 ? MUTED : INK_MUTED,
                              }}
                            >
                              {item.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section
                  id="analysis-scenarios"
                  style={{ padding: "66px 68px 74px", background: "white", scrollMarginTop: 30 }}
                >
                  <SectionTitle
                    eyebrow="Projeção por cenários"
                    title="A meta não é uma linha. É uma combinação de execução e contexto."
                    description="As faixas abaixo são inferências estratégicas baseadas na trajetória eleitoral e na concentração territorial. Partido, nominata, concorrência, alianças e comparecimento podem alterar significativamente o resultado."
                  />

                  <div className="grid grid-cols-2" style={{ gap: 16 }}>
                    {SCENARIOS.map((scenario) => (
                      <div
                        key={scenario.name}
                        style={{
                          padding: "28px 30px",
                          border: "1px solid oklch(0.16 0.01 240 / 0.08)",
                          background: "oklch(0.985 0.003 90)",
                        }}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span
                              className="uppercase font-bold"
                              style={{ fontSize: 11, letterSpacing: "0.24em", color: INK_MUTED }}
                            >
                              {scenario.name}
                            </span>
                            <strong
                              style={{
                                display: "block",
                                marginTop: 10,
                                fontFamily: "var(--font-display)",
                                fontSize: 37,
                                lineHeight: 1,
                                color: INK,
                              }}
                            >
                              {scenario.range}
                            </strong>
                          </div>
                          <div
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: 999,
                              background: scenario.color,
                              boxShadow: `0 0 0 7px color-mix(in oklch, ${scenario.color} 16%, transparent)`,
                            }}
                          />
                        </div>
                        <div
                          style={{
                            marginTop: 24,
                            height: 9,
                            background: "oklch(0.16 0.01 240 / 0.07)",
                          }}
                        >
                          <div
                            style={{
                              width: `${(scenario.value / 110000) * 100}%`,
                              height: "100%",
                              background: scenario.color,
                            }}
                          />
                        </div>
                        <p
                          style={{ marginTop: 17, fontSize: 14, lineHeight: 1.5, color: INK_MUTED }}
                        >
                          {scenario.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 18,
                      padding: "28px 32px",
                      background: "oklch(0.9 0.13 138)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Target size={22} />
                      <strong style={{ fontFamily: "var(--font-display)", fontSize: 21 }}>
                        O caminho para 100 mil
                      </strong>
                    </div>
                    <p
                      style={{
                        marginTop: 14,
                        maxWidth: 1080,
                        fontSize: 15,
                        lineHeight: 1.55,
                        color: INK_MUTED,
                      }}
                    >
                      Defender os 60 mil votos, acrescentar aproximadamente 15 mil por continuidade
                      e reputação, e conquistar 25 mil por expansão territorial, mobilização e mídia
                      orientada por dados.
                    </p>
                  </div>
                </section>

                <section
                  id="analysis-diagnosis"
                  style={{ padding: "66px 68px 74px", scrollMarginTop: 30 }}
                >
                  <SectionTitle
                    eyebrow="Diagnóstico de presença"
                    title="Reconhecimento existe. A arquitetura digital ainda não captura todo o valor."
                    description="A leitura de busca pública encontrou conteúdo disperso e dificuldade para localizar uma central oficial forte. O ativo de rádio e televisão é valioso, mas precisa virar formatos digitais recorrentes e indexáveis."
                  />

                  <div className="grid grid-cols-2" style={{ gap: 18 }}>
                    {[
                      {
                        icon: Search,
                        title: "Descoberta orgânica",
                        status: "Fragilidade",
                        color: "oklch(0.68 0.24 27)",
                        text: "Resultados pelo nome priorizam páginas dispersas antes de uma central digital robusta.",
                      },
                      {
                        icon: Globe2,
                        title: "Ecossistema oficial",
                        status: "Oportunidade",
                        color: "oklch(0.93 0.21 105)",
                        text: "Falta reunir mandato, entregas, municípios, imprensa e mobilização em uma jornada única.",
                      },
                      {
                        icon: Newspaper,
                        title: "Repercussão em notícias",
                        status: "Fragmentada",
                        color: "oklch(0.74 0.12 240)",
                        text: "A presença tende a depender de publicações institucionais e portais locais sem continuidade narrativa.",
                      },
                      {
                        icon: Sparkles,
                        title: "Potência de conteúdo",
                        status: "Alta",
                        color: GREEN,
                        text: "Experiência como radialista e apresentador oferece voz, reconhecimento e capacidade de vídeo.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          style={{
                            padding: "30px 30px 28px",
                            background: "white",
                            borderTop: `3px solid ${item.color}`,
                            boxShadow: "0 12px 34px oklch(0.16 0.01 240 / 0.05)",
                          }}
                        >
                          <div className="flex items-start justify-between">
                            <Icon size={25} strokeWidth={1.8} style={{ color: item.color }} />
                            <span
                              className="uppercase font-bold"
                              style={{
                                padding: "7px 9px",
                                fontSize: 9,
                                letterSpacing: "0.18em",
                                color: INK,
                                background: `color-mix(in oklch, ${item.color} 18%, white)`,
                              }}
                            >
                              {item.status}
                            </span>
                          </div>
                          <h4
                            style={{
                              marginTop: 24,
                              fontFamily: "var(--font-display)",
                              fontSize: 26,
                              fontWeight: 900,
                            }}
                          >
                            {item.title}
                          </h4>
                          <p
                            style={{
                              marginTop: 13,
                              fontSize: 14,
                              lineHeight: 1.55,
                              color: INK_MUTED,
                            }}
                          >
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    className="grid"
                    style={{
                      marginTop: 20,
                      gridTemplateColumns: "0.85fr 1.15fr",
                      background: "oklch(0.16 0.006 240)",
                      color: WHITE,
                    }}
                  >
                    <div
                      style={{ padding: "34px 36px", borderRight: "1px solid oklch(1 0 0 / 0.1)" }}
                    >
                      <span
                        className="uppercase font-bold"
                        style={{ fontSize: 11, letterSpacing: "0.25em", color: GREEN }}
                      >
                        Ativo central
                      </span>
                      <strong
                        style={{
                          display: "block",
                          marginTop: 20,
                          fontFamily: "var(--font-display)",
                          fontSize: 36,
                          lineHeight: 1.08,
                        }}
                      >
                        A voz de repórter pode virar linguagem nativa de rede.
                      </strong>
                    </div>
                    <div style={{ padding: "34px 38px" }}>
                      <p style={{ fontSize: 18, lineHeight: 1.55, color: MUTED }}>
                        A vantagem não está em “postar mais”, mas em criar séries reconhecíveis:
                        entregas por cidade, bastidores do mandato, leitura de problemas e prestação
                        de contas em vídeo curto.
                      </p>
                    </div>
                  </div>
                </section>

                <section
                  id="analysis-priorities"
                  style={{ padding: "66px 68px 74px", background: "white", scrollMarginTop: 30 }}
                >
                  <SectionTitle
                    eyebrow="Plano de melhoria"
                    title="Seis movimentos para transformar presença em voto."
                    description="A prioridade é construir um sistema em que conteúdo gera descoberta, descoberta gera relacionamento e relacionamento alimenta território."
                  />

                  <div className="grid grid-cols-2" style={{ gap: 14 }}>
                    {PRIORITIES.map((item) => (
                      <div
                        key={item.number}
                        className="group"
                        style={{
                          padding: "27px 28px",
                          border: "1px solid oklch(0.16 0.01 240 / 0.08)",
                          background: "oklch(0.985 0.003 90)",
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className="font-mono"
                            style={{ fontSize: 12, color: "oklch(0.48 0.18 138)" }}
                          >
                            {item.number}
                          </span>
                          <span
                            className="uppercase font-bold"
                            style={{
                              padding: "6px 9px",
                              fontSize: 9,
                              letterSpacing: "0.18em",
                              color: "oklch(0.42 0.15 138)",
                              background: "oklch(0.9 0.13 138)",
                            }}
                          >
                            {item.impact}
                          </span>
                        </div>
                        <h4
                          style={{
                            marginTop: 20,
                            fontFamily: "var(--font-display)",
                            fontSize: 25,
                            fontWeight: 900,
                          }}
                        >
                          {item.title}
                        </h4>
                        <p
                          style={{
                            marginTop: 12,
                            fontSize: 14,
                            lineHeight: 1.55,
                            color: INK_MUTED,
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="flex items-center justify-between"
                    style={{
                      marginTop: 20,
                      padding: "30px 32px",
                      background: "oklch(0.9 0.13 138)",
                    }}
                  >
                    <div>
                      <span
                        className="uppercase font-bold"
                        style={{ fontSize: 10, letterSpacing: "0.22em" }}
                      >
                        Próxima decisão
                      </span>
                      <strong
                        style={{
                          display: "block",
                          marginTop: 10,
                          fontFamily: "var(--font-display)",
                          fontSize: 27,
                        }}
                      >
                        Definir 20 municípios prioritários e metas mensais de base.
                      </strong>
                    </div>
                    <ChevronRight size={34} strokeWidth={1.7} />
                  </div>
                </section>

                <section
                  id="analysis-method"
                  style={{ padding: "66px 68px 84px", scrollMarginTop: 30 }}
                >
                  <SectionTitle
                    eyebrow="Transparência metodológica"
                    title="O que esta análise permite — e o que ela não promete."
                    description="O objetivo é orientar decisões e hipóteses de campanha, preservando a diferença entre evidência eleitoral, observação pública e projeção."
                  />

                  <div className="grid grid-cols-3" style={{ gap: 15 }}>
                    {[
                      {
                        icon: CheckCircle2,
                        title: "Dados observados",
                        items: [
                          "Resultados eleitorais de 2014, 2018 e 2022.",
                          "Distribuição municipal disponível na base.",
                          "Resultados públicos de busca e imprensa.",
                        ],
                      },
                      {
                        icon: Gauge,
                        title: "Inferências",
                        items: [
                          "Faixas de votação por cenário.",
                          "Índice de oportunidade digital.",
                          "Impacto provável das prioridades.",
                        ],
                      },
                      {
                        icon: ShieldCheck,
                        title: "Limites",
                        items: [
                          "Não substitui pesquisa eleitoral.",
                          "Não prevê conjuntura ou nominata.",
                          "Não garante resultado nas urnas.",
                        ],
                      },
                    ].map((column) => {
                      const Icon = column.icon;
                      return (
                        <div
                          key={column.title}
                          style={{
                            padding: "28px 28px 30px",
                            background: "white",
                            borderTop: "2px solid oklch(0.48 0.18 138)",
                          }}
                        >
                          <Icon size={23} style={{ color: "oklch(0.48 0.18 138)" }} />
                          <h4
                            style={{
                              marginTop: 19,
                              fontFamily: "var(--font-display)",
                              fontSize: 22,
                              fontWeight: 900,
                            }}
                          >
                            {column.title}
                          </h4>
                          <div className="flex flex-col" style={{ marginTop: 18, gap: 12 }}>
                            {column.items.map((item) => (
                              <div key={item} className="flex items-start gap-3">
                                <span
                                  style={{
                                    marginTop: 7,
                                    width: 6,
                                    height: 6,
                                    borderRadius: 999,
                                    background: GREEN,
                                    flexShrink: 0,
                                  }}
                                />
                                <span style={{ fontSize: 13, lineHeight: 1.5, color: INK_MUTED }}>
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div
                    style={{
                      marginTop: 22,
                      padding: "28px 30px",
                      background: "oklch(0.16 0.006 240)",
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <span
                          className="uppercase font-bold"
                          style={{ fontSize: 10, letterSpacing: "0.22em", color: GREEN }}
                        >
                          Fontes públicas consultadas
                        </span>
                        <p style={{ marginTop: 11, fontSize: 14, color: MUTED }}>
                          Resultados eleitorais de 2022, trajetória biográfica pública e Assembleia
                          Legislativa do Paraná.
                        </p>
                      </div>
                      <div className="flex gap-10">
                        {[
                          {
                            label: "Resultados 2022",
                            href: "https://pt.wikipedia.org/wiki/Elei%C3%A7%C3%B5es_estaduais_no_Paran%C3%A1_em_2022",
                          },
                          {
                            label: "Trajetória",
                            href: "https://pt.wikipedia.org/wiki/Cobra_Rep%C3%B3rter",
                          },
                          {
                            label: "ALEP",
                            href: "https://www.assembleia.pr.leg.br/",
                          },
                        ].map((source) => (
                          <a
                            key={source.label}
                            href={source.href}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2"
                            style={{ color: WHITE, fontSize: 12, fontWeight: 700 }}
                          >
                            {source.label}
                            <ExternalLink size={13} style={{ color: GREEN }} />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
