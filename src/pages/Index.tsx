import { I18nProvider, useI18n } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import CountdownSection from "@/components/CountdownSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ParallaxWrapper from "@/components/ParallaxWrapper";

const PageContent = () => {
  const { dir } = useI18n();

  return (
    <div className="min-h-screen bg-background" dir={dir}>
      <Navbar />
      <HeroSection />
      <ParallaxWrapper offset={30}>
        <AboutSection />
      </ParallaxWrapper>
      <ParallaxWrapper offset={25}>
        <FeaturesSection />
      </ParallaxWrapper>
      <CountdownSection />
      <ParallaxWrapper offset={20}>
        <PricingSection />
      </ParallaxWrapper>
      <ParallaxWrapper offset={30}>
        <GallerySection />
      </ParallaxWrapper>
      <ParallaxWrapper offset={20}>
        <TestimonialsSection />
      </ParallaxWrapper>
      <ParallaxWrapper offset={15}>
        <FAQSection />
      </ParallaxWrapper>
      <ContactSection />
      <Footer />
    </div>
  );
};

const Index = () => (
  <I18nProvider>
    <PageContent />
  </I18nProvider>
);

export default Index;
