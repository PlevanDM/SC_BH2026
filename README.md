# NEXX GSM — сайт (static + Next.js)

Преміум сервіс-центр по ремонту телефонів, ноутбуків та мобільної електроніки у Бухаресті.

## 🚀 Швидкий Старт

### ✅ Новий Next.js застосунок (React + TS + Tailwind v4)

Міграція в React/Next.js знаходиться в папці `next-gsm/`.

```bash
cd "next-gsm"
npm install
npm run dev
```

Продакшн-білд:

```bash
cd "next-gsm"
npm run build
npm run start
```

### 🐳 Запуск в Docker (Рекомендовано)

1. **Збілдити та запустити контейнер:**
   ```bash
   # Через docker-compose (найпростіше)
   docker-compose up -d
   
   # Або через docker
   docker build -t sc-bucharest .
   docker run -d -p 8080:80 --name sc-bucharest-website sc-bucharest
   ```

2. **Відкрити в браузері:**
   - `http://localhost:8080`

3. **Зупинити контейнер:**
   ```bash
   docker-compose down
   # або
   docker stop sc-bucharest-website
   ```

### Локальний Запуск (Без Docker)

1. **Відкрити файл напряму:**
   - Подвійний клік на `index.html`
   - Або перетягнути файл у браузер

2. **Через HTTP сервер:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Або Node.js
   npx http-server -p 8000
   ```
   Потім відкрити: `http://localhost:8000`

## 📁 Структура Проекту

```
NEXX GSM/
├── index.html          # Головна сторінка
├── privacy.html        # Політика приватності
├── terms.html          # Умови використання
├── robots.txt          # SEO: правила для пошукових роботів
├── sitemap.xml         # SEO: карта сайту
├── favicon.svg         # Іконка сайту
├── Dockerfile          # Docker конфігурація
├── docker-compose.yml  # Docker Compose конфігурація
├── nginx.conf          # Nginx конфігурація
├── .dockerignore       # Файли для ігнорування в Docker
└── README.md           # Цей файл
```

## ✨ Функціональність

### Основні Секції:
- ✅ **Послуги** - ремонт, діагностика, чистка, кастомізація, trade-in
- ✅ **Менеджер-Підписка** - €9.99/місяць, безлімітні чистки, 24/7 підтримка
- ✅ **GORK Protect** - програма захисту з безплатним кейсом
- ✅ **Дитячі Курси** - малювання, програмування, фотографія
- ✅ **Тарифи** - прозорі ціни на послуги
- ✅ **Контакти** - адреса, телефон, email, соцмережі

### SEO Оптимізація:
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph для соцмереж
- ✅ Schema.org структурована розмітка
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt

### Технічні Особливості:
- ✅ Responsive дизайн (мобільні, планшети, десктоп)
- ✅ Плавна навігація
- ✅ Модальні вікна для запису
- ✅ Форми з валідацією
- ✅ Google Analytics готовий (потрібно додати ID)

## 🔧 Налаштування

### Google Analytics
1. Отримайте Tracking ID з Google Analytics
2. Відкрийте `index.html`
3. Знайдіть рядок: `gtag('config', 'G-XXXXXXXXXX');`
4. Замініть `G-XXXXXXXXXX` на ваш реальний ID

### Контактна Інформація
Оновіть в `index.html`:
- Телефон: `+40 (0) XXX XXX XXX`
- Email: `info@scbucharest.ro`
- Адреса: `Sector 1, Bucuresti, Romania`

### Соцмережі
Оновіть посилання на соцмережі:
- Instagram: `https://www.instagram.com/scbucharest`
- Facebook: `https://www.facebook.com/scbucharest`
- TikTok: `https://www.tiktok.com/@scbucharest`
- Telegram: `https://t.me/scbucharest`

## 📱 Додавання Зображень

Для кращого вигляду додайте:
- `logo.png` - логотип (рекомендовано 200x200px)
- `og-image.jpg` - зображення для соцмереж (1200x630px)
- `favicon.ico` - іконка сайту (16x16, 32x32, 48x48px)
- Фото інтер'єру сервіс-центру
- Фото робіт та послуг

## 🌐 Деплой на Хостинг

### Рекомендовані Хостинги:
- **Netlify** - безкоштовний, простий деплой
- **Vercel** - швидкий, для статичних сайтів
- **GitHub Pages** - безкоштовний через Git
- **Cloudflare Pages** - швидкий CDN

### Кроки для Netlify:
1. Зареєструйтесь на netlify.com
2. Перетягніть папку проекту
3. Сайт буде доступний за 5 хвилин!

## 📝 TODO (Наступні Кроки)

- [ ] Додати реальні фото інтер'єру
- [ ] Створити галерею робіт
- [ ] Інтегрувати платіжну систему (Stripe/PayPal)
- [ ] Додати календар бронювання
- [ ] Створити блог з порадами
- [ ] Додати мультимовність (RO/EN)
- [ ] Інтегрувати з CRM системою

## 📞 Підтримка

Питання? Зв'яжіться:
- Email: info@scbucharest.ro
- Телефон: +40 (0) XXX XXX XXX

---

© 2026 NEXX GSM. Всі права захищені.

