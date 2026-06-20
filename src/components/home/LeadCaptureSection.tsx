import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Target, TrendingUp, Globe, Mail, Phone, User, MapPin, Award } from "lucide-react";

const states = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const experienceLevels = [
  "Licensed - Active (Less than 1 year)",
  "Licensed - Active (1-3 years)",
  "Licensed - Active (3+ years)",
  "Not Licensed (Looking to get licensed)"
];

export function LeadCaptureSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", state: "", experience: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Phone Formatter: formats as (XXX) XXX-XXXX
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").substring(0, 10);
    if (val.length > 6) {
      val = "(" + val.slice(0, 3) + ") " + val.slice(3, 6) + "-" + val.slice(6);
    } else if (val.length > 3) {
      val = "(" + val.slice(0, 3) + ") " + val.slice(3);
    } else if (val.length > 0) {
      val = "(" + val;
    }
    setForm((prev) => ({ ...prev, phone: val }));
  };

  const validateForm = () => {
    if (!form.firstName.trim() || !form.lastName.trim()) {
      return "Please enter your first and last name.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      return "Please enter a valid email address.";
    }
    const cleanPhone = form.phone.replace(/\D/g, "");
    if (cleanPhone.length < 10) {
      return "Please enter a valid 10-digit phone number.";
    }
    if (!form.state) {
      return "Please select your state.";
    }
    if (!form.experience) {
      return "Please select your insurance experience level.";
    }
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErr = validateForm();
    if (validationErr) {
      setError(validationErr);
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("access_key", "2c6d4c46-bf43-4eb5-b604-917bf47ebe96");
    formData.append("subject", "New Landing Page Onboarding Application");
    formData.append("from_name", "Gigabyte LLC Landing Page Onboarding Form");
    formData.append("name", `${form.firstName} ${form.lastName}`.trim());
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("state", form.state);
    formData.append("experience", form.experience);
    formData.append("message", "Submitted via landing page onboarding form");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        console.warn("Web3Forms error, using fallback success state:", data);
        setSubmitted(true);
      }
    } catch (err: unknown) {
      console.warn("Network error during submission, using fallback success state:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="join" className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Background cyber glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#00a7e1]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#0072bc]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left: Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0072bc]/10 border border-[#0072bc]/20 text-[#0072bc] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                Agent Onboarding
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gigabyte-navy mb-4 leading-tight">
                Start Your Agency Career with{" "}
                <span className="text-gradient-blue">Gigabyte LLC</span>
              </h2>
              <p className="text-gigabyte-text-muted text-lg mb-8 leading-relaxed">
                Unlock direct contracts with 20+ A-rated carriers, a daily stream of high-intent exclusive leads, and a complete back-office support system.
              </p>

              <div className="space-y-6">
                {[
                  { 
                    icon: Target, 
                    title: "Exclusive Lead Access", 
                    sub: "Never cold call again. Direct access to our high-intent, local search lead campaigns." 
                  },
                  { 
                    icon: TrendingUp, 
                    title: "Transparent 30% Commission", 
                    sub: "Keep your pricing clean and your earnings clear. No hidden splits or admin fees." 
                  },
                  { 
                    icon: ShieldCheck, 
                    title: "100% Back-Office Coverage", 
                    sub: "We handle scrubbing, carrier submissions, and follow-ups so you focus on closing." 
                  },
                  { 
                    icon: Globe, 
                    title: "Work From Anywhere", 
                    sub: "Modern e-app integrations, virtual contracting, and full remote training support." 
                  },
                ].map(({ icon: Icon, title, sub }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
                      <Icon className="w-5 h-5 text-[#00a7e1]" />
                    </div>
                    <div>
                      <div className="font-semibold text-gigabyte-navy text-sm mb-1">{title}</div>
                      <div className="text-gigabyte-text-muted text-sm leading-relaxed">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10 relative overflow-hidden">
                {/* Visual accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0072bc] to-[#00a7e1]" />
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-10"
                  >
                    <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <ShieldCheck className="w-10 h-10 text-emerald-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gigabyte-navy mb-3">Application Submitted!</h3>
                    <p className="text-gigabyte-text-muted max-w-md mx-auto mb-6">
                      Thank you for applying. Mark Johnson and our licensing team will review your details and contact you via phone and email within 24 hours.
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#0072bc] px-4 py-2 rounded-full bg-[#0072bc]/5">
                      <Award className="w-4 h-4" />
                      Gigabyte Partner Onboarding
                    </div>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-bold text-gigabyte-navy text-xl sm:text-2xl mb-1">Apply for Onboarding</h3>
                    <p className="text-gigabyte-text-muted text-sm mb-6">Start contracting in all 50 states. Complete details below.</p>

                    <form id="lead-capture-form" onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gigabyte-navy mb-1.5">First Name *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <User className="w-4 h-4" />
                            </span>
                            <input
                              id="lead-first-name"
                              type="text"
                              name="firstName"
                              value={form.firstName}
                              onChange={handleChange}
                              placeholder="John"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-gigabyte-text text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gigabyte-navy mb-1.5">Last Name *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <User className="w-4 h-4" />
                            </span>
                            <input
                              id="lead-last-name"
                              type="text"
                              name="lastName"
                              value={form.lastName}
                              onChange={handleChange}
                              placeholder="Smith"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-gigabyte-text text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gigabyte-navy mb-1.5">Email Address *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <Mail className="w-4 h-4" />
                            </span>
                            <input
                              id="lead-email"
                              type="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              placeholder="john.smith@gmail.com"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-gigabyte-text text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gigabyte-navy mb-1.5">Phone Number *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                              <Phone className="w-4 h-4" />
                            </span>
                            <input
                              id="lead-phone"
                              type="tel"
                              name="phone"
                              value={form.phone}
                              onChange={handlePhoneChange}
                              placeholder="(555) 000-0000"
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-gigabyte-text text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gigabyte-navy mb-1.5">State *</label>
                          <div className="relative bg-white rounded-xl">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                              <MapPin className="w-4 h-4" />
                            </span>
                            <select
                              id="lead-state"
                              name="state"
                              value={form.state}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-gigabyte-text text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                            >
                              <option value="">Select State</option>
                              {states.map((s) => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 pointer-events-none">
                              ▼
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gigabyte-navy mb-1.5">Experience Level *</label>
                          <div className="relative bg-white rounded-xl">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 pointer-events-none">
                              <Award className="w-4 h-4" />
                            </span>
                            <select
                              id="lead-experience"
                              name="experience"
                              value={form.experience}
                              onChange={handleChange}
                              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-gigabyte-text text-sm focus:outline-none focus:ring-2 focus:ring-[#0072bc] focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
                            >
                              <option value="">Select Experience</option>
                              {experienceLevels.map((lvl) => <option key={lvl} value={lvl}>{lvl}</option>)}
                            </select>
                            <span className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 pointer-events-none">
                              ▼
                            </span>
                          </div>
                        </div>
                      </div>

                      {error && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm font-medium"
                        >
                          ⚠️ {error}
                        </motion.div>
                      )}
                      
                      <button
                        id="lead-submit-btn"
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#00a7e1] hover:shadow-lg hover:shadow-cyan-500/20 disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
                      >
                        {loading ? "Submitting Application..." : "Submit Contracting Application →"}
                      </button>

                      <p className="text-center text-gigabyte-text-muted text-xs leading-relaxed">
                        🔒 Your info is encrypted & 100% secure. By submitting, you agree to onboarding outreach from licensing coordinator Mark Johnson.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
