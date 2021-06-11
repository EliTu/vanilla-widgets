import {
    ChildrenType,
    PropOptions
} from '../interfaces';
import generateElement from '../utils/generateElement';

/**
 * a constant list of HTML element types to generate with the generateElement function.
 * To generate more element types, simply add the type (tag name) as a string to the list.
 */
export const ELEMENT_TYPES_LIST = ['header', 'section', 'article', 'div', 'img', 'span', 'h2', 'a', 'p'];

/**
 * Map over the element type list and with the help of some closure magic to pass around arguments, 
 * generateElement function, on each to create a callable function with a preset element type, 
 * that can also accept other element functions as children. 
 * Using destructuring, assign each to a variable by the same name.
 */
const [header, section, article, div, img, span, h2, a, p] = ELEMENT_TYPES_LIST.map(element =>
    (propOption: PropOptions, ...childElements: ChildrenType) =>
    generateElement((element as keyof HTMLElementTagNameMap), propOption, ...childElements))

// Don't forget to export any newly added elements!
export {
    header,
    section,
    article,
    div,
    img,
    span,
    h2,
    a,
    p
};