import { motion } from "framer-motion";
import { Gamepad2, Armchair, Coffee, Wifi, SprayCan, BadgeDollarSign } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const features = [
  { icon: Gamepad2, title: "PlayStation 5 و PC RTX", desc: "أحدث الأجهزة بمواصفات خارقة لتجربة لعب سلسة" },
  { icon: Armchair, title: "كراسي مريحة + إضاءة RGB", desc: "كراسي قيمنق احترافية مع إضاءة مذهلة" },
  { icon: Coffee, title: "مشروبات باردة ووجبات خفيفة", desc: "تشكيلة واسعة من المشروبات والسناكات" },
  { icon: Wifi, title: "سرعة إنترنت فائقة", desc: "اتصال فايبر مستقر وسريع لأفضل أداء" },
  { icon: SprayCan, title: "تنظيف مستمر + جو احترافي", desc: "نظافة دائمة وأجواء مريحة ومنظمة" },
  { icon: BadgeDollarSign, title: "أسعار تنافسية", desc: "باقات مرنة تناسب الجميع بأفضل الأسعار" },
];

const FeaturesSection = () => (
  <SectionWrapper id="features" title="مميزات المكان" subtitle="كل ما تحتاجه لتجربة ألعاب مثالية في مكان واحد">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ scale: 1.04 }}
          className="glass rounded-xl p-6 group hover:neon-border transition-all duration-300 flex items-start gap-4"
        >
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

export default FeaturesSection;
