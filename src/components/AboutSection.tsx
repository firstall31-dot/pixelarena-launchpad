import { motion } from "framer-motion";
import { Gamepad2, Monitor, Users, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const highlights = [
  { icon: Gamepad2, title: "أجهزة حديثة", desc: "PS5 و PC بأعلى المواصفات" },
  { icon: Monitor, title: "شاشات عالية الدقة", desc: "شاشات 4K و 240Hz للتجربة المثالية" },
  { icon: Users, title: "أجواء اجتماعية", desc: "مكان مثالي لك ولأصدقائك" },
  { icon: Zap, title: "إنترنت فائق السرعة", desc: "اتصال مستقر بدون انقطاع" },
];

const AboutSection = () => (
  <SectionWrapper
    id="about"
    title="نبذة عن الصالة"
    subtitle="بيكسل أرينا هي وجهتك المفضلة لتجربة ألعاب لا مثيل لها في أجواء احترافية ومريحة"
  >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {highlights.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="glass rounded-xl p-6 text-center group hover:neon-border transition-all duration-300"
        >
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

export default AboutSection;
