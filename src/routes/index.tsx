import { useCallback, useEffect, useState, type FormEvent } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  CloudSun,
  Compass,
  Droplets,
  Maximize2,
  Minimize2,
  MapPin,
  Play,
  RefreshCw,
  Sunrise,
  Sunset,
  Umbrella,
  Wind,
  X,
} from "lucide-react";
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

type WeatherData = {
  current: {
    temp: number;
    apparent: number;
    humidity: number;
    wind: number;
    code: number;
  };
  daily: {
    max: number;
    min: number;
    rainChance: number;
    sunrise: string;
    sunset: string;
  };
  hourly: Array<{
    time: string;
    temp: number;
    rainChance: number;
    code: number;
  }>;
  updatedAt: Date;
};

const GENERAL_PASSWORD = "onmid@123";
const POLITICAL_PASSWORD = "leandro@2026";

const WMO: Record<number, string> = {
  0: "Céu limpo",
  1: "Predom. limpo",
  2: "Parcialmente nublado",
  3: "Nublado",
  45: "Neblina",
  48: "Neblina gelada",
  51: "Garoa fraca",
  53: "Garoa",
  55: "Garoa forte",
  61: "Chuva fraca",
  63: "Chuva",
  65: "Chuva forte",
  80: "Pancadas",
  81: "Pancadas fortes",
  82: "Temporal",
  95: "Tempestade",
};

