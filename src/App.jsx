
import './App.css'
import { useState, useEffect, useMemo } from 'react';
import { ConfigProvider, theme as antdTheme, Typography, Card, Flex, Row, Col, List, Button, Divider } from 'antd';
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import Aboutme from './assets/componets/Aboutme/Aboutme.jsx';
import ProjectLangContainer from './assets/componets/LanguagesSection/index.jsx';
import ExperiencieSection from './assets/componets/extras/experiencie.jsx';

function App() {
const [isDark, setIsDark] = useState(() => {
  try {
    return localStorage.getItem('theme') !== 'light';
  } catch {
    return true;
  }
});

useEffect(() => {
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch {
    // ignore
  }
  document.body.style.backgroundColor = isDark ? '#000000' : '#ffffff';
}, [isDark]);

const algorithm = useMemo(
  () => (isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm),
  [isDark]
);

 return (
  <ConfigProvider theme={{ algorithm }}>
    <Button
      type="text"
      onClick={() => setIsDark(!isDark)}
      icon={isDark ? <SunOutlined /> : <MoonOutlined />}
      style={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 100,
        fontSize: 20,
      }}
    />
    <Row align="middle">
      <Col span={3}/>
        <Col span={18
        }>

          <Flex
           vertical
           align='center'
           justify='stretch'
           >
            <Aboutme/>
            <Divider/>
            <ProjectLangContainer/>
            <Divider orientation='start' >
              <Typography.Text
              strong
              >
                Experiencias
              </Typography.Text>
            </Divider>
            <ExperiencieSection/>
          </Flex>
        </Col>
      <Col span={3}/>
    </Row>
  </ConfigProvider>
  );
}; 

export default App