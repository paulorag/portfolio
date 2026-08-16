"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Layers, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict, language } = useLanguage();
    const pillars = dict.about.pillars;

    const pillarIcons = [
        <ShieldCheck key="resilience" className="w-5 h-5 text-emerald-400" />,
        <Layers key="architecture" className="w-5 h-5 text-zinc-200" />,
        <Database key="data" className="w-5 h-5 text-zinc-300" />,
    ];

    return (
        <section
            id="sobre"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-white/[0.02] rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                        {language === "pt" ? "// resumo profissional & mentalidade" : "// professional profile & mindset"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5">
                        {dict.about.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                            {dict.about.me}
                        </span>
                    </h2>
                </motion.div>

                {/* 2-Column Balanced Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left: Bio Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="lg:col-span-6 space-y-5 text-zinc-300 text-base sm:text-lg leading-relaxed text-left"
                    >
                        <p>{dict.about.description1}</p>
                        <p>{dict.about.description2}</p>
                        <p>{dict.about.description3}</p>
                    </motion.div>

                    {/* Right: Engineering Pillars (How I Think & Build) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="lg:col-span-6 space-y-4"
                    >
                        {pillars.map((pillar: { number: string; title: string; description: string }, index: number) => (
                            <div
                                key={pillar.number}
                                className="group p-5 rounded-2xl border border-white/10 bg-[#181a24]/90 hover:border-white/20 transition-all duration-300 shadow-sm relative overflow-hidden backdrop-blur-xl"
                            >
                                <div className="flex items-start gap-3.5">
                                    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 mt-0.5 text-zinc-300 group-hover:text-white transition-colors">
                                        {pillarIcons[index] || <Layers className="w-5 h-5 text-zinc-200" />}
                                    </div>

                                    <div className="space-y-1.5 min-w-0">
                                        <div className="flex items-center gap-2">
                                            <span className="font-mono text-xs font-semibold text-zinc-400">
                                                {pillar.number}.
                                            </span>
                                            <h3 className="font-bold text-sm sm:text-base text-zinc-100 group-hover:text-white transition-colors">
                                                {pillar.title}
                                            </h3>
                                        </div>

                                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                            {pillar.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
