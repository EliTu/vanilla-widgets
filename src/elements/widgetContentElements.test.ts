import {
    OriginOptions
} from '../interfaces';
import {
    generateOrganicRecommendationItem,
    generateRecommendationItemByOrigin,
    generateSponsoredRecommendationItem,
    generateWidgetHeaderByOrigin,
    generateWidgetSectionByOrigin
} from './widgetContentElements';

const testid = 'data-testid'
const headerTestid = `[${testid}="widget-header-container"]`;
const widgetContentContainerTestid = `[${testid}="widget-content-container"]`;

let origin = OriginOptions.ORGANIC;
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

    const h2 = header.querySelector('h2')!;
    expect(h2).toBeDefined();
    expect(h2.textContent).toEqual(origin === OriginOptions.ORGANIC ? 'More content on this site' : 'Ad content for you');

    const p = header.querySelector('p')!;
    expect(p).toBeDefined();
    expect(p.children).toHaveLength(1);
    expect(p.textContent).toEqual(origin === OriginOptions.ORGANIC ? '' : 'by Taboola');

    const span = p.querySelector('span');
    expect(span).toBeDefined();
    expect(span?.textContent).toEqual(origin === OriginOptions.ORGANIC ? '' : 'Taboola')
}