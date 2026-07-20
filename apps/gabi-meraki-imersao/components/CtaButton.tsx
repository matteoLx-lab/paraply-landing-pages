import Link from "next/link";

export function CtaButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-xs sm:px-8 sm:py-4 sm:text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5 text-center";
  const styles =
    variant === "primary"
      ? "bg-accent text-accent-foreground shadow-lg shadow-accent/20"
      : "border border-card-border bg-card text-foreground";

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
