import Link from "next/link";
import { businessData } from "@/lib/data";

export default function Footer() {
  const { address, hours, contact, name } = businessData;

  return (
    <footer className="overflow-x-hidden border-t border-gym-border bg-gym-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <p className="font-heading text-lg font-extrabold text-gym-text">{name}</p>
          <p className="mt-2 font-body text-sm text-gym-muted">{address.fullText}</p>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-gym-accent">
            Hours
          </p>
          <p className="mt-2 font-body text-sm text-gym-text">
            Mon–Sat: {hours.monToSat}
          </p>
          <p className="mt-1 font-body text-sm text-gym-text">
            Sunday: {hours.sunday}
          </p>
          <p className="mt-1 font-body text-xs text-gym-muted">{hours.sundayNote}</p>
        </div>
        <div>
          <p className="font-heading text-sm font-bold uppercase tracking-wider text-gym-accent">
            Contact
          </p>
          <a
            href={`tel:${contact.primaryPhone}`}
            className="mt-2 inline-block font-body text-sm font-medium text-gym-text hover:text-gym-accent"
          >
            {contact.primaryPhoneFormatted}
          </a>
          <nav className="mt-4 flex flex-wrap gap-4 font-body text-sm text-gym-muted">
            <Link href="/" className="hover:text-gym-text">
              Home
            </Link>
            <Link href="/programs" className="hover:text-gym-text">
              Programs
            </Link>
            <Link href="/gallery" className="hover:text-gym-text">
              Gallery
            </Link>
            <Link href="/contact" className="hover:text-gym-text">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-gym-border px-4 py-4 text-center">
        <a
          href="https://sutrixa.tech"
          className="font-body text-xs text-gym-muted hover:text-gym-accent"
        >
          Website design &amp; build by Sutrixa Tech
        </a>
      </div>
    </footer>
  );
}
