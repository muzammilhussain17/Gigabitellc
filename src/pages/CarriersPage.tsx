import { useState } from "react";
import { motion } from "framer-motion";
import { PublicLayout } from "../layouts/PublicLayout";
import { Link } from "react-router-dom";
import { ArrowRight, Award, CheckCircle } from "lucide-react";

const carriers = [
  {
    name: "Mutual of Omaha",
    founded: "1909",
    specialty: ["Final Expense", "Life Insurance", "Medicare Supplement"],
    highlight: "One of the most recognized names in Final Expense insurance with guaranteed issue plans.",
    rating: "A+",
  },
  {
    name: "Americo Financial",
    founded: "1905",
    specialty: ["Final Expense", "Annuities", "Life Insurance"],
    highlight: "Industry leader in simplified issue Final Expense products with same-day approvals.",
    rating: "A",
  },
  {
    name: "American Amicable",
    founded: "1910",
    specialty: ["Final Expense", "Term Life"],
    highlight: "Known for competitive rates on simplified issue term and whole life products.",
    rating: "A",
  },
  {
    name: "Foresters Financial",
    founded: "1874",
    specialty: ["Final Expense", "Life Insurance", "Child Plans"],
    highlight: "A non-profit fraternal organization offering unique member benefits alongside insurance.",
    rating: "A",
  },
  {
    name: "AIG Direct",
    founded: "1919",
    specialty: ["Term Life", "Guaranteed Issue Life"],
    highlight: "Globally recognized insurer offering a wide range of term and permanent life solutions.",
    rating: "A",
  },
  {
    name: "Transamerica",
    founded: "1928",
    specialty: ["Life Insurance", "Annuities", "Supplemental"],
    highlight: "One of the largest carriers in the U.S. with diverse retirement and protection products.",
    rating: "A",
  },
  {
    name: "Aetna",
    founded: "1853",
    specialty: ["Medicare Supplement", "Medicare Advantage"],
    highlight: "A CVS Health company and one of the nation's largest Medicare insurance providers.",
    rating: "A",
  },
  {
    name: "Humana",
    founded: "1961",
    specialty: ["Medicare Advantage", "Medicare Supplement", "Dental/Vision"],
    highlight: "A leading Medicare insurer with strong network coverage and plan flexibility.",
    rating: "A−",
  },
  {
    name: "UnitedHealthcare",
    founded: "1977",
    specialty: ["Medicare Advantage", "Supplemental", "Dental"],
    highlight: "The nation's #1 Medicare Advantage provider, serving millions of seniors.",
    rating: "A+",
  },
  {
    name: "Cigna",
    founded: "1792",
    specialty: ["Medicare Supplement", "Supplemental", "Hospital Indemnity"],
    highlight: "Global health insurer known for comprehensive supplemental and Medicare solutions.",
    rating: "A",
  },
  {
    name: "GPM Life",
    founded: "1937",
    specialty: ["Final Expense", "Graded Benefit"],
    highlight: "Specialist Final Expense carrier offering flexible graded and level benefit plans.",
    rating: "A−",
  },
  {
    name: "Royal Neighbors",
    founded: "1895",
    specialty: ["Final Expense", "Life Insurance"],
    highlight: "A non-profit fraternal organization with competitive Final Expense plans and living benefits.",
    rating: "A",
  },
];

const ratingColors: Record<string, string> = {
  "A+": "bg-emerald-50 text-emerald-700 border border-emerald-100",
  "A": "bg-cyan-50 text-cyan-700 border border-cyan-100",
  "A−": "bg-amber-50 text-amber-700 border border-amber-100",
};

