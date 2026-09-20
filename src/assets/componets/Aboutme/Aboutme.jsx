
import React from 'react';
import { Typography, Divider, Space, Card } from 'antd';
import { 
  RocketOutlined, 
  CodeOutlined, 
  ThunderboltOutlined, 
  PartitionOutlined 
} from '@ant-design/icons';
import InfoSection from './InfoSection';
import Resume from './Resume';

const { Title, Paragraph, Text } = Typography;

const Aboutme = () => {
  return (
  <>
      <Title level={1} style={{ marginbottom: 0 }}>
        Kani0dev <text type="secondary" style={{ fontsize: '18px', fontweight: 'normal' }}>| Allan Chagas</text>
      </Title>
      <InfoSection/>
      <Divider/>
      <Resume/>

  </>
  );
};

export default Aboutme;