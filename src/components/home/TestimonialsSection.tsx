import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Marcus T.",
    title: "Final Expense Agent",
    state: "Texas",
    rating: 5,
    text: "Joining Gigabyte LLC was the best career decision I've ever made. Within 3 months I replaced my full-time income. The high-intent exclusive leads and the 30% commission model allowed me to double my volume with zero administrative hassle.",
    initials: "MT",
  },
  {
    id: 2,
    name: "Sandra R.",
    title: "Senior Insurance Agent",
    state: "Florida",
    rating: 5,
    text: "I was skeptical at first since I had very little insurance experience. Gigabyte's onboarding, mentorship program, and automated back-office scrubbers got my contracts done quickly. I write $18K in premium monthly now.",
    initials: "SR",
  },
  {
    id: 3,
    name: "James W.",
    title: "Team Leader / Broker",
    state: "Georgia",
    rating: 5,
    text: "The split contracts here are completely transparent. I've been in the industry for 10 years and never had a partner agency handle 70% of operations like backend scrubbing, follow-ups, and lead sourcing. Highly recommend.",
    initials: "JW",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
            Partner Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gigabyte-navy mb-4">
            Hear from Our Partner Agents
          </h2>
          <p className="text-gigabyte-text-muted text-lg max-w-2xl mx-auto">
            Real stories from real licensed agents who scaled their businesses using Gigabyte's lead systems and platform.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
                <Quote className="w-5 h-5 text-[#0072bc]" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-gigabyte-text text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gigabyte-navy to-[#0072bc] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-gigabyte-navy text-sm">{t.name}</div>
                  <div className="text-gigabyte-text-muted text-xs">{t.title} · {t.state}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
