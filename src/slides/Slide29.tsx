import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide29() {
  return (
    <SlideLayout arcs="corners" logo="none">
      {/* Faded slide 28 content underneath */}
      <div className="absolute inset-0 opacity-25 flex flex-col items-center justify-center px-[8%] text-center">
        <p
          className="text-white"
          style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.3 }}
        >
          As pessoas estão acostumadas a clicar<br />
          em tudo!
        </p>
        <div className="mt-32">
          <OnmidLogo size={150} />
        </div>
      </div>

      {/* Diagonal yellow banner */}
      <div
        className="absolute inset-x-[-10%] top-[28%] py-14 origin-center animate-[scale-in_1s_cubic-bezier(0.22,1,0.36,1)_both]"
        style={{
          background: "var(--onmid-lime)",
          transform: "rotate(-10deg)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
        }}
      >
        <p
          className="text-center uppercase"
          style={{
            color: "oklch(0.16 0.005 240)",
            fontSize: 120,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.0,
          }}
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
