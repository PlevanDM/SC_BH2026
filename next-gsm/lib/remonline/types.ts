/**
 * Remonline API Types
 * Documentation: https://roapp.readme.io/reference/getting-started-with-api
 */

// ============================================
// AUTH
// ============================================

export interface RemonlineAuth {
  apiKey: string; // API ключ з налаштувань Remonline
}

// ============================================
// CLIENT (Customer)
// ============================================

export interface RemonlineClient {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  comment?: string;
  created_at: string;
  updated_at: string;
  // Custom fields
  custom_fields?: Record<string, unknown>;
}

export interface CreateClientPayload {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  comment?: string;
}

// ============================================
// ORDER (Repair Order)
// ============================================

export type OrderStatus =
  | "new" // Новий
  | "in_progress" // В роботі
  | "waiting_for_parts" // Очікується запчастина
  | "ready" // Готовий
  | "issued" // Виданий
  | "canceled"; // Скасовано

export interface RemonlineOrder {
  id: number;
  client_id: number;
  client?: RemonlineClient;
  branch_id: number;
  status: OrderStatus;
  device_model?: string;
  device_sn?: string; // Serial Number / IMEI
  malfunction?: string; // Опис проблеми
  appearance?: string; // Зовнішній вигляд (фотофіксація)
  equipment?: string; // Комплектація
  works: RemonlineWork[]; // Послуги/роботи
  parts: RemonlinePart[]; // Запчастини
  total: number; // Загальна сума
  paid: number; // Сплачено
  prepayment?: number; // Передоплата
  created_at: string;
  estimated_completion?: string; // Очікуваний час завершення
  updated_at: string;
}

export interface RemonlineWork {
  id: number;
  title: string;
  price: number;
  quantity?: number;
  warranty?: number; // Гарантія в днях
}

export interface RemonlinePart {
  id: number;
  title: string;
  price: number;
  quantity: number;
  warranty?: number;
}

export interface CreateOrderPayload {
  client_id: number;
  branch_id: number;
  device_model: string;
  device_sn?: string;
  malfunction: string;
  appearance?: string;
  equipment?: string;
  prepayment?: number;
  works?: Array<{
    id: number; // ID послуги з довідника
    quantity?: number;
  }>;
  parts?: Array<{
    id: number; // ID запчастини зі складу
    quantity: number;
  }>;
}

// ============================================
// BRANCH (Location)
// ============================================

export interface RemonlineBranch {
  id: number;
  title: string;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  working_hours?: string;
}

// ============================================
// WORK TYPE (Service)
// ============================================

export interface RemonlineWorkType {
  id: number;
  title: string;
  price: number;
  duration?: number; // Тривалість у хвилинах
  warranty?: number; // Гарантія в днях
  category?: string;
}

// ============================================
// API RESPONSE
// ============================================

export interface RemonlineApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface RemonlineListResponse<T> {
  data: T[];
  total: number;
  page: number;
  per_page: number;
}

// ============================================
// WEBHOOKS
// ============================================

export type RemonlineWebhookEvent =
  | "order.created"
  | "order.updated"
  | "order.status_changed"
  | "client.created"
  | "payment.received";

export interface RemonlineWebhook {
  event: RemonlineWebhookEvent;
  data: {
    order?: RemonlineOrder;
    client?: RemonlineClient;
    old_status?: OrderStatus;
    new_status?: OrderStatus;
  };
  timestamp: string;
}

