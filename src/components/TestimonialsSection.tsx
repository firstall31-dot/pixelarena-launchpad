import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionWrapper from "./SectionWrapper";

const testKeys = ["1", "2", "3", "4"];
const ratings = [5, 5, 4, 5];
const devices = ["PC Gaming", "PlayStation 5", "PlayStation 5", "PC Gaming"];

const TestimonialsSection = () => {
  const { t } = useI18n();

  return (
    <SectionWrapper id="testimonials" title={t("testimonials.title")} subtitle={t("testimonials.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {testKeys.map((key, i) => (
          <motion.div key={key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6, scale: 1.02 }} className="glass rounded-xl p-6 flex flex-col gap-4 hover:neon-border transition-all duration-300 relative">
            <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/20" />
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }, (_, s) => (
                <Star key={s} className={`h-4 w-4 ${s < ratings[i] ? "text-primary fill-primary" : "text-muted-foreground"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t(`test.${key}.text`)}"</p>
            <div className="border-t border-border pt-3">
              <p className="font-heading font-semibold text-foreground text-sm">{t(`test.${key}.name`)}</p>
              <p className="text-xs text-primary">{devices[i]}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default TestimonialsSection;
