import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export function ProblemComparison() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4">
                        Recruiting Has Changed. <span className="text-gray-400">Most Tools Haven't.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Stop wasting thousands on leads that don't convert. It's time for a system that works as hard as you do.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">

                    {/* THE OLD WAY */}
                    <div className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-gray-100 opacity-80 blur-[0.5px] hover:blur-0 transition-all duration-500">
                        <h3 className="text-2xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-red-400"></span>
                            The Old Way
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Job boards give random people",
                                "Referrals are slow & unpredictable",
                                "You waste time talking to the wrong people",
                                "CRMs aren't built for recruiting",
                                "No psychology behind communication"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-gray-500">
                                    <div className="mt-1 bg-red-100 p-1 rounded-md min-w-[24px] flex items-center justify-center">
                                        <X className="w-3.5 h-3.5 text-red-500" />
                                    </div>
                                    <span className="text-lg font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* THE RECRUITOS WAY */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="bg-white rounded-3xl p-8 md:p-10 border border-blue-100 shadow-2xl shadow-blue-900/10 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-400"></div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                            The RecruitOS Way
                        </h3>
                        <ul className="space-y-6">
                            {[
                                "Target exactly who you want",
                                "Unlock only the right people",
                                "Understand how they communicate",
                                "Automate outreach while you sleep",
                                "Build a predictable recruiting pipeline"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="flex items-start gap-4 text-gray-800"
                                >
                                    <div className="mt-1 bg-emerald-100 p-1 rounded-md min-w-[24px] flex items-center justify-center">
                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                    </div>
                                    <span className="text-lg font-semibold">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
