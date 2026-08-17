import type { Metadata } from "next";

import { ArrowUpRightIcon, MailIcon } from "@/components/icons";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Ace Relano about e-commerce, ERP, systems integration, cloud infrastructure, or technical project work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Ace Relano",
    description:
      "Start a conversation about e-commerce, ERP, integration, or cloud-infrastructure work.",
    url: "/contact",
  },
};

const mailto = `mailto:${portfolio.profile.email}?subject=${encodeURIComponent(
  "Portfolio inquiry",
)}`;

export default function ContactPage() {
  return (
    <main id="main-content" className="min-h-[calc(100svh-4.75rem)]">
      <section className="page-shell flex min-h-[calc(100svh-4.75rem)] flex-col justify-between pt-14 pb-12 sm:pt-20 sm:pb-16 lg:pt-28">
        <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
          <p className="eyebrow">Contact</p>
          <div>
            <h1 className="max-w-5xl font-display text-[clamp(3.5rem,7.5vw,5.5rem)] leading-[0.88] font-semibold tracking-[-0.06em] text-balance">
              Bring the hard
              <span className="text-accent italic"> system problem.</span>
            </h1>
            <p className="mt-10 max-w-2xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
              If the work involves complex commerce rules, ERP workflows,
              integrations, staging infrastructure, or a technical decision that
              needs clear ownership, send Ace a note.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-4 border-t border-ink/10 pt-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            href={mailto}
            className="group flex min-h-48 flex-col justify-between rounded-2xl bg-accent p-6 text-paper transition-transform hover:-translate-y-1 hover:bg-ink hover:text-accent motion-reduce:transform-none sm:p-7"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold tracking-[0.14em] uppercase">
                Email
              </span>
              <MailIcon className="size-5" />
            </div>
            <div>
              <span className="block text-sm font-semibold break-all sm:text-base">
                {portfolio.profile.email}
              </span>
              <span className="mt-2 block text-xs text-paper/70">
                Opens your email application
              </span>
            </div>
          </a>

          {portfolio.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-48 flex-col justify-between rounded-2xl border border-ink/15 bg-paper-raised p-6 transition-transform hover:-translate-y-1 hover:border-accent motion-reduce:transform-none sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.14em] uppercase">
                  {social.label}
                </span>
                <ArrowUpRightIcon className="size-5 text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
              </div>
              <div>
                <span className="block text-base font-semibold">
                  {social.handle}
                </span>
                <span className="mt-2 block text-xs text-muted">
                  Opens in a new tab
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-ink/10 py-6 text-xs leading-5 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            No contact form, tracking script, or database—just direct contact.
          </p>
          <p>{portfolio.profile.location} · Remote collaboration</p>
        </div>
      </section>
    </main>
  );
}
