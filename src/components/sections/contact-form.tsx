"use client";

import { FormEvent, useState } from "react";

import { siteConfig } from "@/content/profile";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<string>("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = form.subject.trim() || "Portfolio enquiry";
    const lines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      "",
      "Message:",
      form.message,
    ];

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    window.location.href = mailto;
    setStatus("Opening your email client...");
    setForm(initialState);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby="contact-form-note">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1 text-sm text-[var(--color-muted)]">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="ib-input h-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-3 text-[var(--color-text)] outline-none"
          />
        </label>

        <label className="grid gap-1 text-sm text-[var(--color-muted)]">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="ib-input h-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-3 text-[var(--color-text)] outline-none"
          />
        </label>
      </div>

      <label className="grid gap-1 text-sm text-[var(--color-muted)]">
        Subject
        <input
          value={form.subject}
          onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
          className="ib-input h-11 rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] px-3 text-[var(--color-text)] outline-none"
        />
      </label>

      <label className="grid gap-1 text-sm text-[var(--color-muted)]">
        Message
        <textarea
          required
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          rows={5}
          className="ib-input rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-3 text-[var(--color-text)] outline-none"
        />
      </label>

      <button
        type="submit"
        className="ib-btn inline-flex items-center justify-center rounded-full bg-[var(--color-text)] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-bg)]"
      >
        Send Message
      </button>

      <p id="contact-form-note" className="text-xs text-[var(--color-muted)]">
        This form uses your email app via mailto. No paid third-party service required.
      </p>

      {status ? <p className="text-sm text-[var(--color-accent)]">{status}</p> : null}
    </form>
  );
}

