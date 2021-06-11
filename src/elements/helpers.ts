import { PropOptions } from "../interfaces";
export function setAttributes(element: HTMLElement, attributes: PropOptions['attributes']) {
    if(!attributes || !element) return;
    
    const attributeKeyValueArray = Object.entries(attributes);
    for(const [attributeNameKey, value] of attributeKeyValueArray) {
        if(typeof value === 'boolean') element.setAttribute(attributeNameKey, ''); // for example <button disabled>
        else element.setAttribute(attributeNameKey, (value as string));
    }
    
}

export function setStyles(element: HTMLElement, styles: PropOptions['styles']) {
    if (!styles) {
    element.removeAttribute(`style`);
    return;
  }

  const stylesKeyValueArray = Object.entries(styles);
  for(const [styleNameKey, value] of stylesKeyValueArray) {
        if(styleNameKey in element.style) {
            element.style[styleNameKey] = value;
        }
    }
}

export function appendText(element: HTMLElement, text: string) {
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
}

export function setElementProps(element:HTMLElement, { attributes, styles, text }: PropOptions)  {
    if(attributes) setAttributes(element, attributes);
    if(styles) setStyles(element, styles);
    if(text) appendText(element, text);
}

export function setElementChildren(element: HTMLElement, childElements: HTMLElement[], afterEndText?: string) {
    for (const child of childElements) {
        // first append the child to the parent
        element.append(child);
        // insert any afterEnd strings right after the child is appended to a parent
        if(afterEndText) child.insertAdjacentText('afterend', afterEndText);
    }
}