import {  Flex, Steps, Timeline } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
import { Children } from 'react';
const experiencies = [
    {
      title: 'inicio - Fatec itaquera - DSM',
      description: '24/02/2023',
    },
    {
      title: 'primeiro hackton - experimenta guarulhos',
      description: '01/01/1970',
    },
    {
      title: '3 lugar - hackthon 3Ejuv',
      description: '01/01/1970',
    },
    {
      title: 'iniciaçao cientifica - fatec itaquera - prof Claudia Courtouke',
      description: '01/01/1970',
    },
    {
      title: 'organização primeiro hackathon fatec itaquera',
      description: '01/01/1970',
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