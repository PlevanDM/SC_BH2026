import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Shell } from "@/components/site/Shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scbucharest.ro"),
  title: "NEXX GSM — Ремонт телефонів і ноутбуків у Бухаресті",
  description:
    "NEXX GSM — ремонт телефонів, ноутбуків і планшетів у Бухаресті. Діагностика під мікроскопом, прозорий процес, запис онлайн.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://scbucharest.ro/",
    title: "NEXX GSM — Ремонт телефонів і ноутбуків у Бухаресті",
    description:
      "Діагностика під мікроскопом, прозорий процес, запис онлайн. Більшість ремонтів 30–60 хв.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "NEXX GSM" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXX GSM — Ремонт телефонів і ноутбуків у Бухаресті",
    description:
      "Діагностика під мікроскопом, прозорий процес, запис онлайн. Більшість ремонтів 30–60 хв.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
