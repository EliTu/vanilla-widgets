/**
 * a util function to check if a passed type string is a valid HTML tag type by comparing the createElement string  result with an HTMLUnknownElement result.
 * @param type a string type that suppose to represent a valid HTML tag name.
 * @returns boolean.
 */
export default function isValidHTMLType < Type extends keyof HTMLElementTagNameMap > (type: Type) {
    return document.createElement(type.toUpperCase()).toString() !== "[object HTMLUnknownElement]";
}