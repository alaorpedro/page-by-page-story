import { createFileRoute } from "@tanstack/react-router";
import { SocialMediaPresentation } from "@/components/SocialMediaPresentation";

export const Route = createFileRoute("/socialmedia")({
  head: () => ({
    meta: [
      { title: "Onmid — Redes Sociais para Clínicas Odontológicas" },
      {
        name: "description",
        content:
          "Treinamento Onmid de estratégia e posicionamento em redes sociais para clínicas odontológicas.",
      },
      {
        property: "og:title",
        content: "Onmid — Redes Sociais para Clínicas Odontológicas",
      },
      {
        property: "og:description",
        content:
          "Apresentação em tela cheia: posicionamento, persona, tom de voz, pilares de conteúdo e identidade.",
      },
    ],
  }),
  component: SocialMediaPage,
});

function SocialMediaPage() {
  return <SocialMediaPresentation />;
}
