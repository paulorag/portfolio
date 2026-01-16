import React from "react";

export const dictionary = {
    pt: {
        header: {
            items: [
                { name: "Sobre", href: "#sobre" },
                { name: "Projetos", href: "#projetos" },
                { name: "Contato", href: "#contato" },
            ],
        },
        hero: {
            greeting: "Olá, eu sou",
            role: "Desenvolvedor Full-Stack focado em transformar desafios de negócio em software eficiente. Unindo a robustez do Java (Spring Boot) com a agilidade do React & Next.js.",
            btnProject: "Ver Projetos",
            badge: "Disponível para novas oportunidades",
            codeProfile: {
                roleLabel: "atuacao",
                roleValue: "Full-Stack Dev",
                focusLabel: "foco",
                focusValue: "Soluções Eficientes",
            },
        },
        about: {
            title: "Sobre",
            me: "Mim",
            description1: (
                <>
                    Sou um desenvolvedor focado em transformar desafios de
                    negócio em software eficiente. Minha atuação combina a
                    robustez do <strong className="text-gray-100">Java</strong>{" "}
                    com a agilidade do ecossistema{" "}
                    <strong className="text-gray-100">JavaScript</strong>.
                </>
            ),
            description2: (
                <>
                    Na minha experiência profissional atual, especializo-me em
                    traduzir necessidades complexas em{" "}
                    <span className="text-blue-500 font-semibold">
                        soluções de dados
                    </span>{" "}
                    e relatórios automatizados utilizando{" "}
                    <span className="text-blue-500 font-semibold">
                        SQL Oracle
                    </span>
                    . Também trago uma bagagem sólida em sustentação de sistemas
                    críticos (NOC), onde desenvolvi resiliência e foco em
                    estabilidade.
                </>
            ),
            description3: (
                <>
                    Hoje, meu objetivo é atuar como{" "}
                    <span className="text-blue-500 font-semibold">
                        Full-Stack
                    </span>
                    , unindo{" "}
                    <strong className="text-gray-100">Spring Boot</strong> no
                    back-end e{" "}
                    <span className="text-blue-500 font-semibold">
                        Next.js/React
                    </span>{" "}
                    no front-end. Valorizo código limpo,{" "}
                    <span className="text-blue-500 font-semibold">TDD</span> e
                    metodologias ágeis para entregar valor real e contínuo.
                </>
            ),
            stackTitle: "Minha Stack",
            stackBackend: "Back-end & Java",
            stackFrontend: "Front-end",
            stackData: "Dados & DevOps",
        },
        projects: {
            title: "Meus",
            subtitle: "Projetos",
            description:
                "Soluções reais desenvolvidas com foco em arquitetura, performance e experiência do usuário.",
            items: [
                {
                    title: "Lanchonete da Larica",
                    description:
                        "Plataforma digital de autoatendimento para fast-food. Focada em UX/UI moderna para agilizar o fluxo de pedidos.",
                    tags: ["JavaScript", "CSS", "HTML"],
                    image: "/projects/projeto-lanchonete.png",
                    github: "https://github.com/paulorag/lanchoneteLarica",
                    demo: "https://lanchonete-larica.vercel.app/",
                },
                {
                    title: "Game Deals Radar",
                    description:
                        "Monitoramento inteligente de preços da Steam. Utiliza Web Scraping (Jsoup) e Jobs agendados para gerar histórico e identificar ofertas reais.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "TypeScript",
                        "React",
                        "Next",
                        "Docker",
                        "PostgreSQL",
                    ],
                    image: "/projects/game-deals-radar.png",
                    github: "https://github.com/paulorag/gameDealsRadar",
                    demo: "https://game-deals-radar.vercel.app/",
                },
                {
                    title: "Room Scheduler",
                    description:
                        "Solução corporativa para gestão de espaços. Implementa lógicas complexas de validação para evitar conflitos de horários.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "TypeScript",
                        "React",
                        "Next",
                        "Docker",
                        "PostgreSQL",
                    ],
                    image: "/projects/roomScheduler.png",
                    github: "https://github.com/paulorag/roomScheduler",
                    demo: "https://room-scheduler-gold.vercel.app/",
                },
            ],
        },
        footer: {
            title: "Vamos",
            subtitle: "conversar?",
            text: "Estou disponível para novas oportunidades. Se busca um desenvolvedor que une a solidez do Java com a modernidade do React, me mande um oi.",
            copy: "Desenvolvido com Next.js 15 & Tailwind CSS.",
        },
    },
    en: {
        header: {
            items: [
                { name: "About", href: "#sobre" },
                { name: "Projects", href: "#projetos" },
                { name: "Contact", href: "#contato" },
            ],
        },
        hero: {
            greeting: "Hello, I am",
            role: "Full-Stack Developer focused on transforming business challenges into efficient software. Combining the robustness of Java (Spring Boot) with the agility of React & Next.js.",
            btnProject: "See Projects",
            badge: "Available for new opportunities",
            codeProfile: {
                roleLabel: "role",
                roleValue: "Full-Stack Dev",
                focusLabel: "focus",
                focusValue: "Efficient Solutions",
            },
        },
        about: {
            title: "About",
            me: "Me",
            description1: (
                <>
                    I am a developer focused on transforming business challenges
                    into efficient software. My work combines the robustness of{" "}
                    <strong className="text-gray-100">Java</strong> with the
                    agility of the{" "}
                    <strong className="text-gray-100">JavaScript</strong>{" "}
                    ecosystem.
                </>
            ),
            description2: (
                <>
                    In my current professional experience, I specialize in
                    translating complex needs into{" "}
                    <span className="text-blue-500 font-semibold">
                        data solutions
                    </span>{" "}
                    and automated reports using{" "}
                    <span className="text-blue-500 font-semibold">
                        Oracle SQL
                    </span>
                    . I also bring a solid background in critical system support
                    (NOC), where I developed resilience and a focus on
                    stability.
                </>
            ),
            description3: (
                <>
                    Today, my goal is to work as a{" "}
                    <span className="text-blue-500 font-semibold">
                        Full-Stack
                    </span>{" "}
                    developer, uniting{" "}
                    <strong className="text-gray-100">Spring Boot</strong> on
                    the back-end and{" "}
                    <span className="text-blue-500 font-semibold">
                        Next.js/React
                    </span>{" "}
                    on the front-end. I value clean code,{" "}
                    <span className="text-blue-500 font-semibold">TDD</span>,
                    and agile methodologies to deliver real and continuous
                    value.
                </>
            ),
            stackTitle: "My Stack",
            stackBackend: "Back-end & Java",
            stackFrontend: "Front-end",
            stackData: "Data & DevOps",
        },
        projects: {
            title: "My",
            subtitle: "Projects",
            description:
                "Real solutions developed with a focus on architecture, performance, and user experience.",
            items: [
                {
                    title: "Larica's Snack Bar",
                    description:
                        "Digital self-service platform for fast food. Focused on modern UX/UI to streamline the ordering flow.",
                    tags: ["JavaScript", "CSS", "HTML"],
                    image: "/projects/projeto-lanchonete.png",
                    github: "https://github.com/paulorag/lanchoneteLarica",
                    demo: "https://lanchonete-larica.vercel.app/",
                },
                {
                    title: "Game Deals Radar",
                    description:
                        "Smart Steam price monitoring. Uses Web Scraping (Jsoup) and scheduled Jobs to generate history and identify real deals.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "TypeScript",
                        "React",
                        "Next",
                        "Docker",
                        "PostgreSQL",
                    ],
                    image: "/projects/game-deals-radar.png",
                    github: "https://github.com/paulorag/gameDealsRadar",
                    demo: "https://game-deals-radar.vercel.app/",
                },
                {
                    title: "Room Scheduler",
                    description:
                        "Corporate solution for space management. Implements complex validation logic to avoid schedule conflicts.",
                    tags: [
                        "Java",
                        "Spring Boot",
                        "TypeScript",
                        "React",
                        "Next",
                        "Docker",
                        "PostgreSQL",
                    ],
                    image: "/projects/roomScheduler.png",
                    github: "https://github.com/paulorag/roomScheduler",
                    demo: "https://room-scheduler-gold.vercel.app/",
                },
            ],
        },
        footer: {
            title: "Let's",
            subtitle: "talk?",
            text: "I am available for new opportunities. If you are looking for a developer who combines Java solidity with React modernity, say hello.",
            copy: "Developed with Next.js 15 & Tailwind CSS.",
        },
    },
};
