import { setAttributes, setStyles } from "./helpers";

export interface Options {
    attributes?: Record<string, string>;
    styles?: Partial<CSSStyleDeclaration>;
}
export default function generateElement < Type extends keyof HTMLElementTagNameMap > (type: Type, options: Options, text?: string, ...otherChildren: HTMLElement[]): HTMLElementTagNameMap[Type] {
    let element = document.createElement(type);

    const {attributes, styles} = options;
    if(attributes) {
        setAttributes(element, attributes);
    } 
    if(styles) {
        setStyles(element, styles);
    }

    return element;
}
