import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PublicLayout } from "../layouts/PublicLayout";
import { Eye, EyeOff, Check, X, Loader2 } from "lucide-react";

export function TransamericaPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    ssn: "",
    npn: "",
    state: "",
    email: "",
    phone: ""
  });

  const [ssnVisible, setSsnVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | null }>({
    message: "",
    type: null
  });

  const states = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
    "Wisconsin", "Wyoming"
  ];

  // DOB Formatter: formats as MM/DD/YYYY
  const handleDobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").substring(0, 8);
    if (val.length > 4) {
      val = val.slice(0, 2) + "/" + val.slice(2, 4) + "/" + val.slice(4);
    } else if (val.length > 2) {
      val = val.slice(0, 2) + "/" + val.slice(2);
    }
    setForm((prev) => ({ ...prev, dob: val }));
  };

  // SSN Formatter: formats as XXX-XX-XXXX
  const handleSsnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value.replace(/\D/g, "").substring(0, 9);
    if (val.length > 5) {
      val = val.slice(0, 3) + "-" + val.slice(3, 5) + "-" + val.slice(5);
    } else if (val.length > 3) {
      val = val.slice(0, 3) + "-" + val.slice(3);
    }
    setForm((prev) => ({ ...prev, ssn: val }));
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast({ message: "", type: null });
    }, 4500);
  };

  const clearForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      dob: "",
      ssn: "",
      npn: "",
      state: "",
      email: "",
      phone: ""
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks
    const dobRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;
    if (!dobRegex.test(form.dob)) {
      showToast("Please enter a valid Date of Birth (MM/DD/YYYY).", "error");
      return;
    }

    const ssnRegex = /^\d{3}-\d{2}-\d{4}$/;
    if (!ssnRegex.test(form.ssn)) {
      showToast("Please enter a valid SSN (XXX-XX-XXXX).", "error");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("access_key", "2c6d4c46-bf43-4eb5-b604-917bf47ebe96");
    formData.append("subject", "New Transamerica Agent Contracting Application");
    formData.append("from_name", "Transamerica Agent Contracting System");
    formData.append("first_name", form.firstName);
    formData.append("last_name", form.lastName);
    formData.append("dob", form.dob);
    formData.append("ssn", form.ssn);
    formData.append("npn", form.npn);
    formData.append("resident_state", form.state);
    formData.append("email", form.email);
    formData.append("phone", form.phone);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Accept": "application/json"
        },
        body: formData
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showToast("Contracting application sent successfully!", "success");
        clearForm();
      } else {
        showToast(data.message || "Submission failed. Please check details.", "error");
      }
    } catch (error) {
      showToast("Network error. Please try again later.", "error");
      console.error("Error submitting Web3Form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PublicLayout>
      {/* Hero section with premium dark gradient matching theme */}
      <section className="hero-gradient py-24 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              Agent Contracting
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Transamerica Onboarding</h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto font-light">
              Submit your NPN and licensing details to request appointments with Transamerica Life Insurance Company.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-slate-50 relative min-h-screen flex flex-col items-center">
        <div className="w-full max-w-2xl px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative"
          >
            {/* Top decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-red-600 to-amber-500" />
            
            {/* Card Header */}
            <div className="bg-slate-900 text-white p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center font-serif text-2xl font-bold text-white tracking-tighter shrink-0">
                  T
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-medium tracking-wide text-white">Transamerica</h2>
                  <p className="text-[10px] text-white/50 uppercase tracking-widest font-semibold mt-0.5">Life Insurance Company</p>
                </div>
              </div>
              <div className="h-px bg-white/10 my-4" />
              <h3 className="text-xl font-bold font-serif text-white">Agent Contracting Form</h3>
              <p className="text-sm text-white/60 font-light mt-1">Complete all required fields below to initiate the contracting process.</p>
              <div className="inline-block mt-4 bg-white/5 border border-white/10 rounded-full px-4 py-1 text-[10px] uppercase font-bold text-white/60 tracking-wider">
                Contracting &nbsp;·&nbsp; Independent Agent
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-8">
              {/* Section 1: Personal Information */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-6 flex items-center gap-3">
                  Personal Information
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">First Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="firstName" 
                      value={form.firstName} 
                      onChange={handleInputChange} 
                      placeholder="John" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="lastName" 
                      value={form.lastName} 
                      onChange={handleInputChange} 
                      placeholder="Smith" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Date of Birth <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={form.dob} 
                      onChange={handleDobChange} 
                      placeholder="MM/DD/YYYY" 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Social Security Number <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input 
                        type={ssnVisible ? "text" : "password"} 
                        value={form.ssn} 
                        onChange={handleSsnChange} 
                        placeholder="XXX-XX-XXXX" 
                        required 
                        className="w-full pl-4 pr-11 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all tracking-wider font-mono"
                      />
                      <button 
                        type="button" 
                        onClick={() => setSsnVisible(!ssnVisible)} 
                        className="absolute inset-y-0 right-3 flex items-center justify-center text-slate-400 hover:text-slate-600 transition-colors"
                        title="Toggle SSN Visibility"
                      >
                        {ssnVisible ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-1">Stored securely, never shared.</span>
                  </div>
                </div>
              </div>

              {/* Section 2: Licensing Information */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-6 flex items-center gap-3">
                  Licensing Information
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">NPN Number <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="npn" 
                      value={form.npn} 
                      onChange={handleInputChange} 
                      placeholder="e.g. 12345678" 
                      maxLength={10} 
                      required 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all"
                    />
                    <span className="text-[10px] text-slate-400">National Producer Number (NIPR)</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Resident State</label>
                    <div className="relative bg-white rounded-xl">
                      <select 
                        name="state" 
                        value={form.state} 
                        onChange={handleInputChange} 
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white appearance-none cursor-pointer"
                      >
                        <option value="">— Select State —</option>
                        {states.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 pointer-events-none text-xs">
                        ▼
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3: Contact Details */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-red-600 mb-6 flex items-center gap-3">
                  Contact Details
                  <div className="flex-1 h-px bg-slate-200" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      value={form.email} 
                      onChange={handleInputChange} 
                      placeholder="agent@email.com" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                    <input 
                      type="tel" 
                      value={form.phone} 
                      onChange={handlePhoneChange} 
                      placeholder="(555) 000-0000" 
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Consent Box & Buttons */}
              <div className="pt-6 border-t border-slate-100 space-y-6">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-xs text-slate-500 leading-relaxed">
                  <strong>Authorization Notice:</strong> By submitting this form, the above-named individual authorizes the collection of their personal information for the purpose of processing an independent agent contracting application with Transamerica Life Insurance Company. Information will be used solely for contracting and licensing verification.
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
                  <button 
                    type="button" 
                    onClick={clearForm} 
                    className="w-full sm:w-auto px-6 py-3 border.5 border-slate-200 rounded-xl hover:border-slate-800 hover:text-slate-800 text-slate-500 font-semibold text-sm transition-all duration-200 text-center cursor-pointer"
                  >
                    Clear Form
                  </button>
                  <button 
                    type="submit" 
                    disabled={loading} 
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 disabled:bg-slate-400 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 cursor-pointer disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" /> Save Record
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast.type && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 px-6 py-4 rounded-2xl shadow-xl border text-sm font-medium ${
              toast.type === "success" 
                ? "bg-emerald-50 border-emerald-100 text-emerald-800" 
                : "bg-red-50 border-red-100 text-red-800"
            }`}
          >
            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
              toast.type === "success" ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
            }`}>
              {toast.type === "success" ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
            </div>
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </PublicLayout>
  );
}
