import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Careers = () => {
  const jobs = [
    {
      id: "opd-doctor",
      title: "OPD Doctor",
      location: "Tissamaharama",
      type: "Full-time",
      description:
        "We are looking for a compassionate and experienced OPD Doctor to join our outpatient team. The ideal candidate will provide high-quality primary care consultations, manage a wide range of acute and chronic conditions, and collaborate with specialists when necessary.",
      responsibilities: [
        "Provide outpatient consultations and follow-ups",
        "Diagnose and manage common acute and chronic conditions",
        "Refer to specialists and order appropriate investigations",
        "Maintain accurate medical records and ensure continuity of care",
      ],
      qualifications: [
        "MBBS or equivalent medical degree",
        "Valid medical registration",
        "Minimum 2 years clinical experience in outpatient care",
      ],
      applyLink: "/contact",
    },
  ];

  return (
    <>
      <SEO
        title="Careers at Horizon Hospital - Join our team"
        description="View current job openings at Horizon Hospital. We're hiring compassionate medical professionals including OPD Doctors."
        keywords="Careers, Jobs, OPD Doctor, Horizon Hospital, Tissamaharama"
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section className="relative h-56 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1580281657521-41c86a8d4d6a?w=1920&h=400&fit=crop"
              alt="Careers - Join our team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60 flex items-center">
              <div className="container mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Careers</h1>
                <p className="text-lg text-white/90">Explore current openings and join our dedicated team of healthcare professionals.</p>
              </div>
            </div>
          </section>

          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid gap-6">
                {jobs.map((job) => (
                  <Card key={job.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="grid md:grid-cols-3 gap-6 items-center">
                      <div className="md:col-span-2">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="inline-flex p-3 rounded-full bg-primary/10">
                              <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-bold text-foreground">{job.title}</h2>
                              <p className="text-sm text-muted-foreground">{job.location} • {job.type}</p>
                            </div>
                          </div>

                          <p className="text-base text-muted-foreground mb-4">{job.description}</p>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h3 className="font-semibold mb-2">Responsibilities</h3>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                {job.responsibilities.map((r, i) => (
                                  <li key={i}>{r}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">Qualifications</h3>
                              <ul className="list-disc pl-5 text-muted-foreground">
                                {job.qualifications.map((q, i) => (
                                  <li key={i}>{q}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </div>
                      <div className="flex flex-col items-start justify-center p-6 md:items-end">
                        <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" /> <span>Posted recently</span>
                        </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="default">Apply Now</Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Apply for {job.title}</DialogTitle>
                                <DialogDescription>Please fill the form below. After submitting we'll open WhatsApp with a prefilled message — you'll need to attach your CV manually when WhatsApp opens.</DialogDescription>
                              </DialogHeader>

                              <ApplicationForm jobTitle={job.title} />

                              <DialogFooter className="mt-4">
                                <Button variant="ghost" onClick={() => { /* dialog close handled by Radix close button in dialog component */ }}>Close</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

const WHATSAPP_NUMBER = "+94707799444";

function ApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files && e.target.files[0];
    setFileName(f ? f.name : null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // WhatsApp wa.me requires phone number without symbols
    const cleaned = WHATSAPP_NUMBER.replace(/\D/g, "");

    const lines = [
      `Application for ${jobTitle}`,
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Mobile: ${phone || "-"}`,
      `Message: ${message || "-"}`,
    ];

    if (fileName) {
      lines.push(`Selected CV: ${fileName} (please attach this file manually in WhatsApp)`);
    } else {
      lines.push("CV: (please attach your CV when WhatsApp opens)");
    }

    const text = lines.join("\n");
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp in a new tab/window
    window.open(url, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Full name</label>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" required />
        </div>
        <div>
          <label className="block text-sm font-medium text-muted-foreground mb-1">Mobile</label>
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="e.g. +94xxxxxxxxx" required />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Email</label>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Message / Cover note</label>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="A short intro or cover note (optional)" rows={4} />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted-foreground mb-1">Attach CV (you will still need to attach it manually in WhatsApp)</label>
        <Input type="file" accept=".pdf,.doc,.docx" onChange={handleFile} />
        {fileName && <p className="text-sm text-muted-foreground mt-2">Selected file: {fileName}</p>}
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button type="submit">Send via WhatsApp</Button>
      </div>
    </form>
  );
}

export default Careers;
