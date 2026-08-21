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

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d="M20 11.5a7.5 7.5 0 0 1-8 7.49A8.5 8.5 0 0 1 8.1 18L4 20l1.3-3.9A7.2 7.2 0 0 1 4 12a8 8 0 0 1 16-.5Z" />
      <path
        d="M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01"
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path d="m21 3-7.1 18-3.4-7.5L3 10.1 21 3Z" strokeLinejoin="round" />
      <path d="m10.5 13.5 4.4-4.4" />
    </svg>
  );
}

export function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      {...props}
    >
      <path
        d="M4 7h16M9 4h6M8 7l.7 13h6.6L16 7M10 11v5M14 11v5"
        strokeLinecap="round"
      />
    </svg>
  );
}
