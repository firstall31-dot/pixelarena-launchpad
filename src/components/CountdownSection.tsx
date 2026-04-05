import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const TARGET_HOURS = 72;

const getTimeLeft = () => {
  const stored = localStorage.getItem("pixelarena_countdown_end");
  let end: number;
  if (stored) {
    end = parseInt(stored, 10);
  } else {
    end = Date.now() + TARGET_HOURS * 3600 * 1000;
    localStorage.setItem("pixelarena_countdown_end", String(end));
  }
  const diff = Math.max(0, end - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
};

const CountdownSection = () => {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "يوم", value: time.d },
    { label: "ساعة", value: time.h },
    { label: "دقيقة", value: time.m },
    { label: "ثانية", value: time.s },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Neon bg glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[120px] rounded-full" />

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass neon-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flame className="h-6 w-6 text-destructive animate-float" />
            <span className="text-sm font-bold text-destructive uppercase tracking-widest">عرض محدود</span>
            <Flame className="h-6 w-6 text-destructive animate-float" />
          </div>

          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-2">
            خصم <span className="text-gradient-primary">30%</span> على جميع الباقات!
          </h2>
          <p className="text-muted-foreground mb-8">العرض ينتهي قريباً – لا تفوّت الفرصة</p>

          <div className="flex justify-center gap-3 sm:gap-6 mb-8" dir="ltr">
            {units.map((u) => (
              <div key={u.label} className="flex flex-col items-center">
                <motion.span
                  key={u.value}
                  initial={{ scale: 1.2, opacity: 0.6 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-muted/80 flex items-center justify-center text-2xl sm:text-3xl font-heading font-bold text-primary glow-purple"
                >
                  {String(u.value).padStart(2, "0")}
                </motion.span>
                <span className="text-xs text-muted-foreground mt-2">{u.label}</span>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-l from-primary to-neon-cyan animate-pulse-glow rounded-full px-10 text-lg font-bold"
          >
            <a href="#contact">
              <Zap className="h-5 w-5 ml-2" />
              استفد من العرض الآن
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownSection;
