"use client";

import { useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    Calendar,
    Layers,
    CheckCircle2,
    Cpu,
    Database,
    Cloud,
    ShieldAlert,
    ArrowRight,
    Sparkles,
    Lock,
    Clock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { projectsData } from "@/lib/data";

interface ProjectDetailViewProps {
    slug: string;
}

export function ProjectDetailView({ slug }: ProjectDetailViewProps) {
    const { language } = useLanguage();

    const projectList = projectsData[language] || projectsData.pt;
    const projectIndex = projectList.findIndex((p) => p.slug === slug);
    const project = projectIndex !== -1 ? projectList[projectIndex] : projectList[0];

    const prevProject = projectIndex > 0 ? projectList[projectIndex - 1] : null;
    const nextProject =
        projectIndex < projectList.length - 1 ? projectList[projectIndex + 1] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const t = useMemo(() => {
        if (language === "en") {
            return {
                backToProjects: "Back to Projects",
                liveDemo: "Live Demo",
                viewCode: "Source Code",
                privateRepo: "Private Repository",
                privateRepoBadge: "Proprietary Code",
                privateRepoNote: "Proprietary Codebase (Private Repository)",
                overviewTitle: "Overview",
                problemTitle: "The Problem",
                solutionTitle: "Engineering Solution",
                featuresTitle: "Key Features",
                architectureTitle: "System Architecture",
                challengesTitle: "Technical Challenges & Solutions",
                techStackTitle: "Technologies",
                frontend: "Frontend",
                backend: "Backend & API",
                database: "Database",
                devops: "DevOps & Testing",
                ctaTitle: "Explore the Project in Action",
                ctaSubtitle: project.isPrivate
                    ? "Test the live production deployment online or explore the complete system architecture in this case study."
                    : "Test the live deployment or inspect the clean, well-architected codebase on GitHub.",
                prevProject: "Previous Project",
                nextProject: "Next Project",
            };
        }
        return {
            backToProjects: "Voltar para Projetos",
            liveDemo: "Acessar Deploy",
            viewCode: "Ver no GitHub",
            privateRepo: "Repositório Privado",
            privateRepoBadge: "Código Proprietário",
            privateRepoNote: "Código Proprietário (Repositório Privado)",
            overviewTitle: "Visão Geral",
            problemTitle: "O Problema",
            solutionTitle: "A Solução de Engenharia",
            featuresTitle: "Principais Recursos",
            architectureTitle: "Arquitetura do Sistema",
            challengesTitle: "Desafios Técnicos & Soluções",
            techStackTitle: "Tecnologias Utilizadas",
            frontend: "Interface / Frontend",
            backend: "Back-end & Regras de Negócio",
            database: "Banco de Dados & Persistência",
            devops: "DevOps, Testes & Deploy",
            ctaTitle: "Experimente a Aplicação na Prática",
            ctaSubtitle: project.isPrivate
                ? "Acesse a aplicação em produção online ou explore todos os detalhes técnicos e arquitetura neste estudo de caso."
                : "Acesse a versão em produção online ou explore o código-fonte e arquitetura no repositório oficial.",
            prevProject: "Projeto Anterior",
            nextProject: "Próximo Projeto",
        };
    }, [language, project.isPrivate]);

    return (
        <article className="min-h-screen bg-[#12131a] text-white pt-24 pb-14 sm:pb-18 px-4 md:px-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-[50%] -right-20 w-[500px] h-[450px] bg-white/[0.02] rounded-full blur-[170px] pointer-events-none -z-10" />
            <div className="absolute top-[80%] -left-20 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" />

            <div className="container mx-auto max-w-5xl">
                {/* Top Nav Bar & Action Links */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10"
                >
                    <Link
                        href="/#projetos"
                        className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group py-1"
                    >
                        <ArrowLeft
                            size={18}
                            className="transition-transform duration-200 group-hover:-translate-x-1 text-zinc-400 group-hover:text-white"
                        />
                        <span>{t.backToProjects}</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-sm font-medium transition-all active:scale-95 shadow-sm"
                            >
                                <Github size={18} />
                                <span>{t.viewCode}</span>
                            </a>
                        )}

                        {project.isPrivate && (
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-xs font-medium">
                                <Lock size={14} className="text-amber-400" />
                                <span>{t.privateRepo}</span>
                            </span>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-black text-sm font-semibold transition-all active:scale-95 shadow-lg"
                            >
                                <ExternalLink size={18} />
                                <span>{t.liveDemo}</span>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Project Header & Hero */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-6 mb-12"
                >
                    <div className="flex flex-wrap items-center gap-3">
                        {project.featured && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-semibold">
                                <Sparkles size={12} />
                                Projeto em Destaque
                            </span>
                        )}

                        {project.isPrivate && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-medium">
                                <Lock size={12} />
                                {t.privateRepoBadge}
                            </span>
                        )}

                        {project.releaseYear && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10 text-xs font-mono">
                                <Calendar size={12} />
                                {project.releaseYear}
                            </span>
                        )}

                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 text-xs uppercase tracking-wider font-medium font-mono">
                            <Layers size={12} />
                            {project.category}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
                        {project.title}
                    </h1>

                    {project.tagline && (
                        <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-snug">
                            {project.tagline}
                        </p>
                    )}

                    <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-4xl">
                        {project.overview}
                    </p>

                    {/* Tag Cloud */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs sm:text-sm font-mono px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-300 border border-white/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Cold Start Notice Banner (Free Tier Cloud Hosting) */}
                    {project.coldStartNotice && (
                        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 text-zinc-300 backdrop-blur-xl shadow-sm flex items-start gap-3.5 mt-2">
                            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                                <Clock size={16} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 block">
                                    {language === "pt" ? "Aviso de Inicialização (Cold Start)" : "Server Cold Start Notice"}
                                </span>
                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                    {project.coldStartNotice}
                                </p>
                            </div>
                        </div>
                    )}
                </motion.header>

                {/* Main Hero Image Screen */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative w-full h-64 sm:h-96 md:h-[480px] rounded-2xl overflow-hidden border border-white/10 bg-[#181a24] shadow-2xl mb-16"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12131a]/80 via-transparent to-transparent pointer-events-none" />
                </motion.div>

                {/* Detailed Technical Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Left Column: Problem, Solution & Features (2 cols on lg) */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Problem Section */}
                        <section className="p-7 sm:p-8 rounded-2xl bg-[#181a24]/90 border border-white/10 space-y-4">
                            <div className="flex items-center gap-2.5 text-red-400 font-semibold text-lg">
                                <ShieldAlert size={22} />
                                <h2>{t.problemTitle}</h2>
                            </div>
                            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                                {project.problem}
                            </p>
                        </section>

                        {/* Solution Section */}
                        <section className="p-7 sm:p-8 rounded-2xl bg-[#181a24]/90 border border-white/10 space-y-4">
                            <div className="flex items-center gap-2.5 text-zinc-100 font-semibold text-lg">
                                <Cpu size={22} />
                                <h2>{t.solutionTitle}</h2>
                            </div>
                            <p className="text-zinc-300 leading-relaxed text-base sm:text-lg">
                                {project.solution}
                            </p>
                        </section>

                        {/* Key Features Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">
                                {t.featuresTitle}
                            </h2>
                            <div className="grid grid-cols-1 gap-3.5">
                                {project.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-3.5 p-4 rounded-xl bg-white/[0.03] border border-white/5"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="text-emerald-400 shrink-0 mt-0.5"
                                        />
                                        <span className="text-zinc-200 text-sm sm:text-base leading-relaxed">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Challenges and Solutions */}
                        {project.challenges && project.challenges.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-2xl font-bold text-white tracking-tight">
                                    {t.challengesTitle}
                                </h2>
                                <div className="space-y-4">
                                    {project.challenges.map((challenge, idx) => (
                                        <div
                                            key={idx}
                                            className="p-6 rounded-xl bg-[#181a24]/90 border border-white/10 space-y-2 hover:border-white/20 transition-colors"
                                        >
                                            <h3 className="text-base sm:text-lg font-bold text-zinc-100 flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-zinc-400" />
                                                {challenge.title}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed pl-4">
                                                {challenge.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Architecture & Stack Specification */}
                    <div className="space-y-8">
                        {/* Architecture Box */}
                        {project.architecture && (
                            <section className="p-6 sm:p-7 rounded-2xl bg-[#181a24]/90 border border-white/10 space-y-6 sticky top-24">
                                <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                    <Layers className="text-zinc-300" size={20} />
                                    <span>{t.architectureTitle}</span>
                                </h2>

                                <div className="space-y-5">
                                    {project.architecture.frontend && (
                                        <div className="space-y-1.5 pb-4 border-b border-white/5">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 font-mono">
                                                <Cpu size={14} className="text-zinc-300" />
                                                {t.frontend}
                                            </span>
                                            <p className="text-sm font-medium text-zinc-200">
                                                {project.architecture.frontend}
                                            </p>
                                        </div>
                                    )}

                                    {project.architecture.backend && (
                                        <div className="space-y-1.5 pb-4 border-b border-white/5">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 font-mono">
                                                <Database size={14} className="text-zinc-300" />
                                                {t.backend}
                                            </span>
                                            <p className="text-sm font-medium text-zinc-200">
                                                {project.architecture.backend}
                                            </p>
                                        </div>
                                    )}

                                    {project.architecture.database && (
                                        <div className="space-y-1.5 pb-4 border-b border-white/5">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 font-mono">
                                                <Database size={14} className="text-zinc-300" />
                                                {t.database}
                                            </span>
                                            <p className="text-sm font-medium text-zinc-200">
                                                {project.architecture.database}
                                            </p>
                                        </div>
                                    )}

                                    {project.architecture.devops && (
                                        <div className="space-y-1.5">
                                            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 font-mono">
                                                <Cloud size={14} className="text-zinc-300" />
                                                {t.devops}
                                            </span>
                                            <p className="text-sm font-medium text-zinc-200">
                                                {project.architecture.devops}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {/* Quick Links within sidebar */}
                                <div className="pt-2 flex flex-col gap-2.5">
                                    {project.demo && (
                                        <>
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm transition-all active:scale-95 shadow-md"
                                            >
                                                <ExternalLink size={16} />
                                                <span>{t.liveDemo}</span>
                                            </a>
                                            {project.coldStartNotice && (
                                                <span className="text-[11px] text-amber-400/90 font-mono text-center flex items-center justify-center gap-1.5 px-2 -mt-1">
                                                    <Clock size={12} className="shrink-0" />
                                                    <span>{language === "pt" ? "Cold start: 30s – 120s" : "Cold start: 30s – 120s"}</span>
                                                </span>
                                            )}
                                        </>
                                    )}

                                    {project.github ? (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white font-medium text-sm transition-all active:scale-95"
                                        >
                                            <Github size={16} />
                                            <span>{t.viewCode}</span>
                                        </a>
                                    ) : (
                                        <div className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/5 border border-white/5 text-zinc-400 text-xs text-center font-medium">
                                            <Lock size={14} className="text-amber-400 shrink-0" />
                                            <span>{t.privateRepoNote}</span>
                                        </div>
                                    )}
                                </div>
                            </section>
                        )}
                    </div>
                </div>

                {/* Bottom Call to Action Box */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-[#181a24] border border-white/10 text-center space-y-6 mb-16 relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/[0.02] rounded-3xl pointer-events-none" />

                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                        {t.ctaTitle}
                    </h2>
                    <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                        {t.ctaSubtitle}
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-semibold text-sm sm:text-base transition-all active:scale-95 shadow-xl"
                            >
                                <ExternalLink size={18} />
                                <span>{t.liveDemo}</span>
                            </a>
                        )}

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm sm:text-base transition-all active:scale-95"
                            >
                                <Github size={18} />
                                <span>{t.viewCode}</span>
                            </a>
                        )}
                    </div>

                    {project.coldStartNotice && (
                        <p className="text-xs text-amber-400/90 font-mono flex items-center justify-center gap-1.5 pt-1">
                            <Clock size={13} className="shrink-0" />
                            <span>{language === "pt" ? "Nota: Back-End no Render Free Tier (pode levar 30s–120s na primeira requisição)" : "Note: Back-End on Render Free Tier (may take 30s–120s on initial cold start)"}</span>
                        </p>
                    )}
                </motion.section>

                {/* Prev / Next Project Navigation Bar */}
                <nav className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10">
                    {prevProject ? (
                        <Link
                            href={`/projetos/${prevProject.slug}`}
                            className="group p-5 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-1"
                        >
                            <span className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center gap-1">
                                <ArrowLeft size={12} /> {t.prevProject}
                            </span>
                            <span className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors">
                                {prevProject.title}
                            </span>
                        </Link>
                    ) : <div />}

                    {nextProject ? (
                        <Link
                            href={`/projetos/${nextProject.slug}`}
                            className="group p-5 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-all flex flex-col gap-1 sm:text-right"
                        >
                            <span className="text-xs font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors flex items-center sm:justify-end gap-1">
                                {t.nextProject} <ArrowRight size={12} />
                            </span>
                            <span className="text-base font-bold text-zinc-200 group-hover:text-white transition-colors">
                                {nextProject.title}
                            </span>
                        </Link>
                    ) : <div />}
                </nav>
            </div>
        </article>
    );
}
