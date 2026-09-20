
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { useState } from "react";
import { Typography, Divider, Space, Card } from 'antd';
import Aboutme from './assets/componets/Aboutme/Aboutme.jsx';

const { Title, Paragraph, Text } = Typography;

function App() {
  const [selectedLang, setSelectedLang] = useState(null);

 return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
        <Aboutme/>

      <Space size="middle" wrap>
        <LanguagesBTNS onLangClick={setSelectedLang} />
      </Space>
        
        {selectedLang && (<CriarLanguagesModal 
        lang={selectedLang} 
          onClose={() => setSelectedLang(null)}
        />)}

      <Divider size='2'/>

    </div>
  );
}; 

export default App