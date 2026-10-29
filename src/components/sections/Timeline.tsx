"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    GraduationCap,
    Building2,
    Network,
    Code2,
    BookOpen,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Timeline() {
    const { language } = useLanguage();

    const experiences = [
        {
            period: language === "pt" ? "Fev. 2022 — Presente" : "Feb. 2022 — Present",
            role:
                language === "pt"
                    ? "Desenvolvedor Full Stack"
                    : "Full Stack Developer",
            institution:
                language === "pt"
                    ? "Projetos Independentes e Produtos SaaS"
                    : "Independent Projects & SaaS Products",
            icon: <Code2 className="w-4 h-4 text-zinc-300" />,
            badge: language === "pt" ? "Projetos & SaaS" : "Projects & SaaS",
            description:
                language === "pt"
                    ? "Arquitetura de APIs RESTful escaláveis em Java (Spring Boot) e Node.js (Express) e interfaces modernas com Next.js, React e SvelteKit. Modelagem e tuning em PostgreSQL (Prisma ORM), conteinerização com Docker e segurança com JWT."
                    : "Architecting scalable RESTful APIs in Java (Spring Boot) and Node.js (Express) paired with modern web apps in Next.js, React, and SvelteKit. Relational modeling and query tuning in PostgreSQL (Prisma), Docker containerization, and JWT security.",
            tags: ["Java 21", "Spring Boot 3", "Node.js", "Next.js", "React", "SvelteKit", "PostgreSQL", "Docker", "JWT"],
        },
        {
            period: language === "pt" ? "Ago. 2024 — Presente" : "Aug. 2024 — Present",
            role:
                language === "pt"
                    ? "Analista Desenvolvedor (Consultor de Sistemas)"
                    : "Developer Analyst (Systems Consultant)",
            institution: "NOXTEC",
            icon: <Building2 className="w-4 h-4 text-zinc-300" />,
            badge: language === "pt" ? "Atuação Corporativa" : "Corporate Role",
            description:
                language === "pt"
                    ? "Desenvolvimento de automações, fluxos condicionais e relatórios de KPIs clínicos. Otimização de queries críticas em Oracle SQL com CTEs (reduzindo o tempo de processamento em até 80%), depuração de tráfego web via DevTools e implantações on-site com DML seguro em produção."
                    : "Developing workflow automations, conditional logic, and clinical KPI reports. Optimizing critical Oracle SQL queries with CTEs (reducing processing time by up to 80%), debugging web traffic via DevTools, and leading on-site deployments with safe production DML.",
            tags:
                language === "pt"
                    ? ["Oracle SQL", "Tuning & CTEs", "Automação de Processos", "KPIs Clínicos", "Debugging Web", "Deploy On-Site"]
                    : ["Oracle SQL", "Query Tuning & CTEs", "Process Automation", "Clinical KPIs", "Web Debugging", "On-Site Deploy"],
        },
        {
            period: language === "pt" ? "Jan. 2023 — Ago. 2024" : "Jan. 2023 — Aug. 2024",
            role:
                language === "pt"
                    ? "Analista de Operações de TI (NOC)"
                    : "IT Operations Analyst (NOC)",
            institution: "Vert Integradora de TI",
            icon: <Network className="w-4 h-4 text-zinc-300" />,
            badge: language === "pt" ? "Missão Crítica" : "Mission Critical",
            description:
                language === "pt"
                    ? "Monitoramento de ecossistema hospitalar de alta disponibilidade e mitigação de incidentes com Datadog, Grafana e Zabbix. Análise de logs e diagnóstico de infraestrutura/redes para escalonamento N2/N3, liderando investigações de causa raiz (RCA)."
                    : "Monitoring high-availability hospital ecosystems and mitigating incidents with Datadog, Grafana, and Zabbix. Log analysis and infrastructure/network diagnostics for L2/L3 escalation, leading Root Cause Analysis (RCA) for systemic failures.",
            tags:
                language === "pt"
                    ? ["Observabilidade", "Datadog / Grafana", "Zabbix", "Análise de Logs", "Causa Raiz (RCA)", "Telemetria"]
                    : ["Observability", "Datadog / Grafana", "Zabbix", "Log Analysis", "Root Cause (RCA)", "Telemetry"],
        },
    ];

    const academicEducation = [
        {
            title: language === "pt" ? "Bacharelado em Engenharia de Software" : "B.Sc. in Software Engineering",
            institution: "Estácio",
            status: language === "pt" ? "Previsão de conclusão: Dez. 2027" : "Expected completion: Dec. 2027",
            type: language === "pt" ? "Bacharelado" : "Bachelor's Degree",
        },
        {
            title: language === "pt" ? "Pós-graduação em Engenharia de Software" : "Postgraduate in Software Engineering",
            institution: "Estácio",
            status: language === "pt" ? "Concluído em Dez. 2025" : "Completed in Dec. 2025",
            type: language === "pt" ? "Pós-Graduação" : "Postgraduate Certificate",
        },
        {
            title: language === "pt" ? "Tecnólogo em Análise e Desenvolvimento de Sistemas" : "Associate in Systems Analysis & Development",
            institution: "Estácio",
            status: language === "pt" ? "Concluído em Jan. 2025" : "Completed in Jan. 2025",
            type: language === "pt" ? "Tecnólogo" : "Associate Degree",
        },
        {
            title: language === "pt" ? "Técnico em Informática" : "IT Technician",
            institution: "Escola Técnica de Brasília",
            status: language === "pt" ? "Concluído em Fev. 2020" : "Completed in Feb. 2020",
            type: language === "pt" ? "Curso Técnico" : "Technical Diploma",
        },
    ];

    const complementaryCourses = [
        {
            title:
                language === "pt"
                    ? "Formação curso.dev: Engenharia de Software e Full Stack"
                    : "curso.dev Training: Software Engineering & Full Stack",
            institution: "Filipe Deschamps (2026)",
            status:
                language === "pt"
                    ? "Arquitetura, Next.js, Node.js, PostgreSQL, Docker, CI/CD & TDD"
                    : "Architecture, Next.js, Node.js, PostgreSQL, Docker, CI/CD & TDD",
            type: language === "pt" ? "Formação • 81h" : "Training Track • 81h",
        },
        {
            title: "Oracle Next Education (ONE)",
            institution: "Alura & Oracle (Jan. 2023)",
            status:
                language === "pt"
                    ? "Lógica de Programação, Ecossistema Java, POO & Web"
                    : "Programming Logic, Java Ecosystem, OOP & Web",
            type: language === "pt" ? "Programa Intensivo • 290h" : "Intensive Track • 290h",
        },
        {
            title:
                language === "pt"
                    ? "Fundamentos de Front-End Development"
                    : "Front-End Development Fundamentals",
            institution: "Faculdade Descomplica (Jan. 2023)",
            status:
                language === "pt"
                    ? "Estruturação de Interfaces Modernas & Desenvolvimento Web"
                    : "Modern Interface Structuring & Web Development",
            type: language === "pt" ? "Especialização • 220h" : "Specialization • 220h",
        },
        {
            title: language === "pt" ? "Desenvolvedor Front-End" : "Front-End Developer",
            institution: language === "pt" ? "SENAI/DF (Ago. 2022)" : "SENAI/DF (Aug. 2022)",
            status:
                language === "pt"
                    ? "Lógica, JavaScript, HTML5, CSS3, Bootstrap & Manipulação de DOM"
                    : "Logic, JavaScript, HTML5, CSS3, Bootstrap & DOM Manipulation",
            type: language === "pt" ? "Curso de Formação • 200h" : "Professional Course • 200h",
        },
    ];

    return (
        <section
            id="trajetoria"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/2 rounded-full blur-[150px] pointer-events-none -z-10" />
            <div className="container mx-auto max-w-5xl space-y-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                        {language === "pt" ? "// trajetória & experiência" : "// career & experience"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5">
                        {language === "pt" ? "Trajetória" : "Professional"}{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-zinc-100 to-zinc-400">
                            {language === "pt" ? "Profissional" : "Journey"}
                        </span>
                    </h2>
                </motion.div>

                {/* Vertical Timeline Experiences */}
                <div className="relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
                    {experiences.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: index * 0.08 }}
                            className="relative"
                        >
                            {/* Point Node on Timeline Line */}
                            <div className="absolute -left-7.75 sm:-left-9.75 top-4 p-1.5 rounded-full bg-[#181a24] border border-white/20 text-zinc-300 shadow-sm">
                                {item.icon}
                            </div>

                            {/* Experience Card */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-sm space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <span className="text-xs font-mono text-zinc-400 font-medium block mb-0.5">
                                            {item.period}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-white">
                                            {item.role}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-zinc-400 flex items-center gap-1.5 mt-0.5">
                                            <Briefcase size={13} className="text-zinc-500" />
                                            <span>{item.institution}</span>
                                        </p>
                                    </div>

                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                                        {item.badge}
                                    </span>
                                </div>

                                <p className="text-sm text-zinc-300 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-mono px-2 py-0.5 rounded bg-white/4 text-zinc-400 border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Formação Acadêmica (Diplomas) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 pt-4 border-t border-white/5"
                >
                    <div className="flex items-center gap-2">
                        <GraduationCap className="text-zinc-300" size={20} />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {language === "pt" ? "Formação Acadêmica" : "Academic Education"}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {academicEducation.map((edu, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between gap-3 shadow-sm"
                            >
                                <div className="space-y-1">
                                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400">
                                        {edu.type}
                                    </span>
                                    <h4 className="text-sm sm:text-base font-bold text-zinc-100 leading-snug">
                                        {edu.title}
                                    </h4>
                                    <p className="text-xs text-zinc-400 font-medium">
                                        {edu.institution}
                                    </p>
                                </div>

                                <span className="text-xs text-zinc-500 font-mono border-t border-white/5 pt-2">
                                    {edu.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Cursos Complementares */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4 pt-2"
                >
                    <div className="flex items-center gap-2">
                        <BookOpen className="text-zinc-300" size={19} />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {language === "pt" ? "Cursos Complementares" : "Complementary Courses"}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {complementaryCourses.map((course, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#181a24]/90 border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between gap-3 shadow-sm"
                            >
                                <div className="space-y-1">
                                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-zinc-400">
                                        {course.type}
                                    </span>
                                    <h4 className="text-sm sm:text-base font-bold text-zinc-100 leading-snug">
                                        {course.title}
                                    </h4>
                                    <p className="text-xs text-zinc-400 font-medium">
                                        {course.institution}
                                    </p>
                                </div>

                                <p className="text-xs text-zinc-400 leading-relaxed border-t border-white/5 pt-2.5">
                                    {course.status}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
