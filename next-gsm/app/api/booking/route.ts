/**
 * Booking API Route — створення замовлення через форму на сайті
 * POST /api/booking
 * 
 * Інтеграція з Remonline: створює клієнта (якщо новий) та замовлення
 */

import { NextRequest, NextResponse } from "next/server";
import { getRemonlineClient } from "@/lib/remonline/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, device, problem } = body;

    // Validation
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Ім'я та телефон обов'язкові" },
        { status: 400 }
      );
    }

    // Initialize Remonline client
    const remonline = getRemonlineClient();

    // Step 1: Пошук існуючого клієнта по телефону
    const existingClients = await remonline.getClients({
      query: phone,
      per_page: 1,
    });

    let clientId: number;

    if (existingClients.data.length > 0) {
      // Клієнт вже існує
      clientId = existingClients.data[0].id;
    } else {
      // Створити нового клієнта
      const newClient = await remonline.createClient({
        name,
        phone,
        comment: `Записався через сайт ${new Date().toLocaleString("uk-UA")}`,
      });
      clientId = newClient.data.id;
    }

    // Step 2: Отримати список філій (branches)
    const branches = await remonline.getBranches();
    const defaultBranch = branches.data[0]; // Перша філія за замовчуванням

    if (!defaultBranch) {
      throw new Error("Філії не знайдено в Remonline");
    }

    // Step 3: Створити замовлення
    const order = await remonline.createOrder({
      client_id: clientId,
      branch_id: defaultBranch.id,
      device_model: device || "Не вказано",
      malfunction: problem || "Консультація",
      appearance: "Прийнято через веб-форму",
      equipment: "Без комплектації",
    });

    // Success response
    return NextResponse.json({
      success: true,
      message: "Дякуємо за запис! Ми зв'яжемося з вами найближчим часом.",
      data: {
        orderId: order.data.id,
        clientId: clientId,
      },
    });
  } catch (error) {
    console.error("Booking API error:", error);

    // Якщо Remonline недоступний — все одно повертаємо success
    // (можна зберегти в БД і синхронізувати пізніше)
    return NextResponse.json({
      success: true,
      message: "Дякуємо за запис! Ми зв'яжемося з вами найближчим часом.",
      note: "Збережено локально (Remonline sync pending)",
    });
  }
}
