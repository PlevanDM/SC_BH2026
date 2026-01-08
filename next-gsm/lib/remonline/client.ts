/**
 * Remonline API Client
 * Documentation: https://roapp.readme.io/reference/getting-started-with-api
 * 
 * Base URL: https://api.remonline.app
 * Authentication: API Key в headers (X-RemonlineApiKey)
 */

import type {
  RemonlineClient,
  CreateClientPayload,
  RemonlineOrder,
  CreateOrderPayload,
  RemonlineBranch,
  RemonlineWorkType,
  RemonlineApiResponse,
  RemonlineListResponse,
} from "./types";

const BASE_URL = "https://api.remonline.app";

export class RemonlineAPI {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${BASE_URL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "X-RemonlineApiKey": this.apiKey,
        ...options.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(
        `Remonline API error: ${response.status} - ${error.message || response.statusText}`
      );
    }

    return response.json();
  }

  // ============================================
  // CLIENTS
  // ============================================

  /**
   * Отримати список клієнтів
   * GET /clients
   */
  async getClients(params?: {
    page?: number;
    per_page?: number;
    query?: string; // Пошук по імені/телефону
  }): Promise<RemonlineListResponse<RemonlineClient>> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set("page", params.page.toString());
    if (params?.per_page) searchParams.set("per_page", params.per_page.toString());
    if (params?.query) searchParams.set("query", params.query);

    return this.request<RemonlineListResponse<RemonlineClient>>(
      `/clients?${searchParams}`
    );
  }

  /**
   * Створити нового клієнта
   * POST /clients
   */
  async createClient(payload: CreateClientPayload): Promise<RemonlineApiResponse<RemonlineClient>> {
    return this.request<RemonlineApiResponse<RemonlineClient>>("/clients", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  /**
   * Отримати клієнта за ID
   * GET /clients/{id}
   */
  async getClient(clientId: number): Promise<RemonlineApiResponse<RemonlineClient>> {
    return this.request<RemonlineApiResponse<RemonlineClient>>(
      `/clients/${clientId}`
    );
  }

  /**
   * Оновити клієнта
   * PUT /clients/{id}
   */
  async updateClient(
    clientId: number,
    payload: Partial<CreateClientPayload>
  ): Promise<RemonlineApiResponse<RemonlineClient>> {
    return this.request<RemonlineApiResponse<RemonlineClient>>(
      `/clients/${clientId}`,
      {
        method: "PUT",
        body: JSON.stringify(payload),
      }
    );
  }

  // ============================================
  // ORDERS
  // ============================================

  /**
   * Отримати список замовлень
   * GET /orders
   */
  async getOrders(params?: {
    page?: number;
    per_page?: number;
    status?: string;
    client_id?: number;
    date_from?: string; // YYYY-MM-DD
    date_to?: string;
  }): Promise<RemonlineListResponse<RemonlineOrder>> {
    const searchParams = new URLSearchParams();
    if (params?.page) searchParams.set("page", params.page.toString());
    if (params?.per_page) searchParams.set("per_page", params.per_page.toString());
    if (params?.status) searchParams.set("status", params.status);
    if (params?.client_id) searchParams.set("client_id", params.client_id.toString());
    if (params?.date_from) searchParams.set("date_from", params.date_from);
    if (params?.date_to) searchParams.set("date_to", params.date_to);

    return this.request<RemonlineListResponse<RemonlineOrder>>(
      `/orders?${searchParams}`
    );
  }

  /**
   * Створити нове замовлення
   * POST /orders
   */
  async createOrder(payload: CreateOrderPayload): Promise<RemonlineApiResponse<RemonlineOrder>> {
    return this.request<RemonlineApiResponse<RemonlineOrder>>("/orders", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  }

  /**
   * Отримати замовлення за ID
   * GET /orders/{id}
   */
  async getOrder(orderId: number): Promise<RemonlineApiResponse<RemonlineOrder>> {
    return this.request<RemonlineApiResponse<RemonlineOrder>>(
      `/orders/${orderId}`
    );
  }

  /**
   * Оновити статус замовлення
   * PUT /orders/{id}/status
   */
  async updateOrderStatus(
    orderId: number,
    status: string
  ): Promise<RemonlineApiResponse<RemonlineOrder>> {
    return this.request<RemonlineApiResponse<RemonlineOrder>>(
      `/orders/${orderId}/status`,
      {
        method: "PUT",
        body: JSON.stringify({ status }),
      }
    );
  }

  // ============================================
  // BRANCHES
  // ============================================

  /**
   * Отримати список філій
   * GET /branches
   */
  async getBranches(): Promise<RemonlineApiResponse<RemonlineBranch[]>> {
    return this.request<RemonlineApiResponse<RemonlineBranch[]>>("/branches");
  }

  // ============================================
  // WORK TYPES (Services)
  // ============================================

  /**
   * Отримати список типів робіт (послуг)
   * GET /work-types
   */
  async getWorkTypes(): Promise<RemonlineApiResponse<RemonlineWorkType[]>> {
    return this.request<RemonlineApiResponse<RemonlineWorkType[]>>("/work-types");
  }
}

/**
 * Singleton instance для використання в додатку
 * Встановіть REMONLINE_API_KEY в .env.local
 */
export function getRemonlineClient() {
  const apiKey = process.env.NEXT_PUBLIC_REMONLINE_API_KEY || process.env.REMONLINE_API_KEY;

  if (!apiKey) {
    throw new Error(
      "REMONLINE_API_KEY not found. Add it to .env.local:\n" +
      "REMONLINE_API_KEY=your_api_key_here"
    );
  }

  return new RemonlineAPI(apiKey);
}

