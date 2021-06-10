import { PropOptions } from './../interfaces';
import generateElement from './generateElement';

// interface Args {
//     propOption: PropOptions;
//     otherChildren: any[]
// }

export const article = (propOption: PropOptions, ...otherChildren: any) => generateElement('article', propOption, ...otherChildren);
export const div = (propOption: PropOptions, ...otherChildren: any) => generateElement('div', propOption, ...otherChildren);
export const img = (propOption: PropOptions, ...otherChildren: any) => generateElement('img', propOption, ...otherChildren);
export const span = (propOption: PropOptions, ...otherChildren: any) => generateElement('span', propOption, ...otherChildren);
export const a = (propOption: PropOptions, ...otherChildren: any) => generateElement('a', propOption, ...otherChildren);
export const p = (propOption: PropOptions, ...otherChildren: any) => generateElement('p', propOption, ...otherChildren);