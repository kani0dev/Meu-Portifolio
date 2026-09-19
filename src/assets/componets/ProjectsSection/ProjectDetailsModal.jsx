import { Modal, Typography, Tag, Space, Button, Flex, Divider } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link.js";

const { Title, Paragraph, Text } = Typography;

export default function ProjectDetailsModal({ projeto, onClose }) {
  if (!projeto) return null;

  return (
    <Modal
      open={!!projeto}
      onCancel={onClose}
      footer={null}
      centered
      width={800}
      zIndex={1100}
      destroyOnHidden
      title={
        <Title level={3} style={{ margin: 0 }}>
          Detalhes do Projeto
        </Title>
      }
    >
      <Flex vertical gap="middle">
        <Flex justify="space-between" align="top">
          <Title level={2} style={{ margin: 0 }}>
            {projeto.name}
          </Title>
          {projeto.repoLink && (
            <Link href={projeto.repoLink} target="_blank">
              <Button icon={<GithubOutlined />}>Ver código</Button>
            </Link>
          )}
        </Flex>

        <Divider style={{ margin: "8px 0" }} />

        <Paragraph style={{ fontSize: "16px", textAlign: "justify", lineHeight: "1.8", margin: 0 }}>
          {projeto.description}
        </Paragraph>

        <Flex vertical gap="small">
          <Text strong>Linguagens</Text>
          <Space size={[0, 8]} wrap>
            {projeto.languagues?.map((l) => (
              <Tag color="processing" bordered={false} key={l}>
                {l}
              </Tag>
            ))}
          </Space>
        </Flex>

        <Flex vertical gap="small">
          <Text strong>Frameworks e Tecnologias</Text>
          <Space size={[0, 8]} wrap>
            {projeto.framework?.map((f) => (
              <Tag color="success" bordered={false} key={f}>
                {f}
              </Tag>
            ))}
          </Space>
        </Flex>
      </Flex>
    </Modal>
  );
}