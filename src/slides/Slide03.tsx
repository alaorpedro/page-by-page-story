import { SlideLayout } from "@/components/SlideLayout";

export function Slide03() {
  return (
    <SlideLayout arcs="none" logo="none">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative rounded-3xl border-4 border-dashed border-white/15 flex items-center justify-center animate-[scale-in_0.9s_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{ width: 1500, height: 880, background: "oklch(0.2 0.005 240)" }}
        >
          <div className="text-center">
            <p className="slide-kicker text-onmid-green">Foto pessoal</p>
            <p className="slide-title text-white/90 mt-4" style={{ fontWeight: 700 }}>
              Família
            </p>
            <p className="slide-body text-white/50 mt-4">
              (foto/vídeo a ser enviado pelo Alaor)
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
