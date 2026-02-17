import { certifications } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function CertificationsSection() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Credentials"
      title="Certifications"
      description="All finance and analytics certifications currently completed or in progress."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((item, idx) => (
          <Reveal key={`${item.title}-${idx}`} delay={idx * 0.05}>
            <article className="ib-card rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      {item.provider}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                        item.status === "Completed"
                          ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-300"
                          : "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="rounded-full bg-[var(--color-card)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      Verification: {item.verification ?? "Pending"}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-[var(--color-text)] sm:text-lg">{item.title}</h3>
                  {item.dateLabel ? <p className="text-sm text-[var(--color-muted)]">{item.dateLabel}</p> : null}
                </div>

                {item.credentialUrl ? (
                  <a
                    href={item.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ib-btn rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    View Credential
                  </a>
                ) : (
                  <a
                    href={item.url ?? "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="ib-btn rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Provider Page
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
