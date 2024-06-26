import { primary } from "../components/theme/Themes";

export const logCredits = () => {
    const pieceEmoji = String.fromCodePoint(0x1F48E);

    const logStyle = [
        `color: ${primary}`,
        "font-size: 3em",
        "font-weight: 300",
        "padding: 100px 0px 100px 0px",
    ].join(";");

    return console.log(
        `%c © ${new Date().getFullYear()} github.com/KrystianOwczarek ${pieceEmoji}`,
        logStyle
    );
};
