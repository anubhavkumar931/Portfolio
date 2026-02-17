"use client";

import { aboutLines, siteConfig } from "@/content/profile";
import { GreetingVideo } from "@/components/sections/greeting-video";
import { Reveal } from "@/components/ui/reveal";
import { SocialIcon } from "@/components/ui/social-icon";

export function HeroSection() {
  return (
    <section id="top" className="relative pt-12 pb-6 sm:pt-16 sm:pb-8">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="space-y-4">
              <div className="space-y-3">
                <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                  {siteConfig.name}
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text)]/90 sm:text-xl">
                  {siteConfig.roleTaglineLinks.map((item, index) => (
                    <span key={item.label}>
                      <a href={item.href} className="tagline-link font-medium">
                        {item.label}
                      </a>
                      {index < siteConfig.roleTaglineLinks.length - 1 ? (
                        <span className="mx-2 text-[var(--color-muted)]/80">|</span>
                      ) : null}
                    </span>
                  ))}
                </p>
                <div className="max-w-2xl space-y-2 text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                  {aboutLines.slice(0, 2).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={siteConfig.cvPath}
                  className="ib-btn inline-flex items-center justify-center rounded-full bg-[var(--color-text)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)]"
                >
                  Download CV
                </a>
                <a
                  href="#contact"
                  className="ib-btn inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 text-sm font-semibold text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                >
                  Contact
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={`tel:${siteConfig.phones.uk.tel}`}
                  className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                >
                  {siteConfig.phones.uk.label}: {siteConfig.phones.uk.value}
                </a>
                <a
                  href={`tel:${siteConfig.phones.india.tel}`}
                  className="ib-chip rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
                >
                  {siteConfig.phones.india.label}: {siteConfig.phones.india.value}
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                    className="ib-btn inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  >
                    <SocialIcon label={social.label} className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="self-start">
            <Reveal delay={0.06}>
              <GreetingVideo {...siteConfig.greetingVideo} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
