
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { useState } from "react";
import { Typography, Divider, Space } from 'antd';

const { Title, Paragraph, Text } = Typography;

function App() {
  const [selectedLang, setSelectedLang] = useState(null);

 return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={1} style={{ marginBottom: 0 }}>
        Alan Chagas <Text type="secondary" style={{ fontSize: '18px', fontWeight: 'normal' }}>| Kani0Dev</Text>
      </Title>
      
      <Divider />

      <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', textAlign: 'justify' }}>
        Desenvolvedor Full Stack focado em <strong>Java (Spring Boot)</strong> e <strong>React</strong>. 
        Atualmente cursando Desenvolvimento de Software Multiplataforma na FATEC, com sólida base em 
        modelagem de dados, integração de APIs e automação de fluxos operacionais. 
        Apaixonado por Linux e arquiteturas que prezam pela performance e manutenibilidade.
      </Paragraph>

      <Space size="middle" wrap>
        <LanguagesBTNS onLangClick={setSelectedLang} />
      </Space>

     
        {selectedLang && (<CriarLanguagesModal 
        lang={selectedLang} 
          onClose={() => setSelectedLang(null)}
        />)}
     
    </div>
  );
}; 

export default App