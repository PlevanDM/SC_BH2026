"use client";

import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type DeviceKey = "iphone" | "android" | "macbook" | "laptop" | "ipad" | "watch";

type Service = {
  id: string;
  name: string;
  price: number;
  time: number; // minutes
};

const SERVICES: Record<DeviceKey, Service[]> = {
  iphone: [
    { id: "screen", name: "Заміна дисплея", price: 80, time: 30 },
    { id: "battery", name: "Заміна батареї", price: 45, time: 20 },
    { id: "charging", name: "Ремонт роз'єму зарядки", price: 35, time: 25 },
    { id: "speaker", name: "Заміна динаміка", price: 30, time: 20 },
    { id: "camera", name: "Ремонт камери", price: 55, time: 30 },
    { id: "water", name: "Відновлення після води", price: 70, time: 60 },
    { id: "glass", name: "Заміна заднього скла", price: 60, time: 45 },
    { id: "diagnostic", name: "Діагностика", price: 15, time: 15 },
  ],
  android: [
    { id: "screen", name: "Заміна дисплея", price: 65, time: 40 },
    { id: "battery", name: "Заміна батареї", price: 35, time: 25 },
    { id: "charging", name: "Ремонт роз'єму зарядки", price: 30, time: 30 },
    { id: "speaker", name: "Заміна динаміка", price: 25, time: 20 },
    { id: "camera", name: "Ремонт камери", price: 45, time: 35 },
    { id: "water", name: "Відновлення після води", price: 60, time: 60 },
    { id: "software", name: "Переустановка системи", price: 25, time: 30 },
    { id: "diagnostic", name: "Діагностика", price: 15, time: 15 },
  ],
  macbook: [
    { id: "screen", name: "Заміна дисплея", price: 250, time: 90 },
    { id: "battery", name: "Заміна батареї", price: 120, time: 60 },
    { id: "keyboard", name: "Заміна клавіатури", price: 150, time: 90 },
    { id: "ssd", name: "Заміна/Апгрейд SSD", price: 80, time: 45 },
    { id: "cleaning", name: "Глибока чистка", price: 45, time: 60 },
    { id: "thermal", name: "Заміна термопасти", price: 35, time: 45 },
    { id: "water", name: "Відновлення після води", price: 150, time: 120 },
    { id: "diagnostic", name: "Діагностика", price: 25, time: 30 },
  ],
  laptop: [
    { id: "screen", name: "Заміна дисплея", price: 120, time: 60 },
    { id: "battery", name: "Заміна батареї", price: 60, time: 30 },
    { id: "keyboard", name: "Заміна клавіатури", price: 70, time: 60 },
    { id: "ram", name: "Апгрейд RAM", price: 40, time: 30 },
    { id: "ssd", name: "Заміна/Апгрейд SSD", price: 50, time: 30 },
    { id: "cleaning", name: "Глибока чистка", price: 35, time: 45 },
    { id: "thermal", name: "Заміна термопасти", price: 25, time: 30 },
    { id: "diagnostic", name: "Діагностика", price: 20, time: 20 },
  ],
  ipad: [
    { id: "screen", name: "Заміна дисплея", price: 120, time: 60 },
    { id: "battery", name: "Заміна батареї", price: 65, time: 45 },
    { id: "charging", name: "Ремонт роз'єму зарядки", price: 45, time: 30 },
    { id: "button", name: "Ремонт кнопки Home", price: 40, time: 30 },
    { id: "camera", name: "Ремонт камери", price: 50, time: 35 },
    { id: "water", name: "Відновлення після води", price: 80, time: 90 },
    { id: "diagnostic", name: "Діагностика", price: 20, time: 20 },
  ],
  watch: [
    { id: "screen", name: "Заміна дисплея", price: 90, time: 45 },
    { id: "battery", name: "Заміна батареї", price: 55, time: 30 },
    { id: "crown", name: "Ремонт Digital Crown", price: 40, time: 30 },
    { id: "sensor", name: "Калібрування сенсорів", price: 30, time: 20 },
    { id: "water", name: "Відновлення водозахисту", price: 45, time: 30 },
    { id: "diagnostic", name: "Діагностика", price: 15, time: 15 },
  ],
};

