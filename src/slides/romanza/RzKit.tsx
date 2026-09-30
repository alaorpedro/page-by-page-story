import type { ReactNode } from "react";
import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";
import { LiveInfoBar } from "@/components/LiveInfoBar";
import { useSlideMeta } from "@/components/SlideContext";
import romanzaLogo from "@/assets/romanza/logo-branca.svg";

/**
 * Kit de slides do treinamento Romanza.
 * Mesmo vocabulário visual do deck de CRC (SlideLayout + SlideHeader, Sora, lime),
 * mas orientado a dados para os quatro módulos caberem num arquivo só (RomanzaDeck).
 *
 * Convenções de texto:
 *   **trecho**  → destaque (lime no escuro, marca-texto no claro)
 *   [trecho]    → dado do Regimento ainda a confirmar (sublinhado tracejado amarelo)
 */

type Tone = "dark" | "light";
type RichTone = Tone | "ink";

const INK = "oklch(0.13 0.005 240)";

function palette(tone: Tone) {
  const light = tone === "light";
  return {
    text: light ? "oklch(0.18 0.01 240)" : "oklch(0.98 0 0)",
    muted: light ? "oklch(0.18 0.01 240 / 0.68)" : "oklch(1 0 0 / 0.66)",
    faint: light ? "oklch(0.18 0.01 240 / 0.45)" : "oklch(1 0 0 / 0.45)",
    card: light ? "oklch(0 0 0 / 0.045)" : "oklch(1 0 0 / 0.055)",
    line: light ? "oklch(0 0 0 / 0.12)" : "oklch(1 0 0 / 0.13)",
  };
}

