import { Card, Flex, Typography, Tag, Space } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import Link from "antd/es/typography/Link.js";

const { Text, Paragraph } = Typography;

export default function ProjectCard({ projeto, onClick }) {
  return (
    <Card
      hoverable
      onClick={() => onClick?.(projeto)}
      style={{ width: "100%", borderRadius: "8px" }}
    >
      <Flex vertical gap="small">
        <Flex justify="space-between" align="center">
          <Text
            strong
            style={{
              fontSize: "18px",
              borderBottom: "1px solid #f0f0f0",
              width: "100%",
              marginBottom: "8px",
            }}
          >
            {projeto.name}
          </Text>
          {projeto.repoLink && (
            <Link href={projeto.repoLink} target="_blank" onClick={(e) => e.stopPropagation()}>
              <GithubOutlined style={{ fontSize: "22px", marginLeft: "12px" }} />
            </Link>
          )}
        </Flex>

        <Paragraph type="secondary" ellipsis={{ rows: 2 }}>
          {projeto.description}
        </Paragraph>

        <Space size={[0, 8]} wrap>
          {projeto.languagues?.map((l) => (
            <Tag color="processing" key={l} bordered={false}>
              {l}
            </Tag>
          ))}
          {projeto.framework?.map((f) => (
            <Tag color="success" key={f} bordered={false}>
              {f}
            </Tag>
          ))}
        </Space>
      </Flex>
    </Card>
  );
}