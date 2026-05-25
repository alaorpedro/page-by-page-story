import { SlideLayout } from "@/components/SlideLayout";

type Props = {
  number: string;
  title: string;
  lead: string;
  example1: string;
  example2: string;
};

export function TriggerSlide({ number, title, lead, example1, example2 }: Props) {
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 px-[6%] py-[6%]">
        <h3
          className="inline-block px-2 uppercase animate-[fade-in-up_0.7s_ease-out_both]"
          style={{
            fontSize: 44,
            fontWeight: 800,
            background: "var(--onmid-lime)",
            color: "oklch(0.2 0.005 240)",
            letterSpacing: "0.01em",
          }}
        >
          {number}. {title}
        </h3>

        <p
          className="text-white mt-10 max-w-[1620px] animate-[fade-in-up_0.7s_ease-out_0.2s_both]"
          style={{ fontSize: 30, lineHeight: 1.35, fontWeight: 400 }}
        >
          {lead}
        </p>

        <div className="mt-10 space-y-8 max-w-[1620px]">
          <div className="animate-[fade-in-up_0.7s_ease-out_0.35s_both]">
            <p
              style={{
                fontSize: 28,
                color: "oklch(0.9 0 0)",
                fontWeight: 400,
              }}
            >
              Exemplo 1:
            </p>
            <p
              className="text-white mt-2"
              style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3 }}
            >
              “{example1}”
            </p>
          </div>
          <div className="animate-[fade-in-up_0.7s_ease-out_0.55s_both]">
            <p style={{ fontSize: 28, color: "oklch(0.9 0 0)", fontWeight: 400 }}>
              Exemplo 2:
            </p>
            <p
              className="text-white mt-2"
              style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3 }}
            >
              “{example2}”
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
