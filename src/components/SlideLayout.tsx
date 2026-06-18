import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { House } from "lucide-react";
import { OnmidMark } from "./OnmidMark";
import { useSlideMeta } from "./SlideContext";
import blobLime from "@/assets/blob-lime.png";
import blobDark from "@/assets/blob-dark.png";

type Variant = "hero" | "content" | "statement" | "bare";
type Tone = "dark" | "light";

type Props = {
  children: ReactNode;
  variant?: Variant;
  /** "dark" = charcoal bg + light text. "light" = cream bg + dark text. */
  tone?: Tone;
  kicker?: string;
  /** Optional giant background letter/number behind content (editorial accent). */
  bgLetter?: string;
  /** Optional decorative blob: position + size (px in 1920x1080 space). */
  blob?: {
    variant?: "lime" | "dark";
    side?: "left" | "right";
    top?: number;
    size?: number;
    opacity?: number;
  };
  bg?: string;
  showHomeButton?: boolean;
  showHeaderIcon?: boolean;
  /** @deprecated */ arcs?: unknown;
  /** @deprecated */ logo?: unknown;
};

const DARK_BG =
  "radial-gradient(ellipse 90% 70% at 50% 40%, oklch(0.21 0.008 240) 0%, oklch(0.13 0.005 240) 100%)";
const LIGHT_BG =
  "radial-gradient(ellipse 90% 70% at 50% 40%, oklch(0.985 0.004 90) 0%, oklch(0.94 0.008 90) 100%)";

export function SlideLayout({
  children,
  variant = "content",
  tone = "dark",
  kicker,
  bgLetter,
  blob,
  bg,
  showHomeButton = false,
  showHeaderIcon = true,
}: Props) {
  const { index, total } = useSlideMeta();
  const counter = `${String(index).padStart(2, "0")} // ${String(total).padStart(2, "0")}`;
  const isLight = tone === "light";

  const textBase = isLight ? "oklch(0.18 0.01 240)" : "oklch(0.98 0 0)";
  const textMuted = isLight ? "oklch(0.18 0.01 240 / 0.55)" : "oklch(1 0 0 / 0.6)";
  const chromeMuted = isLight ? "oklch(0.18 0.01 240 / 0.35)" : "oklch(1 0 0 / 0.25)";
  const rhythmTrack = isLight ? "oklch(0 0 0 / 0.06)" : "oklch(1 0 0 / 0.05)";

  return (
    <div
      className="slide-content relative"
      style={{
        background: bg ?? (isLight ? LIGHT_BG : DARK_BG),
        color: textBase,
      }}
    >
      {/* Giant editorial background letter */}
      {bgLetter && (
        <div
          aria-hidden
          className="absolute pointer-events-none select-none animate-fade-in"
          style={{
            left: "-4%",
            top: "-8%",
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: 1400,
            lineHeight: 1,
            letterSpacing: "-0.08em",
            color: isLight ? "oklch(0 0 0 / 0.04)" : "oklch(1 0 0 / 0.035)",
          }}
        >
          {bgLetter}
        </div>
      )}

      {/* Decorative 3D blob */}
      {blob && (
        <img
          src={blob.variant === "dark" ? blobDark : blobLime}
          alt=""
          aria-hidden
          className="absolute pointer-events-none animate-fade-in"
          style={
            {
              [blob.side ?? "right"]: -120,
              top: blob.top ?? 80,
              width: blob.size ?? 720,
              height: "auto",
              opacity: blob.opacity ?? 0.95,
              filter: "drop-shadow(0 40px 80px oklch(0 0 0 / 0.35))",
            } as React.CSSProperties
          }
          loading="lazy"
        />
      )}

      {/* Hero decorative rings — only on dark hero */}
      {variant === "hero" && !isLight && (
        <>
          <div
            className="absolute rounded-full pointer-events-none animate-fade-in"
            style={{
              right: -80,
              top: -80,
              width: 1200,
              height: 1200,
              border: "120px solid oklch(0.88 0.24 138 / 0.05)",
            }}
          />
          <div
            className="absolute rounded-full pointer-events-none animate-fade-in"
            style={{
              right: -40,
              top: -40,
              width: 1200,
              height: 1200,
              border: "2px solid oklch(0.88 0.24 138 / 0.2)",
            }}
          />
        </>
      )}

      {/* Top header bar */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-16 pt-12 z-30 animate-fade-in">
        {showHeaderIcon ? <OnmidMark size={44} iconOnly /> : <span />}
        <div className="flex items-center gap-4">
          {showHomeButton && (
            <Link
              data-slide-chrome
              to="/"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/10"
              style={{ color: chromeMuted }}
              aria-label="Voltar para a home de treinamentos"
            >
              <House size={15} strokeWidth={2.2} aria-hidden />
            </Link>
          )}
          <div className="font-mono tracking-[0.25em]" style={{ fontSize: 11, color: chromeMuted }}>
            {counter}
          </div>
        </div>
      </div>

      {/* Content slot */}
      <div className="absolute inset-0 z-20">{children}</div>

      {/* Faded corner brand */}
      {(variant === "content" || variant === "statement") && (
        <div className="absolute bottom-14 right-16 z-20">
          <OnmidMark size={22} faded tone={tone} />
        </div>
      )}

      {/* Bottom rhythm bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex z-30">
        <div className="h-full" style={{ width: "33.33%", background: "var(--onmid-lime)" }} />
        <div className="h-full flex-1" style={{ background: rhythmTrack }} />
      </div>

      {kicker && (
        <div
          className="absolute top-32 right-16 z-30 uppercase font-semibold"
          style={{ fontSize: 18, letterSpacing: "0.3em", color: textMuted }}
        >
          {kicker}
        </div>
      )}
    </div>
  );
}
