
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { Typography, Divider, Space, Card, Flex, Row, Col } from 'antd';
import Aboutme from './assets/componets/Aboutme/Aboutme.jsx';
import ProjectLangContainer from './assets/componets/LanguagesSection/index.jsx';
import ProjectCard from './assets/componets/ProjectsSection/ProjectCard.jsx';

const { Title, Paragraph, Text } = Typography;

function App() {

 return (
  <Row
  align="middle"
  >
    <Col
    span={6}
    />
    <Col 
      span={12}
    >
      <Flex
      vertical
      >
        <Aboutme/>
        
        <Title level={5}>
          meus projetos
        </Title>
        <ProjectLangContainer/>
      </Flex>
    </Col>
    <Col
    span={6}
    />
  </Row>
  );
}; 

export default App