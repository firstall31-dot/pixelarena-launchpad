import { createContext, useContext, useState, ReactNode, useCallback } from "react";

export type Lang = "ar" | "en";

interface I18nContextType {
  lang: Lang;
  dir: "rtl" | "ltr";
  toggle: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.home": { ar: "الرئيسية", en: "Home" },
  "nav.about": { ar: "عن الصالة", en: "About" },
  "nav.features": { ar: "المميزات", en: "Features" },
  "nav.pricing": { ar: "الأسعار", en: "Pricing" },
  "nav.gallery": { ar: "المعرض", en: "Gallery" },
  "nav.contact": { ar: "تواصل معنا", en: "Contact" },
  "nav.faq": { ar: "الأسئلة الشائعة", en: "FAQ" },
  "nav.book": { ar: "احجز الآن", en: "Book Now" },

  // Hero
  "hero.title1": { ar: "بيكسل أرينا", en: "PixelArena" },
  "hero.title2": { ar: "صالة ألعابك المفضلة", en: "Your Favorite Gaming Lounge" },
  "hero.subtitle": { ar: "PlayStation 5 • أجهزة PC عالية الأداء • أجواء لا تُنسى", en: "PlayStation 5 • High-End PC Gaming • Unforgettable Vibes" },
  "hero.cta": { ar: "🎮 احجز الآن", en: "🎮 Book Now" },

  // About
  "about.title": { ar: "نبذة عن الصالة", en: "About the Lounge" },
  "about.subtitle": { ar: "بيكسل أرينا هي وجهتك المفضلة لتجربة ألعاب لا مثيل لها في أجواء احترافية ومريحة", en: "PixelArena is your go-to destination for an unmatched gaming experience in a professional and comfortable atmosphere" },
  "about.h1.title": { ar: "أجهزة حديثة", en: "Modern Devices" },
  "about.h1.desc": { ar: "PS5 و PC بأعلى المواصفات", en: "PS5 & PC with top-tier specs" },
  "about.h2.title": { ar: "شاشات عالية الدقة", en: "High-Res Displays" },
  "about.h2.desc": { ar: "شاشات 4K و 240Hz للتجربة المثالية", en: "4K & 240Hz screens for the ultimate experience" },
  "about.h3.title": { ar: "أجواء اجتماعية", en: "Social Vibes" },
  "about.h3.desc": { ar: "مكان مثالي لك ولأصدقائك", en: "Perfect spot for you and your friends" },
  "about.h4.title": { ar: "إنترنت فائق السرعة", en: "Ultra-Fast Internet" },
  "about.h4.desc": { ar: "اتصال مستقر بدون انقطاع", en: "Stable connection with zero lag" },

  // Features
  "features.title": { ar: "مميزات المكان", en: "Our Features" },
  "features.subtitle": { ar: "كل ما تحتاجه لتجربة ألعاب مثالية في مكان واحد", en: "Everything you need for the perfect gaming session in one place" },
  "feat.1.title": { ar: "PlayStation 5 و PC RTX", en: "PlayStation 5 & PC RTX" },
  "feat.1.desc": { ar: "أحدث الأجهزة بمواصفات خارقة لتجربة لعب سلسة", en: "Latest devices with insane specs for smooth gameplay" },
  "feat.2.title": { ar: "كراسي مريحة + إضاءة RGB", en: "Comfy Chairs + RGB Lighting" },
  "feat.2.desc": { ar: "كراسي قيمنق احترافية مع إضاءة مذهلة", en: "Pro gaming chairs with stunning lighting" },
  "feat.3.title": { ar: "مشروبات باردة ووجبات خفيفة", en: "Cold Drinks & Snacks" },
  "feat.3.desc": { ar: "تشكيلة واسعة من المشروبات والسناكات", en: "Wide selection of beverages and snacks" },
  "feat.4.title": { ar: "سرعة إنترنت فائقة", en: "Ultra-Fast Internet" },
  "feat.4.desc": { ar: "اتصال فايبر مستقر وسريع لأفضل أداء", en: "Stable fiber connection for peak performance" },
  "feat.5.title": { ar: "تنظيف مستمر + جو احترافي", en: "Always Clean & Professional" },
  "feat.5.desc": { ar: "نظافة دائمة وأجواء مريحة ومنظمة", en: "Constant cleanliness with a comfortable vibe" },
  "feat.6.title": { ar: "أسعار تنافسية", en: "Competitive Prices" },
  "feat.6.desc": { ar: "باقات مرنة تناسب الجميع بأفضل الأسعار", en: "Flexible packages at the best prices for everyone" },

