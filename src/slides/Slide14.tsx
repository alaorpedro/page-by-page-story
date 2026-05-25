import { SlideLayout } from "@/components/SlideLayout";

export function Slide14() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div
        className="absolute inset-x-0 bottom-0 h-3"
        style={{
          background:
            "linear-gradient(90deg, var(--onmid-green), var(--onmid-lime))",
        }}
      />
      <div className="absolute inset-0 px-[8%] py-[10%]">
        <p
          className="uppercase animate-[fade-in-up_0.7s_ease-out_both]"
          style={{
            color: "var(--onmid-lime)",
            fontWeight: 800,
            fontSize: 56,
            letterSpacing: "0.02em",
          }}
        >
          SE EU:
        </p>

        <div
          className="text-white uppercase mt-10 leading-tight animate-[fade-in-up_0.7s_ease-out_0.25s_both]"
          style={{ fontSize: 72, fontWeight: 800 }}
        >
          <p>ANALISEI;</p>
          <p>APRESENTEI;</p>
          <p>VENCI OBJEÇÕES/ARGUMENTEI</p>
          <p>MAS NÃO FECHEI...</p>
        </div>

        <p
          className="uppercase mt-12 animate-[fade-in-up_0.7s_ease-out_0.6s_both]"
          style={{
            color: "var(--onmid-lime)",
            fontWeight: 800,
            fontSize: 72,
            letterSpacing: "0.01em",
          }}
        >
          SÓ PODE SER O PREÇO...
        </p>
      </div>
    </SlideLayout>
  );
}
