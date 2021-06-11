import { PropOptions } from "../interfaces";
import {
    setElementChildren,
    setElementProps,
} from "./helpers";

export default function generateElement < Type extends keyof HTMLElementTagNameMap > (type: Type, propOptions: PropOptions, ...childElements: HTMLElement[]): HTMLElementTagNameMap[Type] {
    const element = document.createElement(type);

    if(Object.keys(propOptions).length) setElementProps(element, propOptions);

    // check the otherChildren param to handle nested elements and afterEnd strings
    if (childElements && Array.isArray(childElements)) {
        setElementChildren(element, childElements, propOptions.afterEndText);
    }

    return element;
}