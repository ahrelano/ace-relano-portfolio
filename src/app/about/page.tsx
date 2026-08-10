import type { Metadata } from "next";
import Link from "next/link";

import { ContactCta } from "@/components/contact-cta";
import { ArrowRightIcon } from "@/components/icons";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ace Relano’s career story, experience timeline, professional capabilities, education, and ongoing learning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Ace Relano",
    description:
      "Developer and technical project lead working across e-commerce, ERP systems, integration, and cloud infrastructure.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <header className="page-shell pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
        <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
          <p className="eyebrow">About Ace</p>
          <div>
            <h1 className="max-w-5xl font-display text-[clamp(4.2rem,11vw,10rem)] leading-[0.77] font-semibold tracking-[-0.065em] text-balance">
              Detail-minded.
              <span className="text-accent italic"> System-aware.</span>
              <br /> Business-grounded.
            </h1>
            <div className="mt-12 grid gap-7 border-t border-ink/10 pt-7 sm:grid-cols-2">
              <p className="text-lg leading-8 text-ink">
                {portfolio.profile.introduction}
              </p>
              <p className="text-base leading-7 text-muted">
                {portfolio.profile.story}
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="border-y border-ink/10 bg-paper-raised">
        <div className="page-shell section-pad grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="eyebrow">How I work</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
              A practical loop for turning a complex request into something a
              team can build, test, and maintain.
            </p>
          </div>
          <ol className="grid border-t border-l border-ink/10 sm:grid-cols-2">
            {[
              [
                "Understand",
                "Clarify the business rule, user need, and operational context before selecting a technical answer.",
              ],
              [
                "Investigate",
                "Trace platform behavior, dependencies, edge cases, and constraints across the full system boundary.",
              ],
              [
                "Implement",
                "Choose a maintainable path, make tradeoffs visible, and deliver in testable increments.",
              ],
              [
                "Validate & explain",
                "Check critical scenarios, communicate risks, and hand over decisions in language stakeholders can use.",
              ],
            ].map(([title, description], index) => (
              <li
                key={title}
                className="min-h-64 border-r border-b border-ink/10 p-7 sm:p-8"
              >
                <span className="text-xs font-semibold text-accent">
                  0{index + 1}
                </span>
                <h2 className="mt-10 font-display text-4xl font-semibold tracking-[-0.035em]">
                  {title}
                </h2>
                <p className="mt-5 text-sm leading-6 text-muted">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="page-shell section-pad"
        aria-labelledby="experience-heading"
      >
        <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <div>
            <p className="eyebrow">Experience</p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
              Roles and dates are sourced directly from the supplied résumé.
            </p>
          </div>
          <div>
            <h2
              id="experience-heading"
              className="max-w-4xl font-display text-[clamp(3rem,6vw,6rem)] leading-[0.88] font-semibold tracking-[-0.05em] text-balance"
            >
              A career across technical delivery and visual craft.
            </h2>
            <ol className="mt-14 border-t border-ink/15">
              {portfolio.experience.map((item, index) => (
                <li
                  key={`${item.organization}-${item.role}`}
                  className="grid gap-5 border-b border-ink/10 py-8 sm:grid-cols-[3rem_1fr] lg:grid-cols-[3rem_0.85fr_1.15fr] lg:gap-8"
                >
                  <span className="text-xs font-semibold text-accent">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em]">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-sm font-medium">
                      {item.organization}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-muted">
                      {item.period}
                      <br />
                      {item.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm leading-6 text-muted">
                      {item.summary}
                    </p>
                    <ul className="mt-5 grid gap-2 text-sm leading-6 text-muted">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="page-shell section-pad">
          <div className="grid gap-8 border-t border-paper/20 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
            <p className="eyebrow text-paper/55">Capabilities</p>
            <div>
              <h2 className="max-w-4xl font-display text-[clamp(3rem,6vw,6rem)] leading-[0.88] font-semibold tracking-[-0.05em] text-balance">
                Breadth for the boundary work. Depth where it counts.
              </h2>
              <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
                {portfolio.capabilities.map((group) => (
                  <article
                    key={group.title}
                    className="border-t border-paper/15 pt-5"
                  >
                    <h3 className="text-base font-semibold">{group.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-paper/55">
                      {group.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-paper/72">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell section-pad">
        <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <p className="eyebrow">Education & learning</p>
          <div>
            {portfolio.learning.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 border-b border-ink/10 py-7 first:pt-0 sm:grid-cols-[1fr_auto] sm:gap-8"
              >
                <div>
                  <h2 className="font-display text-3xl leading-none font-semibold tracking-[-0.03em] sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm font-semibold">
                    {item.institution}
                  </p>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
                <p className="text-xs font-semibold text-accent sm:text-right">
                  {item.period}
                </p>
              </article>
            ))}
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper"
              >
                View selected work <ArrowRightIcon className="size-5" />
              </Link>
              <span
                aria-disabled="true"
                title={portfolio.profile.resume.note}
                className="inline-flex min-h-12 cursor-not-allowed items-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink/35"
              >
                Résumé download pending
              </span>
            </div>
          </div>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
