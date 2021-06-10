import { PropOptions } from "../interfaces";
export function setAttributes(element: HTMLElement, attributes: PropOptions['attributes']) {
    if(!attributes || !element) return;
    
    const attributeKeyValueArray = Object.entries(attributes);
    for(const [key, value] of attributeKeyValueArray) {
        if(typeof key === 'boolean') element.setAttribute(key, ''); // for example <button disabled>
        else element.setAttribute(key, (value as string));
    }
    
}

export function setStyles(element: HTMLElement, styles: PropOptions['styles']) {
    if (!styles) {
    element.removeAttribute(`style`);
    return;
  }

  const stylesKeyValueArray = Object.entries(styles);
  for(const [key, value] of stylesKeyValueArray) {
        if(key in element.style) {
            element.style[key] = value;
        }
    }
}

export function appendText(element: HTMLElement, text: string) {
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
}

export function buildElementProps(element:HTMLElement, options: PropOptions)  {
     const {
        attributes,
        styles,
        text
    } = options;

    if(attributes) setAttributes(element, attributes);
    if(styles) setStyles(element, styles);
    if(text) appendText(element, text);
}