import { SlideLayout } from "@/components/SlideLayout";

export function Slide20() {
  const clientBeliefs = [
    { q: '"Está caro"', a: "Crença: Preço é mais importante que valor." },
    { q: '"Não é o momento"', a: "Crença: O agora não é seguro. Melhor esperar." },
    { q: '"Preciso pensar"', a: "Crença: Posso decidir melhor sozinho, depois." },
    { q: '"Já tentei e não deu certo"', a: "Crença: Vai acontecer de novo." },
    { q: '"Não sei se é pra mim"', a: "Crença: Isso funciona para os outros, não pra mim." },
    { q: '"Não confio totalmente"', a: "Crença: Posso me arrepender ou ser enganado." },
  ];

  const sellerBeliefs = [
    "Crenças sobre si mesmo (autoimagem)",
    "Crenças sobre dinheiro",
    "Crenças sobre rejeição",
    "Crenças sobre o produto ou serviço",
    "Crenças sobre o cliente",
  ];

  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 grid grid-cols-2 gap-16 px-[7%] py-[6%]">
        <div>
          <h3 className="slide-subtitle hl-lime inline-block animate-fade-in-up">
            Crenças do Cliente
          </h3>
          <ul className="mt-8 space-y-4 text-foreground slide-caption">
            {clientBeliefs.map((b, i) => (
              <li
                key={i}
                className="animate-fade-in-up"
                style={{ animationDelay: `${0.15 + i * 0.07}s` }}
              >
                <span className="font-bold">{b.q}</span>{" "}
                <span className="text-foreground/80">→ {b.a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="slide-subtitle hl-lime inline-block animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Crenças do Vendedor
          </h3>
          <ul className="mt-8 space-y-6 text-foreground slide-body">
            {sellerBeliefs.map((b, i) => (
              <li
                key={i}
                className="animate-fade-in-up font-semibold"
                style={{ animationDelay: `${0.25 + i * 0.08}s` }}
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
