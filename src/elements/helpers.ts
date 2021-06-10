import { Options } from "./generateElement";

export function setAttributes(element: HTMLElement, attributes: Options['attributes']) {
    if(!attributes || !element) return;
    
    const attributeKeyValueArray = Object.entries(attributes);
    for(const [key, value] of attributeKeyValueArray) {
        if(typeof key === 'boolean') element.setAttribute(key, ''); // for example <button disabled>
        else element.setAttribute(key, (value as string));
    }
    
}

export function setStyles(element: HTMLElement, styles: Options['styles']) {
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

// export function appendArray(element: HTMLElement, children: HTMLElement[]) {
//     for(const child of children) {
//         if (Array.isArray(child)) {
//             appendArray(element, child);
//             } else if (child instanceof window.Element) {
//             element.appendChild(child);
//             } else if (typeof child === `string`) {
//             appendText(element, child);
//             }
//     }
// }

// export function buildElementProps(options, text):  {
//     if(attributes) setAttributes(element, attributes);
//     if(styles) setStyles(element, styles);
//     if(text) appendText(element, text);
// }