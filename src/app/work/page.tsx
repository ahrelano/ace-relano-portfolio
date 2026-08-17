import type { Metadata } from "next";

import { ContactCta } from "@/components/contact-cta";
import { ProjectCard } from "@/components/project-card";
import { portfolio } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Selected work",
  description:
    "Case studies in Odoo, configurable product kits, BigCommerce–Acumatica integration, and Acumatica staging infrastructure.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Selected work — Ace Relano",
    description:
      "E-commerce, ERP, integration, and cloud-infrastructure case studies.",
    url: "/work",
  },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <header className="page-shell pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-28 lg:pb-28">
        <div className="grid gap-8 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
          <p className="eyebrow">Selected work · Four case studies</p>
          <div>
            <h1 className="max-w-5xl font-display text-[clamp(3.5rem,7.5vw,5.5rem)] leading-[0.88] font-semibold tracking-[-0.06em] text-balance">
              Systems work,
              <span className="text-accent italic"> in context.</span>
            </h1>
            <div className="mt-10 grid gap-6 border-t border-ink/10 pt-7 sm:grid-cols-2">
              <p className="text-base leading-7 text-muted">
                Four case studies across e-commerce, ERP, product configuration,
                integration research, and cloud staging.
              </p>
              <p className="text-base leading-7 text-muted">
                Each study separates approved scope from status still awaiting
                public confirmation. No unverified metrics or outcomes are
                presented.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section className="page-shell pb-24 sm:pb-32" aria-label="Case studies">
        {portfolio.projects.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={project}
            priority={index === 0}
          />
        ))}
      </section>

      <ContactCta />
    </main>
  );
}
