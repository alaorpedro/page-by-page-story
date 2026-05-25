import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { SlideLayout } from "@/components/SlideLayout";

export function Slide07b() {
  const [open, setOpen] = useState(false);

  return (
    <SlideLayout variant="statement" tone="dark" bgLetter="?">
      <div className="absolute inset-0 flex flex-col items-center justify-center px-16 text-center">
        <p
          className="slide-kicker animate-fade-in-up"
          style={{
            color: "var(--onmid-lime)",
            letterSpacing: "0.4em",
            marginBottom: 40,
          }}
        >
          A pergunta que todos os CRCs fazem
        </p>

        <h1
          className="animate-fade-in-up"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 140,
            lineHeight: 0.98,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "oklch(0.98 0 0)",
            animationDelay: "0.2s",
            maxWidth: 1600,
          }}
        >
          Mas por que os leads<br />
          clicam{" "}
          <span style={{ color: "var(--onmid-lime)", fontStyle: "italic" }}>
            e não respondem
          </span>
          ?
        </h1>

        <div
          className="animate-fade-in-up"
          style={{
            marginTop: 80,
            width: 120,
            height: 4,
            background: "var(--onmid-lime)",
            animationDelay: "0.5s",
            boxShadow: "0 0 40px oklch(0.88 0.24 138 / 0.6)",
          }}
        />
      </div>

      {/* Warning icon button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
        className="absolute animate-fade-in flex items-center gap-3 rounded-full group"
        style={{
          bottom: 80,
          right: 80,
          padding: "16px 24px",
          background: "oklch(0.2 0.01 240 / 0.7)",
          border: "1px solid oklch(0.88 0.24 138 / 0.4)",
          color: "var(--onmid-lime)",
          backdropFilter: "blur(12px)",
          animationDelay: "0.8s",
          transition: "all 240ms cubic-bezier(0.22,1,0.36,1)",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.background = "oklch(0.88 0.24 138 / 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.background = "oklch(0.2 0.01 240 / 0.7)";
        }}
        aria-label="Ver ressalva"
      >
        <AlertTriangle
          size={28}
          style={{
            animation: "pulse-warn 2s ease-in-out infinite",
          }}
        />
        <span
          className="uppercase font-bold"
          style={{ fontSize: 16, letterSpacing: "0.2em" }}
        >
          Ressalva
        </span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="absolute inset-0 z-50 flex items-center justify-center"
          style={{
            background: "oklch(0 0 0 / 0.75)",
            backdropFilter: "blur(8px)",
            animation: "fade-in 240ms ease-out",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            className="relative rounded-3xl"
            style={{
              width: 1100,
              padding: "80px 90px",
              background: "oklch(0.18 0.008 240)",
              border: "2px solid var(--onmid-lime)",
              boxShadow:
                "0 40px 120px oklch(0 0 0 / 0.7), 0 0 80px oklch(0.88 0.24 138 / 0.25)",
              animation:
                "scale-in 320ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute rounded-full flex items-center justify-center"
              style={{
                top: 24,
                right: 24,
                width: 48,
                height: 48,
                background: "oklch(1 0 0 / 0.08)",
                color: "oklch(0.98 0 0)",
                cursor: "pointer",
              }}
              aria-label="Fechar"
            >
              <X size={22} />
            </button>

            <div
              className="flex items-center gap-4"
              style={{ marginBottom: 36 }}
            >
              <div
                className="rounded-2xl flex items-center justify-center"
                style={{
                  width: 80,
                  height: 80,
                  background: "var(--onmid-lime)",
                  color: "oklch(0.13 0.005 240)",
                }}
              >
                <AlertTriangle size={42} strokeWidth={2.5} />
              </div>
              <div
                className="uppercase font-black"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 42,
                  letterSpacing: "-0.02em",
                  color: "var(--onmid-lime)",
                }}
              >
                Ressalva importante
              </div>
            </div>

            <p
              style={{
                fontSize: 36,
                lineHeight: 1.35,
                color: "oklch(0.98 0 0)",
                fontWeight: 400,
              }}
            >
              Existem sim "leads" que clicam por engano, crianças com o
              celular da mamãe, pessoas desqualificadas e curiosos!{" "}
              <span
                className="font-bold"
                style={{ color: "var(--onmid-lime)" }}
              >
                Mas isso não pode ser uma regra.
              </span>
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-warn {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </SlideLayout>
  );
}
