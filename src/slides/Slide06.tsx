import { SlideLayout } from "@/components/SlideLayout";

export function Slide06() {
  return (
    <SlideLayout arcs="none" logo="none">
      {/* Green panels */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.62 0.18 150) 0%, oklch(0.62 0.18 150) 65%, oklch(0.18 0.005 240) 65%, oklch(0.18 0.005 240) 100%)",
        }}
      />

      {/* Floating WhatsApp bubbles */}
      {[
        { x: 60, y: 40, s: 110, o: 0.9 },
        { x: 360, y: 30, s: 150, o: 1 },
        { x: 720, y: 90, s: 130, o: 0.85 },
        { x: 1150, y: 30, s: 140, o: 0.95 },
        { x: 1500, y: 110, s: 180, o: 1 },
        { x: 1780, y: 280, s: 110, o: 0.9 },
        { x: 30, y: 700, s: 130, o: 0.95 },
        { x: 1730, y: 740, s: 120, o: 0.9 },
      ].map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full flex items-center justify-center text-white animate-[pop-in_1s_cubic-bezier(0.34,1.56,0.64,1)_both]"
          style={{
            left: b.x,
            top: b.y,
            width: b.s,
            height: b.s,
            background: "oklch(0.62 0.2 148)",
            opacity: b.o,
            boxShadow: "0 18px 40px rgba(0,0,0,0.35)",
            fontSize: b.s * 0.55,
            animationDelay: `${i * 0.08}s`,
          }}
        >
          <span style={{ filter: "brightness(0) invert(1)" }}>💬</span>
        </div>
      ))}

      {/* Phone */}
      <div
        className="absolute animate-[fade-in-up_0.9s_ease-out_0.3s_both]"
        style={{
          left: 280,
          top: 140,
          width: 460,
          height: 780,
          background: "#1a1a1a",
          borderRadius: 56,
          padding: 14,
          boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
        }}
      >
        <div
          style={{
            background: "#ECE5DD",
            width: "100%",
            height: "100%",
            borderRadius: 44,
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Status bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl" />
          {/* Header */}
          <div
            className="flex items-center gap-3 px-5 pt-12 pb-4"
            style={{ background: "#075E54", color: "white" }}
          >
            <span className="text-2xl">←</span>
            <div
              className="w-12 h-12 rounded-full"
              style={{ background: "#bbb" }}
            />
            <div>
              <div style={{ fontWeight: 700, fontSize: 22 }}>Cliente</div>
              <div style={{ fontSize: 16, opacity: 0.85 }}>Online</div>
            </div>
            <div className="ml-auto flex gap-4 text-2xl">📹 📞 ⋮</div>
          </div>
          {/* Messages */}
          <div className="p-5 space-y-3">
            <div
              className="bg-white rounded-2xl px-4 py-3 max-w-[80%]"
              style={{ fontSize: 20, color: "#111", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            >
              Vcs perderam cliente{" "}
              <span className="text-xs text-gray-500 ml-2">10:12 PM</span>
            </div>
            <div
              className="bg-white rounded-2xl px-4 py-3 max-w-[85%]"
              style={{ fontSize: 20, color: "#111", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}
            >
              Obrigada pelas desculpas, porém não volto mais{" "}
              <span className="text-xs text-gray-500 ml-2">10:12 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Headset woman placeholder */}
      <div
        className="absolute animate-[fade-in_1s_ease-out_0.5s_both]"
        style={{
          right: 120,
          top: 130,
          width: 600,
          height: 800,
          borderRadius: 24,
          background:
            "linear-gradient(135deg, oklch(0.3 0.02 240), oklch(0.18 0.005 240))",
          border: "1px solid oklch(1 0 0 / 0.08)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="slide-caption text-white/40 uppercase tracking-widest text-center px-4">
            Foto: atendente<br />com headset
          </span>
        </div>
      </div>
    </SlideLayout>
  );
}
