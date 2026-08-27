import type { ProjectDetail } from "@/types/project";

export const projectsData: Record<"pt" | "en", ProjectDetail[]> = {
    pt: [
        {
            slug: "game-deals-radar",
            title: "Game Deals Radar",
            tagline: "Plataforma distribuída de inteligência de preços, agregação multi-lojas e automação de alertas para jogos digitais",
            description:
                "Plataforma Full-Stack com Monólito Modular (Java 21 / Spring Boot 3.4 & Next.js 16) que automatiza o scraping multi-lojas (Steam, Nuuvem), integra a API IsThereAnyDeal, agrega jogos grátis da semana e dispara alertas no Discord.",
            overview:
                "O Game Deals Radar é uma plataforma distribuída de inteligência de preços e monitoramento contínuo de promoções para jogos de PC em tempo real. Projetado como um Monólito Modular orientado a domínio (DDD), o sistema coleta dados de múltiplos marketplaces (Steam e Nuuvem), resolve o recorde histórico global em BRL via API IsThereAnyDeal v2 desde 2011, agrega jogos 100% grátis com contagem regressiva, calcula economia acumulada e dispara alertas automáticos no Discord via Rich Embeds quando metas de preço alvo são atingidas.",
            problem:
                "O mercado de distribuição digital de jogos de PC é fragmentado entre lojas oficiais (Steam, Nuuvem, Epic Games, GOG), cada uma com calendários promocionais isolados. Os consumidores perdem ofertas históricas por falta de dados consolidados desde 2011, perdem tempo pesquisando manualmente em múltiplos sites e deixam de resgatar jogos gratuitos semanais por ausência de notificações centralizadas.",
            solution:
                "Engenharia de um Monólito Modular de alta performance. O Back-End em Java 21 LTS e Spring Boot 3.4.5 implementa Strategy Pattern para scrapers plugáveis (Jsoup e APIs), integração com IsThereAnyDeal v2 para semeadura histórica de preços, Webhook Dispatcher para Discord, proteção Anti-SSRF e Rate Limiting no padrão OWASP, persistindo no PostgreSQL 15 via Flyway (V1..V7) com cache Caffeine multi-tenant e 95 testes automatizados. O Front-End em Next.js 16 (App Router com Turbopack), React 19 e Tailwind CSS conta com busca instantânea com autocomplete, importador 1-click de Wishlist da Steam, radar de jogos grátis e gráficos de séries temporais com Recharts.",
            features: [
                "Agregação Multi-Lojas & Best Deal: Coleta contínua de preços para Steam e Nuuvem com destaque automático da melhor oferta ativa",
                "Baseline Histórico IsThereAnyDeal v2: Resolução do menor preço histórico real desde 2011 em BRL, eliminando cold-start de dados",
                "Radar de Jogos Grátis (Freebies Feed): Agregação pública de jogos 100% gratuitos da semana (Epic Games, Steam, GOG) com contagens regressivas e guias de resgate",
                "Motor de Alertas via Discord: Disparo automático de Rich Embeds estilizados quando o preço atinge o valor alvo ou menor preço histórico",
                "Autocomplete em Tempo Real & Importador Wishlist Steam: Busca instantânea com debounce de 300ms e importação em lote da lista de desejos em 1 clique",
                "Dashboard de Métricas Financeiras: Contabilidade em tempo real de economia acumulada versus preço cheio e média de desconto da lista",
                "Visualização Gráfica Temporal: Gráficos dinâmicos com Recharts exibindo séries históricas de preço com filtros temporais (6M, 1A, total)",
                "Hardening de Segurança OWASP: Proteção Anti-SSRF completa com validação de DNS/IPs privados, Security Headers (CSP, HSTS) e Rate Limiting por IP",
                "Arquitetura Monólito Modular & DDD: Separação coesa de bounded contexts (auth, catalog, scraper, freebies, notifications, analytics)",
                "Qualidade & 95 Testes Automatizados: Suíte completa no backend (JUnit 5, Mockito, AssertJ) e frontend (Vitest, RTL) com CI no GitHub Actions",
            ],
            challenges: [
                {
                    title: "Arquitetura Plugável de Scrapers (Strategy Pattern)",
                    description:
                        "Criação de contratos de scraping desacoplados que permitem plugar novos marketplaces (Epic Games, GOG) sem acoplamento ou modificação nas regras centrais de catálogo.",
                },
                {
                    title: "Hardening de Segurança & Proteção Anti-SSRF",
                    description:
                        "Implementação de validador de segurança com allowlist estrita e resolução de DNS antes de qualquer requisição externa, bloqueando faixas de IP privadas, loopback e metadados de nuvem (169.254.169.254).",
                },
                {
                    title: "Semeadura Histórica com IsThereAnyDeal & Cache Multi-Tenant",
                    description:
                        "Eliminação do problema de cold-start de histórico através de enriquecimento automático com ITAD v2 e caching em memória segmentado por usuário e query no Caffeine Cache.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Next.js 16", "PostgreSQL", "Docker", "Recharts", "JWT", "Flyway", "Jsoup", "Caffeine", "Discord Webhooks", "OWASP"],
            category: "fullstack",
            featured: true,
            image: "/projects/gameDealsRadar-preview.png",
            gallery: [
                {
                    title: "Home & Vitrine de Ofertas Populares",
                    image: "/projects/gameDealsRadar/home.png",
                    description: "Ranking em tempo real dos títulos mais monitorados com indicação da melhor oferta ativa e badges de menor preço histórico.",
                },
                {
                    title: "Dashboard Pessoal & Métricas Financeiras",
                    image: "/projects/gameDealsRadar/dashboard.png",
                    description: "Watchlist personalizada com definição de preço alvo, comparador de lojas e contabilidade da economia acumulada.",
                },
                {
                    title: "Radar de Jogos Grátis (Freebies Feed)",
                    image: "/projects/gameDealsRadar/jogos-gratis.png",
                    description: "Feed de jogos 100% gratuitos da semana (Epic Games, Steam, GOG) com contagens regressivas ao vivo e guias de resgate.",
                },
                {
                    title: "Histórico de Preços & Alertas Discord",
                    image: "/projects/gameDealsRadar/monitoramento.png",
                    description: "Visualização gráfica de séries temporais com Recharts, filtros por período e automação de alertas via Discord Webhooks.",
                },
            ],
            demo: "https://game-deals-radar.vercel.app/",
            isPrivate: true,
            releaseYear: "2025",
            coldStartNotice:
                "O Back-End desta aplicação está hospedado no plano gratuito do Render. Caso o serviço esteja em repouso (cold start), a primeira inicialização pode levar de 30 a 120 segundos para carregar os dados.",
            architecture: {
                frontend: "Next.js 16 (App Router com Turbopack), React 19, TypeScript, Tailwind CSS, Recharts",
                backend: "Java 21 LTS, Spring Boot 3.4.5, Spring Security 6, JWT, Jsoup, Caffeine Cache, Discord Webhooks",
                database: "PostgreSQL 15, Spring Data JPA, Hibernate, Flyway Migrations (V1..V7)",
                devops: "Docker, Docker Compose, GitHub Actions (CI), JUnit 5, Mockito, AssertJ, Vitest (95 testes)",
            },
        },
        {
            slug: "orderly",
            title: "Orderly",
            tagline: "Plataforma White-Label de Cardápio Digital, Gestão de Comandas (KDS), Cupons & Analytics",
            description:
                "Plataforma SaaS full-stack para restaurantes: cardápio digital interativo, checkout no WhatsApp, motor de cupons, KDS com alertas sonoros e impressão térmica, webhook dispatcher e analytics comercial.",
            overview:
                "O Orderly é uma plataforma web full-stack completa (SaaS-ready e White-Label) desenvolvida para modernizar a operação ponta a ponta de restaurantes, hamburguerias e negócios de delivery. O sistema elimina as altas taxas de marketplaces (que chegam a 27%), converte pedidos no WhatsApp com validação de frete e cupons em tempo real, organiza a cozinha via display KDS com alertas sonoros (Web Audio API) e impressão térmica (80mm/58mm), dispara notificações automáticas/webhooks e fornece dashboard analítico completo com métricas de vendas e exportação CSV.",
            problem:
                "Restaurantes e negócios gastronômicos sofrem com altas taxas de intermediação de delivery (até 27% por pedido), atendimento manual e lento no WhatsApp, falta de controle de fila na cozinha com pedidos perdidos e ausência de inteligência comercial sobre faturamento, ticket médio e produtos mais vendidos.",
            solution:
                "Arquitetura de uma plataforma Web Full-Stack escalável. O Front-End foi desenvolvido em JavaScript Moderno (ES Modules), HTML5 semântico e CSS3 modular (Design Tokens) sem dependência de frameworks pesados, garantindo carregamento instantâneo. O Back-End em Node.js e Express implementa uma API RESTful documentada via Swagger OpenAPI 3.0 (/api/docs), motor dinâmico de cupons promocionais, ciclo de vida de comandas KDS com Web Audio API e impressão térmica, Webhook Dispatcher para notificações no WhatsApp e agregação analítica no PostgreSQL (Neon Cloud) com Prisma ORM, coberto por 106 testes automatizados.",
            features: [
                "Cardápio Digital & Customização Granular: Seleção de adicionais pagos, remoção de ingredientes e busca em tempo real com debounce",
                "Motor de Cupons Promocionais: Validação em tempo real de descontos em %, valor fixo, frete grátis, cupons mistos e brindes de produtos",
                "Barra de Progresso de Frete Grátis: Rastreador visual no carrinho incentivando o aumento do ticket médio do cliente",
                "Checkout Inteligente via WhatsApp: Validação de endereço, troco para dinheiro, PIX/cartão e registro assíncrono automático no banco",
                "KDS de Cozinha em Tempo Real & Impressão Térmica: Alerta sonoro (Web Audio API), esteira de 5 estágios e impressão direta para bobinas 80mm/58mm",
                "Notificações Automáticas & Webhooks: Disparo de avisos de status no WhatsApp e integração com gateways (Evolution API, Z-API, n8n)",
                "Dashboard de Analytics & Exportação CSV: KPIs comerciais (Faturamento, Ticket Médio, Total de Pedidos), ranking Top 5 e exportação com 1 clique",
                "Arquitetura White-Label & Onboarding: Personalização total da loja, assistente guiado no primeiro login e seeds (demo comercial e clean template)",
                "Documentação Swagger OpenAPI 3.0: Documentação viva e interativa dos endpoints da API RESTful disponível em /api/docs",
                "Qualidade & 106 Testes Automatizados: 15 suítes completas de testes com Jest e Supertest (100% de aprovação) cobrindo regras e segurança",
            ],
            challenges: [
                {
                    title: "Motor Dinâmico de Cupons & Regras Comerciais",
                    description:
                        "Implementação de um motor flexível de cupons com validação concorrente de regras (pedido mínimo, limite de utilizações, cupons percentuais, fixos, frete grátis e produtos de brinde) com zero overhead de dependências.",
                },
                {
                    title: "KDS em Tempo Real, Web Audio API & Impressão Térmica",
                    description:
                        "Construção de uma esteira de produção para cozinha com ciclo de vida atômico de pedidos, sintetizador sonoro no navegador (Web Audio API) para alertas sem arquivos MP3 externos e folha de estilo CSS print otimizada para impressoras térmicas ESC/POS (80mm e 58mm).",
                },
                {
                    title: "Arquitetura White-Label & Seeds Especializados",
                    description:
                        "Estruturação de tabelas e middlewares no Prisma ORM para suportar personalização dinâmica de identidade de loja (nome, slogan, taxas, horários) e criação de pipelines de seed distintos (seed:demo para showcase comercial e seed:clean para onboarding imediato de clientes).",
                },
            ],
            tags: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "JavaScript (ES6+)", "JWT", "Swagger OpenAPI", "KDS", "Analytics", "Jest", "Vercel"],
            category: "fullstack",
            featured: false,
            image: "/projects/orderly-preview.png",
            gallery: [
                {
                    title: "Dashboard de Vendas & Analytics",
                    image: "/projects/orderly/dashboard-vendas.png",
                    description: "KPIs em tempo real (Faturamento, Ticket Médio, Total de Pedidos), Ranking dos Top 5 mais vendidos e distribuição de canais e pagamentos.",
                },
                {
                    title: "Painel de Comandas & KDS em Tempo Real",
                    image: "/projects/orderly/comandas.png",
                    description: "Esteira de produção da cozinha com ciclo de vida de status, alertas sonoros e link direto para WhatsApp do cliente.",
                },
                {
                    title: "Gestão de Cupons & Regras Promocionais",
                    image: "/projects/orderly/cupons.png",
                    description: "Criação de campanhas de desconto (%, fixo, frete grátis, brindes), regras de pedido mínimo e limites de uso.",
                },
                {
                    title: "Gestão do Cardápio & Cadastro de Produtos",
                    image: "/projects/orderly/cadastro-produto.png",
                    description: "Interface mobile-first para cadastro e edição rápida de produtos com upload de fotos e modais bottom-sheet.",
                },
                {
                    title: "Autenticação Administrativa Segura (JWT)",
                    image: "/projects/orderly/login-admin.png",
                    description: "Tela de login restrita para administradores com validação de credenciais, hash bcrypt e emissão de token JWT.",
                },
                {
                    title: "Cardápio Digital & Modal de Ingredientes",
                    image: "/projects/orderly/cardapio.png",
                    description: "Catálogo interativo com busca em tempo real (debounce), filtros por categoria e customização granular de ingredientes.",
                },
                {
                    title: "Landing Page Showcase 'Dark Burger Bar'",
                    image: "/projects/orderly/home.png",
                    description: "Identidade visual temática e acolhedora com produto em destaque e atalho direto para personalização e pedidos.",
                },
                {
                    title: "Localização, Horários & Contato",
                    image: "/projects/orderly/contato.png",
                    description: "Informações institucionais, cálculo dinâmico de status da cozinha aberta/fechada e canais diretos de atendimento.",
                },
            ],
            demo: "https://lanchonetelarica.vercel.app/",
            isPrivate: true,
            releaseYear: "2022",
            architecture: {
                frontend: "HTML5 Semântico, CSS3 Modular (Design Tokens), JavaScript Moderno (ES Modules), Web Audio API, LocalStorage",
                backend: "Node.js, Express.js, REST API, Swagger OpenAPI 3.0, JWT, bcryptjs, Helmet Security, Webhooks",
                database: "PostgreSQL 16 (Neon Cloud Database), Prisma ORM",
                devops: "Vercel (Edge CDN & Serverless Functions), Neon Cloud, Jest, Supertest (106 testes automatizados)",
            },
        },
        {
            slug: "room-scheduler",
            title: "Room Scheduler",
            tagline: "Sistema corporativo de gestão de salas com prevenção de conflitos, RBAC, auditoria JPA & iCalendar",
            description:
                "Plataforma corporativa Full-Stack (Java 21 / Spring Boot & Next.js 16) com prevenção matemática de double booking, segurança RBAC, auditoria JPA, exportação RFC 5545 iCalendar e analytics de ocupação.",
            overview:
                "O Room Scheduler é um sistema corporativo completo para gestão e agendamento de salas de reunião projetado para eliminar sobreposições de horários. Diferente de um CRUD comum, o sistema implementa uma lógica transacional stateful com algoritmo matemático de prevenção de conflitos (StartA < EndB && EndA > StartB) diretamente no banco relacional, garantindo integridade mesmo sob alta concorrência. A solução inclui segurança RBAC estrita, auditoria automática JPA, exportação de convites para calendário (.ics RFC 5545), notificações por e-mail e dashboard analítico de ocupação.",
            problem:
                "Conflitos de agendamento e sobreposição de horários (Double Booking) em empresas e coworkings geram atritos e perda de produtividade. Ferramentas descentralizadas e planilhas não oferecem validação atômica de horários, carecem de regras de SLA de cancelamento (ex: antecedência mínima de 24h), não registram trilha de auditoria e não disponibilizam métricas claras sobre a taxa de ocupação dos espaços.",
            solution:
                "Engenharia de uma plataforma Web Full-Stack desacoplada. A API RESTful em Java 21 LTS e Spring Boot implementa arquitetura em camadas (Controller -> Service -> Repository) com isolamento rigoroso por DTOs, autenticação Stateless via Spring Security + JWT, controle de acesso baseado em papéis (USER vs ADMIN), auditoria JPA com @EnableJpaAuditing, versionamento Flyway com índices otimizados, serviço de e-mails assíncronos e gerador de arquivos .ics RFC 5545 (Google Calendar, Apple, Outlook). O Front-End em Next.js 16 (App Router) e React 19 oferece grade diária interativa de ocupação por sala, validação de senha em tempo real com 5 critérios de segurança, Next.js Edge Middleware para proteção de rotas, gráficos de uso e exportação CSV.",
            features: [
                "Prevenção Matemática de Conflitos (Double Booking): Bloqueio atômico de sobreposição de horários (StartA < EndB && EndA > StartB) no PostgreSQL",
                "Segurança & RBAC Estrito: Autenticação JWT Stateless, controle de perfis (USER vs ADMIN) e proteção de rotas no Next.js Edge Middleware",
                "Regras de Negócio & SLA de Cancelamento: Cancelamento permitido a usuários comuns apenas com 24h de antecedência e override irrestrito para Admins",
                "Integração iCalendar (.ics RFC 5545): Exportação direta de convites padronizados para sincronização no Google Agenda, Apple Calendar e Outlook",
                "Grade Diária Interativa de Ocupação: Visualização em linha do tempo das salas com seletor de datas e status visual em tempo real",
                "Auditoria JPA & Lifecycle Hooks: Registro determinístico de created_at e updated_at com @EnableJpaAuditing e callbacks @PrePersist/@PreUpdate",
                "Notificações por E-mail (JavaMailSender): Disparo automático de confirmações e cancelamentos de reservas com fallback resiliente",
                "Validador Dinâmico de Força de Senha: Checklist interativo com 5 requisitos de segurança e feedback visual instantâneo no formulário",
                "Painel Administrativo & Métricas de Ocupação: Indicadores de uso por sala, total de horas reservadas, gestão de usuários e exportação CSV",
                "Documentação Interativa Swagger / OpenAPI 3: Testes de endpoints ao vivo via interface /swagger-ui.html com 25 testes no backend",
            ],
            challenges: [
                {
                    title: "Algoritmo de Prevenção de Conflitos & Isolamento Transacional",
                    description:
                        "Implementação da validação matemática de intervalos no banco relacional com índices compostos (idx_bookings_room_time) para garantir integridade atômica e performance mesmo sob rajadas de requisições simultâneas.",
                },
                {
                    title: "Arquitetura RBAC & Edge Route Guards",
                    description:
                        "Estruturação de segurança em múltiplas camadas: validação de claims e roles no Spring Security e interceptação preventiva no Edge Middleware do Next.js antes da renderização de páginas administrativas.",
                },
                {
                    title: "Padrão RFC 5545 iCalendar & Compatibilidade Multiplataforma",
                    description:
                        "Desenvolvimento do motor de serialização de eventos de calendário no formato MIME text/calendar, assegurando compatibilidade nativa com Google Agenda, Apple e Outlook.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Next.js 16", "PostgreSQL", "Spring Security", "JWT", "Swagger OpenAPI", "Flyway", "Docker", "iCalendar"],
            category: "fullstack",
            featured: true,
            image: "/projects/roomScheduler.png",
            gallery: [
                {
                    title: "Grade Diária de Ocupação & Timeline",
                    image: "/projects/roomScheduler/home.png",
                    description: "Visualização interativa da disponibilidade das salas por horário com seletor de datas e status em tempo real.",
                },
                {
                    title: "Catálogo & Gestão de Salas",
                    image: "/projects/roomScheduler/salas.png",
                    description: "Interface para visualização e gerenciamento de salas com capacidade, recursos disponíveis e restrições.",
                },
                {
                    title: "Minhas Reservas & Exportação iCalendar",
                    image: "/projects/roomScheduler/reservas.png",
                    description: "Painel do usuário para acompanhar agendamentos, aplicar cancelamento dentro da regra de SLA e baixar convites .ics.",
                },
                {
                    title: "Dashboard de Analytics & Métricas",
                    image: "/projects/roomScheduler/metricas.png",
                    description: "Indicadores em tempo real de distribuição de ocupação por sala e volume total de horas agendadas.",
                },
                {
                    title: "Painel Administrativo de Usuários & RBAC",
                    image: "/projects/roomScheduler/usuarios.png",
                    description: "Controle de perfis (USER / ADMIN), permissões de acesso, auditoria e exportação de relatórios CSV.",
                },
            ],
            github: "https://github.com/paulorag/roomScheduler",
            demo: "https://room-scheduler-gold.vercel.app/",
            isPrivate: false,
            releaseYear: "2025",
            coldStartNotice:
                "O Back-End desta aplicação está hospedado no plano gratuito do Render. Caso o serviço esteja em repouso (cold start), a primeira inicialização pode levar de 30 a 60 segundos para carregar os dados.",
            architecture: {
                frontend: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Edge Middleware",
                backend: "Java 21 LTS, Spring Boot 3, Spring Security 6, JWT, JavaMailSender, Swagger OpenAPI 3, Actuator",
                database: "PostgreSQL 15, Spring Data JPA, Hibernate, Flyway Migrations",
                devops: "Docker, Docker Compose, GitHub Actions (CI), Vercel, JUnit 5, Mockito",
            },
        },
        {
            slug: "autoflex-planejamento-producao",
            title: "Autoflex PCP",
            tagline: "Sistema de Planejamento e Controle da Produção com algoritmo guloso de otimização, baixa atômica e rastreabilidade",
            description:
                "Sistema Full-Stack de PCP/MRP industrial (Java 21 / Spring Boot 3.4 & React 19 / TypeScript). Maximiza o faturamento da fábrica através de um algoritmo guloso de otimização sobre matérias-primas e fichas técnicas (BOM), com baixa atômica no estoque físico e histórico de ordens.",
            overview:
                "O Autoflex PCP é uma solução Full-Stack moderna de Planejamento e Controle da Produção (PCP / MRP) desenvolvida para ambientes industriais e linhas de manufatura. O sistema gerencia o estoque de matérias-primas e o catálogo de produtos com fichas técnicas de múltiplos ingredientes (BOM em relacionamentos N:N). Seu motor de planejamento aplica um algoritmo guloso de otimização que avalia o estoque em tempo real e calcula o melhor mix produtivo para maximizar o faturamento financeiro da fábrica. Ao disparar a fabricação, o sistema realiza a baixa atômica (@Transactional) nas matérias-primas e gera uma ordem de produção com rastreabilidade completa.",
            problem:
                "Fábricas e linhas de montagem sofrem frequentemente com paralisações inesperadas devido à falta de insumos específicos ou erros humanos no cálculo de fórmulas de produtos compartilhadas. Além disso, decidir manualmente quais produtos fabricar primeiro para maximizar a receita sem gerar sobras ociosas de matéria-prima é um processo lento, propenso a falhas e sem histórico auditável de ordens.",
            solution:
                "Engenharia de uma arquitetura limpa em camadas (Clean Layered Architecture). A API RESTful em Java 21 LTS e Spring Boot 3.4.3 conta com isolamento estrito por Records DTO imutáveis, validação Jakarta Bean Validation (@Valid), migrações versionadas com Flyway (V1 a V4), consultas otimizadas (@EntityGraph anti-N+1), documentação viva OpenAPI 3/Swagger UI e cobertura de 37 testes automatizados (JUnit 5 + Mockito + MockMvc). O Front-End construído em React 19, TypeScript 5.9 e Vite possui dashboard com KPIs industriais, barras visuais de nível de estoque, formulários com proteção anti-duplicidade em receitas e testes E2E automatizados com Cypress.",
            features: [
                "Algoritmo Guloso de Otimização Produtiva: Calcula o mix ideal de fabricação priorizando itens de maior valor agregado para maximizar a receita",
                "Fichas Técnicas de Produtos (BOM N:N): Gestão dinâmica de receitas com múltiplos insumos e bloqueio em tempo real contra ingredientes duplicados",
                "Controle de Estoque & Alertas de Nível Crítico: Monitoramento com barras de progresso visual e integridade referencial impedindo exclusão de insumos vinculados",
                "Efetivação Atômica de Produção (@Transactional): Débito automático e seguro no estoque físico de matérias-primas ao confirmar ordens de produção",
                "Rastreabilidade & Histórico de Ordens: Linha do tempo auditável de todas as fabricações executadas com accordion detalhando quantidades e subtotais",
                "Painel de KPIs Industriais (Dashboard): Métricas em tempo real de Faturamento Projetado, Saúde do Estoque, Itens Ativos e Ordens Concluídas",
                "Documentação Interativa Swagger / OpenAPI 3: Endpoints REST documentados e testáveis ao vivo através da interface /swagger-ui.html",
                "Suíte Completa de Qualidade (37 Testes + E2E): Testes unitários/integração no backend (JUnit 5, Mockito) e testes ponta a ponta com Cypress",
                "Ambiente Dockerizado & Multi-Container: Orquestração completa via docker compose (PostgreSQL 16 + Spring Boot + React/Nginx)",
                "Pipeline Automatizado de CI/CD: Validação contínua de builds e suítes de testes no GitHub Actions a cada push",
            ],
            challenges: [
                {
                    title: "Algoritmo de Alocação Gulosa & Análise de Gargalos",
                    description:
                        "Construção de um algoritmo em Spring Boot capaz de avaliar grafos de relacionamento N:N entre produtos e insumos em estoque, ordenando produtos por maior margem de receita e alocando matérias-primas sem divisão por zero ou estoque negativo.",
                },
                {
                    title: "Integridade Transacional & Baixa Atômica de Insumos",
                    description:
                        "Garantia de que a efetivação de uma ordem de produção execute a dedução exata de cada componente do estoque em uma transação atômica (@Transactional), impedindo inconsistências físicas e financeiras.",
                },
                {
                    title: "Otimização de Consultas JPA & Prevenção de N+1",
                    description:
                        "Uso de anotações @EntityGraph e DTO projection para carregar relacionamentos complexos de receitas (Product <-> ProductRawMaterial <-> RawMaterial) com mínimo consumo de memória e I/O de banco.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "React 19", "TypeScript", "PostgreSQL", "Flyway", "Docker", "Swagger OpenAPI", "Cypress", "MRP/PCP"],
            category: "fullstack",
            featured: false,
            image: "/projects/autoflex.png",
            gallery: [
                {
                    title: "Painel Geral de PCP (Dashboard)",
                    image: "/projects/autoflex-pcp/home.png",
                    description: "Resumo industrial com KPIs de faturamento projetado, saúde de estoque, sugestão de produção em 1 clique e ordens recentes.",
                },
                {
                    title: "Controle de Estoque de Matérias-Primas",
                    image: "/projects/autoflex-pcp/materia-prima.png",
                    description: "Gestão completa de insumos com busca instantânea, indicadores visuais de nível de estoque e proteção de integridade referencial.",
                },
                {
                    title: "Catálogo de Produtos & Fichas Técnicas (BOM)",
                    image: "/projects/autoflex-pcp/produtos.png",
                    description: "Cadastro de receitas com múltiplos ingredientes (N:N), validação anti-duplicidade e chips de composição.",
                },
                {
                    title: "Planejamento Otimizado de Produção",
                    image: "/projects/autoflex-pcp/planejamento.png",
                    description: "Execução do algoritmo guloso que maximiza a receita com base no estoque disponível e botão de efetivação atômica.",
                },
                {
                    title: "Histórico & Rastreabilidade de Ordens",
                    image: "/projects/autoflex-pcp/historico-orders.png",
                    description: "Linha do tempo auditável de todas as produções realizadas na fábrica com detalhamento de insumos e valores.",
                },
            ],
            github: "https://github.com/paulorag/autoflex-pcp",
            demo: "https://autoflex-pcp.vercel.app/",
            isPrivate: false,
            releaseYear: "2026",
            coldStartNotice:
                "O Back-End desta aplicação está hospedado no plano gratuito do Render. Caso o serviço esteja em repouso (cold start), a primeira inicialização pode levar de 30 a 50 segundos para carregar os dados.",
            architecture: {
                frontend: "React 19, TypeScript 5.9, Vite, Bootstrap 5, Axios, Lucide Icons, Cypress E2E",
                backend: "Java 21 LTS, Spring Boot 3.4.3, Spring Data JPA, Jakarta Validation, Swagger OpenAPI 3, Actuator",
                database: "PostgreSQL 16, Spring Data JPA, Hibernate, Flyway Migrations (V1..V4)",
                devops: "Docker, Docker Compose, Nginx Alpine, GitHub Actions (CI), JUnit 5, Mockito, MockMvc, Vercel",
            },
        },
    ],
    en: [
        {
            slug: "game-deals-radar",
            title: "Game Deals Radar",
            tagline: "Distributed price intelligence, multi-store deal aggregation and alert automation platform for digital games",
            description:
                "Full-Stack platform engineered with Modular Monolith (Java 21 / Spring Boot 3.4 & Next.js 16) automating multi-store deal scraping (Steam, Nuuvem), IsThereAnyDeal API integration, free games feed, and Discord webhook alerts.",
            overview:
                "Game Deals Radar is an enterprise-grade distributed platform for real-time price monitoring and deal aggregation across PC digital game stores. Designed following Domain-Driven Design (DDD) modular monolith principles, the system scrapes official storefronts (Steam and Nuuvem), resolves real All-Time Low records in BRL since 2011 via IsThereAnyDeal v2 API, tracks 100% free weekly games with countdown timers, computes accumulated financial savings, and dispatches automated rich Discord alerts when target price thresholds are met.",
            problem:
                "The PC digital game distribution market is fragmented across multiple official storefronts (Steam, Nuuvem, Epic Games, GOG). Each platform operates with independent pricing structures and seasonal flash deals. Consumers miss historic discounts due to lack of consolidated 2011+ data, waste time checking storefronts manually, and miss out on weekly 100% free game giveaways due to uncentralized alerts.",
            solution:
                "Engineered a high-performance Modular Monolith architecture. The Java 21 LTS and Spring Boot 3.4.5 Back-End leverages the Strategy Pattern for pluggable multi-store scrapers (Jsoup and APIs), IsThereAnyDeal v2 integration for historic price seeding, Discord Webhook Dispatcher, OWASP-standard Anti-SSRF protection, and multi-layered Rate Limiting, persisting to PostgreSQL 15 via Flyway (V1..V7) with multi-tenant Caffeine caching and 95 automated tests. The Front-End built in Next.js 16 (App Router with Turbopack), React 19, and Tailwind CSS provides live autocomplete search, 1-click Steam Wishlist importer, freebies radar, and interactive Recharts time-series charts.",
            features: [
                "Multi-Store Deal Aggregation & Best Deal: Real-time price tracking for Steam and Nuuvem with automatic best active offer highlight",
                "IsThereAnyDeal v2 Historic Baseline: Resolves true All-Time Low price records in BRL since 2011, eliminating cold-start data gaps",
                "Freebies Radar (100% Free Games Feed): Public live feed aggregating weekly giveaways (Epic Games, Steam, GOG) with timers and redemption guides",
                "Smart Discord Alert Engine: Automated Rich Embed dispatches when deals hit target prices or historical all-time lows",
                "Real-Time Autocomplete & 1-Click Steam Wishlist Importer: 300ms debounced search and bulk wishlist import for public Steam profiles",
                "Financial Analytics Dashboard: Real-time calculation of total accumulated savings versus original MSRP and average discount percentages",
                "Interactive Time-Series Visualization: Recharts dynamic charts rendering price fluctuation trends with time filters (6M, 1Y, All-Time)",
                "OWASP Top 10 Security Hardening: Anti-SSRF DNS/IP validation, HTTP Security Headers (CSP, HSTS, X-Frame-Options), and IP Rate Limiting",
                "Modular Monolith & DDD Architecture: Bounded contexts isolation (auth, catalog, scraper, freebies, notifications, analytics)",
                "Comprehensive 95 Automated Tests: Full test suites in backend (JUnit 5, Mockito, AssertJ) and frontend (Vitest, RTL) with GitHub Actions CI",
            ],
            challenges: [
                {
                    title: "Pluggable Scraper Architecture (Strategy Pattern)",
                    description:
                        "Designed decoupled scraper contracts enabling seamless integration of new storefronts (Epic Games, GOG) without modifying core domain logic.",
                },
                {
                    title: "Anti-SSRF Hardening & Private Network Defense",
                    description:
                        "Built a robust URL security validator with strict domain allowlists and pre-flight DNS resolution blocking loopback, private IP ranges, and cloud metadata endpoints (169.254.169.254).",
                },
                {
                    title: "Historical Baseline Seeding & Multi-Tenant Caching",
                    description:
                        "Overcame historical cold-start limitations via automated ITAD v2 price record ingestion paired with user-segmented Caffeine in-memory caching.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Next.js 16", "PostgreSQL", "Docker", "Recharts", "JWT", "Flyway", "Jsoup", "Caffeine", "Discord Webhooks", "OWASP"],
            category: "fullstack",
            featured: true,
            image: "/projects/gameDealsRadar-preview.png",
            gallery: [
                {
                    title: "Home & Popular Deals Showcase",
                    image: "/projects/gameDealsRadar/home.png",
                    description: "Real-time leaderboard of trending community-tracked titles with best deal highlight and All-Time Low badges.",
                },
                {
                    title: "Personal Dashboard & Financial Analytics",
                    image: "/projects/gameDealsRadar/dashboard.png",
                    description: "User watchlist with target price tracking, multi-store comparison, and real-time accumulated savings calculations.",
                },
                {
                    title: "Freebies Radar (Free Games Feed)",
                    image: "/projects/gameDealsRadar/jogos-gratis.png",
                    description: "Live public feed tracking 100% free games of the week (Epic Games, Steam, GOG) with countdown timers and claim guides.",
                },
                {
                    title: "Price History & Time-Series Analytics",
                    image: "/projects/gameDealsRadar/monitoramento.png",
                    description: "Interactive Recharts time-series charts showing historic price variations with time filters and Discord webhook triggers.",
                },
            ],
            demo: "https://game-deals-radar.vercel.app/",
            isPrivate: true,
            releaseYear: "2025",
            coldStartNotice:
                "The Back-End for this application is hosted on Render's free tier. If the service is currently sleeping (cold start), the initial request may take between 30 and 120 seconds to respond.",
            architecture: {
                frontend: "Next.js 16 (App Router with Turbopack), React 19, TypeScript, Tailwind CSS, Recharts",
                backend: "Java 21 LTS, Spring Boot 3.4.5, Spring Security 6, JWT, Jsoup, Caffeine Cache, Discord Webhooks",
                database: "PostgreSQL 15, Spring Data JPA, Hibernate, Flyway Migrations (V1..V7)",
                devops: "Docker, Docker Compose, GitHub Actions (CI), JUnit 5, Mockito, AssertJ, Vitest (95 tests)",
            },
        },
        {
            slug: "orderly",
            title: "Orderly",
            tagline: "White-Label Digital Menu, Kitchen Display System (KDS), Coupon Engine & Sales Analytics",
            description:
                "Full-stack SaaS platform for restaurants: interactive digital menu, direct WhatsApp checkout, dynamic coupon promotions, KDS with audio alerts and thermal printing, webhook dispatcher, and commercial analytics.",
            overview:
                "Orderly is an end-to-end full-stack web platform (SaaS-ready and White-Label) engineered to modernize restaurant, burger bar, and delivery operations. The platform eliminates exorbitant third-party marketplace commissions (up to 27%), streamlines direct WhatsApp ordering with real-time coupon and delivery fee validation, organizes kitchen queues via a real-time KDS display with thermal receipt printing (80mm/58mm) and Web Audio API alerts, dispatches automatic status notifications and webhooks, and delivers full commercial sales analytics with CSV reporting.",
            problem:
                "Food businesses struggle with steep third-party marketplace commissions (up to 27% per order), slow and manual order taking via chat, kitchen chaos with lost orders, and zero real-time visibility into daily revenue, average ticket per customer, and best-selling item rankings.",
            solution:
                "Engineered a scalable Full-Stack Web Platform. The Front-End is built with Modern JavaScript (ES Modules), semantic HTML5, and modular CSS3 Design Tokens with zero framework bloat, ensuring instant loading. The Node.js and Express RESTful API features interactive Swagger OpenAPI 3.0 docs (/api/docs), a dynamic promotional coupon engine, a real-time KDS kitchen order lifecycle with synthesized Web Audio chimes and ESC/POS thermal printing, Webhook dispatching, and relational analytics in PostgreSQL (Neon Cloud) via Prisma ORM, backed by 106 automated tests.",
            features: [
                "Interactive Digital Menu & Granular Customization: Paid add-ons, ingredient exclusions, and debounced live search",
                "Dynamic Promotional Coupon Engine: Percentage discounts, fixed amounts, free shipping, hybrid rules, and bonus gifts",
                "Progressive Free Delivery Tracker: Real-time visual progress bar in the cart motivating higher average order values",
                "Intelligent WhatsApp Checkout Engine: Address validation, cash change calculations, and async background database ingestion",
                "Real-Time Kitchen Display System (KDS) & Thermal Printing: Web Audio API chimes, 5-stage order pipeline, and 80mm/58mm receipt printing",
                "Automated Status Notifications & Webhook Dispatcher: 1-click WhatsApp updates and webhook integrations (Evolution API, Z-API, n8n)",
                "Sales Analytics Dashboard & CSV Export: Commercial KPIs (Revenue, Average Ticket, Order Volume), Top 5 Best-Sellers, and 1-click export",
                "Multi-Tenant White-Label Architecture & Onboarding: Full store identity settings, guided first-login wizard, and specialized seeds (demo & clean)",
                "Interactive Swagger OpenAPI 3.0 Documentation: Live API testing interface available at /api/docs",
                "106 Automated Test Suites: Comprehensive test suite with Jest and Supertest across business rules, endpoints, and security (100% pass rate)",
            ],
            challenges: [
                {
                    title: "Dynamic Coupon Engine & Business Rule Engine",
                    description:
                        "Designed a flexible coupon validator handling concurrent rules (minimum subtotal, usage caps, percentage, fixed, free delivery, and bonus product gifts) with zero external library bloat.",
                },
                {
                    title: "Real-Time KDS, Web Audio API & Thermal Receipt Engine",
                    description:
                        "Engineered a production kitchen pipeline with atomic order transitions, synthesized browser sound chimes (Web Audio API) for audio alerts without external MP3 files, and ESC/POS thermal print styles (80mm/58mm).",
                },
                {
                    title: "White-Label Multi-Tenant Architecture & Specialized Seeds",
                    description:
                        "Structured Prisma schema and middlewares for dynamic store branding (name, WhatsApp, fees, business hours) paired with automated seed pipelines (seed:demo for sales demos and seed:clean for turnkey client handover).",
                },
            ],
            tags: ["Node.js", "Express", "PostgreSQL", "Prisma ORM", "JavaScript (ES6+)", "JWT", "Swagger OpenAPI", "KDS", "Analytics", "Jest", "Vercel"],
            category: "fullstack",
            featured: false,
            image: "/projects/orderly-preview.png",
            gallery: [
                {
                    title: "Sales Analytics & Business Intelligence",
                    image: "/projects/orderly/dashboard-vendas.png",
                    description: "Real-time KPIs (Revenue, Average Ticket, Order Volume), Top 5 Best-Sellers leaderboard, and payment method distribution.",
                },
                {
                    title: "Kitchen Display System (KDS)",
                    image: "/projects/orderly/comandas.png",
                    description: "5-stage kitchen order pipeline with audio alerts, status workflow, and 1-click WhatsApp messaging.",
                },
                {
                    title: "Promotional Coupon Engine & Discount Rules",
                    image: "/projects/orderly/cupons.png",
                    description: "Create and manage discount campaigns (%, fixed amount, free delivery, bonus items), minimum order rules, and usage caps.",
                },
                {
                    title: "Catalog Management & Product Editor",
                    image: "/projects/orderly/cadastro-produto.png",
                    description: "Mobile-first backoffice for rapid product creation and editing with image uploads and slide-up bottom-sheets.",
                },
                {
                    title: "Secure Admin Authentication (JWT)",
                    image: "/projects/orderly/login-admin.png",
                    description: "Restricted administrative login screen with credential validation, bcrypt hashing, and JWT token issuance.",
                },
                {
                    title: "Digital Menu & Customization Modal",
                    image: "/projects/orderly/cardapio.png",
                    description: "Interactive catalog with real-time debounced search, category filters, and granular ingredient customization.",
                },
                {
                    title: "Landing Page Showcase 'Dark Burger Bar'",
                    image: "/projects/orderly/home.png",
                    description: "Thematic and immersive visual identity with featured burger callout and direct ordering flow.",
                },
                {
                    title: "Location, Business Hours & Contact",
                    image: "/projects/orderly/contato.png",
                    description: "Operational info, real-time dynamic kitchen open/closed status, and direct contact channels.",
                },
            ],
            demo: "https://lanchonetelarica.vercel.app/",
            isPrivate: true,
            releaseYear: "2022",
            architecture: {
                frontend: "Semantic HTML5, Modular CSS3 (Design Tokens), Modern JavaScript (ES Modules), Web Audio API, LocalStorage",
                backend: "Node.js, Express.js, REST API, Swagger OpenAPI 3.0, JWT, bcryptjs, Helmet Security, Webhooks",
                database: "PostgreSQL 16 (Neon Cloud Database), Prisma ORM",
                devops: "Vercel (Edge CDN & Serverless Functions), Neon Cloud, Jest, Supertest (106 automated tests)",
            },
        },
        {
            slug: "room-scheduler",
            title: "Room Scheduler",
            tagline: "Enterprise space management system with conflict prevention, RBAC, JPA auditing & iCalendar",
            description:
                "Enterprise Full-Stack platform (Java 21 / Spring Boot & Next.js 16) featuring mathematical double booking prevention, RBAC security, JPA Auditing, RFC 5545 iCalendar export, and occupancy analytics.",
            overview:
                "Room Scheduler is a complete enterprise solution engineered for corporate space and meeting room scheduling designed to prevent booking overlaps. Unlike standard CRUD applications, the system implements stateful transactional scheduling logic with a mathematical conflict prevention algorithm (StartA < EndB && EndA > StartB) executed directly in PostgreSQL, ensuring atomic integrity under concurrent booking attempts. Features strict RBAC security, automatic JPA auditing, iCalendar (.ics RFC 5545) invitations, asynchronous email notifications, and an occupancy analytics dashboard.",
            problem:
                "Meeting room scheduling overlaps and double bookings in corporate and coworking environments lead to lost productivity and friction. Spreadsheets and decentralized tools lack atomic conflict prevention, fail to enforce cancellation SLAs (e.g. minimum 24-hour advance notice), lack auditing trails, and provide zero visibility into room utilization metrics.",
            solution:
                "Engineered a decoupled Full-Stack Web Platform. The RESTful API in Java 21 LTS and Spring Boot leverages layered architecture (Controller -> Service -> Repository) with strict DTO isolation, Stateless Spring Security + JWT authentication, Role-Based Access Control (USER vs ADMIN), JPA Auditing via @EnableJpaAuditing, Flyway database migrations with performance indexes, asynchronous email delivery, and an RFC 5545 .ics calendar generator compatible with Google Calendar, Apple Calendar, and Outlook. The Next.js 16 / React 19 Front-End features an interactive daily timeline grid, 5-point real-time password strength validation, Next.js Edge Middleware route guards, utilization analytics, and CSV report export.",
            features: [
                "Mathematical Double Booking Prevention: Atomic overlapping validation (StartA < EndB && EndA > StartB) executed at database level in PostgreSQL",
                "Strict RBAC & Security: Stateless JWT authentication, role tiers (USER vs ADMIN), and Next.js Edge Middleware server-side route guards",
                "Business Logic & 24-Hour SLA: Standard users can only cancel bookings with at least 24h notice, with unrestricted override for Admins",
                "iCalendar Integration (.ics RFC 5545): 1-click export of RFC-compliant meeting invitations for Google Calendar, Apple, and Outlook",
                "Interactive Daily Timeline Grid: Visual room availability grid with live date filtering and real-time occupancy status indicators",
                "JPA Auditing & Lifecycle Hooks: Automatic created_at and updated_at tracking via @EnableJpaAuditing and @PrePersist/@PreUpdate callbacks",
                "Asynchronous Email Notifications: Automated booking confirmation and cancellation emails via JavaMailSender with fallback logging",
                "Real-Time Password Strength Engine: Interactive 5-rule security checklist providing instant visual feedback on registration forms",
                "Admin Dashboard & Occupancy Metrics: Real-time charts showing utilization share by room, cumulative meeting hours, user roles, and CSV export",
                "Interactive Swagger OpenAPI 3 Docs: Live API testing interface available at /swagger-ui.html with 25 automated backend tests",
            ],
            challenges: [
                {
                    title: "Conflict Prevention Algorithm & Transactional Integrity",
                    description:
                        "Engineered database-level interval validation with composite indexes (idx_bookings_room_time) ensuring atomic integrity and zero race conditions under concurrent reservation spikes.",
                },
                {
                    title: "Layered RBAC Security & Edge Route Guards",
                    description:
                        "Structured multi-tier access control: claims and roles verification in Spring Security paired with predictive interception in Next.js Edge Middleware before rendering protected admin views.",
                },
                {
                    title: "RFC 5545 iCalendar Standard & Cross-Platform Sync",
                    description:
                        "Developed a compliant MIME text/calendar serialization engine ensuring universal compatibility across Google Calendar, Apple Calendar, and Microsoft Outlook.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "Next.js 16", "PostgreSQL", "Spring Security", "JWT", "Swagger OpenAPI", "Flyway", "Docker", "iCalendar"],
            category: "fullstack",
            featured: true,
            image: "/projects/roomScheduler.png",
            gallery: [
                {
                    title: "Daily Timeline Grid & Room Availability",
                    image: "/projects/roomScheduler/home.png",
                    description: "Interactive timeline showing real-time room availability by hour with date filtering.",
                },
                {
                    title: "Room Catalog & Space Management",
                    image: "/projects/roomScheduler/salas.png",
                    description: "Catalog and administration interface for meeting rooms with capacity, amenities, and restrictions.",
                },
                {
                    title: "My Bookings & iCalendar Export",
                    image: "/projects/roomScheduler/reservas.png",
                    description: "User dashboard to track reservations, manage SLA-compliant cancellations, and download .ics calendar invites.",
                },
                {
                    title: "Analytics & Utilization Dashboard",
                    image: "/projects/roomScheduler/metricas.png",
                    description: "Real-time metrics and charts displaying room occupancy distribution and total booked hours.",
                },
                {
                    title: "User Administration & RBAC Management",
                    image: "/projects/roomScheduler/usuarios.png",
                    description: "Role management (USER / ADMIN), permission enforcement, auditing, and one-click CSV report exports.",
                },
            ],
            github: "https://github.com/paulorag/roomScheduler",
            demo: "https://room-scheduler-gold.vercel.app/",
            isPrivate: false,
            releaseYear: "2025",
            coldStartNotice:
                "The Back-End for this application is hosted on Render's free tier. If the service is currently sleeping (cold start), the initial request may take between 30 and 60 seconds to respond.",
            architecture: {
                frontend: "Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, Edge Middleware",
                backend: "Java 21 LTS, Spring Boot 3, Spring Security 6, JWT, JavaMailSender, Swagger OpenAPI 3, Actuator",
                database: "PostgreSQL 15, Spring Data JPA, Hibernate, Flyway Migrations",
                devops: "Docker, Docker Compose, GitHub Actions (CI), Vercel, JUnit 5, Mockito",
            },
        },
        {
            slug: "autoflex-planejamento-producao",
            title: "Autoflex PCP",
            tagline: "Industrial Production Planning & Control System with greedy optimization, atomic stock deduction & traceability",
            description:
                "Full-Stack industrial PCP/MRP platform (Java 21 / Spring Boot 3.4 & React 19 / TypeScript). Maximizes factory revenue through a greedy optimization algorithm over raw material inventories and Bill of Materials (BOM), with atomic stock deductions and order auditing.",
            overview:
                "Autoflex PCP is a modern Full-Stack Production Planning and Control (PCP / MRP) solution engineered for manufacturing plants and assembly lines. The platform manages raw material stock and product catalogs with multi-ingredient Bill of Materials (BOM in N:N relationships). Its planning engine applies a greedy optimization algorithm that evaluates inventory levels in real-time and computes the optimal production mix to maximize overall sales revenue. When executing a production run, the system automatically performs an atomic deduction (@Transactional) from raw material stock and logs a traceable production order.",
            problem:
                "Manufacturing facilities and assembly lines frequently face unplanned downtime due to material stockouts or human calculation errors in shared ingredient formulas. Furthermore, deciding manually which products to prioritize to maximize revenue without stranding idle inventory is a slow, error-prone process that lacks audit trails.",
            solution:
                "Engineered a Clean Layered Architecture. The Java 21 LTS and Spring Boot 3.4.3 RESTful API implements strict immutable Record DTO isolation, Jakarta Bean Validation (@Valid), Flyway versioned migrations (V1 to V4), optimized queries (@EntityGraph preventing N+1 queries), interactive OpenAPI 3/Swagger UI documentation, and 37 automated tests (JUnit 5 + Mockito + MockMvc). The Front-End built with React 19, TypeScript 5.9, and Vite features industrial KPI cards, visual inventory health indicators, recipe validation preventing duplicate components, and automated Cypress E2E tests.",
            features: [
                "Greedy Production Planning Algorithm: Computes the optimal manufacturing mix prioritizing high-value products to maximize revenue",
                "Product Bill of Materials (BOM N:N): Dynamic multi-ingredient recipe management with real-time prevention of duplicate components",
                "Raw Materials Inventory & Low-Stock Alerts: Visual stock progress meters with referential integrity protection preventing deletion of active ingredients",
                "Atomic Production Execution (@Transactional): Immediate and safe physical stock deduction upon executing suggested production runs",
                "Production Orders History & Traceability: Comprehensive audit trail of all completed manufacturing batches with expandable cost breakdowns",
                "Industrial PCP Dashboard: Real-time KPIs showing Projected Revenue, Stock Health, Catalog Items, and Total Completed Orders",
                "Interactive Swagger / OpenAPI 3 Documentation: Live REST API testing interface available at /swagger-ui.html",
                "Comprehensive Test Suite (37 Tests + E2E): Unit/integration testing in backend (JUnit 5, Mockito) and automated end-to-end testing with Cypress",
                "Dockerized Multi-Container Environment: Full containerized stack via docker compose (PostgreSQL 16 + Spring Boot + React/Nginx)",
                "Automated CI/CD Pipeline: Continuous integration on GitHub Actions validating builds and test suites on every pull request",
            ],
            challenges: [
                {
                    title: "Greedy Allocation Algorithm & Bottleneck Analysis",
                    description:
                        "Designed a Spring Boot algorithm evaluating N:N relational graphs between products and available stock, ranking items by sales price and greedily allocating bottleneck ingredients without division-by-zero or negative inventories.",
                },
                {
                    title: "Transactional Integrity & Atomic Stock Deduction",
                    description:
                        "Ensured production batch executions perform atomic stock deductions across all recipe ingredients within a single @Transactional boundary, preventing stock discrepancies.",
                },
                {
                    title: "JPA Query Optimization & N+1 Prevention",
                    description:
                        "Leveraged @EntityGraph annotations and record projection to fetch complex nested recipe structures (Product <-> ProductRawMaterial <-> RawMaterial) with minimal query overhead.",
                },
            ],
            tags: ["Java 21", "Spring Boot 3", "React 19", "TypeScript", "PostgreSQL", "Flyway", "Docker", "Swagger OpenAPI", "Cypress", "MRP/PCP"],
            category: "fullstack",
            featured: false,
            image: "/projects/autoflex.png",
            gallery: [
                {
                    title: "Industrial PCP Dashboard",
                    image: "/projects/autoflex-pcp/home.png",
                    description: "Industrial overview with projected revenue KPIs, stock health progress bars, 1-click production execution, and recent orders.",
                },
                {
                    title: "Raw Materials Inventory Management",
                    image: "/projects/autoflex-pcp/materia-prima.png",
                    description: "Full stock management with instant search, visual volume meters, and active ingredient referential integrity protection.",
                },
                {
                    title: "Product Catalog & Bill of Materials (BOM)",
                    image: "/projects/autoflex-pcp/produtos.png",
                    description: "Multi-ingredient recipe configuration (N:N), duplicate ingredient prevention, and composition chips.",
                },
                {
                    title: "Optimized Production Planning",
                    image: "/projects/autoflex-pcp/planejamento.png",
                    description: "Real-time greedy optimization algorithm prioritizing high-revenue products with atomic execution trigger.",
                },
                {
                    title: "Production Orders History & Traceability",
                    image: "/projects/autoflex-pcp/historico-orders.png",
                    description: "Auditable manufacturing timeline detailing manufactured quantities, unit values, and subtotals.",
                },
            ],
            github: "https://github.com/paulorag/autoflex-pcp",
            demo: "https://autoflex-pcp.vercel.app/",
            isPrivate: false,
            releaseYear: "2026",
            coldStartNotice:
                "The Back-End for this application is hosted on Render's free tier. If the service is currently sleeping (cold start), the initial request may take between 30 and 50 seconds to respond.",
            architecture: {
                frontend: "React 19, TypeScript 5.9, Vite, Bootstrap 5, Axios, Lucide Icons, Cypress E2E",
                backend: "Java 21 LTS, Spring Boot 3.4.3, Spring Data JPA, Jakarta Validation, Swagger OpenAPI 3, Actuator",
                database: "PostgreSQL 16, Spring Data JPA, Hibernate, Flyway Migrations (V1..V4)",
                devops: "Docker, Docker Compose, Nginx Alpine, GitHub Actions (CI), JUnit 5, Mockito, MockMvc, Vercel",
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
