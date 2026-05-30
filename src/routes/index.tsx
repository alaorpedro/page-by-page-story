import { createFileRoute, Link } from "@tanstack/react-router";
import { OnmidLogo } from "@/components/OnmidLogo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onmid — Treinamentos" },
      {
        name: "description",
        content:
          "Biblioteca de treinamentos Onmid para clínicas odontológicas: vendas para CRCs e redes sociais.",
      },
      { property: "og:title", content: "Onmid — Treinamentos" },
      {
        property: "og:description",
        content:
          "Escolha um treinamento e comece em tela cheia: vendas para CRCs ou redes sociais.",
      },
    ],
  }),
  component: Index,
});

type Training = {
  to: "/crc" | "/socialmedia";
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
};

const TRAININGS: Training[] = [
  {
    to: "/crc",
    eyebrow: "Vendas · CRC",
    title: "Treinamento de Vendas para CRCs",
    description:
      "Estado emocional, neurovendas, gatilhos mentais e atendimento online para converter leads em agendamentos.",
    meta: "31 slides · ~90 min",
  },
  {
    to: "/socialmedia",
    eyebrow: "Marketing · Redes Sociais",
    title: "Redes Sociais para Clínicas Odontológicas",
    description:
      "Estratégia e posicionamento: persona, tom de voz, pilares de conteúdo e identidade visual.",
    meta: "10 slides · ~25 min",
  },
];

function Index() {
  return (
    <main
      className="min-h-screen w-full px-6 py-16 md:px-16 md:py-24"
      style={{
        background:
          "radial-gradient(120% 80% at 10% 0%, oklch(0.22 0.02 240) 0%, oklch(0.13 0.005 240) 55%, oklch(0.1 0.005 240) 100%)",
        color: "white",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-20 md:mb-28">
          <OnmidLogo size={140} variant="white" />
          <span
            className="text-xs uppercase tracking-[0.35em] opacity-70 hidden sm:block"
            style={{ fontFamily: "var(--font-display)" }}
          >
            treinamentos.onmid.app
          </span>
        </header>

        <section className="mb-16 md:mb-20 animate-fade-in-up">
          <div
            className="uppercase font-bold mb-6"
            style={{
              fontSize: 13,
              letterSpacing: "0.45em",
              color: "oklch(0.85 0.18 138)",
            }}
          >
            Biblioteca de Treinamentos
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(48px, 8vw, 112px)",
              lineHeight: 0.92,
              letterSpacing: "-0.045em",
            }}
          >
            Escolha um<br />
            <span style={{ color: "oklch(0.85 0.18 138)", fontStyle: "italic" }}>
              treinamento
            </span>{" "}
            para começar.
          </h1>
        </section>

        <ul className="grid gap-6 md:grid-cols-2">
          {TRAININGS.map((t, i) => (
            <li
              key={t.to}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <Link
                to={t.to}
                className="group block h-full rounded-3xl p-8 md:p-10 border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(180deg, oklch(1 0 0 / 0.04) 0%, oklch(1 0 0 / 0.02) 100%)",
                  borderColor: "oklch(1 0 0 / 0.1)",
                }}
              >
                <div
                  className="uppercase font-bold mb-8"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.4em",
                    color: "oklch(0.85 0.18 138)",
                  }}
                >
                  {t.eyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(28px, 3.4vw, 44px)",
                    lineHeight: 1.02,
                    letterSpacing: "-0.03em",
                    marginBottom: 20,
                  }}
                >
                  {t.title}
                </h2>
                <p
                  className="opacity-75"
                  style={{ fontSize: 17, lineHeight: 1.5, marginBottom: 32 }}
                >
                  {t.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="uppercase opacity-60"
                    style={{ fontSize: 12, letterSpacing: "0.25em" }}
                  >
                    {t.meta}
                  </span>
                  <span
                    className="inline-flex items-center gap-2 font-bold transition-transform group-hover:translate-x-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 16,
                      color: "oklch(0.85 0.18 138)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Começar
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <footer
          className="mt-24 text-xs uppercase opacity-50"
          style={{ letterSpacing: "0.3em" }}
        >
          © Onmid · make strategy move
        </footer>
      </div>
    </main>
  );
}
