import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Particles from "./Particles";
import { useI18n } from "@/lib/i18n";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useI18n();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="PixelArena - Gaming Lounge" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      <Particles />
      <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-[100px]" />
      <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-[80px]" />

      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
          <span className="text-gradient-primary">{t("hero.title1")}</span>
          <br />
          <span className="text-foreground">{t("hero.title2")}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          {t("hero.subtitle")}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <Button asChild size="lg" className="text-lg px-10 py-6 bg-gradient-to-l from-primary to-neon-cyan animate-pulse-glow rounded-full font-bold">
            <a href="#contact">{t("hero.cta")}</a>
          </Button>
        </motion.div>
      </div>

      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-scroll-hint">
        <ChevronDown className="h-8 w-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
