import { Options } from "./generateElement";

export function setAttributes(element: HTMLElement, attributes: Options['attributes']) {
    if(!attributes || !element) return;
    console.log(attributes);
    
    const attributeKeyValueArray = Object.entries(attributes);
    for(const [key, value] of attributeKeyValueArray) {
            
            element.setAttribute(key, value);
            console.log(key, value);
    }
    console.log(element);
    
}

export function setStyles(element: HTMLElement, styles: Options['styles']) {
    if (!styles) {
    element.removeAttribute(`styles`);
    return;
  }

  const stylesKeyValueArray = Object.entries(styles);
  for(const [key, value] of stylesKeyValueArray) {
        if(key in element) {
            element.style[key] = value;
        }
    }
}

export function appendText(element: HTMLElement, text: string) {
  const textNode = document.createTextNode(text);
  element.appendChild(textNode);
}