"use client";

import { useState } from "react";

import { siteConfig } from "@/content/profile";

export function Navbar() {
  const [isBrandHovered, setIsBrandHovered] = useState(false);

  return (
    <header className="floating-nav glass-nav sticky top-0 z-50 rounded-2xl border border-[var(--color-border)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <a
          href="#top"
          onMouseEnter={() => setIsBrandHovered(true)}
          onMouseLeave={() => setIsBrandHovered(false)}
          onFocus={() => setIsBrandHovered(true)}
          onBlur={() => setIsBrandHovered(false)}
          className={`ak-brand inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-[var(--color-text)] ${isBrandHovered ? "is-expanded" : ""}`}
          aria-label={siteConfig.displayName}
        >
          <span className="ak-wordmark relative block h-5">
            <span className="ak-wordmark-short font-display text-sm font-semibold tracking-[0.08em]">
              {siteConfig.brandMonogram}
            </span>
            <span className="ak-wordmark-full text-xs font-semibold uppercase tracking-[0.12em]">{siteConfig.displayName}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Primary">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link nav-collapsible text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] ${isBrandHovered ? "is-collapsed" : ""}`}
            >
              <span className="nav-label">{item.label}</span>
              <span className="nav-dot" aria-hidden="true" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.cvPath}
            className="ib-btn hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] sm:inline-flex"
          >
            CV
          </a>
          <a
            href="#contact"
            className="ib-btn rounded-full bg-[var(--color-text)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-bg)]"
          >
            Contact
          </a>
        </div>
      </div>

      <nav className="border-t border-[var(--color-border)] px-5 py-2 md:hidden" aria-label="Mobile">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-muted)]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
