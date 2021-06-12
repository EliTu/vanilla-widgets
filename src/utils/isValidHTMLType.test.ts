import isValidHTMLType from './isValidHTMLType';
/**
 * @jest-environment jsdom
 */
describe('Testing isValidHTMLType function', () => {
    it('Should return true for valid HTML tag names', () => {
        const validTagsList = ['a', 'div', 'section', 'video', 'span', 'hr'];
        validTagsList.forEach(tag => expect(isValidHTMLType((tag as keyof HTMLElementTagNameMap))).toBe(true));
    });

    it('Should return false for invalid HTML tag names', () => {
        const invalidTagsList = ['this', 'is', 'really', 'random', 'strings', 'list'];
        invalidTagsList.forEach(tag => expect(isValidHTMLType((tag as keyof HTMLElementTagNameMap))).toBe(false));
    });
});