const TODAY_AGENDA = [
  {
    time: "Agora",
    title: "Revisão dos treinamentos",
    detail: "Acompanhar conteúdo, experiência e próximos ajustes.",
    active: true,
  },
  {
    time: "Em foco",
    title: "Marketing Político 2026",
    detail: "Consolidar apresentação e inteligência eleitoral.",
  },
  {
    time: "Depois",
    title: "Planejar próximos conteúdos",
    detail: "Definir prioridades da biblioteca Onmid.",
  },
];

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
    meta: "13 slides · proposta",
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
  const [now, setNow] = useState<Date | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [weatherOpen, setWeatherOpen] = useState(false);
  const [weatherLoading, setWeatherLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const loadWeather = useCallback(() => {
    setWeatherLoading(true);
    return fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-23.31&longitude=-51.16&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&forecast_days=2&timezone=America/Sao_Paulo",
    )
      .then((response) => response.json())
      .then((data) => {
        if (!data?.current || !data?.daily || !data?.hourly) return;
        const currentTime = new Date(data.current.time).getTime();
        const hourly = data.hourly.time
          .map((time: string, index: number) => ({
            time,
            temp: Math.round(data.hourly.temperature_2m[index]),
            rainChance: data.hourly.precipitation_probability[index] ?? 0,
            code: data.hourly.weather_code[index],
          }))
          .filter((item: { time: string }) => new Date(item.time).getTime() >= currentTime)
          .filter((_: unknown, index: number) => index % 3 === 0)
          .slice(0, 6);

        setWeather({
          current: {
            temp: Math.round(data.current.temperature_2m),
            apparent: Math.round(data.current.apparent_temperature),
            humidity: data.current.relative_humidity_2m,
            wind: Math.round(data.current.wind_speed_10m),
            code: data.current.weather_code,
          },
          daily: {
            max: Math.round(data.daily.temperature_2m_max[0]),
            min: Math.round(data.daily.temperature_2m_min[0]),
            rainChance: data.daily.precipitation_probability_max[0] ?? 0,
            sunrise: data.daily.sunrise[0],
            sunset: data.daily.sunset[0],
          },
          hourly,
          updatedAt: new Date(),
        });
      })
      .catch(() => {})
      .finally(() => setWeatherLoading(false));
  }, []);

  useEffect(() => {
    setNow(new Date());
    const interval = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    void loadWeather();
    const interval = window.setInterval(loadWeather, 10 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, [loadWeather]);

  useEffect(() => {
    if (!weatherOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setWeatherOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [weatherOpen]);

  useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

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

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      void document.exitFullscreen();
      return;
    }

    void document.documentElement.requestFullscreen();
  };

  const time = now
    ? now.toLocaleTimeString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "--:--";
  const date = now
    ? now.toLocaleDateString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        weekday: "long",
        day: "2-digit",
        month: "long",
      })
    : "";
  const greetingHour = now
    ? Number(
        now.toLocaleTimeString("pt-BR", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          hour12: false,
        }),
      )
    : 12;
  const greeting = greetingHour < 12 ? "Bom dia" : greetingHour < 18 ? "Boa tarde" : "Boa noite";

  return (
    <div
      className="slide-content relative"
      style={{
        background:
          "radial-gradient(90% 100% at 0% 0%, oklch(0.22 0.025 240) 0%, oklch(0.13 0.005 240) 58%, oklch(0.095 0.004 240) 100%)",
        color: "white",
      }}
    >
      <div
        aria-hidden
        className="absolute rounded-full"
        style={{
          width: 940,
          height: 940,
          right: -360,
          top: -390,
          border: "1px solid oklch(0.88 0.24 138 / 0.14)",
          boxShadow: "0 0 0 120px oklch(0.88 0.24 138 / 0.018)",
        }}
      />

      <div
        className="absolute flex items-center justify-between"
        style={{ top: 54, left: 84, right: 84 }}
      >
        <OnmidLogo size={188} variant="white" />
        <div className="flex items-center gap-5">
          <span
            className="uppercase"
            style={{ fontSize: 11, letterSpacing: "0.3em", color: "oklch(1 0 0 / 0.38)" }}
          >
            Central Onmid
          </span>
          <span
            className="inline-block rounded-full animate-pulse"
            style={{
              width: 8,
              height: 8,
              background: "var(--onmid-lime)",
              boxShadow: "0 0 18px var(--onmid-lime)",
            }}
          />
          <button
            type="button"
            onClick={toggleFullscreen}
            className="inline-flex items-center gap-3 rounded-full transition-colors hover:bg-white/10"
            style={{
              height: 42,
              padding: "0 16px",
              border: "1px solid oklch(1 0 0 / 0.11)",
              color: "oklch(1 0 0 / 0.68)",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
            title="Alternar tela cheia"
          >
            {isFullscreen ? (
              <Minimize2 size={15} strokeWidth={2} aria-hidden />
            ) : (
              <Maximize2 size={15} strokeWidth={2} aria-hidden />
            )}
            {isFullscreen ? "Sair" : "Tela cheia"}
          </button>
        </div>
      </div>

      <div
        className="absolute grid"
        style={{
          top: 142,
          left: 84,
          right: 84,
          height: 468,
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 22,
        }}
      >
        <section
          className="relative overflow-hidden"
          style={{
            padding: "44px 48px",
            background: "linear-gradient(145deg, oklch(1 0 0 / 0.075), oklch(1 0 0 / 0.025))",
            border: "1px solid oklch(1 0 0 / 0.1)",
          }}
        >
          <div
            className="uppercase font-bold"
            style={{ fontSize: 13, letterSpacing: "0.34em", color: "var(--onmid-lime)" }}
          >
            {greeting}, Alaor
          </div>
          <h1
            style={{
              marginTop: 24,
              maxWidth: 760,
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 68,
              lineHeight: 0.96,
              letterSpacing: "-0.045em",
            }}
          >
            O que vamos colocar{" "}
            <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>ON</span> hoje?
          </h1>
          <p
            style={{
              marginTop: 26,
              maxWidth: 690,
              fontSize: 19,
              lineHeight: 1.5,
              color: "oklch(1 0 0 / 0.58)",
            }}
          >
            Sua central para revisar apresentações, organizar prioridades e conduzir os treinamentos
            da Onmid.
          </p>
          <div
            className="absolute grid"
            style={{
              left: 48,
              right: 48,
              bottom: 38,
              gridTemplateColumns: "120px minmax(0, 1fr)",
              gap: 28,
              alignItems: "start",
            }}
          >
            <div className="flex flex-col">
              <span
                className="uppercase font-bold"
                style={{
                  display: "block",
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  color: "oklch(1 0 0 / 0.35)",
                }}
              >
                Agora
              </span>
              <strong
                className="tabular-nums"
                style={{
                  display: "block",
                  marginTop: 7,
                  fontFamily: "var(--font-display)",
                  fontSize: 35,
                  lineHeight: 1,
                }}
              >
                {time}
              </strong>
            </div>
            <div className="flex flex-col">
              <span
                className="uppercase font-bold"
                style={{
                  display: "block",
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  color: "oklch(1 0 0 / 0.35)",
                }}
              >
                Hoje
              </span>
              <strong
                style={{
                  display: "block",
                  marginTop: 8,
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  lineHeight: 1,
                  letterSpacing: "-0.025em",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
              >
                {date}
              </strong>
            </div>
          </div>
        </section>

        <div className="grid" style={{ gridTemplateRows: "150px 1fr", gap: 18 }}>
          <section className="grid grid-cols-3" style={{ gap: 12 }}>
            {[
              {
                icon: MapPin,
                label: "Localização",
                value: "Londrina · PR",
                detail: "Brasil",
              },
              {
                icon: CloudSun,
                label: "Temperatura",
                value: weather ? `${weather.current.temp}°C` : "—",
                detail: weather ? (WMO[weather.current.code] ?? "Tempo local") : "Carregando clima",
                interactive: true,
              },
              {
                icon: Compass,
                label: "Status",
                value: "Em sessão",
                detail: "Ambiente ativo",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => {
                    if (item.interactive) setWeatherOpen(true);
                  }}
                  className={`text-left transition-all ${
                    item.interactive
                      ? "cursor-pointer hover:-translate-y-1 hover:bg-white/[0.07]"
                      : ""
                  }`}
                  style={{
                    width: "100%",
                    padding: "22px 22px 18px",
                    background: "oklch(1 0 0 / 0.045)",
                    border: "1px solid oklch(1 0 0 / 0.09)",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={19} strokeWidth={1.8} style={{ color: "var(--onmid-lime)" }} />
                    <span
                      className="uppercase font-bold"
                      style={{ fontSize: 8, letterSpacing: "0.22em", color: "oklch(1 0 0 / 0.28)" }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <strong
                    style={{
                      display: "block",
                      marginTop: 17,
                      fontFamily: "var(--font-display)",
                      fontSize: 22,
                    }}
                  >
                    {item.value}
                  </strong>
                  <span
                    style={{
                      display: "block",
                      marginTop: 6,
                      fontSize: 11,
                      color: "oklch(1 0 0 / 0.42)",
                    }}
                  >
                    {item.detail}
                  </span>
                  {item.interactive && (
                    <span
                      className="absolute"
                      style={{ width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)" }}
                    >
                      Abrir previsão detalhada
                    </span>
                  )}
                </button>
              );
            })}
          </section>

          <section
            style={{
              padding: "26px 28px",
              background: "oklch(1 0 0 / 0.045)",
              border: "1px solid oklch(1 0 0 / 0.09)",
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CalendarDays size={20} style={{ color: "var(--onmid-lime)" }} />
                <strong style={{ fontFamily: "var(--font-display)", fontSize: 21 }}>
                  Agenda do dia
                </strong>
              </div>
              <span
                className="uppercase"
                style={{ fontSize: 8, letterSpacing: "0.22em", color: "oklch(1 0 0 / 0.3)" }}
              >
                Resumo local
              </span>
            </div>
            <div className="grid grid-cols-3" style={{ marginTop: 24, gap: 12 }}>
              {TODAY_AGENDA.map((item) => (
                <div
                  key={item.time}
                  style={{
                    minHeight: 174,
                    padding: "18px 18px 16px",
                    background: item.active ? "oklch(0.88 0.24 138 / 0.1)" : "oklch(0 0 0 / 0.12)",
                    borderTop: item.active
                      ? "2px solid var(--onmid-lime)"
                      : "2px solid oklch(1 0 0 / 0.08)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Clock3
                      size={13}
                      style={{ color: item.active ? "var(--onmid-lime)" : "oklch(1 0 0 / 0.35)" }}
                    />
                    <span
                      className="uppercase font-bold"
                      style={{
                        fontSize: 9,
                        letterSpacing: "0.2em",
                        color: item.active ? "var(--onmid-lime)" : "oklch(1 0 0 / 0.35)",
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <strong
                    style={{
                      display: "block",
                      marginTop: 16,
                      fontFamily: "var(--font-display)",
                      fontSize: 17,
                      lineHeight: 1.15,
                    }}
                  >
                    {item.title}
                  </strong>
                  <p
                    style={{
                      marginTop: 10,
                      fontSize: 11,
                      lineHeight: 1.45,
                      color: "oklch(1 0 0 / 0.45)",
                    }}
                  >
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="absolute" style={{ left: 84, right: 84, top: 642 }}>
        <div className="flex items-end justify-between">
          <div>
            <span
              className="uppercase font-bold"
              style={{ fontSize: 11, letterSpacing: "0.3em", color: "var(--onmid-lime)" }}
            >
              Biblioteca Onmid
            </span>
            <h2
              style={{
                marginTop: 9,
                fontFamily: "var(--font-display)",
                fontSize: 30,
                fontWeight: 900,
              }}
            >
              Continue de onde quiser.
            </h2>
          </div>
          <span style={{ fontSize: 12, color: "oklch(1 0 0 / 0.35)" }}>
            {TRAININGS.length} treinamentos disponíveis
          </span>
        </div>

        <div className="grid grid-cols-4" style={{ marginTop: 20, gap: 16 }}>
          {TRAININGS.map((t) => (
            <button
              key={t.to}
              type="button"
              onClick={() => openTraining(t)}
              className="group block h-full border text-left transition-all duration-300 hover:-translate-y-1"
              style={{
                padding: "21px 22px 19px",
                minHeight: 256,
                background:
                  "linear-gradient(180deg, oklch(1 0 0 / 0.05) 0%, oklch(1 0 0 / 0.02) 100%)",
                borderColor: "oklch(1 0 0 / 0.12)",
              }}
            >
              <div
                className="uppercase font-bold"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  color: "oklch(0.85 0.18 138)",
                  marginBottom: 16,
                }}
              >
                {t.eyebrow}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: 25,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  marginBottom: 14,
                }}
              >
                {t.title}
              </h2>
              <p
                className="opacity-60"
                style={{ fontSize: 12, lineHeight: 1.42, marginBottom: 19 }}
              >
                {t.description}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className="uppercase opacity-60"
                  style={{ fontSize: 9, letterSpacing: "0.18em" }}
                >
                  {t.meta}
                </span>
                <span
                  className="inline-flex items-center justify-center rounded-full transition-transform group-hover:translate-x-1"
                  style={{
                    width: 34,
                    height: 34,
                    background: "var(--onmid-lime)",
                    color: "oklch(0.13 0.005 240)",
                  }}
                >
                  <Play size={14} fill="currentColor" aria-hidden />
                </span>
              </div>
            </button>
          ))}
        </div>
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

      {weatherOpen && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center"
          style={{ background: "oklch(0.06 0.004 240 / 0.84)", backdropFilter: "blur(14px)" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="weather-title"
          onClick={() => setWeatherOpen(false)}
        >
          <div
            className="relative overflow-hidden"
            style={{
              width: 1080,
              minHeight: 720,
              background:
                "radial-gradient(100% 100% at 0% 0%, oklch(0.24 0.035 210), oklch(0.13 0.008 240) 62%, oklch(0.1 0.005 240))",
              border: "1px solid oklch(1 0 0 / 0.12)",
              boxShadow: "0 42px 120px oklch(0 0 0 / 0.55)",
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setWeatherOpen(false)}
              className="absolute flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
              style={{
                right: 28,
                top: 26,
                width: 44,
                height: 44,
                color: "white",
                border: "1px solid oklch(1 0 0 / 0.12)",
              }}
              aria-label="Fechar previsão"
            >
              <X size={20} aria-hidden />
            </button>

            <div style={{ padding: "42px 48px 40px" }}>
              <div className="flex items-start justify-between" style={{ paddingRight: 70 }}>
                <div>
                  <div
                    className="flex items-center gap-2 uppercase font-bold"
                    style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--onmid-lime)" }}
                  >
                    <MapPin size={14} aria-hidden />
                    Londrina · Paraná
                  </div>
                  <h2
                    id="weather-title"
                    style={{
                      marginTop: 18,
                      fontFamily: "var(--font-display)",
                      fontSize: 42,
                      lineHeight: 1,
                      fontWeight: 900,
                    }}
                  >
                    Previsão detalhada de hoje
                  </h2>
                  <p style={{ marginTop: 12, fontSize: 14, color: "oklch(1 0 0 / 0.48)" }}>
                    Dados em tempo real fornecidos pela API pública Open‑Meteo.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => void loadWeather()}
                  className="flex items-center gap-2 rounded-full transition-colors hover:bg-white/10"
                  style={{
                    marginTop: 52,
                    padding: "10px 14px",
                    color: "oklch(1 0 0 / 0.58)",
                    fontSize: 11,
                    border: "1px solid oklch(1 0 0 / 0.1)",
                  }}
                >
                  <RefreshCw size={14} className={weatherLoading ? "animate-spin" : ""} />
                  Atualizar
                </button>
              </div>

              {weather ? (
                <>
                  <div
                    className="grid"
                    style={{ marginTop: 36, gridTemplateColumns: "0.8fr 1.2fr", gap: 18 }}
                  >
                    <div
                      style={{
                        padding: "30px 32px",
                        background: "oklch(1 0 0 / 0.06)",
                        border: "1px solid oklch(1 0 0 / 0.1)",
                      }}
                    >
                      <CloudSun
                        size={36}
                        strokeWidth={1.5}
                        style={{ color: "var(--onmid-lime)" }}
                      />
                      <strong
                        style={{
                          display: "block",
                          marginTop: 22,
                          fontFamily: "var(--font-display)",
                          fontSize: 82,
                          lineHeight: 0.9,
                        }}
                      >
                        {weather.current.temp}°
                      </strong>
                      <span
                        style={{ display: "block", marginTop: 18, fontSize: 18, fontWeight: 700 }}
                      >
                        {WMO[weather.current.code] ?? "Condição atual"}
                      </span>
                      <span
                        style={{
                          display: "block",
                          marginTop: 8,
                          fontSize: 13,
                          color: "oklch(1 0 0 / 0.48)",
                        }}
                      >
                        Sensação de {weather.current.apparent}° · Máx. {weather.daily.max}° · Mín.{" "}
                        {weather.daily.min}°
                      </span>
                    </div>

                    <div className="grid grid-cols-2" style={{ gap: 12 }}>
                      {[
                        {
                          icon: Droplets,
                          label: "Umidade",
                          value: `${weather.current.humidity}%`,
                        },
                        {
                          icon: Wind,
                          label: "Vento",
                          value: `${weather.current.wind} km/h`,
                        },
                        {
                          icon: Umbrella,
                          label: "Chance de chuva",
                          value: `${weather.daily.rainChance}%`,
                        },
                        {
                          icon: Sunrise,
                          label: "Nascer do sol",
                          value: new Date(weather.daily.sunrise).toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          }),
                        },
                      ].map((metric) => {
                        const Icon = metric.icon;
                        return (
                          <div
                            key={metric.label}
                            style={{
                              padding: "23px 24px",
                              background: "oklch(1 0 0 / 0.045)",
                              border: "1px solid oklch(1 0 0 / 0.09)",
                            }}
                          >
                            <Icon size={20} style={{ color: "var(--onmid-lime)" }} />
                            <span
                              className="uppercase font-bold"
                              style={{
                                display: "block",
                                marginTop: 15,
                                fontSize: 9,
                                letterSpacing: "0.2em",
                                color: "oklch(1 0 0 / 0.35)",
                              }}
                            >
                              {metric.label}
                            </span>
                            <strong
                              style={{
                                display: "block",
                                marginTop: 8,
                                fontFamily: "var(--font-display)",
                                fontSize: 23,
                              }}
                            >
                              {metric.value}
                            </strong>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-between" style={{ marginTop: 24 }}>
                    <strong style={{ fontFamily: "var(--font-display)", fontSize: 20 }}>
                      Próximas horas
                    </strong>
                    <div
                      className="flex items-center gap-5"
                      style={{ color: "oklch(1 0 0 / 0.42)", fontSize: 11 }}
                    >
                      <span className="flex items-center gap-2">
                        <Sunset size={14} style={{ color: "var(--onmid-lime)" }} />
                        Pôr do sol{" "}
                        {new Date(weather.daily.sunset).toLocaleTimeString("pt-BR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      <span>
                        Atualizado às{" "}
                        {weather.updatedAt.toLocaleTimeString("pt-BR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-6" style={{ marginTop: 16, gap: 10 }}>
                    {weather.hourly.map((hour) => (
                      <div
                        key={hour.time}
                        style={{
                          padding: "18px 14px",
                          textAlign: "center",
                          background: "oklch(1 0 0 / 0.045)",
                          border: "1px solid oklch(1 0 0 / 0.08)",
                        }}
                      >
                        <span
                          className="font-mono"
                          style={{ fontSize: 11, color: "oklch(1 0 0 / 0.45)" }}
                        >
                          {new Date(hour.time).toLocaleTimeString("pt-BR", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                        <CloudSun
                          size={22}
                          strokeWidth={1.5}
                          style={{ margin: "14px auto 0", color: "var(--onmid-lime)" }}
                        />
                        <strong
                          style={{
                            display: "block",
                            marginTop: 12,
                            fontFamily: "var(--font-display)",
                            fontSize: 24,
                          }}
                        >
                          {hour.temp}°
                        </strong>
                        <span
                          style={{
                            display: "block",
                            marginTop: 8,
                            fontSize: 10,
                            color: "oklch(1 0 0 / 0.4)",
                          }}
                        >
                          {hour.rainChance}% chuva
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex items-center justify-center" style={{ minHeight: 500 }}>
                  <RefreshCw
                    size={30}
                    className="animate-spin"
                    style={{ color: "var(--onmid-lime)" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div
        className="absolute flex items-center justify-between uppercase"
        style={{
          left: 84,
          right: 84,
          bottom: 28,
          fontSize: 10,
          letterSpacing: "0.24em",
          color: "oklch(1 0 0 / 0.28)",
        }}
      >
        <span>© Onmid · make strategy move</span>
        <span className="flex items-center gap-2">
          treinamentos.onmid.app <ArrowUpRight size={12} aria-hidden />
        </span>
      </div>
    </div>
  );
}
