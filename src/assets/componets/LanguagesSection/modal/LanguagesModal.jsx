import { getProjectByLanguage } from "/public/projectsMOKUP.js";
import "./Style.css";

import { Modal, List, Typography } from "antd";
import ProjectCard from "../../ProjectsSection/ProjectCard.jsx";
import ProjectDetailsModal from "../../ProjectsSection/ProjectDetailsModal.jsx";
import { useState } from "react";

const { Text, Title } = Typography;

export default function CriarLanguagesModal({ lang, onClose }) {
    const projetos = getProjectByLanguage(lang);
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

  return (
    <Modal
      open={!!lang} // Abre se existir uma linguagem
      onCancel={onClose}
      footer={null}
      centered
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
            <ProjectCard projeto={proj} onClick={setProjetoSelecionado} />
          </List.Item>
        )}
      />

      <ProjectDetailsModal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </Modal>
  );
}