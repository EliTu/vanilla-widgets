import {
    PropOptions
} from './../interfaces';
import generateElement from './generateElement';

describe('Testing generateElement function', () => {
    it('Should generate a widget with all the correct attributes and texts', () => {
        const propOptions1: PropOptions = {
            attributes: {
                class: 'test_class',
                'data-test': 'test'
            },
            styles: {
                display: 'block',
                border: '1px solid black',
            },
            text: 'main_text',
        }

        const element1 = generateElement('div', propOptions1);
        const expectedHtml = '<div class="test_class" data-test="test" style="display: block; border: 1px solid black;">main_text</div>';

        expect(element1.outerHTML).toEqual(expectedHtml);
    });

    it('Should generate a widget with the correct attributes, children and afterEndText', () => {
        const propOptions2: PropOptions = {
            attributes: {
                'data-second': 'second'
            },
            styles: {
                maxHeight: '1000px'
            },
            text: 'hello',
            afterEndText: 'world'
        }

        const element2 = generateElement('section', propOptions2, generateElement('div', {}), generateElement('p', {}));
        const expectedHtml = '<section data-second="second" style="max-height: 1000px;">hello<div></div><p></p>world</section>';

        expect(element2.outerHTML).toEqual(expectedHtml);
    });

    it('Should generate an empty widget if no propOptions are passed', () => {
        const element3 = generateElement('span', {});
        expect(element3.outerHTML).toEqual('<span></span>');
    });

    it('Should generate a simple element with text when only text prop is passed', () => {
        const element4 = generateElement('p', {
            text: 'hello world'
        });
        expect(element4.outerHTML).toEqual('<p>hello world</p>');
    });

    it('Should throw an error if attempting to pass an invalid HTML tag type', () => {
        const invalidType = ['abc123', 'test_test'];
        invalidType.forEach((type, i) => {
            expect(() => generateElement((type as keyof HTMLElementTagNameMap), {})).toThrowError(`Attempting to assign an invalid HTML element type: ${invalidType[i]}`)
        });
    });
});