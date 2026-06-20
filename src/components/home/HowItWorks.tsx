import { motion } from "framer-motion";
import { Search, Eye, LockOpen, Save, Zap } from "lucide-react";

const steps = [
    {
        id: "Step 1",
        title: "SEARCH",
        description: "Target the exact type of recruits you want — license status, background, intent.",
        icon: Search,
        badge: "START HERE",
        color: "bg-blue-600"
    },
    {
        id: "Step 2",
        title: "PREVIEW",
        description: "See talent profiles before unlocking. No guessing. No blind outreach.",
        icon: Eye,
        color: "bg-indigo-600"
    },
    {
        id: "Step 3",
        title: "UNLOCK",
        description: "One profile unlock = one recruit you choose. You control who enters your pipeline.",
        icon: LockOpen,
        color: "bg-purple-600"
    },
    {
        id: "Step 4",
        title: "SAVE TO THE VAULT",
        description: "Organize recruits and instantly view their VoiceDNA communication profile.",
        icon: Save,
        color: "bg-pink-600"
    },
    {
        id: "Step 5",
        title: "AUTOMATE",
        description: "Keep outreach running while you work. Your pipeline never sleeps.",
        icon: Zap,
        badge: "ELITE",
        color: "bg-emerald-500"
    }
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">How RecruitOS Works</h2>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Connecting Line (Mobile: Hidden, Desktop: Left aligned) */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 -translate-x-1/2 hidden md:block"></div>

                    <div className="space-y-12 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                {/* Content Side */}
                                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left w-full pl-20 md:pl-0`}>
                                    <div className="relative">
                                        {step.badge && (
                                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2 ${step.badge === 'ELITE' ? 'bg-emerald-500' : 'bg-blue-600'} shadow-lg`}>
                                                {step.badge}
                                            </span>
                                        )}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h3>
                                        <p className="text-lg text-gray-500 max-w-sm inline-block">{step.description}</p>
                                    </div>
                                </div>

                                {/* Icon/Timeline Node */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className={`w-16 h-16 rounded-2xl ${step.color} shadow-xl shadow-${step.color}/20 flex items-center justify-center text-white transform rotate-3 transition-transform duration-500 hover:rotate-0`}>
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    {/* Mobile Line Connector */}
                                    {index !== steps.length - 1 && (
                                        <div className="absolute top-16 left-1/2 w-0.5 h-24 bg-gray-100 -translate-x-1/2 md:hidden"></div>
                                    )}
                                </div>

                                {/* Empty Side for Balance */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
