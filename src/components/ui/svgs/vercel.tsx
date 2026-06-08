import type { SVGProps } from "react";

const Vercel = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 256 222"
    width="64"
    height="64"
    className={`text-slate-900 dark:text-white ${className || ""}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
  >
    <path d="M128 0L256 221.705H0L128 0Z" fill="currentColor" />
  </svg>
);

export { Vercel };
