# 🔄 MIGRATION GUIDE — Static HTML → Next.js

Як перейти з legacy static сайту на Next.js app.

---

## 🎯 Overview

**Було:** Static HTML site (`legacy/index.html`, CSS, vanilla JS)  
**Стало:** Next.js 16 app (`next-gsm/`) з React, TypeScript, Tailwind v4

**Результат:**
- ⚡ Швидше (Turbopack, code splitting)
- 🎨 Сучасніше (React components, animations)
- 🔧 Легше підтримувати (TypeScript, component reuse)
- 🔄 API integration (RO App)
- 🌐 Better SEO (Next.js Metadata API)

---

## 📋 What Was Migrated

### ✅ Content (100%)

| Legacy | Next.js | Status |
|--------|---------|--------|
| `index.html` sections | `app/page.tsx` | ✅ All 8 sections |
| `about.html` | `app/about/page.tsx` | ✅ Static content |
| `faq.html` | `app/faq/page.tsx` | ✅ Static content |
| `calculator.html` | `app/calculator/page.tsx` | ✅ React rewrite |
| `privacy.html` | `app/privacy/page.tsx` | ✅ GDPR compliant |
| `terms.html` | `app/terms/page.tsx` | ✅ Legal text |
| `404.html` | `app/not-found.tsx` | ✅ Custom 404 |

### ✅ Features (100%)

- [x] Hero section з фото
- [x] Stats counters
- [x] Services grid (8 cards)
- [x] Pricing plans (3 tiers)
- [x] GORK Protect benefits
- [x] Kids Courses з фото
- [x] Contact form → RO App API
- [x] Photo gallery
- [x] Calculator (React state)
- [x] Dark mode toggle
- [x] Multilingual support (UK text ready)

### ✅ Assets (100%)

- [x] `/images/` → `next-gsm/public/images/`
- [x] `logo.svg` → `next-gsm/public/logo.svg`
- [x] `favicon.svg` → `next-gsm/app/icon.svg`
- [x] `manifest.json` → `next-gsm/public/manifest.json`
- [x] `robots.txt` → `next-gsm/public/robots.txt`
- [x] `sitemap.xml` → `next-gsm/public/sitemap.xml`

### 🔄 Upgraded

| Було | Стало |
|------|-------|
| Emoji icons (📱🔬) | Lucide React icons |
| Inline CSS | Tailwind classes |
| `onclick="..."` | React event handlers |
| `<script>` tags | TypeScript modules |
| Manual DOM | React state management |
| Static forms | API routes + validation |

---

## 🛠️ Migration Process (Reference)

### Step 1: Setup Next.js
```bash
npx create-next-app@latest next-gsm --typescript --tailwind --app --use-npm --yes
cd next-gsm
npm install framer-motion lucide-react @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

### Step 2: Configure Tailwind v4
Update `app/globals.css`:
```css
@import "tailwindcss";
@custom-variant dark (&:is(.dark *));
@theme inline { /* OKLCH colors */ }
```

### Step 3: Create UI Components
```bash
mkdir -p components/ui
# Add button.tsx, card.tsx, badge.tsx
```

### Step 4: Migrate HTML Sections
```tsx
// Example: Hero section
function HeroSection() {
  return (
    <section className="...">
      <h1>...</h1>
      {/* Convert HTML to JSX */}
    </section>
  );
}
```

### Step 5: Replace Icons
```diff
- <div>📱 Phone</div>
+ <Smartphone className="w-6 h-6" />
```

### Step 6: Migrate JavaScript Logic
```tsx
// Old: inline onclick
- <button onclick="selectDevice('iphone')">

// New: React state
+ const [device, setDevice] = useState(null);
+ <button onClick={() => setDevice('iphone')}>
```

### Step 7: Add API Integration
```typescript
// app/api/booking/route.ts
export async function POST(request) {
  const data = await request.json();
  await roapp.createInquiry(data);
  return Response.json({ success: true });
}
```

### Step 8: Configure for Static Export
```typescript
// next.config.ts
export default {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
```

---

## 🔍 Key Differences

### Routing
- **Legacy:** `<a href="/about.html">`
- **Next.js:** `<Link href="/about">`

### Styling
- **Legacy:** `<div style="color: red">`
- **Next.js:** `<div className="text-red-500">`

### State Management
- **Legacy:** `let selectedDevice = null;` (global)
- **Next.js:** `const [device, setDevice] = useState(null);` (React)

### Forms
- **Legacy:** `<form onsubmit="handleSubmit()">`
- **Next.js:** `<form onSubmit={handleSubmit}>` + API route

### Icons
- **Legacy:** Emoji (📱) або Material Icons
- **Next.js:** Lucide React (`<Smartphone />`)

---

## ⚠️ Breaking Changes

### URLs (trailing slash)
- Old: `https://site.com/about.html`
- New: `https://site.com/about/`

**Fix:** Redirects в `vercel.json` або nginx

### JavaScript Global Functions
- Old: `function openBooking() { ... }` (global scope)
- New: React components (no globals)

**Fix:** Refactor to React state/props

### CSS Class Names
- Old: BEM notation (`.feature-card__title`)
- New: Tailwind utility classes

**Fix:** No fix needed (works better)

---

## 📝 Lessons Learned

### ✅ Wins
- TypeScript catches bugs early
- Tailwind v4 faster than custom CSS
- Next.js Image автоматично оптимізує
- React state easier than DOM manipulation
- GitHub Actions saves deploy time

### ⚠️ Challenges
- Static export має обмеження (no API routes в export)
  - **Solution:** Hybrid — static pages + server API routes
- Emoji → Lucide migration manual
  - **Solution:** Find-replace + manual cleanup
- Multilingual not built-in
  - **Solution:** `next-intl` (planned Phase 2)

---

## 🔮 Future Migrations

### Planned (Phase 2)
- [ ] `translations.js` → `next-intl` i18n
- [ ] `site-config.js` → Environment variables
- [ ] Calculator prices → RO App API sync
- [ ] Google Analytics inline → `@next/third-parties`

---

## 🆘 Rollback Plan

Якщо щось пішло не так, legacy site ще є:

```bash
cd legacy
npx http-server -p 8000
# → http://localhost:8000
```

**Або через Docker:**
```bash
cd scripts
docker-compose up -d
```

Legacy залишається як **backup** та **reference**.

---

## 📞 Questions?

See [`QUICK-REFERENCE.md`](./QUICK-REFERENCE.md) for commands or create an Issue.

**Migration успішна!** ✅

