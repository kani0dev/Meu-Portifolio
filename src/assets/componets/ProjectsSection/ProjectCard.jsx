import {
  Button,
  Card,
  Flex,
  Grid,
  Space,
  Tag,
  Typography,
  theme,
} from "antd";
import { ExportOutlined, GithubOutlined, PictureOutlined } from "@ant-design/icons";

const { Text, Paragraph, Link } = Typography;

const COVER_HEIGHT = 130;

export default function ProjectCard({ projeto, onClick }) {
  const { token } = theme.useToken();
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const { name, description, cover, repoLink, url, languagues, framework } = projeto;

  const abrirDetalhes = () => onClick?.(projeto);

  return (
    <Card
      hoverable
      onClick={abrirDetalhes}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          abrirDetalhes();
        }
      }}
      style={{ width: "100%", borderRadius: 8, cursor: onClick ? "pointer" : "default" }}
      styles={{ body: { padding: token.paddingSM } }}
    >
      <Flex gap="middle" vertical={isMobile}>
        <div style={{ flex: isMobile ? "none" : "0 0 200px" }}>
          {cover ? (
            <img
              src={cover}
              alt={name}
              loading="lazy"
              style={{
                width: "100%",
                height: COVER_HEIGHT,
                objectFit: "cover",
                borderRadius: 6,
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: COVER_HEIGHT,
                display: "grid",
                placeItems: "center",
                background: token.colorFillQuaternary,
                border: `1px dashed ${token.colorBorder}`,
                borderRadius: 6,
              }}
            >
              <PictureOutlined
                style={{ fontSize: 28, color: token.colorTextQuaternary }}
              />
            </div>
          )}
        </div>

        <Flex vertical gap="small" style={{ flex: 1, minWidth: 0 }}>
          <Flex
            justify="space-between"
            align="center"
            gap="small"
            style={{
              borderBottom: `1px solid ${token.colorBorderSecondary}`,
              paddingBottom: 8,
            }}
          >
            <Text strong style={{ fontSize: 18 }}>
              {name}
            </Text>
            {repoLink && (
              <Link
                href={repoLink}
                target="_blank"
                rel="noreferrer"
                aria-label={`Código de ${name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <GithubOutlined style={{ fontSize: 22 }} />
              </Link>
            )}
          </Flex>

          {/* Sem ellipsis: a altura do carousel é automática, então cortar o
              texto esconderia informação sem haver como expandir. */}
          <Paragraph type="secondary" style={{ marginBottom: 0 }}>
            {description}
          </Paragraph>

          <Space size={[0, 8]} wrap>
            {languagues?.map((l) => (
              <Tag color="processing" key={l} bordered={false}>
                {l}
              </Tag>
            ))}
            {framework?.map((f) => (
              <Tag color="success" key={f} bordered={false}>
                {f}
              </Tag>
            ))}
          </Space>

          {url && (
            <div>
              <Button
                type="primary"
                href={url}
                target="_blank"
                rel="noreferrer"
                icon={<ExportOutlined />}
                onClick={(e) => e.stopPropagation()}
              >
                Ver detalhes
              </Button>
            </div>
          )}
        </Flex>
      </Flex>
    </Card>
  );
}
