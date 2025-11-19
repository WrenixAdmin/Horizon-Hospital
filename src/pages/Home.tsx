// Full React Home Page with Language Selector and Translations
// NOTE: Update paths for images/components according to your project structure.

import { Link } from "react-router-dom";
import {
  Users,
  Building2,
  Heart,
  Pill,
  Stethoscope,
  Home as HomeIcon,
  AlertCircle,
  PhoneCall,
  CheckCircle,
  CreditCard,
  UserCheck,
  AlignCenter,
} from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import SEO from "@/components/SEO";

import opdD from "../../public/img/opdD.webp";
import emergency from "../../public/img/emergency.webp";
import pharmacy from "../../public/img/pharammcy.webp";
import consultant from "../../public/img/special.webp";

// LANGUAGE TRANSLATION DATA
const translations = {
  en: {
    doctors: "Doctors",
    beds: "Medical Beds",
    patients: "Happy Patients",
    prescriptions: "Prescriptions",

    hero_title: "Tissamaharama's Trusted Healthcare Partner",
    hero_sub: "Comprehensive Medical Services and Personalized Care for Your Family's Wellbeing.",
    hero_etu: "Immediate Care: 24/7 Emergency & Trauma Unit (ETU)",

    about_title: "About Horizon Hospital",
    about_text:
      "At Horizon Hospital in Tissamaharama, we are committed to providing exceptional, patient-centered healthcare. Our skilled team of medical professionals utilizes modern technology to deliver accurate diagnoses and effective treatments, from routine OPD consultations to advanced procedures like Endoscopy and Colonoscopy. We believe in creating a compassionate and healing environment where every patient receives personalized care and attention, ensuring the best possible health outcomes for our community. Your well-being is our singular focus.",

    services_title: "Our Comprehensive Medical Services",
    services_sub: "Exceptional Healthcare Solutions in Tissamaharama for You and Your Family.",

    why_title: "Why Choose Us",
    why_sub: "Experience healthcare excellence with patient-centered services",

    appointment_title: "Make Your Appointment Today",
    appointment_sub: "Get in touch with our team for personalized healthcare services",

    view_services: "View All Services",
    contact_us: "Contact Us Now",
  },

  si: {
    doctors: "වෛද්‍යවරු",
    beds: "සෙවණැලි ඇඳන්",
    patients: "සතුටු රෝගීන්",
    prescriptions: " ඖෂධ වට්ටෝරු",

    hero_title: "තිස්සමහාරමාවේ විශ්වාසදායක හෙද අපේක්ෂාව",
    hero_sub: "ඔබේ පවුලේ සෞඛ්‍යය සඳහා සම්පූර්ණ වෛද්‍ය සේවා.",
    hero_etu: "ඉක්මන් සත්කාරය: 24/7 හදිසි & ආසාදන ඒකකය (ETU)",

    about_title: "හොරයිසන් රෝහල ගැන",
    about_text:
      "තිස්සමහාරාමයේ හොරයිසන් රෝහලේ, අපි සුවිශේෂී, රෝගී කේන්ද්‍රීය සෞඛ්‍ය සේවාවක් සැපයීමට කැපවී සිටිමු. අපගේ දක්ෂ වෛද්‍ය වෘත්තිකයන් කණ්ඩායම, සාමාන්‍ය බාහිර රෝගී උපදේශනවල සිට එන්ඩොස්කොපි සහ කොලොනොස්කොපි වැනි උසස් ක්‍රියා පටිපාටි දක්වා නිවැරදි රෝග විනිශ්චය සහ ඵලදායී ප්‍රතිකාර ලබා දීම සඳහා නවීන තාක්ෂණය භාවිතා කරයි. සෑම රෝගියෙකුටම පුද්ගලාරෝපිත සත්කාර සහ අවධානය ලැබෙන, අපගේ ප්‍රජාව සඳහා හොඳම සෞඛ්‍ය ප්‍රතිඵල සහතික කරන, දයානුකම්පිත සහ සුවදායී පරිසරයක් නිර්මාණය කිරීම අපි විශ්වාස කරමු. ඔබේ යහපැවැත්ම අපගේ ඒකීය අවධානයයි.",

    services_title: "අපගේ සම්පූර්ණ වෛද්‍ය සේවා",
    services_sub: "ඔබ හා ඔබේ පවුල සඳහා වඩාත්ම විශ්වාසදායක සෞඛ්‍ය සේවා.",

    why_title: "ඇයි අපව තෝරාගන්නේ",
    why_sub: "රෝගී මධ්‍යගත සෞඛ්‍ය සේවාවන්",

    appointment_title: "අවස්ථාවක් වෙන් කරවා ගන්න",
    appointment_sub: "ඔබගේ සෞඛ්‍යය සඳහා අපගේ කණ්ඩායම්වලට අදම අමතන්න",

    view_services: "සියලු සේවාවන් බලන්න",
    contact_us: "අපව අදම අමතන්න",
  },
};

