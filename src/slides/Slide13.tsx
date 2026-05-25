import { SlideLayout } from "@/components/SlideLayout";

export function Slide13() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex items-center justify-center px-[6%]">
        <h2
          className="text-center animate-[fade-in-up_0.9s_ease-out_both]"
          style={{
            fontSize: 120,
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            color: "oklch(0.35 0.01 240)",
          }}
        >
          <span className="hl-lime">Você tira o cliente do</span>
          <br />
          <span className="hl-lime">"modo vítima" e coloca</span>
          <br />
          <span className="hl-lime">ele no "modo autor da</span>
          <br />
          <span className="hl-lime">própria mudança".</span>
        </h2>
      </div>
    </SlideLayout>
  );
}
