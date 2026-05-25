import { useEffect, useRef, useState, type ReactNode } from "react";

/** Renders a 1920x1080 child scaled to fit the parent container. */
export function ScaledSlide({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const compute = () => {
      const { clientWidth, clientHeight } = el;
      const s = Math.min(clientWidth / 1920, clientHeight / 1080);
      setScale(s);
    };
    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(el);
    window.addEventListener("resize", compute);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", compute);
    };
  }, []);

  return (
    <div ref={ref} className="slide-stage">
      <div
        className="slide-canvas"
        style={{ ["--slide-scale" as string]: scale }}
      >
        {children}
      </div>
    </div>
  );
}
