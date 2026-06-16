import { createFileRoute } from "@tanstack/react-router";
import { PoliticalMarketingPresentation } from "@/components/PoliticalMarketingPresentation";

export const Route = createFileRoute("/marketing-politico")({
  head: () => ({
    meta: [
      { title: "Onmid — Marketing Político para Candidatos" },
      {
        name: "description",
        content:
          "Proposta estratégica Onmid de marketing eleitoral com método, produção diária e mensuração.",
      },
      {
        property: "og:title",
        content: "Onmid — Marketing Político para Candidatos",
      },
      {
        property: "og:description",
        content:
          "Apresentação em tela cheia: studio de criação, tráfego pago, consultoria, métricas e produção de conteúdo.",
      },
    ],
  }),
  component: PoliticalMarketingPage,
});

function PoliticalMarketingPage() {
  return <PoliticalMarketingPresentation />;
}
