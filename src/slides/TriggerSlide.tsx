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
      <div className="absolute inset-0 px-[6%] py-[7%]">
        <h3 className="slide-subtitle hl-lime inline-block animate-fade-in-up">
          {number}. {title}
        </h3>

        <p
          className="slide-body text-foreground mt-10 max-w-[1620px] animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {lead}
        </p>

        <div className="mt-10 space-y-8 max-w-[1620px]">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            <p className="slide-caption text-foreground/80">Exemplo 1:</p>
            <p className="slide-body text-foreground font-bold mt-2">
              “{example1}”
            </p>
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            <p className="slide-caption text-foreground/80">Exemplo 2:</p>
            <p className="slide-body text-foreground font-bold mt-2">
              “{example2}”
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
