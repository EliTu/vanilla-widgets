import './main.scss';
import './elements/elements.scss';
import {
  HttpResult,
  UrlParams
} from './interfaces';
import buildUrl from './utils/buildUrl';
import {
  generatePublisherContentItem,
  generateWidgetSection
} from './utils/widgetContentUtils';

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

    try {
      const res: Promise < HttpResult > = (await fetch(url)).json();
      const {
        list: dataList
      } = await res;

      for (const data of dataList) {
        let widgetOriginSection = document.querySelector < HTMLElement > (`[data-origin=${data.origin}]`);

        if (!widgetOriginSection) {
          widgetOriginSection = generateWidgetSection(data.origin);

          app.append(widgetOriginSection);
        }

        const contentContainer = widgetOriginSection.querySelector < HTMLElement > ('.widget-content-container') !;
        const publisherContentItem = generatePublisherContentItem(data);

        contentContainer.append(publisherContentItem);
      }
    } catch (error) {
      console.error(error);
    }
  });
}