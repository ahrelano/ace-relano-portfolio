import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested portfolio page could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-shell grid min-h-[calc(100svh-4.75rem)] place-items-center py-16"
    >
      <div className="grid w-full gap-10 border-t border-ink/15 pt-6 lg:grid-cols-[0.65fr_1.35fr] lg:gap-12">
        <div>
          <p className="eyebrow text-accent">404 · Route not found</p>
          <div className="mt-7 grid size-24 -rotate-6 place-items-center rounded-full border border-ink/20 font-display text-3xl font-semibold">
            AR
          </div>
        </div>
        <div>
          <h1 className="max-w-4xl font-display text-[clamp(3.5rem,7.5vw,5.5rem)] leading-[0.88] font-semibold tracking-[-0.06em] text-balance">
            This path needs
            <span className="text-accent italic"> a new map.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-7 text-muted sm:text-lg">
            The page may have moved, the address may be incomplete, or the link
            may point somewhere that was never published.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-[#4ee5db] hover:text-paper"
            >
              Return home <ArrowRightIcon className="size-5" />
            </Link>
            <Link
              href="/work"
              className="inline-flex min-h-12 items-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold"
            >
              Browse work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