  // Countdown
  "countdown.badge": { ar: "عرض محدود", en: "LIMITED OFFER" },
  "countdown.title1": { ar: "خصم", en: "Get" },
  "countdown.discount": { ar: "30%", en: "30% OFF" },
  "countdown.title2": { ar: "على جميع الباقات!", en: "on all packages!" },
  "countdown.subtitle": { ar: "العرض ينتهي قريباً – لا تفوّت الفرصة", en: "Offer ending soon — don't miss out" },
  "countdown.cta": { ar: "استفد من العرض الآن", en: "Claim This Deal" },
  "countdown.day": { ar: "يوم", en: "Day" },
  "countdown.hour": { ar: "ساعة", en: "Hour" },
  "countdown.minute": { ar: "دقيقة", en: "Min" },
  "countdown.second": { ar: "ثانية", en: "Sec" },

  // Pricing
  "pricing.title": { ar: "الأسعار", en: "Pricing" },
  "pricing.subtitle": { ar: "باقات مرنة تناسب الجميع", en: "Flexible packages for everyone" },
  "pricing.best": { ar: "الأفضل قيمة", en: "Best Value" },
  "pricing.book": { ar: "احجز الآن", en: "Book Now" },
  "plan.1.title": { ar: "ساعة PlayStation", en: "PlayStation Hour" },
  "plan.1.unit": { ar: "ريال / ساعة", en: "SAR / hour" },
  "plan.1.f1": { ar: "PS5 مع يد تحكم", en: "PS5 with controller" },
  "plan.1.f2": { ar: "شاشة 4K", en: "4K Display" },
  "plan.1.f3": { ar: "سماعة مجانية", en: "Free headset" },
  "plan.2.title": { ar: "ساعة PC Gaming", en: "PC Gaming Hour" },
  "plan.2.unit": { ar: "ريال / ساعة", en: "SAR / hour" },
  "plan.2.f1": { ar: "PC RTX 4070+", en: "PC RTX 4070+" },
  "plan.2.f2": { ar: "شاشة 240Hz", en: "240Hz Display" },
  "plan.2.f3": { ar: "كيبورد + ماوس احترافي", en: "Pro keyboard + mouse" },
  "plan.2.f4": { ar: "سماعة قيمنق", en: "Gaming headset" },
  "plan.3.title": { ar: "باقة الأصدقاء", en: "Friends Pack" },
  "plan.3.unit": { ar: "ريال / 3 ساعات × 4 أشخاص", en: "SAR / 3hrs × 4 people" },
  "plan.3.f1": { ar: "4 أجهزة PS5 أو PC", en: "4 PS5 or PC stations" },
  "plan.3.f2": { ar: "مشروبات مجانية", en: "Free drinks" },
  "plan.3.f3": { ar: "خصم 25%", en: "25% discount" },
  "plan.4.title": { ar: "باقة VIP", en: "VIP Package" },
  "plan.4.unit": { ar: "ريال / 5 ساعات", en: "SAR / 5 hours" },
  "plan.4.f1": { ar: "غرفة خاصة", en: "Private room" },
  "plan.4.f2": { ar: "شاشة كبيرة", en: "Large screen" },
  "plan.4.f3": { ar: "مشروبات + وجبات", en: "Drinks + meals" },
  "plan.4.f4": { ar: "أولوية الحجز", en: "Priority booking" },

