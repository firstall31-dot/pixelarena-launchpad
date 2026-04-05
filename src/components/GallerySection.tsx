import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import SectionWrapper from "./SectionWrapper";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const srcs = [gallery1, gallery2, gallery3, gallery4];

const GallerySection = () => {
  const { t } = useI18n();
  const images = srcs.map((src, i) => ({ src, alt: t(`gallery.${i + 1}`) }));

  return (
    <SectionWrapper id="gallery" title={t("gallery.title")} subtitle={t("gallery.subtitle")}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative overflow-hidden rounded-xl group">
            <img src={img.src} alt={img.alt} width={800} height={600} loading="lazy" className="w-full h-60 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="text-sm text-foreground font-medium">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default GallerySection;
