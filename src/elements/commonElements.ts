import generateElement from './generateElement';

export const div = (...args: any) => generateElement('div', ...args);
export const img = (...args: any) => generateElement('img', ...args);
export const span = (...args: any) => generateElement('span', ...args);
export const p = (...args: any) => generateElement('p', ...args);
export const a = (...args: any) => generateElement('a', ...args);