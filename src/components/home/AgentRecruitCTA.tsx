import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, DollarSign, Users, BookOpen, Laptop, ArrowRight } from "lucide-react";

const benefits = [
  { icon: DollarSign, text: "Up to 140% contracts on select carriers" },
  { icon: Users, text: "Access to warm lead programs & lead vendors" },
  { icon: BookOpen, text: "Full training — even if you're brand new" },
  { icon: Laptop, text: "100% remote — work from anywhere" },
  { icon: CheckCircle, text: "Weekly direct deposit commissions" },
  { icon: CheckCircle, text: "Back-office & licensing support included" },
  { icon: CheckCircle, text: "Mentorship from top producers" },
  { icon: CheckCircle, text: "No experience required — we train you" },
];

export function AgentRecruitCTA() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0d2b5e] via-[#1a3f7a] to-[#1a6bc4] overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/25 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
                Career Opportunity
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                Build a 6-Figure Career{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                  as an Insurance Agent
                </span>
              </h2>
              <p className="text-blue-100/80 text-lg mb-8 leading-relaxed">
                Join Gigabyte LLC and gain access to top carrier contracts, proven training, and a support system built for your success — whether you're brand new or an experienced producer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/join"
                  id="agent-cta-apply"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-[#0d2b5e] font-bold text-base hover:bg-blue-50 shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  Apply to Join Gigabyte
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/join"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Right: Benefits */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <h3 className="text-white font-bold text-lg mb-5">What You Get With Gigabyte:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={benefit.text} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#1a6bc4]/50 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5 text-blue-200" />
                        </div>
                        <span className="text-blue-100/90 text-sm leading-snug">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
