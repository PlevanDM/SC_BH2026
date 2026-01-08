# NEXX GSM — Next.js app

React + TypeScript + Tailwind v4 migration lives here.

## Local dev

```bash
npm install
npm run dev
```

### RO App (Ремонлайн) Integration

Booking forms automatically send data to RO App CRM:

1. Get API key: RO App → Settings → API
2. Create `.env.local`:
   ```bash
   ROAPP_API_KEY=your_api_key_here
   ```
3. Restart dev server

Forms will create People/Inquiries in RO App. See: https://roapp.readme.io/reference/getting-started-with-api

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

### GitHub Pages (Auto-deploy via Actions)

Push to `main` triggers `.github/workflows/deploy-next-gsm-pages.yml`:
- Builds static export (`next build` with `output: "export"`)
- Publishes to GitHub Pages

**Enable GitHub Pages**: Settings → Pages → Source: "GitHub Actions"

### Vercel (Recommended for SSR/ISR)

1. Import repo from GitHub
2. **Root Directory**: `next-gsm/`
3. **Build Command**: `npm run build`
4. **Output Directory**: (default `.next`)
5. Deploy!

### Manual static export

```bash
npm run build  # outputs to next-gsm/out/
```

Upload `out/` to any static host (Netlify, Cloudflare Pages, etc).
