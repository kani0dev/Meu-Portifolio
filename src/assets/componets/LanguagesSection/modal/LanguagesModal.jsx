import { getProjectByLanguage } from "../../../../data/projects.js";
import "./Style.css";

import { Modal, Typography } from "antd";
import LanguageProjectsContainer from "../card/LanguageProjectsContainer.jsx";
import ProjectDetailsModal from "../../ProjectsSection/ProjectDetailsModal.jsx";
import { useState } from "react";

const { Title } = Typography;

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
      <LanguageProjectsContainer
        projetos={projetos}
        lang={lang}
        onSelect={setProjetoSelecionado}
      />

      <ProjectDetailsModal
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </Modal>
  );
}