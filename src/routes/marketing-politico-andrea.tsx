import { createFileRoute } from "@tanstack/react-router";
import { PoliticalMarketingPresentation } from "@/components/PoliticalMarketingPresentation";
import { ANDREA_ZANCKO_SLIDES } from "@/slides/political/AndreaZanckoSlides";

export const Route = createFileRoute("/marketing-politico-andrea")({
  head: () => ({
    meta: [
      { title: "Onmid — Andrea Zancko · Primeira Candidatura" },
      {
        name: "description",
        content: "Proposta estratégica fictícia Onmid para primeira candidatura de Andrea Zancko.",
      },
      {
        property: "og:title",
        content: "Onmid — Andrea Zancko · Primeira Candidatura",
      },
      {
        property: "og:description",
        content:
          "Apresentação em tela cheia para construir reconhecimento, base e presença eleitoral.",
      },
    ],
  }),
  component: AndreaPoliticalMarketingPage,
});

function AndreaPoliticalMarketingPage() {
  return <PoliticalMarketingPresentation slides={ANDREA_ZANCKO_SLIDES} />;
}
