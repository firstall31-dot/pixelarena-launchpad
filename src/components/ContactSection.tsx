import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { format } from "date-fns";
import { ar } from "date-fns/locale";
import { Phone, MapPin, Clock, MessageCircle, CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useI18n } from "@/lib/i18n";
import SectionWrapper from "./SectionWrapper";

const timeSlots = [
  "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM",
  "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM", "11:00 PM",
  "12:00 AM", "1:00 AM",
];

const ContactSection = () => {
  const { t, lang } = useI18n();
  const [selectedDate, setSelectedDate] = useState<Date>();

  const schema = z.object({
    name: z.string().min(2, t("val.name")).max(100),
    phone: z.string().min(9, t("val.phone")).max(15),
    date: z.string().min(1, t("val.date")),
    time: z.string().min(1, t("val.time")),
    device: z.string().min(1, t("val.device")),
    hours: z.string().min(1, t("val.hours")),
  });

  type FormData = z.infer<typeof schema>;

  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) setValue("date", format(date, "yyyy-MM-dd"));
  };

  const onSubmit = (data: FormData) => {
    const msg = `Booking:\nName: ${data.name}\nPhone: ${data.phone}\nDate: ${data.date}\nTime: ${data.time}\nDevice: ${data.device}\nHours: ${data.hours}`;
    window.open(`https://wa.me/966512345678?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success(t("contact.success"));
    setSelectedDate(undefined);
    reset();
  };

  const contactInfo = [
    { icon: Phone, label: t("contact.info.phone") },
    { icon: MapPin, label: t("contact.info.address") },
    { icon: Clock, label: t("contact.info.hours") },
  ];

  return (
    <SectionWrapper id="contact" title={t("contact.title")} subtitle={t("contact.subtitle")}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.form initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit(onSubmit)} className="glass rounded-xl p-6 sm:p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">{t("contact.name")}</Label>
              <Input id="name" placeholder={t("contact.name.ph")} {...register("name")} className="mt-1 bg-muted/50 border-border" />
              {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="phone">{t("contact.phone")}</Label>
              <Input id="phone" placeholder={t("contact.phone.ph")} {...register("phone")} className="mt-1 bg-muted/50 border-border" />
              {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>{t("contact.date")}</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full mt-1 justify-start bg-muted/50 border-border font-normal", !selectedDate && "text-muted-foreground")}>
                    <CalendarIcon className="ml-2 h-4 w-4" />
                    {selectedDate ? format(selectedDate, "PPP", { locale: lang === "ar" ? ar : undefined }) : t("contact.date.ph")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={selectedDate} onSelect={handleDateSelect} disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))} initialFocus className={cn("p-3 pointer-events-auto")} />
                </PopoverContent>
              </Popover>
              {errors.date && <p className="text-destructive text-xs mt-1">{errors.date.message}</p>}
            </div>
            <div>
              <Label>{t("contact.time")}</Label>
              <Select onValueChange={(v) => setValue("time", v)}>
                <SelectTrigger className="mt-1 bg-muted/50 border-border">
                  <SelectValue placeholder={t("contact.time.ph")} />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((ts) => <SelectItem key={ts} value={ts}>{ts}</SelectItem>)}
                </SelectContent>
              </Select>
              {errors.time && <p className="text-destructive text-xs mt-1">{errors.time.message}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label>{t("contact.device")}</Label>
              <Select onValueChange={(v) => setValue("device", v)}>
                <SelectTrigger className="mt-1 bg-muted/50 border-border">
                  <SelectValue placeholder={t("contact.device.ph")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ps5">PlayStation 5</SelectItem>
                  <SelectItem value="pc">PC Gaming</SelectItem>
                </SelectContent>
              </Select>
              {errors.device && <p className="text-destructive text-xs mt-1">{errors.device.message}</p>}
            </div>
            <div>
              <Label>{t("contact.hours")}</Label>
              <Select onValueChange={(v) => setValue("hours", v)}>
                <SelectTrigger className="mt-1 bg-muted/50 border-border">
                  <SelectValue placeholder={t("contact.hours.ph")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">{t("contact.hours.1")}</SelectItem>
                  <SelectItem value="2">{t("contact.hours.2")}</SelectItem>
                  <SelectItem value="3">{t("contact.hours.3")}</SelectItem>
                  <SelectItem value="5">{t("contact.hours.5")}</SelectItem>
                </SelectContent>
              </Select>
              {errors.hours && <p className="text-destructive text-xs mt-1">{errors.hours.message}</p>}
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 glow-purple text-lg py-6">
            {t("contact.submit")}
          </Button>
        </motion.form>

        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
          <div className="glass rounded-xl p-6 space-y-4">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-muted-foreground">{c.label}</span>
              </div>
            ))}
          </div>
          <div className="glass rounded-xl overflow-hidden h-64">
            <iframe title="PixelArena Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.674536!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzEuMSJF!5e0!3m2!1sar!2ssa!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </motion.div>
      </div>

      <a href="https://wa.me/966512345678" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-accent rounded-full flex items-center justify-center glow-cyan shadow-lg hover:scale-110 transition-transform" aria-label="WhatsApp">
        <MessageCircle className="h-7 w-7 text-accent-foreground" />
      </a>
    </SectionWrapper>
  );
};

export default ContactSection;
