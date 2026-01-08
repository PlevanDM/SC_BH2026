# 🤝 Contributing to NEXX GSM

Дякуємо за інтерес до покращення проєкту! Ось короткий гайд як зробити свій внесок.

## 🚀 Quick Start

```bash
# 1. Fork репозиторій на GitHub
# 2. Склонуйте ваш fork
git clone https://github.com/YOUR_USERNAME/SC_BH2026.git
cd SC_BH2026

# 3. Встановіть залежності
cd next-gsm
npm install

# 4. Запустіть dev сервер
npm run dev
# → http://localhost:3000
```

## 🌿 Workflow

### 1. Створіть нову гілку

```bash
git checkout -b feature/my-awesome-feature
# або
git checkout -b fix/bug-description
```

**Naming convention:**
- `feature/` — нова функція
- `fix/` — виправлення бага
- `docs/` — оновлення документації
- `refactor/` — рефакторинг
- `style/` — UI/CSS зміни

### 2. Зробіть зміни

- Пишіть чистий, читабельний код
- Додавайте коментарі для складної логіки
- Дотримуйтесь існуючого стилю коду

### 3. Перевірте код

```bash
# Lint
npm run lint

# TypeScript перевірка
npm run build

# Локальний тест
npm run dev
```

### 4. Commit

Використовуйте **чіткі commit messages**:

```bash
# ✅ Добре
git commit -m "Add dark mode toggle to navigation"
git commit -m "Fix calculator total calculation bug"
git commit -m "Update deployment docs with Vercel config"

# ❌ Погано
git commit -m "fix"
git commit -m "updates"
git commit -m "asdf"
```

**Формат (optional):**
```
<type>: <short description>

<longer description if needed>
```

**Types:**
- `feat:` — нова функція
- `fix:` — виправлення бага
- `docs:` — документація
- `style:` — форматування, css
- `refactor:` — рефакторинг
- `test:` — тести
- `chore:` — build, deps

### 5. Push та створіть Pull Request

```bash
git push origin feature/my-awesome-feature
```

Потім на GitHub:
1. Відкрийте ваш fork
2. Натисніть **"Compare & pull request"**
3. Заповніть PR template
4. Натисніть **"Create pull request"**

## 📋 Pull Request Guidelines

- [ ] **Опис:** Чітко опишіть що змінено і чому
- [ ] **Скріншоти:** Додайте для UI змін (до/після)
- [ ] **Тести:** Перевірте локально
- [ ] **Lint:** Код проходить `npm run lint`
- [ ] **Build:** Успішний `npm run build`
- [ ] **Conflicts:** Немає конфліктів з `main`

## 🎨 Code Style

### TypeScript/React

```tsx
// ✅ Використовуйте function components
export function MyComponent() {
  return <div>Hello</div>;
}

// ✅ Типізуйте props
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

// ✅ Використовуйте named exports
export { MyComponent, Button };

// ❌ Уникайте default exports (окрім page.tsx)
```

### Tailwind CSS

```tsx
// ✅ Використовуйте Tailwind classes
<div className="flex items-center gap-4 rounded-lg bg-primary p-4">

// ❌ Уникайте inline styles
<div style={{ display: 'flex', padding: '16px' }}>
```

### Imports

```tsx
// ✅ Групуйте imports
// 1. React/Next
import { useState } from "react";
import Link from "next/link";

// 2. External libs
import { motion } from "framer-motion";

// 3. Internal components
import { Button } from "@/components/ui/button";

// 4. Utils/types
import { cn } from "@/lib/utils";
import type { MyType } from "./types";
```

## 🐛 Bug Reports

Створіть Issue з деталями:
- Опис проблеми
- Кроки для відтворення
- Очікувана vs фактична поведінка
- Screenshots (якщо є)
- Environment (OS, browser)

## ✨ Feature Requests

Створіть Issue описавши:
- Яку функцію ви хочете
- Навіщо вона потрібна
- Як це має працювати

## 📞 Questions?

- 💬 GitHub Discussions
- 📧 Email: info@nextgsm.ro

## 📜 License

Контрибьючи в проєкт, ви погоджуєтесь що ваш код буде ліцензовано під MIT License.

---

**Дякуємо за ваш внесок!** 🎉

