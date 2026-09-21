
import './App.css'
import { Typography,  Card, Flex, Row, Col, List, Timeline } from 'antd';
import Aboutme from './assets/componets/Aboutme/Aboutme.jsx';
import ProjectLangContainer from './assets/componets/LanguagesSection/index.jsx';
import ExperiencieSection from './assets/componets/extras/experiencie.jsx';
function App() {
const courses = [ 
  'Foundadations of Cybersecurity - google - coursera',
  'Google Cloud Computing Foundations - google - coursera'
]
 return (
  <Row align="middle">
    <Col span={3}/>
      <Col span={18
      }>

        <Flex
         vertical
         align='center'
         justify='center'
         >
    
          <Aboutme/>
    
          <ProjectLangContainer/>

              <ExperiencieSection/>

            <Card
              title="Cursos"
            >
              <List
                bordered
                dataSource={courses}
                renderItem={(item)=>(
                <List.Item>
                  <Typography.Text>
                    {item}
                  </Typography.Text>
                </List.Item>
                )}
              />
            </Card>


        </Flex>
      </Col>
    <Col span={3}/>
  </Row>
  );
}; 

export default App