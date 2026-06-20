import { motion } from "framer-motion";

const carriers = [
  { name: "Mutual of Omaha", specialty: "Final Expense · Life" },
  { name: "Americo Financial", specialty: "Final Expense · Annuities" },
  { name: "American Amicable", specialty: "Final Expense · Life" },
  { name: "Foresters Financial", specialty: "Life · Final Expense" },
  { name: "AIG Direct", specialty: "Life · Supplemental" },
  { name: "Transamerica", specialty: "Life · Annuities" },
  { name: "Aetna", specialty: "Medicare · Supplemental" },
  { name: "Humana", specialty: "Medicare · Supplemental" },
  { name: "UnitedHealthcare", specialty: "Medicare · Supplemental" },
  { name: "Cigna", specialty: "Medicare · Supplemental" },
  { name: "GPM Life", specialty: "Final Expense" },
  { name: "Royal Neighbors", specialty: "Final Expense · Life" },
];

export function CarrierBanner() {
  return (
    <section className="section-padding bg-gigabyte-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00a7e1] text-xs font-semibold uppercase tracking-wider mb-4">
            Our Carrier Network
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Partnered with America's Most Trusted Carriers
          </h2>
          <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
            Gigabyte LLC connects you directly with 20+ A-rated carriers — no middlemen, no layers, and direct contracts.
          </p>
        </motion.div>

        {/* Carrier Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {carriers.map((carrier, i) => (
            <motion.div
              key={carrier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="bg-white/8 hover:bg-white/15 border border-white/10 rounded-2xl p-5 text-center transition-all duration-200 cursor-default group"
            >
              <div className="w-10 h-10 rounded-full bg-[#00a7e1]/20 flex items-center justify-center mx-auto mb-3">
                <span className="text-[#00a7e1] text-base font-bold">
                  {carrier.name.charAt(0)}
                </span>
              </div>
              <div className="text-white font-semibold text-sm leading-snug mb-1">{carrier.name}</div>
              <div className="text-blue-300/60 text-xs">{carrier.specialty}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-blue-300/50 text-sm mt-10"
        >
          + 10 more carrier partners. Carrier availability varies by state and product.
        </motion.p>
      </div>
    </section>
  );
}
