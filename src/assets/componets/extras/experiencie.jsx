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
    },
    {
      title: '3 lugar - hackthon 3Ejuv',
    },
    {
      title: 'iniciaçao cientifica - fatec itaquera - prof Claudia Courtouke',
      description: '11/08/2026',
    },
    {
      title: 'organização primeiro hackathon fatec itaquera',
      description: '26/09/2026',
    },
  ]

const ExperiencieSection = () => (
        <Steps
        progressDot
        labelPlacement='vertical'
        current={experiencies.length-1}
            items={experiencies}
        />
);
export default ExperiencieSection;