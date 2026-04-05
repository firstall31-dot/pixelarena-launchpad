import { motion } from "framer-motion";
import { Gamepad2, Armchair, Coffee, Wifi, SprayCan, BadgeDollarSign } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionWrapper from "./SectionWrapper";

const icons = [Gamepad2, Armchair, Coffee, Wifi, SprayCan, BadgeDollarSign];

const FeaturesSection = () => {
  const { t } = useI18n();
  const features = icons.map((icon, i) => ({
    icon,
    title: t(`feat.${i + 1}.title`),
    desc: t(`feat.${i + 1}.desc`),
  }));

  return (
    <SectionWrapper id="features" title={t("features.title")} subtitle={t("features.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ scale: 1.04 }} className="glass rounded-xl p-6 group hover:neon-border transition-all duration-300 flex items-start gap-4">
            <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <f.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default FeaturesSection;
