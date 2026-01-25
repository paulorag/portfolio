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
            role: "Engenheiro de Software em formação contínua. Desenvolvo projetos Full-Stack de ponta a ponta, aplicando boas práticas de arquitetura com Java (Spring Boot) e interfaces modernas com Next.js.",
            btnProject: "Ver Projetos",
            badge: "Disponível para novas oportunidades",
            codeProfile: {
                nameLabel: "nome",
                nameValue: "Paulo Gomes",
                roleLabel: "atuacao",
                roleValue: "Full-Stack Dev",
                stackLabel: "stack",
                stackValue: ["Java", "Spring", "React", "Next.js"],
                educationLabel: "formacao",
                educationValue: [
                    "Pós em Eng. Software",
                    "Bacharel (Em Andamento)",
                ],
                focusLabel: "foco",
                focusValue: "Soluções Eficientes",
            },
        },
        about: {
            title: "Sobre",
            me: "Mim",
            description1: (
                <>
                    Minha trajetória em TI começou com{" "}
                    <strong className="text-gray-100">suporte (NOC)</strong> e
                    consultoria, experiências que me ensinaram a lidar com
                    sistemas críticos e regras de negócio reais. Hoje, direciono
                    essa maturidade profissional para a{" "}
                    <strong className="text-gray-100">
                        Engenharia de Software
                    </strong>
                    .
                </>
            ),
            description2: (
                <>
                    Atualmente, atuo com o{" "}
                    <span className="text-blue-500 font-semibold">
                        ERP SoulMV
                    </span>
                    , onde vou além da consultoria padrão. Utilizo{" "}
                    <strong className="text-gray-100">SQL (Oracle)</strong> para
                    desenvolver relatórios personalizados e automações, unindo o
                    entendimento da regra de negócio hospitalar com a lógica de
                    banco de dados.
                </>
            ),
            description3: (
                <>
                    Como desenvolvedor{" "}
                    <span className="text-blue-500 font-semibold">
                        Full-Stack
                    </span>
                    , sou movido pela construção da solução completa. Utilizo{" "}
                    <strong className="text-gray-100">
                        Java (Spring Boot)
                    </strong>{" "}
                    para back-ends robustos e{" "}
                    <span className="text-blue-500 font-semibold">
                        React/Next.js
                    </span>{" "}
                    para interfaces modernas, sempre focado em entregar produtos
                    funcionais.
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
                    title: "Game Deals Radar",
                    description:
                        "Rastreador de preços da Steam com automação em background. Utiliza Web Scraping (Jsoup) e Spring Scheduler para monitorar variações de valor periodicamente, gerando um histórico visual de ofertas reais.",
                    tags: ["Spring Boot", "Jsoup", "Docker"],
                    image: "/projects/game-deals-radar.png",
                    github: "https://github.com/paulorag/gameDealsRadar",
                    demo: "https://game-deals-radar.vercel.app/",
                },
                {
                    title: "Room Scheduler",
                    description:
                        "Plataforma completa para aluguel e gestão de salas. Garante a integridade das reservas (prevenção de conflitos) com lógica robusta no Spring Boot e oferece controle de acesso seguro (Admin/User) via RBAC e JWT.",
                    tags: ["Spring Boot", "Spring Security", "Next.js"],
                    image: "/projects/roomScheduler.png",
                    github: "https://github.com/paulorag/roomScheduler",
                    demo: "https://room-scheduler-gold.vercel.app/",
                },
                {
                    title: "Lanchonete da Larica",
                    description:
                        "Aplicação de e-commerce desenvolvida com Vanilla JavaScript puro. Foca na manipulação avançada do DOM e gerenciamento de estado do carrinho (CRUD de itens e cálculo de totais) sem dependência de frameworks.",
                    tags: ["Vanilla JS", "CSS3", "HTML5"],
                    image: "/projects/projeto-lanchonete.png",
                    github: "https://github.com/paulorag/lanchoneteLarica",
                    demo: "https://lanchonete-larica.vercel.app/",
                },
            ],
        },
        footer: {
            title: "Vamos construir",
            subtitle: "algo juntos?",
            text: "Estou disponível para novos desafios. Se busca um desenvolvedor comprometido com a qualidade do código e a entrega do produto final, entre em contato.",
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
            role: "Software Engineer committed to continuous learning. I develop end-to-end Full-Stack projects, applying architectural best practices with Java (Spring Boot) and modern interfaces with Next.js.",
            btnProject: "See Projects",
            badge: "Available for new opportunities",
            codeProfile: {
                nameLabel: "name",
                nameValue: "Paulo Gomes",
                stackLabel: "stack",
                stackValue: ["Java", "Spring", "React", "Next.js"],
                roleLabel: "role",
                roleValue: "Full-Stack Dev",
                educationLabel: "education",
                educationValue: [
                    "Postgrad in Software Eng.",
                    "B.Sc. Software Eng. (In Progress)",
                ],
                focusLabel: "focus",
                focusValue: "Efficient Solutions",
            },
        },
        about: {
            title: "About",
            me: "Me",
            description1: (
                <>
                    My IT journey began with{" "}
                    <strong className="text-gray-100">support (NOC)</strong> and
                    consulting, experiences that taught me how to handle
                    critical systems and real business rules. Today, I channel
                    this professional maturity into{" "}
                    <strong className="text-gray-100">
                        Software Engineering
                    </strong>
                    .
                </>
            ),
            description2: (
                <>
                    Currently, I work with{" "}
                    <span className="text-blue-500 font-semibold">
                        SoulMV ERP
                    </span>
                    , going beyond standard consulting. I use{" "}
                    <strong className="text-gray-100">SQL (Oracle)</strong> to
                    develop custom reports and automations, combining hospital
                    business logic with database efficiency.
                </>
            ),
            description3: (
                <>
                    As a{" "}
                    <span className="text-blue-500 font-semibold">
                        Full-Stack
                    </span>{" "}
                    developer, I am driven by building complete solutions. I use{" "}
                    <strong className="text-gray-100">
                        Java (Spring Boot)
                    </strong>{" "}
                    for robust back-ends and{" "}
                    <span className="text-blue-500 font-semibold">
                        React/Next.js
                    </span>{" "}
                    for modern interfaces, always focused on delivering
                    functional products.
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
                    title: "Game Deals Radar",
                    description:
                        "Steam price tracker with background automation. Uses Web Scraping (Jsoup) and Spring Scheduler to periodically monitor value variations, generating a visual history of real deals.",
                    tags: ["Spring Boot", "Jsoup", "Docker"],
                    image: "/projects/game-deals-radar.png",
                    github: "https://github.com/paulorag/gameDealsRadar",
                    demo: "https://game-deals-radar.vercel.app/",
                },
                {
                    title: "Room Scheduler",
                    description:
                        "Complete platform for room rental and management. Ensures booking integrity (conflict prevention) with robust logic in Spring Boot and offers secure access control (Admin/User) via RBAC and JWT.",
                    tags: ["Spring Boot", "Spring Security", "Next.js"],
                    image: "/projects/roomScheduler.png",
                    github: "https://github.com/paulorag/roomScheduler",
                    demo: "https://room-scheduler-gold.vercel.app/",
                },
                {
                    title: "Larica's Snack Bar",
                    description:
                        "E-commerce application built with pure Vanilla JavaScript. Focuses on advanced DOM manipulation and cart state management (CRUD items, total calculation) with zero framework dependencies.",
                    tags: ["Vanilla JS", "CSS3", "HTML5"],
                    image: "/projects/projeto-lanchonete.png",
                    github: "https://github.com/paulorag/lanchoneteLarica",
                    demo: "https://lanchonete-larica.vercel.app/",
                },
            ],
        },
        footer: {
            title: "Let's build",
            subtitle: "together?",
            text: "I am available for new challenges. If you are looking for a developer committed to code quality and product delivery, get in touch.",
            copy: "Developed with Next.js 15 & Tailwind CSS.",
        },
    },
};
