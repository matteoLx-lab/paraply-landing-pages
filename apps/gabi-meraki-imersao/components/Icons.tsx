export function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="18" height="18" rx="3" className="fill-accent" />
      <path
        d="M5.5 10.2l3 3L14.5 6.5"
        stroke="var(--accent-foreground)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CrossIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect x="1" y="1" width="18" height="18" rx="3" className="fill-ink/10" />
      <path
        d="M6 6l8 8M14 6l-8 8"
        stroke="var(--ink)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
