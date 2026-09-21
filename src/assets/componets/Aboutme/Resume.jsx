import { Divider, Flex, Space, Typography } from "antd";

const { Title, Paragraph, Text } = Typography;

const Resume = () =>{
    return(
    <Flex
    align="start"
    vertical
    >
        <Divider 
        orientation="start">
            <Text
            strong
            style={{color:"#6b7280"}}
            > 
                sobre min
            </Text>
        </Divider>

        <Typography>
            <Paragraph>

            </Paragraph>
        </Typography>
    </Flex>        
    )
}
export default Resume;