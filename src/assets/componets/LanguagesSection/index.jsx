import { Card, Flex, Space } from "antd"
import LanguagesBTNS from "./btn/LinguagemsBTN"
import CriarLanguagesModal from "./modal/LanguagesModal"
import { useState } from "react";
const  ProjectLangContainer = () =>{
    const [selectedLang, setSelectedLang] = useState(null);
    return (
        <Card
        type="inner"
        title="meus projetos"
        variant="outlined"
        >   
            <Flex
            justify="space-evenly"
            wrap
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
        </Card>
    );
}
export default ProjectLangContainer