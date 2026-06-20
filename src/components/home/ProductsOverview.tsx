import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart, Shield, Stethoscope, Activity, TrendingUp, AlertTriangle
} from "lucide-react";

const products = [
  {
    id: "final-expense",
    icon: Heart,
    tag: "⭐ Most Popular",
    title: "Final Expense Insurance",
    description: "Our #1 seller. Whole-life coverage for seniors 45–85. No medical exam, same-day approvals, premiums from $15/mo. Highest agent activity in our network.",
    color: "from-[#0072bc] to-[#00a7e1]",
    bgLight: "bg-blue-50/50",
    iconColor: "text-[#0072bc]",
    featured: true,
    linkText: "Sell This Product →",
  },
  {
    id: "life",
    icon: Shield,
    tag: "High Volume",
    title: "Life Insurance",
    description: "Term and permanent policies with flexible coverage amounts. Strong commissions and a steady stream of exclusive leads from our system.",
    color: "from-blue-600 to-cyan-500",
    bgLight: "bg-cyan-50/50",
    iconColor: "text-blue-600",
    linkText: "Learn More →",
  },
  {
    id: "medicare",
    icon: Stethoscope,
    tag: "Growing Market",
    title: "Medicare Insurance",
    description: "Medicare Advantage and Supplement plans. AEP season brings massive lead volume. One of the most lucrative lines for active agents.",
    color: "from-indigo-500 to-indigo-600",
    bgLight: "bg-indigo-50/50",
    iconColor: "text-indigo-600",
    linkText: "Learn More →",
  },
  {
    id: "supplemental",
    icon: Activity,
    tag: "Supplemental",
    title: "Health & Supplemental",
    description: "Critical illness, accident, and hospital indemnity plans. Easy cross-sell to boost per-client revenue with minimal extra effort.",
    color: "from-emerald-500 to-emerald-600",
    bgLight: "bg-emerald-50/50",
    iconColor: "text-emerald-600",
    linkText: "Learn More →",
  },
  {
    id: "annuities",
    icon: TrendingUp,
    tag: "Retirement",
    title: "Annuities",
    description: "Fixed and indexed annuities providing guaranteed retirement income. High-ticket product with significant commission potential per case.",
    color: "from-blue-700 to-blue-800",
    bgLight: "bg-blue-50/50",
    iconColor: "text-blue-700",
    linkText: "Learn More →",
  },
  {
    id: "critical-illness",
    icon: AlertTriangle,
    tag: "Critical",
    title: "Critical Illness",
    description: "Lump-sum benefits on diagnosis of cancer, heart attack, or stroke. Simple add-on to final expense and life sales conversations.",
    color: "from-cyan-500 to-cyan-600",
    bgLight: "bg-cyan-50/50",
    iconColor: "text-cyan-600",
    linkText: "Learn More →",
  },
];

export function ProductsOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6f7ff] text-[#0072bc] text-xs font-semibold uppercase tracking-wider mb-4">
            Insurance Products
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c192c] mb-4">
            Comprehensive Coverage<br />for Every Client
          </h2>
          <p className="text-[#5a6e85] text-lg max-w-2xl font-light">
            Our agents sell across all major insurance lines — backed by top A-rated carriers and complete agency support.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`relative rounded-3xl p-7 shadow-sm border ${
                  product.featured
                    ? "bg-gradient-to-br from-[#06152d] to-[#0f2244] border-transparent text-white shadow-lg"
                    : "bg-white border-slate-100 card-hover text-[#0c192c]"
                } cursor-default flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-block text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full ${
                      product.featured
                        ? "bg-cyan-500/20 text-[#00a7e1] border border-cyan-500/30"
                        : "bg-blue-50 text-[#0072bc] border border-blue-100"
                    }`}>
                      {product.tag}
                    </span>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-xl ${
                    product.featured ? "bg-white/10" : product.bgLight
                  } flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${product.featured ? "text-[#00a7e1]" : product.iconColor}`} />
                  </div>
                  
                  <h3 className={`font-bold text-lg mb-2 leading-snug ${
                    product.featured ? "text-white" : "text-[#0c192c]"
                  }`}>
                    {product.title}
                  </h3>
                  
                  <p className={`text-xs leading-relaxed mb-6 font-light ${
                    product.featured ? "text-blue-100/70" : "text-[#5a6e85]"
                  }`}>
                    {product.description}
                  </p>
                </div>

                <Link
                  to="/join"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold ${
                    product.featured ? "text-[#00a7e1] hover:text-[#00a7e1]/85" : "text-[#0072bc] hover:text-[#0072bc]/85"
                  } hover:gap-2.5 transition-all duration-200`}
                >
                  {product.linkText}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
