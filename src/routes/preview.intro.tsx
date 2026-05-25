import { createFileRoute } from "@tanstack/react-router";
import { IntroVignettePreview } from "@/components/IntroVignettePreview";

export const Route = createFileRoute("/preview/intro")({
  component: PreviewIntroPage,
  head: () => ({ meta: [{ title: "Preview · Vinheta Radical" }] }),
});

function PreviewIntroPage() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Scale 1920x1080 canvas down to viewport */}
      <ScaledStage>
        <IntroVignettePreview />
      </ScaledStage>
    </div>
  );
}

function ScaledStage({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: 1920,
        height: 1080,
        transform: "scale(min(calc(100vw / 1920), calc(100vh / 1080)))",
        transformOrigin: "center center",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
