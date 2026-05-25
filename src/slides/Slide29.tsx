import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide29() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 opacity-25 flex flex-col items-center justify-center px-[8%] text-center">
        <p className="slide-subtitle text-foreground">
          As pessoas estão acostumadas a clicar<br />em tudo!
        </p>
        <div className="mt-32">
          <OnmidLogo size={150} />
        </div>
      </div>

      <div
        className="absolute inset-x-[-10%] top-[28%] py-14 origin-center animate-scale-in"
        style={{
          background: "var(--onmid-lime)",
          transform: "rotate(-10deg)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <p
          className="slide-title-lg text-center"
          style={{ color: "var(--onmid-bg)" }}
        >
          NÃO ATENDA PARA<br />VENDER;{" "}
          <span style={{ color: "oklch(0.1 0.005 240)" }}>
            ENTENDA<br />PARA ATENDER
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