export function Rich({ text, tone = "dark" }: { text: string; tone?: RichTone }) {
  const parts = text.split(/(\*\*.+?\*\*|\[[^\]]+\])/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**")) {
          const inner = part.slice(2, -2);
          if (tone === "ink") return <strong key={i} className="font-black">{inner}</strong>;
          return tone === "light" ? (
            <span key={i} style={{ background: "var(--onmid-lime)", color: INK, padding: "0 0.08em" }}>
              {inner}
            </span>
          ) : (
            <span key={i} className="text-lime">
              {inner}
            </span>
          );
        }
        if (part.startsWith("[")) {
          return (
            <span
              key={i}
              title="Dado do Regimento a confirmar"
              style={{ borderBottom: "4px dashed var(--onmid-yellow)", paddingBottom: 2 }}
            >
              {part.slice(1, -1)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/** Cabeçalho com o número real da posição no deck. */
function Header({ label, tone }: { label: string; tone: Tone }) {
  const { index } = useSlideMeta();
  return <SlideHeader number={String(index).padStart(2, "0")} label={label} tone={tone} />;
}

function Title({ children, tone, size = 76 }: { children: ReactNode; tone: Tone; size?: number }) {
  return (
    <h2
      className="font-black animate-fade-in-up"
      style={{
        fontFamily: "var(--font-display)",
        fontSize: size,
        lineHeight: 1.02,
        letterSpacing: "-0.04em",
        color: palette(tone).text,
        animationDelay: "0.1s",
      }}
    >
      {children}
    </h2>
  );
}

const BODY = "absolute left-16 right-16 top-[280px] bottom-28";

/* ------------------------------------------------------------------ */
/* Capa                                                                */
/* ------------------------------------------------------------------ */

export function RzCover() {
  return (
    <SlideLayout variant="hero" tone="dark" showHomeButton>
      <div
        className="absolute left-16 top-44 bottom-32 animate-fade-in"
        style={{ width: 2, background: "oklch(0.88 0.24 138 / 0.4)" }}
      />
      <div className="absolute left-24 top-44 animate-fade-in-up flex items-center gap-4">
        <div style={{ width: 36, height: 2, background: "var(--onmid-lime)" }} />
        <span className="uppercase font-bold text-foreground/70" style={{ fontSize: 16, letterSpacing: "0.4em" }}>
          Onmid · Treinamento de equipe
        </span>
      </div>

      <LiveInfoBar />

      <div className="absolute left-24 top-1/2 -translate-y-1/2 max-w-[1500px]">
        <img
          src={romanzaLogo}
          alt="Romanza"
          className="animate-fade-in-up"
          style={{ width: 420, height: "auto", marginBottom: 44, animationDelay: "0.05s" }}
          draggable={false}
        />
        <h1
          className="text-foreground uppercase animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 140,
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
            animationDelay: "0.15s",
          }}
        >
          Estado,
          <br />
          <span
            className="inline-block px-6 mt-4"
            style={{ background: "var(--onmid-lime)", color: INK, transform: "skewX(-4deg)" }}
          >
            regra
          </span>
          <br />e carteira
        </h1>
      </div>

      <div className="absolute left-24 bottom-32 animate-fade-in-up max-w-[980px]" style={{ animationDelay: "0.4s" }}>
        <p className="text-foreground/55 font-light" style={{ fontSize: 30, lineHeight: 1.3 }}>
          Quatro módulos, do estado de quem atende{" "}
          <span className="text-foreground/85 font-semibold">à carteira que sustenta o faturamento</span> — com o
          Regimento Interno explicado por dentro.
        </p>
      </div>

      <div className="absolute right-16 bottom-32 text-right animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
        <div className="uppercase font-bold text-foreground/40" style={{ fontSize: 13, letterSpacing: "0.35em" }}>
          Conduzido por
        </div>
        <div className="text-foreground font-black mt-2" style={{ fontSize: 22, lineHeight: 1.1 }}>
          Alaor Pedro de Oliveira
        </div>
        <div className="text-foreground/50 mt-1" style={{ fontSize: 16 }}>
          Diretor de Planejamento
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Agenda do dia                                                       */
/* ------------------------------------------------------------------ */

export const MODULES = [
  { n: "01", name: "Estado", focus: "O clima de dentro chega na cliente antes da peça", time: "25 min" },
  { n: "02", name: "Condução", focus: "Quem conduz o atendimento é você", time: "25 min" },
  { n: "03", name: "Regra e fechamento", focus: "Sustentar a regra sem perder a venda", time: "30 min" },
  { n: "04", name: "Carteira", focus: "Mercadoria parada é faturamento parado", time: "25 min" },
];

export function RzAgenda({
  label = "Agenda do dia",
  title,
  active,
  footer,
  tone = "dark",
}: {
  label?: string;
  title: string;
  active?: number;
  footer?: string;
  tone?: Tone;
}) {
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bgLetter="4">
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone}>
          <Rich text={title} tone={tone} />
        </Title>
        <div className="my-auto grid grid-cols-4 gap-7">
          {MODULES.map((m, i) => {
            const on = active === undefined || active === i + 1;
            return (
              <div
                key={m.n}
                className="relative flex flex-col animate-fade-in-up"
                style={{
                  minHeight: 380,
                  padding: "38px 36px",
                  borderRadius: 28,
                  background: on ? "var(--onmid-lime)" : p.card,
                  color: on ? INK : p.text,
                  opacity: on ? 1 : 0.6,
                  animationDelay: `${0.25 + i * 0.1}s`,
                  boxShadow: on ? "0 30px 80px oklch(0.84 0.18 130 / 0.22)" : "none",
                }}
              >
                <div
                  className="font-black"
                  style={{ fontFamily: "var(--font-display)", fontSize: 72, lineHeight: 1, letterSpacing: "-0.05em" }}
                >
                  {m.n}
                </div>
                <div
                  className="mt-6 font-black uppercase"
                  style={{ fontFamily: "var(--font-display)", fontSize: 38, lineHeight: 1.02, letterSpacing: "-0.03em" }}
                >
                  {m.name}
                </div>
                <p className="mt-4 font-medium" style={{ fontSize: 22, lineHeight: 1.35, opacity: 0.8 }}>
                  {m.focus}
                </p>
                <div
                  className="mt-auto pt-6 uppercase font-black"
                  style={{ fontSize: 15, letterSpacing: "0.3em", opacity: 0.65 }}
                >
                  ≈ {m.time}
                </div>
              </div>
            );
          })}
        </div>
        {footer && (
          <p className="mt-8 font-medium animate-fade-in-up" style={{ fontSize: 24, color: p.muted, animationDelay: "0.7s" }}>
            <Rich text={footer} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Abertura de módulo                                                  */
/* ------------------------------------------------------------------ */

export function RzModule({ n, photo }: { n: 1 | 2 | 3 | 4; photo: string }) {
  const m = MODULES[n - 1];
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter={String(n)}>
      <div className="absolute inset-y-0 right-0 animate-fade-in overflow-hidden" style={{ width: "44%" }}>
        <img src={photo} alt="" className="w-full h-full object-cover" style={{ objectPosition: "center 20%" }} draggable={false} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, oklch(0.16 0.005 240) 0%, oklch(0.16 0.005 240 / 0.35) 45%, oklch(0.16 0.005 240 / 0) 100%)" }}
        />
      </div>

      <div className="absolute left-24 top-1/2 -translate-y-1/2" style={{ maxWidth: 1080 }}>
        <div className="flex items-center gap-4 animate-fade-in-up">
          <div style={{ width: 36, height: 2, background: "var(--onmid-lime)" }} />
          <span className="uppercase font-bold text-lime" style={{ fontSize: 18, letterSpacing: "0.4em" }}>
            Módulo {m.n} de 04
          </span>
        </div>
        <h1
          className="uppercase animate-fade-in-up text-foreground"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: m.name.length > 10 ? 132 : 188,
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
            marginTop: 36,
            animationDelay: "0.12s",
          }}
        >
          {m.name}
          <span className="text-lime">.</span>
        </h1>
        <p
          className="mt-10 font-semibold text-foreground/75 animate-fade-in-up"
          style={{ fontSize: 40, lineHeight: 1.25, letterSpacing: "-0.01em", animationDelay: "0.3s" }}
        >
          {m.focus}
        </p>
        <div
          className="mt-12 inline-flex items-center gap-3 rounded-full uppercase font-black animate-fade-in-up"
          style={{
            padding: "14px 26px",
            fontSize: 16,
            letterSpacing: "0.3em",
            border: "2px solid oklch(1 0 0 / 0.18)",
            color: "oklch(1 0 0 / 0.7)",
            animationDelay: "0.45s",
          }}
        >
          <span className="rounded-full" style={{ width: 10, height: 10, background: "var(--onmid-lime)" }} />≈ {m.time}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Afirmação                                                           */
/* ------------------------------------------------------------------ */

export function RzStatement({
  label,
  text,
  body,
  tone = "dark",
  bgLetter,
}: {
  label: string;
  text: string;
  body?: string;
  tone?: Tone;
  bgLetter?: string;
}) {
  const p = palette(tone);
  return (
    <SlideLayout variant="statement" tone={tone} bgLetter={bgLetter}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col justify-center`}>
        <p
          className="font-black animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 96,
            lineHeight: 1.04,
            letterSpacing: "-0.045em",
            color: p.text,
            maxWidth: 1640,
            animationDelay: "0.1s",
          }}
        >
          <Rich text={text} tone={tone} />
        </p>
        {body && (
          <p
            className="mt-12 font-medium animate-fade-in-up"
            style={{ fontSize: 34, lineHeight: 1.4, color: p.muted, maxWidth: 1400, animationDelay: "0.3s" }}
          >
            <Rich text={body} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Lista                                                               */
/* ------------------------------------------------------------------ */

export function RzList({
  label,
  title,
  items,
  note,
  tone = "dark",
  bgLetter,
}: {
  label: string;
  title: string;
  items: string[];
  note?: string;
  tone?: Tone;
  bgLetter?: string;
}) {
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bgLetter={bgLetter}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone}>
          <Rich text={title} tone={tone} />
        </Title>
        <ul className="mt-12 space-y-5" style={{ maxWidth: 1600 }}>
          {items.map((item, i) => (
            <li
              key={i}
              className="animate-fade-in-up"
              style={{
                background: p.card,
                borderLeft: "6px solid var(--onmid-lime)",
                borderRadius: "0 18px 18px 0",
                padding: "24px 34px",
                fontSize: 32,
                lineHeight: 1.32,
                fontWeight: 500,
                color: p.text,
                animationDelay: `${0.25 + i * 0.1}s`,
              }}
            >
              <Rich text={item} tone={tone} />
            </li>
          ))}
        </ul>
        {note && (
          <p className="mt-auto font-semibold animate-fade-in-up" style={{ fontSize: 28, color: p.muted, animationDelay: "0.7s" }}>
            <Rich text={note} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Cards 2x2                                                           */
/* ------------------------------------------------------------------ */

export function RzCards({
  label,
  title,
  cards,
  tone = "dark",
  bgLetter,
}: {
  label: string;
  title: string;
  cards: Array<[string, string]>;
  tone?: Tone;
  bgLetter?: string;
}) {
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bgLetter={bgLetter}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone}>
          <Rich text={title} tone={tone} />
        </Title>
        <div className="my-auto grid grid-cols-2 gap-7">
          {cards.map(([head, text], i) => (
            <div
              key={i}
              className="animate-fade-in-up"
              style={{
                background: p.card,
                border: `1px solid ${p.line}`,
                borderRadius: 26,
                padding: "34px 38px",
                animationDelay: `${0.25 + i * 0.1}s`,
              }}
            >
              <div
                className="uppercase font-black"
                style={{ fontSize: 16, letterSpacing: "0.3em", color: tone === "light" ? p.faint : "var(--onmid-lime)" }}
              >
                {head}
              </div>
              <p className="mt-3 font-semibold" style={{ fontSize: 30, lineHeight: 1.3, color: p.text }}>
                <Rich text={text} tone={tone} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Artigo do Regimento (sempre creme: é a "voz da casa")               */
/* ------------------------------------------------------------------ */

export function RzArticle({ art, title, quote, after }: { art: string; title: string; quote: string; after?: string }) {
  const tone: Tone = "light";
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bgLetter="§">
      <Header label="Regimento Interno" tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <div className="flex items-center gap-6 animate-fade-in-up">
          <span
            className="uppercase font-black rounded-full"
            style={{ padding: "10px 22px", fontSize: 18, letterSpacing: "0.25em", background: INK, color: "var(--onmid-lime)" }}
          >
            {art}
          </span>
          <span
            className="font-black uppercase"
            style={{ fontFamily: "var(--font-display)", fontSize: 40, letterSpacing: "-0.02em", color: p.text }}
          >
            {title}
          </span>
        </div>
        <blockquote
          className="relative mt-12 font-bold animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 58,
            lineHeight: 1.18,
            letterSpacing: "-0.03em",
            color: p.text,
            paddingLeft: 56,
            borderLeft: "10px solid var(--onmid-lime)",
            maxWidth: 1640,
            animationDelay: "0.2s",
          }}
        >
          <Rich text={quote} tone={tone} />
        </blockquote>
        {after && (
          <p
            className="mt-auto font-semibold animate-fade-in-up"
            style={{ fontSize: 32, lineHeight: 1.35, color: p.muted, maxWidth: 1500, animationDelay: "0.45s" }}
          >
            <Rich text={after} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Tabela regra × porquê                                               */
/* ------------------------------------------------------------------ */

export function RzRules({
  label,
  title,
  head,
  rows,
  note,
  tone = "dark",
}: {
  label: string;
  title: string;
  head: [string, string];
  rows: Array<[string, string]>;
  note?: string;
  tone?: Tone;
}) {
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone} size={64}>
          <Rich text={title} tone={tone} />
        </Title>
        <div className="mt-10" style={{ maxWidth: 1720 }}>
          <div
            className="grid uppercase font-black pb-4"
            style={{ gridTemplateColumns: "1fr 1fr", gap: 48, fontSize: 15, letterSpacing: "0.3em", color: tone === "light" ? p.faint : "var(--onmid-lime)" }}
          >
            <span>{head[0]}</span>
            <span>{head[1]}</span>
          </div>
          {rows.map(([a, b], i) => (
            <div
              key={i}
              className="grid items-start animate-fade-in-up"
              style={{
                gridTemplateColumns: "1fr 1fr",
                gap: 48,
                padding: "22px 0",
                borderTop: `1px solid ${p.line}`,
                animationDelay: `${0.2 + i * 0.08}s`,
              }}
            >
              <span className="font-bold" style={{ fontSize: 29, lineHeight: 1.28, color: p.text }}>
                <Rich text={a} tone={tone} />
              </span>
              <span className="font-medium" style={{ fontSize: 27, lineHeight: 1.32, color: p.muted }}>
                <Rich text={b} tone={tone} />
              </span>
            </div>
          ))}
        </div>
        {note && (
          <p className="mt-auto font-semibold animate-fade-in-up" style={{ fontSize: 24, color: p.faint, animationDelay: "0.8s" }}>
            <Rich text={note} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Duas colunas em contraste                                           */
/* ------------------------------------------------------------------ */

export function RzColumns({
  label,
  title,
  left,
  right,
  tone = "dark",
  bgLetter,
}: {
  label: string;
  title: string;
  left: { head: string; items: string[] };
  right: { head: string; items: string[] };
  tone?: Tone;
  bgLetter?: string;
}) {
  const p = palette(tone);
  const col = (c: { head: string; items: string[] }, strong: boolean, delay: number) => (
    <div
      className="animate-fade-in-up"
      style={{
        borderRadius: 30,
        padding: "40px 44px",
        background: strong ? "var(--onmid-lime)" : p.card,
        color: strong ? INK : p.text,
        border: strong ? "none" : `1px solid ${p.line}`,
        animationDelay: `${delay}s`,
        boxShadow: strong ? "0 30px 80px oklch(0.84 0.18 130 / 0.2)" : "none",
      }}
    >
      <div
        className="uppercase font-black"
        style={{ fontFamily: "var(--font-display)", fontSize: 44, letterSpacing: "-0.02em", opacity: strong ? 1 : 0.75 }}
      >
        {c.head}
      </div>
      <ul className="mt-7 space-y-4">
        {c.items.map((it, i) => (
          <li key={i} className="font-semibold flex gap-4" style={{ fontSize: 29, lineHeight: 1.3 }}>
            <span
              className="shrink-0 rounded-full"
              style={{ width: 10, height: 10, marginTop: 14, background: strong ? INK : "var(--onmid-lime)", opacity: strong ? 0.6 : 1 }}
            />
            <span>
              <Rich text={it} tone={strong ? "ink" : tone} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <SlideLayout variant="content" tone={tone} bgLetter={bgLetter}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone} size={68}>
          <Rich text={title} tone={tone} />
        </Title>
        <div className="my-auto grid grid-cols-2 gap-10">
          {col(left, false, 0.25)}
          {col(right, true, 0.4)}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Ela diz × você responde                                             */
/* ------------------------------------------------------------------ */

export function RzDialog({ label, title, pairs }: { label: string; title: string; pairs: Array<[string, string]> }) {
  const tone: Tone = "dark";
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bgLetter="”">
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone} size={64}>
          {title}
        </Title>
        <div
          className="mt-10 grid uppercase font-black animate-fade-in-up"
          style={{ gridTemplateColumns: "560px 1fr", gap: 24, fontSize: 15, letterSpacing: "0.3em", animationDelay: "0.15s" }}
        >
          <span style={{ color: p.faint }}>Ela diz</span>
          <span className="text-lime">Você responde</span>
        </div>
        <div className="mt-4 space-y-5">
          {pairs.map(([a, b], i) => (
            <div key={i} className="grid gap-6 animate-fade-in-up" style={{ gridTemplateColumns: "560px 1fr", marginLeft: "auto", width: "100%", animationDelay: `${0.2 + i * 0.12}s` }}>
              <p
                className="italic font-medium"
                style={{ background: p.card, borderRadius: 20, padding: "22px 28px", fontSize: 25, lineHeight: 1.3, color: p.muted }}
              >
                {a}
              </p>
              <p
                className="font-semibold"
                style={{
                  background: "oklch(0.88 0.24 138 / 0.1)",
                  borderLeft: "6px solid var(--onmid-lime)",
                  borderRadius: "0 20px 20px 0",
                  padding: "22px 30px",
                  fontSize: 25,
                  lineHeight: 1.3,
                  color: p.text,
                }}
              >
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Fluxo em etapas                                                     */
/* ------------------------------------------------------------------ */

export function RzFlow({
  label,
  title,
  steps,
  note,
  tone = "dark",
}: {
  label: string;
  title: string;
  steps: string[];
  note?: string;
  tone?: Tone;
}) {
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone}>
          <Rich text={title} tone={tone} />
        </Title>
        <div className="my-auto flex items-stretch gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex items-center gap-4 flex-1">
              <div
                className="flex-1 h-full animate-fade-in-up"
                style={{
                  borderRadius: 26,
                  padding: "34px 32px",
                  minHeight: 260,
                  background: i === steps.length - 1 ? "var(--onmid-lime)" : p.card,
                  color: i === steps.length - 1 ? INK : p.text,
                  border: i === steps.length - 1 ? "none" : `1px solid ${p.line}`,
                  animationDelay: `${0.2 + i * 0.12}s`,
                }}
              >
                <div className="font-black" style={{ fontFamily: "var(--font-display)", fontSize: 56, lineHeight: 1, opacity: 0.9 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-6 font-bold" style={{ fontSize: 30, lineHeight: 1.25 }}>
                  <Rich text={s} tone={i === steps.length - 1 ? "ink" : tone} />
                </p>
              </div>
              {i < steps.length - 1 && (
                <span className="font-black text-lime" style={{ fontSize: 44 }}>
                  →
                </span>
              )}
            </div>
          ))}
        </div>
        {note && (
          <p className="mt-10 font-semibold animate-fade-in-up" style={{ fontSize: 30, lineHeight: 1.35, color: p.muted, animationDelay: "0.7s" }}>
            <Rich text={note} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Seis gatilhos numa tela                                             */
/* ------------------------------------------------------------------ */

export function RzTriggers({ items }: { items: Array<[string, string, string]> }) {
  const tone: Tone = "dark";
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bgLetter="6">
      <Header label="Gatilhos mentais" tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone} size={64}>
          Seis gatilhos que a Romanza <span className="text-lime">já usa</span>
        </Title>
        <div className="my-auto grid grid-cols-3 gap-6">
          {items.map(([name, how, example], i) => (
            <div
              key={name}
              className="animate-fade-in-up"
              style={{ background: p.card, border: `1px solid ${p.line}`, borderRadius: 24, padding: "28px 30px", animationDelay: `${0.2 + i * 0.08}s` }}
            >
              <div className="flex items-center gap-4">
                <span
                  className="flex items-center justify-center font-black shrink-0"
                  style={{ width: 52, height: 52, borderRadius: 14, background: "var(--onmid-lime)", color: INK, fontSize: 26, fontFamily: "var(--font-display)" }}
                >
                  {i + 1}
                </span>
                <span className="uppercase font-black" style={{ fontFamily: "var(--font-display)", fontSize: 27, letterSpacing: "-0.01em", color: p.text }}>
                  {name}
                </span>
              </div>
              <p className="mt-4 font-semibold" style={{ fontSize: 22, lineHeight: 1.32, color: p.text }}>
                {how}
              </p>
              <p className="mt-3 italic" style={{ fontSize: 20, lineHeight: 1.35, color: p.muted }}>
                “{example}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Galeria (prova social)                                              */
/* ------------------------------------------------------------------ */

export function RzGallery({
  label,
  title,
  lead,
  photos,
}: {
  label: string;
  title: string;
  lead?: string;
  photos: Array<[string, string]>;
}) {
  const tone: Tone = "dark";
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone} size={60}>
          <Rich text={title} tone={tone} />
        </Title>
        {lead && (
          <p className="mt-4 font-medium animate-fade-in-up" style={{ fontSize: 28, color: p.muted, animationDelay: "0.2s" }}>
            <Rich text={lead} tone={tone} />
          </p>
        )}
        <div className="mt-auto grid grid-cols-3 gap-5">
          {photos.map(([src, name], i) => (
            <figure
              key={name}
              className="relative overflow-hidden animate-scale-in"
              style={{ borderRadius: 20, height: 230, animationDelay: `${0.25 + i * 0.08}s` }}
            >
              <img src={src} alt={`${name} recebendo a premiação da Romanza`} className="w-full h-full object-cover" draggable={false} />
              <figcaption
                className="absolute left-0 right-0 bottom-0 font-black uppercase"
                style={{
                  padding: "40px 22px 16px",
                  fontSize: 17,
                  letterSpacing: "0.2em",
                  color: "oklch(0.98 0 0)",
                  background: "linear-gradient(0deg, oklch(0 0 0 / 0.75), transparent)",
                }}
              >
                {name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Escada (medidas disciplinares)                                      */
/* ------------------------------------------------------------------ */

export function RzLadder({
  label,
  title,
  steps,
  note,
}: {
  label: string;
  title: string;
  steps: Array<[string, string]>;
  note?: string;
}) {
  const tone: Tone = "light";
  const p = palette(tone);
  const heights = [230, 290, 350, 410];
  return (
    <SlideLayout variant="content" tone={tone}>
      <Header label={label} tone={tone} />
      <div className={`${BODY} flex flex-col`}>
        <Title tone={tone} size={64}>
          <Rich text={title} tone={tone} />
        </Title>
        <div className="mt-auto grid grid-cols-4 gap-6 items-end">
          {steps.map(([head, text], i) => (
            <div
              key={head}
              className="flex flex-col animate-fade-in-up"
              style={{
                height: heights[i],
                borderRadius: 24,
                padding: "28px 30px",
                background: i === 3 ? INK : p.card,
                color: i === 3 ? "oklch(0.98 0 0)" : p.text,
                border: i === 3 ? "none" : `1px solid ${p.line}`,
                animationDelay: `${0.2 + i * 0.12}s`,
              }}
            >
              <div className="font-black" style={{ fontFamily: "var(--font-display)", fontSize: 44, lineHeight: 1 }}>
                {i + 1}
                <span className="text-lime">.</span>
              </div>
              <div className="mt-4 uppercase font-black" style={{ fontSize: 24, letterSpacing: "0.04em" }}>
                {head}
              </div>
              <p className="mt-3 font-medium" style={{ fontSize: 23, lineHeight: 1.32, opacity: 0.78 }}>
                <Rich text={text} tone={i === 3 ? "dark" : tone} />
              </p>
            </div>
          ))}
        </div>
        {note && (
          <p className="mt-8 font-semibold animate-fade-in-up" style={{ fontSize: 28, lineHeight: 1.35, color: p.muted, animationDelay: "0.7s" }}>
            <Rich text={note} tone={tone} />
          </p>
        )}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Dinâmica                                                            */
/* ------------------------------------------------------------------ */

export function RzDynamic({
  title,
  format,
  time,
  steps,
  label = "Dinâmica",
}: {
  title: string;
  format: string;
  time: string;
  steps: string[];
  label?: string;
}) {
  const tone: Tone = "dark";
  const p = palette(tone);
  return (
    <SlideLayout variant="content" tone={tone} bg="radial-gradient(ellipse 90% 70% at 30% 40%, oklch(0.26 0.04 138) 0%, oklch(0.13 0.005 240) 100%)">
      <Header label={label} tone={tone} />
      <div className={`${BODY} grid gap-16`} style={{ gridTemplateColumns: "600px 1fr" }}>
        <div className="flex flex-col animate-fade-in-up">
          <Title tone={tone} size={80}>
            {title}
          </Title>
          <div className="mt-auto space-y-4">
            {[format, time].map((t, i) => (
              <div
                key={t}
                className="inline-flex mr-4 items-center gap-3 rounded-full uppercase font-black"
                style={{
                  padding: "14px 24px",
                  fontSize: 17,
                  letterSpacing: "0.25em",
                  background: i === 1 ? "var(--onmid-lime)" : "oklch(1 0 0 / 0.08)",
                  color: i === 1 ? INK : p.text,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <ol className="flex flex-col justify-center gap-7">
          {steps.map((s, i) => (
            <li key={i} className="flex items-start gap-7 animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.12}s` }}>
              <span
                className="shrink-0 flex items-center justify-center font-black rounded-full"
                style={{ width: 64, height: 64, border: "3px solid var(--onmid-lime)", color: "var(--onmid-lime)", fontSize: 28, fontFamily: "var(--font-display)" }}
              >
                {i + 1}
              </span>
              <span className="font-semibold" style={{ fontSize: 34, lineHeight: 1.3, color: p.text, paddingTop: 8 }}>
                <Rich text={s} tone={tone} />
              </span>
            </li>
          ))}
        </ol>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Pôster (frase de impacto, fundo creme)                              */
