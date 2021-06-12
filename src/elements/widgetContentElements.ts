import {
    OriginOptions,
    PublisherContentMetadata
} from "../interfaces";
import {
    a,
    div,
    img,
    p,
    span,
    article,
    header,
    h2,
    section
} from './commonElements';

/**
 * Generates a section node that contains the widget's header and the content container.
 * @param origin The publisher content origin type.
 * @returns HTMLElement.
 */
export function generateWidgetSectionByOrigin(origin: PublisherContentMetadata['origin']) {
    return section({
            attributes: {
                class: 'widget-section-container',
                'data-origin': origin,
                'data-testid': 'widget-section'
            }
        },
        generateWidgetHeaderByOrigin(origin),
        div({
            attributes: {
                class: 'widget-content-container',
                'data-testid': 'widget-content-container'
            }
        })
    );
}

/**
 * Generates a header node with the relevant heading text.
 * @param origin The publisher content origin type.
 * @returns HTMLElement.
 */
export function generateWidgetHeaderByOrigin(origin: OriginOptions) {
    const isSponsored = origin === OriginOptions.SPONSORED;
    return header({
            attributes: {
                class: 'widget-header',
                'data-origin': origin,
                'data-testid': 'widget-header-container'
            }
        },
        h2({
            text: isSponsored ? 'Ad content for you' : 'More content on this site'
        }),
        p({
                text: isSponsored ? 'by ' : ''
            },
            span({
                text: isSponsored ? 'Taboola' : ''
            })))
}

/**
 * Generates an interactive widget item with the relevant publisher data as the content by the origin type.
 * @param param The publisher data object. @see PublisherContentMetadata
 * @returns HTMLElement.
 */
export function generateRecommendationItemByOrigin(publisherData: PublisherContentMetadata) {
    const {
        origin
    } = publisherData;

    switch (origin) {
        case OriginOptions.SPONSORED: {
            return generateSponsoredRecommendationItem(publisherData);
        }

        case OriginOptions.ORGANIC: {
            return generateOrganicRecommendationItem(publisherData);
        }

        default: {
            throw new Error(`Trying to generate an unknown origin type: ${origin}`);
        }

    }
}

/**
 * Generate the element tree for an SPONSORED recommendation item.
 * @param param0 @see PublisherContentMetadata
 * @returns HTMLElement
 */
export function generateSponsoredRecommendationItem({
    url,
    name,
    thumbnail,
    branding,
    origin
}: PublisherContentMetadata) {
    return article({
            attributes: {
                class: 'item-container',
                'data-testid': 'item-article',
                'data-recommendation-type': `${origin}`
            },
        },
        a({
                attributes: {
                    href: url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    class: `link-container`,
                    'data-testid': 'image-link-container'
                }
            },
            div({attributes: {class: `${origin}-image-link-container`}},
            img({
                attributes: {
                    class: `${origin}-item-thumbnail-image`,
                    src: thumbnail[0].url,
                    alt: name
                }
            })
            ),
            div({
                    attributes: {
                        class: `${origin}-text-content-container`,
                        'data-testid': 'text-content-container'
                    }
                },
                p({
                    attributes: {
                        class: 'item-text-content',
                        'data-testid': 'item-text-content'
                    },
                    text: name
                }),
                p({
                    attributes: {
                        class: `${origin}-item-branding-name`,
                        'data-testid': 'item-branding-name'
                    },
                    text: `by ${branding}`
                })
            )
        ))
}

/**
 * Generate the element tree for an ORGANIC recommendation item.
 * @param param0 @see PublisherContentMetadata
 * @returns HTMLElement
 */
export function generateOrganicRecommendationItem({
    url,
    name,
    thumbnail,
    branding,
    origin
}: PublisherContentMetadata) {
    return article({
            attributes: {
                class: 'item-container',
                'data-testid': 'item-article',
                'data-recommendation-type': `${origin}`
            },
        },
        a({
                attributes: {
                    href: url,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    class: `${origin}-image-link-container`
                },
                styles: {
                    backgroundImage: `url(${thumbnail[0].url})`,
                    backgroundSize: 'auto',
                    backgroundRepeat: 'no-repeat'
                }
            },
            // img({
            //     attributes: {
            //         class: `${origin}-item-thumbnail-image`,
            //         src: thumbnail[0].url,
            //         alt: name
            //     }
            // }),
            span({
                attributes: {
                    class: `${origin}-item-title`,
                    'data-testid': 'organic-item-title'
                },
                text: name
            })
        ),
        div({
            attributes: {
                class: `${origin}-text-content-container`
            }
        }, p({
            attributes: {
                class: `${origin}-item-branding-name`,
                'data-testid': 'organic-item-branding-name'
            },
            text: `by ${branding}`
        }))
    )
}