import Link from "next/link";

import { ArrowUpRightIcon } from "@/components/icons";
import { portfolio } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="page-shell py-10 sm:py-14">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-end">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-md focus-visible:outline-paper"
            >
              <span className="grid size-10 place-items-center rounded-full border border-paper/25 text-xs font-bold">
                AR
              </span>
              <span className="text-sm font-semibold">Ace Relano</span>
            </Link>
            <p className="mt-5 max-w-xl text-sm leading-6 text-paper/62">
              E-commerce and ERP systems shaped around real business rules,
              reliable implementation, and clear technical decisions.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {portfolio.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-1.5 text-sm text-paper/75 transition-colors hover:text-white"
              >
                {social.label}
                <span className="sr-only"> (opens in a new tab)</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/12 pt-6 text-xs text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ace Relano. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/work" className="transition-colors hover:text-paper">
              Work
            </Link>
            <Link href="/about" className="transition-colors hover:text-paper">
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-paper"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
