import { SlideLayout } from "@/components/SlideLayout";
import cover from "@/assets/cover-gold-dollar.jpg";

export function Slide01() {
  return (
    <SlideLayout arcs="none" logo="none">
      <img
        src={cover}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      <div className="absolute left-[8%] top-1/2 -translate-y-1/2 max-w-[900px]">
        <h1
          className="slide-title-lg text-white animate-[fade-in-up_0.9s_ease-out_both]"
          style={{ fontWeight: 700, letterSpacing: "-0.04em" }}
        >
          Treinamento<br />de vendas
        </h1>
        <p
          className="slide-subtitle text-white/90 mt-6 animate-[fade-in-up_1s_ease-out_0.2s_both]"
          style={{ fontWeight: 400 }}
        >
          Atendimento Online
        </p>
        <div
          className="mt-10 h-[6px] w-[520px] rounded-full animate-[slide-in-left_1s_ease-out_0.4s_both]"
          style={{
            background:
              "linear-gradient(90deg, var(--onmid-green), var(--onmid-lime), transparent)",
          }}
        />
        <div className="mt-10 animate-[fade-in-up_1s_ease-out_0.6s_both]">
          <img
            src={new URL("../assets/onmid-logo-white.png", import.meta.url).href}
            alt="Onmid"
            width={220}
            style={{ height: "auto", display: "block" }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
