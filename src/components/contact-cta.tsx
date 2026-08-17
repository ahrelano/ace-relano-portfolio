import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

export function ContactCta() {
  return (
    <section
      className="border-y border-accent/40 bg-paper-raised text-ink"
      aria-labelledby="contact-cta-title"
    >
      <div className="page-shell py-20 sm:py-28 lg:py-36">
        <p className="eyebrow text-accent">Start a conversation</p>
        <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2
            id="contact-cta-title"
            className="max-w-5xl font-display text-[clamp(3.3rem,7.5vw,7rem)] leading-[0.88] font-semibold tracking-[-0.06em] text-balance"
          >
            Let’s make the complex clearer.
          </h2>
          <div className="lg:pb-2">
            <p className="max-w-md text-base leading-7 text-muted">
              Have an e-commerce, ERP, integration, or infrastructure challenge
              that needs careful investigation and practical delivery?
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 hover:bg-white hover:text-paper motion-reduce:transform-none"
            >
              Get in touch
              <ArrowRightIcon className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
