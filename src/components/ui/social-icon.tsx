type SocialIconProps = {
  label: string;
  className?: string;
};

export function SocialIcon({ label, className }: SocialIconProps) {
  const normalized = label.toLowerCase();

  if (normalized.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path
          d="M6.3 8.8v8.9M6.3 5.9h.01M11 17.7v-5.1a2.6 2.6 0 0 1 5.2 0v5.1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3.2"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <path
          d="M9.5 19.4c-4 1.2-4-2-5.6-2.3m11.2 4.6v-3a2.6 2.6 0 0 0-.8-2c2.6-.3 5.4-1.3 5.4-5.8a4.6 4.6 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.4 11.4 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2a4.3 4.3 0 0 0-.1 3.2 4.6 4.6 0 0 0-1.2 3.2c0 4.5 2.8 5.5 5.4 5.8a2.6 2.6 0 0 0-.8 2v3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (normalized.includes("email")) {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4.5 7.5 12 13l7.5-5.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <span className={className} aria-hidden="true">
      •
    </span>
  );
}

