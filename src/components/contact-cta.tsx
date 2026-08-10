import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

export function ContactCta() {
  return (
    <section
      className="bg-accent text-white"
      aria-labelledby="contact-cta-title"
    >
      <div className="page-shell py-20 sm:py-28 lg:py-36">
        <p className="eyebrow text-white/70">Start a conversation</p>
        <div className="mt-7 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2
            id="contact-cta-title"
            className="max-w-5xl font-display text-[clamp(3.6rem,9vw,8.8rem)] leading-[0.82] font-semibold tracking-[-0.055em] text-balance"
          >
            Let’s make the complex clearer.
          </h2>
          <div className="lg:pb-2">
            <p className="max-w-md text-base leading-7 text-white/78">
              Have an e-commerce, ERP, integration, or infrastructure challenge
              that needs careful investigation and practical delivery?
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-semibold text-accent transition-transform hover:-translate-y-0.5 motion-reduce:transform-none"
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
