import { SlideLayout } from "@/components/SlideLayout";

export function SM03() {
  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="?">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="slide-kicker animate-fade-in-up"
          style={{
            color: "var(--onmid-lime)",
            letterSpacing: "0.4em",
            marginBottom: 40,
          }}
        >
          A pergunta errada
        </p>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 130,
            lineHeight: 0.98,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.2s",
            maxWidth: 1600,
          }}
        >
          "Quantos seguidores<br />
          minha clínica{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            tem
          </span>
          ?"
        </h1>

        <p
          className="animate-fade-in-up"
          style={{
            marginTop: 64,
            fontSize: 36,
            lineHeight: 1.35,
            color: "oklch(1 0 0 / 0.7)",
            maxWidth: 1200,
            fontWeight: 500,
            animationDelay: "0.45s",
          }}
        >
          A pergunta certa é:{" "}
          <span style={{ color: "var(--onmid-lime)", fontWeight: 800 }}>
            que tipo de paciente sua marca atrai?
          </span>
        </p>
      </div>
    </SlideLayout>
  );
}
