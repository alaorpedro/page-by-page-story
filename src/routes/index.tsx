import { useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ScaledSlide } from "@/components/ScaledSlide";
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
  to: "/crc" | "/socialmedia" | "/performance" | "/marketing-politico";
  eyebrow: string;
  title: string;
  description: string;
  meta: string;
};

const GENERAL_PASSWORD = "onmid@123";
const POLITICAL_PASSWORD = "leandro@2026";

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
  {
    to: "/performance",
    eyebrow: "Marketing · Tráfego Pago",
    title: "Tráfego Pago de Alta Performance",
    description: "Metodologia Exclusiva Onmid de acompanhamento de tráfego pago.",
    meta: "3 slides · introdutório",
  },
  {
    to: "/marketing-politico",
    eyebrow: "Campanha · Eleições 2026",
    title: "Marketing Político 2026",
    description:
      "Campanha eleitoral com método, produção diária, tráfego pago e mensuração para perseguir meta de votos.",
    meta: "11 slides · proposta",
  },
];

function Index() {
  return (
    <div className="fixed inset-0" style={{ background: "oklch(0.13 0.005 240)" }}>
      <ScaledSlide>
        <MenuSlide />
      </ScaledSlide>
    </div>
  );
}

function MenuSlide() {
  const navigate = useNavigate();
  const [selectedTraining, setSelectedTraining] = useState<Training | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const openTraining = (training: Training) => {
    setSelectedTraining(training);
    setPassword("");
    setPasswordError("");
  };

  const closePasswordPrompt = () => {
    setSelectedTraining(null);
    setPassword("");
    setPasswordError("");
  };

  const submitPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedTraining) return;

    const normalizedPassword = password.trim();
    const isGeneralPassword = normalizedPassword === GENERAL_PASSWORD;
    const isPoliticalPassword =
      selectedTraining.to === "/marketing-politico" && normalizedPassword === POLITICAL_PASSWORD;

    if (!isGeneralPassword && !isPoliticalPassword) {
      setPasswordError("Senha incorreta.");
      return;
    }

    void navigate({ to: selectedTraining.to });
  };

  return (
    <div
      className="slide-content relative"
      style={{
        background:
          "radial-gradient(120% 80% at 10% 0%, oklch(0.22 0.02 240) 0%, oklch(0.13 0.005 240) 55%, oklch(0.1 0.005 240) 100%)",
        color: "white",
      }}
    >
      {/* Header */}
      <div
        className="absolute flex items-center justify-between"
        style={{ top: 70, left: 110, right: 110 }}
      >
        <OnmidLogo size={220} variant="white" />
        <span
          className="uppercase opacity-70"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 22,
            letterSpacing: "0.4em",
          }}
        >
          treinamentos.onmid.app
        </span>
      </div>

      {/* Title */}
      <div className="absolute animate-fade-in-up" style={{ top: 200, left: 110, right: 110 }}>
        <div
          className="uppercase font-bold"
          style={{
            fontSize: 22,
            letterSpacing: "0.45em",
            color: "oklch(0.85 0.18 138)",
            marginBottom: 28,
          }}
        >
          Biblioteca de Treinamentos
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 130,
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
          }}
        >
          Escolha um{" "}
          <span style={{ color: "oklch(0.85 0.18 138)", fontStyle: "italic" }}>treinamento</span>.
        </h1>
      </div>

      {/* Cards */}
      <div
        className="absolute grid grid-cols-4"
        style={{ left: 90, right: 90, bottom: 105, gap: 22 }}
      >
        {TRAININGS.map((t, i) => (
          <button
            key={t.to}
            type="button"
            onClick={() => openTraining(t)}
            className="group block h-full rounded-3xl border text-left transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            style={{
              animationDelay: `${0.2 + i * 0.1}s`,
              padding: 30,
              minHeight: 370,
              background:
                "linear-gradient(180deg, oklch(1 0 0 / 0.05) 0%, oklch(1 0 0 / 0.02) 100%)",
              borderColor: "oklch(1 0 0 / 0.12)",
            }}
          >
            <div
              className="uppercase font-bold"
              style={{
                fontSize: 15,
                letterSpacing: "0.34em",
                color: "oklch(0.85 0.18 138)",
                marginBottom: 28,
              }}
            >
              {t.eyebrow}
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 36,
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                marginBottom: 24,
              }}
            >
              {t.title}
            </h2>
            <p className="opacity-75" style={{ fontSize: 19, lineHeight: 1.38, marginBottom: 34 }}>
              {t.description}
            </p>
            <div className="flex items-center justify-between">
              <span
                className="uppercase opacity-60"
                style={{ fontSize: 14, letterSpacing: "0.22em" }}
              >
                {t.meta}
              </span>
              <span
                className="inline-flex items-center gap-3 font-bold transition-transform group-hover:translate-x-1"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  color: "oklch(0.85 0.18 138)",
                  letterSpacing: "-0.01em",
                }}
              >
                Começar
                <span aria-hidden>→</span>
              </span>
            </div>
          </button>
        ))}
      </div>

      {selectedTraining && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in"
          style={{ background: "oklch(0.08 0.005 240 / 0.72)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="password-title"
        >
          <form
            onSubmit={submitPassword}
            className="rounded-3xl border"
            style={{
              width: 560,
              padding: 42,
              background: "oklch(0.13 0.005 240 / 0.96)",
              borderColor: "oklch(1 0 0 / 0.14)",
              boxShadow: "0 32px 90px oklch(0 0 0 / 0.48)",
            }}
          >
            <div
              className="uppercase font-bold"
              style={{
                fontSize: 14,
                letterSpacing: "0.35em",
                color: "oklch(0.85 0.18 138)",
                marginBottom: 22,
              }}
            >
              Acesso restrito
            </div>
            <h2
              id="password-title"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: 44,
                lineHeight: 1,
                letterSpacing: "-0.035em",
                marginBottom: 18,
              }}
            >
              {selectedTraining.title}
            </h2>
            <label
              className="block"
              style={{ fontSize: 18, color: "oklch(1 0 0 / 0.72)", marginBottom: 14 }}
              htmlFor="training-password"
            >
              Digite a senha para começar.
            </label>
            <input
              id="training-password"
              type="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setPasswordError("");
              }}
              autoFocus
              className="w-full rounded-2xl border outline-none transition-colors focus:border-lime-400"
              style={{
                height: 64,
                padding: "0 22px",
                background: "oklch(1 0 0 / 0.06)",
                borderColor: passwordError ? "oklch(0.64 0.22 28)" : "oklch(1 0 0 / 0.16)",
                color: "white",
                fontSize: 24,
              }}
            />
            <div
              aria-live="polite"
              style={{
                height: 28,
                marginTop: 12,
                color: "oklch(0.72 0.21 28)",
                fontSize: 16,
              }}
            >
              {passwordError}
            </div>
            <div className="flex justify-end gap-4" style={{ marginTop: 18 }}>
              <button
                type="button"
                onClick={closePasswordPrompt}
                className="rounded-full font-bold transition-colors hover:bg-white/10"
                style={{
                  height: 52,
                  padding: "0 26px",
                  color: "oklch(1 0 0 / 0.72)",
                  fontSize: 18,
                }}
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="rounded-full font-bold transition-transform hover:translate-x-1"
                style={{
                  height: 52,
                  padding: "0 30px",
                  background: "oklch(0.85 0.18 138)",
                  color: "oklch(0.13 0.005 240)",
                  fontSize: 18,
                }}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Footer */}
      <div
        className="absolute uppercase opacity-50"
        style={{
          left: 110,
          bottom: 50,
          fontSize: 18,
          letterSpacing: "0.3em",
        }}
      >
        © Onmid · make strategy move
      </div>
    </div>
  );
}
