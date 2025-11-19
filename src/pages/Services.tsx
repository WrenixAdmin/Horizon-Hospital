import { useState } from "react";
import {
  Stethoscope,
  Activity,
  Pill,
  Microscope,
  Heart,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

import opdD from "../../public/img/opdD.webp";
import emergency from "../../public/img/emergency.webp";
import lab from "../../public/img/LabM.webp";
import pharmacy from "../../public/img/pharammcy.webp";
import cosmatic from "../../public/img/cosmatic.webp";
import consultant from "../../public/img/special.webp";
import sergury from "../../public/img/surgery.webp";
import labservice from "../../public/img/cliniclanb.webp";
import tmt from "../../public/img/Hos.webp";

const translations = {
  en: {
    pageTitle: "Comprehensive Medical Services in Tissamaharama",
    pageSubtitle:
      "Exceptional Healthcare Solutions Tailored to Your Needs and Available 24/7.",
    contactTitle: "Need Medical Assistance?",
    contactSubtitle:
      "Contact us today to learn more about our services or book an appointment",
    contactButton: "Get in Touch",
    services: [
      {
        title: "OPD Consultation",
        description:
          "Our Outpatient Department (OPD) provides comprehensive primary care and medical consultations with experienced physicians across multiple disciplines. Whether you need a routine check-up, illness management, or specialized medical advice, our doctors in Tissamaharama are here to help diagnose and treat various health conditions with the latest medical protocols.",
      },
      {
        title: "Expert Specialist Consultation",
        description:
          "Access high-quality, focused care through our network of leading medical consultants. We offer specialized consultations in areas such as Cardiology, Gastroenterology, and more to provide expert diagnosis, advanced management plans, and coordinated ongoing care for complex conditions. Book your specialist appointment today.",
      },
      {
        title: "Advanced Surgical Theater Services",
        description:
          "Our modern operating Theater is equipped with state-of-the-art technology to facilitate a wide range of minor and major surgical procedures. Our skilled surgical team and anesthetists are committed to maintaining the highest standards of safety, precision, and post-operative recovery for all our patients.",
      },
      {
        title: "State-of-the-Art Laboratory Services",
        description:
          "Our in-house, fully equipped laboratory is equipped with advanced diagnostic equipment to perform a wide range of tests, including blood work, pathology, and specialized imaging procedures. We ensure accurate results with quick turnaround times to facilitate timely and effective treatment decisions.",
      },
      {
        title: "24/7 Hospital Pharmacy",
        description:
          "Our in-house pharmacy is fully stocked with a comprehensive range of medications and medical supplies. Our qualified pharmacists provide expert guidance on medication usage, potential interactions, and proper storage, ensuring safe and convenient access to all your prescribed medicines.",
      },
      {
        title: "24/7 Emergency & Trauma Unit (ETU)",
        description:
          "Available 24 hours a day, 7 days a week, our Emergency Ward is staffed with experienced emergency physicians and nurses ready to handle any medical crisis. Equipped with advanced life support systems and rapid diagnostic facilities, we provide immediate, life-saving care and swift treatment when every second counts.",
      },
      {
        title: "Advanced Laboratory and Pathology Services",
        description:
          "Our state-of-the-art laboratory performs a wide range of diagnostic and pathology tests, including blood work, biochemical analysis, and microbiology. We prioritize accuracy and rapid turnaround times to support your physician's timely treatment decisions.",
      },
      {
        title: "Cardiac Diagnostic: Exercise ECG (TMT)",
        description:
          "Specialized non-invasive test used to evaluate heart function during physical stress. Our Exercise ECG (Treadmill Test) helps diagnose coronary artery disease, assess fitness levels, and guide treatment plans under the supervision of our experienced cardiologists.",
      },
      {
        title: "Digital X-Ray and Imaging Services",
        description:
          "We offer efficient and high-quality digital X-ray services for clear skeletal and chest imaging. Our skilled technicians and consultants ensure accurate diagnostics for fractures, infections, and other conditions, providing quick results for prompt care.",
      },
      {
        title: "Upper Gastrointestinal Endoscopy",
        description:
          "A minimally invasive procedure performed by specialists to examine the upper digestive tract (esophagus, stomach, and duodenum). Used for accurate diagnosis and treatment of ulcers, inflammation, and other related conditions.",
      },
      {
        title: "Beauty and Medical Wellness Clinic",
        description:
          "Go beyond medical treatment with our specialized clinic. We offer a range of services focusing on aesthetic enhancement, skin health, and overall wellbeing. Consult with our experts to achieve your personal health and wellness goals in a professional setting.",
      },
    ],
  },
  si: {
    pageTitle: "තිස්සමහාරමයේ සම්පූර්ණ සෞඛ්‍ය සේවාවන්",
    pageSubtitle:
      "ඔබගේ අවශ්‍යතාවයන් සඳහා නිර්මාණය කළ 24/7 සම්පූර්ණ සෞඛ්‍ය සේවාවන්.",
    contactTitle: "වෛද්‍ය උපකාර අවශ්‍යද?",
    contactSubtitle:
      "අපගේ සේවාවන් ගැන තවත් විස්තර සඳහා හෝ ඇමතුම් වෙන්කර ගැනීමට අපව සම්බන්ධ කරගන්න",
    contactButton: "අපව සම්බන්ධ කරන්න",
    services: [
      {
        title: "OPD වෛද්‍ය සේවාව",
        description:
          "අපගේ බාහිර රෝගී අංශය (OPD) විවිධ අංශවල පළපුරුදු වෛද්‍යවරුන් සමඟ පුළුල් ප්‍රාථමික සත්කාර සහ වෛද්‍ය උපදේශන සපයයි. ඔබට නිතිපතා පරීක්ෂාවක්, රෝග කළමනාකරණයක් හෝ විශේෂිත වෛද්‍ය උපදෙස් අවශ්‍ය වුවද, නවතම වෛද්‍ය ප්‍රොටෝකෝල සමඟ විවිධ සෞඛ්‍ය තත්වයන් හඳුනා ගැනීමට සහ ප්‍රතිකාර කිරීමට උපකාර කිරීමට තිස්සමහාරාමයේ අපගේ වෛද්‍යවරු මෙහි සිටිති.",
      },
      {
        title: "විශේෂඥ වෛද්‍ය උපදෙස්",
        description:
          "අපගේ ප්‍රමුඛ වෛද්‍ය උපදේශක ජාලය හරහා උසස් තත්ත්වයේ, අවධානය යොමු කළ සත්කාර වෙත ප්‍රවේශ වන්න. හෘද රෝග, ආමාශ ආන්ත්‍ර විද්‍යාව සහ තවත් බොහෝ ක්ෂේත්‍රවල විශේෂඥ රෝග විනිශ්චය, උසස් කළමනාකරණ සැලසුම් සහ සංකීර්ණ තත්වයන් සඳහා සම්බන්ධීකරණ අඛණ්ඩ සත්කාර ලබා දීම සඳහා අපි විශේෂිත උපදේශන පිරිනමන්නෙමු. අදම ඔබේ විශේෂඥ හමුවීම වෙන්කරවා ගන්න.",
      },
      {
        title: "උසස් ශල්‍ය කාර්යාල සේවාවන්",
        description:
          "අපගේ නවීන ශල්‍යාගාරය, සුළු හා ප්‍රධාන ශල්‍යකර්ම රැසකට පහසුකම් සැලසීම සඳහා අති නවීන තාක්‍ෂණයෙන් සමන්විත වේ. අපගේ දක්ෂ ශල්‍ය වෛද්‍ය කණ්ඩායම සහ නිර්වින්දන වෛද්‍යවරු අපගේ සියලුම රෝගීන් සඳහා ආරක්ෂාව, නිරවද්‍යතාවය සහ පශ්චාත් ශල්‍යකර්ම සුවය පිළිබඳ ඉහළම ප්‍රමිතීන් පවත්වා ගැනීමට කැපවී සිටිති.",
      },
      {
        title: "අති නවීන රසායනාගාර සේවා",
        description:
          "අපගේ අභ්‍යන්තර, අංගසම්පූර්ණ රසායනාගාරය රුධිර පරීක්ෂණ, ව්‍යාධි විද්‍යාව සහ විශේෂිත රූපකරණ ක්‍රියා පටිපාටි ඇතුළු පුළුල් පරාසයක පරීක්ෂණ සිදු කිරීම සඳහා උසස් රෝග විනිශ්චය උපකරණ වලින් සමන්විත වේ. අපි ඉක්මන් හැරවුම් කාලයන් සමඟ නිවැරදි ප්‍රතිඵල සහතික කරමු, කාලෝචිත හා ඵලදායී ප්‍රතිකාර තීරණ සඳහා පහසුකම් සපයන්නෙමු.",
      },
      {
        title: "24/7 රෝහල් ඖෂධ ශාලාව",
        description:
          "අපගේ අභ්‍යන්තර ඔසුසල පුළුල් පරාසයක ඖෂධ සහ වෛද්‍ය සැපයුම් වලින් සමන්විත වේ. අපගේ සුදුසුකම් ලත් ඖෂධවේදීන් ඖෂධ භාවිතය, විභව අන්තර්ක්‍රියා සහ නිසි ගබඩා කිරීම පිළිබඳ විශේෂඥ මග පෙන්වීමක් ලබා දෙන අතර, ඔබේ නිර්දේශිත සියලුම ඖෂධ සඳහා ආරක්ෂිත සහ පහසු ප්‍රවේශයක් සහතික කරයි.",
      },
      {
        title: "24/7 හදිසි හා තුවාල මධ්‍යස්ථානය",
        description:
          "දවසේ පැය 24 පුරාම, සතියේ දින 7 පුරාම ලබා ගත හැකි අපගේ හදිසි වාට්ටුව, ඕනෑම වෛද්‍ය අර්බුදයකට මුහුණ දීමට සූදානම් පළපුරුදු හදිසි වෛද්‍යවරුන් සහ හෙදියන්ගෙන් සමන්විතය. දියුණු ජීවිත ආධාරක පද්ධති සහ වේගවත් රෝග විනිශ්චය පහසුකම් වලින් සමන්විත අපි, සෑම තත්පරයක්ම ගණන් ගන්නා විට ක්ෂණික, ජීවිතාරක්ෂක සත්කාර සහ කඩිනම් ප්‍රතිකාර ලබා දෙන්නෙමු.",
      },
      {
        title: "උසස් රසායනාගාර සහ ව්‍යාධි විද්‍යා සේවා",
        description:
          "අපගේ අති නවීන රසායනාගාරය රුධිර පරීක්ෂණ, ජෛව රසායනික විශ්ලේෂණය සහ ක්ෂුද්‍රජීව විද්‍යාව ඇතුළු පුළුල් පරාසයක රෝග විනිශ්චය සහ ව්‍යාධි විද්‍යා පරීක්ෂණ සිදු කරයි. ඔබේ වෛද්‍යවරයාගේ කාලෝචිත ප්‍රතිකාර තීරණ සඳහා සහාය වීම සඳහා අපි නිරවද්‍යතාවය සහ වේගවත් හැරවුම් කාලයන්ට ප්‍රමුඛත්වය දෙමු.",
      },
      {
        title: "හෘද රෝග විනිශ්චය: ව්‍යායාම ECG (TMT)",
        description:
          "ශාරීරික ආතතිය අතරතුර හෘද ක්‍රියාකාරිත්වය ඇගයීම සඳහා භාවිතා කරන විශේෂිත ආක්‍රමණශීලී නොවන පරීක්ෂණයකි. අපගේ ව්‍යායාම ECG (ට්‍රෙඩ්මිල් පරීක්ෂණය) අපගේ පළපුරුදු හෘද රෝග විශේෂඥයින්ගේ අධීක්ෂණය යටතේ කිරීටක ධමනි රෝග හඳුනා ගැනීමට, යෝග්‍යතා මට්ටම් තක්සේරු කිරීමට සහ ප්‍රතිකාර සැලසුම් මඟ පෙන්වීමට උපකාරී වේ.",
      },
      {
        title: "ඩිජිටල් එක්ස් කිරණ සහ රූපකරණ සේවා",
        description:
          "පැහැදිලි අස්ථි සහ පපුවේ රූපකරණය සඳහා අපි කාර්යක්ෂම සහ උසස් තත්ත්වයේ ඩිජිටල් එක්ස් කිරණ සේවා පිරිනමන්නෙමු. අපගේ දක්ෂ කාර්මික ශිල්පීන් සහ උපදේශකයින් අස්ථි බිඳීම්, ආසාදන සහ අනෙකුත් තත්වයන් සඳහා නිවැරදි රෝග විනිශ්චය සහතික කරන අතර, කඩිනම් ප්‍රතිකාර සඳහා ඉක්මන් ප්‍රතිඵල ලබා දෙයි.",
      },
      {
        title: "ඉහළ ආමාශ ආන්ත්‍රික එන්ඩොස්කොපි",
        description:
          "ඉහළ ආහාර ජීර්ණ පත්රිකාව (esophagus, ආමාශය සහ duodenum) පරීක්ෂා කිරීම සඳහා විශේෂඥයින් විසින් සිදු කරනු ලබන අවම ආක්‍රමණශීලී ක්‍රියා පටිපාටියකි. වණ, දැවිල්ල සහ අනෙකුත් ආශ්‍රිත තත්වයන් නිවැරදිව හඳුනා ගැනීම සහ ප්‍රතිකාර කිරීම සඳහා භාවිතා වේ.",
      },
      {
        title: "රූපලාවන්‍ය සහ වෛද්‍ය සුවතා සායනය",
        description:
          "අපගේ විශේෂිත සායනය සමඟ වෛද්‍ය ප්‍රතිකාරවලින් ඔබ්බට යන්න. අපි සෞන්දර්යාත්මක වැඩිදියුණු කිරීම, සමේ සෞඛ්‍යය සහ සමස්ත යහපැවැත්ම කෙරෙහි අවධානය යොමු කරන සේවාවන් රාශියක් පිරිනමන්නෙමු. වෘත්තීය පසුබිමක ඔබේ පුද්ගලික සෞඛ්‍ය සහ සුවතා ඉලක්ක සපුරා ගැනීම සඳහා අපගේ විශේෂඥයින් සමඟ සාකච්ඡා කරන්න.",
      },
    ],
  },
};

const Services = () => {
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  const icons = [
    Stethoscope,
    Heart,
    Activity,
    Microscope,
    Pill,
    AlertCircle,
    Microscope,
    Heart,
    Activity,
    Microscope,
    Heart,
  ];

  return (
    <>
      <SEO title={t.pageTitle} description={t.pageSubtitle} />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* HEADER IMAGE */}
          <section className="relative h-80 overflow-hidden mt-4">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1920&h=400&fit=crop"
              alt="Hospital Services"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {t.pageTitle}
                </h1>
                <p className="text-xl text-white/90">{t.pageSubtitle}</p>
              </div>
            </div>
          </section>

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

          {/* SERVICES LIST */}
          <article className="py-16">
            <div className="container mx-auto px-4 space-y-12">
              {t.services.map((service, index) => {
                const Icon = icons[index % icons.length];
                return (
                  <Card
                    key={index}
                    className="overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div
                      className={`grid md:grid-cols-2 gap-6 ${
                        index % 2 === 1 ? "md:grid-flow-dense" : ""
                      }`}
                    >
                      <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                        <img
                          src={
                            [
                              opdD,
                              consultant,
                              sergury,
                              lab,
                              pharmacy,
                              emergency,
                              labservice,
                              tmt,
                              "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
                              "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop",
                              cosmatic,
                            ][index % 11]
                          }
                          alt={service.title}
                          className="w-full h-80 object-cover"
                          loading="lazy"
                        />
                      </div>
                      <CardContent className="flex flex-col justify-center p-8">
                        <div className="inline-flex p-4 rounded-full bg-primary/10 w-fit mb-4">
                          <Icon className="h-10 w-10 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </div>
                  </Card>
                );
              })}
            </div>
          </article>

          {/* CONTACT BUTTON */}
          <section className="py-16 bg-primary text-primary-foreground text-center">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t.contactTitle}
              </h2>
              <p className="text-xl mb-8 opacity-90">{t.contactSubtitle}</p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                {t.contactButton}
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Services;
