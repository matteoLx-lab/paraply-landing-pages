export function ImagePlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border border-dashed border-card-border bg-card text-center text-xs text-muted ${className}`}
    >
      <span className="px-4">{label}</span>
    </div>
  );
}
