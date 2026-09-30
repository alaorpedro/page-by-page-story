import { createFileRoute } from "@tanstack/react-router";
import { RomanzaPresentation } from "@/components/RomanzaPresentation";

export const Route = createFileRoute("/romanza")({
  head: () => ({
    meta: [
      { title: "Onmid — Treinamento da Equipe Romanza" },
      {
        name: "description",
        content:
          "Treinamento da equipe Romanza: estado, condução, regra e carteira, com o Regimento Interno explicado por dentro.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Onmid — Treinamento da Equipe Romanza" },
      {
        property: "og:description",
        content: "Quatro módulos em até 2h: do estado de quem atende à carteira que sustenta o faturamento.",
      },
    ],
  }),
  component: RomanzaPage,
});

function RomanzaPage() {
  return <RomanzaPresentation />;
}
