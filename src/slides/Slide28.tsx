import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

export function Slide28() {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="?">
      <SlideHeader number="28" label="Atendimento online" tone="dark" />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="font-medium max-w-[1500px] animate-fade-in-up"
          style={{
            fontSize: 38,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.75)",
            animationDelay: "0.15s",
          }}
        >
          As pessoas estão acostumadas a clicar em tudo,
          <br />
          mas a presença na rotina delas muda o jogo.
        </p>

        <h1
          className="uppercase italic animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 150,
            lineHeight: 0.95,
            fontWeight: 900,
            letterSpacing: "-0.035em",
            color: "var(--onmid-lime)",
            marginTop: 60,
            animationDelay: "0.4s",
            textShadow: "0 0 100px oklch(0.88 0.24 138 / 0.35)",
          }}
        >
          Você está 100%
          <br />
          presente na venda?
        </h1>

        <span
          aria-hidden
          className="rounded-full animate-scale-in"
          style={{
            width: 200,
            height: 8,
            marginTop: 64,
            background: "var(--onmid-lime)",
            boxShadow: "0 0 30px oklch(0.84 0.18 130 / 0.7)",
            animationDelay: "0.8s",
          }}
        />
      </div>
    </SlideLayout>
  );
}
