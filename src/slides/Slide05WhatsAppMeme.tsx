import { SlideLayout } from "@/components/SlideLayout";

/** 05 — "Meme" de WhatsApp: cliente perdido */
export function Slide05WhatsAppMeme() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 grid grid-cols-2 gap-16 px-28 pt-36 pb-28">
        {/* Left: phone mockup */}
        <div
          className="flex items-center justify-center"
          style={{ animation: "scale-in 0.9s 0.2s cubic-bezier(0.22,1,0.36,1) both" }}
        >
          <div className="relative w-[520px] h-[860px] rounded-[60px] bg-black border-[10px] border-neutral-800 shadow-2xl overflow-hidden">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20" />
            {/* WhatsApp header */}
            <div className="absolute inset-x-0 top-0 h-28 pt-8 px-6 flex items-center gap-3"
                 style={{ background: "#075e54" }}>
              <div className="w-12 h-12 rounded-full bg-neutral-300 flex items-center justify-center text-neutral-700 font-bold">C</div>
              <div className="text-white">
                <div className="font-semibold text-lg">Cliente</div>
                <div className="text-xs opacity-80">online</div>
              </div>
            </div>
            {/* Chat body */}
            <div className="absolute inset-x-0 top-28 bottom-0 px-4 py-4 flex flex-col gap-2 overflow-hidden"
                 style={{ background: "#0b141a" }}>
              <Bubble side="left" time="10:12 PM">Vcs perderam cliente</Bubble>
              <Bubble side="left" time="10:12 PM">
                Obrigada pelas desculpas, porém não volto mais
              </Bubble>
              <div className="my-3 flex justify-center">
                <span className="px-3 py-1 rounded-md bg-[#182229] text-[10px] text-white/60 tracking-widest">HOJE</span>
              </div>
              <Bubble side="left" time="08:16 PM">Boa noite</Bubble>
              <Bubble side="right" time="08:17 PM" read>Boa noite</Bubble>
              <Bubble side="left" time="08:17 PM">Quero pedir pizza</Bubble>
            </div>
          </div>
        </div>

        {/* Right: caption */}
        <div className="flex flex-col justify-center">
          <div
            className="slide-kicker text-lime"
            style={{ animation: "fade-in-up 0.8s 0.4s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Caso real
          </div>
          <h2
            className="mt-6 slide-title text-white"
            style={{ animation: "fade-in-up 0.9s 0.6s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Como <span className="text-lime">não</span> se faz
            <br />
            uma mudança de estado.
          </h2>
          <p
            className="mt-10 slide-body text-white/80 max-w-[680px]"
            style={{ animation: "fade-in-up 0.9s 0.95s cubic-bezier(0.22,1,0.36,1) both" }}
          >
            Um cliente magoado volta — não para comprar, mas pelo
            básico que ainda lhe falta. A oportunidade vira ruído.
            O atendimento sem leitura emocional <span className="hl-lime">perde a venda
            antes do orçamento</span>.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

function Bubble({
  side,
  time,
  read,
  children,
}: {
  side: "left" | "right";
  time: string;
  read?: boolean;
  children: React.ReactNode;
}) {
  const isRight = side === "right";
  return (
    <div className={`flex ${isRight ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[78%] px-3 py-2 rounded-lg text-sm relative ${
          isRight ? "text-white" : "text-white"
        }`}
        style={{
          background: isRight ? "#005c4b" : "#202c33",
          fontSize: "18px",
          lineHeight: 1.3,
        }}
      >
        <div>{children}</div>
        <div className="text-[10px] mt-1 text-right opacity-70 flex items-center justify-end gap-1">
          <span>{time}</span>
          {isRight && (
            <span style={{ color: read ? "#53bdeb" : "#a8a8a8" }}>✓✓</span>
          )}
        </div>
      </div>
    </div>
  );
}