const Home = () => {
  const [lang, setLang] = React.useState("en");
  const t = translations[lang];

  const stats = [
    { icon: Users, label: t.doctors, value: "25+" },
    { icon: Building2, label: t.beds, value: "25+" },
    { icon: Heart, label: t.patients, value: "420+" },
    { icon: Pill, label: t.prescriptions, value: "300K+" },
  ];

  const services = [
    {
      icon: Stethoscope,
      title: lang === "si" ? "OPD පිලිගැනීම්" : "OPD Consultations",
      description:
        lang === "si"
          ? "දිනපතා OPD සේවාවන් ඔබ සඳහා."
          : "Comprehensive outpatient consultations.",
      image: opdD,
    },
    {
      icon: Heart,
      title: lang === "si" ? "විශේෂඥ වෛද්‍ය සේවාවන්" : "Expert Specialist Consultations",
      description:
        lang === "si"
          ? "විවිධ ක්ෂේත්‍රවල අත්දැකීම් සහිත විශේෂඥවරු."
          : "Access leading medical specialists.",
      image: consultant,
    },
    {
      icon: AlertCircle,
      title: lang === "si" ? "24/7 හදිසි සේවා" : "24/7 Emergency & Trauma Unit (ETU)",
      description:
        lang === "si" ? "ඉක්මන් හා ව්‍යාපාරික හදිසි සත්කාරය." : "Rapid response for critical conditions.",
      image: emergency,
    },
    {
      icon: Pill,
      title: lang === "si" ? "රෝහලේ ඖෂධාගාරය" : "Hospital Pharmacy",
      description:
        lang === "si" ? "සම්පූර්ණ ඖෂධ හා වෘත්තීය උපදෙස්." : "Fully stocked pharmacy with guidance.",
      image: pharmacy,
    },
  ];

  const features = [
    {
      icon: PhoneCall,
      title: lang === "si" ? "24/7 සහාය" : "24/7 Support Team",
      description:
        lang === "si" ? "රෝගී ප්‍රශ්න සඳහා සම්පූර්ණ සහාය." : "Round-the-clock medical support.",
    },
    {
      icon: CheckCircle,
      title: lang === "si" ? "SMS සූචනා" : "SMS Appointment Alerts",
      description:
        lang === "si" ? "සුදුසුකම් සහිත SMS හෝඩියේ." : "Instant appointment alerts.",
    },
    {
      icon: CreditCard,
      title: lang === "si" ? "පියවීමේ පහසු ක්‍රම" : "Easy Payment Options",
      description:
        lang === "si" ? "බැංකු කාඩ්පත් සහ ආරක්ෂාව." : "Multiple secure payment methods.",
    },
    {
      icon: UserCheck,
      title: lang === "si" ? "පුද්ගලික සත්කාරය" : "Personalized Care",
      description:
        lang === "si" ? "අදාල විශේෂඥ සේවාවන්." : "Tailored consultant matching.",
    },
  ];

  return (
    <>
      <SEO
        title="Horizon Hospital - Quality Healthcare Services | 24/7 Medical Care"
        description="Horizon Hospital provides comprehensive healthcare services with experienced doctors and modern facilities."
        keywords="hospital Sri Lanka"
      />

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* HERO */}
          <HeroCarousel />
          <section className="py-20 bg-gradient-to-r from-primary/80 to-secondary/80 text-white text-center">
            <h1 className="text-5xl font-bold mb-6">{t.hero_title}</h1>
            <p className="text-2xl mb-4">{t.hero_sub}</p>
            <div className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded shadow-lg text-lg mt-4">
              {t.hero_etu}
            </div>
          </section>

          {/* LANGUAGE SELECTOR */}
      <div className="flex justify-end p-4 bg-gray-100 shadow-sm items-center column-gap-5">
        <p>{lang === "en" ? "Select Language :" : "භාෂාව : "}</p>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="px-3 py-1 rounded border"
        >
          
          <option value="en">English</option>
          <option value="si">සිංහල</option>
        </select>
      </div>

          {/* ABOUT */}
          <section className="py-16 bg-card text-center">
            <h2 className="text-4xl font-bold mb-6">{t.about_title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t.about_text}
            </p>
          </section>

          {/* STATS */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-6 container mx-auto py-16">
            {stats.map((stat, i) => (
              <Card key={i} className="text-center">
                <CardContent className="pt-6 pb-6">
                  <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          {/* SERVICES */}
          <section className="py-16 text-center">
            <h2 className="text-4xl font-bold mb-4">{t.services_title}</h2>
            <p className="text-lg text-muted-foreground">{t.services_sub}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 container mx-auto">
              {services.map((s, i) => (
                <Card key={i} className="overflow-hidden group">
                  <img src={s.image} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <s.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                    <p className="text-muted-foreground">{s.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button asChild size="lg" className="mt-8">
              <Link to="/services">{t.view_services}</Link>
            </Button>
          </section>

          {/* FEATURES */}
          <section className="py-16 bg-accent text-center">
            <h2 className="text-4xl font-bold mb-4">{t.why_title}</h2>
            <p className="text-lg text-muted-foreground">{t.why_sub}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg-grid-cols-4 gap-6 container mx-auto mt-8">
              {features.map((f, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="pt-8 pb-8">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                      <f.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{f.title}</h3>
                    <p className="text-muted-foreground text-sm">{f.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* APPOINTMENT */}
          <section className="py-16 bg-primary text-primary-foreground text-center">
            <h2 className="text-4xl font-bold mb-4">{t.appointment_title}</h2>
            <p className="text-xl mb-8 opacity-90">{t.appointment_sub}</p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">{t.contact_us}</Link>
            </Button>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;