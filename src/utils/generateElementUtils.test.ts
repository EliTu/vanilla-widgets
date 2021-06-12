import {
    PropOptions
} from './../interfaces';
import {
    appendText,
    setAttributes,
    setElementChildren,
    setElementProps,
    setStyles
} from './generateElementUtils';

describe('Testing setAttributes function', () => {
    it('Should assign the correct attributes that were passed in', () => {
        const dummyElement1 = document.createElement('div');
        const attributes1 = {
            class: 'class-test1',
            'data-test': 'test',
            'data-random': '123',
            id: 'id'
        }
        setAttributes(dummyElement1, attributes1);

        const expectedElementHTML = '<div class="class-test1" data-test="test" data-random="123" id="id"></div>';

        expect(dummyElement1.outerHTML).toEqual(expectedElementHTML);
        expect(dummyElement1.getAttributeNames()).toEqual(Object.keys(attributes1));

        Object.keys(attributes1).forEach((key) => {
            const attributeValue = dummyElement1.getAttribute(key);
            expect(attributeValue).toEqual(attributes1[key]);
        });
    });

    it('Should assign true boolean attributes with no values', () => {
        const dummyElement2 = document.createElement('input');
        const attributes2 = {
            type: 'checkbox',
            checked: true,
            disabled: false,
        };

        setAttributes(dummyElement2, attributes2);

        const expectedElementHTML = '<input type="checkbox" checked="" disabled="false">'; // in the DOM it'll be just 'checked'
        expect(dummyElement2.outerHTML).toEqual(expectedElementHTML);
        expect(dummyElement2.getAttributeNames()).toEqual(Object.keys(attributes2));

        Object.keys(attributes2).forEach((key) => {
            const attributeValue = dummyElement2.getAttribute(key);
            expect(attributeValue).toEqual(attributes2[key] === attributes2['checked'] ? '' :
                attributes2[key] === attributes2['disabled'] ? 'false' : attributes2[key]);
        });
    });

    it('Should short-circuit early if attributes is an empty object', () => {
        const dummyElement3 = document.createElement('div');

        setAttributes(dummyElement3, {});
        expect(dummyElement3.outerHTML).toEqual('<div></div>');
    });
});

describe('Testing setStyles function', () => {
    it('Should assign the correct style attributes that were passed in', () => {
        const dummyElement4 = document.createElement('div');
        const styles = {
            width: '100%',
            height: '100%',
            color: 'red',
            backgroundImage: 'url(`https://www.z.com`)'
        }

        setStyles(dummyElement4, styles);
        const expectedElementHTML = '<div style="width: 100%; height: 100%; color: red; background-image: url(`https://www.z.com`);"></div>';

        expect(dummyElement4.outerHTML).toEqual(expectedElementHTML);

        Object.keys(styles).forEach(styleKey => {
            expect(dummyElement4.style[styleKey]).toEqual(styles[styleKey]);
        })
    });

    it('Should short-circuit and return early if styles is an empty object, also should remove any style attributes', () => {
        const dummyElement5 = document.createElement('div');
        dummyElement5.style.width = '100%';

        setStyles(dummyElement5, {});

        expect(dummyElement5.outerHTML).toBe('<div></div>');
    });
});

describe('Testing appendText function', () => {
    it('Should append a string to the target element', () => {
        const dummyElement6 = document.createElement('p');

        appendText(dummyElement6, 'test_text');

        expect(dummyElement6.textContent).toBe('test_text');
        expect(dummyElement6.outerHTML).toBe('<p>test_text</p>');
    });
});

describe('Testing setElementProps function', () => {
    it('Should call all the other util functions if all prop values are defined', () => {
        const dummyElement7 = document.createElement('div');
        const props: PropOptions = {
            attributes: {
                class: 'test_class'
            },
            styles: {
                display: 'flex'
            },
            text: 'test_text'
        }

        setElementProps(dummyElement7, props);

        const expectedElementHTML = '<div class="test_class" style="display: flex;">test_text</div>';
        expect(dummyElement7.outerHTML).toEqual(expectedElementHTML);
    });

    it('Should not call the designated util function if its prop is undefined', () => {
        const dummyElement8 = document.createElement('div');
        const partialProps: PropOptions = {
            attributes: {
                'data-t': '123'
            },
            afterEndText: 'not_relevant_text'
        }

        setElementProps(dummyElement8, partialProps);
        const expectedElementHTML = '<div data-t="123"></div>';
        expect(dummyElement8.outerHTML).toEqual(expectedElementHTML);
    });
});

describe('Testing setElementChildren function', () => {
    it('Should append nested children correctly', () => {
        const parentElement1 = document.createElement('div');
        const child1 = document.createElement('p');
        const child2 = document.createElement('h2');

        setElementChildren(parentElement1, [child1, child2]);

        const expectedElementHTML = '<div><p></p><h2></h2></div>';
        expect(parentElement1.outerHTML).toEqual(expectedElementHTML);
    });

    it('Should append deeply nested children correctly', () => {
        const parentElement2 = document.createElement('div');
        const child3 = document.createElement('aside');
        const child4 = document.createElement('audio');
        child3.append(child4);

        setElementChildren(parentElement2, [child3]);

        const expectedElementHTML = '<div><aside><audio></audio></aside></div>';
        expect(parentElement2.outerHTML).toEqual(expectedElementHTML);
    });

    it('Should handle afterEndText correctly to allow inline text nesting', () => {
        const parentElement3 = document.createElement('p');
        parentElement3.textContent = 'this is a ';
        const child5 = document.createElement('a');
        child5.textContent = 'nested text';

        setElementChildren(parentElement3, [child5], ' with afterend text');
        const expectedElementHTML = '<p>this is a <a>nested text</a> with afterend text</p>';
        expect(parentElement3.outerHTML).toEqual(expectedElementHTML);
    });
});