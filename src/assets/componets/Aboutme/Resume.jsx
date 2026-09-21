import { Divider, Flex, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Resume = () =>{
    return(
    <Flex
    align="start"
    vertical
    >
        <Divider size="small"/>
        <Typography>
            <Title level={5}> 
                sobre min
            </Title>
            <Paragraph>
                sla
            </Paragraph>
        </Typography>
    </Flex>        
    )
}
export default Resume;