import {
    PropOptions
} from './../interfaces';
import generateElement from './generateElement';


export const article = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('article', propOption, ...otherChildren);
export const div = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('div', propOption, ...otherChildren);
export const img = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('img', propOption, ...otherChildren);
export const span = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('span', propOption, ...otherChildren);
export const a = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('a', propOption, ...otherChildren);
export const p = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('p', propOption, ...otherChildren);