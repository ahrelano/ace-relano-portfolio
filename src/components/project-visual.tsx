import Image from "next/image";

import type { ProjectVisual as ProjectVisualType } from "@/data/portfolio";

export function ProjectVisual({
  visual,
  priority = false,
}: {
  visual: ProjectVisualType;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="relative aspect-[8/5] overflow-hidden rounded-[1.15rem] border border-ink/10 bg-[#dfe3ea] shadow-[0_18px_50px_rgba(23,24,26,0.12)] sm:rounded-[1.5rem]">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          priority={priority}
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 1200px"
          className="size-full object-cover"
        />
      </div>
      <figcaption className="mt-3 max-w-3xl text-xs leading-5 text-muted sm:text-sm">
        {visual.caption}
      </figcaption>
    </figure>
  );
}