  // Gallery
  "gallery.title": { ar: "المعرض", en: "Gallery" },
  "gallery.subtitle": { ar: "اكتشف أجواء بيكسل أرينا", en: "Discover the PixelArena atmosphere" },
  "gallery.1": { ar: "PlayStation 5 في بيكسل أرينا", en: "PlayStation 5 at PixelArena" },
  "gallery.2": { ar: "أجهزة PC Gaming عالية الأداء", en: "High-End PC Gaming Stations" },
  "gallery.3": { ar: "أجواء الصالة المريحة", en: "Comfortable Lounge Vibes" },
  "gallery.4": { ar: "جلسات جماعية ممتعة", en: "Fun Group Sessions" },

  // Testimonials
  "testimonials.title": { ar: "آراء العملاء", en: "Testimonials" },
  "testimonials.subtitle": { ar: "اكتشف ماذا يقول زوارنا عن تجربتهم", en: "See what our visitors say about their experience" },
  "test.1.name": { ar: "أحمد المطيري", en: "Ahmed Al-Mutairi" },
  "test.1.text": { ar: "أفضل صالة ألعاب زرتها! الأجهزة قوية والأجواء خرافية. بالتأكيد راح أرجع مع أصدقائي.", en: "Best gaming lounge I've visited! Powerful devices and incredible vibes. Definitely coming back with friends." },
  "test.2.name": { ar: "خالد العتيبي", en: "Khalid Al-Otaibi" },
  "test.2.text": { ar: "تجربة PS5 هنا غير! الشاشات 4K والكراسي مريحة جداً. الأسعار معقولة مقارنة بالجودة.", en: "PS5 experience here is next level! 4K screens and super comfortable chairs. Great value for money." },
  "test.3.name": { ar: "سارة الحربي", en: "Sara Al-Harbi" },
  "test.3.text": { ar: "مكان نظيف ومرتب والموظفين محترمين. المشروبات والسناكات لذيذة. تجربة ممتازة!", en: "Clean, organized place with respectful staff. Delicious drinks and snacks. Excellent experience!" },
  "test.4.name": { ar: "فهد الشمري", en: "Fahad Al-Shammari" },
  "test.4.text": { ar: "الإنترنت سريع جداً وما فيه أي لاق. لعبت أونلاين بدون مشاكل. أنصح الكل يجرب.", en: "Super fast internet with zero lag. Played online without any issues. Highly recommend!" },

  // FAQ
  "faq.title": { ar: "الأسئلة الشائعة", en: "FAQ" },
  "faq.subtitle": { ar: "إجابات لأكثر الأسئلة شيوعاً", en: "Answers to the most common questions" },
  "faq.1.q": { ar: "ما هي ساعات العمل؟", en: "What are your working hours?" },
  "faq.1.a": { ar: "نعمل يومياً من الساعة 2 ظهراً حتى 2 صباحاً. في العطل والمناسبات قد نمدد الساعات.", en: "We're open daily from 2 PM to 2 AM. Hours may extend during holidays and special events." },
  "faq.2.q": { ar: "هل يجب الحجز مسبقاً؟", en: "Do I need to book in advance?" },
  "faq.2.a": { ar: "يُفضل الحجز المسبق لضمان مكانك، خاصة في عطلة نهاية الأسبوع. يمكنك الحجز عبر الموقع أو واتساب.", en: "Advance booking is recommended to guarantee your spot, especially on weekends. Book via our website or WhatsApp." },
  "faq.3.q": { ar: "ما هي الأجهزة المتوفرة؟", en: "What devices are available?" },
  "faq.3.a": { ar: "نوفر أجهزة PlayStation 5 وأجهزة PC بمعالجات حديثة وكروت RTX 4070 وأعلى مع شاشات 4K و 240Hz.", en: "We offer PlayStation 5 consoles and PCs with latest processors, RTX 4070+ GPUs, and 4K/240Hz displays." },
  "faq.4.q": { ar: "هل يوجد طعام ومشروبات؟", en: "Do you serve food and drinks?" },
  "faq.4.a": { ar: "نعم! نوفر تشكيلة واسعة من المشروبات الباردة والساخنة والوجبات الخفيفة والسناكات.", en: "Yes! We offer a wide selection of hot & cold beverages, light meals, and snacks." },
  "faq.5.q": { ar: "هل يوجد خصومات للمجموعات؟", en: "Are there group discounts?" },
  "faq.5.a": { ar: "بالتأكيد! لدينا باقة الأصدقاء بخصم 25% وباقات خاصة للمجموعات الكبيرة. تواصل معنا للتفاصيل.", en: "Absolutely! We have a Friends Pack with 25% off and special deals for larger groups. Contact us for details." },
  "faq.6.q": { ar: "هل المكان مناسب للأطفال؟", en: "Is the venue kid-friendly?" },
  "faq.6.a": { ar: "نعم، المكان مناسب لجميع الأعمار. نوفر بيئة آمنة ونظيفة مع إشراف مستمر.", en: "Yes, our venue is suitable for all ages. We provide a safe, clean environment with continuous supervision." },

