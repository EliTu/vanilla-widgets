import './main.scss';
import './elements/elements.scss';
import {
  HttpResult,
  UrlParams
} from './interfaces';
import {
  div,
  section,
} from './elements/commonElements';
import buildUrl from './utils/buildUrl';
import {
  generateContentHeader,
  generatePublisherContentItem
} from './elements/generateContent';

const app = document.querySelector < HTMLDivElement > ('#app');
const urlParams: UrlParams = {
  apiKey: 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
  appType: 'desktop',
  publisherId: 'taboola-templates',
  sourceId: '214321562187'
}

if (app) {
  document.addEventListener('DOMContentLoaded', async () => {
    const url = buildUrl(urlParams);
    const res: Promise < HttpResult > = (await fetch(url)).json();
    const { list: dataList } = await res;

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