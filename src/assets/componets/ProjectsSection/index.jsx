import { Carousel, Divider, Flex, Typography } from "antd";
import ProjectCard from "./ProjectCard";
import { getFeaturedProjects } from "../../../data/projects.js";
import "./ProjectsSection.css";

const { Text } = Typography;

const AUTOPLAY_INTERVAL = 5000;
const FADE_SPEED = 600;

export default function ProjectsSection() {
  const featuredProjects = getFeaturedProjects();

  if (featuredProjects.length === 0) {
    return (
      <Flex vertical style={{ width: "100%" }}>
        <Divider orientation="start">
          <Text strong>Projetos em Destaque</Text>
        </Divider>
        <Text type="secondary">Nenhum projeto em destaque no momento.</Text>
      </Flex>
    );
  }

  return (
    <Flex vertical gap="small" style={{ width: "100%" }}>
      <Divider orientation="start">
        <Text strong>Projetos em Destaque</Text>
      </Divider>

      {/* Setas e bolinhas são as nativas do antd. O slick precisa aplicar
          className/style/data-index no elemento direto do slide, e o
          ProjectCard não repassa essas props, então o wrapper <div> é
          obrigatório — sem ele o fade não posiciona os slides. */}
      <Carousel
        rootClassName="projetos-carousel"
        effect="fade"
        infinite
        autoplay={{ dotDuration: true }}
        autoplaySpeed={AUTOPLAY_INTERVAL}
        speed={FADE_SPEED}
        pauseOnHover={false}
        pauseOnFocus={false}
        adaptiveHeight
        arrows
        dots
      >
        {featuredProjects.map((projeto) => (
          <div key={projeto.name}>
            <ProjectCard projeto={projeto} />
          </div>
        ))}
      </Carousel>
    </Flex>
  );
}
