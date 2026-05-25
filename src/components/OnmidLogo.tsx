import logoWhite from "@/assets/onmid-logo-white.png";
import logoDark from "@/assets/onmid-logo-dark.png";
import logoSlogan from "@/assets/onmid-logo-slogan.png";

type Props = {
  className?: string;
  size?: number;
  variant?: "white" | "dark" | "slogan";
};

/**
 * Official Onmid wordmark. White variant for dark backgrounds,
 * dark variant for light backgrounds, slogan variant with "make strategy move".
 */
export function OnmidLogo({ className, size = 180, variant = "white" }: Props) {
  const src =
    variant === "dark" ? logoDark : variant === "slogan" ? logoSlogan : logoWhite;
  // Native PNG aspect ratios:
  // white/dark ≈ 4.0 : 1, slogan ≈ 1.5 : 1
  const ratio = variant === "slogan" ? 1.5 : 4;
  return (
    <img
      src={src}
      alt="Onmid"
      width={size}
      height={size / ratio}
      className={className}
      style={{ display: "block", height: "auto" }}
    />
  );
}
