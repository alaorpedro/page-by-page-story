import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/Presentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onmid — Treinamento de Vendas" },
      {
        name: "description",
        content:
          "Treinamento de vendas Onmid para CRCs de clínicas odontológicas: conversão de leads em agendamentos.",
      },
      { property: "og:title", content: "Onmid — Treinamento de Vendas" },
      {
        property: "og:description",
        content:
          "Apresentação em tela cheia: estado emocional, neurovendas, gatilhos mentais e atendimento online.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Presentation />;
}
