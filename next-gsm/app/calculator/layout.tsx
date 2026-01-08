import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Калькулятор — NEXX GSM",
  description:
    "Онлайн калькулятор для розрахунку орієнтовної вартості ремонту телефонів, ноутбуків та планшетів у NEXX GSM.",
};

export default function CalculatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}