const DEVICES: Array<{ key: DeviceKey; label: string; emoji: string }> = [
  { key: "iphone", label: "iPhone", emoji: "📱" },
  { key: "android", label: "Android", emoji: "📲" },
  { key: "macbook", label: "MacBook", emoji: "💻" },
  { key: "laptop", label: "Ноутбук", emoji: "🖥️" },
  { key: "ipad", label: "iPad", emoji: "📋" },
  { key: "watch", label: "Годинник", emoji: "⌚" },
];

function formatTime(totalMinutes: number) {
  if (totalMinutes < 60) return `${totalMinutes} хвилин`;
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (mins === 0) return `${hours} год`;
  return `${hours} год ${mins} хв`;
}

export default function CalculatorPage() {
  const [device, setDevice] = React.useState<DeviceKey | null>(null);
  const [selected, setSelected] = React.useState<string[]>([]);

  const deviceServices = device ? SERVICES[device] : [];
  const total = selected.reduce((sum, id) => {
    const s = deviceServices.find((x) => x.id === id);
    return sum + (s ? s.price : 0);
  }, 0);
  const totalTime = selected.reduce((sum, id) => {
    const s = deviceServices.find((x) => x.id === id);
    return sum + (s ? s.time : 0);
  }, 0);

  function onSelectDevice(next: DeviceKey) {
    setDevice(next);
    setSelected([]);
  }

  function toggleService(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function reset() {
    setDevice(null);
    setSelected([]);
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">🔧 Калькулятор Вартості Ремонту</h1>
        <p className="mt-2 text-muted-foreground">
          Оберіть ваш пристрій та послуги для розрахунку орієнтовної вартості.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
                1
              </div>
              <div className="font-medium">Оберіть тип пристрою</div>
            </div>
            {device ? (
              <Badge variant="secondary">
                {DEVICES.find((d) => d.key === device)?.label ?? device}
              </Badge>
            ) : null}
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {DEVICES.map((d) => {
              const active = device === d.key;
              return (
                <button
                  key={d.key}
                  type="button"
                  onClick={() => onSelectDevice(d.key)}
                  className={[
                    "rounded-xl border p-4 text-left transition",
                    "hover:bg-accent",
                    active ? "border-blue-500 ring-2 ring-blue-500/30" : "border-border",
                  ].join(" ")}
                >
                  <div className="text-2xl">{d.emoji}</div>
                  <div className="mt-2 font-medium">{d.label}</div>
                </button>
              );
            })}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white">
              2
            </div>
            <div className="font-medium">Оберіть необхідні послуги</div>
          </div>

          {!device ? (
            <p className="mt-4 text-sm text-muted-foreground">Спочатку оберіть тип пристрою.</p>
          ) : (
            <div className="mt-5 grid gap-2">
              {deviceServices.map((s) => {
                const active = selected.includes(s.id);
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => toggleService(s.id)}
                    className={[
                      "flex items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition",
                      "hover:bg-accent",
                      active ? "border-blue-500 bg-blue-500/5" : "border-border",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={[
                          "flex h-6 w-6 items-center justify-center rounded-md border text-xs",
                          active ? "bg-blue-600 text-white border-blue-600" : "border-border",
                        ].join(" ")}
                      >
                        ✓
                      </div>
                      <div>
                        <div className="font-medium">{s.name}</div>
                        <div className="text-xs text-muted-foreground">
                          ⏱ {formatTime(s.time)}
                        </div>
                      </div>
                    </div>
                    <div className="font-semibold">€{s.price}</div>
                  </button>
                );
              })}
            </div>
          )}
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Орієнтовна вартість</div>
              <div className="mt-1 text-4xl font-semibold tracking-tight">€{total}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Орієнтовний час: <span className="font-medium text-foreground">{formatTime(totalTime || 30)}</span>
              </div>
              <div className="mt-3 text-xs text-muted-foreground">
                * Фінальна ціна може відрізнятися після діагностики. Діагностика безплатна при замовленні ремонту.
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button asChild disabled={selected.length === 0}>
                <Link href="/#contact">📞 Записатися на ремонт</Link>
              </Button>
              <Button variant="outline" onClick={reset}>
                🔄 Почати заново
              </Button>
            </div>
          </div>

          <div className="mt-5 rounded-xl border bg-emerald-500/10 p-4">
            <div className="font-medium">💡 Підписники Менеджера</div>
            <div className="text-sm text-muted-foreground">
              Отримують <span className="font-semibold text-foreground">-20%</span> на всі послуги.
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}


