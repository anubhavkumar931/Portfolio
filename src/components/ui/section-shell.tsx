import { cn } from "@/lib/utils";

type SectionShellProps = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section id={id} className={cn("scroll-mt-28 py-14 sm:py-20", className)}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="mb-10 max-w-3xl space-y-3">
          {eyebrow ? (
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              <span className="h-px w-6 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

