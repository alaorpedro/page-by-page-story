import { createFileRoute } from "@tanstack/react-router";
import { IntroVignettePreview } from "@/components/IntroVignettePreview";

export const Route = createFileRoute("/preview/intro")({
  component: () => (
    <div className="fixed inset-0 bg-black">
      <IntroVignettePreview />
    </div>
  ),
});
