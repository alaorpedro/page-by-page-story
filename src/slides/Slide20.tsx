import { SlideLayout } from "@/components/SlideLayout";
import { SlideHeader } from "@/components/SlideHeader";

const CLIENT_BELIEFS = [
  { q: "Está caro", a: "Preço é mais importante que valor." },
  { q: "Não é o momento", a: "O agora não é seguro. Melhor esperar." },
  { q: "Preciso pensar", a: "Posso decidir melhor sozinho, depois." },
  { q: "Já tentei e não deu certo", a: "Vai acontecer de novo." },
  { q: "Não sei se é pra mim", a: "Isso funciona para os outros, não pra mim." },
  { q: "Não confio totalmente", a: "Posso me arrepender ou ser enganado." },
];

const SELLER_BELIEFS = [
  "Crenças sobre si mesmo (autoimagem)",
  "Crenças sobre dinheiro",
  "Crenças sobre rejeição",
  "Crenças sobre o produto ou serviço",
  "Crenças sobre o cliente",
];

export function Slide20() {
  return (
    <SlideLayout variant="content" tone="dark" bgLetter="C">
      <SlideHeader number="20" label="Crenças" tone="dark" />

      <div className="absolute left-16 right-16 top-[280px] bottom-28 grid grid-cols-2 gap-16">
        {/* Coluna: cliente */}
        <div>
          <h3
            className="uppercase font-black animate-fade-in-up"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 46,
              letterSpacing: "-0.02em",
              color: "oklch(0.98 0 0)",
            }}
          >
            Crenças do <span className="text-lime">cliente</span>
          </h3>

          <ul className="mt-9 space-y-5">
            {CLIENT_BELIEFS.map((b, i) => (
              <li
                key={b.q}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.2 + i * 0.08}s` }}
              >
                <div
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 30,
                    lineHeight: 1.15,
                    color: "oklch(0.98 0 0)",
                  }}
                >
                  “{b.q}”
                </div>
                <div
                  className="mt-1"
                  style={{
                    fontSize: 22,
                    lineHeight: 1.3,
                    color: "oklch(1 0 0 / 0.6)",
                  }}
                >
                  <span className="text-lime font-bold">Crença:</span> {b.a}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Coluna: vendedor */}
        <div>
          <h3
            className="uppercase font-black animate-fade-in-up"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 46,
              letterSpacing: "-0.02em",
              color: "oklch(0.98 0 0)",
              animationDelay: "0.1s",
            }}
          >
            Crenças do <span className="text-lime">vendedor</span>
          </h3>

          <ul className="mt-9 space-y-6">
            {SELLER_BELIEFS.map((b, i) => (
              <li
                key={b}
                className="relative pl-8 animate-slide-in-right"
                style={{
                  borderLeft: "4px solid var(--onmid-lime)",
                  animationDelay: `${0.3 + i * 0.1}s`,
                }}
              >
                <span
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 32,
                    lineHeight: 1.2,
                    color: "oklch(0.98 0 0)",
                  }}
                >
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
