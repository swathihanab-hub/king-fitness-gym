"use client";

import { useState } from "react";
import { businessData } from "@/lib/data";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {businessData.faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-lg border border-gym-border bg-gym-surface"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-base font-bold text-gym-text"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {faq.question}
                <span
                  className="shrink-0 text-gym-accent"
                  aria-hidden="true"
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h3>
            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-gym-border px-5 py-4 font-body text-sm leading-relaxed text-gym-muted"
              >
                {faq.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
