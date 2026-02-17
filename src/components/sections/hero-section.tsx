import Image from "next/image";

import { siteConfig } from "@/content/profile";
import { Reveal } from "@/components/ui/reveal";
import { ScrollParallax } from "@/components/ui/scroll-parallax";
import { SocialIcon } from "@/components/ui/social-icon";
import { GreetingVideo } from "@/components/sections/greeting-video";

export function HeroSection() {
  return (
    <section id="top" className="pt-12 pb-10 sm:pt-16 sm:pb-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal>
          <div className="space-y-6">
            <p className="ib-chip inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-muted)]">
              CV Profile Snapshot
            </p>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl lg:text-6xl">
                {siteConfig.name}
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-text)]/90 sm:text-xl">
                {siteConfig.roleTagline}
              </p>
              <p className="max-w-2xl text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
                {siteConfig.summary}
              </p>
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

            <ScrollParallax from={0} to={-24}>
              <div className="ib-card rounded-3xl p-4">
                <div className="relative h-48 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] sm:h-52">
                  <Image
                    src={siteConfig.heroVisuals.secondarySkyline}
                    alt="Skyscraper skyline with financial district atmosphere"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 via-[#020617]/20 to-transparent" />
                  <p className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    High Finance Skyline
                  </p>
                </div>
              </div>
            </ScrollParallax>
          </div>
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.06}>
            <GreetingVideo {...siteConfig.greetingVideo} />
          </Reveal>

          <Reveal delay={0.12}>
            <ScrollParallax from={0} to={-18}>
              <div className="ib-card rounded-3xl p-5">
                <div className="relative mb-5 h-44 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] sm:h-48">
                  <Image
                    src={siteConfig.heroVisuals.primarySkyline}
                    alt="New York style financial district skyscraper"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <p className="absolute bottom-3 left-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                    Market District
                  </p>
                </div>

                <div className="grid gap-3 text-sm text-[var(--color-muted)]">
                  <div className="ib-chip rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3">
                    MSc Financial Technology | University of Exeter | 2:1
                  </div>
                  <div className="ib-chip rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3">
                    Built client revenue outcomes above 9,500 pounds during internship tenure
                  </div>
                  <div className="ib-chip rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3">
                    Seeking entry-level opportunities in financial services or FinTech through graduate schemes and internships
                  </div>
                </div>
              </div>
            </ScrollParallax>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
