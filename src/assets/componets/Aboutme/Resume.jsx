import { Divider, Flex, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Resume = () =>{
    return(
    <Flex
    justify="center"
    align="center"
    vertical
    >
        <Divider size="small"/>
        <Typography>
            <Title level={5}> 
                sobre min
            </Title>
            <Paragraph>
                Sou desenvolvedor e eterno estudante, com foco em Java e Python e
                experiência Full Stack.
                Gosto de transformar problemas em soluções, explorando trade-offs,
                desenvolvendo minhas próprias ideias e levando projetos da implementação ao deploy.
                Tenho experiência com Spring, FastAPI, React, React Native e AWS, além de interesse em IoT e análise de dados.
                Sou uma pessoa proativa, ensinável e bastante envolvida com a comunidade de programação.
            </Paragraph>
        </Typography>
    </Flex>        
    )
}
export default Resume;