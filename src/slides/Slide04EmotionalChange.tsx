import { SlideLayout } from "@/components/SlideLayout";

/** 04 — O que é mudança do estado emocional? */
export function Slide04EmotionalChange() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 grid grid-cols-12 gap-12 px-32 pt-44 pb-32">
        <div className="col-span-5 flex flex-col justify-center">
          <div
            className="slide-kicker text-lime"
            style={{ animation: "fade-in-up 0.8s 0.1s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Definição
          </div>
          <h2
            className="mt-6 slide-title text-white"
            style={{ animation: "fade-in-up 0.9s 0.3s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            O que é
            <br />
            <span className="text-lime">mudança do</span>
            <br />
            <span className="text-lime">estado emocional?</span>
          </h2>
        </div>

        <div className="col-span-7 flex flex-col justify-center">
          <p
            className="slide-body-lg text-white/90"
            style={{
              fontSize: "40px",
              animation: "fade-in-up 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both",
            }}
          >
            Saber e dominar as <span className="hl-yellow">estratégias mais poderosas</span> para
            mover um cliente — antes resistente, distraído ou indeciso —{" "}
            <span className="hl-yellow">para um estado emocional mais propenso à ação</span>.
          </p>

          <div
            className="mt-16 h-1 w-32 bg-onmid-green rounded-full"
            style={{
              background: "oklch(0.72 0.27 142)",
              animation: "slide-in-left 0.8s 1.1s cubic-bezier(0.22,1,0.36,1) both",
            }}
          />
          <p
            className="mt-8 slide-body text-white/70"
            style={{ animation: "fade-in-up 0.9s 1.2s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Não é manipular. É conduzir o cliente a perceber o que ele
            já sente — e dar a ele um caminho de decisão.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
