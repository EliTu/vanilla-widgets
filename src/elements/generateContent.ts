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
    h2
} from './commonElements';

export function generateContentHeader(origin: OriginOptions) {
    return header({
            attributes: {
                class: 'widget-header',
                'data-testid': 'widget-header-container'
            }
        },
        h2({
            text: origin === OriginOptions.SPONSORED ? 'Ad content' : 'More content for you'
        }),
        p({
                text: 'by '
            },
            span({
                text: 'Taboola'
            })))
}

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