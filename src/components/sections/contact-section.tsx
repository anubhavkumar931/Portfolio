import { siteConfig } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactSection() {
  const phones = [siteConfig.phones.uk, siteConfig.phones.india];

  return (
    <SectionShell
      id="contact"
      eyebrow="Connect"
      title="Contact"
      description="Open to full-time analyst opportunities and practical finance conversations."
    >
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <article className="ib-card h-full rounded-3xl p-6">
            <h3 className="font-display text-xl font-semibold text-[var(--color-text)]">Get in touch</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
              For entry-level opportunities in financial services or FinTech, feel free to reach out directly.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              {phones.map((phone) => (
                <a
                  key={phone.label}
                  href={`tel:${phone.tel}`}
                  className="ib-btn block rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 text-[var(--color-text)] hover:border-[var(--color-accent)]"
                >
                  {phone.label}: {phone.value}
                </a>
              ))}
              <a
                href={`mailto:${siteConfig.email}`}
                className="ib-btn block rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 text-[var(--color-text)] hover:border-[var(--color-accent)]"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.calendly}
                target="_blank"
                rel="noreferrer"
                className="ib-btn block rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 text-[var(--color-text)] hover:border-[var(--color-accent)]"
              >
                Calendly (Placeholder)
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="ib-card rounded-3xl p-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}

