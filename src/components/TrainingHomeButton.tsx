import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export function TrainingHomeButton() {
  return (
    <Link
      data-slide-chrome
      to="/"
      className="absolute left-16 top-28 z-40 inline-flex items-center gap-3 rounded-full border bg-white/10 px-4 py-2 text-white/80 backdrop-blur transition-colors hover:bg-white/16 hover:text-white"
      style={{
        borderColor: "oklch(1 0 0 / 0.12)",
        fontSize: 12,
        letterSpacing: "0.24em",
      }}
      aria-label="Voltar para a home de treinamentos"
    >
      <ArrowLeft size={16} strokeWidth={2.4} aria-hidden />
      <span className="uppercase font-bold">Treinamentos</span>
    </Link>
  );
}
