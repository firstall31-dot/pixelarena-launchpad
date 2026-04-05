import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import SectionWrapper from "./SectionWrapper";

const planDefs = [
  { key: "1", price: "15", featureKeys: ["f1", "f2", "f3"], popular: false },
  { key: "2", price: "20", featureKeys: ["f1", "f2", "f3", "f4"], popular: true },
  { key: "3", price: "100", featureKeys: ["f1", "f2", "f3"], popular: false },
  { key: "4", price: "200", featureKeys: ["f1", "f2", "f3", "f4"], popular: false },
];

const PricingSection = () => {
  const { t } = useI18n();

  return (
    <SectionWrapper id="pricing" title={t("pricing.title")} subtitle={t("pricing.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {planDefs.map((plan, i) => (
          <motion.div key={plan.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -8 }} className={`rounded-xl p-6 flex flex-col glass transition-all duration-300 ${plan.popular ? "neon-border relative" : "hover:neon-border"}`}>
            {plan.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                <Crown className="h-3 w-3" /> {t("pricing.best")}
              </span>
            )}
            <h3 className="font-heading font-bold text-lg text-foreground mb-2">{t(`plan.${plan.key}.title`)}</h3>
            <div className="mb-4">
              <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
              <span className="text-muted-foreground text-sm mr-1">{t(`plan.${plan.key}.unit`)}</span>
            </div>
            <ul className="flex-1 space-y-2 mb-6">
              {plan.featureKeys.map((fk) => (
                <li key={fk} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  {t(`plan.${plan.key}.${fk}`)}
                </li>
              ))}
            </ul>
            <Button asChild variant={plan.popular ? "default" : "outline"} className={plan.popular ? "bg-primary hover:bg-primary/90 glow-purple" : "border-border hover:border-primary"}>
              <a href="#contact">{t("pricing.book")}</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
