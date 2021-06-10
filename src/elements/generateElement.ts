import { PropOptions } from "../interfaces";
import {
    buildElementProps,
} from "./helpers";

export default function generateElement < Type extends keyof HTMLElementTagNameMap > (type: Type, propOptions: PropOptions = {}, ...otherChildren: any): HTMLElementTagNameMap[Type] {

    const element = document.createElement(type);

    if(Object.keys(propOptions).length) buildElementProps(element, propOptions);

    // check the otherChildren param to handle nested elements
    if (otherChildren && Array.isArray(otherChildren)) {
        for (const child of otherChildren) {
            element.append(child)
        }
    }

    return element;
}