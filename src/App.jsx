
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { Typography, Divider, Space, Card, Flex } from 'antd';
import Aboutme from './assets/componets/Aboutme/Aboutme.jsx';
import ProjectLangContainer from './assets/componets/LanguagesSection/index.jsx';

const { Title, Paragraph, Text } = Typography;

function App() {

 return (
  <Flex
  justify='center'
  align='start
  '
  vertical
  >

        <Aboutme/>

        <Title 
        level={5}
        
        >
          projetos por linguagens
        </Title>
        <ProjectLangContainer/>
  </Flex>
  );
}; 

export default App