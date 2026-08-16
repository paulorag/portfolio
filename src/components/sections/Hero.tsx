"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
    const { dict } = useLanguage();
    const [activeTab, setActiveTab] = useState<"java" | "ts">("java");

    return (
        <section
            id="inicio"
            className="pt-28 pb-12 sm:pt-36 sm:pb-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            {/* Ambient Lighting */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] -z-10 pointer-events-none" />

            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-5xl">
                {/* Left Intro Column */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="flex flex-col gap-5 lg:col-span-7"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-medium w-fit border border-blue-500/20 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>{dict.hero.badge}</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                        {dict.hero.greeting} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
                            Paulo Gomes
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
                        {dict.hero.role}
                    </p>

                    {/* Clean Primary CTA */}
                    <div className="pt-2">
                        <Link
                            href="/#projetos"
                            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-200 active:scale-95 shadow-lg shadow-blue-600/25"
                        >
                            <span>{dict.hero.btnProject}</span>
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </motion.div>

                {/* Right Clean Interactive Code Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="relative flex justify-center lg:col-span-5"
                >
                    <div className="relative w-full max-w-md bg-[#111] border border-white/10 rounded-2xl backdrop-blur-xl overflow-hidden shadow-2xl">
                        {/* Terminal Header & Tabs (Clean without redundant copy button) */}
                        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>

                            {/* Tab Switcher */}
                            <div className="flex items-center p-0.5 rounded-lg bg-black/40 border border-white/5 text-xs font-mono">
                                <button
                                    onClick={() => setActiveTab("java")}
                                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                                        activeTab === "java"
                                            ? "bg-blue-600 text-white font-semibold"
                                            : "text-gray-400 hover:text-gray-200"
                                    }`}
                                >
                                    Developer.java
                                </button>
                                <button
                                    onClick={() => setActiveTab("ts")}
                                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                                        activeTab === "ts"
                                            ? "bg-blue-600 text-white font-semibold"
                                            : "text-gray-400 hover:text-gray-200"
                                    }`}
                                >
                                    developer.ts
                                </button>
                            </div>
                        </div>

                        {/* Code Content */}
                        <div className="p-5 font-mono text-xs sm:text-[13px] text-gray-300 overflow-x-auto leading-relaxed">
                            {activeTab === "java" ? (
                                <div className="space-y-1 text-gray-400">
                                    <p>
                                        <span className="text-yellow-400">@Component</span>
                                    </p>
                                    <p>
                                        <span className="text-purple-400">public record</span>{" "}
                                        <span className="text-blue-400">Developer</span>(
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-red-400">String</span> name ={" "}
                                        <span className="text-green-400">&quot;Paulo Roberto A. Gomes&quot;</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-red-400">String</span> role ={" "}
                                        <span className="text-green-400">&quot;Full-Stack Dev&quot;</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-red-400">List&lt;String&gt;</span> stack ={" "}
                                        <span className="text-yellow-400">List.of</span>(
                                    </p>
                                    <p className="pl-8 text-green-400">
                                        &quot;Java 21&quot;, &quot;Spring Boot 3&quot;, &quot;Next.js 15&quot;,
                                    </p>
                                    <p className="pl-8 text-green-400">
                                        &quot;PostgreSQL&quot;, &quot;Docker&quot;
                                    </p>
                                    <p className="pl-4">),</p>
                                    <p className="pl-4">
                                        <span className="text-red-400">String</span> education ={" "}
                                        <span className="text-green-400">&quot;Pós Eng. Software (Estácio)&quot;</span>,
                                    </p>
                                    <p className="pl-4">
                                        <span className="text-red-400">String</span> focus ={" "}
                                        <span className="text-green-400">&quot;APIs &amp; Arquitetura Limpa&quot;</span>
                                    </p>
                                    <p>) &#123;&#125;</p>
                                </div>
                            ) : (
                                <div className="space-y-1 text-gray-400">
                                    <p>
                                        <span className="text-purple-400">const</span>{" "}
                                        <span className="text-blue-400">developer</span>:{" "}
                                        <span className="text-yellow-400">FullStackEngineer</span> = &#123;
                                    </p>
                                    <p className="pl-4">
                                        name: <span className="text-green-400">&quot;Paulo Roberto A. Gomes&quot;</span>,
                                    </p>
                                    <p className="pl-4">
                                        role: <span className="text-green-400">&quot;Full-Stack Software Engineer&quot;</span>,
                                    </p>
                                    <p className="pl-4">
                                        backend: <span className="text-yellow-400">[&quot;Java 21&quot;, &quot;Spring Boot 3&quot;, &quot;Docker&quot;]</span>,
                                    </p>
                                    <p className="pl-4">
                                        frontend: <span className="text-yellow-400">[&quot;Next.js 15&quot;, &quot;React&quot;, &quot;TypeScript&quot;]</span>,
                                    </p>
                                    <p className="pl-4">
                                        database: <span className="text-yellow-400">[&quot;Oracle SQL&quot;, &quot;PostgreSQL&quot;]</span>,
                                    </p>
                                    <p className="pl-4">
                                        status: <span className="text-green-400">&quot;Open for opportunities&quot;</span>
                                    </p>
                                    <p>&#125;;</p>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
