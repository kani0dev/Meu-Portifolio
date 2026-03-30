import React from 'react';
import { Typography, Divider, Space, Card } from 'antd';
import { 
  RocketOutlined, 
  CodeOutlined, 
  ThunderboltOutlined, 
  PartitionOutlined 
} from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

const Aboutme = () => {
  return (
    <Typography >
      {/* Cabeçalho de Impacto */}
      <Space direction="vertical" size="small">
        <Text type="secondary" strong style={{ fontSize: '1.1rem' }}>
          Desenvolvedor Full-Stack | 5º Semestre Fatec Itaquera
        </Text>
      </Space>

      <Divider orientation="left">
        <Space><RocketOutlined /> <Text strong>Perfil Profissional</Text></Space>
      </Divider>

      <Paragraph style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
        Estudante de Desenvolvimento de Software Multiplataforma, atuo como desenvolvedor full-stack com experiência prática em 
        <Text code>Java</Text>, <Text code>Spring Boot</Text>, <Text code>JavaScript</Text> e <Text code>React</Text>. 
        Desenvolvo sistemas completos, cuidando desde a modelagem de dados até a interface final.
      </Paragraph>

      <Paragraph style={{ fontSize: '16px', textAlign: 'justify', lineHeight: '1.8' }}>
        Minha trajetória é movida pela curiosidade técnica, e entender como os dados são transmitidos, criptografados e recuperados em sistemas distribuídos. 
        Essa busca me permitiu construir uma base sólida em <Text strong>infraestrutura, redes e sistemas Linux</Text>.
      </Paragraph>

      {/* Citação Estilizada */}
      <Card 
        bordered={false} 
        style={{ background: '#f9f9f9', borderLeft: '4px solid #1890ff', margin: '24px 0' }}
      >
        <Paragraph italic style={{ fontSize: '16px', margin: 0 }}>
          "Resolver um problema complexo com uma solução simples é o verdadeiro sinal de domínio técnico."
          <br />
          <Text type="secondary">— Inspirado em Mikhail Kalashnikov</Text>
        </Paragraph>
      </Card>

      <Divider orientation="left">
        <Space><CodeOutlined /> <Text strong>Experiência e Mentalidade</Text></Space>
      </Divider>

      <Paragraph style={{ fontSize: '16px', textAlign: 'justify' }}>
        Tenho experiência em projetos individuais e colaborativos. Destaque para o desenvolvimento de um 
        <Text strong> Sistema de Ordens de Serviço</Text> e a atuação como membro "curinga" em um <Text strong>CRM imobiliário</Text>, 
        onde foquei em integração de APIs (OLX), requisitos e documentação técnica.
      </Paragraph>

      <Divider orientation="left">
        <Space><PartitionOutlined /> <Text strong>Stack & Ferramentas</Text></Space>
      </Divider>

      <Paragraph style={{ fontSize: '16px' }}>
        No dia a dia, opero em ambiente <Text strong>Linux</Text>, utilizo <Text strong>Git</Text> para versionamento e 
        <Text strong> Docker</Text> para padronização. Encaro problemas de frente: investigo logs e busco a raiz do erro como 
        forma de aprendizado contínuo.
      </Paragraph>

      <Divider orientation="left">
        <Space><ThunderboltOutlined /> <Text strong>Objetivo Atual</Text></Space>
      </Divider>

      <Paragraph strong style={{ fontSize: '16px'}}>
        Busco oportunidade de estágio em Desenvolvimento, Análise ou Banco de Dados, com especial interesse em 
        Segurança, Redes e Arquitetura de Sistemas.
      </Paragraph>
    </Typography>
  );
};

    export default Aboutme;