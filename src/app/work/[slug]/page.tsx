import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ContactCta } from "@/components/contact-cta";
import { ArrowRightIcon } from "@/components/icons";
import { ProjectVisual } from "@/components/project-visual";
import { absoluteUrl, getProject, portfolio } from "@/data/portfolio";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  const url = `/work/${project.slug}`;

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: `${project.title} — Ace Relano`,
      description: project.summary,
      url,
      images: [
        {
          url: project.visuals[0].src,
          width: project.visuals[0].width,
          height: project.visuals[0].height,
          alt: project.visuals[0].alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.visuals[0].src],
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectIndex = portfolio.projects.findIndex(
    (item) => item.slug === slug,
  );
  const nextProject =
    portfolio.projects[(projectIndex + 1) % portfolio.projects.length];

  const projectJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: absoluteUrl(`/work/${project.slug}`),
    author: {
      "@type": "Person",
      name: portfolio.profile.name,
    },
    image: absoluteUrl(project.visuals[0].src),
  }).replace(/</g, "\\u003c");

  return (
    <main id="main-content">
      <article>
        <header className="page-shell pt-10 pb-12 sm:pt-16 sm:pb-18 lg:pt-20 lg:pb-24">
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-semibold text-muted"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link
                  href="/work"
                  className="transition-colors hover:text-accent"
                >
                  Work
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">
                {project.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
            <div>
              <p className="eyebrow text-accent">Case study {project.index}</p>
              <p className="mt-4 max-w-xs text-xs leading-5 text-muted">
                {project.stage}
              </p>
            </div>
            <div className="min-w-0">
              <h1 className="max-w-5xl font-display text-[clamp(3.3rem,9vw,8.4rem)] leading-[0.82] font-semibold tracking-[-0.055em] text-balance">
                {project.title}
              </h1>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-muted sm:text-xl sm:leading-9">
                {project.summary}
              </p>
            </div>
          </div>
        </header>

        <div className="page-shell pb-20 sm:pb-28">
          <ProjectVisual visual={project.visuals[0]} priority />
        </div>

        <section className="border-y border-ink/10 bg-paper-raised">
          <div className="page-shell section-pad grid gap-14 lg:grid-cols-[0.64fr_1.36fr] lg:gap-16">
            <div>
              <p className="eyebrow">01 · Overview</p>
              <p className="mt-5 max-w-xs text-sm leading-6 text-muted">
                Business context first, followed by the implementation choices
                that made the technical work meaningful.
              </p>
            </div>
            <div className="grid gap-12">
              <div>
                <h2 className="text-sm font-bold tracking-[0.12em] uppercase">
                  Business problem
                </h2>
                <p className="mt-5 max-w-4xl font-display text-[clamp(2.3rem,4.5vw,4.6rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance">
                  {project.businessProblem}
                </p>
              </div>
              <div className="grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-2">
                <div>
                  <h2 className="text-sm font-bold tracking-[0.12em] uppercase">
                    Ace’s role
                  </h2>
                  <p className="mt-4 text-base leading-7 text-muted">
                    {project.role}
                  </p>
                </div>
                <div>
                  <h2 className="text-sm font-bold tracking-[0.12em] uppercase">
                    Responsibilities
                  </h2>
                  <ul className="mt-4 grid gap-3 text-sm leading-6 text-muted">
                    {project.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-shell section-pad">
          <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.64fr_1.36fr] lg:gap-16">
            <p className="eyebrow">02 · Framing</p>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-4xl leading-none font-semibold tracking-[-0.035em] sm:text-5xl">
                  Constraints & risks
                </h2>
                <ol className="mt-8 border-t border-ink/10">
                  {project.constraints.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-ink/10 py-5 text-sm leading-6 text-muted"
                    >
                      <span className="text-xs font-semibold text-accent">
                        0{index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-display text-4xl leading-none font-semibold tracking-[-0.035em] sm:text-5xl">
                  Approach
                </h2>
                <ol className="mt-8 border-t border-ink/10">
                  {project.approach.map((item, index) => (
                    <li
                      key={item}
                      className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-ink/10 py-5 text-sm leading-6 text-muted"
                    >
                      <span className="text-xs font-semibold text-accent">
                        0{index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="page-shell section-pad">
            <div className="grid gap-8 border-t border-paper/20 pt-6 lg:grid-cols-[0.64fr_1.36fr] lg:gap-16">
              <p className="eyebrow text-paper/55">03 · Decision trail</p>
              <div>
                <h2 className="max-w-4xl font-display text-[clamp(2.8rem,6vw,5.7rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-balance">
                  Important choices, made visible.
                </h2>
                <div className="mt-12 grid gap-4 lg:grid-cols-3">
                  {project.decisions.map((decision, index) => (
                    <article
                      key={decision.title}
                      className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-6 sm:p-7"
                    >
                      <span className="text-xs font-semibold text-accent">
                        0{index + 1}
                      </span>
                      <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em]">
                        {decision.title}
                      </h3>
                      <p className="mt-4 text-sm leading-6 text-paper/62">
                        {decision.detail}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-shell section-pad">
          <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.64fr_1.36fr] lg:gap-16">
            <p className="eyebrow">04 · Delivery</p>
            <div>
              <div className="grid gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="font-display text-4xl leading-none font-semibold tracking-[-0.035em] sm:text-5xl">
                    Implementation highlights
                  </h2>
                  <ul className="mt-8 border-t border-ink/10">
                    {project.implementation.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 border-b border-ink/10 py-5 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-4xl leading-none font-semibold tracking-[-0.035em] sm:text-5xl">
                    Testing & validation
                  </h2>
                  <ul className="mt-8 border-t border-ink/10">
                    {project.validation.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 border-b border-ink/10 py-5 text-sm leading-6 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 rounded-2xl border border-accent/25 bg-accent/[0.055] p-7 sm:p-9">
                <p className="eyebrow text-accent">Outcome / current status</p>
                <p className="mt-5 max-w-4xl text-base leading-7 text-ink sm:text-lg sm:leading-8">
                  {project.outcome}
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-sm font-bold tracking-[0.12em] uppercase">
                  Technology
                </h2>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-ink/15 bg-white/45 px-4 py-2 text-xs font-semibold"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <nav
          aria-label="Next case study"
          className="border-t border-ink/10 bg-paper-raised"
        >
          <Link
            href={`/work/${nextProject.slug}`}
            className="page-shell group flex min-h-64 items-center justify-between gap-8 py-16"
          >
            <div>
              <p className="eyebrow text-accent">Next case study</p>
              <p className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-balance">
                {nextProject.title}
              </p>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none sm:size-16">
              <ArrowRightIcon className="size-5 sm:size-6" />
            </span>
          </Link>
        </nav>
      </article>

      <ContactCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: projectJsonLd }}
      />
    </main>
  );
}
