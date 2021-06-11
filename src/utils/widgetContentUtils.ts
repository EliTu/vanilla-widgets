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
} from '../elements/elements';

/**
 * Generates a section node that contains the widget's header and the content container.
 * @param origin The publisher content origin type.
 * @returns HTMLElement.
 */
export function generateWidgetSection(origin: PublisherContentMetadata['origin']) {
    return section({
            attributes: {
                class: 'widget-section-container',
                'data-origin': origin,
                'data-testid': 'widget-section'
            }
        },
        generateWidgetHeader(origin),
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
export function generateWidgetHeader(origin: OriginOptions) {
    const isSponsored = origin === OriginOptions.SPONSORED;
    return header({
            attributes: {
                class: 'widget-header',
                'data-testid': 'widget-header-container'
            }
        },
        h2({
            text: isSponsored ? 'Ad content' : 'More content for you'
        }),
        p({
                text: isSponsored ? 'by ' : ''
            },
            span({
                text: isSponsored ? 'Taboola' : ''
            })))
}

/**
 * Generates an interactive widget item with the relevant publisher data as the content.
 * @param param The publisher data object. @see PublisherContentMetadata
 * @returns HTMLElement.
 */
export function generatePublisherContentItem({
    url,
    name,
    thumbnail,
    branding
}: PublisherContentMetadata) {
    return article({
            attributes: {
                class: 'item-container',
                'data-testid': 'item-article'
            },
        },
        a({
            attributes: {
                href: url,
                target: '_blank',
                rel: 'noopener noreferrer',
                class: 'image-link-container'
            }
        }, img({
            attributes: {
                class: 'item-thumbnail-image',
                src: thumbnail[0].url,
                alt: name
            }
        })),
        div({
                attributes: {
                    class: 'text-content-container'
                }
            },
            p({
                text: name
            }),
            p({
                text: `by ${branding}`
            })
        )
    )
}