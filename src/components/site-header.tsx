import Link from "next/link";

import { MenuIcon } from "@/components/icons";
import { portfolio, type NavItem } from "@/data/portfolio";

function NavigationItems({ mobile = false }: { mobile?: boolean }) {
  return portfolio.navigation.map((item: NavItem) => {
    const href = item.resume ? portfolio.profile.resume.href : item.href;
    const disabled = item.resume
      ? !portfolio.profile.resume.available || !href
      : item.disabled || !href;
    const className = mobile
      ? "border-b border-ink/15 py-4 text-xl font-medium tracking-[-0.03em] last:border-0"
      : "nav-link";

    if (disabled || !href) {
      return (
        <span
          key={item.label}
          aria-disabled="true"
          className={`${className} cursor-not-allowed text-ink/35`}
          title={portfolio.profile.resume.note}
        >
          {item.label}
          <span className="sr-only"> (currently unavailable)</span>
        </span>
      );
    }

    if (item.resume) {
      return (
        <a key={item.label} href={href} download className={className}>
          {item.label}
          <span className="sr-only"> (PDF download)</span>
        </a>
      );
    }

    return (
      <Link key={item.label} href={href} className={className}>
        {item.label}
      </Link>
    );
  });
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-paper/92 backdrop-blur-lg">
      <div className="page-shell flex h-[4.75rem] items-center justify-between">
        <Link
          href="/"
          className="group flex min-h-11 items-center gap-3"
          aria-label="Ace Relano, home"
        >
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-full border border-accent/70 bg-accent text-xs font-bold tracking-[-0.06em] text-paper transition-transform duration-300 group-hover:-rotate-6 motion-reduce:transform-none">
            AR
          </span>
          <span className="text-sm font-semibold tracking-[-0.02em]">
            Ace Relano
          </span>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex"
        >
          <NavigationItems />
        </nav>

        <details className="mobile-menu relative md:hidden">
          <summary className="grid size-11 cursor-pointer list-none place-items-center rounded-full border border-ink/20 transition-colors hover:border-accent hover:text-accent [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Open navigation</span>
            <MenuIcon className="size-5" />
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute top-14 right-0 w-[min(21rem,calc(100vw-2rem))] rounded-2xl border border-ink/15 bg-paper-raised p-5 shadow-[0_24px_70px_rgba(0,0,0,0.4)]"
          >
            <div className="flex flex-col">
              <NavigationItems mobile />
            </div>
            <p className="mt-5 text-xs leading-5 text-muted">
              {portfolio.profile.resume.note}
            </p>
          </nav>
        </details>
      </div>
    </header>
  );
}
