import { getProjectByLanguage } from "/public/projectsMOKUP.js";
import "./Style.css";

import {Modal, List,  Typography,  Card, Flex, Tag, Space, } from "antd";
import { GithubOutlined  } from "@ant-design/icons";
import Link from "antd/es/typography/Link.js";

const { Text,Paragraph, Title } = Typography;

export default function CriarLanguagesModal({ lang, onClose }) {
    const projetos = getProjectByLanguage(lang);

    console.log(projetos);
    
  return (
    <Modal
      open={!!lang} // Abre se existir uma linguagem
      onCancel={onClose}
      footer={null}
      centered
      width={700}
      destroyOnHidden // Limpa o estado ao fechar
      title={
        <Title level={3} style={{ margin: 0 }}>
          Projetos com <span style={{ color: '#1890ff' }}>{lang}</span>
        </Title>
      }
    >
      <List
        dataSource={projetos}
        locale={{ emptyText: <Text>Nenhum projeto encontrado para {lang}.</Text> }}
        renderItem={(proj) => (
          <List.Item style={{ padding: "12px 0" }}>
            <Card hoverable style={{ width: "100%", borderRadius: '8px' }}>
              <Flex vertical gap="small">
                <Flex justify="space-between" align="center">
                  {/* Removido o 'strong' do Divider que causava erro */}
                  <div style={{ fontSize: '18px', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0', width: '100%', marginBottom: '8px' }}>
                    {proj.name}
                  </div>
                  <Link href={proj.repoLink} target="_blank">
                    <GithubOutlined style={{ fontSize: '22px', marginLeft: '12px' }} />
                  </Link>
                </Flex>

                <Paragraph type="secondary">{proj.description}</Paragraph>


               <Flex vertical gap="small">
      <Typography.Text strong>Stacks e Tecnologias:</Typography.Text>
      
      <Space size={[0, 8]} wrap>
        {/* Mapeamento direto das Linguagens */}
        {proj.languages?.map((l) => (
          <Tag color="processing" key={l} bordered={false}>
            {l}
          </Tag>
        ))}

        {/* Mapeando os Frameworks */}
        {proj.framework?.map((f) => (
          <Tag color="success" key={f} bordered={false}>
            {f}
          </Tag>
        ))}
      </Space>
    </Flex> 
            
              </Flex>
            </Card>
          </List.Item>
        )}
      />
    </Modal>
  ); 
}
