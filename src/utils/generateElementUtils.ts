import {
    ChildrenType,
    PropOptions
} from "../interfaces";

/**
 * Call the various helper functions to set attributes, style and text.
 * @param element The target HTML element.
 * @param param the propOptions @see PropOptions.
 */
export function setElementProps(element: HTMLElement, {
    attributes,
    styles,
    text
}: PropOptions) {
    if (attributes) setAttributes(element, attributes);
    if (styles) setStyles(element, styles);
    if (text) appendText(element, text);
}

/**
 * Assign attribute key-value pairs on a target element.
 * @param element The target HTML element.
 * @param attributes an object containing key-value pairs of HTML tag attributes.
 */
export function setAttributes(element: HTMLElement, attributes: PropOptions['attributes']) {
    if (!attributes || !Object.keys(attributes).length) return;

    const attributeKeyValueArray = Object.entries(attributes);
    for (const [attributeNameKey, value] of attributeKeyValueArray) {
        /// set true boolean values without value, for example <button disabled>
        if (typeof value === 'boolean' && value) element.setAttribute(attributeNameKey, '');
        // if(typeof value === 'function' && attributeNameKey.startsWith('on')) element.addEventListener(attributeNameKey.substring(2), (e) => value(e));
        else element.setAttribute(attributeNameKey, (value as string));
    }
}

/**
 * Assign style attributes on the target element.
 * @param element The target HTML element.
 * @param styles an object containing key-value pairs of valid CSS rules.
 */
export function setStyles(element: HTMLElement, styles: PropOptions['styles']) {
    if (!styles || !Object.keys(styles).length) {
        element.removeAttribute(`style`);
        return;
    }

    const stylesKeyValueArray = Object.entries(styles);
    for (const [styleNameKey, value] of stylesKeyValueArray) {
        if (styleNameKey in element.style) {
            element.style[styleNameKey] = value;
        }
    }
}

/**
 * Generates a textNode from a passed string and appends it on a target element as tag text.
 * @param element The target HTML element.
 * @param text the passed string to be appended as tag's text.
 */
export function appendText(element: HTMLElement, text: string) {
    const textNode = document.createTextNode(text);
    element.appendChild(textNode);
}

/**
 * Handle nested HTML child elements by appending them to the target element.
 * If afterEndText is passed, it should be appended after the child element, in order to allow 
 * inline element nesting.
 * @example <p>main text <span>child</span> afterEndText</p>
 * @param element The target HTML element.
 * @param childElements a list of HTML elements, nested inside the element.
 * @param afterEndText a string to be appended after the child.
 */
export function setElementChildren(element: HTMLElement, childElements: ChildrenType, afterEndText ? : string) {
    for (let i = 0; i < childElements.length; i++) {
        const child = childElements[i];

        // first append the child to the parent
        element.append(child);

        // insert any afterEnd strings right after the last child is appended to a parent
        if (afterEndText && i === childElements.length - 1) child.insertAdjacentText('afterend', afterEndText);
    }
}