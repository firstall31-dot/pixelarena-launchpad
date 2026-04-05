import { motion } from "framer-motion";
import { Gamepad2, Monitor, Users, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionWrapper from "./SectionWrapper";

const icons = [Gamepad2, Monitor, Users, Zap];

const AboutSection = () => {
  const { t } = useI18n();
  const highlights = icons.map((icon, i) => ({
    icon,
    title: t(`about.h${i + 1}.title`),
    desc: t(`about.h${i + 1}.desc`),
  }));

  return (
    <SectionWrapper id="about" title={t("about.title")} subtitle={t("about.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlights.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ scale: 1.05, y: -5 }} className="glass rounded-xl p-6 text-center group hover:neon-border transition-all duration-300">
            <div className="mx-auto mb-4 w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
