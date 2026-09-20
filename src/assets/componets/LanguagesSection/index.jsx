import { Flex } from "antd"
import LanguagesBTNS from "./btn/LinguagemsBTN"
import CriarLanguagesModal from "./modal/LanguagesModal"
import { useState } from "react";
import Title from "antd/es/skeleton/Title";

const  ProjectLangContainer = () =>{
    const [selectedLang, setSelectedLang] = useState(null);
    return (
        <Flex
        >
            <LanguagesBTNS 
            onLangClick={setSelectedLang} 
            />
                {selectedLang && 
                (
                    <CriarLanguagesModal
                    lang={selectedLang} 
                    onClose={() => setSelectedLang(null)}
                    />
                )}
          </Flex>
    );
}
export default ProjectLangContainer