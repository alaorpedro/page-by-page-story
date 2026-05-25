import { SlideLayout } from "@/components/SlideLayout";

export function Slide21() {
  const items = [
    "Pertencimento",
    "Reciprocidade",
    "Coerência e compromisso",
    "Afeição",
    "Aprovação social",
    "Escassez",
  ];
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 grid grid-cols-2 px-[8%] gap-20 items-center">
        <div className="animate-fade-in-up">
          <p className="slide-subtitle text-foreground">
            E na prática, o que<br />fazer?
          </p>
          <p className="slide-subtitle text-lime font-extrabold mt-10">
            Ativar todos os<br />gatilhos mentais<br />necessários para<br />efetivar a venda
          </p>
        </div>

        <ul className="space-y-6">
          {items.map((it, i) => (
            <li
              key={it}
              className="slide-subtitle text-lime font-bold animate-slide-in-right pl-6"
              style={{
                borderLeft: "4px solid var(--onmid-lime)",
                animationDelay: `${0.15 + i * 0.1}s`,
              }}
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </SlideLayout>
  );
}
