// ====================================================================
// PORTFÓLIO - GUILHERME LEÃO (@gleao92)
// Configurações e Projetos Desenvolvidos
// ====================================================================

const CONFIG = {
  githubUsername: "gleao92",
  name: "Guilherme Leão",
  role: "Desenvolvedor Full Stack",
  location: "Goiás, Brasil",
  availableForHire: true,
  statusText: "Disponível para novos projetos",

  bio: "Desenvolvedor Full Stack focado em construir softwares funcionais, seguros e bem estruturados. Experiência no desenvolvimento de plataformas municipais com arquitetura offline-first (GovTech), controladoria e motor de cálculo de prazos jurídicos (LegalTech), e sistemas SaaS para gestão empresarial.",

  about: [
    "Trabalho principalmente com o ecossistema Python (Django, Streamlit) e JavaScript/TypeScript (React, Node.js), combinando bancos relacionais (PostgreSQL, SQLite) e soluções espaciais com PostGIS.",
    "Priorizo código testado, banco de dados bem modelado e interfaces limpas que resolvem problemas reais de operação no dia a dia."
  ],

  email: "guilhermeleao92@hotmail.com",
  phone: "+55 62 98248-8018",
  socialLinks: {
    github: "https://github.com/gleao92",
    linkedin: "https://www.linkedin.com/in/guilherme-leao",
    whatsapp: "https://wa.me/5562982488018",
    email: "mailto:guilhermeleao92@hotmail.com"
  },

  // Habilidades agrupadas por especialidade real
  skills: {
    backend: [
      "Python",
      "Django REST Framework",
      "Node.js & Express",
      "PostgreSQL & PostGIS",
      "Supabase",
      "SQLite",
      "APIs RESTful"
    ],
    frontend: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "PWA & Offline-First (IndexedDB)",
      "HTML5 Semântico"
    ],
    devops: [
      "Docker & Docker Compose",
      "Git & GitHub Workflow",
      "Linux / Bash",
      "PostgreSQL RLS & LGPD",
      "Testes Automatizados (PyTest)"
    ]
  },

  // Projetos Reais
  projects: [
    {
      id: "jussara",
      year: "2026",
      title: "Aplicativo de Gestão Pública para Municípios",
      category: "GovTech",
      summary: "Ouvidoria digital municipal e plataforma de gestão de ordens de serviço (PWA + painel administrativo) em conformidade com a Lei Federal 13.460/2017.",
      challenge: "Permitir que a população registre ocorrências urbanas mesmo sem sinal de internet, e que as secretarias municipais agrupem demandas vizinhas em rotas inteligentes para as equipes de manutenção.",
      solution: "PWA 100% offline-first com fila no IndexedDB e sincronização automática. No backend, PostgreSQL com PostGIS no Supabase para geoprocessamento de duplicidades e Row Level Security (RLS) para isolamento estrito de dados conforme a LGPD.",
      stack: ["JavaScript", "PWA / IndexedDB", "Supabase", "PostgreSQL", "PostGIS", "Deno", "Tailwind CSS"],
      githubUrl: "https://github.com/gleao92/jussara",
      demoUrl: null,
      isPrivate: false
    },
    {
      id: "tempestivo",
      year: "2026",
      title: "Tempestivo — Controladoria de Prazos & Jurimetria",
      category: "LegalTech",
      summary: "Sistema de cálculo crítico de prazos processuais para advocacia (cível, criminal e rural), com captura de publicações do DJEN e DataJud.",
      challenge: "Controle manual de prazos processuais possui alto índice de risco de preclusão por depender de feriados forenses locais, recessos e regras regimentais específicas de cada tribunal.",
      solution: "Motor algorítmico em Python com 31 testes unitários automatizados cobrindo feriados móveis e regras do TJGO. Fluxo de revisão humana obrigatória com auditoria imutável (Resolução CNJ 615/2025) e margem preventiva de 3 dias úteis.",
      stack: ["Python", "Streamlit", "SQLite / PostgreSQL", "DataJud API", "DJEN", "Docker"],
      githubUrl: "https://github.com/gleao92/jurimetria",
      demoUrl: null,
      isPrivate: false
    },
    {
      id: "optic-flow",
      year: "2026",
      title: "OpticFlow — ERP SaaS para Óticas",
      category: "SaaS",
      summary: "Plataforma integrada de gestão para óticas: receitas oftalmológicas, catálogo de lentes/armações, fluxo Kanban de montagem, estoque e financeiro.",
      challenge: "Sistemas genéricos de comércio não atendem a complexidade de dioptrias (grau esférico, cilíndrico, eixo, DNP) nem o acompanhamento de ordens de serviço em laboratórios ópticos.",
      solution: "Backend em Django REST Framework com PostgreSQL conteinerizado em Docker, e frontend responsivo em React + TypeScript com quadro Kanban em tempo real para as etapas de montagem e entrega.",
      stack: ["Python", "Django REST", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/gleao92/optic-flow",
      demoUrl: null,
      isPrivate: true
    },
    {
      id: "moodsync",
      year: "2026",
      title: "MoodSync — Music Player por Humor",
      category: "Web & APIs",
      summary: "Aplicação web que se conecta à conta do Spotify via OAuth 2.0 e comanda o player do usuário em tempo real de acordo com o humor selecionado.",
      challenge: "Integrar o fluxo seguro de autorização OAuth 2.0 com escopos de controle de playback e controlar dispositivos remotos via API com baixa latência.",
      solution: "Servidor em Node.js e Express gerenciando autenticação com a Spotify Web API e acionando playlists curadas diretamente no player ativo do usuário.",
      stack: ["Node.js", "Express", "Spotify Web API", "OAuth 2.0", "Axios", "JavaScript"],
      githubUrl: "https://github.com/gleao92/moodsync",
      demoUrl: null,
      isPrivate: false
    },
    {
      id: "frotas",
      year: "2026",
      title: "Gestão de Frotas & Logística",
      category: "Logística",
      summary: "Sistema para controle de veículos corporativos, manutenção preventiva por quilometragem e monitoramento de consumo de combustível.",
      challenge: "Evitar quebras mecânicas inesperadas e obter métricas financeiras precisas de custo por quilômetro rodado.",
      solution: "Modelagem relacional para registro de abastecimentos, motoristas e histórico de manutenções com alertas de revisões periódicas.",
      stack: ["JavaScript", "Node.js", "REST APIs", "PostgreSQL"],
      githubUrl: "https://github.com/gleao92/frotas",
      demoUrl: null,
      isPrivate: false
    }
  ]
};

window.PORTFOLIO_CONFIG = CONFIG;
