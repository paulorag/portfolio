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
            greeting: "Olá, eu sou",
            role: "Desenvolvedor Full Stack focado na construção de sistemas escaláveis e resilientes. Uno a robustez do Back-End em Java 21 e Spring Boot 3 com a fluidez do Front-End em Next.js 15. Priorizo arquitetura limpa, regras de negócio bem estruturadas e software de fácil manutenção.",
            btnProject: "Ver Projetos",
            btnCv: "Baixar CV (PDF)",
            badge: "Disponível para novas oportunidades",
            codeProfile: {
                nameLabel: "nome",
                nameValue: "Paulo Roberto A. Gomes",
                roleLabel: "atuacao",
                roleValue: "Full-Stack Software Engineer",
                stackLabel: "stack",
                stackValue: ["Java 21", "Spring Boot 3", "Next.js 15", "PostgreSQL", "Docker"],
                educationLabel: "formacao",
                educationValue: [
                    "Pós em Eng. Software (Estácio)",
                    "Bacharelado (Em Andamento)",
                ],
                focusLabel: "foco",
                focusValue: "APIs Robustas & Arquitetura Limpa",
            },
        },
        about: {
            title: "Sobre",
            me: "Mim",
            description1: (
                <>
                    Minha jornada na tecnologia não começou apenas escrevendo código, mas garantindo que <strong className="text-gray-100">sistemas críticos continuassem no ar</strong>. Começar minha carreira focado em operações, infraestrutura e monitoramento me deu uma perspectiva única: vi na prática como as aplicações se comportam sob estresse em ambientes reais de produção. Essa vivência moldou minha engenharia. Hoje, não busco apenas &quot;fazer funcionar&quot;; desenvolvo desde a primeira linha pensando em <span className="text-blue-400 font-semibold">resiliência, observabilidade e facilidade de manutenção</span>.
                </>
            ),
            description2: (
                <>
                    Atualmente, atuo como <strong className="text-gray-100">Desenvolvedor Full-Stack</strong> focado em construir soluções robustas de ponta a ponta. No Back-End, utilizo o ecossistema <span className="text-blue-400 font-semibold">Java e Spring Boot</span> para arquitetar APIs escaláveis, apoiadas por um forte domínio analítico em modelagem de dados e <strong className="text-gray-100">otimização de queries SQL (Oracle / PostgreSQL)</strong>.
                </>
            ),
            description3: (
                <>
                    Levo a qualidade estrutural muito a sério: meu processo de desenvolvimento é estritamente guiado por <strong className="text-gray-100">Clean Code, camadas sólidas de segurança e validação rigorosa através de testes de integração e TDD</strong>. No Front-End, conecto toda essa lógica a interfaces rápidas e reativas utilizando <span className="text-blue-400 font-semibold">Next.js e React</span>. Gosto de ter o domínio sobre o ciclo completo do produto, entregando software que resolve problemas complexos de negócio e que nasce pronto para crescer sem gargalos.
                </>
            ),
            stackTitle: "Minha Stack Técnica",
            stackBackend: "Back-End & Banco de Dados",
            stackFrontend: "Front-End & Core Web",
            stackData: "DevOps, Arquitetura & Qualidade",
            highlights: {
                academic: "Pós em Eng. Software (Concluída)",
                experience: "Missão Crítica & SQL Oracle",
                focus: "Java 21, Spring Boot 3 & Next.js 15",
            },
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
            greeting: "Hello, I am",
            role: "Full Stack Developer focused on building scalable and resilient systems. I combine the robustness of Java 21 and Spring Boot 3 on the Back-End with the fluidity of Next.js 15 on the Front-End. I prioritize clean architecture, well-structured business rules, and maintainable software.",
            btnProject: "See Projects",
            btnCv: "Download CV (PDF)",
            badge: "Available for new opportunities",
            codeProfile: {
                nameLabel: "name",
                nameValue: "Paulo Roberto A. Gomes",
                stackLabel: "stack",
                stackValue: ["Java 21", "Spring Boot 3", "Next.js 15", "PostgreSQL", "Docker"],
                roleLabel: "role",
                roleValue: "Full-Stack Software Engineer",
                educationLabel: "education",
                educationValue: [
                    "Postgrad in Software Eng. (Estácio)",
                    "B.Sc. Software Eng. (In Progress)",
                ],
                focusLabel: "focus",
                focusValue: "Robust APIs & Clean Architecture",
            },
        },
        about: {
            title: "About",
            me: "Me",
            description1: (
                <>
                    My tech journey didn&apos;t start merely writing code, but ensuring that <strong className="text-gray-100">mission-critical systems stayed online</strong>. Beginning my career focused on operations, infrastructure, and monitoring gave me a unique perspective: I saw firsthand how applications behave (and fail) under stress in real production environments. This experience shaped my engineering approach. Today, I don&apos;t just aim to &quot;make it work&quot;; I develop from line one prioritizing <span className="text-blue-400 font-semibold">resilience, observability, and maintainability</span>.
                </>
            ),
            description2: (
                <>
                    Currently, I work as a <strong className="text-gray-100">Full-Stack Developer</strong> building robust end-to-end solutions. On the Back-End, I utilize the <span className="text-blue-400 font-semibold">Java and Spring Boot</span> ecosystem to architect scalable APIs, backed by strong analytical domain expertise in data modeling and <strong className="text-gray-100">SQL query optimization (Oracle / PostgreSQL)</strong>.
                </>
            ),
            description3: (
                <>
                    I take structural quality seriously: my development workflow is strictly guided by <strong className="text-gray-100">Clean Code, solid security layers, and rigorous validation through integration tests and TDD</strong>. On the Front-End, I connect this logic to fast, reactive user interfaces with <span className="text-blue-400 font-semibold">Next.js and React</span>. I enjoy having full ownership over the product lifecycle, delivering software that solves complex business problems and scales effortlessly.
                </>
            ),
            stackTitle: "Technical Stack",
            stackBackend: "Back-End & Databases",
            stackFrontend: "Front-End & Core Web",
            stackData: "DevOps, Architecture & Quality",
            highlights: {
                academic: "Postgrad in Software Eng. (Completed)",
                experience: "Mission-Critical & Oracle SQL",
                focus: "Java 21, Spring Boot 3 & Next.js 15",
            },
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
