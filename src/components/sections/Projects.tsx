"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectListRow } from "@/components/ui/ProjectListRow";
import { ProjectDetail } from "@/types/project";

type ViewMode = "grid" | "list";

export function Projects() {
    const { dict, language } = useLanguage();
    const [viewMode, setViewMode] = useState<ViewMode>("grid");

    const projects: ProjectDetail[] = dict.projects.items;

    return (
        <section
            id="projetos"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute top-1/3 -left-28 w-96 h-96 bg-white/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="container mx-auto max-w-5xl">
                {/* Section Header with Integrated View Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/5"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                            {language === "pt" ? "// portfólio de engenharia" : "// engineering projects"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5 mb-2">
                            {dict.projects.title}{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
                                {dict.projects.subtitle}
                            </span>
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
                            {dict.projects.description}
                        </p>
                    </div>

                    {/* View Mode Toggle (Grid / List) */}
                    <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
                        <span className="text-xs text-zinc-500 font-mono">
                            {projects.length} {language === "pt" ? "projetos" : "projects"}
                        </span>
                        <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                                    viewMode === "grid"
                                        ? "bg-white text-black shadow-sm"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                aria-label="Visualização em Grade"
                                title="Visualização em Grade"
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-1.5 rounded-lg transition-all duration-200 cursor-pointer ${
                                    viewMode === "list"
                                        ? "bg-white text-black shadow-sm"
                                        : "text-zinc-400 hover:text-white"
                                }`}
                                aria-label="Visualização em Lista Técnica"
                                title="Visualização em Lista Técnica"
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Display Area */}
                <AnimatePresence mode="popLayout">
                    {viewMode === "grid" ? (
                        <motion.div
                            key="grid-view"
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"
                        >
                            {projects.map((project, index) => (
                                <ProjectCard
                                    key={project.slug}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            key="list-view"
                            layout
                            className="flex flex-col gap-3"
                        >
                            {projects.map((project, index) => (
                                <ProjectListRow
                                    key={project.slug}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom Action / View More Repositories */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-10 text-center"
                >
                    <a
                        href="https://github.com/paulorag?tab=repositories"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95"
                    >
                        <Github size={16} />
                        <span>Ver mais projetos no GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
