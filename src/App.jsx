
import './App.css'
import LanguagesBTNS from "./assets/componets/LanguagesSection/btn/LinguagemsBTN.jsx";
import CriarLanguagesModal from './assets/componets/LanguagesSection/modal/LanguagesModal.jsx';
import { useState } from "react";

function App() {
  const [selectedLang, setSelectedLang] = useState(null);

  return (
    <>
        <h1>Kani0Dev</h1>
        <hr/>
        <p>
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa nunsei oq pipi popo pa pum pirulito pao doce num sei oq nunsei oq la e pa e pum e pow pow pow
        </p>
      <LanguagesBTNS onLangClick={setSelectedLang} />

      {selectedLang && (
        <CriarLanguagesModal lang={selectedLang} onClose={() => setSelectedLang(null)} />
      )}
    </>
  )
}

export default App