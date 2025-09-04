import {getProjectByLanguage} from "/public/projectsENUM.js";
import {Button, Modal} from "antd";

export default function CriarLanguagesModal({ lang, onClose }) {
    const projetos = getProjectByLanguage(lang);
    console.log(projetos);
    return (
        <Modal open={true} onCancel={onClose} footer={null} title={`Projetos em ${lang}`}>
            <ul>
                {projetos.map(proj => (
                    <li key={proj.name}>
                        <strong>{proj.name}</strong>: {proj.description}
                        <Button type="text">{proj.languagues}</Button>
                        <Button type="text">{proj.framework}</Button>
                    </li>
                ))}
            </ul>
        </Modal>
    );
}