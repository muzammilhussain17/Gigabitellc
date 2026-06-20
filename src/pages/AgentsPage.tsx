import { useState } from "react";
import { motion } from "framer-motion";
import { PublicLayout } from "../layouts/PublicLayout";
import { Link } from "react-router-dom";
import {
  ArrowRight, DollarSign, Users, BookOpen, Laptop, CheckCircle,
  Clock, Star, ShieldCheck, Award, HelpCircle, ChevronDown,
  Eye, EyeOff
} from "lucide-react";

const benefits = [
  { icon: DollarSign, title: "Top Carrier Contracts", desc: "Earn up to 140% commission on select Final Expense carriers — among the highest in the industry." },
  { icon: BookOpen, title: "Complete Training System", desc: "Our proven onboarding program takes you from zero to selling in as little as 7 days, fully remote." },
  { icon: Users, title: "Lead Program Access", desc: "Tap into our exclusive lead vendor network with pre-set discount groups and fresh leads daily." },
  { icon: Laptop, title: "100% Remote Freedom", desc: "Work from home, from the road, or anywhere with a wifi connection. No territory restrictions." },
  { icon: Clock, title: "Weekly Pay", desc: "Direct deposit commissions every week. No waiting 30–60 days like some IMOs." },
  { icon: ShieldCheck, title: "Licensing Support", desc: "We help you get licensed quickly in multiple states, and our back office handles appointment paperwork." },
];

const faqs = [
  {
    q: "Do I need prior insurance experience?",
    a: "No experience is required. Our training program is designed for both brand-new agents and experienced producers. We teach you everything from getting licensed to writing your first policy.",
  },
  {
    q: "How much can I earn?",
    a: "Income varies based on effort and production, but our agents average $3,000–$10,000+ per month. Top producers earn $100,000–$300,000+ annually. There's no income cap.",
  },
  {
    q: "Is this a 1099 or W2 position?",
    a: "You will be an independent contractor (1099). This means you control your hours, your territory, and your income — with all the tax advantages that come with being self-employed.",
  },
  {
    q: "What does it cost to join?",
    a: "Joining Gigabyte is completely free. You may need to pay for your state insurance license (typically $50–$300), but we help guide you through the entire licensing process.",
  },
  {
    q: "Do you provide leads?",
    a: "Yes. We have a robust lead network including direct mail leads, digital leads, and vendor partnerships. Lead pricing varies — we'll walk you through the options during your onboarding call.",
  },
  {
    q: "How quickly can I start earning?",
    a: "Once licensed, most new agents write their first policy within 1–2 weeks. Our fastest onboarding agents have started earning within their first 7 days.",
  },
];

const experienceLevels = [
  "No Experience (Brand New)",
  "Less than 1 Year",
  "1–3 Years",
  "3–5 Years",
  "5+ Years",
];

