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
            description: "Uno a robustez do Back-End em Java 21 e Spring Boot 3 com a fluidez do Front-End em Next.js 15. Priorizo arquitetura limpa, regras de negócio bem estruturadas e software de fácil manutenção.",
            console: {
                systemStatus: "CORE ENGINE // RUNTIME",
                runtimeBadge: "Java 21 & Next.js 15",
                backendTitle: "Back-End & APIs Escaláveis",
                backendTechs: ["Java 21", "Spring Boot 3", "PostgreSQL", "Oracle SQL", "Docker"],
                frontendTitle: "Front-End & Interfaces Reativas",
                frontendTechs: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"],
                engineeringTitle: "Engenharia, Resiliência & Qualidade",
                engineeringTechs: ["Clean Architecture", "Testes / TDD", "Observabilidade & RCA"],
            },
        },
        about: {
            title: "Sobre",
            me: "Mim",
            description1: (
                <>
                    Minha jornada na tecnologia não começou apenas escrevendo código, mas garantindo que <strong className="text-gray-100">sistemas críticos continuassem no ar</strong>. Começar minha carreira focado em operações, infraestrutura e monitoramento me deu uma perspectiva única: vi na prática como as aplicações se comportam sob estresse em ambientes reais de produção. Essa vivência moldou minha engenharia. Hoje, não busco apenas &quot;fazer funcionar&quot;; desenvolvo desde a primeira linha pensando em <span className="text-white font-semibold">resiliência, observabilidade e facilidade de manutenção</span>.
                </>
            ),
            description2: (
                <>
                    Atualmente, atuo como <strong className="text-gray-100">Desenvolvedor Full-Stack</strong> focado em construir soluções robustas de ponta a ponta. No Back-End, utilizo o ecossistema <span className="text-white font-semibold">Java e Spring Boot</span> para arquitetar APIs escaláveis, apoiadas por um forte domínio analítico em modelagem de dados e <strong className="text-gray-100">otimização de queries SQL (Oracle / PostgreSQL)</strong>.
                </>
            ),
            description3: (
                <>
                    Levo a qualidade estrutural muito a sério: meu processo de desenvolvimento é estritamente guiado por <strong className="text-gray-100">Clean Code, camadas sólidas de segurança e validação rigorosa através de testes de integração e TDD</strong>. No Front-End, conecto toda essa lógica a interfaces rápidas e reativas utilizando <span className="text-white font-semibold">Next.js e React</span>. Gosto de ter o domínio sobre o ciclo completo do produto, entregando software que resolve problemas complexos de negócio e que nasce pronto para crescer sem gargalos.
                </>
            ),
            pillarsTitle: "Pilares de Engenharia",
            pillars: [
                {
                    number: "01",
                    title: "Resiliência & Observabilidade",
                    description:
                        "Visão forjada em sustentação de ambientes hospitalares de alta disponibilidade. Telemetria ativa (Datadog/Grafana), mitigação de gargalos e análise de causa raiz (RCA) para prevenção de incidentes em produção.",
                },
                {
                    number: "02",
                    title: "Arquitetura Limpa & Clean Code",
                    description:
                        "Separação rigorosa de responsabilidades, desacoplamento de regras de negócio e código altamente legível. Foco em segurança estrutural, facilidade de manutenção e testes de integração contínuos.",
                },
                {
                    number: "03",
                    title: "Engenharia de Dados & SQL Tuning",
                    description:
                        "Domínio analítico avançado em Oracle SQL e PostgreSQL. Modelagem relacional consistente, integridade transacional e otimização de queries complexas para máxima performance.",
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
            copy: "Desenvolvido com Next.js 16 & Tailwind CSS.",
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
            description: "Combining the robustness of Java 21 and Spring Boot 3 on the Back-End with the fluidity of Next.js 15 on the Front-End. Prioritizing clean architecture, solid business rules, and maintainable software.",
            console: {
                systemStatus: "CORE ENGINE // RUNTIME",
                runtimeBadge: "Java 21 & Next.js 15",
                backendTitle: "Back-End & Scalable APIs",
                backendTechs: ["Java 21", "Spring Boot 3", "PostgreSQL", "Oracle SQL", "Docker"],
                frontendTitle: "Front-End & Reactive Interfaces",
                frontendTechs: ["Next.js 15", "React", "TypeScript", "Tailwind CSS"],
                engineeringTitle: "Engineering, Resilience & Quality",
                engineeringTechs: ["Clean Architecture", "Testing / TDD", "Observability & RCA"],
            },
        },
        about: {
            title: "About",
            me: "Me",
            description1: (
                <>
                    My tech journey didn&apos;t start merely writing code, but ensuring that <strong className="text-gray-100">mission-critical systems stayed online</strong>. Beginning my career focused on operations, infrastructure, and monitoring gave me a unique perspective: I saw firsthand how applications behave (and fail) under stress in real production environments. This experience shaped my engineering approach. Today, I don&apos;t just aim to &quot;make it work&quot;; I develop from line one prioritizing <span className="text-white font-semibold">resilience, observability, and maintainability</span>.
                </>
            ),
            description2: (
                <>
                    Currently, I work as a <strong className="text-gray-100">Full-Stack Developer</strong> building robust end-to-end solutions. On the Back-End, I utilize the <span className="text-white font-semibold">Java and Spring Boot</span> ecosystem to architect scalable APIs, backed by strong analytical domain expertise in data modeling and <strong className="text-gray-100">SQL query optimization (Oracle / PostgreSQL)</strong>.
                </>
            ),
            description3: (
                <>
                    I take structural quality seriously: my development workflow is strictly guided by <strong className="text-gray-100">Clean Code, solid security layers, and rigorous validation through integration tests and TDD</strong>. On the Front-End, I connect this logic to fast, reactive user interfaces with <span className="text-white font-semibold">Next.js and React</span>. I enjoy having full ownership over the product lifecycle, delivering software that solves complex business problems and scales effortlessly.
                </>
            ),
            pillarsTitle: "Engineering Pillars",
            pillars: [
                {
                    number: "01",
                    title: "Resilience & Observability",
                    description:
                        "Forged in mission-critical hospital ecosystems. Active telemetry (Datadog/Grafana), bottleneck mitigation, and structured root-cause analysis (RCA) to prevent production incidents.",
                },
                {
                    number: "02",
                    title: "Clean Architecture & Maintainability",
                    description:
                        "Strict separation of concerns, decoupled domain logic, and clean code. Structural security, long-term maintainability, and continuous integration testing.",
                },
                {
                    number: "03",
                    title: "Data Engineering & SQL Tuning",
                    description:
                        "Deep analytical expertise in Oracle SQL and PostgreSQL. Consistent relational modeling, transactional integrity, and complex query tuning for high-throughput performance.",
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
            copy: "Developed with Next.js 16 & Tailwind CSS.",
            copiedToast: "Email copied to clipboard!",
        },
    },
};

export type DictionaryType = typeof dictionary.pt;
