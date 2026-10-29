import React from "react";
import { projectsData } from "./data";

export const dictionary = {
    pt: {
        header: {
            items: [
                { name: "Sobre", href: "/#sobre" },
                { name: "Projetos", href: "/#projetos" },
                { name: "Trajetória", href: "/#trajetoria" },
                { name: "Contato", href: "/#contato" },
            ],
        },
        hero: {
            badge: "Disponível para novas oportunidades",
            greeting: "Olá, eu sou",
            name: "Paulo Gomes",
            subtitle: "Desenvolvedor Full Stack",
            description: "Construo aplicações escaláveis combinando Java 21, Spring Boot 3 e Node.js no Back-End com Next.js e React no Front-End — com foco em arquitetura limpa e estabilidade em produção.",
            console: {
                systemStatus: "CORE ENGINE // RUNTIME",
                runtimeBadge: "Java 21 • Node.js • Next.js",
                backendTitle: "Back-End & APIs Escaláveis",
                backendTechs: ["Java 21", "Spring Boot 3", "Node.js", "PostgreSQL", "Oracle SQL", "Docker"],
                frontendTitle: "Front-End & Interfaces Reativas",
                frontendTechs: ["Next.js", "React", "TypeScript", "SvelteKit", "Tailwind CSS"],
                engineeringTitle: "Engenharia, Resiliência & Qualidade",
                engineeringTechs: ["Clean Architecture", "Testes / TDD", "Observabilidade & RCA"],
            },
        },
        about: {
            title: "Sobre",
            me: "Mim",
            description1: (
                <>
                    Minha base na tecnologia começou sustentando <strong className="text-gray-100">operações de missão crítica</strong>, onde vi na prática como sistemas reais se comportam sob estresse. Essa vivência moldou minha engenharia: desenvolvo desde a primeira linha priorizando <span className="text-white font-semibold">resiliência, observabilidade e código limpo</span>.
                </>
            ),
            description2: (
                <>
                    Como <strong className="text-gray-100">Desenvolvedor Full-Stack</strong>, arquiteto APIs robustas em <span className="text-white font-semibold">Java (Spring Boot) e Node.js</span> integradas a interfaces modernas em <span className="text-white font-semibold">Next.js, React e SvelteKit</span>, com forte domínio em modelagem relacional, <strong className="text-gray-100">tuning de queries SQL (Oracle / PostgreSQL)</strong> e testes automatizados (TDD).
                </>
            ),
            pillarsTitle: "Pilares de Engenharia",
            pillars: [
                {
                    number: "01",
                    title: "Resiliência & Observabilidade",
                    description:
                        "Telemetria ativa (Datadog/Grafana), mitigação de gargalos e análise de causa raiz (RCA) para estabilidade em produção.",
                },
                {
                    number: "02",
                    title: "Arquitetura Limpa & TDD",
                    description:
                        "Regras de negócio desacopladas, segurança estrutural (JWT/RBAC) e qualidade validada por testes automatizados.",
                },
                {
                    number: "03",
                    title: "Engenharia de Dados & SQL Tuning",
                    description:
                        "Modelagem relacional consistente e refatoração de queries críticas com CTEs em Oracle SQL e PostgreSQL.",
                },
            ],
        },
        projects: {
            title: "Meus",
            subtitle: "Projetos",
            description:
                "Soluções reais desenvolvidas com foco em arquitetura, performance, clean code e regras de negócio.",
            filterAll: "Todos",
            filterFullstack: "Full-Stack",
            filterBackend: "Java & Spring",
            filterFrontend: "Front-end",
            viewCaseStudy: "Ver Estudo de Caso",
            liveDemo: "Acessar Deploy",
            viewCode: "Ver Código",
            items: projectsData.pt,
        },
        footer: {
            name: "Paulo Roberto A. Gomes",
            role: "Full-Stack Software Engineer",
            status: "Disponível para novas oportunidades",
            tagline: "Focado em qualidade técnica, estabilidade estrutural e entrega real de valor. Aberto a conversas sobre novas oportunidades e desafios de engenharia.",
            btnCv: "Baixar Currículo (PDF)",
            copyEmail: "Copiar",
            copiedEmail: "Copiado!",
            backToTop: "Voltar ao topo",
            copy: "Desenvolvido com Next.js 16 & Tailwind CSS 4.",
            copiedToast: "E-mail copiado para a área de transferência!",
        },
    },
    en: {
        header: {
            items: [
                { name: "About", href: "/#sobre" },
                { name: "Projects", href: "/#projetos" },
                { name: "Journey", href: "/#trajetoria" },
                { name: "Contact", href: "/#contato" },
            ],
        },
        hero: {
            badge: "Available for new opportunities",
            greeting: "Hello, I am",
            name: "Paulo Gomes",
            subtitle: "Full Stack Developer",
            description: "Building scalable applications combining Java 21, Spring Boot 3, and Node.js on the Back-End with Next.js and React on the Front-End — focused on clean architecture and production reliability.",
            console: {
                systemStatus: "CORE ENGINE // RUNTIME",
                runtimeBadge: "Java 21 • Node.js • Next.js",
                backendTitle: "Back-End & Scalable APIs",
                backendTechs: ["Java 21", "Spring Boot 3", "Node.js", "PostgreSQL", "Oracle SQL", "Docker"],
                frontendTitle: "Front-End & Reactive Interfaces",
                frontendTechs: ["Next.js", "React", "TypeScript", "SvelteKit", "Tailwind CSS"],
                engineeringTitle: "Engineering, Resilience & Quality",
                engineeringTechs: ["Clean Architecture", "Testing / TDD", "Observability & RCA"],
            },
        },
        about: {
            title: "About",
            me: "Me",
            description1: (
                <>
                    My foundation in tech started supporting <strong className="text-gray-100">mission-critical operations</strong>, seeing firsthand how real systems behave under stress. That experience shaped my engineering mindset: I build from line one prioritizing <span className="text-white font-semibold">resilience, observability, and clean code</span>.
                </>
            ),
            description2: (
                <>
                    As a <strong className="text-gray-100">Full-Stack Developer</strong>, I architect scalable APIs in <span className="text-white font-semibold">Java (Spring Boot) and Node.js</span> paired with reactive interfaces in <span className="text-white font-semibold">Next.js, React, and SvelteKit</span>, backed by deep expertise in relational modeling, <strong className="text-gray-100">SQL query tuning (Oracle / PostgreSQL)</strong>, and automated testing (TDD).
                </>
            ),
            pillarsTitle: "Engineering Pillars",
            pillars: [
                {
                    number: "01",
                    title: "Resilience & Observability",
                    description:
                        "Active telemetry (Datadog/Grafana), bottleneck mitigation, and root-cause analysis (RCA) for production stability.",
                },
                {
                    number: "02",
                    title: "Clean Architecture & TDD",
                    description:
                        "Decoupled domain logic, structural security (JWT/RBAC), and reliability validated by automated test suites.",
                },
                {
                    number: "03",
                    title: "Data Engineering & SQL Tuning",
                    description:
                        "Consistent relational modeling and critical query refactoring with CTEs in Oracle SQL and PostgreSQL.",
                },
            ],
        },
        projects: {
            title: "My",
            subtitle: "Projects",
            description:
                "Real solutions developed with an uncompromising focus on architecture, performance, clean code, and business rules.",
            filterAll: "All",
            filterFullstack: "Full-Stack",
            filterBackend: "Java & Spring",
            filterFrontend: "Front-end",
            viewCaseStudy: "View Case Study",
            liveDemo: "Live Demo",
            viewCode: "Source Code",
            items: projectsData.en,
        },
        footer: {
            name: "Paulo Roberto A. Gomes",
            role: "Full-Stack Software Engineer",
            status: "Available for new opportunities",
            tagline: "Focused on code excellence, structural reliability, and tangible business value. Open to discussions about engineering opportunities and projects.",
            btnCv: "Download Resume (PDF)",
            copyEmail: "Copy",
            copiedEmail: "Copied!",
            backToTop: "Back to top",
            copy: "Developed with Next.js 16 & Tailwind CSS 4.",
            copiedToast: "Email copied to clipboard!",
        },
    },
};

export type DictionaryType = typeof dictionary.pt;
