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
            period: language === "pt" ? "Dez. 2025 — Presente" : "Dec. 2025 — Present",
            role:
                language === "pt"
                    ? "Desenvolvedor Full Stack"
                    : "Full Stack Developer",
            institution: "Game Deals Radar (Projeto Independente)",
            icon: <Code2 className="w-4 h-4 text-blue-400" />,
            badge: language === "pt" ? "Projeto Ativo" : "Active Project",
            description:
                language === "pt"
                    ? "Construção de arquitetura RESTful com Java 21 e Spring Boot 3. Web scraping automatizado (Jsoup) e agendamento em background (Spring Scheduler). Modelagem e persistência em PostgreSQL (Neon Serverless), dashboard no Next.js 15 com Recharts, Docker e autenticação segura com JWT."
                    : "RESTful architecture with Java 21 and Spring Boot 3. Automated web scraping (Jsoup) and background cron routines (Spring Scheduler). PostgreSQL persistence (Neon Serverless), Next.js 15 dashboard with Recharts, Docker, and JWT security.",
            tags: ["Java 21", "Spring Boot 3", "Next.js 15", "TypeScript", "PostgreSQL", "Recharts", "Docker"],
        },
        {
            period: language === "pt" ? "Ago. 2024 — Presente" : "Aug. 2024 — Present",
            role:
                language === "pt"
                    ? "Analista Desenvolvedor (Consultor de Sistemas)"
                    : "Systems Developer Analyst",
            institution: "NOXTEC",
            icon: <Building2 className="w-4 h-4 text-blue-400" />,
            badge: language === "pt" ? "Atuação Corporativa" : "Corporate Role",
            description:
                language === "pt"
                    ? "Desenvolvimento de automações com fluxos condicionais complexos (validações de status, gatilhos e preenchimento de dados na interface). Atuação avançada em Oracle SQL para relatórios customizados, otimização de queries e manipulação segura de registros em produção (DML). Implantação e suporte técnico on-site."
                    : "Building workflow automations with complex conditional logic. Advanced Oracle SQL database development for custom analytics, query performance tuning, and safe production DML. On-site deployments and technical operations support.",
            tags: ["Oracle SQL", "Automação de Processos", "Regras de Negócio", "Deploy On-Site"],
        },
        {
            period: language === "pt" ? "Jan. 2023 — Ago. 2024" : "Jan. 2023 — Aug. 2024",
            role:
                language === "pt"
                    ? "Analista de Operações de TI (NOC)"
                    : "IT Operations Analyst (NOC)",
            institution: "Vert Integradora de TI",
            icon: <Network className="w-4 h-4 text-blue-400" />,
            badge: language === "pt" ? "Missão Crítica" : "Mission Critical",
            description:
                language === "pt"
                    ? "Observabilidade e sustentação ativa em ecossistema hospitalar de alta disponibilidade, atuando em telemetria, identificação de gargalos e mitigação de incidentes com Datadog, Grafana e Zabbix. Troubleshooting avançado em infraestrutura e redes, análise de logs/evidências e condução técnica de resolução junto a equipes N2/N3. Liderança na investigação de causa raiz (RCA) de incidentes complexos e elaboração de documentação técnica para fabricantes."
                    : "Active observability and reliability for high-availability healthcare ecosystems, conducting telemetry analysis, bottleneck identification, and incident mitigation with Datadog, Grafana, and Zabbix. Advanced troubleshooting across infrastructure and networks, log analysis, and resolution with N2/N3 teams. Technical leadership in Root Cause Analysis (RCA) for complex failures and vendor documentation.",
            tags: ["Observabilidade", "Datadog / Grafana", "Zabbix", "Troubleshooting", "Causa Raiz (RCA)", "Telemetria"],
        },
    ];

    const academicEducation = [
        {
            title: language === "pt" ? "Pós-graduação em Engenharia de Software" : "Postgrad in Software Engineering",
            institution: "Estácio",
            status: language === "pt" ? "Concluído em Dez. 2025" : "Completed in Dec. 2025",
            type: language === "pt" ? "Pós-Graduação" : "Postgraduate",
        },
        {
            title: language === "pt" ? "Bacharelado em Engenharia de Software" : "B.Sc. in Software Engineering",
            institution: "Estácio",
            status: language === "pt" ? "Previsão de conclusão: Jul. 2027" : "Expected: Jul. 2027",
            type: language === "pt" ? "Bacharelado" : "Bachelor",
        },
        {
            title: language === "pt" ? "Tecnólogo em Análise e Desenvolvimento de Sistemas" : "Associate in Systems Analysis & Dev",
            institution: "Estácio",
            status: language === "pt" ? "Concluído em Jan. 2025" : "Completed in Jan. 2025",
            type: language === "pt" ? "Tecnólogo" : "Associate Degree",
        },
    ];

    const complementaryCourses = [
        {
            title: "Oracle Next Education (ONE)",
            institution: "Alura & Oracle (2023)",
            status: language === "pt" ? "Lógica, Java & Ecossistema Web" : "Logic, Java & Web Ecosystem",
            type: language === "pt" ? "Curso de Formação" : "Training Track",
        },
        {
            title: language === "pt" ? "Desenvolvedor Front-End" : "Front-End Developer",
            institution: "SENAI / DF (2022)",
            status: "HTML5, CSS3, JavaScript & React",
            type: language === "pt" ? "Curso de Formação" : "Professional Course",
        },
    ];

    return (
        <section
            id="trajetoria"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/[0.04] rounded-full blur-[150px] pointer-events-none -z-10" />
            <div className="container mx-auto max-w-5xl space-y-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono">
                        {language === "pt" ? "// trajetória & experiência" : "// career & experience"}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1.5">
                        {language === "pt" ? "Trajetória" : "Professional"}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            {language === "pt" ? "Profissional" : "Journey"}
                        </span>
                    </h2>
                </motion.div>

                {/* Vertical Timeline Experiences */}
                <div className="relative border-l border-blue-500/20 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
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
                            <div className="absolute -left-[31px] sm:-left-[39px] top-4 p-1.5 rounded-full bg-[#111] border border-blue-500/40 text-blue-400 shadow-sm shadow-blue-500/20">
                                {item.icon}
                            </div>

                            {/* Experience Card */}
                            <div className="p-5 sm:p-6 rounded-2xl bg-[#111] border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-sm space-y-3">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <div>
                                        <span className="text-xs font-mono text-blue-400 font-medium block mb-0.5">
                                            {item.period}
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-white">
                                            {item.role}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium text-gray-400 flex items-center gap-1.5 mt-0.5">
                                            <Briefcase size={13} className="text-gray-500" />
                                            <span>{item.institution}</span>
                                        </p>
                                    </div>

                                    <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        {item.badge}
                                    </span>
                                </div>

                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {item.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 pt-1">
                                    {item.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-medium px-2 py-0.5 rounded bg-white/5 text-gray-400 border border-white/5"
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
                        <GraduationCap className="text-blue-400" size={20} />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {language === "pt" ? "Formação Acadêmica" : "Academic Education"}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {academicEducation.map((edu, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#111] border border-white/10 hover:border-blue-500/30 transition-all duration-200 flex flex-col justify-between gap-3 shadow-sm"
                            >
                                <div className="space-y-1">
                                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-400">
                                        {edu.type}
                                    </span>
                                    <h4 className="text-sm sm:text-base font-bold text-gray-100 leading-snug">
                                        {edu.title}
                                    </h4>
                                    <p className="text-xs text-gray-400 font-medium">
                                        {edu.institution}
                                    </p>
                                </div>

                                <span className="text-xs text-gray-500 font-mono border-t border-white/5 pt-2">
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
                        <BookOpen className="text-indigo-400" size={19} />
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                            {language === "pt" ? "Cursos Complementares" : "Complementary Courses"}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {complementaryCourses.map((course, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl bg-[#111] border border-white/10 hover:border-indigo-500/30 transition-all duration-200 flex flex-col justify-between gap-3 shadow-sm"
                            >
                                <div className="space-y-1">
                                    <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-indigo-400">
                                        {course.type}
                                    </span>
                                    <h4 className="text-sm sm:text-base font-bold text-gray-100 leading-snug">
                                        {course.title}
                                    </h4>
                                    <p className="text-xs text-gray-400 font-medium">
                                        {course.institution}
                                    </p>
                                </div>

                                <span className="text-xs text-gray-500 font-mono border-t border-white/5 pt-2">
                                    {course.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
