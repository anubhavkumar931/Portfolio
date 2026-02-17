import { education, projects } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function EducationSection() {
  const mscProject = projects.find((project) => project.title.includes("MSc Project")) ?? projects[0];

  return (
    <SectionShell
      id="education"
      eyebrow="Academics"
      title="Education"
      description="Academic foundation in fintech, data analysis, and computing fundamentals."
    >
      <div className="grid gap-5 md:grid-cols-2 md:items-start">
        {education.map((item, idx) => {
          const isMscDegree = item.degree === "MSc Financial Technology";

          return (
            <Reveal key={`${item.institution}-${item.degree}`} delay={idx * 0.06}>
              {isMscDegree ? (
                <div className="space-y-3">
                  <article className="ib-card rounded-3xl p-6">
                    <div className="mb-1 inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]">
                      Degree Details
                    </div>
                    <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{item.institution}</h3>
                    <div className="mt-2">
                      <span className="ib-chip inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-semibold tracking-[0.02em] text-[var(--color-text)]">
                        {item.degree}
                      </span>
                    </div>
                    <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">{item.period}</p>
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

                  {mscProject ? (
                    <>
                      <div className="flex justify-center" aria-hidden="true">
                        <span className="h-5 w-px bg-[var(--color-border)]" />
                      </div>
                      <article className="ib-card rounded-3xl p-6">
                        <h4 className="font-display text-base font-semibold text-[var(--color-text)] sm:text-lg">
                          {mscProject.title}
                        </h4>
                        <p className="mt-1 text-sm text-[var(--color-muted)]">{mscProject.context}</p>

                        <div className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
                          <p>
                            <span className="font-semibold text-[var(--color-text)]">Problem: </span>
                            {mscProject.problem}
                          </p>
                          <p>
                            <span className="font-semibold text-[var(--color-text)]">Approach: </span>
                            {mscProject.approach}
                          </p>
                          <p>
                            <span className="font-semibold text-[var(--color-text)]">Outcome: </span>
                            {mscProject.outcome}
                          </p>
                        </div>

                        <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                          {mscProject.impact.map((point) => (
                            <li key={point} className="flex gap-2">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {mscProject.tech.map((tech) => (
                            <span
                              key={tech}
                              className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </article>
                    </>
                  ) : null}
                </div>
              ) : (
                <article className="ib-card rounded-3xl p-6">
                  <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{item.institution}</h3>
                  <p className="mt-1 text-sm text-[var(--color-text)]">{item.degree}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.12em] text-[var(--color-muted)]">{item.period}</p>
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
              )}
            </Reveal>
          );
        })}
      </div>
    </SectionShell>
  );
}

