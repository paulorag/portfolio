"use client";

import { motion } from "framer-motion";
import { Database, Layout, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
    const { dict } = useLanguage();

    const skills = [
        {
            icon: <Server className="w-6 h-6 text-red-500" />,
            title: dict.about.stackBackend,
            techs: ["Java", "Spring Boot", "Node.js", "API REST", "JUnit"],
        },
        {
            icon: <Layout className="w-6 h-6 text-blue-500" />,
            title: dict.about.stackFrontend,
            techs: [
                "React.js",
                "Next.js",
                "JavaScript",
                "HTML5/CSS3",
                "Tailwind",
            ],
        },
        {
            icon: <Database className="w-6 h-6 text-purple-500" />,
            title: dict.about.stackData,
            techs: ["Oracle SQL", "PostgreSQL", "Docker", "Git", "CI/CD"],
        },
    ];

    return (
        <section
            id="sobre"
            className="py-20 px-4 md:px-6 scroll-mt-28 bg-[#0a0a0a]"
        >
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {dict.about.title}{" "}
                            <span className="text-blue-600">
                                {dict.about.me}
                            </span>
                        </h2>

                        <div className="space-y-4 text-gray-400 text-lg leading-relaxed text-justify">
                            <p>{dict.about.description1}</p>
                            <p>{dict.about.description2}</p>
                            <p>{dict.about.description3}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold mb-4">
                            {dict.about.stackTitle}
                        </h3>

                        <div className="grid gap-4">
                            {skills.map((category, index) => (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-colors shadow-sm"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 rounded-lg bg-[#0a0a0a] border border-white/10">
                                            {category.icon}
                                        </div>
                                        <h4 className="font-semibold text-lg text-gray-200">
                                            {category.title}
                                        </h4>
                                    </div>

                                    <div className="flex flex-wrap gap-2">
                                        {category.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-sm rounded-full bg-blue-500/10 text-blue-500 font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
