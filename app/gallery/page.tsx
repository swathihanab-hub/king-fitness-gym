import type { Metadata } from "next";
import { businessData } from "@/lib/data";
import { WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Gallery",
  description: `Visual tour of the training floor, equipment zones and group fitness at ${businessData.name}, ${businessData.address.area}.`,
};

const PANELS = [
  {
    id: "floor",
    title: "Gym Floor",
    caption:
      "A clean, motivating training environment for strength work and cardio.",
    gradient: "from-slate-800 via-gym-surface to-gym-bg",
  },
  {
    id: "transform",
    title: "Transformations",
    caption: businessData.programs[2].tagline,
    gradient: "from-amber-950/50 via-gym-surface to-slate-900",
  },
  {
    id: "equipment",
    title: "Equipment Zones",
    caption: `${businessData.services[0].description} ${businessData.services[1].description}`,
    gradient: "from-gym-surface via-slate-800 to-zinc-900",
  },
  {
    id: "group",
    title: "Group Fitness",
    caption: businessData.programs[3].description,
    gradient: "from-orange-950/40 via-gym-surface to-gym-bg",
  },
] as const;

export default function GalleryPage() {
  return (
    <main id="main">
      <section className="border-b border-gym-border bg-gradient-to-b from-gym-surface/60 to-gym-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-gym-accent">
            Inside the gym
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-gym-text md:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl font-body text-gym-muted">
            Visual panels of the floor, equipment and group training at{" "}
            {businessData.name}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <ul className="grid gap-6 md:grid-cols-2">
          {PANELS.map((panel) => (
            <li key={panel.id}>
              <figure className="overflow-hidden rounded-xl border border-gym-border">
                <div
                  className={`relative h-64 bg-gradient-to-br ${panel.gradient} md:h-80`}
                  aria-hidden="true"
                >
                  <PanelArt id={panel.id} />
                </div>
                <figcaption className="bg-gym-surface px-6 py-5">
                  <h2 className="font-heading text-xl font-bold text-gym-text">
                    {panel.title}
                  </h2>
                  <p className="mt-2 font-body text-sm leading-relaxed text-gym-muted">
                    {panel.caption}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="mt-12 text-center">
          <WhatsAppButton
            message={WA_MESSAGES.general}
            label="Enquire about a visit"
          />
        </div>
      </section>
    </main>
  );
}

function PanelArt({ id }: { id: (typeof PANELS)[number]["id"] }) {
  if (id === "floor") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 320">
        <rect x="0" y="240" width="480" height="80" fill="#0F172A" />
        <rect x="40" y="160" width="80" height="80" rx="4" fill="#334155" />
        <rect x="140" y="140" width="60" height="100" rx="4" fill="#1E293B" />
        <rect x="220" y="150" width="100" height="90" rx="4" fill="#334155" />
        <rect x="340" y="130" width="80" height="110" rx="4" fill="#1E293B" />
        <line x1="0" y1="240" x2="480" y2="240" stroke="#F59E0B" strokeOpacity="0.35" />
        <circle cx="80" cy="200" r="10" fill="#F59E0B" fillOpacity="0.5" />
        <circle cx="400" cy="190" r="14" fill="#F59E0B" fillOpacity="0.35" />
      </svg>
    );
  }
  if (id === "transform") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 320">
        <path
          d="M80 260 L140 180 L180 210 L240 120 L300 170 L360 80 L400 110"
          fill="none"
          stroke="#F59E0B"
          strokeWidth="3"
        />
        <circle cx="400" cy="110" r="8" fill="#F59E0B" />
        <rect x="60" y="80" width="70" height="180" rx="6" fill="#1E293B" stroke="#334155" />
        <rect
          x="350"
          y="50"
          width="70"
          height="210"
          rx="6"
          fill="#1E293B"
          stroke="#F59E0B"
          strokeOpacity="0.5"
        />
      </svg>
    );
  }
  if (id === "equipment") {
    return (
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 320">
        <rect x="50" y="90" width="18" height="140" rx="3" fill="#94A3B8" />
        <rect x="90" y="90" width="18" height="140" rx="3" fill="#94A3B8" />
        <rect x="40" y="150" width="78" height="16" rx="3" fill="#F59E0B" fillOpacity="0.7" />
        <rect x="200" y="120" width="160" height="12" rx="3" fill="#334155" />
        <circle cx="210" cy="126" r="22" fill="#1E293B" stroke="#94A3B8" />
        <circle cx="350" cy="126" r="22" fill="#1E293B" stroke="#94A3B8" />
        <rect x="80" y="230" width="90" height="40" rx="6" fill="#334155" />
        <rect x="190" y="220" width="70" height="50" rx="6" fill="#1E293B" />
        <rect x="280" y="235" width="110" height="35" rx="6" fill="#334155" />
      </svg>
    );
  }
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 480 320">
      <circle cx="140" cy="140" r="28" fill="#F59E0B" fillOpacity="0.35" />
      <circle cx="240" cy="120" r="32" fill="#F59E0B" fillOpacity="0.5" />
      <circle cx="340" cy="145" r="28" fill="#F59E0B" fillOpacity="0.35" />
      <path d="M112 168 Q140 220 140 250" stroke="#94A3B8" strokeWidth="6" fill="none" />
      <path d="M240 152 Q240 210 240 260" stroke="#94A3B8" strokeWidth="6" fill="none" />
      <path d="M368 173 Q340 220 340 250" stroke="#94A3B8" strokeWidth="6" fill="none" />
      <ellipse cx="240" cy="280" rx="160" ry="12" fill="#0F172A" />
    </svg>
  );
}
