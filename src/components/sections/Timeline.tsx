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
                    ? "Arquitetura e desenvolvimento de APIs RESTful escaláveis com Java (Spring Boot) e Node.js (Express), implementando regras de negócio complexas como motores de cupons, web scraping e processamento assíncrono. Construção de aplicações web modernas e painéis administrativos com Next.js, React, SvelteKit e Tailwind CSS. Modelagem relacional e otimização de consultas em PostgreSQL (Prisma ORM), padronização de ambientes com Docker e estruturação de segurança com autenticação JWT e proteção de rotas."
                    : "Architecting and developing scalable RESTful APIs using Java (Spring Boot) and Node.js (Express), implementing complex business logic such as coupon engines, web scraping, and asynchronous processing. Engineering modern web applications and administrative dashboards with Next.js, React, SvelteKit, and Tailwind CSS. Relational data modeling and query optimization in PostgreSQL (Prisma ORM), environment standardization with Docker, and robust JWT authentication and route protection.",
            tags: ["Java 21", "Spring Boot 3", "Node.js", "Next.js 15", "React", "SvelteKit", "PostgreSQL", "Prisma", "Docker", "JWT"],
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
                    ? "Desenvolvimento de automações e documentos dinâmicos com fluxos condicionais complexos, gatilhos e integrações (como geração de códigos de barras para rastreabilidade de pacientes). Otimização de consultas críticas em Oracle SQL via refatoração e CTEs, reduzindo o tempo de processamento de relatórios em até 80%, além da estruturação de censos e KPIs clínicos. Depuração de erros web inspecionando tráfego de rede via DevTools (Network) para diagnóstico técnico junto aos fabricantes e condução de implantações on-site com validação de integridade e manipulação segura em produção (DML)."
                    : "Developing workflow automations and dynamic documents with complex conditional flows, triggers, and integrations (such as barcode generation for patient traceability). Optimizing critical Oracle SQL queries through refactoring and CTEs—reducing report processing time by up to 80%—and structuring tabular clinical KPI reports and hospital censuses. Debugging web application errors by inspecting network traffic via DevTools (Network tab) to provide precise technical diagnostics to vendors, and leading on-site deployments with data integrity validation and safe production DML.",
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
                    ? "Monitoramento de ecossistema hospitalar de alta disponibilidade, atuando na análise de telemetria, identificação de gargalos e mitigação ágil de incidentes utilizando Datadog, Grafana e Zabbix. Investigação de anomalias em infraestrutura e redes, realizando mapeamento técnico de problemas e análise de logs para escalar resoluções estruturadas às equipes de engenharia (N2/N3). Liderança na investigação de causa raiz (RCA) na depuração de incidentes sistêmicos complexos, orquestrando testes multidisciplinares e elaborando documentação técnica para melhoria contínua."
                    : "Monitoring a high-availability hospital ecosystem, analyzing telemetry, identifying bottlenecks, and performing agile incident mitigation using Datadog, Grafana, and Zabbix. Investigating infrastructure and network anomalies, conducting technical problem mapping and log analysis to escalate structured resolutions to engineering teams (L2/L3). Leading Root Cause Analysis (RCA) for complex systemic incidents, orchestrating multidisciplinary tests and creating technical documentation for continuous improvement.",
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
                    ? "Foco em fundamentos de engenharia, arquitetura, Next.js, Node.js, PostgreSQL, Docker, CI/CD e Testes Automatizados (TDD)."
                    : "Focus on engineering fundamentals, architecture, Next.js, Node.js, PostgreSQL, Docker, CI/CD, and Automated Testing (TDD).",
            type: language === "pt" ? "Formação • 81h" : "Training Track • 81h",
        },
        {
            title: "Oracle Next Education (ONE)",
            institution: "Alura & Oracle (Jan. 2023)",
            status:
                language === "pt"
                    ? "Programa intensivo focado em lógica de programação, ecossistema Java, Orientação a Objetos e desenvolvimento Web."
                    : "Intensive program focused on programming logic, Java ecosystem, Object-Oriented Programming, and Web development.",
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
                    ? "Especialização em estruturação de interfaces modernas e desenvolvimento web."
                    : "Specialization in modern interface structuring and web development.",
            type: language === "pt" ? "Especialização • 220h" : "Specialization • 220h",
        },
        {
            title: language === "pt" ? "Desenvolvedor Front-End" : "Front-End Developer",
            institution: language === "pt" ? "SENAI/DF (Ago. 2022)" : "SENAI/DF (Aug. 2022)",
            status:
                language === "pt"
                    ? "Foco prático em Lógica de Programação, JavaScript, HTML5, CSS3, Bootstrap e manipulação de DOM."
                    : "Practical focus on Programming Logic, JavaScript, HTML5, CSS3, Bootstrap, and DOM manipulation.",
            type: language === "pt" ? "Curso de Formação • 200h" : "Professional Course • 200h",
        },
    ];

    return (
        <section
            id="trajetoria"
            className="py-12 sm:py-16 px-4 md:px-6 scroll-mt-28 relative overflow-hidden"
        >
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-white/[0.02] rounded-full blur-[150px] pointer-events-none -z-10" />
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">
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
                            <div className="absolute -left-[31px] sm:-left-[39px] top-4 p-1.5 rounded-full bg-[#181a24] border border-white/20 text-zinc-300 shadow-sm">
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
                                            className="text-xs font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/5"
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
