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
                Do simple singular software that work well togheter, 
                everybody can create complex solutions, to complex problems, but only a genius is the one who find simple solutions to complex problems.
            </Paragraph>
        </Typography>
    </Flex>        
    )
}
export default Resume;