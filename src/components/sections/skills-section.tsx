import { skillGroups } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Capabilities"
      title="Skills"
      description="Grouped by finance depth, technical tooling, and execution strengths."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, idx) => (
          <Reveal key={group.title} delay={idx * 0.05}>
            <article className="ib-card h-full rounded-3xl p-5">
              <h3 className="font-display text-lg font-semibold text-[var(--color-text)]">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-medium text-[var(--color-muted)]"
                  >
                    {item}
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

