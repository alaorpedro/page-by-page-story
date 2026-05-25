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
        <h2
          className="text-white animate-[fade-in-up_0.8s_ease-out_both]"
          style={{ fontSize: 56, fontWeight: 700 }}
        >
          Texto para reflexão:
        </h2>

        <div className="mt-14 space-y-10 max-w-[1500px] w-full">
          {items.map((it, i) => (
            <div
              key={i}
              className="animate-[fade-in-up_0.7s_ease-out_both]"
              style={{ animationDelay: `${0.2 + i * 0.18}s` }}
            >
              <p
                className="text-white italic"
                style={{ fontSize: 36, fontWeight: 700 }}
              >
                {it.title}
              </p>
              <a
                href={it.url}
                target="_blank"
                rel="noreferrer"
                className="block break-all underline italic"
                style={{
                  fontSize: 28,
                  color: "var(--onmid-lime)",
                  fontWeight: 600,
                  marginTop: 4,
                }}
              >
                {it.url}
              </a>
              <p className="text-white mt-1" style={{ fontSize: 26 }}>
                {it.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
