const Projects = [
  {
    "name": "100tadin,Telemtria imobiliaria com IoT ",
    "description":
      "A partir de um desafio técnico do sexto semestre, desenvolvemos o 100tadin, um serviço IoT integrado ao nosso CRM imobiliário para monitorar e simular a experiência de viver em um imóvel.\n"
      +"A solução coleta dados em tempo real e os transforma em informações que podem ser utilizadas como argumentos comerciais na conversão de leads.\n"
      + "O resultado foi um sistema flexível e de fácil integração, capaz de conectar telemetria de imóveis ao processo comercial e transformar dados do ambiente em informações úteis para vendas.",
    "repoLink": "https://github.com/kani0dev/100tadin",
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["C++", "Python"],
    "framework": [ "Mosquitto MQTT", "PlataformIO"]
  },
  {
    "name":"Insights de Leads Imobiliarias",
    "description":
      "Um lead representa um sinal de interesse de um cliente em um produto. Durante o desenvolvimento do nosso CRM, surgiu a necessidade de estimar o nível de interesse de cada lead.\n"
      + "A partir desse objetivo, desenvolvi um sistema de classificação de leads utilizando modelos de Machine Learning e NLP para estimar o nível de interesse de cada lead em um valor mensurável.\n"
      + "Como resultado, criamos uma métrica de interesse que permite identificar e priorizar leads com maior probabilidade estimada de conversão, utilizando dados e modelos preditivos como apoio à estratégia comercial."
    ,
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["Python"],
    "framework": ["FastAPI","SQLAlchemy","Alembic","SciKitLearn"]
  },
  {
    "name":"Quiz2llm",
    "description":
      "Desenvolvi esta aplicação como um laboratório para estudar recuperação de contexto, microsserviços distribuídos e mensageria." +
      " A partir de uma aplicação simples de quizzes, explorei como distribuir responsabilidades entre diferentes serviços e como utilizar comunicação assíncrona para coordenar os fluxos da aplicação." +

      " O resultado foi uma aplicação funcional utilizada para experimentar, na prática, os desafios e trade-offs de uma arquitetura distribuída, incluindo comunicação entre serviços, processamento de mensagens e recuperação de contexto.", 
    "repoLink":"https://github.com/quiz2llm/ActorsAPI", 
    "url":null ,
    "cover": null,
    "featured": true,
    "languagues": ["Python","JavsScript","React"],
    "framework": [
      "FastAPI","SQLAlchemy","Alembic","SciKitLearn","ReactJS","Ant-Design"
    ]
  },
  {
    "name":"S.H.Ia",
    "description":
     "Desenvolvi esta aplicação como um laboratório para estudar métodos de classificação e recomendação de perfis, utilizando uma rede social como ambiente para experimentar esses conceitos." +

        " A aplicação foi construída utilizando Java e Spring, permitindo explorar tanto a implementação de modelos de recomendação e classificação quanto aspectos de desenvolvimento de serviços, como organização da aplicação, APIs e integração entre componentes." +

        " O resultado foi uma aplicação funcional que serviu como ambiente de experimentação para diferentes estratégias de classificação e recomendação, além de aprofundar minha experiência no desenvolvimento de serviços utilizando o ecossistema Java e Spring."
    ,
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": ["Java","Python"],
    "framework": ["SpringBoot","SpringSecurity","FastAPI"]
  },
 
];
/*
  {
    "name":"",
    "description":"",
    "url": null,
    "cover": null,
    "featured": true,
    "languagues": [],
    "framework": [ ]
  },
*/

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
