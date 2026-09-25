import { Card, Flex, Tag, Typography, theme } from "antd";

const { Text } = Typography;

/**
 * Card da listagem de projetos por linguagem.
 *
 * Propositalmente separado do ProjectCard do carousel: aquele é o card de
 * destaque, com capa, stack completa e botão de acesso ao projeto. Aqui a
 * listagem é enxuta — só título e linguagens — e a descrição (com o resto
 * dos detalhes) fica no ProjectDetailsModal, que abre no clique.
 */
export default function LanguageProjectCard({ projeto, onClick }) {
  const { token } = theme.useToken();
  const { name, languagues } = projeto;

  const abrir = () => onClick?.(projeto);

  return (
    <Card
      hoverable
      onClick={abrir}
      // o Card do antd não é focável por padrão, e aqui ele é o gatilho
      // da única ação da listagem, então precisa responder a teclado
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          abrir();
        }
      }}
      style={{ width: "100%", cursor: "pointer", borderRadius: 8 }}
      styles={{ body: { padding: token.paddingSM } }}
    >
      <Flex vertical gap={6}>
        <Text strong ellipsis={{ tooltip: name }}>
          {name}
        </Text>

        <Flex gap={4} wrap>
          {languagues?.map((l) => (
            <Tag
              color="processing"
              key={l}
              bordered={false}
              style={{ marginInlineEnd: 0 }}
            >
              {l}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </Card>
  );
}
