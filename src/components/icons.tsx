import type { SVGProps } from "react";

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 20 20"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M4 8h16M4 16h16" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.5"
      {...props}
    >
      <path d="M3.5 6.5h17v12h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}
