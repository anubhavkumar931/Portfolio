import { experiences } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Experience"
      description="Commercial internship impact and practical execution discipline from UK part-time roles."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {experiences.map((item, idx) => (
          <Reveal key={`${item.company}-${item.role}`} delay={idx * 0.06}>
            <article className="ib-card h-full rounded-3xl p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{item.role}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {item.company} | {item.location}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.13em] text-[var(--color-muted)]">{item.period}</p>

              <ul className="mt-4 space-y-2 text-sm text-[var(--color-muted)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}

