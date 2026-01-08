# ⚡ QUICK REFERENCE — NEXX GSM

Швидкий довідник команд та посилань для щоденної роботи.

---

## 🚀 Development Commands

```bash
# Start dev server
cd next-gsm && npm run dev
# або з кореня:
npm run next:dev

# Production build
npm run next:build

# Lint check
npm run next:lint

# Install dependencies
npm run next:install
```

**Dev URL:** http://localhost:3000

---

## 📁 Quick File Access

| Файл | Призначення |
|------|-------------|
| `next-gsm/app/page.tsx` | Головна сторінка (Hero, Services, etc) |
| `next-gsm/app/layout.tsx` | Root layout (Shell, metadata) |
| `next-gsm/components/site/Shell.tsx` | Header + Footer |
| `next-gsm/components/site/BookingForm.tsx` | Форма запису |
| `next-gsm/lib/site-config.ts` | Контакти, години роботи |
| `next-gsm/lib/roapp.ts` | RO App API client |
| `next-gsm/app/api/booking/route.ts` | Booking API endpoint |
| `next-gsm/app/globals.css` | Tailwind config + custom styles |

---

## 🌐 Important URLs

### Development
- **Local:** http://localhost:3000
- **Network:** http://192.168.31.92:3000

### Production
- **GitHub Repo:** https://github.com/PlevanDM/SC_BH2026
- **GitHub Pages:** https://plevandm.github.io/SC_BH2026/ (після активації)
- **Actions:** https://github.com/PlevanDM/SC_BH2026/actions

### External Services
- **RO App API:** https://api.roapp.io
- **RO App Docs:** https://roapp.readme.io/reference/getting-started-with-api
- **Vercel:** https://vercel.com

---

## 🔑 Environment Variables

Create `next-gsm/.env.local`:

```bash
# RO App (Remonline) API Key
ROAPP_API_KEY=your_api_key_here

# Optional: Analytics
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

**Get API key:** RO App → Settings → API

---

## 🐛 Troubleshooting

### Build fails
```bash
cd next-gsm
rm -rf .next out node_modules
npm install
npm run build
```

### Port 3000 in use
```bash
# Kill process
taskkill /F /IM node.exe
# або
npm run dev  # Next автоматично вибере 3001
```

### Git conflicts
```bash
git pull origin main --rebase
# resolve conflicts
git rebase --continue
```

---

## 📝 Quick Edits

### Оновити контакти
Файл: `next-gsm/lib/site-config.ts`

### Оновити ціни в калькуляторі
Файл: `next-gsm/app/calculator/page.tsx` → `SERVICES` const

### Додати нову сторінку
```bash
cd next-gsm/app
mkdir my-page
touch my-page/page.tsx
```

### Оновити SEO metadata
Файл: `next-gsm/app/layout.tsx` → `metadata` export

---

## 🔄 Git Workflow

```bash
# Pull latest
git pull origin main

# Create feature branch
git checkout -b feature/my-feature

# Make changes...
# ...

# Commit
git add -A
git commit -m "Add my feature"

# Push
git push origin feature/my-feature

# Create PR on GitHub
```

---

## 📦 Deployment

### GitHub Pages
1. Settings → Pages → Source: "GitHub Actions"
2. Push to `main` → auto-deploy

### Vercel
1. Import repo
2. Root Directory: `next-gsm/`
3. Deploy

**Full guide:** [`DEPLOYMENT.md`](./DEPLOYMENT.md)

---

## 📚 Documentation Index

| Документ | Що там |
|----------|--------|
| [`README.md`](./README.md) | Головний README, quick start |
| [`DEPLOYMENT.md`](./DEPLOYMENT.md) | Детальні інструкції деплою |
| [`GITHUB-PAGES-SETUP.md`](./GITHUB-PAGES-SETUP.md) | 3-step швидкий старт Pages |
| [`CONTRIBUTING.md`](./CONTRIBUTING.md) | Як контрибьютити |
| [`CHANGELOG.md`](./CHANGELOG.md) | Історія версій |
| [`PROJECT-STATUS.md`](./PROJECT-STATUS.md) | Поточний статус, metrics |
| [`ROADMAP.md`](./ROADMAP.md) | Цей файл — план розвитку |
| [`next-gsm/README.md`](./next-gsm/README.md) | Next.js app docs |
| [`docs/`](./docs/) | Додаткові гайди (8 файлів) |

---

## 🆘 Need Help?

1. **Check docs:** [`docs/`](./docs/) папка
2. **Search Issues:** https://github.com/PlevanDM/SC_BH2026/issues
3. **Create Issue:** Bug report або feature request
4. **Contact:** info@scbucharest.ro

---

**Bookmark this page for quick access!** 🔖

