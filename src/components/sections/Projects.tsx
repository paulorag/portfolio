"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutGrid, List, Github } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectListRow } from "@/components/ui/ProjectListRow";
import { ProjectDetail } from "@/types/project";

type FilterCategory = "all" | "fullstack" | "backend" | "frontend";
type ViewMode = "grid" | "list";

export function Projects() {
    const { dict, language } = useLanguage();
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
    const [viewMode, setViewMode] = useState<ViewMode>("grid");

    const projects: ProjectDetail[] = dict.projects.items;

    const filteredProjects = useMemo(() => {
        if (activeFilter === "all") return projects;
        if (activeFilter === "fullstack") {
            return projects.filter((p) => p.category === "fullstack");
        }
        if (activeFilter === "backend") {
            return projects.filter(
                (p) =>
                    p.tags.some((t) =>
                        ["Java", "Java 21", "Spring Boot", "Spring Boot 3", "Spring Security", "Jsoup", "SQL", "Oracle SQL"].includes(t)
                    ) || p.category === "backend"
            );
        }
        if (activeFilter === "frontend") {
            return projects.filter(
                (p) =>
                    p.tags.some((t) =>
                        ["React", "Next.js", "Next.js 15", "JavaScript", "HTML5", "DOM API"].includes(t)
                    ) || p.category === "frontend"
            );
        }
        return projects;
    }, [projects, activeFilter]);

    const filterOptions: { id: FilterCategory; label: string }[] = [
        { id: "all", label: dict.projects.filterAll || "Todos" },
        { id: "fullstack", label: dict.projects.filterFullstack || "Full-Stack" },
        { id: "backend", label: dict.projects.filterBackend || "Java & Spring" },
        { id: "frontend", label: dict.projects.filterFrontend || "Front-end" },
    ];

    return (
        <section
            id="projetos"
            className="py-16 sm:py-20 px-4 md:px-6 bg-[#0a0a0a] scroll-mt-28 relative overflow-hidden"
        >
            <div className="container mx-auto max-w-5xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mb-8"
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                        {language === "pt" ? "// portfólio de engenharia" : "// engineering projects"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5 mb-2.5">
                        {dict.projects.title}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            {dict.projects.subtitle}
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">
                        {dict.projects.description}
                    </p>
                </motion.div>

                {/* Filter and View Controls */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-4 border-b border-white/5">
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-xl bg-white/5 border border-white/5 w-full sm:w-auto">
                        {filterOptions.map((tab) => {
                            const isSelected = activeFilter === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveFilter(tab.id)}
                                    className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
                                        isSelected
                                            ? "text-white bg-blue-600 shadow-sm shadow-blue-600/30 font-semibold"
                                            : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* View Mode Toggle (Grid / List) */}
                    <div className="flex items-center gap-2 self-end sm:self-center">
                        <span className="text-xs text-gray-500 font-mono hidden md:inline">
                            {filteredProjects.length} {filteredProjects.length === 1 ? "projeto" : "projetos"}
                        </span>
                        <div className="flex items-center p-1 rounded-lg bg-white/5 border border-white/5">
                            <button
                                onClick={() => setViewMode("grid")}
                                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                    viewMode === "grid"
                                        ? "bg-white/10 text-blue-400"
                                        : "text-gray-500 hover:text-gray-300"
                                }`}
                                aria-label="Visualização em Grade"
                                title="Visualização em Grade"
                            >
                                <LayoutGrid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode("list")}
                                className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                    viewMode === "list"
                                        ? "bg-white/10 text-blue-400"
                                        : "text-gray-500 hover:text-gray-300"
                                }`}
                                aria-label="Visualização em Lista Técnica"
                                title="Visualização em Lista Técnica"
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Projects Display Area in 3-Column Compact Grid */}
                <AnimatePresence mode="popLayout">
                    {viewMode === "grid" ? (
                        <motion.div
                            key="grid-view"
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {filteredProjects.map((project, index) => (
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
                            {filteredProjects.map((project, index) => (
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-white font-medium text-xs sm:text-sm transition-all duration-200 active:scale-95"
                    >
                        <Github size={16} />
                        <span>Ver mais projetos no GitHub</span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
