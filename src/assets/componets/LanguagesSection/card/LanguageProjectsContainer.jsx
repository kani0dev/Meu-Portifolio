import { Empty, Flex, List, Typography } from "antd";
import LanguageProjectCard from "./LanguageProjectCard.jsx";

const { Text } = Typography;

/**
 * Container da listagem de projetos por linguagem.
 *
 * Existe só para dar o mesmo ritmo visual dos cards de destaque do carousel:
 * mesmo `gap`, cards soltos sem linha divisória entre eles e o mesmo padding
 * interno. O conteúdo dos cards segue minimalista de propósito.
 */
export default function LanguageProjectsContainer({ projetos, lang, onSelect }) {
  return (
    <Flex vertical gap="small" style={{ width: "100%" }}>
      <List
        dataSource={projetos}
        // o padrão do List desenha uma linha entre os itens, o que não
        // acontece nos cards do carousel
        split={false}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={
                <Text type="secondary">
                  Nenhum projeto encontrado para {lang}.
                </Text>
              }
            />
          ),
        }}
        renderItem={(projeto) => (
          // o espaçamento entre cards é controlado pelo gap do Flex acima,
          // então o item não traz padding próprio
          <List.Item
            style={{ padding: 0, borderBlockEnd: "none", marginBlock: 0 }}
          >
            <LanguageProjectCard projeto={projeto} onClick={onSelect} />
          </List.Item>
        )}
      />
    </Flex>
  );
}
