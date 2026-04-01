import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Facebook,
  FileText,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";

type Page = "home" | "result";

function Header({ onLogoClick }: { onLogoClick?: () => void }) {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            type="button"
            onClick={onLogoClick}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            data-ocid="nav.link"
          >
            <div className="w-10 h-10 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/40 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-lg tracking-wide">
                SIBM HYDERABAD
              </div>
              <div className="text-xs opacity-80 tracking-widest">
                SYMBIOSIS INSTITUTE OF BUSINESS MANAGEMENT
              </div>
            </div>
          </button>

          {/* Nav Links */}
          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium"
            aria-label="Main navigation"
          >
            {[
              "About",
              "Programmes",
              "Admissions",
              "Campus Life",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className="hover:opacity-80 transition-opacity"
                data-ocid="nav.link"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <Button
            variant="outline"
            className="hidden md:flex border-primary-foreground text-primary bg-primary-foreground hover:bg-primary-foreground/90 font-semibold text-sm"
            data-ocid="nav.primary_button"
          >
            APPLY NOW
          </Button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const quickLinks = [
    "About Us",
    "MBA Programme",
    "Faculty",
    "Research",
    "Alumni",
  ];
  const admissionLinks = [
    "How to Apply",
    "Eligibility",
    "Fee Structure",
    "Scholarships",
    "Check Result",
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-6 h-6 text-red-400" />
              <span className="font-display font-bold text-white text-lg">
                SIBM HYDERABAD
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Symbiosis Institute of Business Management, Hyderabad — nurturing
              future business leaders since 2010.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-red-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Admissions
            </h4>
            <ul className="space-y-2 text-sm">
              {admissionLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    className="hover:text-red-400 transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-red-400 shrink-0" />
                <span>Survey No. 292/293, Narsingi, Hyderabad – 500075</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span>+91-40-6730-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <span>admissions@sibmhyd.edu.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              className="text-red-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </span>
          <span>SIBM Hyderabad — Admissions 2026-28</span>
        </div>
      </div>
    </footer>
  );
}

function HomePage({ onSubmit }: { onSubmit: (appNo: string) => void }) {
  const [appNo, setAppNo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (appNo.trim()) onSubmit(appNo.trim());
  };

  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-end pb-12"
        style={{
          background:
            "linear-gradient(135deg, #1a0404 0%, #5a0e0e 50%, #8b1a1a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`,
          }}
        />
        <div className="absolute top-8 right-16 w-72 h-72 rounded-full opacity-5 bg-white" />
        <div className="absolute top-16 right-24 w-48 h-48 rounded-full opacity-5 bg-white" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <p className="text-red-300 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            Admissions 2026–28
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Check Your
            <br />
            Application Results
          </h1>
          <p className="text-red-100/70 mt-4 text-lg max-w-xl">
            MBA Programme · SIBM Hyderabad · Batch 2026–28
          </p>
          <div className="mt-6 w-24 h-1 bg-red-400 rounded-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-700 via-red-400 to-red-700" />
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Enter Application Details to Check Result
            </h2>
            <p className="text-muted-foreground text-sm">
              Please enter your application number exactly as provided during
              registration.
            </p>
            <div className="mt-3 w-12 h-0.5 bg-primary mx-auto rounded-full" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white border border-border rounded-xl shadow-letter p-8"
          >
            <div className="mb-6">
              <Label
                htmlFor="appNo"
                className="text-sm font-semibold text-foreground mb-2 block"
              >
                Application Number <span className="text-primary">*</span>
              </Label>
              <Input
                id="appNo"
                data-ocid="admission.input"
                type="text"
                placeholder="e.g. SIBMHYD-2026-XXXXXX"
                value={appNo}
                onChange={(e) => setAppNo(e.target.value)}
                className="h-12 text-base border-border focus:ring-primary"
                required
                autoComplete="off"
              />
            </div>
            <Button
              type="submit"
              data-ocid="admission.submit_button"
              className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base tracking-wider"
            >
              CHECK RESULT
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Results for MBA Admissions 2026–28 are now available online.
            </p>
          </form>
        </div>
      </section>

      {/* How to Check */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              How to Check Your Results
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: ClipboardList,
                step: "01",
                title: "Enter Application No.",
                desc: "Input your unique application number assigned at the time of registration for MBA 2026–28.",
              },
              {
                icon: CheckCircle2,
                step: "02",
                title: "Verify Your Details",
                desc: "Confirm your personal details match the information submitted in the application form.",
              },
              {
                icon: FileText,
                step: "03",
                title: "View Result",
                desc: "Your application result will be displayed on screen. Download or print for your records.",
              },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="bg-white rounded-xl p-8 border border-border shadow-xs flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-bold tracking-widest text-primary mb-1">
                  STEP {step}
                </span>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admissions Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Admissions Timeline 2026–28
            </h2>
            <div className="w-12 h-0.5 bg-primary mx-auto rounded-full mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                month: "Nov 2025",
                event: "Applications Open",
                desc: "Online applications for MBA 2026–28 batch open. Complete all sections of the form.",
              },
              {
                month: "Feb 2026",
                event: "Entrance & Interview",
                desc: "SNAP score verification, Group Discussion, and Personal Interview rounds conducted.",
              },
              {
                month: "Apr 2026",
                event: "Results Declared",
                desc: "Final merit list and admission offers communicated to all applicants.",
              },
            ].map(({ month, event, desc }) => (
              <div key={month} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary mt-1.5 shrink-0" />
                  <div className="w-0.5 bg-border flex-1 mt-1" />
                </div>
                <div className="pb-8">
                  <span className="text-xs font-bold tracking-widest text-primary uppercase">
                    {month}
                  </span>
                  <h3 className="font-semibold text-foreground mt-1 mb-1">
                    {event}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function RejectionLetterPage({
  appNo,
  onBack,
}: { appNo: string; onBack: () => void }) {
  return (
    <section className="py-12 bg-secondary min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={onBack}
            data-ocid="result.link"
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            ← Home
          </button>
          <ChevronRight className="w-3 h-3" />
          <span>Application Result</span>
        </div>

        {/* The Letter */}
        <article
          data-ocid="result.card"
          className="bg-white rounded-lg shadow-letter p-10 sm:p-14 animate-fade-in"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          {/* Letterhead */}
          <div className="text-center border-b-2 border-primary pb-6 mb-8">
            <div
              className="text-primary text-2xl font-bold tracking-widest mb-1"
              style={{ fontFamily: "'Times New Roman', Times, serif" }}
            >
              SIBM HYDERABAD
            </div>
            <div className="text-gray-700 text-sm tracking-wide">
              Symbiosis Institute of Business Management
            </div>
            <div className="text-gray-500 text-xs mt-0.5 tracking-widest uppercase">
              Hyderabad Campus
            </div>
            <div className="text-gray-500 text-xs mt-1">
              Survey No. 292/293, Narsingi, Hyderabad – 500075
            </div>
            <div className="text-gray-500 text-xs">
              Tel: +91-40-6730-0000 | admissions@sibmhyd.edu.in
            </div>
          </div>

          {/* Meta */}
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <div>
              <span className="font-semibold">Application No.: </span>
              <span>{appNo}</span>
            </div>
            <div>April 1, 2026</div>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <p className="font-bold text-gray-800 underline text-sm">
              RE: MBA Admissions 2026–28 – Application Result
            </p>
          </div>

          {/* Salutation */}
          <p className="mb-5 text-gray-800">
            Dear <strong>ANSH ARYA</strong>,
          </p>

          {/* Body */}
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              We thank you for your interest in the MBA Programme (Batch
              2026–28) at the Symbiosis Institute of Business Management,
              Hyderabad and for taking the time to go through our rigorous
              selection process.
            </p>
            <p>
              After a comprehensive evaluation of your academic credentials,
              SNAP scores, performance in the Group Discussion, and the Personal
              Interview, we regret to inform you that{" "}
              <strong>you have not been selected</strong> for admission to the
              MBA Programme 2026–28 at SIBM Hyderabad.
            </p>
            <p>
              The selection process this year was highly competitive, with a
              large number of qualified applicants vying for a limited number of
              seats. This decision is not a reflection of your potential;
              rather, it reflects the extremely competitive nature of our
              admissions.
            </p>
            <p>
              We sincerely appreciate the effort and dedication you demonstrated
              throughout the admissions process and encourage you to explore
              other opportunities to pursue your academic and professional
              goals.
            </p>
            <p>We wish you every success in your future endeavours.</p>
          </div>

          {/* Sign-off */}
          <div className="mt-10 text-gray-800 text-sm">
            <p>Yours sincerely,</p>
            <div className="mt-8 border-t border-gray-300 pt-4 w-40">
              <p className="font-bold">Admissions Committee</p>
              <p className="text-gray-600">SIBM Hyderabad</p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-xs text-gray-400 border-t border-gray-200 pt-4">
            This is an official communication from SIBM Hyderabad. For queries,
            contact admissions@sibmhyd.edu.in.
          </p>
        </article>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Button
            type="button"
            onClick={onBack}
            data-ocid="result.secondary_button"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            ← BACK TO HOME
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [appNo, setAppNo] = useState("");

  const handleSubmit = (no: string) => {
    setAppNo(no);
    setPage("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogoClick={handleBack} />
      <main className="flex-1">
        {page === "home" ? (
          <HomePage onSubmit={handleSubmit} />
        ) : (
          <RejectionLetterPage appNo={appNo} onBack={handleBack} />
        )}
      </main>
      <Footer />
    </div>
  );
}
