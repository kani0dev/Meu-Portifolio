import { Flex, Space } from "antd"
import LanguagesBTNS from "./btn/LinguagemsBTN"
import CriarLanguagesModal from "./modal/LanguagesModal"
import { useState } from "react";
import Title from "antd/es/skeleton/Title";

const  ProjectLangContainer = () =>{
    const [selectedLang, setSelectedLang] = useState(null);
    return (
        <Flex
        align="center"
        vertical
        >
            <Space>
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
            </Space>
          </Flex>
    );
}
export default ProjectLangContainer