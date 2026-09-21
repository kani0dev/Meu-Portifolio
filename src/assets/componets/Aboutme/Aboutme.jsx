
import React from 'react';
import { Typography, Divider, Space, Card, Flex, Image } from 'antd';
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
    gap={12}
    style={{width:'100%'}}
    justify='center'
    vertical
      >
          <Flex
            gap={12}
            justify='space-between'
          >
            <Title
            level={2}
            >
            Allan Chagas | kani0dev

            </Title>
            <Image
            preview={false}
            width={100}
            src='./popotifolio.png'
            />
          </Flex>

          <InfoSection/>
    </Flex>
  );
};

export default Aboutme;