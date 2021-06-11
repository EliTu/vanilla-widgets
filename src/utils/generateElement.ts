import { ChildrenType, PropOptions } from "../interfaces";
import {
    setElementChildren,
    setElementProps,
} from "./generateElementHelpers";
import isValidHTMLType from "./isValidHTMLType";

export default function generateElement < Type extends keyof HTMLElementTagNameMap > (type: Type, propOptions: PropOptions, ...childElements: ChildrenType): HTMLElementTagNameMap[Type] {
    if(!isValidHTMLType(type)) {
        console.warn(`Attempting to assign an invalid HTML element type: ${type}.`);
    }
    const element = document.createElement<Type>(type);

    if(Object.keys(propOptions).length) setElementProps(element, propOptions);

    // check the otherChildren param to handle nested elements and afterEnd strings
    if (childElements && Array.isArray(childElements)) {
        setElementChildren(element, childElements, propOptions.afterEndText);
    }

    return element;
}