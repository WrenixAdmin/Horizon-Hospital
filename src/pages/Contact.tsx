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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Target WhatsApp number (will be cleaned of spaces/characters)
    const whatsappNumber = "+94 70 779 9444";
    const cleaned = whatsappNumber.replace(/\D/g, ""); // -> 94707799444

    // Compose message with form values
    const text = `Name: ${formData.name || "-"}\nMessage: ${formData.message || "-"}`;

    // Open WhatsApp chat in new tab with prefilled text
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // Optional UX feedback + reset form
    toast({
      title: "Opening WhatsApp",
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

  return (
    <>
      <SEO
        title="Contact Horizon Hospital - 24/7 Emergency Support & Appointments"
        description="Contact Horizon Hospital for appointments, emergency care, or inquiries. Available 24/7 for your healthcare needs. Call us or visit our location in Colombo, Sri Lanka."
        keywords="Contact Horizon Hospital, 24/7 Support, Emergency Number, hospital contact, book appointment, medical emergency, Colombo hospital"
      />

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
                alt="Contact Horizon Hospital for medical services and appointments"
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
                    Connect with Horizon Hospital
                  </h1>
                  <p className="text-xl text-white/90">
                    Your health questions answered. Get in touch with our team
                    in Tissamaharama today.
                  </p>
                </div>
              </motion.div>
            </motion.section>

            <section className="py-16">
              <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h2 className="text-3xl font-bold mb-6 text-foreground">
                      Get In Touch
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      Have a question or need medical assistance? Our dedicated
                      team is available around the clock to address your
                      concerns. Reach out to us through any of the channels
                      below, and we'll respond promptly.
                    </p>

                    <motion.div
                      className="space-y-6"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {[
                        {
                          icon: <Phone className="h-6 w-6 text-primary" />,
                          title: "Phone",
                          content: (
                            <>
                              <a
                                href="tel:+94 472 239 444"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                0472 239 444
                              </a>
                              <br />
                              {/* <a href="tel:+94112345679" className="text-muted-foreground hover:text-primary transition-colors">
                                +94 11 234 5679 (Emergency)
                              </a> */}
                            </>
                          ),
                        },
                        {
                          icon: <Mail className="h-6 w-6 text-primary" />,
                          title: "Email",
                          content: (
                            <a
                              href="mailto:info@horizonhospital.com"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              info@horizonhospital.com
                            </a>
                          ),
                        },
                        {
                          icon: <MapPin className="h-6 w-6 text-primary" />,
                          title: "Address",
                          content: (
                            <p className="text-muted-foreground">
                              Horizon Hospital
                              <br />
                              Debarawewa
                              <br />
                              Sri Lanka
                            </p>
                          ),
                        },
                        {
                          icon: <Clock className="h-6 w-6 text-primary" />,
                          title: "Hours",
                          content: (
                            <p className="text-muted-foreground">
                              Open 24/7
                              <br />
                              Emergency Services Always Available
                            </p>
                          ),
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                          }}
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

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <Card>
                      <CardContent className="p-8">
                        <h2 className="text-3xl font-bold mb-6 text-foreground">
                          Send Us a Message
                        </h2>
                        <motion.form
                          onSubmit={handleSubmit}
                          className="space-y-6"
                          initial="hidden"
                          animate="visible"
                          variants={{
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: {
                                staggerChildren: 0.1,
                              },
                            },
                          }}
                        >
                          {[
                            {
                              label: "Your Name *",
                              id: "name",
                              type: "text",
                              placeholder: "Enter your full name",
                            },
                          ].map((field) => (
                            <motion.div
                              key={field.id}
                              variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                              }}
                            >
                              <label
                                htmlFor={field.id}
                                className="block text-sm font-medium mb-2 text-foreground"
                              >
                                {field.label}
                              </label>
                              <Input
                                id={field.id}
                                name={field.id}
                                type={field.type}
                                required
                                value={
                                  formData[field.id as keyof typeof formData]
                                }
                                onChange={handleChange}
                                placeholder={field.placeholder}
                              />
                            </motion.div>
                          ))}

                          <motion.div
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 },
                            }}
                          >
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium mb-2 text-foreground"
                            >
                              Message *
                            </label>
                            <Textarea
                              id="message"
                              name="message"
                              required
                              value={formData.message}
                              onChange={handleChange}
                              placeholder="How can we help you?"
                              rows={6}
                            />
                          </motion.div>

                          <motion.div
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0 },
                            }}
                          >
                            <Button type="submit" className="w-full" size="lg">
                              Send Message
                            </Button>
                          </motion.div>
                        </motion.form>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

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
