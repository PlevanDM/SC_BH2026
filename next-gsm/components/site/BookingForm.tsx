"use client";

import React, { useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function BookingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      device: formData.get("device") as string,
      problem: formData.get("problem") as string,
    };

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({ type: "success", text: result.message });
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage({ type: "error", text: result.message || "Помилка відправки" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Помилка з'єднання. Спробуйте пізніше." });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="bg-slate-800/50 border-slate-700/50">
      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-white mb-6">Записатися на прийом</h3>

        {message && (
          <div
            className={`p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-500/20 border border-green-400/30 text-green-300"
                : "bg-red-500/20 border border-red-400/30 text-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Ім'я <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Ваше ім'я"
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Телефон <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+40 XXX XXX XXX"
              pattern="[\+]?[0-9\s\(\)-]+"
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Пристрій
            </label>
            <select
              name="device"
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors"
            >
              <option value="Телефон">Телефон</option>
              <option value="Ноутбук">Ноутбук</option>
              <option value="Планшет">Планшет</option>
              <option value="Годинник">Годинник</option>
              <option value="Інше">Інше</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Опис проблеми
            </label>
            <textarea
              name="problem"
              rows={3}
              placeholder="Коротко опишіть проблему..."
              className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-colors resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white disabled:opacity-50"
            size="lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            {isLoading ? "Відправка..." : "Відправити заявку"}
          </Button>

          <p className="text-xs text-slate-400 text-center">
            Ми зв'яжемося з вами протягом 10 хвилин
          </p>
        </form>
      </div>
    </Card>
  );
}
