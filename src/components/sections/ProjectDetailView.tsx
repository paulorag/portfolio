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
    LayoutGrid,
    Flame,
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
                problemTitle: "The Business Challenge",
                solutionTitle: "Engineering Solution",
                featuresTitle: "Core Features & Capabilities",
                architectureTitle: "System Architecture & Stack Blueprint",
                galleryTitle: "Interface & Screen Showcase",
                gallerySubtitle:
                    "Explore the complete user journey: customer catalog, Kitchen Display System (KDS), analytics dashboard, and mobile-first backoffice.",
                challengesTitle: "Technical Challenges & Engineering Decisions",
                frontend: "Frontend & UI",
                backend: "Backend & Business Logic",
                database: "Database & Persistence",
                devops: "DevOps, CI/CD & Testing",
                ctaTitle: "Experience the Application Live",
                ctaSubtitle: project.isPrivate
                    ? "Test the live production deployment online or explore the complete system architecture in this case study."
                    : "Test the live deployment or inspect the clean, well-architected codebase on GitHub.",
                prevProject: "Previous Project",
                nextProject: "Next Project",
                coldStartTitle: "Server Cold Start Notice",
                coldStartBadge: "Cold Start: 30s – 120s",
                coldStartCtaNote: "Note: Back-End on Render Free Tier (may take 30s–120s on initial cold start)",
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
            problemTitle: "O Desafio de Negócio",
            solutionTitle: "A Solução de Engenharia",
            featuresTitle: "Principais Recursos & Regras de Negócio",
            architectureTitle: "Blueprint de Arquitetura & Stack Técnica",
            galleryTitle: "Galeria de Telas & Fluxos do Sistema",
            gallerySubtitle:
                "Explore a jornada completa da aplicação: cardápio do cliente, esteira de comandas da cozinha (KDS), dashboard de analytics e painel administrativo mobile-first.",
            challengesTitle: "Desafios de Engenharia & Decisões Técnicas",
            frontend: "Interface / Frontend",
            backend: "Back-End & Regras de Negócio",
            database: "Banco de Dados & Persistência",
            devops: "DevOps, Testes & Deploy",
            ctaTitle: "Experimente a Aplicação na Prática",
            ctaSubtitle: project.isPrivate
                ? "Acesse a aplicação em produção online ou explore todos os detalhes técnicos e arquitetura neste estudo de caso."
                : "Acesse a versão em produção online ou explore o código-fonte e arquitetura no repositório oficial.",
            prevProject: "Projeto Anterior",
            nextProject: "Próximo Projeto",
            coldStartTitle: "Aviso de Inicialização (Cold Start)",
            coldStartBadge: "Cold Start: 30s – 120s",
            coldStartCtaNote: "Nota: Back-End no Render Free Tier (pode levar 30s–120s na primeira requisição)",
        };
    }, [language, project.isPrivate]);

    return (
        <article className="min-h-screen bg-[#12131a] text-white pt-24 pb-14 sm:pb-18 px-4 md:px-6 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" />
            <div className="absolute top-[40%] -right-20 w-[500px] h-[450px] bg-white/[0.02] rounded-full blur-[170px] pointer-events-none -z-10" />
            <div className="absolute top-[75%] -left-20 w-[450px] h-[450px] bg-white/[0.02] rounded-full blur-[160px] pointer-events-none -z-10" />

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

                {/* 1. Executive Hero Header */}
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
                                {language === "pt" ? "Projeto em Destaque" : "Featured Project"}
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

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
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
                        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/[0.06] border border-amber-500/20 text-zinc-300 backdrop-blur-xl shadow-sm flex items-start gap-3.5 mt-4">
                            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                                <Clock size={16} />
                            </div>
                            <div className="space-y-1">
                                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 block">
                                    {t.coldStartTitle}
                                </span>
                                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                                    {project.coldStartNotice}
                                </p>
                            </div>
                        </div>
                    )}
                </motion.header>

                {/* 2. Main Hero Image Screen */}
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

                {/* 3. Challenge vs. Solution (Split 2-Columns Side-by-Side) */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
                >
                    {/* The Business Challenge */}
                    <div className="p-7 sm:p-8 rounded-2xl bg-[#181a24]/90 border border-white/10 space-y-4 hover:border-white/20 transition-colors flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2.5 text-zinc-100 font-semibold text-lg">
                                <div className="p-2 rounded-xl bg-red-500/10 text-red-400 shrink-0">
                                    <ShieldAlert size={20} />
                                </div>
                                <h2 className="text-white font-bold">{t.problemTitle}</h2>
                            </div>
                            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                                {project.problem}
                            </p>
                        </div>
                    </div>

                    {/* Engineering Solution */}
                    <div className="p-7 sm:p-8 rounded-2xl bg-[#181a24]/90 border border-white/10 space-y-4 hover:border-white/20 transition-colors flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2.5 text-zinc-100 font-semibold text-lg">
                                <div className="p-2 rounded-xl bg-white/10 text-white shrink-0">
                                    <Cpu size={20} />
                                </div>
                                <h2 className="text-white font-bold">{t.solutionTitle}</h2>
                            </div>
                            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                                {project.solution}
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 4. Interactive Interface & Screenshots Showcase Gallery */}
                {project.gallery && project.gallery.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 space-y-8"
                    >
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                                <LayoutGrid size={24} className="text-zinc-300" />
                                <span>{t.galleryTitle}</span>
                            </h2>
                            <p className="text-zinc-400 text-sm sm:text-base max-w-3xl leading-relaxed">
                                {t.gallerySubtitle}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.gallery.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="group rounded-2xl bg-[#181a24]/90 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
                                >
                                    <div className="relative w-full h-56 sm:h-64 md:h-72 bg-[#12131a] overflow-hidden border-b border-white/10">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#181a24]/80 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity pointer-events-none" />
                                    </div>
                                    <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                                        <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zinc-100 transition-colors flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                            <span>{item.title}</span>
                                        </h3>
                                        {item.description && (
                                            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 5. System Architecture & Stack Blueprint (4-Quadrant Grid) */}
                {project.architecture && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 space-y-6"
                    >
                        <div className="space-y-2">
                            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3">
                                <Layers size={24} className="text-zinc-300" />
                                <span>{t.architectureTitle}</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {/* Frontend Quadrant */}
                            {project.architecture.frontend && (
                                <div className="p-6 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-colors space-y-3">
                                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit text-zinc-300">
                                        <Cpu size={18} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono block">
                                            {t.frontend}
                                        </span>
                                        <p className="text-sm font-medium text-zinc-200 mt-1 leading-relaxed">
                                            {project.architecture.frontend}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Backend Quadrant */}
                            {project.architecture.backend && (
                                <div className="p-6 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-colors space-y-3">
                                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit text-zinc-300">
                                        <Database size={18} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono block">
                                            {t.backend}
                                        </span>
                                        <p className="text-sm font-medium text-zinc-200 mt-1 leading-relaxed">
                                            {project.architecture.backend}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Database Quadrant */}
                            {project.architecture.database && (
                                <div className="p-6 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-colors space-y-3">
                                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit text-zinc-300">
                                        <Database size={18} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono block">
                                            {t.database}
                                        </span>
                                        <p className="text-sm font-medium text-zinc-200 mt-1 leading-relaxed">
                                            {project.architecture.database}
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* DevOps & Testing Quadrant */}
                            {project.architecture.devops && (
                                <div className="p-6 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-colors space-y-3">
                                    <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 w-fit text-zinc-300">
                                        <Cloud size={18} />
                                    </div>
                                    <div>
                                        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono block">
                                            {t.devops}
                                        </span>
                                        <p className="text-sm font-medium text-zinc-200 mt-1 leading-relaxed">
                                            {project.architecture.devops}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.section>
                )}

                {/* 6. Core Features & Capabilities */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 space-y-6"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                        <CheckCircle2 size={24} className="text-emerald-400" />
                        <span>{t.featuresTitle}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="flex items-start gap-3.5 p-5 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-colors"
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
                </motion.section>

                {/* 7. Technical Challenges & Engineering Trade-offs */}
                {project.challenges && project.challenges.length > 0 && (
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 space-y-6"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                            <Flame size={24} className="text-zinc-300" />
                            <span>{t.challengesTitle}</span>
                        </h2>

                        <div className="grid grid-cols-1 gap-4">
                            {project.challenges.map((challenge, idx) => (
                                <div
                                    key={idx}
                                    className="p-6 sm:p-7 rounded-2xl bg-[#181a24]/90 border border-white/10 space-y-2.5 hover:border-white/20 transition-colors"
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2.5">
                                        <span className="w-2 h-2 rounded-full bg-zinc-400 shrink-0" />
                                        <span>{challenge.title}</span>
                                    </h3>
                                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed pl-4.5">
                                        {challenge.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                {/* 8. Bottom Call to Action Box */}
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

                        {project.github ? (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium text-sm sm:text-base transition-all active:scale-95"
                            >
                                <Github size={18} />
                                <span>{t.viewCode}</span>
                            </a>
                        ) : (
                            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-400 text-sm font-medium">
                                <Lock size={16} className="text-amber-400 shrink-0" />
                                <span>{t.privateRepoNote}</span>
                            </div>
                        )}
                    </div>

                    {project.coldStartNotice && (
                        <p className="text-xs text-amber-400/90 font-mono flex items-center justify-center gap-1.5 pt-1">
                            <Clock size={13} className="shrink-0" />
                            <span>{t.coldStartCtaNote}</span>
                        </p>
                    )}
                </motion.section>

                {/* 9. Prev / Next Project Navigation Bar */}
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
