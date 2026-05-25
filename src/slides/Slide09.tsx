import { SlideLayout } from "@/components/SlideLayout";

export function Slide09() {
  const tiles = [
    { label: "Dormindo / cansaço (manhã)", grad: "from-purple-900/40 to-slate-900" },
    { label: "Academia / treino", grad: "from-orange-900/40 to-slate-900" },
    { label: "Trânsito / transporte", grad: "from-blue-900/40 to-slate-900" },
    { label: "Reunião / trabalho", grad: "from-emerald-900/40 to-slate-900" },
  ];
  return (
    <SlideLayout arcs="corners" logo="br">
      <div className="absolute inset-0 grid grid-cols-2 gap-6 p-16 animate-[fade-in_0.9s_ease-out_both]">
        {tiles.map((t, i) => (
          <div
            key={i}
            className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${t.grad} border border-white/10 animate-[scale-in_0.8s_cubic-bezier(0.22,1,0.36,1)_both]`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <div className="absolute inset-0 flex items-end p-8">
              <span className="slide-caption text-white/70 uppercase tracking-widest">
                {t.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
