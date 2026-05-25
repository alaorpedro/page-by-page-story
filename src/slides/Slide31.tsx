import { SlideLayout } from "@/components/SlideLayout";
import { OnmidLogo } from "@/components/OnmidLogo";

export function Slide31() {
  return (
    <SlideLayout arcs="corners" logo="none">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[8%] text-center">
        <h1
          className="animate-[fade-in-up_0.9s_ease-out_both]"
          style={{
            fontSize: 120,
            fontWeight: 800,
            color: "var(--onmid-lime)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Obrigado pelo<br />tempo e presença
        </h1>

        <div className="mt-20 animate-[scale-in_0.9s_cubic-bezier(0.22,1,0.36,1)_0.3s_both]">
          <OnmidLogo size={300} />
        </div>

        <div className="mt-14 animate-[fade-in-up_0.8s_ease-out_0.6s_both]">
          <p
            className="text-white"
            style={{ fontSize: 44, fontWeight: 700 }}
          >
            Alaor Pedro de Oliveira
          </p>
          <p
            className="text-white/80 mt-1"
            style={{ fontSize: 30, fontWeight: 400 }}
          >
            Diretor de Planejamento
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
