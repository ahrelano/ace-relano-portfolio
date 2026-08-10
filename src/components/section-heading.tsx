import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-ink/15 pt-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 className="max-w-3xl font-display text-[clamp(2.6rem,6vw,5.4rem)] leading-[0.9] font-semibold tracking-[-0.045em] text-balance">
          {title}
        </h2>
        {(description || action) && (
          <div className="mt-7 flex max-w-3xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            {description ? (
              <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                {description}
              </p>
            ) : (
              <span />
            )}
            {action}
          </div>
        )}
      </div>
    </div>
  );
}
