import { SlideLayout } from "@/components/SlideLayout";

export function Slide30() {
  const items = [
    {
      title: "Presenteísmo:",
      url: "https://administradores.com.br/artigos/presenteismo-o-corpo-esta-presente-mas-a-mente-nao",
      author: "de Leonardo Borges",
    },
    {
      title: "Como atender bem um cliente:",
      url: "https://www.kangu.com.br/blog/como-atender-bem-um-cliente/",
      author: "de Diogo Inoue",
    },
    {
      title: "Meditação:",
      url: "https://solcristal220.typeform.com/to/FaRsFMGF?typeform-source=keeplearningschool.typeform.com",
      author: "de Murilo Gun",
    },
  ];

  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[10%]">
        <h2 className="slide-subtitle text-foreground font-bold animate-fade-in-up">
          Texto para reflexão:
        </h2>

        <div className="mt-14 space-y-10 max-w-[1500px] w-full">
          {items.map((it, i) => (
            <div
              key={i}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.18}s` }}
            >
              <p className="slide-body-lg text-foreground italic font-bold">
                {it.title}
              </p>
              <a
                href={it.url}
                target="_blank"
                rel="noreferrer"
                className="slide-body text-lime italic font-semibold underline block break-all mt-1"
              >
                {it.url}
              </a>
              <p className="slide-caption text-foreground mt-1">{it.author}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
