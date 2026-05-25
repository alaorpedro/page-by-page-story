import { useEffect, useState } from "react";

type Weather = { temp: number; code: number } | null;

const WMO: Record<number, string> = {
  0: "Céu limpo", 1: "Predom. limpo", 2: "Parc. nublado", 3: "Nublado",
  45: "Neblina", 48: "Neblina gelada",
  51: "Garoa fraca", 53: "Garoa", 55: "Garoa forte",
  61: "Chuva fraca", 63: "Chuva", 65: "Chuva forte",
  71: "Neve fraca", 73: "Neve", 75: "Neve forte",
  80: "Pancadas", 81: "Pancadas fortes", 82: "Temporal",
  95: "Tempestade", 96: "Tempestade c/ granizo", 99: "Tempestade severa",
};

function fmtTime(d: Date) {
  return d.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
  });
}
function fmtDate(d: Date) {
  return d.toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    weekday: "long", day: "2-digit", month: "long", year: "numeric",
  });
}

export function LiveInfoBar() {
  const [now, setNow] = useState<Date | null>(null);
  const [weather, setWeather] = useState<Weather>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);


  useEffect(() => {
    let cancelled = false;
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=-23.31&longitude=-51.16&current=temperature_2m,weather_code&timezone=America/Sao_Paulo"
    )
      .then((r) => r.json())
      .then((j) => {
        if (cancelled) return;
        const c = j?.current;
        if (c) setWeather({ temp: Math.round(c.temperature_2m), code: c.weather_code });
      })
      .catch(() => {});
    const id = setInterval(() => {
      fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=-23.31&longitude=-51.16&current=temperature_2m,weather_code&timezone=America/Sao_Paulo"
      )
        .then((r) => r.json())
        .then((j) => {
          const c = j?.current;
          if (c) setWeather({ temp: Math.round(c.temperature_2m), code: c.weather_code });
        })
        .catch(() => {});
    }, 10 * 60 * 1000);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  const Item = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col items-end gap-1">
      <span
        className="uppercase text-foreground/40 font-bold"
        style={{ fontSize: 11, letterSpacing: "0.35em" }}
      >
        {label}
      </span>
      <span
        className="text-foreground font-black tabular-nums"
        style={{ fontSize: 22, letterSpacing: "-0.01em", lineHeight: 1 }}
      >
        {value}
      </span>
    </div>
  );

  return (
    <div
      className="absolute right-16 top-44 animate-fade-in-up flex items-stretch gap-8"
      style={{ animationDelay: "0.25s" }}
    >
      <Item label="Agora · Londrina" value={fmtTime(now)} />
      <div style={{ width: 1, background: "oklch(1 0 0 / 0.12)" }} />
      <Item
        label="Tempo"
        value={weather ? `${weather.temp}°C` : "—"}
      />
      <div style={{ width: 1, background: "oklch(1 0 0 / 0.12)" }} />
      <div className="flex flex-col items-end gap-1">
        <span
          className="uppercase text-foreground/40 font-bold"
          style={{ fontSize: 11, letterSpacing: "0.35em" }}
        >
          Hoje
        </span>
        <span
          className="text-foreground/85 font-semibold"
          style={{ fontSize: 14, lineHeight: 1 }}
        >
          {fmtDate(now)}
        </span>
        {weather && (
          <span
            className="text-foreground/55"
            style={{ fontSize: 12, lineHeight: 1 }}
          >
            {WMO[weather.code] ?? "—"}
          </span>
        )}
      </div>
      <div style={{ width: 1, background: "oklch(1 0 0 / 0.12)" }} />
      <div className="flex flex-col items-end gap-1">
        <span
          className="uppercase font-bold"
          style={{
            fontSize: 11,
            letterSpacing: "0.35em",
            color: "var(--onmid-lime)",
          }}
        >
          Ao vivo
        </span>
        <span className="flex items-center gap-2 text-foreground/85" style={{ fontSize: 14 }}>
          <span
            className="inline-block rounded-full animate-pulse"
            style={{ width: 8, height: 8, background: "var(--onmid-lime)" }}
          />
          Em sessão
        </span>
      </div>
    </div>
  );
}
