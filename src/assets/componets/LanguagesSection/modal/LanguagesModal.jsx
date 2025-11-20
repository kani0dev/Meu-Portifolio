import { getProjectByLanguage } from "/public/projectsMOKUP.js";
import "./Style.css";

import {Modal, List, Tag, Typography, Space, Card, Flex, Divider} from "antd";
import { GithubOutlined  } from "@ant-design/icons";
import Link from "antd/es/typography/Link.js";

const { Text, Title } = Typography;

export default function CriarLanguagesModal({ lang, onClose }) {
    const projetos = getProjectByLanguage(lang);

    const ProjectTags = ({  items}) =>
        items?.length > 0 && (
            <Space  wrap >
                {items.map((i) => (
                    <Tag key={i} >
                        {i}
                    </Tag>
                ))}
            </Space>
        );

    return (
        <Modal
            open
            onCancel={onClose}
            footer={null}
            centered
            width={650}
            title={<Title style={{fontSize:"4"}}>Projetos que utilizam {lang}</Title>}
        >
            <List
                dataSource={projetos}
                locale={{ emptyText: <Text>Nenhum projeto encontrado utilizando {lang}.</Text> }}
                renderItem={(proj) => (
                    <List.Item style={{ padding: 0, borderBottom: "none" }}>
                        <Card style={{ width: "100%"}}>
                            <Flex vertical >
                                <Flex justify={"space-between"} horizontal align={"center"}>
                                    <Divider strong orientation={"start"} style={{ fontSize: 18 }}>
                                        {proj.name}
                                    </Divider>
                                        <Link
                                            href={proj.repoLink}
                                            target="_blank"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <GithubOutlined />
                                        </Link>

                                </Flex>
                                <Text type="secondary">{proj.description}</Text>

                                <Text strong >Tecnologias utilizadas:</Text>
                                <Flex horrizontal style={{ marginTop: 10 }}>
                                    <ProjectTags
                                        items={proj.languagues}
                                        color="blue"
                                    />
                                    <ProjectTags
                                        items={proj.framework}
                                        color="green"
                                    />
                                </Flex>
                            </Flex>
                        </Card>

                    </List.Item>
                )}
            />
        </Modal>
    );
}
