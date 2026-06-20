import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";
import {
  Heart, ShieldCheck, Stethoscope, Activity,
  Zap, AlertTriangle, Building2, TrendingUp, ArrowRight, CheckCircle
} from "lucide-react";

const products = [
  {
    id: "final-expense",
    icon: Heart,
    title: "Final Expense Insurance",
    tagline: "Plan ahead. Protect your family.",
    color: "from-rose-500 to-rose-600",
    iconColor: "text-rose-600",
    checkColor: "text-rose-500",
    popular: true,
    description:
      "Final Expense (also called burial or funeral insurance) is a type of whole life insurance that covers end-of-life costs so your family doesn't have to. Coverage amounts typically range from $5,000 to $50,000.",
    whoFor: "Adults ages 45–85 looking for affordable, guaranteed coverage with no medical exam.",
    benefits: [
      "Guaranteed acceptance options (no medical exam)",
      "Fixed premiums that never go up",
      "Coverage that never decreases",
      "Tax-free death benefit paid to your family",
      "Plans as low as $15/month",
    ],
  },
  {
    id: "life",
    icon: ShieldCheck,
    title: "Life Insurance",
    tagline: "Your family's financial foundation.",
    color: "from-[#0072bc] to-[#06152d]",
    iconColor: "text-[#0072bc]",
    checkColor: "text-[#0072bc]",
    description:
      "Term and permanent life insurance policies from top carriers that safeguard your family's financial future. Flexible coverage from $25,000 to several million dollars.",
    whoFor: "Working adults and families who want affordable income replacement and long-term security.",
    benefits: [
      "Term policies from 10 to 30 years",
      "Permanent/whole life options available",
      "Living benefits (accelerated death benefit)",
      "Competitive rates from A-rated carriers",
      "Coverage available for most health conditions",
    ],
  },
  {
    id: "medicare",
    icon: Stethoscope,
    title: "Medicare Insurance",
    tagline: "Fill the gaps in original Medicare.",
    color: "from-emerald-500 to-emerald-600",
    iconColor: "text-emerald-600",
    checkColor: "text-emerald-600",
    description:
      "Original Medicare leaves significant gaps. Our Medicare Supplement (Medigap) and Medicare Advantage plans cover those gaps — reducing or eliminating your out-of-pocket costs.",
    whoFor: "U.S. residents ages 65+ or qualifying under-65 individuals enrolled in Medicare.",
    benefits: [
      "Medicare Supplement Plans A through N",
      "Medicare Advantage (Part C) plans",
      "Prescription drug (Part D) coverage",
      "Dental, vision, and hearing add-ons",
      "No network restrictions with Medigap",
    ],
  },
  {
    id: "supplemental",
    icon: Activity,
    title: "Supplemental Insurance",
    tagline: "Extra protection for everyday expenses.",
    color: "from-violet-500 to-violet-600",
    iconColor: "text-violet-600",
    checkColor: "text-violet-600",
    description:
      "Supplemental insurance pays you cash directly — regardless of other insurance. Use it for copays, deductibles, living expenses, or anything else while you recover.",
    whoFor: "Anyone who wants extra financial protection on top of their existing health plan.",
    benefits: [
      "Cash benefits paid directly to you",
      "Use for any expense",
      "Portable — keeps coverage if you change jobs",
      "No coordination with other insurance",
      "Affordable premiums starting under $20/month",
    ],
  },
  {
    id: "accident",
    icon: Zap,
    title: "Accident Insurance",
    tagline: "Cash when accidents happen.",
    color: "from-amber-500 to-amber-600",
    iconColor: "text-amber-600",
    checkColor: "text-amber-600",
    description:
      "Accidents happen to everyone. When they do, our accident insurance pays you a lump-sum benefit for covered injuries — helping you handle unexpected costs without touching your savings.",
    whoFor: "Active individuals, families with children, and anyone with a high-deductible health plan.",
    benefits: [
      "Benefits for ER visits, fractures, dislocations",
      "Hospitalization benefits included",
      "Physical therapy coverage",
      "Coverage for loss of life/limb",
      "Family plans available",
    ],
  },
  {
    id: "critical-illness",
    icon: AlertTriangle,
    title: "Critical Illness Insurance",
    tagline: "A financial lifeline at your hardest moment.",
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-600",
    checkColor: "text-orange-600",
    description:
      "A cancer diagnosis, heart attack, or stroke can devastate your finances even if you survive. Critical Illness insurance pays a tax-free lump sum so you can focus on recovery — not bills.",
    whoFor: "Anyone with a family history of serious illness or who wants financial backup against major diagnoses.",
    benefits: [
      "Lump sum on first diagnosis",
      "Covers cancer, heart attack, stroke, and more",
      "Pay for any expense (mortgage, rent, treatment)",
      "Covers multiple occurrences (depending on plan)",
      "Guaranteed renewable",
    ],
  },
  {
    id: "hospital",
    icon: Building2,
    title: "Hospital Indemnity",
    tagline: "Daily cash for every day in the hospital.",
    color: "from-cyan-500 to-cyan-600",
    iconColor: "text-cyan-600",
    checkColor: "text-cyan-600",
    description:
      "Hospital stays are expensive — even with insurance. Our Hospital Indemnity plans pay a fixed daily benefit for every day you're hospitalized, giving you cash to cover out-of-pocket expenses.",
    whoFor: "Anyone with a high-deductible health plan, Medicare recipients, or those seeking extra financial protection.",
    benefits: [
      "Daily benefit per day of hospitalization",
      "ICU confinement coverage",
      "Surgery and outpatient benefits",
      "Guaranteed issue options available",
      "Benefits for spouse and dependents",
    ],
  },
  {
    id: "annuities",
    icon: TrendingUp,
    title: "Annuities",
    tagline: "Guaranteed income for the rest of your life.",
    color: "from-teal-500 to-teal-600",
    iconColor: "text-teal-600",
    checkColor: "text-teal-600",
    description:
      "Annuities provide guaranteed income and protect your retirement savings from market volatility. Choose from Fixed, Fixed-Indexed, or Immediate Annuities to match your retirement goals.",
    whoFor: "Pre-retirees and retirees looking for predictable, tax-deferred income.",
    benefits: [
      "Guaranteed principal protection",
      "Tax-deferred growth",
      "Lifetime income options",
      "Fixed and indexed annuity products",
      "Death benefit for your beneficiaries",
    ],
  },
];

