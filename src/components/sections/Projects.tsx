"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ExternalLink,
    Github,
    Lock,
    ChevronLeft,
    ChevronRight,
    Terminal,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectDetail } from "@/types/project";

export function Projects() {
    const { dict, language } = useLanguage();
    const projects: ProjectDetail[] = dict.projects.items;
    const [activeIndex, setActiveIndex] = useState(0);

    const activeProject = projects[activeIndex] || projects[0];
    const visibleTags = activeProject.tags.slice(0, 7);
    const extraTagsCount = activeProject.tags.length - visibleTags.length;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    };

    return (
        <section
            id="projetos"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute top-1/3 -left-28 w-96 h-96 bg-white/2 rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="container mx-auto max-w-5xl">
                {/* Section Header with Console Counter & Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-white/5"
                >
                    <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                            {language === "pt"
                                ? "// portfólio de engenharia"
                                : "// engineering projects"}
                        </span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5 mb-2">
                            {dict.projects.title}{" "}
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-100 to-zinc-400">
                                {dict.projects.subtitle}
                            </span>
                        </h2>
                        <p className="text-zinc-400 max-w-xl text-sm sm:text-base leading-relaxed">
                            {dict.projects.description}
                        </p>
                    </div>

                    {/* Interactive Navigation & GitHub Shortcut */}
                    <div className="flex items-center gap-3 self-start sm:self-end shrink-0">
                        <a
                            href="https://github.com/paulorag?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/4 hover:bg-white/8 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs font-medium transition-all"
                        >
                            <Github size={14} />
                            <span>GitHub</span>
                        </a>

                        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/4 border border-white/10">
                            <button
                                type="button"
                                onClick={handlePrev}
                                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/8 transition-colors cursor-pointer"
                                aria-label={
                                    language === "pt"
                                        ? "Projeto anterior"
                                        : "Previous project"
                                }
                            >
                                <ChevronLeft size={15} />
                            </button>
                            <span className="text-xs font-mono font-semibold text-zinc-300 px-2 select-none">
                                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                                {String(projects.length).padStart(2, "0")}
                            </span>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/8 transition-colors cursor-pointer"
                                aria-label={
                                    language === "pt"
                                        ? "Próximo projeto"
                                        : "Next project"
                                }
                            >
                                <ChevronRight size={15} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile & Tablet Horizontal Project Selector Pills */}
                <div className="flex lg:hidden items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
                    {projects.map((project, idx) => {
                        const isSelected = idx === activeIndex;
                        return (
                            <button
                                key={project.slug}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                                    isSelected
                                        ? "bg-white text-black border-white font-semibold shadow-md"
                                        : "bg-[#181a24]/90 text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
                                }`}
                            >
                                <span
                                    className={`font-mono text-[11px] ${
                                        isSelected ? "text-zinc-700" : "text-zinc-500"
                                    }`}
                                >
                                    {String(idx + 1).padStart(2, "0")}
                                </span>
                                <span>{project.title}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Main Split-View Interactive Showcase Console */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                    {/* Left Column: Compact Project Selector List (Desktop) */}
                    <div className="hidden lg:flex lg:col-span-5 flex-col justify-between gap-2.5">
                        {projects.map((project, idx) => {
                            const isSelected = idx === activeIndex;
                            return (
                                <button
                                    key={project.slug}
                                    type="button"
                                    onClick={() => setActiveIndex(idx)}
                                    className={`group relative w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden ${
                                        isSelected
                                            ? "bg-[#1c1f2e] border-white/25 shadow-lg"
                                            : "bg-[#181a24]/60 border-white/8 hover:bg-[#181a24] hover:border-white/15"
                                    }`}
                                >
                                    {/* Active Left Indicator Bar */}
                                    <div
                                        className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full transition-all duration-300 ${
                                            isSelected
                                                ? "bg-emerald-400 opacity-100"
                                                : "bg-white/20 opacity-0 group-hover:opacity-50"
                                        }`}
                                    />

                                    <div className="flex items-start justify-between gap-3 pl-2">
                                        <div className="min-w-0 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span
                                                    className={`font-mono text-xs font-semibold transition-colors ${
                                                        isSelected
                                                            ? "text-emerald-400"
                                                            : "text-zinc-500 group-hover:text-zinc-400"
                                                    }`}
                                                >
                                                    {String(idx + 1).padStart(2, "0")}.
                                                </span>
                                                <h3
                                                    className={`text-sm sm:text-base font-bold truncate transition-colors ${
                                                        isSelected
                                                            ? "text-white"
                                                            : "text-zinc-300 group-hover:text-white"
                                                    }`}
                                                >
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <p
                                                className={`text-xs line-clamp-1 transition-colors ${
                                                    isSelected
                                                        ? "text-zinc-300"
                                                        : "text-zinc-500 group-hover:text-zinc-400"
                                                }`}
                                            >
                                                {project.tagline}
                                            </p>

                                            {/* Mini Core Stack Preview */}
                                            <div className="flex flex-wrap items-center gap-1 pt-1">
                                                {project.tags.slice(0, 3).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors ${
                                                            isSelected
                                                                ? "bg-white/8 text-zinc-200 border-white/15"
                                                                : "bg-white/3 text-zinc-400 border-white/5"
                                                        }`}
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {project.tags.length > 3 && (
                                                    <span className="text-[10px] font-mono text-zinc-500 pl-0.5">
                                                        +{project.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex flex-col items-end justify-between shrink-0 self-stretch">
                                            {project.isPrivate ? (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-400">
                                                    <Lock size={9} />
                                                    <span>
                                                        {language === "pt"
                                                            ? "Privado"
                                                            : "Private"}
                                                    </span>
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/6 border border-white/12 text-[10px] font-mono text-zinc-300">
                                                    <Github size={9} />
                                                    <span>Open Source</span>
                                                </span>
                                            )}
                                            <ArrowRight
                                                size={14}
                                                className={`transition-all duration-200 ${
                                                    isSelected
                                                        ? "text-white translate-x-0.5"
                                                        : "text-zinc-600 group-hover:text-zinc-400"
                                                }`}
                                            />
                                        </div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right Column: Interactive Project Preview Stage */}
                    <div className="lg:col-span-7 flex">
                        <div className="w-full rounded-2xl bg-[#181a24]/95 border border-white/12 shadow-2xl overflow-hidden flex flex-col justify-between">
                            {/* Stage Top Window Bar */}
                            <div className="px-4 py-2.5 bg-[#14161f] border-b border-white/8 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-2 min-w-0">
                                    <div className="flex items-center gap-1.5 shrink-0">
                                        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                                    </div>
                                    <div className="flex items-center gap-1.5 pl-2 text-xs font-mono text-zinc-400 truncate">
                                        <Terminal size={12} className="text-zinc-500 shrink-0" />
                                        <span className="truncate">
                                            ~/projects/{activeProject.slug}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    {activeProject.releaseYear && (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300">
                                            {activeProject.releaseYear}
                                        </span>
                                    )}

                                    {activeProject.demo && (
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            <span>
                                                {language === "pt"
                                                    ? "Online"
                                                    : "Live"}
                                            </span>
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Animated Project Preview Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.slug}
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.22 }}
                                    className="flex flex-col grow justify-between"
                                >
                                    {/* Interactive Screenshot Canvas */}
                                    <Link
                                        href={`/projetos/${activeProject.slug}`}
                                        className="group relative block w-full h-52 sm:h-64 bg-[#0c0d14] overflow-hidden border-b border-white/8"
                                        aria-label={
                                            language === "pt"
                                                ? `Ver estudo de caso de ${activeProject.title}`
                                                : `View case study for ${activeProject.title}`
                                        }
                                    >
                                        <Image
                                            src={activeProject.image}
                                            alt={activeProject.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-103"
                                            sizes="(max-width: 1024px) 100vw, 600px"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-[#181a24] via-transparent to-black/10 opacity-70" />
                                    </Link>

                                    {/* Project Details & Action Bar */}
                                    <div className="p-5 sm:p-6 flex flex-col justify-between grow gap-4">
                                        <div className="space-y-2">
                                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                                {activeProject.title}
                                            </h3>

                                            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed line-clamp-3">
                                                {activeProject.description}
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            {/* Stack Tags */}
                                            <div className="flex flex-wrap items-center gap-1.5">
                                                {visibleTags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/4 text-zinc-300 border border-white/8"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                                {extraTagsCount > 0 && (
                                                    <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-400">
                                                        +{extraTagsCount}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Action Buttons Footer */}
                                            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-white/8">
                                                <Link
                                                    href={`/projetos/${activeProject.slug}`}
                                                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm transition-all active:scale-98 shadow-md"
                                                >
                                                    <span>{dict.projects.viewCaseStudy}</span>
                                                    <ArrowRight size={15} />
                                                </Link>

                                                <div className="flex items-center gap-2">
                                                    {activeProject.github && (
                                                        <a
                                                            href={activeProject.github}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/4 hover:bg-white/8 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-medium transition-all"
                                                        >
                                                            <Github size={15} />
                                                            <span>
                                                                {dict.projects.viewCode}
                                                            </span>
                                                        </a>
                                                    )}

                                                    {activeProject.demo && (
                                                        <a
                                                            href={activeProject.demo}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white/6 hover:bg-white/12 border border-white/15 hover:border-white/25 text-white text-xs sm:text-sm font-medium transition-all"
                                                        >
                                                            <ExternalLink size={15} />
                                                            <span>
                                                                {dict.projects.liveDemo}
                                                            </span>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