export function CarriersPage() {
  const [showAll, setShowAll] = useState(false);

  const displayedCarriers = showAll
    ? carriers
    : carriers.filter(c => c.name === "Transamerica");

  return (
    <PublicLayout>
      {/* Page Hero */}
      <section className="hero-gradient py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              Carrier Partners
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Backed by America's Most Trusted Insurers
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto font-light">
              We partner exclusively with financially stable, A-rated carriers so your coverage is always secure — no matter what.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Our Carrier Network Matters */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
              Why It Matters
            </div>
            <h2 className="text-3xl font-bold text-gigabyte-navy mb-4">The Power of Being Carrier-Independent</h2>
            <p className="text-gigabyte-text-muted text-lg font-light">
              Unlike captive agents who can only offer one company's products, our independent agents shop 20+ carriers to find you the absolute best rate for your situation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-0">
            {[
              { title: "Best Rates", desc: "We compare prices across all our carriers to ensure you don't overpay." },
              { title: "More Options", desc: "Different health profiles qualify for different carriers — we match you correctly." },
              { title: "Financial Strength", desc: "Every carrier we work with is A-rated or better by AM Best for your security." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                <CheckCircle className="w-5 h-5 text-[#0072bc] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-gigabyte-navy mb-1 text-sm sm:text-base">{item.title}</div>
                  <div className="text-gigabyte-text-muted text-sm font-light">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrier Grid */}
      <section className="section-padding bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gigabyte-navy mb-3">Our Carrier Partners</h2>
            <p className="text-gigabyte-text-muted font-light">
              {showAll ? "20+ carriers and growing. Carrier availability varies by state." : "Click on Transamerica to open the contracting form."}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedCarriers.map((carrier, i) => {
              const isTransamerica = carrier.name === "Transamerica";
              const CardContent = (
                <>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isTransamerica ? "bg-red-50 border border-red-100" : "bg-cyan-50 border border-cyan-100"}`}>
                      <Award className={`w-6 h-6 ${isTransamerica ? "text-red-600" : "text-[#0072bc]"}`} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-bold ${ratingColors[carrier.rating] || "bg-blue-50 text-blue-700 border border-blue-100"}`}>
                      AM Best: {carrier.rating}
                    </span>
                  </div>
                  <h3 className="font-bold text-gigabyte-navy text-base mb-1">{carrier.name}</h3>
                  <p className="text-gigabyte-text-muted text-xs mb-3 font-semibold font-mono">Est. {carrier.founded}</p>
                  <p className="text-gigabyte-text-muted text-sm leading-relaxed mb-4 font-light">{carrier.highlight}</p>
                  
                  {isTransamerica && (
                    <div className="mb-4 py-2 px-3 bg-red-50 border border-red-100 rounded-xl text-[10px] font-bold text-red-600 uppercase tracking-wider text-center animate-pulse">
                      ⚡ Contracting Form Available
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {carrier.specialty.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-slate-50 text-gigabyte-text-muted text-xs font-semibold border border-slate-100">
                        {s}
                      </span>
                    ))}
                  </div>

                  {isTransamerica && (
                    <span className="inline-flex items-center gap-1.5 text-red-600 font-bold text-xs uppercase tracking-wider mt-4 group-hover:underline">
                      Start Onboarding Form <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </>
              );

              return isTransamerica ? (
                <Link
                  key={carrier.name}
                  to="/carriers/transmerica"
                  className="block text-left group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover cursor-pointer border-l-4 border-l-red-600 h-full flex flex-col justify-between"
                  >
                    <div>{CardContent}</div>
                  </motion.div>
                </Link>
              ) : (
                <motion.div
                  key={carrier.name}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover h-full flex flex-col justify-between"
                >
                  <div>{CardContent}</div>
                </motion.div>
              );
            })}
          </div>

          {!showAll && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              >
                Other Carriers
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gigabyte-navy mb-4">Ready to Compare Your Options?</h2>
          <p className="text-gigabyte-text-muted text-lg mb-8 font-light">Let our licensed agents shop all our carriers to find you the best rate. It's free and takes only minutes.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#00a7e1] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5">
            Get a Free Comparison Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
