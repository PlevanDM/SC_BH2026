# 🔧 Remonline API Integration

Інтеграція з [Remonline](https://remonline.app) — CRM системою для сервісних центрів.

## 📚 Документація

- API Docs: https://roapp.readme.io/reference/getting-started-with-api
- Dashboard: https://remonline.app

## 🔑 Налаштування

### 1. Отримайте API ключ

1. Зайдіть у Remonline → Налаштування → API
2. Створіть новий API ключ
3. Скопіюйте його

### 2. Додайте в `.env.local`

```env
# Remonline API Key (НЕ public - тільки на сервері!)
REMONLINE_API_KEY=your_api_key_here

# Альтернативно (якщо потрібно на клієнті — НЕ РЕКОМЕНДУЮ!)
# NEXT_PUBLIC_REMONLINE_API_KEY=your_api_key_here
```

⚠️ **ВАЖЛИВО:** API ключ має доступ до всіх даних вашого сервісу! НЕ додавайте його в публічні змінні (`NEXT_PUBLIC_*`) — використовуйте тільки на сервері (API routes).

## 📖 Використання

### Приклад 1: Створення клієнта та замовлення з форми

```typescript
// app/api/booking/route.ts
import { getRemonlineClient } from "@/lib/remonline/client";

export async function POST(request: Request) {
  const { name, phone, device, problem } = await request.json();
  const remonline = getRemonlineClient();

  // 1. Створити або знайти клієнта
  const client = await remonline.createClient({ name, phone });

  // 2. Отримати філію
  const branches = await remonline.getBranches();
  const branch = branches.data[0];

  // 3. Створити замовлення
  const order = await remonline.createOrder({
    client_id: client.data.id,
    branch_id: branch.id,
    device_model: device,
    malfunction: problem,
  });

  return Response.json({ orderId: order.data.id });
}
```

### Приклад 2: Відправка форми з клієнта

```typescript
// components/BookingForm.tsx
"use client";

async function handleSubmit(data: FormData) {
  const response = await fetch("/api/booking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: data.get("name"),
      phone: data.get("phone"),
      device: data.get("device"),
      problem: data.get("problem"),
    }),
  });

  const result = await response.json();
  if (result.success) {
    alert("✅ Дякуємо! Ми зв'яжемося з вами найближчим часом.");
  }
}
```

### Приклад 3: Отримання списку послуг для калькулятора

```typescript
// app/api/services/route.ts
import { getRemonlineClient } from "@/lib/remonline/client";

export async function GET() {
  const remonline = getRemonlineClient();
  const workTypes = await remonline.getWorkTypes();

  return Response.json(workTypes.data);
}
```

### Приклад 4: Отримання замовлень клієнта

```typescript
const remonline = getRemonlineClient();

// Всі замовлення
const orders = await remonline.getOrders({
  page: 1,
  per_page: 20,
});

// Замовлення конкретного клієнта
const clientOrders = await remonline.getOrders({
  client_id: 123,
  status: "in_progress",
});

// Замовлення за період
const monthOrders = await remonline.getOrders({
  date_from: "2026-01-01",
  date_to: "2026-01-31",
});
```

## 🎯 Доступні ендпоінти

### Клієнти
- `GET /clients` — список клієнтів
- `POST /clients` — створити клієнта
- `GET /clients/{id}` — отримати клієнта
- `PUT /clients/{id}` — оновити клієнта

### Замовлення
- `GET /orders` — список замовлень
- `POST /orders` — створити замовлення
- `GET /orders/{id}` — отримати замовлення
- `PUT /orders/{id}/status` — оновити статус

### Філії
- `GET /branches` — список філій

### Послуги
- `GET /work-types` — список типів робіт

## 🔗 Де використовується

1. **Форма запису** (`/api/booking`) → створює клієнта та замовлення
2. **Калькулятор** (майбутнє) → може підтягувати ціни з Remonline
3. **Кабінет клієнта** (майбутнє) → перегляд статусу ремонту
4. **Webhooks** (майбутнє) → сповіщення про зміну статусу

## ⚠️ Security

- ✅ API ключ тільки на сервері (API routes)
- ✅ Validation всіх inputs
- ✅ Rate limiting (додайте якщо очікується багато запитів)
- ✅ Error handling (не розкривайте деталі помилок клієнту)

## 🧪 Тестування

```bash
# Локально (без реального API ключа)
# Створіть mock в tests/
```

```typescript
// Mock для тестів
export const mockRemonlineClient = {
  createClient: jest.fn(),
  createOrder: jest.fn(),
  // ...
};
```

## 📝 TODO

- [ ] Додати webhook handler для отримання оновлень від Remonline
- [ ] Синхронізація прайс-листа з Remonline (для калькулятора)
- [ ] Кабінет клієнта — перегляд статусу ремонту по номеру телефону
- [ ] Telegram bot integration для нотифікацій
- [ ] Rate limiting для API routes

---

**Готово до використання!** ✅

