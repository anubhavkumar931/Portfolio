# Anubhav Kumar (Choi Sahab) Portfolio

Production-ready finance portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.
The site includes a greeting video, skyline visuals, high-finance styling, scroll animations, and full certification cards.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes (light/dark mode toggle)
- IBM Plex Sans + Libre Baskerville (licensed-safe high-finance font pairing)

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

4. Build for production check:

```bash
npm run build
```

## Edit Portfolio Content (Single File)

All main content is centralized in:

- `src/content/profile.ts`

Update this file to edit:

- hero text
- social links
- UK/India phone numbers
- greeting video metadata
- about section
- skills
- projects
- experience
- education
- certifications
- contact details

## Assets

- CV file path used by the "Download CV" button:
  - `public/cv/anubhav-kumar-cv.pdf`
- Greeting video:
  - `public/videos/greeting-anubhav.mp4`
- Greeting poster:
  - `public/images/greeting-poster.jpg`
- Skyline finance images:
  - `public/images/finance/ny-skyscraper.jpg`
  - `public/images/finance/city-finance.jpg`

Replace `public/cv/anubhav-kumar-cv.pdf` with your final CV PDF (keep same filename, or update `cvPath` in `src/content/profile.ts`).
To replace the greeting video, overwrite `public/videos/greeting-anubhav.mp4` and keep the same file name (or update `siteConfig.greetingVideo.src`).

## SEO + Crawl Setup

Implemented files:

- `src/app/layout.tsx` (metadata, OpenGraph, Twitter metadata)
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/app/opengraph-image.tsx`
- `src/app/twitter-image.tsx`

Before deploying, set your real site URL in:

- `src/content/profile.ts` -> `siteConfig.websiteUrl`
- Optional: set real Calendly and credential URLs in `src/content/profile.ts`.

## Analytics Placeholder

No tracking is enabled by default.

- Placeholder component: `src/components/system/analytics-placeholder.tsx`
- Enable placeholder script by setting:
  - `NEXT_PUBLIC_ENABLE_ANALYTICS=true`

Then replace placeholder logic with your preferred analytics script.

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to Vercel and click **Add New Project**.
3. Import your GitHub repository.
4. Keep default build settings (Next.js auto-detected).
5. Click **Deploy**.

## Connect Custom Domain (Vercel)

1. In Vercel project dashboard, go to **Settings > Domains**.
2. Add your domain (example: `yourdomain.com`).
3. Add required DNS records at your domain registrar:
   - Usually `A` record to Vercel IP for apex domain.
   - `CNAME` record for `www` to Vercel target.
4. Wait for DNS propagation.
5. Verify domain status in Vercel becomes active with SSL provisioned.

## Useful Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

