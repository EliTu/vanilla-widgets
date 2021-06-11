import { ChildrenType, PropOptions } from "../interfaces";
import {
    setElementChildren,
    setElementProps,
} from "./generateElementHelpers";
import isValidHTMLType from "./isValidHTMLType";

/**
 * Generates an HTML element node with the provided attributes, styles and text. In case nested child 
 * elements are provided as well, they will be appended to the element. 
 * @param type - a string type that suppose to represent a valid HTML tag name.
 * @param propOptions - @see PropOptions.
 * @param childElements - a list of HTML elements to nest inside the element.
 * @returns HTMLElement;
 */
export default function generateElement < Type extends keyof HTMLElementTagNameMap > (type: Type, propOptions: PropOptions, ...childElements: ChildrenType): HTMLElementTagNameMap[Type] {
    if(!isValidHTMLType(type)) {
        console.warn(`Attempting to assign an invalid HTML element type: ${type}.`);
    }
    const element = document.createElement<Type>(type);

    if(Object.keys(propOptions).length) setElementProps(element, propOptions);

    // check the otherChildren param to handle nested elements and afterEnd strings
    if (Array.isArray(childElements)) {
        setElementChildren(element, childElements, propOptions.afterEndText);
    }

    return element;
}