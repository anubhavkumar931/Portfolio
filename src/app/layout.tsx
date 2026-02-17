import type { Metadata } from "next";
import { IBM_Plex_Sans, Libre_Baskerville } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { AnalyticsPlaceholder } from "@/components/system/analytics-placeholder";
import { siteConfig } from "@/content/profile";

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const displayFont = Libre_Baskerville({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.websiteUrl),
  title: {
    default: `${siteConfig.name} | Finance + FinTech Portfolio`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Portfolio of Anubhav Kumar: MSc Financial Technology candidate with financial modelling, quantitative analysis, and business research experience.",
  keywords: [
    "Anubhav Kumar",
    "Finance Portfolio",
    "Financial Services",
    "FinTech",
    "Graduate Schemes",
    "Internships",
    "Financial Modelling",
    "Quantitative Analysis",
  ],
  openGraph: {
    title: `${siteConfig.name} | Finance + FinTech Portfolio`,
    description: siteConfig.summary,
    url: siteConfig.websiteUrl,
    siteName: `${siteConfig.name} Portfolio`,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Finance + FinTech Portfolio`,
    description: siteConfig.summary,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${displayFont.variable} bg-[var(--color-bg)] text-[var(--color-text)] antialiased`}>
        <ThemeProvider>
          {children}
          <AnalyticsPlaceholder />
        </ThemeProvider>
      </body>
    </html>
  );
}

