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
        <div className="animate-[fade-in-up_0.8s_ease-out_both]">
          <p
            className="text-white"
            style={{ fontSize: 56, fontWeight: 600, lineHeight: 1.2 }}
          >
            E na prática, o que<br />fazer?
          </p>
          <p
            className="mt-10"
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "var(--onmid-lime)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Ativar todos os<br />gatilhos mentais<br />necessários para<br />efetivar a venda
          </p>
        </div>

        <ul className="space-y-7">
          {items.map((it, i) => (
            <li
              key={it}
              className="animate-[slide-in-right_0.7s_ease-out_both] pl-6"
              style={{
                borderLeft: "4px solid var(--onmid-lime)",
                color: "var(--onmid-lime)",
                fontSize: 50,
                fontWeight: 700,
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
