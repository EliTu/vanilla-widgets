import { ChildrenType, PropOptions } from '../interfaces';
import generateElement from './generateElement';

/**
 * a constant list of HTML element types to generate with the generateElement function.
 * To generate more element types, simply add the type (tag name) as a string to the list.
 */
const ELEMENT_TYPES_LIST: Readonly<keyof HTMLElementTagNameMap>[] = [
	'header',
	'section',
	'article',
	'span',
	'div',
	'img',
	'h2',
	'a',
	'p',
];

/**
 * Map over the element type list and with the help of some closure magic to pass around arguments,
 * generateElement function, on each to create a callable function with a preset element type,
 * that can also accept other element functions as children.
 * Using destructuring, assign each to a variable by the same name, and make sure they're in the same order.
 */
const [header, section, article, span, div, img, h2, a, p] = ELEMENT_TYPES_LIST.map(
	(element) =>
		(propOptions: PropOptions, ...childElements: ChildrenType) =>
			generateElement(element, propOptions, ...childElements)
);

// Don't forget to export any newly added elements!
export { section, article, header, span, div, img, h2, a, p };
