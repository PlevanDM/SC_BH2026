"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Microscope,
  Sparkles,
  Palette,
  RefreshCw,
  ShoppingBag,
  UserCog,
  Gift,
  Lock,
  Camera,
  Users,
  Code,
  Video,
  Bot,
  Gamepad2,
  Star,
  Phone,
  Mail,
  MapPin,
  Calendar,
  TrendingUp,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SITE_CONFIG,
  getWhatsAppUrl,
  getTelegramUrl,
  getInstagramUrl,
  getDirectionsUrl,
} from "@/lib/site-config";
import { BookingForm } from "@/components/site/BookingForm";

// Hero Section Component
function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/workspace.png"
          alt="NEXX GSM workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-white"
          >
            {/* Live Counter */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm">
                <strong>3</strong> клієнтів зараз на сайті
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Ремонт Телефонів та Ноутбуків у Бухаресті
          </h1>

            <p className="text-lg text-blue-100">
              Діагностика під мікроскопом з трансляцією на екран. Більшість ремонтів — 30–60 хвилин.
              Персональний менеджер доступний 24/7 у Telegram. Фото/відеофіксація стану при прийомі та акт прийому/видачі.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <CheckCircle className="w-3 h-3 mr-1" />
                Фіксація стану
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <CheckCircle className="w-3 h-3 mr-1" />
                Юридичне оформлення
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Award className="w-3 h-3 mr-1" />
                Гарантія 30 днів
              </Badge>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Отримати безплатну консультацію
                <Badge className="ml-2 bg-yellow-400 text-yellow-900 border-0">
                  Сьогодні
                </Badge>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Переглянути послуги
              </Button>
            </div>

            {/* Scarcity + Social Proof */}
            <div className="space-y-3 pt-4">
              <p className="text-sm text-blue-200">
                <Clock className="w-4 h-4 inline mr-1" />
                <strong className="text-yellow-300">Обмежено:</strong> Лише{" "}
                <span className="text-yellow-300 font-bold">5 слотів</span> залишилось на цей тиждень
              </p>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-blue-100">
                  <strong>4.9/5.0</strong> <span className="text-blue-300">(150+ відгуків)</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Real Photos */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Main Photo - Reception */}
            <div className="relative h-[280px] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400/30">
              <Image
                src="/images/reception.png"
                alt="Менеджер NEXX GSM приймає телефон від клієнта"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Two smaller photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[140px] rounded-xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/images/workspace.png"
                  alt="Професійне обладнання для ремонту"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[140px] rounded-xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src="/images/facade.png"
                  alt="Фасад сервіс-центру NEXX GSM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Trust Badge */}
            <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4 text-center">
              <span className="text-green-300 font-semibold flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Реальні фото нашого сервіс-центру
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "30-40 хв", label: "Більшість ремонтів", icon: Clock },
    { number: "24/7", label: "Менеджер у Telegram", icon: UserCog },
    { number: "30 днів", label: "Гарантія на роботу", icon: Award },
    { number: "100%", label: "Фіксація стану", icon: CheckCircle },
  ];

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: Smartphone,
      title: "Ремонт Телефонів",
      description:
        "Заміна екрану, батареї, роз'ємів зарядки. Більшість ремонтів — 30–60 хвилин. Фото/відеофіксація стану до/після. Гарантія 30 днів на роботи.",
    },
    {
      icon: Microscope,
      title: "Діагностика Під Мікроскопом",
      description:
        "Трансляція процесу на великий екран — ви бачите що робить майстер. Фотофіксація дефектів. Звіт після діагностики. Безплатно при ремонті.",
    },
    {
      icon: Sparkles,
      title: "Професійна Чистка",
      description:
        "Розбираємо корпус, чистимо від пилу, міняємо термопасту. Дезінфекція. Для підписників менеджера — безлімітно.",
    },
    {
      icon: Palette,
      title: "Кастомізація & Дизайн",
      description:
        "Захисні плівки з вашим дизайном чи фото. Порізка на плоттері під модель. Ідеально для подарунку або соцмереж.",
    },
    {
      icon: RefreshCw,
      title: "Trade-In & Перепродаж",
      description:
        "Купуємо/продаємо б/в пристрої за прозорою оцінкою. Оформлення документів та фіксація стану при прийомі.",
    },
    {
      icon: ShoppingBag,
      title: "Аксесуари & Запчастини",
      description:
        "Чохли, плівки, зарядні аксесуари, оригінальні запчастини. Допоможемо підібрати під ваш бюджет.",
    },
    {
      icon: Laptop,
      title: "Ремонт Ноутбуків",
      description:
        "MacBook, Windows ноутбуки. Заміна матриці, клавіатури, апгрейд SSD/RAM. Чистка системи охолодження.",
    },
    {
      icon: UserCog,
      title: "Менеджер 24/7",
      description:
        "Персональний техспеціаліст у Telegram. Консультації, запис, нагадування про профілактику. €9.99/міс.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Що Ми Ремонтуємо
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Телефони, ноутбуки, планшети, годинники. Діагностика під мікроскопом, оригінальні запчастини, документування всіх етапів.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all group h-full">
                <div className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center group-hover:border-blue-400/40 transition-colors">
                    <service.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Fast-Track Highlight */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl text-center">
          <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6" />
            Fast-Track для постійних клієнтів NEXX GSM
          </h3>
          <p className="text-slate-300">
            Залишаєте пристрій і коротко описуєте проблему — менеджер бере процес на себе: уточнення, узгодження та статуси у Telegram.
          </p>
        </div>
      </div>
    </section>
  );
}

