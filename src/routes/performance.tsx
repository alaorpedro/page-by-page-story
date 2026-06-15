import { createFileRoute } from "@tanstack/react-router";
import { PerformancePresentation } from "@/components/PerformancePresentation";

export const Route = createFileRoute("/performance")({
  head: () => ({
    meta: [
      { title: "Onmid — Tráfego Pago de Alta Performance" },
      {
        name: "description",
        content: "Treinamento Onmid de metodologia exclusiva para acompanhamento de tráfego pago.",
      },
      {
        property: "og:title",
        content: "Onmid — Tráfego Pago de Alta Performance",
      },
      {
        property: "og:description",
        content:
          "Apresentação em tela cheia: metodologia exclusiva Onmid de acompanhamento de tráfego pago.",
      },
    ],
  }),
  component: PerformancePage,
});

function PerformancePage() {
  return <PerformancePresentation />;
}
