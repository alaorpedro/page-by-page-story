import logoWhite from "@/assets/onmid-logo-white.png";
import logoDark from "@/assets/onmid-logo-dark.png";
import logoIcon from "@/assets/onmid-icon.png";

type Props = {
  size?: number;
  faded?: boolean;
  iconOnly?: boolean;
  /** "dark" = use dark wordmark (for light backgrounds) */
  tone?: "light" | "dark";
};

export function OnmidMark({ size = 40, faded = false, iconOnly = false, tone = "light" }: Props) {
  const src = iconOnly ? logoIcon : tone === "dark" ? logoDark : logoWhite;
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
