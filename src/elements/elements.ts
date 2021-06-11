import {
    PropOptions
} from '../interfaces';
import generateElement from '../utils/generateElement';

export const header = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('header', propOption, ...otherChildren);
export const section = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('section', propOption, ...otherChildren);
export const article = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('article', propOption, ...otherChildren);
export const div = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('div', propOption, ...otherChildren);
export const img = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('img', propOption, ...otherChildren);
export const span = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('span', propOption, ...otherChildren);
export const h2 = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('h2', propOption, ...otherChildren);
export const a = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('a', propOption, ...otherChildren);
export const p = (propOption: PropOptions, ...otherChildren: HTMLElement[]) => generateElement('p', propOption, ...otherChildren);