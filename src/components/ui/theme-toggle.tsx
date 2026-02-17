"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(nextTheme)}
      className="ib-btn inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
    >
      <span className="relative h-5 w-5" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="absolute inset-0 h-5 w-5 dark:hidden" fill="none">
          <path
            d="M20.6 14.7a8.5 8.5 0 1 1-11.3-11A7 7 0 1 0 20.6 14.7Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg viewBox="0 0 24 24" className="absolute inset-0 hidden h-5 w-5 dark:block" fill="none">
          <path
            d="M12 3v2.2M12 18.8V21M4.64 4.64l1.56 1.56M17.8 17.8l1.56 1.56M3 12h2.2M18.8 12H21M4.64 19.36l1.56-1.56M17.8 6.2l1.56-1.56M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
    </button>
  );
}

