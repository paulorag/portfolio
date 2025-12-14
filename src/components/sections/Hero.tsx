"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { dict } = useLanguage();

    return (
        <section
            id="inicio"
            className="flex min-h-screen items-center justify-center py-20 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium w-fit border border-blue-500/20">
                        {dict.hero.badge}
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                        {dict.hero.greeting} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                            Paulo Gomes
                        </span>
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-lg leading-relaxed text-gray-400">
                        {dict.hero.role}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#projetos"
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                        >
                            {dict.hero.btnProject} <ArrowRight size={20} />
                        </Link>

                        <a
                            href="https://github.com/paulorag"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>

                        <a
                            href="https://linkedin.com/in/paulorag"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl backdrop-blur-xl p-6 shadow-2xl">
                        <div className="flex gap-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-3 font-mono text-sm text-gray-400">
                            <p>
                                <span className="text-purple-400">const</span>{" "}
                                <span className="text-blue-400">profile</span> ={" "}
                                <span className="text-yellow-400">{"{"}</span>
                            </p>
                            <p className="pl-4">
                                nome:{" "}
                                <span className="text-green-400">
                                    &quot;Paulo Gomes&quot;
                                </span>
                                ,
                            </p>
                            <p className="pl-4">
                                {dict.hero.codeProfile.roleLabel}:{" "}
                                <span className="text-green-400">
                                    &quot;{dict.hero.codeProfile.roleValue}
                                    &quot;
                                </span>
                                ,
                            </p>
                            <p className="pl-4">
                                stack:{" "}
                                <span className="text-yellow-400">
                                    [&quot;Java&quot;, &quot;Spring&quot;,
                                    &quot;React&quot;, &quot;Next.js&quot;]
                                </span>
                                ,
                            </p>
                            <p className="pl-4">
                                {dict.hero.codeProfile.focusLabel}:{" "}
                                <span className="text-green-400">
                                    &quot;{dict.hero.codeProfile.focusValue}
                                    &quot;
                                </span>
                            </p>
                            <p>
                                <span className="text-yellow-400">{"}"}</span>;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
