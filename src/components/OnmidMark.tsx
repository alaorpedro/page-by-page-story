type Props = { size?: number; faded?: boolean };

/**
 * Inline Onmid mark: small circular ring with center dot + "onmid" wordmark.
 * Used in slide chrome (header / faded corner).
 */
export function OnmidMark({ size = 32, faded = false }: Props) {
  const dot = Math.max(4, Math.round(size / 4));
  const border = Math.max(2, Math.round(size / 8));
  const fontSize = Math.round(size * 0.95);
  return (
    <div
      className={`flex items-center gap-3 ${
        faded ? "opacity-30 grayscale" : ""
      }`}
    >
      <div
        className="rounded-full flex items-center justify-center"
        style={{
          width: size,
          height: size,
          border: `${border}px solid var(--onmid-lime)`,
        }}
      >
        <div
          className="rounded-full bg-foreground"
          style={{ width: dot, height: dot }}
        />
      </div>
      <span
        className="font-extrabold text-foreground tracking-tighter"
        style={{
          fontFamily: "var(--font-display)",
          fontSize,
          lineHeight: 1,
        }}
      >
        onmid
      </span>
    </div>
  );
}
