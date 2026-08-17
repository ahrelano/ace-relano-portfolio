import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import type { CaseStudy } from "@/data/portfolio";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: CaseStudy;
  priority?: boolean;
}) {
  const visual = project.visuals[0];

  return (
    <article className="group border-t border-ink/15 py-8 sm:py-11">
      <Link
        href={`/work/${project.slug}`}
        className="grid gap-7 rounded-xl focus-visible:outline-offset-8 lg:grid-cols-[0.84fr_1.16fr] lg:items-center lg:gap-14"
      >
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            <span className="text-accent">{project.index}</span>
            <span aria-hidden="true">/</span>
            <span>{project.eyebrow}</span>
          </div>
          <h3 className="mt-5 max-w-xl font-display text-[clamp(2rem,3vw,2.55rem)] leading-[0.98] font-semibold tracking-[-0.05em] text-balance transition-colors duration-200 group-hover:text-accent">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
            {project.summary}
          </p>
          <div className="mt-7 flex items-center justify-between gap-4 border-t border-ink/10 pt-5">
            <span className="text-xs font-medium tracking-wide text-muted">
              {project.stage}
            </span>
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-paper transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none">
              <ArrowRightIcon className="size-5" />
            </span>
          </div>
        </div>

        <div className="relative order-1 aspect-[8/5] overflow-hidden rounded-2xl border border-ink/15 bg-[#15191d] shadow-[0_18px_44px_rgba(0,0,0,0.34)] lg:order-2">
          <Image
            src={visual.src}
            alt={visual.alt}
            width={visual.width}
            height={visual.height}
            priority={priority}
            unoptimized
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.015] motion-reduce:transform-none"
          />
        </div>
      </Link>
    </article>
  );
}
