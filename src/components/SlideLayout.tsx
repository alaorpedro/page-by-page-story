import type { ReactNode } from "react";
import { OnmidMark } from "./OnmidMark";
import { useSlideMeta } from "./SlideContext";

type Variant = "hero" | "content" | "statement" | "bare";

type Props = {
  children: ReactNode;
  variant?: Variant;
  kicker?: string;
  bg?: string;
  /** @deprecated legacy prop — ignored. Chrome is owned by SlideLayout now. */
  arcs?: unknown;
  /** @deprecated legacy prop — ignored. Chrome is owned by SlideLayout now. */
  logo?: unknown;
};

/**
 * Unified slide chrome (Geometric Constructivist).
 * - Always renders top header bar (logo mark + slide counter)
 * - Always renders bottom 1/3 lime + 2/3 white-5 rhythm bar
 * - Hero variant adds decorative concentric rings top-right
 * - Content variant reserves padded area + faded corner brand bottom-right
 * - Statement variant centers a single big-statement child
 * - Bare variant: only chrome, children control all spacing
 */
export function SlideLayout({
  children,
  variant = "content",
  kicker,
  bg,
}: Props) {
  const { index, total } = useSlideMeta();
  const counter = `${String(index).padStart(2, "0")} // ${String(total).padStart(2, "0")}`;

  return (
    <div
      className="slide-content relative"
      style={bg ? { background: bg } : undefined}
    >
      {/* Background field */}
      {!bg && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% 40%, oklch(0.21 0.008 240) 0%, oklch(0.13 0.005 240) 100%)",
          }}
        />
      )}

      {/* Hero decorative rings */}
      {variant === "hero" && (
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
        <OnmidMark size={44} iconOnly />
        <div
          className="text-foreground/25 font-mono tracking-[0.25em]"
          style={{ fontSize: 11 }}
        >
          {counter}
        </div>
      </div>

      {/* Content slot */}
      <div className="absolute inset-0 z-20">{children}</div>

      {/* Faded corner brand on content/statement slides */}
      {(variant === "content" || variant === "statement") && (
        <div className="absolute bottom-14 right-16 z-20">
          <OnmidMark size={22} faded />
        </div>
      )}

      {/* Bottom rhythm bar */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex z-30">
        <div
          className="h-full"
          style={{ width: "33.33%", background: "var(--onmid-lime)" }}
        />
        <div
          className="h-full flex-1"
          style={{ background: "oklch(1 0 0 / 0.05)" }}
        />
      </div>

      {/* Optional kicker (rarely used) */}
      {kicker && (
        <div
          className="absolute top-32 right-16 z-30 text-foreground/40 uppercase font-semibold"
          style={{ fontSize: 18, letterSpacing: "0.3em" }}
        >
          {kicker}
        </div>
      )}
    </div>
  );
}
