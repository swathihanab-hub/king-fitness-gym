import type { Metadata } from "next";
import Link from "next/link";
import { businessData } from "@/lib/data";
import { WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import RatingBadge from "@/components/RatingBadge";
import { ServiceIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `${businessData.name} | ${businessData.address.area}, ${businessData.address.city}`,
  description: businessData.about,
};

export default function HomePage() {
  const highlights = businessData.services.slice(0, 4);

  return (
    <main id="main">
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-gym-accent/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-700/10 blur-3xl" />
          <svg
            className="absolute inset-0 h-full w-full opacity-20"
            viewBox="0 0 800 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="heroGrid" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#334155" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#334155"
                strokeWidth="1"
              />
            </pattern>
            <rect width="800" height="400" fill="url(#grid)" />
            <path
              d="M0 320 C200 240 400 380 800 200"
              fill="none"
              stroke="url(#heroGrid)"
              strokeWidth="3"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-gym-accent">
            {businessData.type} · {businessData.address.area}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-tight text-gym-text md:text-6xl">
            {businessData.name}
          </h1>
          <p className="mt-4 font-heading text-xl font-bold text-gym-accent md:text-2xl">
            {businessData.tagline}
            {businessData.isProposedTagline ? (
              <span className="ml-2 align-middle font-body text-xs font-medium text-gym-muted">
                (proposed)
              </span>
            ) : null}
          </p>
          <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-gym-muted md:text-lg">
            {businessData.about}
          </p>
          <div className="mt-8">
            <RatingBadge />
          </div>
          <div className="mt-8 flex flex-wrap items-start gap-4">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              label="Enquire on WhatsApp"
            />
            <WhatsAppButton
              message={WA_MESSAGES.trial}
              label="Ask about a trial"
              variant="secondary"
            />
            <a
              href={`tel:${businessData.contact.primaryPhone}`}
              className="inline-flex items-center justify-center rounded-md border border-gym-border px-5 py-3 font-body text-sm font-semibold text-gym-text hover:border-gym-accent"
            >
              Call {businessData.contact.primaryPhoneFormatted}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-gym-border bg-gym-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-gym-text">
            Training on the floor
          </h2>
          <p className="mt-3 max-w-2xl font-body text-gym-muted">
            Strength, cardio, personal coaching and group sessions — all under
            one roof in Himayatnagar.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((service) => (
              <li
                key={service.id}
                className="rounded-xl border border-gym-border bg-gym-surface p-6"
              >
                <span className="text-gym-accent">
                  <ServiceIcon id={service.id} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold text-gym-text">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-gym-muted">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/programs"
              className="font-body text-sm font-semibold text-gym-accent hover:text-gym-hover"
            >
              View all services and programs →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-gym-border">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-gym-text">
            Facility overview
          </h2>
          <p className="mt-3 max-w-2xl font-body text-gym-muted">
            A clean, motivating training environment with dedicated strength and
            cardio zones plus group fitness.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article className="relative overflow-hidden rounded-xl border border-gym-border bg-gradient-to-br from-gym-surface via-slate-800 to-gym-bg p-6">
              <svg
                className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-gym-accent/20"
                viewBox="0 0 80 80"
                aria-hidden="true"
              >
                <rect x="10" y="20" width="12" height="40" rx="2" fill="currentColor" />
                <rect x="58" y="20" width="12" height="40" rx="2" fill="currentColor" />
                <rect x="26" y="36" width="28" height="8" rx="2" fill="currentColor" />
              </svg>
              <h3 className="font-heading text-lg font-bold text-gym-text">
                Strength zone
              </h3>
              <p className="mt-2 font-body text-sm text-gym-muted">
                {businessData.services[0].description}
              </p>
            </article>
            <article className="relative overflow-hidden rounded-xl border border-gym-border bg-gradient-to-br from-slate-800 via-gym-surface to-amber-950/30 p-6">
              <svg
                className="pointer-events-none absolute -right-4 -bottom-4 h-28 w-28 text-gym-accent/20"
                viewBox="0 0 80 80"
                aria-hidden="true"
              >
                <ellipse cx="40" cy="50" rx="22" ry="8" fill="currentColor" />
                <rect x="36" y="18" width="8" height="34" rx="2" fill="currentColor" />
              </svg>
              <h3 className="font-heading text-lg font-bold text-gym-text">
                Cardio zone
              </h3>
              <p className="mt-2 font-body text-sm text-gym-muted">
                {businessData.services[1].description}
              </p>
            </article>
            <article className="relative overflow-hidden rounded-xl border border-gym-border bg-gradient-to-br from-gym-surface to-slate-900 p-6">
              <svg
                className="pointer-events-none absolute right-4 top-4 h-20 w-20 text-gym-accent/20"
                viewBox="0 0 80 80"
                aria-hidden="true"
              >
                <circle cx="28" cy="28" r="10" fill="currentColor" />
                <circle cx="52" cy="32" r="10" fill="currentColor" />
                <circle cx="40" cy="52" r="10" fill="currentColor" />
              </svg>
              <h3 className="font-heading text-lg font-bold text-gym-text">
                Group fitness
              </h3>
              <p className="mt-2 font-body text-sm text-gym-muted">
                {businessData.programs[3].description}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-gym-border bg-gym-surface/40">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-extrabold text-gym-text">
                Personal transformation
              </h2>
              <p className="mt-4 font-body leading-relaxed text-gym-muted">
                {businessData.programs[2].description}{" "}
                {businessData.programs[2].tagline}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {businessData.programs[2].focusAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-gym-border bg-gym-bg px-3 py-1 font-body text-xs text-gym-muted"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <WhatsAppButton
                  message={WA_MESSAGES.personalTraining}
                  label="Ask about personal training"
                />
              </div>
            </div>
            <div
              className="relative h-64 overflow-hidden rounded-xl border border-gym-border md:h-80"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gym-accent/20 via-gym-surface to-gym-bg" />
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 320">
                <rect
                  x="40"
                  y="60"
                  width="120"
                  height="200"
                  rx="8"
                  fill="#1E293B"
                  stroke="#334155"
                />
                <rect
                  x="240"
                  y="40"
                  width="120"
                  height="220"
                  rx="8"
                  fill="#1E293B"
                  stroke="#F59E0B"
                  strokeOpacity="0.4"
                />
                <text
                  x="100"
                  y="290"
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="12"
                >
                  Start
                </text>
                <text
                  x="300"
                  y="290"
                  textAnchor="middle"
                  fill="#F59E0B"
                  fontSize="12"
                >
                  Progress
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gym-border">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-gym-text">
            Ready to train?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-gym-muted">
            Call or WhatsApp {businessData.name} in {businessData.address.area}{" "}
            to ask about membership, a trial, or personal training.
          </p>
          <div className="mt-8 flex flex-wrap items-start justify-center gap-4">
            <WhatsAppButton
              message={WA_MESSAGES.general}
              label="WhatsApp the gym"
            />
            <a
              href={`tel:${businessData.contact.primaryPhone}`}
              className="inline-flex items-center justify-center rounded-md bg-gym-surface px-5 py-3 font-body text-sm font-semibold text-gym-text ring-1 ring-gym-border hover:ring-gym-accent"
            >
              {businessData.contact.primaryPhoneFormatted}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-5 py-3 font-body text-sm font-semibold text-gym-accent hover:text-gym-hover"
            >
              Visit contact page →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
