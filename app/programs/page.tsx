import type { Metadata } from "next";
import { businessData } from "@/lib/data";
import { WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckIcon, ServiceIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Programs & Membership",
  description: `Services, training programs and membership options at ${businessData.name} in ${businessData.address.area}, ${businessData.address.city}.`,
};

export default function ProgramsPage() {
  return (
    <main id="main">
      <section className="border-b border-gym-border bg-gradient-to-b from-gym-surface/60 to-gym-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-gym-accent">
            Training
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-gym-text md:text-5xl">
            Programs &amp; membership
          </h1>
          <p className="mt-4 max-w-2xl font-body text-gym-muted">
            {businessData.about}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-heading text-3xl font-extrabold text-gym-text">
          Services
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {businessData.services.map((service) => (
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
      </section>

      <section className="border-t border-gym-border bg-gym-surface/30">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-gym-text">
            Programs
          </h2>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {businessData.programs.map((program) => (
              <li
                key={program.id}
                className="flex flex-col rounded-xl border border-gym-border bg-gym-bg p-7"
              >
                <h3 className="font-heading text-xl font-bold text-gym-text">
                  {program.title}
                </h3>
                <p className="mt-2 font-body text-sm font-medium text-gym-accent">
                  {program.tagline}
                </p>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-gym-muted">
                  {program.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {program.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="rounded-full border border-gym-border px-3 py-1 font-body text-xs text-gym-muted"
                    >
                      {area}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <WhatsAppButton
                    message={WA_MESSAGES.programInquiry(program.title)}
                    label="Enquire about this program"
                    variant="ghost"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <h2 className="font-heading text-3xl font-extrabold text-gym-text">
          Membership plans
        </h2>
        <p className="mt-3 font-body text-gym-muted">
          Pricing is confirmed directly by the team.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {businessData.membershipPlans.map((plan) => (
            <li
              key={plan.id}
              className="flex flex-col rounded-xl border border-gym-border bg-gym-surface p-7"
            >
              <h3 className="font-heading text-xl font-bold text-gym-text">
                {plan.title}
              </h3>
              <p className="mt-2 font-body text-sm text-gym-muted">{plan.subtitle}</p>
              <p className="mt-4 font-heading text-lg font-bold text-gym-accent">
                {plan.priceLabel}
              </p>
              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 font-body text-sm text-gym-text"
                  >
                    <span className="mt-0.5 text-gym-accent">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <WhatsAppButton
                  message={WA_MESSAGES.planInquiry(plan.title)}
                  label="Ask for pricing"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
