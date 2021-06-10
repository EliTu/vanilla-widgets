import './main.scss';
import {
  HttpResult,
  PublisherContentMetadata
} from './interfaces';
import {
  a,
  div,
  img,
  p,
  span,
  article
} from './elements/commonElements';

const app = document.querySelector < HTMLDivElement > ('#app');
const widgetContent = document.querySelector < HTMLElement > ('#widget-content-container');
const API_URL = 'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html';

function generatePublisherContentItem(publisherData: PublisherContentMetadata) {
  console.log(publisherData); // TODO: Destructure the parameter
  const contentItemNodeTree = article({
      attributes: {
        class: 'item-container',
        'data-testid': 'item-article'
      },
      styles: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    img({
      attributes: {
        width: '200',
        height: '200',
        src: publisherData.thumbnail[0].url,
        alt: publisherData.name
      }
    }),
    div({
        attributes: {
          class: 'text-content-container'
        }
      }, p({
        styles: {
          fontSize: '13px',
          color: 'marine'
        },
        text: publisherData.name
      }),
      p({
        styles: {
          fontSize: '8px'
        },
        text: publisherData.branding
      }))
  )

  // article.appendChild(img)
  return contentItemNodeTree;
}

if (app) {
  (async function () {
    const res: Promise < HttpResult > = (await fetch(API_URL)).json();
    const data = await res;
    const dataList = data.list;

    if (widgetContent) {
      for (const data of dataList) {
        const publisherContentItem = generatePublisherContentItem(data);
        widgetContent.append(publisherContentItem);
      }
    }

  })()
}