const Projects = [
  {
    "name": "portifolio",
    "description" : "este é um site portifoli feito em react",
    "repoLink": "https://github.com/kani0dev/Meu-Portifolio.git",
    "url": null,
    "languagues" : [
      "javascript",
        "c",
        "v",
    ],
    "framework" : [
      "react", "ant-design"
    ]
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