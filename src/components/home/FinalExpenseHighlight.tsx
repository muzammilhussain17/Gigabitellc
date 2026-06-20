import { motion } from "framer-motion";
import { Check, Handshake, Zap, Shield, DollarSign } from "lucide-react";

const includesList = [
  "Lead sourcing",
  "Lead contacting",
  "Closing support",
  "Policy submissions",
  "Chargeback mgmt",
  "Compliance",
  "Carrier relations",
  "CRM & tech tools",
];

const points = [
  {
    icon: Handshake,
    title: "Direct Carrier Contracting",
    description: "Contracted directly with carriers under your name — no FMO layers or hidden uplines cutting into your rate.",
  },
  {
    icon: Zap,
    title: "Exclusive Pre-Qualified Leads",
    description: "We source, contact, and warm up leads before they reach you. You close — we fill your pipeline.",
  },
  {
    icon: Shield,
    title: "Full Chargeback Protection",
    description: "When policies lapse, our team handles every dispute so your net income stays protected and maximized.",
  },
  {
    icon: DollarSign,
    title: "Zero Overhead for Agents",
    description: "No software costs, no staffing, no compliance headaches. Nothing out-of-pocket to join and start earning.",
  },
];

export function FinalExpenseHighlight() {
  return (
    <section id="commission" className="section-padding bg-[#f4f6f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Split Visualization & Includes Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden"
          >
            {/* Top border accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072bc] via-[#00a7e1] to-[#0072bc]" />
            
            <div className="flex flex-col sm:flex-row items-stretch gap-6 mb-8">
              {/* Box Agent */}
              <div className="flex-1 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 border border-[#00a7e1]/25 rounded-2xl p-6 text-center flex flex-col justify-center">
                <div className="text-[#5a6e85] text-[10px] uppercase tracking-wider font-extrabold mb-1">Agent Earns</div>
                <div className="text-4xl sm:text-5xl font-bold text-[#0072bc] leading-none mb-2">30%</div>
                <p className="text-[#5a6e85] text-[11px] font-light leading-relaxed">
                  Your commission on every policy placed — paid out consistently when carriers disburse.
                </p>
              </div>

              {/* Split Divider */}
              <div className="flex items-center justify-center py-2 sm:py-0">
                <div className="w-full sm:w-[1px] h-[1px] sm:h-20 bg-slate-100 flex items-center justify-center">
                  <span className="bg-slate-100 text-slate-400 text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-md">
                    SPLIT
                  </span>
                </div>
              </div>

              {/* Box Gigabyte */}
              <div className="flex-1 bg-slate-50 border border-slate-200/70 rounded-2xl p-6 text-center flex flex-col justify-center">
                <div className="text-[#5a6e85] text-[10px] uppercase tracking-wider font-extrabold mb-1">Gigabyte Covers</div>
                <div className="text-4xl sm:text-5xl font-bold text-[#0c192c] leading-none mb-2">70%</div>
                <p className="text-[#5a6e85] text-[11px] font-light leading-relaxed">
                  We use this to run all operations — zero cost passed on to you as the agent.
                </p>
              </div>
            </div>

            {/* Grid of what's included */}
            <div className="grid grid-cols-2 gap-3">
              {includesList.map((item) => (
                <div key={item} className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0072bc] to-[#00a7e1] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[#5a6e85] text-xs font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Pitch & points */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-block text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#e6f7ff] text-[#0072bc] border border-blue-100 mb-4">
              The Business Model
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0c192c] mb-4 leading-tight">
              You Sell.<br />We Handle Everything Else.
            </h2>
            <p className="text-[#5a6e85] text-base font-light mb-8 max-w-lg leading-relaxed">
              Our model lets agents earn without any overhead. You focus entirely on clients — we absorb all operational costs.
            </p>

            <div className="space-y-5">
              {points.map((p, index) => {
                const Icon = p.icon;
                return (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white border border-slate-100 rounded-2xl card-hover">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0072bc] to-[#00a7e1] flex items-center justify-center shrink-0 text-white shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0c192c] text-sm mb-1">{p.title}</h4>
                      <p className="text-[#5a6e85] text-xs font-light leading-relaxed">{p.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