// Pricing Section (Manager Subscription)
function PricingSection() {
  const plans = [
    {
      name: "Базовий",
      description: "Для разових візитів",
      price: "€0",
      period: "/безплатно",
      features: [
        "Безплатна діагностика",
        "Прозора оцінка ремонту",
        "Гарантія 30 днів",
        "Фото/відео фіксація",
      ],
      buttonText: "Записатися",
      buttonVariant: "outline" as const,
    },
    {
      name: "Менеджер",
      description: "Повна технічна підтримка",
      price: "€9.99",
      period: "/місяць",
      popular: true,
      discount: "€19.99",
      features: [
        "Все з Базового плану",
        "Персональний менеджер 24/7",
        "Безлімітні чистки",
        "4 пристрої в пакеті",
        "Пріоритетна черга",
        "-20% на кастомізацію",
        "Подарунок на ДР",
      ],
      buttonText: "🚀 Підписатися -50%",
      buttonVariant: "default" as const,
    },
    {
      name: "GORK",
      description: "Для постійних клієнтів",
      price: "€0",
      period: "/при ремонті",
      features: [
        "Захисний кейс GORK",
        "1 чистка на рік безплатно",
        "Тренінги кібербезпеки",
        "Контент для соцмереж",
        "При ремонті від €50",
      ],
      buttonText: "Дізнатися більше",
      buttonVariant: "outline" as const,
    },
  ];

  return (
    <section id="manager" className="py-20 bg-gradient-to-b from-green-900/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500/10 text-green-600 dark:text-green-400 border-green-400/30">
            💎 Преміум Підписка
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Оберіть <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Ваш План</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Від безплатної діагностики до повної технічної підтримки — ми маємо рішення для вас
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={plan.popular ? "md:-mt-4" : ""}
            >
              <Card className={`h-full ${plan.popular ? "border-green-500/50 shadow-2xl shadow-green-500/20" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-green-500 text-white border-0">
                      Популярний
                    </Badge>
                  </div>
                )}
                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <div className="border-t pt-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    variant={plan.buttonVariant}
                    className={`w-full ${plan.popular ? "bg-green-600 hover:bg-green-700" : ""}`}
                  >
                    {plan.buttonText}
                  </Button>

                  {plan.discount && (
                    <p className="text-xs text-center text-muted-foreground">
                      Звичайна ціна: <s>{plan.discount}</s> • Скасувати будь-коли
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 bg-white/5 dark:bg-white/5 border border-white/10 px-6 py-3 rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              <strong className="text-foreground">12</strong> людей підписались сьогодні
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// GORK Section
function GORKSection() {
  const benefits = [
    {
      icon: Gift,
      title: "М'який Захисний Кейс",
      description:
        "Кейс з логотипом NEXX GSM + набір наклейок. Видаємо при купівлі нового ноутбука або ремонті від €50. Носіть його - отримуєте переваги.",
    },
    {
      icon: Sparkles,
      title: "Безплатна Чистка Щороку",
      description:
        "1 раз на рік - глибока чистка будь-якого вашого пристрою безплатно. Розбираємо, чистимо від пилу, міняємо термопасту, дезінфікуємо.",
    },
    {
      icon: Lock,
      title: "Тренінги Кібербезпеки",
      description:
        "Кожної суботи 10:00-11:30. Захист паролів, розпізнавання фішингу, безпека соцмереж, резервні копії. Для вас та родини безплатно.",
    },
    {
      icon: Camera,
      title: "Контент для Соцмереж",
      description:
        "Фото та відео вашого ноутбука у кейсі GORK як різні варіанти для вашого профіля.",
    },
  ];

  return (
    <section id="gork" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GORK Protect - Безплатний Кейс + Привілеї
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            М'який захисний кейс для ноутбука. Отримайте при купівлі пристрою або ремонті від €50. Власники кейса мають особливі переваги.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Weekly Training Highlight */}
        <Card className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50 border-blue-200 dark:border-blue-800">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3 flex items-center justify-center gap-2">
              <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              Щотижневий Тренінг Безпеки - Кожна Субота!
            </h3>
            <p className="text-lg mb-4">
              <strong>10:00 - 11:30</strong> | Безплатно для власників GORK Protect кейса у NEXX GSM
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Теми:</strong> Захист паролів, розпізнавання фішингу, безпека в соцмережах, резервні копії, двофакторна автентифікація, приватність даних
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

// Kids Courses Section
function CoursesSection() {
  const courses = [
    {
      icon: Palette,
      title: "Малювання на iPad",
      description:
        "Вчимось малювати професійно на планшеті. Додатки Procreate, Ibis Paint. Для дітей від 7 років.",
    },
    {
      icon: Camera,
      title: "Мобільна Фотографія",
      description:
        "Як робити чудові фото на смартфон. Композиція, світло, обробка. Навчають фотографувати для Instagram та інших соцмереж. Від 8 років.",
    },
    {
      icon: Code,
      title: "Перше Програмування",
      description:
        "Вводимо дітей у світ кодування через Scratch та Swift Playgrounds. Від 9 років.",
    },
    {
      icon: Video,
      title: "Створення Відео",
      description:
        "Монтаж, ефекти, робимо коротенькі фільми для TikTok та YouTube. Від 10 років.",
    },
    {
      icon: Bot,
      title: "Вступ до AI & ML",
      description:
        "Розуміємо як працює штучний інтелект, розпізнавання облич, голосові асистенти. Від 11 років.",
    },
    {
      icon: Gamepad2,
      title: "Дизайн Ігор",
      description:
        "Створюємо прості 2D ігри у Roblox Studio та Unity. Від 12 років.",
    },
  ];

  return (
    <section id="courses" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/kids-training-1.png"
          alt="Kids training background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/95 dark:bg-slate-900/95" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            <Users className="w-10 h-10 text-blue-600" />
            Дитячі Курси & Майстер-класи
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Діти навчаються технологіям у грі — програмування, фотографія, відео
          </p>
        </div>

        {/* Photo Banner */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div className="md:col-span-2 relative h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/kids-training-1.png"
              alt="Діти на тренінгу - спільний стіл з планшетами"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-xl mb-1 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Групові заняття
                </h3>
                <p className="text-white/90 text-sm">
                  Діти навчаються малювати на планшетах за спільним столом
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/kids-training-2.png"
              alt="Дитина фотографує на смартфон"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-white font-bold text-lg mb-1 flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  Мобільна фотографія
                </h3>
                <p className="text-white/90 text-xs">
                  Курс фотографії для соцмереж
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
                <div className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                    <course.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-muted-foreground">{course.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Course Info */}
        <Card className="max-w-3xl mx-auto mt-12 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800">
          <div className="p-6">
            <p className="text-center text-sm text-muted-foreground leading-relaxed">
              Курси проходять за нашим спеціальним столом у NEXX GSM, де діти можуть сидіти, пити сік/каву та практикуватися. 
              Батьки можуть чекати в зоні відпочинку або переглядати нашу вітрину з аксесуарами та запчастинами.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Зв'яжіться з Нами
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ми завжди раді допомогти вам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700/50">
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Телефон</h3>
                    <a
                      href={`tel:${SITE_CONFIG.phoneE164}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {SITE_CONFIG.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Адреса</h3>
                    <p className="text-slate-300">
                      {SITE_CONFIG.addressLine1}
                      <br />
                      {SITE_CONFIG.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Години роботи</h3>
                    <div className="text-sm text-slate-300 space-y-1">
                      <p>Пн-Пт: {SITE_CONFIG.hoursWeekdays}</p>
                      <p>Сб: {SITE_CONFIG.hoursSaturday}</p>
                      <p>Нд: {SITE_CONFIG.hoursSunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href={getTelegramUrl()} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <a href={getInstagramUrl()} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
            </div>
          </div>

          {/* Booking Form */}
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

// Gallery Section
function GallerySection() {
  const photos = [
    { src: "/images/reception.png", alt: "Зона приймання NEXX GSM - менеджер з клієнтом" },
    { src: "/images/workspace.png", alt: "Робоче місце з мікроскопом NEXX GSM" },
    { src: "/images/facade.png", alt: "Фасад сервіс-центру NEXX GSM" },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Наш Сервіс-Центр
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Приймальня, робоча зона з мікроскопом, фасад у центрі Бухареста
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[300px] rounded-xl overflow-hidden shadow-xl group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">{photo.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <PricingSection />
      <GORKSection />
      <CoursesSection />
      <ContactSection />
      <GallerySection />
    </div>
  );
}
