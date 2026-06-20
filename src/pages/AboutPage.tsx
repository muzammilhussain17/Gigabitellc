import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";
import {
  Shield, Target, HeartHandshake, Award, Users, TrendingUp,
  CheckCircle, ArrowRight, Phone, Mail
} from "lucide-react";

const values = [
  {
    icon: HeartHandshake,
    title: "People Before Profit",
    description: "We match every client with the genuinely best coverage for their situation — not the highest-commission product.",
  },
  {
    icon: Shield,
    title: "Integrity Always",
    description: "Licensed, compliant, and transparent in everything we do. We say what we mean and deliver what we promise.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Whether you're a client seeking coverage or an agent building a career, we're focused on real, measurable outcomes.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Growth",
    description: "We invest in ongoing training, technology, and carrier relationships so our agents and clients always get better.",
  },
];

const milestones = [
  { year: "2008", event: "Gigabyte LLC founded in Dallas, TX" },
  { year: "2012", event: "Expanded to 20 states with 100+ contracted agents" },
  { year: "2016", event: "Crossed 5,000 families served nationwide" },
  { year: "2019", event: "Launched dedicated Medicare and Annuity divisions" },
  { year: "2022", event: "Reached 10,000+ families served across all 50 states" },
  { year: "2024", event: "Expanded carrier portfolio to 20+ A-rated partners" },
];

export function AboutPage() {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="hero-gradient py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-6">
              About Us
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              We're on a Mission to Protect Every American Family
            </h1>
            <p className="text-blue-100/80 text-xl leading-relaxed mb-8 font-light">
              Gigabyte LLC is a tech-driven Insurance Marketing Organization (IMO) dedicated to connecting families with affordable, quality insurance coverage — and helping independent agents build thriving careers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#00a7e1] text-white font-bold text-base hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border-2 border-white/25 text-white font-semibold text-base hover:border-white hover:bg-white/5 transition-all duration-200"
              >
                Join Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Stats */}
      <section className="section-padding bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gigabyte-navy mb-5 leading-tight">
                Built on a Simple Belief: Every Family Deserves Protection
              </h2>
              <div className="space-y-4 text-gigabyte-text-muted text-base leading-relaxed">
                <p>
                  Gigabyte LLC was founded in 2008 with a clear purpose — to remove the barriers that keep working-class American families from accessing the life and final expense insurance protection they need.
                </p>
                <p>
                  We started as a small team of experienced insurance professionals and have grown into a national IMO with 500+ contracted independent agents operating in all 50 states.
                </p>
                <p>
                  Today, we're one of the most respected Final Expense IMOs in the country, known for our top-tier carrier contracts, agent support infrastructure, and genuine commitment to our clients' wellbeing.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0072bc]" />
                </div>
                <div>
                  <div className="text-xs text-gigabyte-text-muted">Licensed in all 50 states · Established agency</div>
                  <a href="tel:+18122475684" className="font-bold text-gigabyte-navy hover:text-[#0072bc] transition-colors">
                    (812) 247-5684
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "16+", label: "Years in Business", icon: Award },
                { value: "10,000+", label: "Families Protected", icon: HeartHandshake },
                { value: "500+", label: "Agent Partners", icon: Users },
                { value: "20+", label: "Carrier Partners", icon: Shield },
              ].map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-3 border border-slate-100">
                    <Icon className="w-5 h-5 text-[#0072bc]" />
                  </div>
                  <div className="text-2xl font-bold text-gigabyte-navy mb-1">{value}</div>
                  <div className="text-gigabyte-text-muted text-sm font-medium">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
              Our Values
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gigabyte-navy mb-3">
              What We Stand For
            </h2>
            <p className="text-gigabyte-text-muted text-lg max-w-xl mx-auto">
              Everything we do flows from four core principles that guide every client interaction and agent relationship.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 card-hover text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-4 border border-cyan-100">
                    <Icon className="w-6 h-6 text-[#0072bc]" />
                  </div>
                  <h3 className="font-bold text-gigabyte-navy text-base mb-2">{v.title}</h3>
                  <p className="text-gigabyte-text-muted text-sm leading-relaxed">{v.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gigabyte-navy relative overflow-hidden">
        {/* Glow dots */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4">
              Our Journey
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
              16 Years of Growth
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-white/15 hidden sm:block" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  className="flex items-start gap-5 sm:pl-16 relative"
                >
                  <div className="hidden sm:flex absolute left-0 w-12 h-12 rounded-full bg-[#0072bc] items-center justify-center shrink-0 text-white text-xs font-bold shadow-lg border border-cyan-400/30">
                    {m.year.slice(2)}
                  </div>
                  <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-5 flex-1 transition-colors">
                    <span className="text-cyan-300 text-xs font-bold tracking-widest block mb-1">{m.year}</span>
                    <span className="text-white text-sm leading-relaxed font-light">{m.event}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Note */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-[#0072bc]" />
              </div>
              <div>
                <h3 className="font-bold text-gigabyte-navy text-base mb-2">Licensing & Compliance</h3>
                <p className="text-gigabyte-text-muted text-sm leading-relaxed">
                  Gigabyte LLC is a licensed Insurance Marketing Organization (IMO) operating in compliance with state and federal insurance regulations in all 50 states. 
                  All contracted agents are independently licensed in their states of operation. Insurance products and availability vary by state. 
                  Gigabyte LLC does not provide legal, tax, or financial advice. Coverage terms, conditions, and exclusions apply — consult your agent for complete details.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold text-gigabyte-navy mb-3">Ready to Work With Us?</h2>
            <p className="text-gigabyte-text-muted mb-7">Whether you're looking for coverage or a career, we're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0072bc] to-[#00a7e1] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/join"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-gigabyte-navy text-gigabyte-navy font-semibold text-sm hover:bg-gigabyte-navy hover:text-white transition-all duration-200"
              >
                Join Our Agent Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Owner Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border border-slate-200 bg-white p-3">
                <img 
                  src="/assets/team/mark-johnson.jpg" 
                  alt="Mark Johnson - Agency Owner" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl -z-0 pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-6">
                Meet Our Leadership
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gigabyte-navy mb-2 leading-tight">
                Mark Johnson
              </h2>
              <p className="text-[#0072bc] font-bold text-lg mb-6">Agency Owner</p>
              
              <div className="space-y-6 text-gigabyte-text-muted text-base leading-relaxed font-light">
                <p className="italic">
                  "My goal is simple: to make sure that no family is ever left without the protection they deserve. I've spent my career building an agency that prioritizes people over products, ensuring every client feels heard and every agent feels supported."
                </p>
                <p>
                  With years of experience in the insurance industry, Mark has built Gigabyte LLC into a national leader in final expense and life insurance. His hands-on approach and commitment to agent development have been the cornerstone of the agency's success.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#0072bc]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gigabyte-text-muted uppercase font-bold tracking-wider">Direct Phone</p>
                    <a href="tel:+18122475684" className="text-gigabyte-navy font-bold text-sm hover:text-[#0072bc] transition-colors">(812) 247-5684</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#0072bc]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gigabyte-text-muted uppercase font-bold tracking-wider">Direct Email</p>
                    <a href="mailto:mark.johnson.550467@gmail.com" className="text-gigabyte-navy font-bold text-sm hover:text-[#0072bc] transition-colors truncate block max-w-[170px]">mark.johnson.550467@gmail.com</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
