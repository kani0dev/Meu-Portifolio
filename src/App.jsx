
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { useState } from "react";
import { Typography, Divider, Space, Card, Flex } from 'antd';
import Aboutme from './assets/componets/Aboutme/Aboutme.jsx';

const { Title, Paragraph, Text } = Typography;

function App() {
  const [selectedLang, setSelectedLang] = useState(null);

 return (
    <Flex
      align='center'
      justify='center'
      vertical
    >
        <Aboutme/>

        <Divider size='1'/>

      <Space size="middle" wrap>
        <LanguagesBTNS onLangClick={setSelectedLang} />
      </Space>
        
        {selectedLang && (<CriarLanguagesModal 
        lang={selectedLang} 
          onClose={() => setSelectedLang(null)}
        />)}

      <Divider size='2'/>

    </Flex>
  );
}; 

export default App