
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { useState } from "react";
import { Typography, Divider, Space, Card } from 'antd';
import InfoSection from './assets/componets/InfoSection.jsx';
import Aboutme from './assets/componets/Aboutme.jsx';

const { Title, Paragraph, Text } = Typography;

function App() {
  const [selectedLang, setSelectedLang] = useState(null);

 return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <Title level={1} style={{ marginbottom: 0 }}>
        Kani0dev <text type="secondary" style={{ fontsize: '18px', fontweight: 'normal' }}>| Allan Chagas</text>
      </Title>
      
      <Divider />

      <Aboutme/>

        <Title level={2}>
          Projetos
        </Title>
      
      <Space size="middle" wrap>
        <LanguagesBTNS onLangClick={setSelectedLang} />
      </Space>
        
        {selectedLang && (<CriarLanguagesModal 
        lang={selectedLang} 
          onClose={() => setSelectedLang(null)}
        />)}

      <Divider size='2'/>

      <InfoSection/>
    </div>
  );
}; 

export default App