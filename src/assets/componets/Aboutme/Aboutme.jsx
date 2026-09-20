
import React from 'react';
import { Typography, Divider, Space, Card, Flex } from 'antd';
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
  <Space>
    <Flex
    align='center'
    vertical
    >
        <Title
        level={1}
        style={{ marginbottom: 0 }}
        >
        Allan Chagas | kani0dev
        </Title>
        <InfoSection/>
        <Divider
          size='large'
        />
        <Resume/>
    </Flex>
  </Space>
  );
};

export default Aboutme;