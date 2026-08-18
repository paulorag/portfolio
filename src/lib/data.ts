import type { ProjectDetail } from "@/types/project";

export const projectsData: Record<"pt" | "en", ProjectDetail[]> = {
    pt: [
        {
            slug: "game-deals-radar",
            title: "Game Deals Radar",
            tagline: "Plataforma distribuída de inteligência de preços e agregação multi-lojas para jogos digitais",
            description:
                "Plataforma Full-Stack que automatiza a coleta de preços em lojas oficiais (Steam, Nuuvem), calcula menores preços históricos (All-Time Low) e renderiza tendências com gráficos interativos.",
            overview:
                "O Game Deals Radar é uma plataforma distribuída de monitoramento e agregação de preços em tempo real para jogos de PC. Projetado como um Monólito Modular orientado a domínio (DDD), o sistema coleta dados de múltiplos marketplaces (Steam e Nuuvem), aplica normalização e deduplicação canônica de títulos, detecta mínimas históricas (All-Time Lows) e entrega dashboards interativos com gráficos temporais (Recharts) e autenticação stateless segura via JWT.",
            problem:
                "O mercado de distribuição digital de jogos de PC é altamente fragmentado entre lojas oficiais (Steam, Nuuvem, Epic Games, GOG), cada qual com políticas de preços e promoções relâmpago independentes. Sem uma solução centralizada, os consumidores perdem mínimas históricas, sofrem com a dispersão de buscas manuais e não dispõem de dados consolidados sobre a oscilação real dos preços.",
            solution:
                "Engenharia de um Monólito Modular com Java 21 LTS e Spring Boot 3.4.5 no Back-End, utilizando o Strategy Pattern para extensibilidade plugável de scrapers multi-lojas (Jsoup e APIs). Implementação de deduplicação canônica com ranking de lojas, persistência relacional com PostgreSQL 15 e Flyway, e cache em memória multi-tenant com Caffeine. No Front-End, aplicação em Next.js 16 / React 19 (TypeScript e Tailwind CSS) com sincronização reativa via useSyncExternalStore e dashboards analíticos com Recharts.",
            features: [
                "Agregação Multi-Lojas: Coleta e sincronização contínua de preços para Steam e Nuuvem via Strategy Pattern",
                "Comparador de Ofertas & Best Deal: Comparativo em tempo real destacando a melhor oferta ativa (isBestDeal)",
                "Detecção de Menor Preço Histórico: Cálculo automático de mínimas históricas com badge visual (All-Time Low)",
                "Deduplicação Canônica de Títulos: Unificação inteligente de múltiplas lojas sob uma chave canônica de produto",
                "Autenticação Stateless Segura: Sessões via JWT com claims enriquecidos (UUID, roles) e hash BCrypt",
                "Dashboard Multi-Tenant: Catálogo personalizado de jogos rastreados com isolamento estrito de dados por usuário",
                "Visualização Gráfica Temporal: Gráficos dinâmicos de tendência com filtros por período (6 meses, 1 ano, todo o histórico)",
                "Qualidade & Testes Automatizados: Suíte completa com JUnit 5, Mockito, AssertJ (42+ testes) e CI no GitHub Actions",
            ],
            challenges: [
                {
                    title: "Arquitetura Plugável de Scrapers (Strategy Pattern)",
                    description:
                        "Criação de contratos de scraping desacoplados que permitem integrar novos marketplaces (Epic Games, GOG) sem impacto na lógica do catálogo central.",
                },
                {
                    title: "Deduplicação Canônica & Tratamento de Rate Limits",
                    description:
                        "Normalização alfanumérica de títulos com ranking de prioridade entre lojas e controle de requisições para garantir extração contínua e estável.",
                },
                {
                    title: "Sincronização de Estado & Hydration no Next.js 16",
                    description:
                        "Uso de useSyncExternalStore para leitura segura de tokens JWT no client sem causar erros de Hydration Mismatch no React 19.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Next.js 16", "PostgreSQL", "Docker", "Recharts", "JWT", "Flyway", "Jsoup", "Caffeine"],
            category: "fullstack",
            featured: true,
            image: "/projects/gameDealsRadar-preview.png",
            demo: "https://game-deals-radar.vercel.app/",
            isPrivate: true,
            releaseYear: "2025",
            coldStartNotice:
                "O Back-End desta aplicação está hospedado no plano gratuito do Render. Caso o serviço esteja em repouso (cold start), a primeira inicialização pode levar de 30 a 120 segundos para carregar os dados.",
            architecture: {
                frontend: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Recharts",
                backend: "Java 21 LTS, Spring Boot 3.4.5, Spring Security 6, JWT, Jsoup, Caffeine Cache",
                database: "PostgreSQL 15, Spring Data JPA, Hibernate, Flyway Migrations",
                devops: "Docker, Docker Compose, GitHub Actions (CI), Vitest, JUnit 5",
            },
        },
        {
            slug: "room-scheduler",
            title: "Room Scheduler",
            tagline: "Plataforma de gestão e aluguel de salas com controle de concorrência e RBAC",
            description:
                "Plataforma corporativa para aluguel e gestão de salas. Garante a integridade das reservas (prevenção de conflitos) com lógica transacional no Spring Boot e oferece controle de acesso seguro (Admin/User) via RBAC e JWT.",
            overview:
                "O Room Scheduler é um sistema full-stack corporativo projetado para empresas e espaços compartilhados que necessitam de governança rigorosa sobre salas e recursos. A plataforma elimina conflitos de agendamento através de validações atômicas e oferece controle de perfis de usuário (Admin e Usuário padrão).",
            problem:
                "Conflitos de agendamento em ambientes compartilhados geram atritos e perda de produtividade. Planilhas e sistemas descentralizados não garantem controle de concorrência nem auditoria de quem reservou cada espaço.",
            solution:
                "Implementação de uma API REST com Java, Spring Boot 3 e Spring Security com autenticação JWT. A lógica de reserva utiliza transações atômicas com validação de intervalos de horário no banco de dados, prevenindo conflitos mesmo com requisições concorrentes.",
            features: [
                "Autenticação e autorização robusta via JWT (JSON Web Tokens)",
                "Controle de acesso baseado em papéis (RBAC: Admin e Usuário)",
                "Validação atômica de conflitos de horário em tempo real",
                "Painel administrativo para cadastro e gerenciamento de salas",
                "Interface moderna e responsiva com Next.js e Tailwind CSS",
            ],
            challenges: [
                {
                    title: "Prevenção de Race Conditions",
                    description:
                        "Garantir que duas requisições simultâneas para o mesmo horário e sala não resultem em agendamento duplo através de bloqueio transacional e constraints no banco.",
                },
                {
                    title: "Segurança Granular",
                    description:
                        "Configuração de filtros do Spring Security para proteger rotas administrativas e garantir que usuários gerenciem apenas suas próprias reservas.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "Next.js"],
            category: "fullstack",
            featured: true,
            image: "/projects/roomScheduler.png",
            github: "https://github.com/paulorag/roomScheduler",
            demo: "https://room-scheduler-gold.vercel.app/",
            releaseYear: "2024",
            architecture: {
                frontend: "Next.js, TypeScript, Tailwind CSS, React Hooks",
                backend: "Java 21, Spring Boot 3, Spring Data JPA, Spring Security",
                database: "PostgreSQL",
                devops: "Docker, Vercel",
            },
        },
        {
            slug: "autoflex-planejamento-producao",
            title: "Autoflex - Planejamento de Produção",
            tagline: "Sistema de manufatura industrial com algoritmo de capacidade produtiva e testes E2E",
            description:
                "Sistema Full Stack para gerenciamento de recursos fabris e planejamento de linha de produção. Conta com algoritmo automatizado para cálculo de capacidade produtiva baseado em estoque (relações N:N) e arquitetura validada por testes E2E (Cypress).",
            overview:
                "O Autoflex é um sistema industrial desenvolvido para auxiliar gestores de manufatura a planejarem sua produção com base na disponibilidade real de insumos. O sistema calcula automaticamente a quantidade máxima de itens prontos que podem ser fabricados a partir das matérias-primas em estoque.",
            problem:
                "Linhas de produção frequentemente sofrem paralisações por falta de insumos específicos ou erros de cálculo em fórmulas de produtos com dezenas de matérias-primas compartilhadas.",
            solution:
                "Criação de um algoritmo em Spring Boot que processa grafos de relacionamento N:N entre produtos e insumos, identificando o 'fator limitante' do estoque. A confiabilidade do sistema é garantida por uma suíte completa de testes automatizados E2E com Cypress.",
            features: [
                "Cálculo automatizado de capacidade produtiva por matéria-prima",
                "Gestão de estoque de insumos e catálogo de produtos finais",
                "Mapeamento de relações N:N entre insumos e produtos",
                "Suíte de testes de ponta a ponta (E2E) com Cypress",
                "Ambiente dockerizado para fácil execução e deploy",
            ],
            challenges: [
                {
                    title: "Complexidade Algorítmica",
                    description:
                        "Otimização do cálculo de dependência de múltiplos insumos para recalcular projeções de estoque sem degradação de desempenho.",
                },
                {
                    title: "Cobertura de Testes E2E",
                    description:
                        "Criação de cenários de teste automatizados em Cypress que simulam fluxos complexos de entrada de insumos e ordens de fabricação.",
                },
            ],
            tags: ["React", "Spring Boot", "Docker", "PostgreSQL", "Cypress"],
            category: "fullstack",
            featured: false,
            image: "/projects/autoflex.png",
            github: "https://github.com/paulorag/autoflex-test",
            demo: "https://autoflex-test.vercel.app/",
            releaseYear: "2024",
            architecture: {
                frontend: "React, TypeScript, CSS Modules",
                backend: "Java, Spring Boot, Spring Data JPA",
                database: "PostgreSQL",
                devops: "Docker, Cypress, Vercel",
            },
        },
        {
            slug: "lanchonete-da-larica",
            title: "Lanchonete da Larica",
            tagline: "Cardápio digital, gestão de comandas (KDS) e dashboard de analytics com checkout no WhatsApp",
            description:
                "Aplicação Web Full Stack para digitalização de pedidos, catálogo em tempo real, painel de comandas (KDS), dashboard de analytics e checkout estruturado integrado ao WhatsApp.",
            overview:
                "A Lanchonete da Larica é uma solução digital completa (SaaS-like) desenvolvida para modernizar ponta a ponta a operação de atendimento, cozinha e inteligência de vendas de uma hamburgueria artesanal. O sistema elimina atritos de pedidos manuais por mensagem e as altas taxas de comissão de marketplaces (como iFood), entregando uma experiência web fluida com fechamento no WhatsApp, esteira de produção para cozinha (KDS) e controle operacional e comercial em tempo real no painel administrativo.",
            problem:
                "Lanchonetes e negócios gastronômicos locais frequentemente sofrem com atendimento lento por mensagem (trocas manuais de fotos, PDFs e preços desatualizados), dependência de marketplaces com comissões de até 27%, falta de controle de fila e pedidos perdidos na cozinha, além da ausência total de dados sobre faturamento diário, ticket médio e produtos campeões de venda.",
            solution:
                "Arquitetura de uma plataforma Web Full Stack integrada. O Front-End foi construído em JavaScript Moderno (ES6+) com Design Tokens CSS modulares, carrinho reativo com persistência local e gerador de comandas codificadas para a API do WhatsApp com registro assíncrono automático no banco. O Back-End em Node.js e Express fornece uma API RESTful modular com autenticação JWT, hash bcrypt, motor de agregação analítica de vendas e esteira de comandas com 4 status de preparo, persistindo dados no PostgreSQL (Neon Cloud) via Prisma ORM.",
            features: [
                "Experiência do Cliente Fluida: Cardápio interativo com busca em tempo real (debounce) e filtros por categoria",
                "Modal de Detalhes & Personalização: Visualização de ingredientes, fotos em alta resolução e ajuste fino de quantidades",
                "Carrinho Reativo (Cart Drawer): Sincronização em tempo real, cálculo automático em BRL (R$) e persistência no localStorage",
                "Checkout Inteligente com Registro Automático: Escolha entre Delivery ou Retirada, validação de endereço, registro no banco e envio estruturado ao WhatsApp",
                "Painel de Comandas em Tempo Real (KDS): Esteira de produção com 4 status (A Confirmar, Em Fila, Na Chapa e Concluído) e link direto para contato",
                "Dashboard de Vendas & Business Intelligence: KPIs de faturamento, ticket médio, total de pedidos, ranking Top 5 mais vendidos e gráficos de canais/pagamentos",
                "Painel Administrativo Mobile-First: Backoffice seguro com JWT e bcrypt para gerenciamento e edição rápida de produtos pelo smartphone",
                "Qualidade & Testes Automatizados: Suíte com 41 testes automatizados (Jest e Supertest) cobrindo autenticação, CRUD, pedidos e métricas",
            ],
            challenges: [
                {
                    title: "Arquitetura KDS & Ciclo de Vida do Pedido",
                    description:
                        "Implementação de uma esteira de produção de pedidos com confirmação explícita no balcão e transição atômica de status (Aguardando Confirmação -> Pendente -> Em Preparo -> Concluído), sincronizando o fluxo da cozinha com os pedidos recebidos no WhatsApp.",
                },
                {
                    title: "Business Intelligence & Agregação sem Overhead",
                    description:
                        "Estruturação de consultas relacionais otimizadas no Prisma ORM para calcular faturamento diário, ticket médio, distribuição de pagamentos e ranking de vendas com filtragem por período dinâmico sem sobrecarregar o banco.",
                },
                {
                    title: "Design System Customizado & Mobile-First",
                    description:
                        "Criação de tokens CSS (:root) e tipografia fluida com clamp(), garantindo adaptação perfeita e responsividade em smartphones (360px) até monitores ultra-wide sem o overhead de bibliotecas pesadas.",
                },
            ],
            tags: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "JavaScript (ES6+)", "JWT", "Jest", "KDS", "Analytics", "Vercel"],
            category: "fullstack",
            featured: false,
            image: "/projects/projeto-lanchonete.png",
            gallery: [
                {
                    title: "Dashboard de Vendas & Analytics",
                    image: "/projects/lanchonete/dashboard-vendas.png",
                    description: "KPIs em tempo real (Faturamento, Ticket Médio, Total de Pedidos), Ranking dos Top 5 mais vendidos e distribuição de canais e pagamentos.",
                },
                {
                    title: "Painel de Comandas & KDS em Tempo Real",
                    image: "/projects/lanchonete/comandas.png",
                    description: "Esteira de produção da cozinha com 4 status (Aguardando Confirmação, Em Fila, Na Chapa e Concluído) e link direto para WhatsApp.",
                },
                {
                    title: "Gestão do Cardápio & Cadastro de Produtos",
                    image: "/projects/lanchonete/cadastro-produto.png",
                    description: "Interface mobile-first para cadastro e edição rápida de produtos com upload de fotos e modais bottom-sheet.",
                },
                {
                    title: "Autenticação Administrativa Segura (JWT)",
                    image: "/projects/lanchonete/login-admin.png",
                    description: "Tela de login restrita para administradores com validação de credenciais, hash bcrypt e emissão de token JWT.",
                },
                {
                    title: "Cardápio Digital & Modal de Ingredientes",
                    image: "/projects/lanchonete/cardapio.png",
                    description: "Catálogo interativo com busca em tempo real (debounce), filtros por categoria e modal de ingredientes e quantidades.",
                },
                {
                    title: "Landing Page 'Dark Burger Bar'",
                    image: "/projects/lanchonete/home.png",
                    description: "Identidade visual temática e acolhedora com produto em destaque e atalho direto para personalização e pedidos.",
                },
                {
                    title: "Localização, Horários & Contato",
                    image: "/projects/lanchonete/contato.png",
                    description: "Informações institucionais, cálculo dinâmico de status da cozinha aberta/fechada e canais diretos de atendimento.",
                },
            ],
            demo: "https://lanchonetelarica.vercel.app/",
            isPrivate: true,
            releaseYear: "2024",
            architecture: {
                frontend: "HTML5 Semântico, CSS3 Modular (Design Tokens), JavaScript Moderno (ES6+), LocalStorage",
                backend: "Node.js, Express.js, REST API, JWT, bcryptjs, Multer",
                database: "PostgreSQL 16 (Neon Cloud Database), Prisma ORM",
                devops: "Vercel (Edge CDN & Serverless Functions), Neon Cloud, Jest, Supertest (41 testes)",
            },
        },
    ],
    en: [
        {
            slug: "game-deals-radar",
            title: "Game Deals Radar",
            tagline: "Distributed price intelligence and multi-store deal aggregation platform for PC games",
            description:
                "Full-Stack platform that automates multi-store deal scraping (Steam, Nuuvem), detects All-Time Low records, and renders price trends with interactive time-series charts.",
            overview:
                "Game Deals Radar is an enterprise-grade distributed platform for real-time price monitoring and deal aggregation across PC digital game stores. Engineered following Domain-Driven Design (DDD) modular monolith principles, the system scrapes official storefronts (Steam and Nuuvem), normalizes titles with canonical deduplication, detects historic price records (All-Time Lows), and renders interactive time-series charts (Recharts) with tenant-isolated stateless JWT authentication.",
            problem:
                "The PC digital game distribution market is fragmented across multiple official storefronts (Steam, Nuuvem, Epic Games, GOG). Each platform operates with independent pricing structures and seasonal flash deals. Consumers miss historic discounts, waste time checking storefronts manually, and lack consolidated time-series tracking of real price variations.",
            solution:
                "Engineered a Domain-Driven Modular Monolith using Java 21 LTS and Spring Boot 3.4.5 on the Back-End, leveraging the Strategy Pattern for pluggable multi-store scrapers (Jsoup and APIs). Implemented canonical title deduplication with priority ranking, PostgreSQL 15 persistence with Flyway migrations, and multi-tenant Caffeine in-memory caching. The Front-End is built with Next.js 16 / React 19 (TypeScript, Tailwind CSS) with useSyncExternalStore for hydration-safe auth states and Recharts time-series dashboards.",
            features: [
                "Multi-Store Scraping Engine: Continuous price aggregation for Steam and Nuuvem using Strategy Pattern",
                "Real-Time Deal Comparator: Cross-store price comparison highlighting the lowest active offer (isBestDeal)",
                "All-Time Low Detection: Automated calculation of historic record lows with visual indicators",
                "Canonical Title Deduplication: Normalizes multi-store offerings into clean consolidated product cards",
                "Stateless JWT Authentication: Secure session management with claims-enriched tokens and BCrypt hashing",
                "Multi-Tenant User Watchlist: Personalized monitoring dashboard with strict tenant data isolation",
                "Interactive Time-Series Graphs: Recharts price history trends with custom time filters (6M, 1Y, All-Time)",
                "Automated Test Suite & CI: 42+ unit and integration tests with JUnit 5, Mockito, AssertJ, and GitHub Actions CI",
            ],
            challenges: [
                {
                    title: "Pluggable Scraper Architecture (Strategy Pattern)",
                    description:
                        "Designed decoupled scraper contracts enabling seamless integration of new storefronts (Epic Games, GOG) without modifying core domain logic.",
                },
                {
                    title: "Canonical Deduplication & Scraping Resilience",
                    description:
                        "Alphanumeric title normalization with store priority ranking and request throttling to ensure uninterrupted data collection.",
                },
                {
                    title: "Safe Client-State Sync in Next.js 16",
                    description:
                        "Leveraged useSyncExternalStore to synchronize client-side JWT states without triggering React 19 hydration mismatches.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Next.js 16", "PostgreSQL", "Docker", "Recharts", "JWT", "Flyway", "Jsoup", "Caffeine"],
            category: "fullstack",
            featured: true,
            image: "/projects/gameDealsRadar-preview.png",
            demo: "https://game-deals-radar.vercel.app/",
            isPrivate: true,
            releaseYear: "2025",
            coldStartNotice:
                "The Back-End for this application is hosted on Render's free tier. If the service is currently sleeping (cold start), the initial request may take between 30 and 120 seconds to respond.",
            architecture: {
                frontend: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Recharts",
                backend: "Java 21 LTS, Spring Boot 3.4.5, Spring Security 6, JWT, Jsoup, Caffeine Cache",
                database: "PostgreSQL 15, Spring Data JPA, Hibernate, Flyway Migrations",
                devops: "Docker, Docker Compose, GitHub Actions (CI), Vitest, JUnit 5",
            },
        },
        {
            slug: "room-scheduler",
            title: "Room Scheduler",
            tagline: "Smart room booking and management platform with concurrency control and RBAC",
            description:
                "Complete enterprise platform for room rental and management. Ensures booking integrity (conflict prevention) with atomic transactions in Spring Boot and offers secure access control (Admin/User) via RBAC and JWT.",
            overview:
                "Room Scheduler is an enterprise full-stack system designed for companies and coworking spaces requiring seamless room reservation management. It provides secure authentication, distinct user permission tiers, and strict business logic to eliminate overlapping bookings.",
            problem:
                "Scheduling conflicts in shared workspaces cause friction and lost productivity. Spreadsheets and decentralized tools fail to enforce concurrency control or accountability.",
            solution:
                "Built a RESTful API with Java 21, Spring Boot 3, and Spring Security using JWT authentication. Booking logic leverages atomic database transactions to validate timeslot boundaries and prevent overlaps under high concurrency.",
            features: [
                "Authentication and authorization via JWT (JSON Web Tokens)",
                "Role-Based Access Control (RBAC: Admin and Standard User)",
                "Real-time atomic booking overlap validation",
                "Admin dashboard for room and inventory management",
                "Modern Next.js interface with clear visual feedback",
            ],
            challenges: [
                {
                    title: "Race Condition Prevention",
                    description:
                        "Guaranteeing that concurrent booking requests for the same room and timeslot never cause double-booking through database constraints and transactional locks.",
                },
                {
                    title: "Granular Security Rules",
                    description:
                        "Configuring Spring Security filter chains to safeguard administrative routes while enabling users to manage only their own reservations.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "Next.js"],
            category: "fullstack",
            featured: true,
            image: "/projects/roomScheduler.png",
            github: "https://github.com/paulorag/roomScheduler",
            demo: "https://room-scheduler-gold.vercel.app/",
            releaseYear: "2024",
            architecture: {
                frontend: "Next.js, TypeScript, Tailwind CSS, React Hooks",
                backend: "Java 21, Spring Boot 3, Spring Data JPA, Spring Security",
                database: "PostgreSQL",
                devops: "Docker, Vercel",
            },
        },
        {
            slug: "autoflex-planejamento-producao",
            title: "Autoflex - Production Planning",
            tagline: "Manufacturing resource management system with automated capacity algorithms & E2E tests",
            description:
                "Full Stack system for manufacturing resource management and production line planning. Features an automated algorithm to calculate production capacity based on current stock (N:N relationships) and an architecture validated by E2E tests (Cypress).",
            overview:
                "Autoflex is an industrial web system engineered to help plant managers plan production runs based on real inventory availability. It automatically computes the maximum possible batch size for finished products according to raw material stock.",
            problem:
                "Factory production lines frequently stall due to unexpected stockouts or human calculation errors in multi-ingredient bills of materials.",
            solution:
                "Created an algorithmic engine in Spring Boot evaluating N:N relational graphs between products and raw ingredients. Complete end-to-end reliability is guaranteed with automated Cypress E2E test suites.",
            features: [
                "Automated production capacity calculation based on bottleneck stock",
                "Raw materials inventory & finished product catalog management",
                "N:N relational mapping between ingredients and products",
                "Comprehensive end-to-end (E2E) test suite with Cypress",
                "Dockerized environment for effortless deployment and execution",
            ],
            challenges: [
                {
                    title: "Algorithmic Efficiency",
                    description:
                        "Optimizing multi-ingredient dependency calculations to recompute stock projections instantly without degrading server response times.",
                },
                {
                    title: "E2E Test Suite Automation",
                    description:
                        "Building automated Cypress test scenarios simulating complex warehouse workflows and manufacturing orders.",
                },
            ],
            tags: ["React", "Spring Boot", "Docker", "PostgreSQL", "Cypress"],
            category: "fullstack",
            featured: false,
            image: "/projects/autoflex.png",
            github: "https://github.com/paulorag/autoflex-test",
            demo: "https://autoflex-test.vercel.app/",
            releaseYear: "2024",
            architecture: {
                frontend: "React, TypeScript, CSS Modules",
                backend: "Java, Spring Boot, Spring Data JPA",
                database: "PostgreSQL",
                devops: "Docker, Cypress, Vercel",
            },
        },
        {
            slug: "lanchonete-da-larica",
            title: "Lanchonete da Larica",
            tagline: "Digital menu, Kitchen Display System (KDS) & sales analytics with automated WhatsApp checkout",
            description:
                "Full-Stack web application for digital ordering, real-time catalog management, Kitchen Display System (KDS), sales analytics dashboard, and structured WhatsApp checkout.",
            overview:
                "Lanchonete da Larica is an end-to-end digital ordering and operations management platform (SaaS-like) engineered for an artisan burger restaurant. The platform eliminates manual chat overhead and steep delivery marketplace commissions (up to 27%), providing a frictionless web experience with automated direct-to-WhatsApp order dispatching, a 4-stage kitchen order lifecycle (KDS), and live backoffice analytics.",
            problem:
                "Local food businesses frequently grapple with slow order intake via chat (outdated PDF menus, back-and-forth price confirmations), heavy dependency on delivery marketplaces charging up to 27% commissions, kitchen operational chaos with lost orders, and zero real-time visibility into daily revenue, average ticket per customer, and best-selling item rankings.",
            solution:
                "Engineered a high-performance Full Stack Web Application. The Front-End is built with Modern JavaScript (ES6+) and modular CSS Design Tokens, featuring a persistent reactive cart and encoded ticket generator for the WhatsApp API with automatic background order ingestion. The Node.js and Express RESTful Back-End provides JWT authentication, bcrypt password hashing, a real-time sales aggregation engine, and a Kitchen Display System (KDS) with 4 preparation stages, persisting data in PostgreSQL (Neon Cloud) via Prisma ORM.",
            features: [
                "Frictionless Customer Experience: Interactive catalog with real-time debounced search and category filters",
                "Interactive Customization Modal: High-resolution image inspection, ingredient lists, and granular quantity controls",
                "Reactive Cart Drawer: Real-time badge syncing, automatic BRL (R$) formatting, and localStorage persistence",
                "Intelligent WhatsApp Checkout Engine: Delivery vs. Takeout selector, address validation, automatic DB ingestion, and structured ticket formatting",
                "Real-Time Kitchen Display System (KDS): 4-stage order pipeline (Awaiting Confirmation, In Queue, In Prep, and Completed) with 1-click WhatsApp messaging",
                "Sales Analytics & Business Intelligence: Real-time KPIs (Revenue, Average Ticket, Order Volume), Top 5 Best-Sellers leaderboard, and payment breakdown",
                "Mobile-First Administrative Backoffice: Secure JWT and bcrypt dashboard optimized for quick counter management on smartphones",
                "Automated Quality Assurance: 41 unit and integration test suites using Jest and Supertest across auth, CRUD, orders, and analytics",
            ],
            challenges: [
                {
                    title: "Real-Time KDS Architecture & Order Lifecycle",
                    description:
                        "Engineered a practical restaurant order pipeline supporting explicit kitchen acceptance and atomic status transitions (Awaiting Confirmation -> In Queue -> In Prep -> Completed), ensuring the kitchen staff stays synchronized with orders coming through WhatsApp.",
                },
                {
                    title: "Lightweight Business Intelligence Aggregation",
                    description:
                        "Optimized relational SQL queries via Prisma ORM yielding real-time commercial KPIs (Revenue, Average Ticket, Top Products, Payment Breakdown) with dynamic period filtering without third-party library bloat.",
                },
                {
                    title: "Fluid Mobile-First Design System Architecture",
                    description:
                        "Created a cohesive CSS custom property token system (:root) and fluid typography with clamp(), ensuring full responsiveness from 320px smartphones up to ultra-wide monitors with zero framework overhead.",
                },
            ],
            tags: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "JavaScript (ES6+)", "JWT", "Jest", "KDS", "Analytics", "Vercel"],
            category: "fullstack",
            featured: false,
            image: "/projects/projeto-lanchonete.png",
            gallery: [
                {
                    title: "Sales Analytics & Business Intelligence",
                    image: "/projects/lanchonete/dashboard-vendas.png",
                    description: "Real-time KPIs (Revenue, Average Ticket, Order Volume), Top 5 Best-Sellers leaderboard, and payment method distribution.",
                },
                {
                    title: "Kitchen Display System (KDS)",
                    image: "/projects/lanchonete/comandas.png",
                    description: "4-stage kitchen order pipeline (Awaiting Confirmation, In Queue, In Prep, and Completed) with 1-click WhatsApp messaging.",
                },
                {
                    title: "Catalog Management & Product Editor",
                    image: "/projects/lanchonete/cadastro-produto.png",
                    description: "Mobile-first backoffice for rapid product creation and editing with image uploads and slide-up bottom-sheets.",
                },
                {
                    title: "Secure Admin Authentication (JWT)",
                    image: "/projects/lanchonete/login-admin.png",
                    description: "Restricted administrative login screen with credential validation, bcrypt hashing, and JWT token issuance.",
                },
                {
                    title: "Digital Menu & Customization Modal",
                    image: "/projects/lanchonete/cardapio.png",
                    description: "Interactive catalog with real-time debounced search, category filters, and ingredient inspection modal.",
                },
                {
                    title: "Landing Page 'Dark Burger Bar'",
                    image: "/projects/lanchonete/home.png",
                    description: "Thematic and immersive visual identity with featured burger callout and direct ordering flow.",
                },
                {
                    title: "Location, Business Hours & Contact",
                    image: "/projects/lanchonete/contato.png",
                    description: "Operational info, real-time dynamic kitchen open/closed status, and direct contact channels.",
                },
            ],
            demo: "https://lanchonetelarica.vercel.app/",
            isPrivate: true,
            releaseYear: "2024",
            architecture: {
                frontend: "Semantic HTML5, Modular CSS3 (Design Tokens), Modern JavaScript (ES6+), LocalStorage",
                backend: "Node.js, Express.js, REST API, JWT, bcryptjs, Multer",
                database: "PostgreSQL 16 (Neon Cloud Database), Prisma ORM",
                devops: "Vercel (Edge CDN & Serverless Functions), Neon Cloud, Jest, Supertest (41 tests)",
            },
        },
    ],
};

export function getProjects(lang: "pt" | "en" = "pt"): ProjectDetail[] {
    return projectsData[lang] || projectsData.pt;
}

export function getProjectBySlug(slug: string, lang: "pt" | "en" = "pt"): ProjectDetail | undefined {
    const list = getProjects(lang);
    return list.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projectsData.pt.map((p) => p.slug);
}

// Backward compatibility export
export const projects = projectsData.pt;
