/**
 * RO App API Integration
 * https://roapp.readme.io/reference/getting-started-with-api
 */

const RO_APP_API_BASE = "https://api.roapp.io";

type ROAppConfig = {
  apiKey: string;
  baseUrl?: string;
};

class ROAppClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(config: ROAppConfig) {
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl || RO_APP_API_BASE;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      "Authorization": `Bearer ${this.apiKey}`,
      "Content-Type": "application/json",
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`RO App API Error (${response.status}): ${error}`);
    }

    return response.json();
  }

  /**
   * Create a new booking
   * POST /bookings
   */
  async createBooking(data: {
    person_id?: number;
    person_name?: string;
    person_phone?: string;
    person_email?: string;
    location_id?: number;
    starts_at: string; // ISO 8601
    ends_at?: string;
    description?: string;
    device_type?: string;
  }) {
    return this.request("/bookings", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   * Create a new person (contact)
   * POST /people
   */
  async createPerson(data: {
    name: string;
    phone?: string;
    email?: string;
    tags?: string[];
    custom_fields?: Record<string, any>;
  }) {
    return this.request("/people", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   * Create a new task
   * POST /tasks
   */
  async createTask(data: {
    title: string;
    description?: string;
    person_id?: number;
    due_date?: string;
    assigned_to?: number;
  }) {
    return this.request("/tasks", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   * Create inquiry (запит на ремонт)
   * POST /inquiries
   */
  async createInquiry(data: {
    person_id?: number;
    person_name?: string;
    person_phone?: string;
    person_email?: string;
    inquiry_type_id?: number;
    description?: string;
    custom_fields?: Record<string, any>;
  }) {
    return this.request("/inquiries", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  /**
   * Get locations (для вибору філії)
   * GET /locations
   */
  async getLocations() {
    return this.request("/locations");
  }

  /**
   * Get inquiry types (типи запитів: ремонт, консультація, etc)
   * GET /inquiry-types
   */
  async getInquiryTypes() {
    return this.request("/inquiry-types");
  }
}

/**
 * Singleton instance (server-side only)
 */
export function getROAppClient(): ROAppClient | null {
  const apiKey = process.env.ROAPP_API_KEY;
  if (!apiKey) {
    console.warn("ROAPP_API_KEY not set — RO App integration disabled");
    return null;
  }
  return new ROAppClient({ apiKey });
}

/**
 * Types for forms
 */
export type BookingFormData = {
  name: string;
  phone: string;
  email?: string;
  device: string;
  problem: string;
  preferred_date?: string;
};

export type ContactFormData = {
  name: string;
  phone?: string;
  email?: string;
  message: string;
};

