type Props = { className?: string; size?: number };

/**
 * Onmid brand mark: "on.mid" wordmark with a green dot,
 * and a small toggle/pill underneath the "i".
 */
export function OnmidLogo({ className, size = 180 }: Props) {
  return (
    <svg
      viewBox="0 0 360 130"
      width={size}
      height={(size * 130) / 360}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Onmid"
    >
      {/* Wordmark */}
      <text
        x="0"
        y="78"
        fontFamily="Sora, system-ui, sans-serif"
        fontWeight={700}
        fontSize="92"
        letterSpacing="-2"
        fill="white"
      >
        on
      </text>
      {/* Green dot between on and mid */}
      <circle cx="138" cy="65" r="8" fill="oklch(0.72 0.27 142)" />
      <text
        x="156"
        y="78"
        fontFamily="Sora, system-ui, sans-serif"
        fontWeight={700}
        fontSize="92"
        letterSpacing="-2"
        fill="white"
      >
        mid
      </text>
      {/* Green dot of the "i" */}
      <circle cx="237" cy="36" r="8" fill="oklch(0.72 0.27 142)" />

      {/* Toggle pill under "id" */}
      <rect
        x="216"
        y="100"
        width="64"
        height="24"
        rx="12"
        fill="oklch(0.72 0.27 142)"
      />
      <circle cx="270" cy="112" r="9" fill="white" />
    </svg>
  );
}
