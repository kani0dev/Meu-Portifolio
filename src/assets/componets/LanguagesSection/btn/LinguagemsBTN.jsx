import {getUniqLanguages} from "/public/projectsENUM.js";
import {Button} from "antd";

export default function LanguagesBTNS({ onLangClick }) {
    const linguaguems = getUniqLanguages()
    return (
        linguaguems.map(lang => (
            <Button key={lang} onClick={() => onLangClick(lang)}>
                {lang}
            </Button>
        ))
    );
}