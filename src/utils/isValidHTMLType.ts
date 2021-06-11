export default function isValidHTMLType(type: string) {
    return document.createElement(type.toUpperCase()).toString() != "[object HTMLUnknownElement]";
}
