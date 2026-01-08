/**
 * NEXX GSM - Site Config
 * One place to set real phone/address/links for production.
 *
 * IMPORTANT: Replace placeholders below with REAL values.
 */

window.SC_CONFIG = {
  // ========================================
  // 🔴 ВАЖЛИВО: Замініть на РЕАЛЬНІ дані!
  // ========================================
  
  // Phone in E.164 for tel: and WhatsApp
  phoneE164: "+40721000000", // TODO: Замінити на реальний номер
  phoneDisplay: "+40 721 000 000", // TODO: Замінити на реальний номер

  // WhatsApp number without plus sign and spaces
  whatsappNumber: "40721000000", // TODO: Замінити на реальний номер

  // Telegram handle (without @)
  telegramHandle: "scbucharest",

  // Email
  email: "info@scbucharest.ro",

  // Address lines
  addressLine1: "Strada Victoriei, Nr. 10",
  addressLine2: "Sector 1, București, Romania",

  // Google Maps coordinates (lat,lng) - центр Бухареста
  mapsLat: 44.4396,
  mapsLng: 26.0963,

  // Opening hours text (display only)
  hoursWeekdays: "09:00 - 19:00",
  hoursSaturday: "10:00 - 18:00",
  hoursSunday: "Закрито",

  // Social media
  instagram: "scbucharest",
  facebook: "scbucharest",
  tiktok: "@scbucharest",
};

function isRealValue(v) {
  return typeof v === "string" && v.trim() && !/X{3,}/i.test(v);
}

function safeText(el, value) {
  if (el && typeof value === "string" && value.trim()) el.textContent = value;
}

function safeHref(el, value) {
  if (el && typeof value === "string" && value.trim()) el.setAttribute("href", value);
}

function applySiteConfig() {
  const cfg = window.SC_CONFIG || {};

  // Phone (text)
  if (isRealValue(cfg.phoneDisplay)) {
    document.querySelectorAll("[data-config='phoneText']").forEach((el) => safeText(el, cfg.phoneDisplay));
  }
  // Phone (tel:)
  if (isRealValue(cfg.phoneE164)) {
    document.querySelectorAll("[data-config='phoneTel']").forEach((el) => safeHref(el, `tel:${cfg.phoneE164 || ""}`));
  }

  // WhatsApp
  document.querySelectorAll("[data-config='whatsappLink']").forEach((el) => {
    if (!isRealValue(cfg.whatsappNumber)) return;
    const text = el.getAttribute("data-whatsapp-text");
    const url = text
      ? `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(text)}`
      : `https://wa.me/${cfg.whatsappNumber}`;
    safeHref(el, url);
  });

  // Telegram
  document.querySelectorAll("[data-config='telegramLink']").forEach((el) => {
    if (!isRealValue(cfg.telegramHandle)) return;
    safeHref(el, `https://t.me/${cfg.telegramHandle}`);
  });

  // Address
  if (isRealValue(cfg.addressLine1)) document.querySelectorAll("[data-config='address1']").forEach((el) => safeText(el, cfg.addressLine1 || ""));
  if (isRealValue(cfg.addressLine2)) document.querySelectorAll("[data-config='address2']").forEach((el) => safeText(el, cfg.addressLine2 || ""));

  // Directions link
  if (typeof cfg.mapsLat === "number" && typeof cfg.mapsLng === "number") {
    const mapsQuery = `https://maps.google.com/?q=${cfg.mapsLat},${cfg.mapsLng}`;
    document.querySelectorAll("[data-config='mapsDirections']").forEach((el) => safeHref(el, mapsQuery));
  }

  // Hours
  document.querySelectorAll("[data-config='hoursWeekdays']").forEach((el) => safeText(el, cfg.hoursWeekdays || ""));
  document.querySelectorAll("[data-config='hoursSaturday']").forEach((el) => safeText(el, cfg.hoursSaturday || ""));
  document.querySelectorAll("[data-config='hoursSunday']").forEach((el) => safeText(el, cfg.hoursSunday || ""));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applySiteConfig);
} else {
  applySiteConfig();
}



