import { Card, Divider, Flex, Space } from "antd"
import LanguagesBTNS from "./btn/LinguagemsBTN"
import CriarLanguagesModal from "./modal/LanguagesModal"
import { useState } from "react";
import CoursesSection from "../extras/courses";
const  ProjectLangContainer = () =>{
    const [selectedLang, setSelectedLang] = useState(null);
    return (
        <Space
        >

            <Flex
            justify="center"
            vertical
            >
                <Divider
                orientation="start"
                size="large"
                > 
                    Projetos por linguages
                </Divider>
                <Flex
                gap={12}
                align="start"
                wrap
                style={
                    {width:'90%'}
                }
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
            </Flex>
            <CoursesSection/>
        </Space>
    );
}
export default ProjectLangContainer