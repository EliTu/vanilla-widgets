import {
    OriginOptions,
    PublisherContentMetadata,
    TypeOptions
} from '../interfaces';
import {
    generateOrganicRecommendationItem,
    generateRecommendationItemByOrigin,
    generateSponsoredRecommendationItem,
    generateWidgetHeaderByOrigin,
    generateWidgetSectionByOrigin
} from './widgetContentElements';

let origin = OriginOptions.ORGANIC;

const mockPublisherData: PublisherContentMetadata = {
    branding: 'test_branding',
    categories: ['test_categories'],
    created: new Date(),
    description: 'test_description',
    duration: '0',
    id: '123',
    name: 'test_name',
    rating: '0',
    thumbnail: [{
        url: 'url_test'
    }],
    type: TypeOptions.VIDEO,
    url: 'http://www.test.com',
    views: '0',
    origin,
}

const testid = 'data-testid'
const headerTestid = `[${testid}="widget-header-container"]`;
const widgetContentContainerTestid = `[${testid}="widget-content-container"]`;
const imageContainerTestid = `[${testid}="image-container"]`;
const textContentContainerTestid = `[${testid}="text-content-container"]`;
const itemTextTestid = `[${testid}="item-text-content"]`;
const itemBrandingTestId = `[${testid}="item-branding-name"]`;

describe('Testing generateWidgetSectionByOrigin function', () => {
    it('Should generate a section element with children nodes for the ORGANIC recommendation widget', () => {
        const organicWidgetSection = generateWidgetSectionByOrigin(origin);
        runGenerateWidgetSectionTests(organicWidgetSection, origin);
    });

    it('Should generate a section element with children nodes for the SPONSORED recommendation widget', () => {
        origin = OriginOptions.SPONSORED;
        const sponsoredWidgetSection = generateWidgetSectionByOrigin(origin);
        runGenerateWidgetSectionTests(sponsoredWidgetSection, origin);
    });
});

describe('Testing generateWidgetHeaderByOrigin function', () => {
    it('Should generate a header element with children nodes for the ORGANIC recommendation widget', () => {
        origin = OriginOptions.ORGANIC;
        const organicWidgetHeader = generateWidgetHeaderByOrigin(origin);
        runGenerateWidgetHeaderTests(organicWidgetHeader, origin);
    });

    it('Should generate a header element with children nodes for the SPONSORED recommendation widget', () => {
        origin = OriginOptions.SPONSORED;
        const sponsoredWidgetHeader = generateWidgetHeaderByOrigin(origin);
        runGenerateWidgetHeaderTests(sponsoredWidgetHeader, origin);
    });
});

describe('Testing generateSponsoredRecommendationItem function', () => {
    it('Should a correct sponsored recommendation item given correct publisher data', () => {
        const publisherDataWithSponsoredOrigin: PublisherContentMetadata = {
            ...mockPublisherData,
            origin: OriginOptions.SPONSORED
        };
        const sponsoredItem = generateSponsoredRecommendationItem(publisherDataWithSponsoredOrigin);
        runGenerateItemTests(sponsoredItem, publisherDataWithSponsoredOrigin);
    });
});

describe('Testing generateOrganicRecommendationItem function', () => {
    it('Should a correct organic recommendation item given correct publisher data', () => {
        const publisherDataWithOrganicOrigin: PublisherContentMetadata = {
            ...mockPublisherData,
            origin: OriginOptions.ORGANIC
        };
        const organicItem = generateOrganicRecommendationItem(publisherDataWithOrganicOrigin);
        runGenerateItemTests(organicItem, publisherDataWithOrganicOrigin);
    });
});

describe('Testing generateRecommendationItemByOrigin function', () => {
    it('Should throw an error if origin type is unsupported', () => {
        const updatedPublisherData = {
            ...mockPublisherData,
            origin: 'foo'
        };
        //@ts-ignore 
        expect(() => generateRecommendationItemByOrigin(updatedPublisherData)).toThrowError('Trying to generate an unknown origin type: foo');
    });
});

function runGenerateWidgetSectionTests(section: HTMLElement, origin: OriginOptions) {
    expect(section.children).toHaveLength(2);
    expect(section.dataset.origin).toBe(origin);
    expect(section.classList.contains('widget-section-container')).toBe(true);

    const header = section.querySelector(headerTestid) !;
    expect(header).toBeDefined();
    expect(header.children).toHaveLength(2);

    const contentContainer = section.querySelector(widgetContentContainerTestid) !;
    expect(contentContainer).toBeDefined();
    expect(contentContainer.classList.contains('widget-content-container')).toBe(true);
}

function runGenerateWidgetHeaderTests(header: HTMLElement, origin: OriginOptions) {
    expect(header.children).toHaveLength(2);
    expect(header.dataset.origin).toBe(origin);
    expect(header.classList.contains('widget-header')).toBe(true);

    const h2 = header.querySelector('h2') !;
    expect(h2).toBeDefined();
    expect(h2.textContent).toEqual(origin === OriginOptions.ORGANIC ? 'More content on this site' : 'Ad content for you');

    const p = header.querySelector('p') !;
    expect(p).toBeDefined();
    expect(p.children).toHaveLength(1);
    expect(p.textContent).toEqual(origin === OriginOptions.ORGANIC ? '' : 'by Taboola');

    const span = p.querySelector('span') !;
    expect(span).toBeDefined();
    expect(span.textContent).toEqual(origin === OriginOptions.ORGANIC ? '' : 'Taboola')
}

function runGenerateItemTests(item: HTMLElement, publisherData: PublisherContentMetadata) {
    const {
        origin
    } = publisherData;
    const isOrganic = origin === OriginOptions.ORGANIC;

    expect(item.children).toHaveLength(1);
    expect(item.classList.contains('item-container')).toBe(true);

    if (isOrganic) {
        expect(item.classList.contains('organic-item-container')).toBe(true);
    }

    if (!isOrganic) {
        const imageContainer = item.querySelector(imageContainerTestid) !;
        expect(imageContainer).toBeDefined();
        expect(imageContainer.classList.contains('image-container')).toBe(true);
        expect(imageContainer.children).toHaveLength(1);

        const img = imageContainer.querySelector('img') !;
        expect(img).toBeDefined();
        expect(img.classList.contains('item-thumbnail-image')).toBe(true);
        expect(img.getAttribute('src')).toEqual(publisherData.thumbnail[0].url);
    }

    const textContainer = item.querySelector(textContentContainerTestid) !;
    expect(textContainer).toBeDefined();
    
    const expectedChildrenByOrigin = isOrganic ? 1 : 2;
    expect(textContainer.children).toHaveLength(expectedChildrenByOrigin);

    const itemText = textContainer.querySelector(itemTextTestid) !;
    expect(itemText).toBeDefined();
    expect(itemText.textContent).toEqual(publisherData.name);

    const itemBrandingName = textContainer.querySelector(itemBrandingTestId) !;
    expect(itemBrandingName).toBeDefined();

    if (!isOrganic) {
        expect(itemBrandingName.textContent).toEqual(`by ${publisherData.branding}`);
    }
}