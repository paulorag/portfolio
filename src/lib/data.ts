export const projects = [
    {
        title: "Game Deals Radar",
        description:
            "Rastreador de preços da Steam com automação em background. Utiliza Web Scraping (Jsoup) e Spring Scheduler para monitorar variações de valor periodicamente, gerando um histórico visual de ofertas reais.",
        tags: ["Spring Boot", "Jsoup", "Next.js"],
        image: "/projects/game-deals-radar.png",
        github: "https://github.com/paulorag/game-deals-radar",
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
];
