import { motion } from "framer-motion";
import { BrainCircuit, Crosshair, Cog } from "lucide-react";

const differences = [
    {
        icon: BrainCircuit,
        title: "Psychology-Driven Recruiting",
        description: "Understand how a recruit thinks before you talk to them. Our VoiceDNA profiling gives you the cheat codes to connection.",
        color: "text-purple-600 bg-purple-50"
    },
    {
        icon: Crosshair,
        title: "Precision Targeting",
        description: "Search and preview recruits before unlocking. Stop wasting credits on license-pending candidates or tire-kickers.",
        color: "text-blue-600 bg-blue-50"
    },
    {
        icon: Cog,
        title: "Automation That Works",
        description: "Outreach continues while you focus on closing. Set up multi-channel sequences that feel personal, not robotic.",
        color: "text-emerald-600 bg-emerald-50"
    }
];

export function DifferenceCards() {
    return (
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Recruiting isn't about volume. <br />
                        <span className="text-blue-600">It's about precision.</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We don't sell lists. We don't spam candidates. We help you choose who you recruit — and how you approach them.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {differences.map((diff, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                        >
                            <div className={`w-14 h-14 rounded-xl ${diff.color} flex items-center justify-center mb-6`}>
                                <diff.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{diff.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {diff.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
