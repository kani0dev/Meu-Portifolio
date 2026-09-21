
import React from 'react';
import { Typography, Divider, Space, Card, Flex } from 'antd';
import { 
  RocketOutlined, 
  CodeOutlined, 
  ThunderboltOutlined, 
  PartitionOutlined 
} from '@ant-design/icons';
import InfoSection from './InfoSection';

const { Title, Paragraph, Text } = Typography;

const Aboutme = () => {
  return (
    <Flex
    vertical
    align='start'
    >
        <Title
        level={1}
        >
        Allan Chagas | kani0dev
        </Title>

        <InfoSection/>
    </Flex>
  );
};

export default Aboutme;