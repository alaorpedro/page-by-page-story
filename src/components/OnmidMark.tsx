import logoWhite from "@/assets/onmid-logo-white.png";
import logoIcon from "@/assets/onmid-icon.png";

type Props = { size?: number; faded?: boolean; iconOnly?: boolean };

/**
 * Real Onmid logo (PNG). Uses the white wordmark on dark backgrounds.
 * Set iconOnly to render just the circular icon mark.
 */
export function OnmidMark({ size = 40, faded = false, iconOnly = false }: Props) {
  const src = iconOnly ? logoIcon : logoWhite;
  return (
    <img
      src={src}
      alt="Onmid"
      style={{
        height: size,
        width: "auto",
        objectFit: "contain",
        opacity: faded ? 0.25 : 1,
        filter: faded ? "grayscale(1)" : undefined,
      }}
      draggable={false}
    />
  );
}
