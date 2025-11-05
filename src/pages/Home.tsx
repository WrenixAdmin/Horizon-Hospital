import { Link } from "react-router-dom";
import { Users, Building2, Heart, Pill, Stethoscope, Home as HomeIcon, AlertCircle, PhoneCall, CheckCircle, CreditCard, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import SEO from "@/components/SEO";

import opdD from "../../public/img/opdD.webp";
import emergency from "../../public/img/emergency.webp"
import pharmacy from "../../public/img/pharammcy.webp";
import consultant from "../../public/img/special.webp";



const Home = () => {
  const hospitalSchema = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Horizon Hospital",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Debarawewa Thissamaharama",
      "addressLocality": "Thissamaharama",
      "addressRegion": "Southern Province",
      "postalCode": "82600",
      "addressCountry": "LK"
    },
    "telephone": "+94 472 239 444",
    "openingHours": "Mo-Su 00:00-23:59",
    "priceRange": "Rs Rs - Rs Rsrs",
  };

  const stats = [
    { icon: Users, label: "Doctors", value: "25+" },
    { icon: Building2, label: "Medical Beds", value: "25+" },
    { icon: Heart, label: "Happy Patients", value: "420+" },
    { icon: Pill, label: "Prescriptions", value: "300K+" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: "OPD Consultations",
      description: "Comprehensive outpatient consultation with experienced physicians for all your routine and specialized healthcare needs.",
      image: opdD,
    },
    {
      icon: Heart,
      title: "Expert Specialist Consultations",
      description: "Access leading medical specialists in various fields, offering expert diagnosis and personalized treatment plans.",
      image: consultant,
    },
    {
      icon: AlertCircle,
      title: "24/7 Emergency & Trauma Unit (ETU)",
      description: "Rapid response and advanced life support for critical conditions. Always ready for immediate care in Tissamaharama.",
      image: emergency,
    },
    {
      icon: Pill,
      title: "Hospital Pharmacy",
      description: "A fully stocked, qualified pharmacy ensuring you receive accurate and essential medications with professional guidance.",
      image: pharmacy,
    },
  ];

  const features = [
    {
      icon: PhoneCall,
      title: "24/7 Support Team",
      description: "Round-the-clock assistance for all your medical queries and emergencies",
    },
    {
      icon: CheckCircle,
      title: "SMS Appointment Alerts",
      description: "Instant SMS notifications for appointment confirmations and reminders",
    },
    {
      icon: CreditCard,
      title: "Easy Payment Options",
      description: "Multiple payment methods including insurance, cards, and installment plans",
    },
    {
      icon: UserCheck,
      title: "Personalized Care",
      description: "Tailored consultant matching based on your specific health requirements",
    },
  ];

  return (
    <>
      <SEO
        title="Horizon Hospital - Quality Healthcare Services | 24/7 Medical Care"
        description="Horizon Hospital provides comprehensive healthcare services with 25+ experienced doctors, modern facilities, and 24/7 emergency care in Sri Lanka."
        keywords="hospital Sri Lanka, healthcare services, emergency care, medical consultation, doctors, pharmacy, OPD, home visit"
        schema={hospitalSchema}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero Section with Carousel */}
          <HeroCarousel />
          <section className="py-20 bg-gradient-to-r from-primary/80 to-secondary/80 text-white text-center">
            <div className="relative container mx-auto px-4">
              {/* ECG Watermark Animation */}
              <svg
                className="absolute left-0 top-0 w-full h-24 md:h-32 opacity-30 pointer-events-none z-0"
                viewBox="0 0 1440 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ animation: 'ecgMove 4s linear infinite' }}
              >
                <path
                  d="M0 50 L200 50 L220 20 L240 80 L260 50 L400 50 L420 30 L440 70 L460 50 L600 50 L620 10 L640 90 L660 50 L800 50 L820 40 L840 60 L860 50 L1000 50 L1020 20 L1040 80 L1060 50 L1200 50 L1220 30 L1240 70 L1260 50 L1440 50"
                  stroke="#fff"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeDasharray="12 8"
                >
                </path>
              </svg>
              <style>{`
                @keyframes ecgMove {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-60px); }
                }
              `}</style>
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Tissamaharama's Trusted Healthcare Partner</h1>
                <p className="text-2xl mb-4">Comprehensive Medical Services and Personalized Care for Your Family's Wellbeing.</p>
                <div className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow-lg text-lg mt-4">
                  Immediate Care: 24/7 Emergency & Trauma Unit (ETU)
                </div>
              </div>
            </div>
          </section>

          {/* About Horizon Hospital Section */}
          <section className="py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">About Horizon Hospital</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Horizon Hospital in Tissamaharama, we are committed to providing exceptional, patient-centered healthcare. Our skilled team of medical professionals utilizes modern technology to deliver accurate diagnoses and effective treatments, from routine OPD consultations to advanced procedures like Endoscopy and Colonoscopy. We believe in creating a compassionate and healing environment where every patient receives personalized care and attention, ensuring the best possible health outcomes for our community. Your wellbeing is our singular focus.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6 pb-6">
                      <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                      <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                      <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Comprehensive Medical Services</h2>
                <p className="text-lg text-muted-foreground">Exceptional Healthcare Solutions in Tissamaharama for You and Your Family.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {services.map((service, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <CardContent className="p-6">
                      <service.icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center">
                <Button asChild size="lg" className="font-semibold">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ...existing code... */}
          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why Choose Us</h2>
                <p className="text-lg text-muted-foreground">Experience healthcare excellence with patient-centered services</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8 pb-8">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                        <feature.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-foreground">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Make Your Appointment Today</h2>
              <p className="text-xl mb-8 opacity-90">Get in touch with our team for personalized healthcare services</p>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/contact">Contact Us Now</Link>
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
