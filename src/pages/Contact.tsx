import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const translations = {
  en: {
    pageTitle: "Connect with Horizon Hospital",
    pageSubtitle:
      "Your health questions answered. Get in touch with our team in Tissamaharama today.",
    contactHeading: "Get In Touch",
    contactDescription:
      "Have a question or need medical assistance? Our dedicated team is available around the clock to address your concerns. Reach out to us through any of the channels below, and we'll respond promptly.",
    formHeading: "Send Us a Message",
    nameLabel: "Your Name *",
    namePlaceholder: "Enter your full name",
    messageLabel: "Message *",
    messagePlaceholder: "How can we help you?",
    submitButton: "Send Message",
    contactButton: "Get in Touch",
    phoneTitle: "Phone",
    phoneContent: "0472 239 444",
    emailTitle: "Email",
    emailContent: "info@horizonhospital.com",
    addressTitle: "Address",
    addressContent: "Horizon Hospital\nDebarawewa\nSri Lanka",
    hoursTitle: "Hours",
    hoursContent: "Open 24/7\nEmergency Services Always Available",
  },
  si: {
    pageTitle: "හොරයිසන් රෝහල සමඟ සම්බන්ධ වන්න",
    pageSubtitle:
      "ඔබගේ සෞඛ්‍ය ප්‍රශ්නවලට පිළිතුරු. තිස්සමහාරමාවේ අපගේ කණ්ඩායම සමඟ අද සම්බන්ධ වන්න.",
    contactHeading: "සම්බන්ධ වන්න",
    contactDescription:
      "ප්‍රශ්නයක් තිබේද හෝ වෛද්‍ය උපකාර අවශ්‍යද? අපගේ විශේෂිත කණ්ඩායම ඔබගේ ගැටළු ලක්ෂණාත්මකව විසඳා දීමට සූදානම්. පහත සඳහන් ක්‍රමයන්හි අපව සම්බන්ධ කරගන්න.",
    formHeading: "පණිවුඩයක් එවන්න",
    nameLabel: "ඔබේ නම *",
    namePlaceholder: "ඔබේ සම්පූර්ණ නම ඇතුළත් කරන්න",
    messageLabel: "පණිවුඩය *",
    messagePlaceholder: "අපට ඔබට කෙසේ උදව් කළ හැකිද?",
    submitButton: "පණිවුඩය යවන්න",
    contactButton: "අපව සම්බන්ධ කරන්න",
    phoneTitle: "දුරකථනය",
    phoneContent: "0472 239 444",
    emailTitle: "ඊමේල්",
    emailContent: "info@horizonhospital.com",
    addressTitle: "ලිපිනය",
    addressContent: "හොරයිසන් රෝහල \n දෙබරවැව \n ශ්‍රී ලංකාව",
    hoursTitle: "කාලය",
    hoursContent: "24/7 විවෘතයි\nහදිසි සේවාවන් සෑම විටම ලබාගත හැක",
  },
};

const Contact = () => {
  const { toast } = useToast();
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "+94 70 779 9444";
    const cleaned = whatsappNumber.replace(/\D/g, "");
    const text = `Name: ${formData.name || "-"}\nMessage: ${formData.message || "-"}`;
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    toast({
      title: t.submitButton,
      description: "You'll be redirected to WhatsApp to send your message.",
    });
    setFormData({ name: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactItems = [
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: t.phoneTitle,
      content: (
        <a
          href="tel:+94472239444"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {t.phoneContent}
        </a>
      ),
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: t.emailTitle,
      content: (
        <a
          href="mailto:info@horizonhospital.com"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {t.emailContent}
        </a>
      ),
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: t.addressTitle,
      content: (
        <p className="whitespace-pre-line text-muted-foreground">
          {t.addressContent}
        </p>
      ),
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: t.hoursTitle,
      content: (
        <p className="whitespace-pre-line text-muted-foreground">
          {t.hoursContent}
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO title={t.pageTitle} description={t.pageSubtitle} />
      <PageTransition>
        <div className="min-h-screen bg-background">
          <Header />

          <main>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-80 overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=400&fit=crop"
                alt={t.pageTitle}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center"
              >
                <div className="container mx-auto px-4">
                  <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                    {t.pageTitle}
                  </h1>
                  <p className="text-xl text-white/90">{t.pageSubtitle}</p>
                </div>
              </motion.div>
            </motion.section>

            {/* LANGUAGE SELECTOR */}
            <div className="container mx-auto px-4 mt-4 flex justify-end items-center gap-5">
              <p>{lang === "en" ? "Select Language :" : "භාෂාව තෝරන්න : "}</p>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="border px-3 py-2 rounded text-sm"
              >
                <option value="en">English</option>
                <option value="si">සිංහල</option>
              </select>
            </div>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  {/* Contact Info */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      {t.contactHeading}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {t.contactDescription}
                    </p>
                    <motion.div className="space-y-6">
                      {contactItems.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <Card>
                            <CardContent className="flex items-start gap-4 p-6">
                              <div className="p-3 rounded-full bg-primary/10">
                                {item.icon}
                              </div>
                              <div>
                                <h3 className="font-semibold text-lg mb-2 text-foreground">
                                  {item.title}
                                </h3>
                                {item.content}
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card>
                      <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-foreground">
                          {t.formHeading}
                        </h2>
                        <motion.form
                          onSubmit={handleSubmit}
                          className="space-y-6"
                        >
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium mb-2 text-foreground"
                            >
                              {t.nameLabel}
                            </label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={handleChange}
                              placeholder={t.namePlaceholder}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium mb-2 text-foreground"
                            >
                              {t.messageLabel}
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder={t.messagePlaceholder}
                              rows={6}
                            />
                          </div>
                          <Button type="submit" className="w-full" size="lg">
                            {t.submitButton}
                          </Button>
                        </motion.form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Google Map */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="rounded-lg overflow-hidden shadow-lg"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.346152780019!2d81.26215672339919!3d6.292356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae53c41d6010f73%3A0xa4168983c4866db9!2sDebarawewa!5e0!3m2!1sen!2slk!4v1698479433544!5m2!1sen!2slk"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Horizon Hospital Location - Debarawewa, Sri Lanka"
                  />
                </motion.div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default Contact;
