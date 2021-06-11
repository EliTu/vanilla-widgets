import './main.scss';
import {
  HttpResult,
  OriginOptions,
  PublisherContentMetadata
} from './interfaces';
import {
  a,
  div,
  img,
  p,
  span,
  article,
  section,
  header,
  h2
} from './elements/commonElements';
import './elements/elements.scss';

const app = document.querySelector < HTMLDivElement > ('#app');
const API_URL = 'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html';

function generatePublisherContentItem(publisherData: PublisherContentMetadata) {
  // console.log(publisherData); // TODO: Destructure the parameter
  const contentItemNodeTree = article({
      attributes: {
        class: 'item-container',
        'data-testid': 'item-article'
      },
    },
    a({
      attributes: {
        href: publisherData.url,
        target: '_blank',
        rel: 'noopener noreferrer',
        class: 'image-link-container'
      }
    }, img({
      attributes: {
        class: 'item-thumbnail-image',
        src: publisherData.thumbnail[0].url,
        alt: publisherData.name
      }
    })),
    div({
        attributes: {
          class: 'text-content-container'
        }
      },
      p({
        text: publisherData.name
      }),
      p({
        text: `by ${publisherData.branding}`
      })
    )
  )

  return contentItemNodeTree;
}

function generateContentHeader(origin: OriginOptions) {
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

if (app) {
  document.addEventListener('DOMContentLoaded', async () => {
    const res: Promise < HttpResult > = (await fetch(API_URL)).json();
    const {
      list: dataList
    } = await res;

    for (const data of dataList) {
      let sectionContainer = document.querySelector(`[data-origin=${data.origin}]`);

      if (!sectionContainer) {
        sectionContainer = section({
            attributes: {
              class: 'widget-section-container',
              'data-origin': data.origin,
              'data-testid': 'widget-section'
            }
          }, 
          generateContentHeader(data.origin),
          div({
            attributes: {
              class: 'widget-content-container',
              'data-testid': 'widget-content-container'
            }
          })
        );

        app.append(sectionContainer);
      }

      const contentContainer = sectionContainer.querySelector('.widget-content-container') !;
      const publisherContentItem = generatePublisherContentItem(data);

      contentContainer.append(publisherContentItem);
    }
  });
}