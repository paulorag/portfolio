"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict, language } = useLanguage();

    const skillCategories = [
        {
            icon: <Server className="w-4 h-4 text-blue-400" />,
            title: dict.about.stackBackend,
            techs: [
                "Java 21",
                "Spring Boot 3",
                "Spring Security",
                "APIs RESTful",
                "SQL (Oracle)",
                "PostgreSQL",
                "Tuning de Queries",
                "Node.js",
            ],
        },
        {
            icon: <Layout className="w-4 h-4 text-blue-400" />,
            title: dict.about.stackFrontend,
            techs: [
                "Next.js 15",
                "React.js",
                "TypeScript",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "Recharts",
                "HTML5 / CSS3",
            ],
        },
        {
            icon: <Database className="w-4 h-4 text-blue-400" />,
            title: dict.about.stackData,
            techs: [
                "Docker",
                "CI/CD",
                "JUnit & Mockito",
                "Cypress & Jest",
                "Git & GitHub",
                "Datadog / Grafana",
                "Scrum / Kanban",
            ],
        },
    ];

    return (
        <section
            id="sobre"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-10"
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                        {language === "pt" ? "// resumo profissional" : "// professional profile"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5">
                        {dict.about.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            {dict.about.me}
                        </span>
                    </h2>
                </motion.div>

                {/* 2-Column Balanced Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                    {/* Left: Bio Description (without redundant indicator boxes) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                        className="lg:col-span-6 space-y-5 text-gray-300 text-base sm:text-lg leading-relaxed text-left"
                    >
                        <p>{dict.about.description1}</p>
                        <p>{dict.about.description2}</p>
                        <p>{dict.about.description3}</p>
                    </motion.div>

                    {/* Right: Technical Stack Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="lg:col-span-6 space-y-4"
                    >
                        {skillCategories.map((category, index) => (
                            <div
                                key={index}
                                className="p-5 rounded-2xl border border-white/10 bg-[#111] hover:border-blue-500/30 transition-all duration-300 shadow-sm"
                            >
                                <div className="flex items-center gap-2.5 mb-3">
                                    <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-bold text-sm sm:text-base text-gray-100">
                                        {category.title}
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {category.techs.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2.5 py-1 text-xs rounded-lg font-medium bg-white/5 text-gray-300 border border-white/5 hover:border-blue-500/30 hover:text-white transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
