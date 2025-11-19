import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import SpecialtyFilter from "@/components/ui/specialty-filter";

const Consultants = () => {
  const { t, i18n } = useTranslation();
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    tel: "",
    area: "",
    gender: "",
  });

  const consultants = useMemo(
    () => [
      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය නිමල් පෙරේරා මහතා"
            : "Dr. Nimal Perera",
        specialization:
          i18n.language === "si" ? "හෘද රෝග විශේෂඥ" : "Cardiologist",
        image: "/img/male_doctor.webp", //male_doctor-removebg.webp
        description:
          i18n.language === "si"
            ? "හෘද රෝග සහ හෘද සෞඛ්‍යය විශේෂඥ"
            : "Specialist in cardiovascular diseases and heart health",
      },
      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය සුනිල් සිල්වා මහතා"
            : "Dr. Sunil Silva",
        specialization: i18n.language === "si" ? "ශල්‍ය වෛද්‍ය" : "Surgeon",
        image: "/img/male_doctor.webp", //male_doctor-removebg.webp
        description:
          i18n.language === "si"
            ? "අත්‍යවශ්‍ය ශල්‍ය ප්‍රතිකාර විශේෂඥ"
            : "Experienced in complex surgical procedures",
      },
      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය උපුල් වීරසිංහ මහතා "
            : "Dr. Upul Weerasinghe.",
        specialization:
          i18n.language === "si"
            ? "විකිරණවේදී විශේෂඥ"
            : "Consultant Radiologist",
        image: "/img/male_doctor.webp", //male_doctor-removebg.webp
        description:
          i18n.language === "si"
            ? "විකිරණවේදී විශේෂඥ වෛද්‍ය"
            : "Experienced in Consultant Radiologist",
      },
      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය රංග ඒ හේන්දෙනිය මහතා"
            : "Dr. Ranga A Heendeniya",
        specialization:
          i18n.language === "si" ? "ශල්‍ය විශේෂඥ" : "Consultant Surgeon",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "අයුරු ශල්‍ය විශේෂඥකමෙන් පළපුරුදු"
            : "Experienced Consultant Surgeon",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය ඉනෝකා මුණසිංහ මහත්මිය"
            : "Dr. (Mrs) Inoka Munasinghe",
        specialization:
          i18n.language === "si"
            ? "ලිංගාශ්‍රිත රෝග විශේෂඥ"
            : "Consultant Venereologist",
        image: "/img/female_doctor.webp",
        description:
          i18n.language === "si"
            ? "ලිංගාශ්‍රිත රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Venereologist",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය වසන්ත ඒ අබේවික්‍රම මහතා"
            : "Dr. Wasantha A Abewickrama",
        specialization:
          i18n.language === "si" ? "හෘද රෝග විශේෂඥ" : "Consultant Cardiologist",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "හෘද රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Cardiologist",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය කාවින්ද නානායක්කාර මහතා"
            : "Dr. Kavinda Nanayakkara",
        specialization:
          i18n.language === "si"
            ? "චර්ම රෝග විශේෂඥ"
            : "Consultant Dermatologist",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "චර්ම රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Dermatologist",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය තිමාලි කිරිඇල්ල මහත්මිය"
            : "Dr. (Mrs) Thimali Kiriella",
        specialization:
          i18n.language === "si"
            ? "උගුර, කන හා නාසය සම්බන්ද ශල්‍ය විශේෂඥ"
            : "Consultant ENT Surgeon",
        image: "/img/female_doctor.webp",
        description:
          i18n.language === "si"
            ? "ENT ශල්‍ය විශේෂඥ වෛද්‍ය"
            : "Experienced ENT Surgeon",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය කේ.කේ.ජී නිරංග මහතා"
            : "Dr. K.K.G. Niranga",
        specialization:
          i18n.language === "si"
            ? "ප්‍රසව හා නාරි විශේෂඥ (VOG)"
            : "Consultant Gynecologist & Obstetrician (VOG)",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "නාරි හා ප්‍රසව විශේෂඥ වෛද්‍ය"
            : "Experienced Gynecologist & Obstetrician",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය උදාර අබේවර්ම මහතා"
            : "Dr. Udara Abewarma",
        specialization:
          i18n.language === "si"
            ? "පෝෂණවේදි විශේෂඥ"
            : "Consultant Nutrition Physician",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "පෝෂණ විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant in Nutrition",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය අයස්මන්ත පීරිස් මහතා"
            : "Dr. Ayasmantha Peiris",
        specialization:
          i18n.language === "si"
            ? "අක්ෂි ශල්‍ය විශේෂඥ"
            : "Consultant Ophthalmologist Surgeon",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "අක්ෂි ශල්‍ය විශේෂඥ වෛද්‍ය"
            : "Experienced Ophthalmologist Surgeon",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය දිනේෂා මගගේ මහත්මිය"
            : "Dr. (Mrs) Dinesha Magage",
        specialization:
          i18n.language === "si" ? "ළමා රෝග විශේෂඥ" : "Consultant Pediatrician",
        image: "/img/female_doctor.webp",
        description:
          i18n.language === "si"
            ? "ළමා රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Pediatrician",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍යා ජනනි කඩවතආරච්චි මහත්මිය"
            : "Dr. (Mrs) Janani Kadawatharchchi",
        specialization:
          i18n.language === "si"
            ? "සර්වාංග රෝග විශේෂඥ (VP)"
            : "Consultant Physician (VP)",
        image: "/img/female_doctor.webp",
        description:
          i18n.language === "si"
            ? "සර්වාංග රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Physician",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය දිළුම් සෙනෙවිරත්න මහතා"
            : "Dr. Dilum Senevirathne",
        specialization:
          i18n.language === "si"
            ? "සර්වාංග රෝග විශේෂඥ (VP)"
            : "Consultant Physician (VP)",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "සර්වාංග රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Physician",
      },

      {
        name:
          i18n.language === "si"
            ? "වෛද්‍ය ඉසිල සම්පත් මහතා"
            : "Dr. Isira Sampath",
        specialization:
          i18n.language === "si" ? "මනෝ විශේෂඥ" : "Consultant Psychiatrist",
        image: "/img/male_doctor.webp",
        description:
          i18n.language === "si"
            ? "මනෝ රෝග විශේෂඥ වෛද්‍ය"
            : "Experienced Consultant Psychiatrist",
      },
      // ...add more consultants as needed
    ],
    [i18n.language]
  );

  // Handle form submit (add your logic here)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prefill a WhatsApp message with booking details and open WhatsApp
    const whatsappNumber = "+94707799444"; // clinic number
    const cleaned = whatsappNumber.replace(/\D/g, "");
    const lines = [
      `Booking request for ${selectedDoctor?.name || "-"}`,
      `Patient Name: ${formData.patientName || "-"}`,
      `Age: ${formData.age || "-"}`,
      `Tel No: ${formData.tel || "-"}`,
      `Area: ${formData.area || "-"}`,
      `Gender: ${formData.gender || "-"}`,
    ];
    const text = lines.join("\n");
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // reset & close
    setShowForm(false);
    setFormData({ patientName: "", age: "", tel: "", area: "", gender: "" });
  };

  return (
    <>
      <SEO
        title="Our Medical Consultants - Expert Doctors at Horizon Hospital"
        description="Meet our team of experienced medical specialists including cardiologists, pediatricians, surgeons, and more. Book your consultation with Horizon Hospital's expert doctors."
        keywords="doctors Sri Lanka, medical consultants, cardiologist, pediatrician, surgeon, specialist doctors, Horizon Hospital doctors"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="relative h-80 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&h=400&fit=crop"
              alt="Medical consultants and doctors at Horizon Hospital"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {i18n.language === "si" ? "උපදේශකවරු" : "Our Consultants"}
                </h1>
                <p className="text-xl text-white/90">
                  {i18n.language === "si"
                    ? "අපගේ පළපුරුදු වෛද්‍ය කණ්ඩායම හමුවන්න"
                    : "Meet our team of experienced medical professionals"}
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex justify-end mb-6 items-center">
                <label htmlFor="lang" className="mr-2 font-medium">
                  {i18n.language === "si" ? "භාෂාව තෝරන්න :" : "Select Language :"}
                </label>
                <select
                  id="lang"
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="si">සිංහල</option>
                  <option value="en">English</option>
                </select>
              </div>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-foreground">
                  {i18n.language === "si"
                    ? "ප්‍රවීණ වෛද්‍ය සේවා"
                    : "Expert Medical Care"}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {i18n.language === "si"
                    ? "අපගේ ඉතා සුදුසුකම් ලත් උපදේශක කණ්ඩායම විවිධ වෛද්‍ය විශේෂතා වල වසර ගණනාවක පළපුරුද්ද සහ විශේෂඥතාව ලබා දේ. සෑම වෛද්‍යවරයෙකුම රෝගීන් සඳහා පුද්ගලික සත්කාරය සහ හොඳම ප්‍රතිකාර ප්‍රතිඵල ලබා දීමට කැපවී සිටී."
                    : "Our team of highly qualified consultants brings years of experience and expertise across various medical specializations. Each doctor is committed to providing personalized care and the best treatment outcomes for our patients."}
                </p>
              </div>
              <SpecialtyFilter
                specialties={[
                  ...new Set(consultants.map((c) => c.specialization)),
                ]}
                selectedSpecialty={selectedSpecialty}
                onChange={setSelectedSpecialty}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AnimatePresence mode="wait">
                  {consultants
                    .filter(
                      (consultant) =>
                        selectedSpecialty === "all" ||
                        consultant.specialization.toLowerCase() ===
                          selectedSpecialty
                    )
                    .map((consultant, index) => (
                      <motion.div
                        key={consultant.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        layout
                      >
                        <Card className="overflow-hidden hover:shadow-xl transition-shadow group">
                          <motion.img
                            src={consultant.image}
                            alt={`${consultant.name} - ${consultant.specialization} at Horizon Hospital`}
                            className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            layoutId={`image-${consultant.name}`}
                          />
                          <CardContent className="p-6 text-center">
                            <h3 className="text-xl font-bold mb-2 text-foreground">
                              {consultant.name}
                            </h3>
                            <p className="text-primary font-semibold mb-3">
                              {consultant.specialization}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {consultant.description}
                            </p>
                            <button
                              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 font-semibold"
                              onClick={() => {
                                setSelectedDoctor(consultant);
                                setShowForm(true);
                              }}
                            >
                              {i18n.language === "si"
                                ? "වෙන්කරන්න"
                                : "Book Now"}
                            </button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
              {/* Booking Form Modal */}
              {showForm && selectedDoctor && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowForm(false)}
                    >
                      ×
                    </button>
                    <h3 className="text-xl font-bold mb-4 text-foreground">
                      {i18n.language === "si"
                        ? "වෙන්කරවීමේ පෝරමය"
                        : "Booking Form"}
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="block mb-1 font-medium">
                          {i18n.language === "si" ? "වෛද්‍ය" : "Doctor"}
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded px-3 py-2 bg-gray-100"
                          value={selectedDoctor?.name || ""}
                          readOnly
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 font-medium">
                          {i18n.language === "si" ? "නම" : "Patient Name"}
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded px-3 py-2"
                          required
                          value={formData.patientName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              patientName: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 font-medium">
                          {i18n.language === "si" ? "වයස" : "Age"}
                        </label>
                        <input
                          type="number"
                          className="w-full border rounded px-3 py-2"
                          required
                          value={formData.age}
                          onChange={(e) =>
                            setFormData({ ...formData, age: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 font-medium">
                          {i18n.language === "si" ? "ප්‍රදේශය" : "Area"}
                        </label>
                        <input
                          type="text"
                          className="w-full border rounded px-3 py-2"
                          value={formData.area}
                          onChange={(e) =>
                            setFormData({ ...formData, area: e.target.value })
                          }
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 font-medium">
                          {i18n.language === "si" ? "ස්ත්‍රී/පුරුෂ" : "Gender"}
                        </label>
                        <select
                          className="w-full border rounded px-3 py-2"
                          value={formData.gender}
                          onChange={(e) =>
                            setFormData({ ...formData, gender: e.target.value })
                          }
                        >
                          <option value="">Prefer not to say</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label className="block mb-1 font-medium">
                          {i18n.language === "si" ? "දුරකථන අංකය" : "Tel No"}
                        </label>
                        <input
                          type="tel"
                          className="w-full border rounded px-3 py-2"
                          required
                          value={formData.tel}
                          onChange={(e) =>
                            setFormData({ ...formData, tel: e.target.value })
                          }
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-primary text-primary-foreground rounded font-semibold hover:bg-primary/90"
                      >
                        {i18n.language === "si"
                          ? "වට්ස්ඇප් හරහා යවන්න"
                          : "Book Now & Send via WhatsApp"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </section>
          <section className="py-16 bg-accent">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {i18n.language === "si"
                  ? "උපදේශනයක් වෙන්කරවා ගන්න"
                  : "Book a Consultation"}
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {i18n.language === "si"
                  ? "පුද්ගලික වෛද්‍ය සේවාවක් සඳහා අපගේ විශේෂඥ වෛද්‍යවරුන්ගෙන් එක් අයෙකු සමඟ හමුවීම සඳහා වෙන්කරවා ගන්න"
                  : "Schedule an appointment with one of our specialist doctors for personalized medical care"}
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {i18n.language === "si" ? "අපව අමතන්න" : "Contact Us Today"}
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Consultants;
