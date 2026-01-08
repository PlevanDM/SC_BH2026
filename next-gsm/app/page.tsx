"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Laptop,
  Shield,
  Clock,
  Award,
  CheckCircle,
  Wrench,
  Zap,
  Star,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FloatingIcon = ({
  icon: Icon,
  delay = 0,
  duration = 3,
  x = 0,
  y = 0,
}: {
  icon: React.ComponentType<{ className?: string }>;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
}) => {
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0.3, 0.6, 0.3], y: [0, -20, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="bg-blue-500/20 backdrop-blur-sm p-3 rounded-xl border border-blue-400/30">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
    </motion.div>
  );
};

const TrustBadge = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-3"
    >
      <div className="bg-blue-500/10 p-2 rounded-lg border border-blue-400/20">
        <Icon className="w-5 h-5 text-blue-500" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground text-sm">{title}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const AnimatedGradientBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(96, 165, 250, 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 80%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 80%, rgba(147, 197, 253, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 50% 20%, rgba(147, 197, 253, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(147, 197, 253, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

function RepairServiceHero() {
  const services = [
    { icon: Smartphone, name: "Phone Repair", color: "text-blue-400" },
    { icon: Laptop, name: "Laptop Repair", color: "text-blue-500" },
    { icon: Wrench, name: "Quick Fix", color: "text-blue-300" },
    { icon: Zap, name: "Fast Service", color: "text-blue-600" },
  ];

  const trustBadges = [
    { icon: Shield, title: "Warranty Protected", description: "90-day guarantee" },
    { icon: Clock, title: "Same Day Service", description: "Most repairs in 1 hour" },
    { icon: Award, title: "Certified Technicians", description: "10+ years experience" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 overflow-hidden">
      <AnimatedGradientBackground />

      <>
        <FloatingIcon icon={Smartphone} delay={0} x={10} y={20} duration={4} />
        <FloatingIcon icon={Laptop} delay={0.5} x={85} y={30} duration={3.5} />
        <FloatingIcon icon={Wrench} delay={1} x={15} y={70} duration={4.5} />
        <FloatingIcon icon={Zap} delay={1.5} x={90} y={65} duration={3} />
      </>

      <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-400/30 hover:bg-blue-500/20">
                <Star className="w-3 h-3 mr-1 fill-current" />
                Trusted by 10,000+ Customers
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                NEXX GSM
                <span className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Ремонт пристроїв у Бухаресті
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl">
                Ремонт телефонів та ноутбуків. Діагностика під мікроскопом, прозорий
                процес, гарантія, швидкий запис.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 group"
              >
                <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Записатися
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-400/30 hover:bg-blue-500/10"
              >
                Безкоштовна консультація
              </Button>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {trustBadges.map((badge, index) => (
                <TrustBadge
                  key={badge.title + index}
                  icon={badge.icon}
                  title={badge.title}
                  description={badge.description}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.name + index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group"
                >
                  <Card className="relative overflow-hidden backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 border-white/20 dark:border-slate-700/30 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative p-6 space-y-4">
                      <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                        <service.icon className={`w-7 h-7 ${service.color}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">
                          {service.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">Professional service</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400">
                        <CheckCircle className="w-3 h-3" />
                        <span>Available now</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-6"
            >
              <Card className="backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 border-white/20 dark:border-slate-700/30 shadow-xl">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        10K+
                      </div>
                      <div className="text-xs text-muted-foreground">Repairs Done</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        4.9★
                      </div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        1hr
                      </div>
                      <div className="text-xs text-muted-foreground">Avg Time</div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}

export default function Home() {
  return <RepairServiceHero />;
}
