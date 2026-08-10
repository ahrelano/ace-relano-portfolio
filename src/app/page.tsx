import Link from "next/link";

import { ContactCta } from "@/components/contact-cta";
import { ArrowRightIcon, ArrowUpRightIcon } from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects, portfolio } from "@/data/portfolio";

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative isolate overflow-hidden">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10" />
        <div className="page-shell flex min-h-[calc(100svh-4.75rem)] flex-col justify-between py-10 sm:py-14 lg:py-16">
          <div className="flex items-start justify-between gap-8">
            <p className="eyebrow max-w-52 text-muted">
              {portfolio.profile.role}
            </p>
            <div className="hidden items-center gap-3 text-right text-xs leading-5 text-muted sm:flex">
              <span className="size-2 rounded-full bg-accent" />
              <span>
                Based in the Philippines
                <br />
                Working across systems
              </span>
            </div>
          </div>

          <div className="grid items-end gap-10 py-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            <div>
              <p className="mb-5 text-sm font-semibold text-accent sm:mb-7 sm:text-base">
                Ace Heart Relano
              </p>
              <h1 className="max-w-[12ch] font-display text-[clamp(4.35rem,12vw,11.5rem)] leading-[0.76] font-semibold tracking-[-0.065em] text-balance">
                Commerce systems,
                <span className="text-accent italic"> clearly led.</span>
              </h1>
            </div>
            <div className="flex items-end justify-between gap-7 lg:block lg:w-[23rem] lg:pb-2">
              <p className="max-w-md text-base leading-7 text-muted sm:text-lg sm:leading-8">
                {portfolio.profile.headline}
              </p>
              <div className="hidden size-24 shrink-0 rotate-6 place-items-center rounded-full border border-ink/20 font-display text-3xl font-semibold sm:grid lg:mt-10 lg:size-32 lg:text-4xl">
                AR
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-ink/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5 motion-reduce:transform-none"
              >
                Explore selected work
                <ArrowRightIcon className="size-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white"
              >
                Contact Ace
              </Link>
            </div>
            <p className="text-xs leading-5 text-muted sm:max-w-72 sm:text-right">
              Requirements → investigation → implementation → validation →
              handoff
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-paper-raised">
        <div className="page-shell section-pad grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <p className="eyebrow">Working perspective</p>
          <div>
            <p className="max-w-4xl font-display text-[clamp(2.5rem,5.5vw,5.4rem)] leading-[0.95] font-semibold tracking-[-0.045em] text-balance">
              Business rules are the product. The interface is where people meet
              them.
            </p>
            <div className="mt-10 grid gap-6 border-t border-ink/10 pt-7 sm:grid-cols-2">
              <p className="text-base leading-7 text-muted">
                {portfolio.profile.introduction}
              </p>
              <p className="text-base leading-7 text-muted">
                The work is equal parts investigation and delivery: define the
                rule, identify the risk, make the tradeoff visible, and verify
                the behavior where systems connect.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="page-shell section-pad"
        aria-label="Featured case studies"
      >
        <SectionHeading
          eyebrow="Selected work"
          title="Case studies in connected systems."
          description="Complex e-commerce and ERP work, documented through the business problem, system decisions, implementation scope, and honest project status."
          action={
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent"
            >
              View all work <ArrowRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="mt-14 sm:mt-20">
          {featuredProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              priority={index === 0}
            />
          ))}
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="page-shell section-pad">
          <div className="grid gap-8 border-t border-paper/20 pt-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <p className="eyebrow text-paper/55">Experience</p>
            <div>
              <h2 className="max-w-3xl font-display text-[clamp(2.8rem,6vw,5.7rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-balance">
                Built across code, design, operations, and support.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-7 text-paper/62 sm:text-lg">
                A multidisciplinary path that supports both the technical depth
                and communication required to lead implementation work.
              </p>
            </div>
          </div>

          <ol className="mt-16 border-t border-paper/15">
            {portfolio.experience.slice(0, 3).map((item, index) => (
              <li
                key={`${item.organization}-${item.role}`}
                className="grid gap-4 border-b border-paper/15 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-7"
              >
                <span className="text-xs text-accent">0{index + 1}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.025em]">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-paper/55">
                    {item.organization}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-6 text-paper/62">
                    {item.summary}
                  </p>
                </div>
                <p className="text-xs text-paper/45 sm:text-right">
                  {item.period}
                </p>
              </li>
            ))}
          </ol>
          <Link
            href="/about"
            className="mt-9 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-paper"
          >
            Read the full career story
            <ArrowRightIcon className="size-5 text-accent" />
          </Link>
        </div>
      </section>

      <section
        className="page-shell section-pad"
        aria-label="Professional capabilities"
      >
        <SectionHeading
          eyebrow="Capabilities"
          title="Grouped around the work—not a logo wall."
          description="A practical toolkit spanning storefronts, ERP workflows, integrations, infrastructure, testing, and technical coordination."
        />
        <div className="mt-16 grid border-t border-l border-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.capabilities.map((group, index) => (
            <article
              key={group.title}
              className="min-h-72 border-r border-b border-ink/10 p-6 sm:p-8"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold tracking-[-0.025em]">
                  {group.title}
                </h3>
                <span className="text-xs text-accent">0{index + 1}</span>
              </div>
              <p className="mt-5 text-sm leading-6 text-muted">
                {group.description}
              </p>
              <ul
                className="mt-7 flex flex-wrap gap-2"
                aria-label={`${group.title} skills`}
              >
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-ink/12 bg-white/45 px-3 py-1.5 text-xs font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-paper-raised">
        <div className="page-shell section-pad">
          <SectionHeading
            eyebrow="Education & learning"
            title="A foundation in technology. A habit of learning."
            description="Formal information-technology education, strengthened by ongoing study in data and responsible AI-assisted engineering."
          />
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {portfolio.learning.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-ink/10 bg-paper p-7 sm:p-9"
              >
                <p className="eyebrow text-accent">{item.period}</p>
                <h3 className="mt-6 max-w-xl font-display text-4xl leading-[0.95] font-semibold tracking-[-0.035em] sm:text-5xl">
                  {item.title}
                </h3>
                <p className="mt-5 text-sm font-semibold">{item.institution}</p>
                <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
          <a
            href={portfolio.socials[1].href}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent"
          >
            Explore Ace’s GitHub
            <span className="sr-only"> (opens in a new tab)</span>
            <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </section>

      <ContactCta />
    </main>
  );
}
