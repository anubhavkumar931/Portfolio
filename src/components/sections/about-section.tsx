import { aboutLines } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Profile"
      title="About"
      description="Finance-driven, analytical, and outcome-oriented."
    >
      <Reveal>
        <div className="ib-card grid gap-4 rounded-3xl p-6">
          {aboutLines.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
              {line}
            </p>
          ))}
        </div>
      </Reveal>
    </SectionShell>
  );
}

