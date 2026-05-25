import { SlideLayout } from "@/components/SlideLayout";

export function Slide16() {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex items-center justify-center px-[6%]">
        <div
          className="rounded-[44px] py-20 px-16 text-center animate-scale-in max-w-[1500px]"
          style={{ background: "var(--onmid-lime)", color: "var(--onmid-bg)" }}
        >
          <p className="slide-title font-extrabold">
            O produto / serviço é caro em<br />relação a que?
          </p>
          <p className="slide-title font-extrabold mt-16">
            É menos caro não fazer o<br />adquirir nosso produto / serviço?
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
