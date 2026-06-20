import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export function HomeCTA() {
    return (
        <section className="py-24 bg-gray-900 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/20 rounded-full blur-3xl -z-10 opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl -z-10 opacity-30 pointer-events-none"></div>

            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Recruit Smarter. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Not Harder.</span>
                    </h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Join high-growth agencies automating their pipeline with RecruitOS using VoiceDNA and verified profiles.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/pricing">
                            <Button size="lg" className="h-16 px-10 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto">
                                View Pricing <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="h-16 px-10 text-lg border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white rounded-full w-full sm:w-auto bg-transparent">
                            <Play className="ml-2 h-5 w-5 mr-2 fill-current" /> Watch How It Works
                        </Button>
                    </div>

                    <p className="mt-8 text-sm text-gray-500">
                        No credit card required for demo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
