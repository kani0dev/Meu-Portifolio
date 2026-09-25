import { Flex, List, Typography, theme } from "antd"
import LanguagesBTNS from "./btn/LinguagemsBTN"
import CriarLanguagesModal from "./modal/LanguagesModal"
import { useState } from "react";
import CoursesSection from "../extras/courses";

const { Text } = Typography;

const ProjectLangContainer = () =>{
    const { token } = theme.useToken();
    const [selectedLang, setSelectedLang] = useState(null);

    return (
        <Flex
        justify="center"
        gap="middle"
        style={{ width: '100%' }}
        >
            {/* Mesmo componente e mesmos props da lista de cursos (List + header
                + bordered), só que com os botões em grade quebrando linha em
                vez de um item por linha. O padding é o mesmo do List.Item
                (paddingMD/paddingLG) para os dois contornos ficarem iguais. */}
            <List
            bordered
            header={<Text strong>Linguagens</Text>}
            >
                <Flex
                gap={12}
                wrap
                justify="center"
                style={{ padding: `${token.paddingMD}px ${token.paddingLG}px` }}
                >
                    <LanguagesBTNS
                    onLangClick={setSelectedLang}
                    />
                </Flex>
            </List>

            {selectedLang &&
            (
                <CriarLanguagesModal
                lang={selectedLang}
                onClose={() => setSelectedLang(null)}
                />
            )}

            <CoursesSection/>
        </Flex>
    );
}
export default ProjectLangContainer
