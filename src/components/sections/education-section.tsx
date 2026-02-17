import { education } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Academics"
      title="Education"
      description="Academic foundation in fintech, data analysis, and computing fundamentals."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {education.map((item, idx) => (
          <Reveal key={`${item.institution}-${item.degree}`} delay={idx * 0.06}>
            <article className="ib-card h-full rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{item.institution}</h3>
              <p className="mt-1 text-sm text-[var(--color-text)]">{item.degree}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">{item.period}</p>
              <p className="mt-3 text-sm font-medium text-[var(--color-muted)]">{item.result}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.modules.map((module) => (
                  <span
                    key={module}
                    className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs text-[var(--color-muted)]"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

