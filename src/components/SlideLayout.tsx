import type { ReactNode } from "react";
import { SlideBackground } from "./SlideBackground";
import { OnmidLogo } from "./OnmidLogo";

type Props = {
  children: ReactNode;
  arcs?: "tl" | "tr" | "bl" | "br" | "corners" | "none";
  logo?: "tl" | "br" | "bc" | "tc" | "none";
  logoSize?: number;
};

/**
 * Standard slide layout. Renders the Onmid background and an optional
 * logo placement. Children render inside the 1920x1080 stage.
 */
export function SlideLayout({
  children,
  arcs = "corners",
  logo = "br",
  logoSize = 140,
}: Props) {
  return (
    <div className="slide-content">
      <SlideBackground arcs={arcs} />
      <div className="absolute inset-0">{children}</div>

      {logo === "tl" && (
        <div className="absolute top-14 left-14 animate-[fade-in_0.6s_ease-out_both]">
          <OnmidLogo size={logoSize} />
        </div>
      )}
      {logo === "br" && (
        <div className="absolute bottom-14 right-16 animate-[fade-in_0.6s_ease-out_both]">
          <OnmidLogo size={logoSize} />
        </div>
      )}
      {logo === "bc" && (
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 animate-[fade-in_0.6s_ease-out_both]">
          <OnmidLogo size={logoSize} />
        </div>
      )}
      {logo === "tc" && (
        <div className="absolute top-14 left-1/2 -translate-x-1/2 animate-[fade-in_0.6s_ease-out_both]">
          <OnmidLogo size={logoSize} />
        </div>
      )}
    </div>
  );
}
