# Changelog — NEXX GSM

Всі значущі зміни проєкту документуються тут.

Формат базується на [Keep a Changelog](https://keepachangelog.com/), версіонування за [Semantic Versioning](https://semver.org/).

---

## [2.0.0] - 2026-01-08 — Next.js Migration 🎉

### ✨ Added
- **Next.js 16 app** з React 19, TypeScript, Tailwind v4
- **8 секцій головної**: Hero, Stats, Services, Pricing, GORK, Courses, Contact, Gallery
- **Lucide icons** замість emoji (Smartphone, Laptop, Microscope, etc)
- **Реальні фото**: reception.png, workspace.png, facade.png, kids-training×2
- **RO App (Remonline) API** інтеграція для booking форми
- **Dark mode** з toggle та localStorage
- **SEO оптимізація**: robots, sitemap, OG tags, manifest
- **GitHub Actions** workflow для auto-deploy на GitHub Pages
- **PR/Issue templates** для кращої співпраці
- **Документація**: DEPLOYMENT.md, CONTRIBUTING.md, GITHUB-PAGES-SETUP.md

### 🔄 Changed
- Брендинг унифіковано: **NEXX GSM** (було: SC Bucharest/NEXT GSM)
- Структура репо організована: `next-gsm/`, `legacy/`, `docs/`, `scripts/`
- Калькулятор переписано на React (було: inline JavaScript)
- Форми підключені до RO App API

### 🗑️ Removed
- Застарілі `.bat`/`.ps1` скрипти (8 файлів)
- `cloudflared.exe` binary
- Дубльовані CSS файли (об'єднані в `main.css`)
- Старі скриншоти та мусор

### 🔒 Security
- API keys через environment variables (не в коді)
- `.gitignore` оновлено для Next.js outputs
- GDPR compliant Privacy Policy

---

## [1.0.0] - 2025-12-XX — Initial Static Site

### Added
- Static HTML website (index.html)
- 5 сторінок: Home, About, FAQ, Calculator, Privacy, Terms
- Docker setup з nginx
- SEO оптимізація
- Калькулятор вартості ремонту
- Multilingual підтримка (UK/RO)

---

## Unreleased / Planned

### 🔮 Future Enhancements
- [ ] i18n router для UK/RO мов (next-intl)
- [ ] Customer dashboard — перегляд статусу ремонту
- [ ] Telegram bot integration для нотифікацій
- [ ] Real-time статус замовлень (webhooks від RO App)
- [ ] Unit + E2E тести
- [ ] Performance optimization (Web Vitals)
- [ ] PWA support (offline mode)
- [ ] Admin dashboard для управління контентом

---

**[Compare versions on GitHub](https://github.com/PlevanDM/SC_BH2026/compare)**

