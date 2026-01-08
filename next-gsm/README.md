# NEXX GSM — Next.js app

React + TypeScript + Tailwind v4 migration lives here.

## Local dev

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## What’s inside

- `app/`: Next.js App Router pages: `/`, `/about`, `/faq`, `/calculator`, `/privacy`, `/terms`
- `content/`: source HTML (imported at build time for legal/info pages)
- `components/ui/`: UI primitives (Button/Card/Badge)
- `components/site/`: shell (header/footer), theme toggle
- `public/`: images, `logo.svg`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `manifest.json`, `og-image.png`

## Deploy

- **Vercel**: import repo, set Root Directory to `next-gsm/`, build command `npm run build`, output default.
- **Any Node hosting**: run `npm run build` then `npm run start`.
