import { SlideLayout } from "@/components/SlideLayout";

export function Slide28() {
  return (
    <SlideLayout variant="statement">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="slide-subtitle text-foreground/85 animate-fade-in-up max-w-[1500px]"
          style={{ fontWeight: 500 }}
        >
          As pessoas estão acostumadas a clicar em tudo,<br />
          mas a presença na rotina delas muda o jogo.
        </p>

        <h1
          className="text-lime italic animate-fade-in-up uppercase"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 150,
            lineHeight: 0.95,
            fontWeight: 900,
            letterSpacing: "-0.035em",
            marginTop: 60,
            animationDelay: "0.3s",
            textShadow: "0 0 100px oklch(0.88 0.24 138 / 0.35)",
          }}
        >
          Você está 100%<br />presente na venda?
        </h1>
      </div>
    </SlideLayout>
  );
}
