import { SlideLayout } from "@/components/SlideLayout";

export function Slide07() {
  const steps = [
    "Feed, Stories,\nPesquisa,\nDisplay, Vídeos,\nCurtidas,\nCompartilhamento,",
    "Contato /\nApresentação",
    "Argumentação /\nQuebra de Objeções",
    "Fechamento",
  ];
  return (
    <SlideLayout arcs="corners" logo="bc">
      <div className="absolute inset-x-0 top-[7%] text-center animate-[fade-in-up_0.8s_ease-out_both]">
        <h2 className="slide-subtitle text-white" style={{ fontWeight: 400 }}>
          Entendendo o Fluxo de
        </h2>
        <h1
          className="slide-title text-white mt-2"
          style={{ fontWeight: 800 }}
        >
          Anúncios / Divulgação
        </h1>
      </div>

      <div className="absolute inset-0 flex items-center justify-center gap-6 px-[5%]">
        {/* 1º ? circle */}
        <div
          className="rounded-full flex items-center justify-center animate-[pop-in_0.9s_cubic-bezier(0.34,1.56,0.64,1)_both]"
          style={{
            width: 230,
            height: 230,
            background: "var(--onmid-lime)",
            color: "oklch(0.16 0.005 240)",
            fontWeight: 800,
            fontSize: 76,
          }}
        >
          1º ?
        </div>

        {steps.map((s, i) => (
          <div key={i} className="flex items-center gap-4">
            <div
              className="rounded-2xl border-2 px-6 py-8 flex items-center justify-center text-white whitespace-pre-line text-center animate-[fade-in-up_0.7s_ease-out_both]"
              style={{
                width: 240,
                minHeight: 220,
                borderColor: "var(--onmid-green)",
                fontSize: 26,
                lineHeight: 1.25,
                animationDelay: `${0.2 + i * 0.12}s`,
              }}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <div
                className="rounded-full flex items-center justify-center text-white"
                style={{
                  width: 40,
                  height: 40,
                  background: "var(--onmid-green)",
                  fontSize: 24,
                }}
              >
                ›
              </div>
            )}
          </div>
        ))}

        {/* Right yellow arrow */}
        <div
          className="animate-[slide-in-right_0.8s_ease-out_0.6s_both]"
          style={{
            width: 0,
            height: 0,
            borderTop: "120px solid transparent",
            borderBottom: "120px solid transparent",
            borderLeft: "100px solid var(--onmid-lime)",
            marginLeft: -10,
          }}
        />
      </div>
    </SlideLayout>
  );
}
