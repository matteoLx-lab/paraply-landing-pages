import Link from "next/link";

export function CtaButton({
  href,
  children,
  variant = "primary",
  pulse = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  pulse?: boolean;
}) {
  const base =
    "glow-shadow inline-flex items-center justify-center gap-2 rounded-lg border-2 border-card-border px-5 py-3 text-xs sm:px-8 sm:py-4 sm:text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none text-center";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground"
      : "bg-ink text-ink-foreground";

  return (
    <Link href={href} className={`${base} ${styles} ${pulse ? "cta-pulse" : ""}`}>
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}
