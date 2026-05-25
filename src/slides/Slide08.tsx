import { SlideLayout } from "@/components/SlideLayout";

export function Slide08() {
  return (
    <SlideLayout arcs="corners" logo="bc">
      <div className="absolute inset-0 flex items-center justify-center px-[6%]">
        <div
          className="rounded-3xl p-16 max-w-[1500px] animate-[fade-in-up_0.9s_ease-out_both]"
          style={{
            background: "oklch(0.21 0.008 240 / 0.92)",
            border: "1px solid oklch(1 0 0 / 0.06)",
            backdropFilter: "blur(8px)",
          }}
        >
          <div className="text-white slide-body-lg space-y-6" style={{ fontWeight: 400 }}>
            <p>Fala Alaor, tudo bem?</p>
            <p>
              Aqui é o Beto da{" "}
              <span
                style={{
                  display: "inline-block",
                  width: 180,
                  height: 30,
                  background: "oklch(0.55 0.01 240)",
                  borderRadius: 6,
                  verticalAlign: "middle",
                  filter: "blur(2px)",
                }}
              />
              , você clicou no nosso anúncio do Yamaha P-121, ele
              está com uma condição especial para o mês de outubro em até 12x
              sem Juros ou a vista com 15% de desconto.
            </p>
            <p>
              Vi no seu instagram que você toca na igreja, e tenho outras opções
              que podem te atender melhor, principalmente com pads e
              controladores.
            </p>
            <p>Posso te enviar por aqui as opções?</p>
            <p style={{ fontWeight: 700 }}>
              Ou se preferir podemos agendar para você vir na loja e conhecer os
              modelos e já deixo até eles ligados aqui no showroom pra você
              experimentar
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
