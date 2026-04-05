import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionWrapper from "./SectionWrapper";

const plans = [
  {
    title: "ساعة PlayStation",
    price: "15",
    unit: "ريال / ساعة",
    features: ["PS5 مع يد تحكم", "شاشة 4K", "سماعة مجانية"],
    popular: false,
  },
  {
    title: "ساعة PC Gaming",
    price: "20",
    unit: "ريال / ساعة",
    features: ["PC RTX 4070+", "شاشة 240Hz", "كيبورد + ماوس احترافي", "سماعة قيمنق"],
    popular: true,
  },
  {
    title: "باقة الأصدقاء",
    price: "100",
    unit: "ريال / 3 ساعات × 4 أشخاص",
    features: ["4 أجهزة PS5 أو PC", "مشروبات مجانية", "خصم 25%"],
    popular: false,
  },
  {
    title: "باقة VIP",
    price: "200",
    unit: "ريال / 5 ساعات",
    features: ["غرفة خاصة", "شاشة كبيرة", "مشروبات + وجبات", "أولوية الحجز"],
    popular: false,
  },
];

const PricingSection = () => (
  <SectionWrapper id="pricing" title="الأسعار" subtitle="باقات مرنة تناسب الجميع">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -8 }}
          className={`rounded-xl p-6 flex flex-col glass transition-all duration-300 ${
            plan.popular ? "neon-border relative" : "hover:neon-border"
          }`}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
              <Crown className="h-3 w-3" /> الأفضل قيمة
            </span>
          )}
          <h3 className="font-heading font-bold text-lg text-foreground mb-2">{plan.title}</h3>
          <div className="mb-4">
            <span className="text-4xl font-heading font-bold text-primary">{plan.price}</span>
            <span className="text-muted-foreground text-sm mr-1">{plan.unit}</span>
          </div>
          <ul className="flex-1 space-y-2 mb-6">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="h-4 w-4 text-accent shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <Button
            asChild
            variant={plan.popular ? "default" : "outline"}
            className={plan.popular ? "bg-primary hover:bg-primary/90 glow-purple" : "border-border hover:border-primary"}
          >
            <a href="#contact">احجز الآن</a>
          </Button>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default PricingSection;
