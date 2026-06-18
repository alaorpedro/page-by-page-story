import { Globe, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { SlideLayout } from "@/components/SlideLayout";
import onmidLogo from "@/assets/onmid-logo-white.png";

type ThankYouSlideProps = {
  revealStep: number;
};

const GREEN = "var(--onmid-lime)";
const WHITE = "oklch(0.98 0 0)";
const MUTED = "oklch(1 0 0 / 0.62)";

const CONTACTS = [
  {
    label: "Endereço",
    value: "Av. Higienópolis, 1601 · Londrina/PR",
    icon: MapPin,
  },
  {
    label: "Site",
    value: "onmid.com.br",
    href: "https://onmid.com.br",
    icon: Globe,
  },
  {
    label: "WhatsApp",
    value: "(43) 99664-2777",
    href: "https://wa.me/5543996642777",
    icon: MessageCircle,
  },
  {
    label: "E-mail",
    value: "alaor@onmid.com.br",
    href: "mailto:alaor@onmid.com.br",
    icon: Mail,
  },
  {
    label: "Instagram",
    value: "@onmidmkt",
    href: "https://www.instagram.com/onmidmkt/",
    icon: Instagram,
  },
];

export function ThankYouSlide({ revealStep }: ThankYouSlideProps) {
  return (
    <SlideLayout variant="hero" tone="dark" bgLetter="ON">
      <div
        className="absolute left-28 right-28 top-32 flex items-center justify-between"
        style={{
          opacity: revealStep > 0 ? 1 : 0,
          transform: revealStep > 0 ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <img
          src={onmidLogo}
          alt="Onmid"
          style={{ width: 290, height: "auto", objectFit: "contain" }}
        />
        <div
          className="uppercase font-bold"
          style={{ fontSize: 14, letterSpacing: "0.34em", color: GREEN }}
        >
          Marketing · Vendas · Tecnologia
        </div>
      </div>

      <div
        className="absolute left-28 right-28 grid items-end"
        style={{
          top: 270,
          gridTemplateColumns: "1.4fr 0.6fr",
          gap: 100,
          opacity: revealStep > 1 ? 1 : 0,
          transform: revealStep > 1 ? "translateY(0)" : "translateY(28px)",
          transition: "opacity 520ms ease, transform 520ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div>
          <div
            className="uppercase font-bold"
            style={{ fontSize: 17, letterSpacing: "0.45em", color: GREEN }}
          >
            Obrigado
          </div>
          <h2
            style={{
              marginTop: 30,
              maxWidth: 1120,
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: 112,
              lineHeight: 0.9,
              letterSpacing: "-0.055em",
              color: WHITE,
            }}
          >
            Vamos colocar
            <br />a campanha <span style={{ color: GREEN, fontStyle: "italic" }}>ON.</span>
          </h2>
          <p style={{ marginTop: 34, maxWidth: 900, fontSize: 23, lineHeight: 1.45, color: MUTED }}>
            Estratégia, criatividade e tecnologia trabalhando juntas para transformar presença em
            mobilização.
          </p>
        </div>

        <div
          style={{
            padding: "34px 0 8px 34px",
            borderLeft: `2px solid ${GREEN}`,
          }}
        >
          <span
            className="uppercase font-bold"
            style={{
              display: "block",
              fontSize: 11,
              letterSpacing: "0.26em",
              color: MUTED,
            }}
          >
            Apresentado por
          </span>
          <strong
            style={{
              display: "block",
              marginTop: 18,
              fontFamily: "var(--font-display)",
              fontSize: 46,
              lineHeight: 1,
              color: WHITE,
            }}
          >
            Alaor Pedro
          </strong>
          <span
            className="uppercase font-bold"
            style={{
              display: "block",
              marginTop: 14,
              fontSize: 12,
              letterSpacing: "0.22em",
              lineHeight: 1.5,
              color: GREEN,
            }}
          >
            Diretor de Estratégia
            <br />
            Onmid
          </span>
        </div>
      </div>

      <div
        data-slide-chrome
        className="absolute bottom-20 left-28 right-28 grid"
        style={{
          gridTemplateColumns: "1.45fr repeat(4, minmax(0, 1fr))",
          borderTop: "1px solid oklch(1 0 0 / 0.14)",
          borderBottom: "1px solid oklch(1 0 0 / 0.08)",
          opacity: revealStep > 2 ? 1 : 0,
          transform: revealStep > 2 ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 500ms ease, transform 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {CONTACTS.map((contact) => {
          const Icon = contact.icon;
          const content = (
            <>
              <Icon size={22} strokeWidth={1.8} aria-hidden style={{ color: GREEN }} />
              <strong
                style={{
                  marginTop: 14,
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  lineHeight: 1.28,
                  color: WHITE,
                }}
              >
                {contact.value}
              </strong>
            </>
          );

          const style = {
            minHeight: 126,
            padding: "24px 22px 20px",
            borderRight: "1px solid oklch(1 0 0 / 0.1)",
          };

          return contact.href ? (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col transition-colors hover:bg-white/5"
              style={style}
            >
              {content}
            </a>
          ) : (
            <div key={contact.label} className="flex flex-col" style={style}>
              {content}
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
}
