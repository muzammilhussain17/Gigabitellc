import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-gradient">
      {/* Background patterns and glowing nodes resembling circuits */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300a7e1' fill-opacity='1'%3E%3Cpath d='M40 40v-4h-4v4h-8v4h8v8h4v-8h8v-4h-8zm0-36V0h-4v4h-8v4h8v8h4V8h8V4h-8zM4 40V36H0v4h-4v4h4v8h4v-8h8v-4H4zM4 4V0H0v4h-4v4h4v8h4V8h8V4H4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Cyber/Tech Glow circles */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Eyebrow / Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#00a7e1] text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Licensed Insurance Agency & IMO
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Protecting Families.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-300">
                Empowering
              </span><br />
              Agents.
            </h1>

            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-lg font-light">
              Gigabyte LLC is a full-service insurance agency and IMO — connecting independent agents directly with 20+ A-rated carriers, premium leads, and complete back-office support so you can focus on selling.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/join"
                id="hero-agent-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#00a7e1] text-white font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Become a Partner Agent
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/products"
                id="hero-products-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-transparent text-white font-semibold text-base border-2 border-white/25 hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                View Our Products
              </Link>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {[
                "A-Rated Carriers Only",
                "Exclusive Leads Provided",
                "Licensed in All 50 States",
                "No Upfront Cost",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2 text-blue-200/80 text-xs font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Card border shine */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              
              <h2 className="text-white font-semibold text-lg mb-6 tracking-wide">Gigabyte LLC at a Glance</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: "20+", label: "A-Rated Carriers" },
                  { value: "500+", label: "Active Agents" },
                  { value: "10K+", label: "Families Served" },
                  { value: "<24h", label: "Avg. Approval" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center">
                    <div className="text-3xl font-bold text-[#00a7e1] mb-1">{stat.value}</div>
                    <div className="text-blue-200/60 text-[10px] uppercase tracking-wider font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Commission split pill */}
              <div className="bg-gradient-to-r from-cyan-950/45 to-blue-950/45 border border-cyan-800/30 rounded-2xl p-5 flex items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="text-blue-300 text-[10px] uppercase tracking-wider font-bold mb-1">You Earn</div>
                  <div className="text-3xl font-bold text-white leading-none">30%</div>
                  <div className="text-blue-200/60 text-xs mt-1">on every policy closed</div>
                </div>
                <div className="w-[1px] h-12 bg-white/10 shrink-0" />
                <div className="flex-1 text-right">
                  <div className="text-blue-300 text-[10px] uppercase tracking-wider font-bold mb-1">We Handle</div>
                  <div className="text-lg font-bold text-white leading-none">Everything Else</div>
                  <div className="text-blue-200/60 text-xs mt-1">leads · ops · compliance</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
