import { createFileRoute } from "@tanstack/react-router";
import { PoliticalMarketingPresentation } from "@/components/PoliticalMarketingPresentation";

export const Route = createFileRoute("/marketing-politico")({
  head: () => ({
    meta: [
      { title: "Onmid — Marketing Político para Candidatos" },
      {
        name: "description",
        content:
          "Treinamento Onmid de marketing político para candidatos às eleições de 2026 no Brasil.",
      },
      {
        property: "og:title",
        content: "Onmid — Marketing Político para Candidatos",
      },
      {
        property: "og:description",
        content:
          "Apresentação em tela cheia: publicidade, marketing, relacionamento e IA para campanhas políticas responsáveis.",
      },
    ],
  }),
  component: PoliticalMarketingPage,
});

function PoliticalMarketingPage() {
  return <PoliticalMarketingPresentation />;
}
