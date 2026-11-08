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

  bio: "Desenvolvo sistemas web do banco de dados à tela. Estão em uso hoje o Salus, para gestão de clínicas, e o OpticFlow, para óticas. Também fiz uma ouvidoria municipal que funciona sem internet e um sistema de cálculo de prazos processuais para advocacia.",

  about: [
    "Trabalho principalmente com o ecossistema Python (Django, Streamlit) e JavaScript/TypeScript (React, Node.js), combinando bancos relacionais (PostgreSQL, SQLite) e soluções espaciais com PostGIS.",
    "Começo pelo banco de dados e pelas regras do negócio; a tela vem depois. Onde um erro custa caro, como no cálculo de prazos, escrevo testes antes de liberar."
  ],

  email: "guilhermeleao92@hotmail.com",
  phone: "+55 62 98248-8018",
  socialLinks: {
    github: "https://github.com/gleao92",
    linkedin: "https://www.linkedin.com/in/guilhermealves-tisaude/",
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
      "Row Level Security (PostgreSQL)",
      "Testes automatizados em Python"
    ]
  },

  // Projetos Reais
  // demoUrl: link público do produto (null = sem site no ar; o card mostra "Demo sob solicitação")
  projects: [
    {
      id: "tempestivo",
      year: "2026",
      title: "Tempestivo — Controladoria de Prazos & Jurimetria",
      category: "LegalTech",
      summary: "Calcula prazos processuais para escritórios de advocacia (cível, criminal e rural) e captura as publicações do DJEN e do DataJud.",
      challenge: "Contar prazo à mão exige conferir feriados locais, recesso forense e regras de cada tribunal. Um dia contado errado pode fazer o escritório perder o prazo.",
      solution: "Cálculo em Python com uma bateria de testes que cobre feriados móveis, recesso forense e regras do TJGO. Todo prazo passa por revisão humana antes de valer, cada alteração fica registrada e o sistema avisa com 3 dias úteis de folga.",
      stack: ["Python", "Streamlit", "SQLite / PostgreSQL", "DataJud API", "DJEN", "Docker"],
      githubUrl: "https://github.com/gleao92/jurimetria",
      demoUrl: null,
      isPrivate: true
    },
    {
      id: "salus",
      year: "2026",
      title: "Salus — Gestão de Clínicas",
      category: "HealthTech",
      summary: "Plataforma de gestão para clínicas: agenda, prontuário eletrônico com assinatura eletrônica, teleatendimento por vídeo, lembretes por WhatsApp e exportação no padrão FHIR.",
      challenge: "Muitas clínicas pequenas ainda usam agenda de papel ou planilha e guardam prontuários em lugares diferentes, sem registro de quem acessou cada um.",
      solution: "Python/Streamlit sobre Supabase (PostgreSQL). Cada clínica e cada perfil só enxergam os próprios dados (Row Level Security), o login tem segundo fator (TOTP) e cada acesso ao prontuário fica registrado. O prontuário tem número com dígito verificador, o Cartão Nacional de Saúde é validado e os dados podem ser exportados no padrão FHIR.",
      stack: ["Python", "Streamlit", "Supabase", "PostgreSQL / RLS", "MFA (TOTP)", "HL7 FHIR", "WhatsApp"],
      githubUrl: "https://github.com/gleao92/app-gestao-clinica",
      demoUrl: "https://salus.opusnoa.com.br",
      isPrivate: true
    },
    {
      id: "optic-flow",
      year: "2026",
      title: "OpticFlow — ERP SaaS para Óticas",
      category: "SaaS",
      summary: "Gestão para óticas: receitas oftalmológicas, catálogo de lentes e armações, quadro de montagem, estoque e financeiro.",
      challenge: "Sistemas de loja comuns não têm campo para grau esférico, cilíndrico, eixo e DNP, nem acompanham o óculos enquanto ele está no laboratório.",
      solution: "Backend em Django REST Framework com PostgreSQL em Docker e frontend em React + TypeScript. Cada ordem de serviço anda por um quadro com as etapas de montagem e entrega.",
      stack: ["Python", "Django REST", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Docker"],
      githubUrl: "https://github.com/gleao92/optic-flow",
      demoUrl: "https://opticflow-app.onrender.com",
      isPrivate: true
    },
    {
      id: "jussara",
      year: "2026",
      title: "Aplicativo de Gestão Pública para Municípios",
      category: "GovTech",
      summary: "Ouvidoria digital municipal e plataforma de gestão de ordens de serviço (PWA + painel administrativo) em conformidade com a Lei Federal 13.460/2017.",
      challenge: "O morador precisa conseguir registrar um buraco ou uma lâmpada queimada mesmo sem sinal de internet, e a secretaria precisa juntar pedidos repetidos do mesmo lugar antes de mandar a equipe.",
      solution: "PWA offline-first: a ocorrência fica guardada no aparelho (IndexedDB) e é enviada quando a internet volta. No Supabase, o PostGIS encontra pedidos próximos que tratam do mesmo problema e o Row Level Security faz cada secretaria ver só os próprios dados.",
      stack: ["JavaScript", "PWA / IndexedDB", "Supabase", "PostgreSQL", "PostGIS", "Deno", "Tailwind CSS"],
      githubUrl: "https://github.com/gleao92/jussara",
      demoUrl: null,
      isPrivate: true
    },
    {
      id: "moodsync",
      year: "2026",
      title: "MoodSync — Music Player por Humor",
      category: "Web & APIs",
      summary: "A pessoa escolhe um humor e o app toca uma playlist correspondente no Spotify dela, pelo OAuth 2.0.",
      challenge: "Pedir só as permissões de controle do player no OAuth 2.0 e mandar o comando para o aparelho que já está tocando.",
      solution: "Servidor em Node.js e Express que faz a autenticação na Spotify Web API e inicia a playlist escolhida no player ativo do usuário.",
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
