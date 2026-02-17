import { siteConfig } from "@/content/profile";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-border)] py-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/70 to-transparent" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 text-sm text-[var(--color-muted)] sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Tailwind, and Framer Motion.
        </p>
        <p className="text-xs uppercase tracking-[0.14em]">Skyline-grade finance profile</p>
      </div>
    </footer>
  );
}

