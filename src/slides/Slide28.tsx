import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide28() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <p className="slide-subtitle text-foreground animate-fade-in-up">
          As pessoas estão acostumadas a clicar<br />
          em tudo! mas, a presença na rotina delas<br />
          muda o jogo!
        </p>

        <h1
          className="slide-title-xl text-lime italic mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          VOCÊ ESTÁ 100%<br />PRESENTE NA VENDA?
        </h1>

        <div
          className="mt-16 animate-fade-in"
          style={{ animationDelay: "0.7s" }}
        >
          <OnmidLogo size={170} />
        </div>
      </div>
    </SlideLayout>
  );
}
