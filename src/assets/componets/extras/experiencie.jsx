import {  Flex, Steps, Timeline } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
import { Children } from 'react';
const experiencies = [
    {
      title: '',
      description: '01/01/1970',
      color:'green'
    },
    {
      title: 'Init',
      description: '01/01/1970',
      color:'green'
    },
    {
      title: 'Init',
      description: '01/01/1970',
      color:'green'
    },
  ]

const ExperiencieSection = () => (
        <Steps
        progressDot
        current={experiencies.length-1}
            items={experiencies}
        />
);
export default ExperiencieSection;