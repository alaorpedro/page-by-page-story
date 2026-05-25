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
          <h3
            className="inline-block px-2 animate-[fade-in-up_0.7s_ease-out_both]"
            style={{
              fontSize: 48,
              fontWeight: 700,
              background: "var(--onmid-lime)",
              color: "oklch(0.2 0.005 240)",
            }}
          >
            Crenças do Cliente
          </h3>
          <ul className="mt-8 space-y-5 text-white" style={{ fontSize: 24 }}>
            {clientBeliefs.map((b, i) => (
              <li
                key={i}
                className="animate-[fade-in-up_0.6s_ease-out_both]"
                style={{ animationDelay: `${0.15 + i * 0.07}s` }}
              >
                <span style={{ fontWeight: 700 }}>{b.q}</span>{" "}
                <span style={{ color: "oklch(0.85 0 0)" }}>→ {b.a}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="inline-block px-2 animate-[fade-in-up_0.7s_ease-out_0.1s_both]"
            style={{
              fontSize: 48,
              fontWeight: 700,
              background: "var(--onmid-lime)",
              color: "oklch(0.2 0.005 240)",
            }}
          >
            Crenças do Vendedor
          </h3>
          <ul className="mt-8 space-y-7 text-white" style={{ fontSize: 30 }}>
            {sellerBeliefs.map((b, i) => (
              <li
                key={i}
                className="animate-[fade-in-up_0.6s_ease-out_both]"
                style={{ animationDelay: `${0.25 + i * 0.08}s`, fontWeight: 600 }}
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
