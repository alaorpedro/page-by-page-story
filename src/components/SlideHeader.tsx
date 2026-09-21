type Props = {
  /** Número exibido antes do ponto lime (ex.: "15"). */
  number: string;
  /** Rótulo da seção, em caixa alta. */
  label: string;
  tone?: "dark" | "light";
};

/**
 * Cabeçalho numerado dos slides de conteúdo.
 * Mesma marcação usada nos slides 01–14 e 17, extraída para garantir
 * que número, filete e rótulo fiquem idênticos em todo o deck.
 */
export function SlideHeader({ number, label, tone = "dark" }: Props) {
  const isLight = tone === "light";
  const text = isLight ? "oklch(0.18 0.01 240)" : "oklch(0.98 0 0)";
  const muted = isLight ? "oklch(0.18 0.01 240 / 0.55)" : "oklch(1 0 0 / 0.55)";
  const hairline = isLight ? "oklch(0 0 0 / 0.12)" : "oklch(1 0 0 / 0.15)";

  return (
    <div className="absolute left-16 right-16 top-44 flex items-center gap-8 animate-fade-in-up z-30">
      <div
        className="font-extrabold"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 64,
          lineHeight: 1,
          color: text,
        }}
      >
        {number}
        <span className="text-lime">.</span>
      </div>
      <div className="flex-1 h-px max-w-[600px]" style={{ background: hairline }} />
      <div
        className="uppercase font-bold mr-auto"
        style={{ fontSize: 18, letterSpacing: "0.35em", color: muted }}
      >
        {label}
      </div>
    </div>
  );
}