export function ProductsPage() {
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
              Insurance Products
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Complete Coverage for Every Family
            </h1>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto font-light">
              From final expense to retirement annuities — Gigabyte LLC provides affordable, trusted coverage for every stage of life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products List */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                  {/* Left: Header */}
                  <div className={`bg-gradient-to-br ${product.color} p-7 flex flex-col justify-between`}>
                    <div>
                      {product.popular && (
                        <div className="self-start inline-block px-3 py-1 rounded-full bg-white/25 text-white text-xs font-bold mb-4">
                          Most Popular
                        </div>
                      )}
                      <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-lg font-bold text-white mb-1.5">{product.title}</h2>
                      <p className="text-white/75 text-sm italic">{product.tagline}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white/20 hover:bg-white/30 text-white text-sm font-semibold transition-colors border border-white/30 self-start"
                    >
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Middle: Description */}
                  <div className="p-7">
                    <h3 className="font-bold text-gigabyte-navy text-xs uppercase tracking-widest mb-3">About This Product</h3>
                    <p className="text-gigabyte-text-muted text-sm leading-relaxed mb-5 font-light">{product.description}</p>
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                      <div className="text-xs font-bold text-gigabyte-navy uppercase tracking-wide mb-1.5">Who It's For</div>
                      <p className="text-gigabyte-text-muted text-sm leading-relaxed font-light">{product.whoFor}</p>
                    </div>
                  </div>

                  {/* Right: Benefits */}
                  <div className="p-7">
                    <h3 className="font-bold text-gigabyte-navy text-xs uppercase tracking-widest mb-4">Key Benefits</h3>
                    <ul className="space-y-2.5">
                      {product.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4 h-4 ${product.checkColor} shrink-0 mt-0.5`} />
                          <span className="text-gigabyte-text-muted text-sm leading-snug font-light">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gigabyte-navy mb-4">Not Sure Which Plan Is Right for You?</h2>
          <p className="text-gigabyte-text-muted text-lg mb-8 leading-relaxed font-light">
            Our licensed agents will help you compare plans from multiple carriers to find the best fit for your budget and health situation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#00a7e1] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Talk to a Licensed Agent <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PublicLayout>
  );
}
