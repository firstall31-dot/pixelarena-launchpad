import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionWrapper from "./SectionWrapper";

const faqKeys = ["1", "2", "3", "4", "5", "6"];

const FAQSection = () => {
  const { t } = useI18n();

  return (
    <SectionWrapper id="faq" title={t("faq.title")} subtitle={t("faq.subtitle")}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <AccordionItem
                value={`faq-${key}`}
                className="glass rounded-xl px-6 border-none hover:neon-border transition-all duration-300"
              >
                <AccordionTrigger className="text-foreground font-heading font-semibold text-sm sm:text-base hover:no-underline hover:text-primary py-5">
                  {t(`faq.${key}.q`)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                  {t(`faq.${key}.a`)}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </SectionWrapper>
  );
};

export default FAQSection;
