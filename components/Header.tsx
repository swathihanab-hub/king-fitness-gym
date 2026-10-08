"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { businessData } from "@/lib/data";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gym-border bg-gym-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link
          href="/"
          className="font-heading text-lg font-extrabold tracking-tight text-gym-text md:text-xl"
        >
          {businessData.name}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 font-body text-sm font-medium transition-colors ${
                  active
                    ? "text-gym-accent"
                    : "text-gym-muted hover:text-gym-text"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={`tel:${businessData.contact.primaryPhone}`}
            className="ml-2 rounded-md bg-gym-accent px-4 py-2 font-body text-sm font-semibold text-gym-bg hover:bg-gym-hover"
          >
            Call
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gym-border text-gym-text md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-gym-border bg-gym-bg/95 px-4 py-4 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-3 font-body text-base font-medium ${
                      active
                        ? "bg-gym-surface text-gym-accent"
                        : "text-gym-text"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <a
                href={`tel:${businessData.contact.primaryPhone}`}
                className="mt-2 block rounded-md bg-gym-accent px-3 py-3 text-center font-body text-base font-semibold text-gym-bg"
              >
                Call {businessData.contact.primaryPhoneFormatted}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
