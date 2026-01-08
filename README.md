# NEXX GSM — Device Repair Service

Premium сервіс-центр по ремонту телефонів, ноутбуків та мобільної електроніки у Бухаресті.

---

## 🚀 Quick Start

### Production App (Next.js) — Recommended

```bash
cd next-gsm
npm install
npm run dev    # Development → http://localhost:3000
npm run build  # Production build → next-gsm/out/
```

**Deploy:** Auto-deploy via GitHub Actions → GitHub Pages  
**Docs:** [`next-gsm/README.md`](./next-gsm/README.md)

### RO App (Remonline) Integration

Booking forms send data to RO App CRM:

1. Get API key: RO App → Settings → API  
2. Create `next-gsm/.env.local`:
   ```bash
   ROAPP_API_KEY=your_api_key_here
   ```
3. Restart dev server

See: https://roapp.readme.io/reference/getting-started-with-api

---

## 📁 Project Structure

```
C:\SC Bucharest\
├── next-gsm/              ← 🎯 MAIN Next.js app (React + TS + Tailwind v4)
│   ├── app/               ← Routes: /, /about, /faq, /calculator, etc
│   ├── components/        ← UI components (Button/Card/Badge) + site (Shell/ThemeToggle)
│   ├── lib/               ← Utils, site-config, RO App API client
│   ├── public/            ← Static assets (images, icons, manifest)
│   └── README.md          ← Next.js app docs
│
├── legacy/                ← Old static HTML site (backup)
│   ├── index.html         ← Static homepage
│   ├── *.html             ← Other pages
│   └── main.css           ← Legacy styles
│
├── scripts/               ← Deployment scripts
│   ├── Dockerfile         ← Docker config
│   ├── docker-compose.yml ← Docker Compose
│   └── *.bat, *.sh        ← Docker helper scripts
│
├── docs/                  ← Documentation
│   ├── DEPLOYMENT.md      ← Deploy guides (GitHub Pages/Vercel)
│   ├── GITHUB-PAGES-SETUP.md ← Quick Pages setup
│   └── *.md               ← Other guides
│
├── images/                ← Shared images (used by both legacy and next-gsm)
│   ├── reception.png
│   ├── workspace.png
│   └── facade.png
│
└── README.md              ← This file
```

---

## ✨ Features

**Next.js App:**
- ⚛️ React 19 + TypeScript
- 🎨 Tailwind CSS v4 (OKLCH colors, dark mode)
- 🧩 Shadcn/ui components
- ✨ Framer Motion animations
- 🎯 Lucide icons (no emoji)
- 📸 Real photos integration
- 🔄 RO App API (Remonline CRM)
- 📱 Fully responsive
- ♿ Accessible (ARIA, semantic HTML)
- 🔒 SEO optimized (robots, sitemap, OG tags)

**Pages:**
- `/` — Homepage (hero, services, pricing, GORK, courses, contact, gallery)
- `/about` — About us
- `/faq` — Frequently asked questions
- `/calculator` — Repair cost calculator
- `/privacy` — Privacy policy (GDPR compliant)
- `/terms` — Terms of service
- `/api/booking` — Booking API (→ RO App)

---

## 🎯 Commands (Root)

```bash
# Next.js app (from root)
npm run next:install  # Install dependencies
npm run next:dev      # Start dev server
npm run next:build    # Production build
npm run next:lint     # Run linter
npm run next:start    # Start production server

# Legacy static (for reference)
npm run start         # Simple HTTP server on :8000

# Docker (legacy static site)
cd scripts
docker-compose up -d  # Start
docker-compose down   # Stop
```

---

## 🌐 Deployment

### GitHub Pages (Auto)

1. **Enable Pages:** Settings → Pages → Source: "GitHub Actions"
2. **Push to main** → auto-deploy via `.github/workflows/deploy-next-gsm-pages.yml`
3. **Live URL:** `https://plevandm.github.io/SC_BH2026/`

**Details:** [`GITHUB-PAGES-SETUP.md`](./GITHUB-PAGES-SETUP.md)

### Vercel (Alternative)

1. Import repo → Root Directory: `next-gsm/`
2. Deploy

**Details:** [`DEPLOYMENT.md`](./DEPLOYMENT.md)

---

## 📖 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** — Deploy guides (GitHub Pages + Vercel)
- **[GITHUB-PAGES-SETUP.md](./GITHUB-PAGES-SETUP.md)** — Quick 3-step setup
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** — Contribution guidelines
- **[next-gsm/README.md](./next-gsm/README.md)** — Next.js app docs
- **[docs/](./docs/)** — Additional guides

---

## 🔧 Tech Stack

| Component | Technology |
|-----------|------------|
| **Frontend** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS v4, OKLCH colors |
| **Components** | Shadcn/ui, Radix UI |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **Forms** | React hooks, server actions |
| **CRM** | RO App API (Remonline) |
| **Deploy** | GitHub Pages (static export) / Vercel (SSR) |

---

## 🤝 Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md)

---

## 📜 License

MIT © 2026 NEXX GSM

---

## 📞 Support

- 📧 Email: info@scbucharest.ro
- 📱 Phone: +40 721 000 000
- 🌐 Website: https://scbucharest.ro
- 📖 Docs: [docs/](./docs/)

**Made with ❤️ by NEXX GSM team**
