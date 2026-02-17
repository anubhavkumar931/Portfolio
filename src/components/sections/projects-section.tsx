import { projects } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Work"
      title="Projects"
      description="Problem-led projects with clear approach and realistic outcomes."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <Reveal key={project.title} delay={idx * 0.06} className={idx === projects.length - 1 ? "lg:col-span-2" : undefined}>
            <article className="ib-card h-full rounded-3xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">{project.title}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{project.context}</p>
                </div>
              </div>

              <div className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Problem: </span>
                  {project.problem}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Approach: </span>
                  {project.approach}
                </p>
                <p>
                  <span className="font-semibold text-[var(--color-text)]">Outcome: </span>
                  {project.outcome}
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-sm text-[var(--color-muted)]">
                {project.impact.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1 text-xs font-medium text-[var(--color-muted)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ib-btn rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ib-btn rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                  >
                    Demo
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

