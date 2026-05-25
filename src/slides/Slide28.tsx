import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide28() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <p
          className="text-white animate-[fade-in-up_0.8s_ease-out_both]"
          style={{ fontSize: 56, fontWeight: 500, lineHeight: 1.3 }}
        >
          As pessoas estão acostumadas a clicar<br />
          em tudo! mas, a presença na rotina delas<br />
          muda o jogo!
        </p>

        <h1
          className="mt-16 uppercase animate-[fade-in-up_0.9s_ease-out_0.3s_both]"
          style={{
            fontSize: 130,
            fontWeight: 900,
            color: "var(--onmid-lime)",
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            fontStyle: "italic",
          }}
        >
          VOCÊ ESTÁ 100%<br />PRESENTE NA VENDA?
        </h1>

        <div className="mt-16 animate-[fade-in_1s_ease-out_0.7s_both]">
          <OnmidLogo size={170} />
        </div>
      </div>
    </SlideLayout>
  );
}
