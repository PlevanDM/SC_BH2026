export const SITE_CONFIG = {
  phoneE164: "+40721000000",
  phoneDisplay: "+40 721 000 000",
  whatsappNumber: "40721000000",
  telegramHandle: "scbucharest",
  email: "info@scbucharest.ro",
  addressLine1: "Strada Victoriei, Nr. 10",
  addressLine2: "Sector 1, București, Romania",
  mapsLat: 44.4396,
  mapsLng: 26.0963,
  hoursWeekdays: "09:00 - 19:00",
  hoursSaturday: "10:00 - 18:00",
  hoursSunday: "Закрито",
  social: {
    instagram: "scbucharest",
    facebook: "scbucharest",
    tiktok: "@scbucharest",
  },
} as const;

export function getDirectionsUrl() {
  return `https://maps.google.com/?q=${SITE_CONFIG.mapsLat},${SITE_CONFIG.mapsLng}`;
}

export function getWhatsAppUrl(text?: string) {
  if (!text) return `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function getTelegramUrl() {
  return `https://t.me/${SITE_CONFIG.telegramHandle}`;
}


