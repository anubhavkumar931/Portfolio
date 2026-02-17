import { siteConfig } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";

export function NowSection() {
  return (
    <SectionShell id="now" eyebrow="Current" title="Now" description="A quick snapshot of current priorities.">
      <Reveal>
        <div className="ib-card rounded-2xl bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-card)] p-5 sm:p-6">
          <p className="text-sm leading-relaxed text-[var(--color-text)] sm:text-base">
            {siteConfig.locationFocus}
          </p>
        </div>
      </Reveal>
    </SectionShell>
  );
}

