import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    name: "أحمد المطيري",
    text: "أفضل صالة ألعاب زرتها! الأجهزة قوية والأجواء خرافية. بالتأكيد راح أرجع مع أصدقائي.",
    rating: 5,
    device: "PC Gaming",
  },
  {
    name: "خالد العتيبي",
    text: "تجربة PS5 هنا غير! الشاشات 4K والكراسي مريحة جداً. الأسعار معقولة مقارنة بالجودة.",
    rating: 5,
    device: "PlayStation 5",
  },
  {
    name: "سارة الحربي",
    text: "مكان نظيف ومرتب والموظفين محترمين. المشروبات والسناكات لذيذة. تجربة ممتازة!",
    rating: 4,
    device: "PlayStation 5",
  },
  {
    name: "فهد الشمري",
    text: "الإنترنت سريع جداً وما فيه أي لاق. لعبت أونلاين بدون مشاكل. أنصح الكل يجرب.",
    rating: 5,
    device: "PC Gaming",
  },
];

const TestimonialsSection = () => (
  <SectionWrapper id="testimonials" title="آراء العملاء" subtitle="اكتشف ماذا يقول زوارنا عن تجربتهم">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          className="glass rounded-xl p-6 flex flex-col gap-4 hover:neon-border transition-all duration-300 relative"
        >
          <Quote className="absolute top-4 left-4 h-6 w-6 text-primary/20" />
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, s) => (
              <Star
                key={s}
                className={`h-4 w-4 ${s < t.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>
          <div className="border-t border-border pt-3">
            <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
            <p className="text-xs text-primary">{t.device}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default TestimonialsSection;
