const Projects = [
  {
    "name": "CRM de Leads Imobiliários",
    "description": "Sistema de alta performance para conversão de leads e geração de insights para corretores. Atuei como desenvolvedor Full Stack 'curinga', sendo responsável pela integração crítica com a API da OLX e arquitetura de dados entre o front e o back-end.",
    "repoLink": "",
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["Java", "JavaScript", "SQL"],
    "framework": ["Spring Boot", "React", "Redux.js", "PostgreSQL", "AWS", "Docker", "DevOps"]
  },
  {
    "name": "Telemtria imobiliaria com IoT ",
    "description": "Plataforma de gestão de leads para cliente real com dois ecossistemas chave: um pipeline de análise preditiva de mensagens de clientes para geração de insights ao corretor, e um sistema embarcado IoT para monitoramento e envio de dados telemétricos dos imóveis em tempo real.",
    "repoLink": "",
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["C++", "Python"],
    "framework": [ "Mosquitto MQTT", "PlataformIO"]
  },
  {
    "name": "Sistema de Gestão de Ordens de Serviço",
    "description": "Sistema full-stack completo para controle e gerenciamento de ordens de serviço voltado para assistências técnicas. Conta com rotas protegidas por autenticação, controle de status de atendimento, migração de banco de dados e interface reativa.",
    "repoLink": "",
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["Java", "JavaScript", "SQL"],
    "framework": ["Spring Boot", "Spring Security", "Spring Data JPA", "Flyway", "React", "PostgreSQL"]
  },
  {
    "name": "E-Commerce para Artista de Camisetas",
    "description": "Plataforma e-commerce voltada para exibição de catálogo de arte e venda de produtos personalizados. Focado em proporcionar uma experiência fluida de navegação e gerenciamento de carrinho no front-end.",
    "repoLink": "",
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["JavaScript", "HTML", "CSS"],
    "framework": ["React", "Vite", "Tailwind CSS", "Context API"]
  }
];

export function getUniqLanguages() {
  const linguagensUnicas = new Set();
  Projects.forEach(projeto => {
    projeto.languagues.forEach(linguagem => {
      linguagensUnicas.add(linguagem);
    });
  });
  return [...linguagensUnicas];
}

export function getProjectByLanguage(lang) {
  return Projects.filter(proj => proj.languagues.includes(lang));
}

export function getFeaturedProjects() {
  return Projects.filter(proj => proj.featured);
}

export default Projects;
