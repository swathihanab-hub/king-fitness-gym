import type { Metadata } from "next";
import { businessData } from "@/lib/data";
import { WA_MESSAGES } from "@/lib/whatsapp";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaqAccordion from "@/components/FaqAccordion";
import { ClockIcon, PhoneIcon, PinIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description: `Visit ${businessData.name} at ${businessData.address.fullText}. Call ${businessData.contact.primaryPhoneFormatted} or WhatsApp to enquire.`,
};

export default function ContactPage() {
  const { address, contact, hours, name } = businessData;

  return (
    <main id="main">
      <section className="border-b border-gym-border bg-gradient-to-b from-gym-surface/60 to-gym-bg">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-gym-accent">
            Get in touch
          </p>
          <h1 className="mt-3 font-heading text-4xl font-extrabold text-gym-text md:text-5xl">
            Contact {name}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-gym-muted">
            Call, WhatsApp, or visit the gym in {address.area}, {address.city}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-xl border border-gym-border bg-gym-surface p-7">
            <div className="flex items-center gap-2 text-gym-accent">
              <PinIcon />
              <h2 className="font-heading text-lg font-bold text-gym-text">
                Address
              </h2>
            </div>
            <p className="mt-4 font-body text-sm leading-relaxed text-gym-muted">
              {address.building}
              <br />
              {address.street}
              <br />
              {address.landmark}
              <br />
              {address.area}, {address.city}
              <br />
              {address.state} {address.pincode}
            </p>
          </article>

          <article className="rounded-xl border border-gym-border bg-gym-surface p-7">
            <div className="flex items-center gap-2 text-gym-accent">
              <PhoneIcon />
              <h2 className="font-heading text-lg font-bold text-gym-text">
                Call or WhatsApp
              </h2>
            </div>
            <a
              href={`tel:${contact.primaryPhone}`}
              className="mt-4 inline-flex font-heading text-xl font-bold text-gym-accent hover:text-gym-hover"
            >
              {contact.primaryPhoneFormatted}
            </a>
            <p className="mt-2 font-body text-sm text-gym-muted">
              Tap to call from your phone.
            </p>
            <div className="mt-6">
              <WhatsAppButton
                message={WA_MESSAGES.general}
                label="WhatsApp us"
              />
            </div>
          </article>

          <article className="rounded-xl border border-gym-border bg-gym-surface p-7">
            <div className="flex items-center gap-2 text-gym-accent">
              <ClockIcon />
              <h2 className="font-heading text-lg font-bold text-gym-text">
                Hours
              </h2>
            </div>
            <dl className="mt-4 space-y-3 font-body text-sm">
              <div>
                <dt className="text-gym-muted">Monday – Saturday</dt>
                <dd className="font-medium text-gym-text">{hours.monToSat}</dd>
              </div>
              <div>
                <dt className="text-gym-muted">Sunday</dt>
                <dd className="font-medium text-gym-text">{hours.sunday}</dd>
              </div>
            </dl>
            <p className="mt-4 font-body text-xs leading-relaxed text-gym-muted">
              {hours.sundayNote}
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-gym-border bg-gym-surface/30">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-gym-text">
            Frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion />
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <WhatsAppButton
              message={WA_MESSAGES.trial}
              label="Ask about a trial"
              variant="secondary"
            />
            <a
              href={`tel:${contact.primaryPhone}`}
              className="inline-flex items-center justify-center rounded-md border border-gym-border px-5 py-3 font-body text-sm font-semibold text-gym-text hover:border-gym-accent"
            >
              Call {contact.primaryPhoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
