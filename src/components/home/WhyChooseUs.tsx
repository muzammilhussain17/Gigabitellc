import { motion } from "framer-motion";
import { Award, Target, TrendingUp, HeartHandshake, Globe, BookOpen } from "lucide-react";

const stats = [
  { value: "20+", label: "A-Rated Carriers" },
  { value: "10K+", label: "Families Protected" },
  { value: "500+", label: "Licensed Agents" },
  { value: "30%", label: "Standard Commission" },
];

const pillars = [
  {
    icon: Award,
    title: "A-Rated Carriers Only",
    description: "Access 20+ top-tier carrier partners including Mutual of Omaha, Americo, Transamerica, and AIG with no premium markup.",
  },
  {
    icon: Target,
    title: "Exclusive Lead Access",
    description: "Never cold call again. Tap into our daily feed of high-intent, exclusive local leads generated from proprietary search campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Transparent Commission",
    description: "Get paid exactly what you deserve. We offer a transparent, industry-leading 30% commission split with zero hidden fees.",
  },
  {
    icon: HeartHandshake,
    title: "Full Back-Office Support",
    description: "We handle 100% of the administration: application scrubbing, carrier submissions, and follow-ups so you focus on closing.",
  },
  {
    icon: Globe,
    title: "100% Remote Work",
    description: "Work from anywhere in the US. Complete e-app contracting, digital underwriting, and sell virtually or in person.",
  },
  {
    icon: BookOpen,
    title: "Mentorship & Training",
    description: "Direct mentorship from top-producing agents, weekly training webinars, script walkthroughs, and a private agent community.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Subtle light blue circuit background indicator */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
            Why Gigabyte LLC
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gigabyte-navy mb-4">
            Built for Agents Who Want to Win
          </h2>
          <p className="text-gigabyte-text-muted text-lg max-w-2xl mx-auto">
            We've removed the administrative friction of standard IMOs. We provide the leads and handle the operations so you can focus on building your business.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden mb-16 shadow-sm border border-slate-200"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-gigabyte-navy px-6 py-8 text-center transition-colors duration-200 hover:bg-gigabyte-navy-light">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 hover:border-cyan-200/60 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-[#0072bc] transition-colors duration-300 shadow-sm">
                  <Icon className="w-5 h-5 text-[#0072bc] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-gigabyte-navy text-base mb-1.5 group-hover:text-[#0072bc] transition-colors duration-300">{pillar.title}</h3>
                  <p className="text-gigabyte-text-muted text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

