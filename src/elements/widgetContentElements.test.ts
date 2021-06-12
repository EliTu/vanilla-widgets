import { OriginOptions } from '../interfaces';
import {
    generateOrganicRecommendationItem,
    generateRecommendationItemByOrigin,
    generateSponsoredRecommendationItem,
    generateWidgetHeaderByOrigin,
    generateWidgetSectionByOrigin
} from './widgetContentElements';

const testid = 'data-testid'
const sectionTestid = `[${testid}="widget-section"]`;
const headerTestid = `[${testid}="widget-header-container"]`;
const widgetContentContainerTestid = `[${testid}="widget-content-container"]`;

describe('Testing generateWidgetSectionByOrigin functions', () => {
    // const setExpectedHtml = (origin: OriginOptions) => `<section class="widget-section-container" data-origin="${origin}" data-testid="widget-section"><header class="widget-header" data-testid="widget-header-container"><h2>${origin === OriginOptions.ORGANIC ? 'More content on this site' : 'Ad content for you'}</h2><p>${origin === OriginOptions.ORGANIC ? '' : 'by '}<span>${origin === OriginOptions.ORGANIC ? '' : 'Taboola'}</span></p></header><div class="widget-content-container" data-testid="widget-content-container"></div></section>`;

    it('Should generate a header for the organic recommendation widget', () => {
        let origin = OriginOptions.ORGANIC;
        const organicWidgetSection = generateWidgetSectionByOrigin(origin);

        expect(organicWidgetSection.children).toHaveLength(2);
        expect(organicWidgetSection.dataset.origin).toBe(origin);
        expect(organicWidgetSection.classList.contains('widget-section-container')).toBe(true);

        const header = organicWidgetSection.querySelector(headerTestid)!;
        expect(header).toBeDefined();
        expect(header.children).toHaveLength(2);

        const contentContainer = organicWidgetSection.querySelector(widgetContentContainerTestid)!;        
        expect(contentContainer).toBeDefined();
        expect(contentContainer.classList.contains('widget-content-container')).toBe(true);
        
    });

});