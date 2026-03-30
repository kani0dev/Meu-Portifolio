const Projects = [
 {
    "name": "CRM de Leads Imobiliários",
    "description": "Sistema de alta performance para conversão de leads e geração de insights para corretores. Atuei como desenvolvedor Full Stack 'curinga', sendo responsável pela integração crítica com a API da OLX e arquitetura de dados entre o front e o back-end.",
    "repoLink": "",
    "url": null,
    "languagues": ["Java", "JavaScript", "SQL"],
    "framework": ["Spring Boot", "React", "Redux.js", "PostgreSQL", "AWS", "Docker", "DevOps"]
  },
  {
    "name": "Visgo de Jaca",
    "description": "E-commerce e vitrine de produtos personalizados. Desenvolvi uma SPA (Single Page Application) do zero utilizando JavaScript puro para consumo assíncrono de APIs, focando em performance e experiência do usuário final.",
    "repoLink": "",
    "url": null,
    "languagues": ["PHP", "JavaScript", "SQL"],
    "framework": ["MySQL", "AJAX", "SPA Architecture", "Custom CSS"]
  },
  {
    "name": "Gestão de Ordens de Serviço",
    "description": "Sistema robusto para assistência técnica focado no ciclo de vida do reparo. Implementei o gerenciamento de dispositivos por cliente e histórico de problemas, utilizando containerização para garantir consistência entre ambientes de desenvolvimento e produção.",
    "repoLink": "",
    "url": null,
    "languagues": ["Java", "SQL", "JavaScript"],
    "framework": ["Spring Boot", "React", "MySQL", "Docker", "REST API"]
  },
  {
    "name": "Mini Rede Social com IA",
    "description": "Plataforma de comunidades focada em micro-ambientes (escolas/empresas) para aumentar o engajamento social. O sistema utiliza análise de perfil para conectar usuários por afinidade, garantindo segurança via Spring Security.",
    "repoLink": "",
    "url": null,
    "languagues": ["Java", "SQL", "JavaScript"],
    "framework": ["Spring Boot", "Spring Security", "React", "MySQL", "Vector Database (Plan)", "IA Integration"]
  } 
]

export function getUniqLanguages(){
  const linguagensUnicas = new Set();
  Projects.forEach(projeto => {
    projeto.languagues.forEach(linguagem => {
      linguagensUnicas.add(linguagem);
    });
  });
  return [... linguagensUnicas];
}

export function getProjectByLanguage(lang) {
  return Projects.filter(proj => proj.languagues.includes(lang));
}
export default Projects;