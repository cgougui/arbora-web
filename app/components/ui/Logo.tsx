import { Link } from "react-router";

import { copy } from "~/content/copy";
import classes from "./Logo.module.css";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="arbora-logo-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset=".55" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#arbora-logo-gradient)" opacity=".16" />
      <path
        d="M32 12v40M32 26l-11-8M32 26l11-8M32 38l-14-9M32 38l14-9"
        stroke="url(#arbora-logo-gradient)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="21" cy="18" r="4" fill="#34d399" />
      <circle cx="43" cy="18" r="4" fill="#22d3ee" />
      <circle cx="18" cy="29" r="4" fill="#5eead4" />
      <circle cx="46" cy="29" r="4" fill="#a78bfa" />
    </svg>
  );
}

export function Logo() {
  return (
    <Link to="/" className={classes.root} aria-label={copy.brand.name}>
      <LogoMark className={classes.mark} />
      <span className={classes.word}>{copy.brand.name}</span>
    </Link>
  );
}
