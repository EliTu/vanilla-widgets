import {
    appendText,
    setAttributes,
    setStyles
} from "./helpers";

export interface Options {
    attributes ? : Record < string, string | boolean > ;
    styles ? : Partial < CSSStyleDeclaration > ;
    text ? : string;
}
export default function generateElement < Type extends keyof HTMLElementTagNameMap > (type: Type, options: Options = {}, ...otherChildren: any): HTMLElementTagNameMap[Type] {
    let element = document.createElement(type);
    const {
        attributes,
        styles,
        text
    } = options;

    if (attributes) setAttributes(element, attributes);
    if (styles) setStyles(element, styles);
    if (text) appendText(element, text);

    // check the otherChildren param to handle nesting
    if (otherChildren && Array.isArray(otherChildren)) {
        for (const child of otherChildren) {
            element.append(child)
        }
    }

    return element;
}