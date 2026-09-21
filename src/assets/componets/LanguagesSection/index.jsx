import { Card, Flex, Space } from "antd"
import LanguagesBTNS from "./btn/LinguagemsBTN"
import CriarLanguagesModal from "./modal/LanguagesModal"
import { useState } from "react";
import CoursesSection from "../extras/courses";
const  ProjectLangContainer = () =>{
    const [selectedLang, setSelectedLang] = useState(null);
    return (
        <Flex
        gap={12}
        >
            <Card
            variant="outlined"
            title="meus projetos"
            style={{backgroundColor:"#000000"}}
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
            </Card>
            <CoursesSection/>
        </Flex>
    );
}
export default ProjectLangContainer