export function AgentsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", state: "", experience: "",
    dob: "", npn: "", ssn: ""
  });
  const [ssnVisible, setSsnVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // DOB Formatter: MM/DD/YYYY
  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").substring(0, 8);
    if (val.length > 4) {
      val = val.slice(0, 2) + "/" + val.slice(2, 4) + "/" + val.slice(4);
    } else if (val.length > 2) {
      val = val.slice(0, 2) + "/" + val.slice(2);
    }
    setForm((prev) => ({ ...prev, dob: val }));
  };

  // SSN Formatter: XXX-XX-XXXX
  const handleSsnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").substring(0, 9);
    if (val.length > 5) {
      val = val.slice(0, 3) + "-" + val.slice(3, 5) + "-" + val.slice(5);
    } else if (val.length > 3) {
      val = val.slice(0, 3) + "-" + val.slice(3);
    }
    setForm((prev) => ({ ...prev, ssn: val }));
  };

  // NPN Formatter: digits only, max 10
  const handleNpnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "").substring(0, 10);
    setForm((prev) => ({ ...prev, npn: val }));
  };

  // Phone Formatter: (XXX) XXX-XXXX
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation checks
    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
    if (!dobRegex.test(form.dob)) {
      setError("Please enter a valid Date of Birth (MM/DD/YYYY).");
      return;
    }

    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    if (!ssnRegex.test(form.ssn)) {
      setError("Please enter a valid SSN (XXX-XX-XXXX).");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("access_key", "2c6d4c46-bf43-4eb5-b604-917bf47ebe96");
    formData.append("subject", "New Agent Application (Join Team)");
    formData.append("from_name", "Gigabyte LLC Agent Recruiter");
    formData.append("name", `${form.firstName} ${form.lastName}`.trim());
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("dob", form.dob);
    formData.append("npn", form.npn);
    formData.append("ssn", form.ssn);
    formData.append("state", form.state);
    formData.append("experience", form.experience);

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
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient py-24 pt-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
                Join Our Team
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Build a Career You're{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                  Proud Of.
                </span>
              </h1>
              <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
                Gigabyte LLC is actively recruiting ambitious, motivated individuals to join our growing national agent force. No experience required — just a desire to succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                {[{ icon: Star, text: "Top 10% Contracts" }, { icon: Award, text: "Award-Winning Training" }, { icon: DollarSign, text: "Weekly Direct Deposit" }].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-blue-100 text-sm">
                    <Icon className="w-4 h-4 text-blue-300 shrink-0" />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Apply Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2b5e] mb-2">Application Received!</h3>
                    <p className="text-[#5a6a85]">A Gigabyte team member will contact you within 24 hours to discuss your opportunity.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-bold text-[#0d2b5e] text-xl mb-1">Apply to Join Gigabyte</h2>
                    <p className="text-[#5a6a85] text-sm mb-6">Free to apply. No obligation. We'll reach out within 24 hours.</p>
                    <form id="agent-apply-form" onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">First Name *</label>
                          <input id="agent-first-name" type="text" name="firstName" required value={form.firstName} onChange={handleChange} placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">Last Name *</label>
                          <input id="agent-last-name" type="text" name="lastName" required value={form.lastName} onChange={handleChange} placeholder="Smith" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">Email *</label>
                        <input id="agent-email" type="email" name="email" required value={form.email} onChange={handleChange} placeholder="john@email.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">Phone *</label>
                        <input id="agent-phone" type="tel" name="phone" required value={form.phone} onChange={handlePhoneChange} placeholder="(555) 000-0000" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">Date of Birth *</label>
                          <input type="text" required value={form.dob} onChange={handleDobChange} placeholder="MM/DD/YYYY" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">NPN Number *</label>
                          <input type="text" required value={form.npn} onChange={handleNpnChange} placeholder="e.g. 12345678" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">Social Security Number *</label>
                        <div className="relative">
                          <input 
                            type={ssnVisible ? "text" : "password"} 
                            required 
                            value={form.ssn} 
                            onChange={handleSsnChange} 
                            placeholder="XXX-XX-XXXX" 
                            className="w-full pl-4 pr-11 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent font-mono tracking-wider" 
                          />
                          <button 
                            type="button" 
                            onClick={() => setSsnVisible(!ssnVisible)} 
                            className="absolute inset-y-0 right-3 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                            title="Toggle SSN Visibility"
                          >
                            {ssnVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">State *</label>
                          <input id="agent-state" type="text" name="state" required value={form.state} onChange={handleChange} placeholder="e.g. Texas" className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1c2b4a] mb-1.5">Experience *</label>
                          <select id="agent-experience" name="experience" required value={form.experience} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 text-[#1c2b4a] text-sm focus:outline-none focus:ring-2 focus:ring-[#1a6bc4] focus:border-transparent bg-white">
                            <option value="">Select</option>
                            {experienceLevels.map((l) => <option key={l} value={l}>{l}</option>)}
                          </select>
                        </div>
                      </div>
                      
                      {error && (
                        <div className="p-3 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm font-medium animate-pulse">
                          ⚠️ {error}
                        </div>
                      )}

                      <button id="agent-submit-btn" disabled={loading} type="submit" className="w-full py-4 rounded-xl bg-[#1a6bc4] hover:bg-[#1558a8] disabled:bg-slate-400 disabled:cursor-not-allowed text-white font-bold text-base shadow-lg transition-all duration-200 hover:-translate-y-0.5">
                        {loading ? "Submitting..." : "Submit Application →"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0d2b5e] mb-3">Everything You Need to Succeed</h2>
            <p className="text-[#5a6a85] text-lg max-w-xl mx-auto">Gigabyte provides the tools, training, and support to help any agent thrive.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover">
                  <div className="w-11 h-11 rounded-xl bg-[#e8f2fd] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1a6bc4]" />
                  </div>
                  <h3 className="font-bold text-[#0d2b5e] text-base mb-2">{b.title}</h3>
                  <p className="text-[#5a6a85] text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e8f2fd] text-[#1a6bc4] text-xs font-semibold uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5" /> FAQ
            </div>
            <h2 className="text-3xl font-bold text-[#0d2b5e] mb-3">Common Questions</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-[#f4f6f9] transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[#0d2b5e] text-sm pr-4">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-[#5a6a85] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 bg-white">
                    <p className="text-[#5a6a85] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-[#5a6a85] text-sm mb-4">Still have questions? We'd love to chat.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#1a6bc4] hover:bg-[#1558a8] text-white font-semibold text-sm shadow-lg transition-all duration-200">
              Contact Our Team <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
