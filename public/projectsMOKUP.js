const Projects = [
  {
    "name": "portifolio",
    "description" : "este é um site portifoli feito em react",
    "languagues" : [
      "javascript"
    ],
    "framework" : [
      "react", "ant-design"
    ]
  },
  {
    "name": "sistema-gestao",
    "description": "Sistema interno de gestão empresarial com relatórios integrados",
    "languagues": ["java", "sql"],
    "framework": ["Spring Boot", "Hibernate", "Thymeleaf"]
  },
  {
    "name": "app-clima",
    "description": "Aplicativo mobile de previsão do tempo com geolocalização",
    "languagues": ["dart"],
    "framework": ["flutter"]
  },
  {
    "name": "analise-dados",
    "description": "Ferramenta de análise e visualização de dados para negócios",
    "languagues": ["python", "javascript"],
    "framework": ["django", "pandas", "d3.js"]
  },
  {
    "name": "jogo-educativo",
    "description": "Jogo educativo para crianças com foco em matemática básica",
    "languagues": ["c#"],
    "framework": ["unity"]
  },
  {
    "name": "api-segura",
    "description": "API robusta com autenticação e autorização avançadas",
    "languagues": ["go"],
    "framework": ["gin", "jwt", "redis"]
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