  // Contact
  "contact.title": { ar: "تواصل وحجز", en: "Contact & Book" },
  "contact.subtitle": { ar: "احجز مكانك الآن واستمتع بتجربة لا تُنسى", en: "Book your spot now and enjoy an unforgettable experience" },
  "contact.name": { ar: "الاسم", en: "Name" },
  "contact.name.ph": { ar: "اسمك الكريم", en: "Your name" },
  "contact.phone": { ar: "رقم الهاتف", en: "Phone" },
  "contact.phone.ph": { ar: "05XXXXXXXX", en: "05XXXXXXXX" },
  "contact.date": { ar: "التاريخ", en: "Date" },
  "contact.date.ph": { ar: "اختر التاريخ", en: "Pick a date" },
  "contact.time": { ar: "الوقت", en: "Time" },
  "contact.time.ph": { ar: "اختر الوقت", en: "Pick a time" },
  "contact.device": { ar: "نوع الجهاز", en: "Device Type" },
  "contact.device.ph": { ar: "اختر الجهاز", en: "Select device" },
  "contact.hours": { ar: "عدد الساعات", en: "Hours" },
  "contact.hours.ph": { ar: "اختر", en: "Select" },
  "contact.submit": { ar: "🎮 أرسل طلب الحجز", en: "🎮 Submit Booking" },
  "contact.success": { ar: "تم إرسال طلب الحجز بنجاح!", en: "Booking request sent successfully!" },
  "contact.hours.1": { ar: "ساعة واحدة", en: "1 Hour" },
  "contact.hours.2": { ar: "ساعتين", en: "2 Hours" },
  "contact.hours.3": { ar: "3 ساعات", en: "3 Hours" },
  "contact.hours.5": { ar: "5 ساعات", en: "5 Hours" },
  "contact.info.phone": { ar: "0512345678", en: "0512345678" },
  "contact.info.address": { ar: "الرياض، حي الملقا", en: "Riyadh, Al-Malqa District" },
  "contact.info.hours": { ar: "يومياً من 2 ظهراً - 2 صباحاً", en: "Daily 2 PM – 2 AM" },

  // Footer
  "footer.copy": { ar: "© 2026 بيكسل أرينا. جميع الحقوق محفوظة.", en: "© 2026 PixelArena. All rights reserved." },

  // Validation
  "val.name": { ar: "الاسم مطلوب", en: "Name is required" },
  "val.phone": { ar: "رقم الهاتف غير صحيح", en: "Invalid phone number" },
  "val.date": { ar: "التاريخ مطلوب", en: "Date is required" },
  "val.time": { ar: "الوقت مطلوب", en: "Time is required" },
  "val.device": { ar: "اختر نوع الجهاز", en: "Select a device type" },
  "val.hours": { ar: "اختر عدد الساعات", en: "Select hours" },
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("ar");

  const toggle = useCallback(() => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const t = useCallback(
    (key: string) => translations[key]?.[lang] ?? key,
    [lang]
  );

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider value={{ lang, dir, toggle, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
