"use client";

import { motion } from "framer-motion";
import { Server, Layout, ShieldCheck, Cpu, FileDown, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { dict, language } = useLanguage();
    const consoleData = dict.hero.console;
    const cvFileName = language === "pt" ? "Paulo_Gomes_CV_PT.pdf" : "Paulo_Gomes_CV_EN.pdf";

    return (
        <section
            id="inicio"
            className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            {/* Minimalist Titanium Luminescence */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-212.5 h-125 bg-linear-to-b from-white/4 via-zinc-500/2 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute top-20 -right-[10%] w-125 h-125 bg-white/2 rounded-full blur-[160px] pointer-events-none -z-10" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-5xl">
                {/* Left Column: Direct, Simple & Elegant Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col gap-4 lg:col-span-7"
                >
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium border border-emerald-500/20 shadow-sm w-fit">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{dict.hero.badge}</span>
                    </div>

                    {/* Titulo: Olá, eu sou Paulo Gomes */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                        {dict.hero.greeting} <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-100 to-zinc-400">
                            {dict.hero.name}
                        </span>
                    </h1>

                    {/* Subtitulo: Desenvolvedor Full Stack */}
                    <p className="text-lg sm:text-xl font-medium text-zinc-300 tracking-tight">
                        {dict.hero.subtitle}
                    </p>

                    {/* Texto Principal */}
                    <p className="text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
                        {dict.hero.description}
                    </p>

                    {/* Quick External Actions: Resume + Social Links */}
                    <div className="flex flex-wrap items-center gap-2.5 pt-2">
                        <a
                            href={`/documents/${cvFileName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={cvFileName}
                            className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-[0.98] shadow-md"
                        >
                            <FileDown size={15} className="transition-transform duration-200 group-hover:translate-y-0.5" />
                            <span>{dict.footer.btnCv}</span>
                        </a>

                        <a
                            href="https://github.com/paulorag"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/4 hover:bg-white/8 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.98]"
                            aria-label="GitHub de Paulo Gomes"
                        >
                            <Github size={15} />
                            <span>GitHub</span>
                            <ArrowUpRight size={13} className="text-zinc-500 group-hover:text-white transition-colors" />
                        </a>

                        <a
                            href="https://linkedin.com/in/paulorag"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/4 hover:bg-white/8 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all duration-200 active:scale-[0.98]"
                            aria-label="LinkedIn de Paulo Gomes"
                        >
                            <Linkedin size={15} />
                            <span>LinkedIn</span>
                            <ArrowUpRight size={13} className="text-zinc-500 group-hover:text-white transition-colors" />
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Architecture & Core Stack Console */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="relative flex justify-center lg:col-span-5"
                >
                    <div className="w-full max-w-md bg-[#181a24]/90 border border-white/10 rounded-3xl backdrop-blur-2xl p-5 sm:p-6 shadow-2xl space-y-3.5 relative overflow-hidden">
                        {/* Subtle Glow inside Console */}
                        <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/3 rounded-full blur-[80px] pointer-events-none -z-10" />

                        {/* Console Header Bar */}
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                                    <Cpu size={14} />
                                </div>
                                <span className="font-mono text-xs font-semibold text-zinc-300 tracking-wider">
                                    {consoleData.systemStatus}
                                </span>
                            </div>

                            <span className="font-mono text-[11px] font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                                {consoleData.runtimeBadge}
                            </span>
                        </div>

                        {/* Module 1: Back-End Core */}
                        <div className="p-3.5 rounded-2xl bg-white/2 border border-white/5 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                                    <Server size={13} />
                                </div>
                                <h2 className="text-xs font-semibold text-zinc-200">
                                    {consoleData.backendTitle}
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pl-6">
                                {consoleData.backendTechs.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/4 text-zinc-300 border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Module 2: Front-End Core */}
                        <div className="p-3.5 rounded-2xl bg-white/2 border border-white/5 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                                    <Layout size={13} />
                                </div>
                                <h2 className="text-xs font-semibold text-zinc-200">
                                    {consoleData.frontendTitle}
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pl-6">
                                {consoleData.frontendTechs.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/4 text-zinc-300 border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Module 3: Engineering & Resilience */}
                        <div className="p-3.5 rounded-2xl bg-white/2 border border-white/5 space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-md bg-white/5 text-zinc-300 border border-white/10">
                                    <ShieldCheck size={13} />
                                </div>
                                <h2 className="text-xs font-semibold text-zinc-200">
                                    {consoleData.engineeringTitle}
                                </h2>
                            </div>

                            <div className="flex flex-wrap gap-1.5 pl-6">
                                {consoleData.engineeringTechs.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-0.5 text-[11px] font-mono rounded-md bg-white/4 text-zinc-300 border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
