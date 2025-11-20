import {getUniqLanguages} from "/public/projectsMOKUP.js";
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