/* ------------------------------------------------------------------ */

export function RzPoster({ label, before, highlight, after }: { label: string; before: string; highlight: string; after?: string }) {
  return (
    <SlideLayout variant="statement" tone="light">
      <Header label={label} tone="light" />
      <div className="absolute inset-0 flex items-center px-[7%]">
        <h2
          className="uppercase font-black animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 124,
            lineHeight: 1.02,
            letterSpacing: "-0.05em",
            color: "oklch(0.18 0.01 240)",
            maxWidth: 1700,
          }}
        >
          {before}{" "}
          <span
            className="inline-block px-6 animate-pop-in"
            style={{
              background: "var(--onmid-lime)",
              color: INK,
              transform: "rotate(-1.5deg)",
              boxShadow: "0 20px 60px oklch(0.84 0.18 130 / 0.45)",
              animationDelay: "0.5s",
            }}
          >
            {highlight}
          </span>
          {after && <> {after}</>}
        </h2>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Perguntas (mesmo desenho do slide "caro em relação a quê")          */
/* ------------------------------------------------------------------ */

export function RzQuestions({ label, questions }: { label: string; questions: string[] }) {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="?">
      <Header label={label} tone="dark" />
      <div className="absolute left-16 right-16 top-[290px] bottom-28 flex flex-col justify-center gap-10">
        {questions.map((q, i) => (
          <div
            key={i}
            className="relative animate-fade-in-up"
            style={{
              background: i === 0 ? "var(--onmid-lime)" : "transparent",
              color: i === 0 ? INK : "oklch(0.98 0 0)",
              border: i === 0 ? "none" : "3px solid oklch(1 0 0 / 0.18)",
              borderRadius: 44,
              padding: "60px 72px",
              animationDelay: `${0.15 + i * 0.25}s`,
              boxShadow: i === 0 ? "0 40px 100px oklch(0.84 0.18 130 / 0.25)" : "none",
            }}
          >
            <span
              className="absolute uppercase font-black"
              style={{ top: 26, left: 72, fontSize: 16, letterSpacing: "0.35em", color: i === 0 ? "oklch(0.13 0.005 240 / 0.45)" : "var(--onmid-lime)" }}
            >
              {i === 0 ? "Pergunta" : "Na consignação"}
            </span>
            <p
              className="font-black"
              style={{ fontFamily: "var(--font-display)", fontSize: i === 0 ? 88 : 56, lineHeight: 1.08, letterSpacing: "-0.04em", marginTop: 18 }}
            >
              <Rich text={q} tone={i === 0 ? "ink" : "dark"} />
            </p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Balão (objeção clássica)                                            */
/* ------------------------------------------------------------------ */

export function RzQuote({ label, quote, author }: { label: string; quote: string; author: string }) {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="”">
      <Header label={label} tone="dark" />
      <div className={`${BODY} flex items-center`}>
        <div
          className="relative w-full animate-scale-in"
          style={{
            background: "var(--onmid-lime)",
            color: INK,
            borderRadius: 44,
            padding: "80px 88px",
            animationDelay: "0.2s",
            boxShadow: "0 40px 100px oklch(0.84 0.18 130 / 0.25)",
          }}
        >
          <p className="uppercase font-black" style={{ fontFamily: "var(--font-display)", fontSize: 104, lineHeight: 1.02, letterSpacing: "-0.045em" }}>
            “{quote}”
          </p>
          <p className="mt-8 font-black italic" style={{ fontSize: 36, opacity: 0.7 }}>
            — {author}
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ------------------------------------------------------------------ */
/* Encerramento                                                        */
/* ------------------------------------------------------------------ */

export function RzThanks() {
  return (
    <SlideLayout variant="hero" tone="dark" showHomeButton>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <img src={romanzaLogo} alt="Romanza" style={{ width: 420, height: "auto", opacity: 0.9 }} className="animate-fade-in-up" draggable={false} />
        <h2
          className="mt-16 uppercase font-black animate-fade-in-up"
          style={{ fontFamily: "var(--font-display)", fontSize: 132, lineHeight: 0.95, letterSpacing: "-0.055em", animationDelay: "0.15s" }}
        >
          Obrigado pelo
          <br />
          <span className="text-lime">tempo e presença</span>
        </h2>
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
          <div className="text-foreground font-black" style={{ fontSize: 28 }}>
            Alaor Pedro de Oliveira
          </div>
          <div className="text-foreground/50 mt-1" style={{ fontSize: 20 }}>
            Diretor de Planejamento · Onmid
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
