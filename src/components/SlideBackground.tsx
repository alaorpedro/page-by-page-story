type Props = {
  arcs?: "tl" | "tr" | "bl" | "br" | "corners" | "none";
};

/**
 * Onmid signature background: dark + perspective grid + scratches + green arcs.
 */
export function SlideBackground({ arcs = "corners" }: Props) {
  return (
    <div className="onmid-bg">
      <div className="onmid-bg-scratches" />
      <svg className="onmid-bg-arcs" viewBox="0 0 1920 1080" preserveAspectRatio="none">
        {(arcs === "tr" || arcs === "corners") && (
          <circle
            cx="1880"
            cy="-40"
            r="380"
            stroke="oklch(0.72 0.27 142)"
            strokeWidth="3"
            fill="none"
            opacity="0.85"
          />
        )}
        {(arcs === "tl" || arcs === "corners") && (
          <circle
            cx="120"
            cy="-30"
            r="320"
            stroke="oklch(0.72 0.27 142)"
            strokeWidth="3"
            fill="none"
            opacity="0.75"
          />
        )}
        {(arcs === "bl" || arcs === "corners") && (
          <circle
            cx="-80"
            cy="1120"
            r="420"
            stroke="oklch(0.72 0.27 142)"
            strokeWidth="3"
            fill="none"
            opacity="0.85"
          />
        )}
        {(arcs === "br" || arcs === "corners") && (
          <circle
            cx="2000"
            cy="1140"
            r="380"
            stroke="oklch(0.72 0.27 142)"
            strokeWidth="3"
            fill="none"
            opacity="0.8"
          />
        )}
      </svg>
    </div>
  );
}
