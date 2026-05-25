import { SlideLayout } from "@/components/SlideLayout";

type Item = {
  title: string;
  url: string;
  author: string;
  domain: string;
};

const ITEMS: Item[] = [
  {
    title: "Presenteísmo",
    url: "https://administradores.com.br/artigos/presenteismo-o-corpo-esta-presente-mas-a-mente-nao",
    author: "Leonardo Borges",
    domain: "administradores.com.br",
  },
  {
    title: "Como atender bem um cliente",
    url: "https://www.kangu.com.br/blog/como-atender-bem-um-cliente/",
    author: "Diogo Inoue",
    domain: "kangu.com.br",
  },
  {
    title: "Meditação",
    url: "https://solcristal220.typeform.com/to/FaRsFMGF?typeform-source=keeplearningschool.typeform.com",
    author: "Murilo Gun",
    domain: "typeform.com",
  },
];

// Screenshot grátis via thum.io (sem chave) — 800×500, viewport 1280
const previewUrl = (url: string) =>
  `https://image.thum.io/get/width/800/crop/500/viewportWidth/1280/${url}`;

export function Slide30() {
  return (
    <SlideLayout variant="content" tone="light" bgLetter="30">
      {/* Header */}
      <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-30">
        <div
          className="font-extrabold"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 64,
            lineHeight: 1,
            color: "oklch(0.18 0.01 240)",
          }}
        >
          30<span style={{ color: "var(--onmid-lime)" }}>.</span>
        </div>
        <div
          className="flex-1 h-px max-w-[420px]"
          style={{ background: "oklch(0 0 0 / 0.15)" }}
        />
        <div
          className="uppercase font-bold mr-auto"
          style={{
            fontSize: 18,
            letterSpacing: "0.35em",
            color: "oklch(0.18 0.01 240 / 0.55)",
          }}
        >
          Texto para reflexão
        </div>
      </div>

      {/* Título */}
      <div className="absolute left-16 right-16 top-[240px] z-20 animate-fade-in-up">
        <h2
          className="font-black"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 96,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "oklch(0.13 0.005 240)",
          }}
        >
          Leituras para{" "}
          <span
            className="italic"
            style={{ color: "var(--onmid-lime)", fontWeight: 900 }}
          >
            refletir
          </span>
        </h2>
        <p
          className="mt-5 font-medium"
          style={{
            fontSize: 26,
            lineHeight: 1.4,
            color: "oklch(0.18 0.01 240 / 0.65)",
            maxWidth: 880,
          }}
        >
          Três conteúdos que aprofundam tudo o que vimos aqui — leia com calma
          e volte ao seu cliente diferente.
        </p>
      </div>

      {/* Cards com previews */}
      <div
        className="absolute left-16 right-16 grid grid-cols-3 gap-8 z-20"
        style={{ top: 540 }}
      >
        {ITEMS.map((it, i) => (
          <a
            key={it.url}
            href={it.url}
            target="_blank"
            rel="noreferrer"
            className="group block animate-fade-in-up"
            style={{ animationDelay: `${0.2 + i * 0.12}s` }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                background: "oklch(0.98 0 0)",
                border: "1px solid oklch(0 0 0 / 0.08)",
                borderRadius: 18,
                boxShadow:
                  "0 24px 60px oklch(0 0 0 / 0.08), 0 4px 14px oklch(0 0 0 / 0.04)",
                transition: "transform 400ms cubic-bezier(0.22,1,0.36,1), box-shadow 400ms ease",
              }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4"
                style={{
                  height: 36,
                  background: "oklch(0.96 0 0)",
                  borderBottom: "1px solid oklch(0 0 0 / 0.06)",
                }}
              >
                <span
                  className="rounded-full"
                  style={{ width: 10, height: 10, background: "#ff5f57" }}
                />
                <span
                  className="rounded-full"
                  style={{ width: 10, height: 10, background: "#febc2e" }}
                />
                <span
                  className="rounded-full"
                  style={{ width: 10, height: 10, background: "#28c840" }}
                />
                <div
                  className="ml-3 px-3 py-0.5 rounded-md truncate font-mono"
                  style={{
                    fontSize: 11,
                    background: "oklch(1 0 0)",
                    color: "oklch(0.18 0.01 240 / 0.55)",
                    border: "1px solid oklch(0 0 0 / 0.06)",
                    maxWidth: "70%",
                  }}
                >
                  {it.domain}
                </div>
              </div>

              {/* Screenshot */}
              <div
                className="relative w-full overflow-hidden"
                style={{
                  aspectRatio: "16 / 10",
                  background:
                    "linear-gradient(135deg, oklch(0.96 0 0) 0%, oklch(0.92 0 0) 100%)",
                }}
              >
                <img
                  src={previewUrl(it.url)}
                  alt={`Preview de ${it.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  style={{
                    transition: "transform 600ms cubic-bezier(0.22,1,0.36,1)",
                  }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Tag de número */}
                <div
                  className="absolute top-4 left-4 font-black flex items-center justify-center"
                  style={{
                    fontFamily: "var(--font-display)",
                    width: 52,
                    height: 52,
                    background: "var(--onmid-lime)",
                    color: "oklch(0.13 0.005 240)",
                    borderRadius: 12,
                    fontSize: 26,
                    letterSpacing: "-0.04em",
                    boxShadow: "0 8px 24px oklch(0.84 0.18 130 / 0.45)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Meta */}
              <div className="px-6 py-5">
                <h3
                  className="font-black"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 26,
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    color: "oklch(0.13 0.005 240)",
                  }}
                >
                  {it.title}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className="uppercase font-bold"
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.28em",
                      color: "oklch(0.18 0.01 240 / 0.5)",
                    }}
                  >
                    por
                  </span>
                  <span
                    className="font-bold"
                    style={{
                      fontSize: 15,
                      color: "oklch(0.18 0.01 240 / 0.85)",
                    }}
                  >
                    {it.author}
                  </span>
                </div>
              </div>

              {/* CTA bar */}
              <div
                className="flex items-center justify-between px-6 py-3"
                style={{
                  borderTop: "1px solid oklch(0 0 0 / 0.06)",
                  background: "oklch(0.99 0 0)",
                }}
              >
                <span
                  className="font-mono truncate"
                  style={{
                    fontSize: 11,
                    color: "oklch(0.18 0.01 240 / 0.4)",
                    maxWidth: "70%",
                  }}
                >
                  {it.domain}
                </span>
                <span
                  className="font-bold uppercase flex items-center gap-1.5"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.25em",
                    color: "var(--onmid-lime-ink, oklch(0.35 0.16 130))",
                  }}
                >
                  Ler <span style={{ fontSize: 14 }}>→</span>
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </SlideLayout>
  );
}
