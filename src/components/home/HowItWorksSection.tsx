import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ClipboardCheck, Target, FileSpreadsheet, DollarSign, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Apply & Get Contracted",
    description:
      "Submit your application. We verify your license and contract you directly with our carrier network — no middlemen, no layers.",
    color: "from-blue-600 to-cyan-500",
    bgLight: "bg-blue-50/50",
    iconColor: "text-[#0072bc]",
  },
  {
    number: "02",
    icon: Target,
    title: "Receive Your Leads",
    description:
      "We source, verify, and deliver exclusive insurance leads to you — warm, pre-qualified, and ready to contact. No cold calling.",
    color: "from-[#00a7e1] to-[#0072bc]",
    bgLight: "bg-cyan-50/50",
    iconColor: "text-[#00a7e1]",
  },
  {
    number: "03",
    icon: FileSpreadsheet,
    title: "Close & Submit",
    description:
      "Present plans, close clients, and we handle all policy submissions, paperwork, compliance, and carrier communications.",
    color: "from-blue-700 to-indigo-600",
    bgLight: "bg-indigo-50/50",
    iconColor: "text-indigo-600",
  },
  {
    number: "04",
    icon: DollarSign,
    title: "Collect Your 30%",
    description:
      "Once carriers pay out, your 30% commission hits directly. We manage chargebacks and renewals — you just keep selling.",
    color: "from-[#10b981] to-[#059669]",
    bgLight: "bg-emerald-50/50",
    iconColor: "text-emerald-600",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e6f7ff] text-[#0072bc] text-xs font-semibold uppercase tracking-wider mb-4">
            Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0c192c] mb-4">
            How Our Agent Program Works
          </h2>
          <p className="text-[#5a6e85] text-lg max-w-2xl mx-auto font-light">
            From sign-up to your first commission — here's exactly what happens when you partner with Gigabyte LLC.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="relative bg-white rounded-2xl border border-slate-100 shadow-sm card-hover p-6 flex flex-col pt-10"
                >
                  {/* Step number badge */}
                  <div className={`absolute -top-3 left-6 w-8 h-8 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white text-xs font-bold shadow-md`}>
                    {step.number}
                  </div>

                  <div className={`w-12 h-12 rounded-xl ${step.bgLight} flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>

                  <h3 className="font-bold text-[#0c192c] text-lg mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[#5a6e85] text-xs leading-relaxed flex-1 mb-5">
                    {step.description}
                  </p>

                  <Link
                    to="/join"
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${step.iconColor} hover:gap-2 transition-all duration-200`}
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom trust note */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-[#5a6e85] text-sm">
            💼 Zero signup cost. Contracted directly with A-rated carriers in your name.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
