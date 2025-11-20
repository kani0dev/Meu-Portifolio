import {getProjectByLanguage} from "/public/projectsMOKUP.js";
import "./Style.css";

import { Modal, List, Tag, Typography, Space, Divider } from "antd";

const { Title, Text } = Typography;

export default function CriarLanguagesModal({ lang, onClose }) {
    const projetos = getProjectByLanguage(lang)
    return (
        <Modal
            open={true}
            onCancel={onClose}
            footer={null}
            title={`Projetos em ${lang}`}
        >
            <List
                dataSource={projetos}
                renderItem={(proj) => (
                    <>
                        <List.Item>
                            <List.Item.Meta
                                title={<Title level={5}>{proj.name}</Title>}

                                description={<Text type="secondary">{proj.description}</Text>}
                            />
                        </List.Item>
                    </>
                )}
            />
        </Modal>
    );
}