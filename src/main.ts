import './main.scss';
import './elements/element-styles.scss';
import {
  HttpResult,
  OriginOptions,
  UrlParams
} from './interfaces';
import buildUrl from './utils/buildUrl';
import {
  generateRecommendationItemByOrigin,
  generateWidgetSectionByOrigin
} from './elements/widgetContentElements';

const app = document.querySelector < HTMLDivElement > ('#app');
const urlParams: UrlParams = {
  apiKey: 'f9040ab1b9c802857aa783c469d0e0ff7e7366e4',
  appType: 'desktop',
  publisherId: 'taboola-templates',
  sourceId: '214321562187'
}

if (app) {
  // init after the DOM content has loaded
  document.addEventListener('DOMContentLoaded', async () => {
    const url = buildUrl(urlParams);
    try {
      const res: Promise < HttpResult > = (await fetch(url)).json();
      let {
        list
      } = await res;
      list = list.map(n => ({...n, origin: OriginOptions.ORGANIC}));
      
      for (const data of list) {
        // first check if a section with the designated origin value already exists, if so use it
        let widgetOriginSection = document.querySelector < HTMLElement > (`[data-origin=${data.origin}]`);

        // if not, create a new section element for the new origin and use it
        if (!widgetOriginSection) {
          widgetOriginSection = generateWidgetSectionByOrigin(data.origin);

          app.append(widgetOriginSection);
        }

        // get the widget content container of the widget's section element
        const contentContainer = widgetOriginSection.querySelector < HTMLElement > ('.widget-content-container') !;

        // generate the content item node with the publisher's data and append it to the content container
        const publisherContentItem = generateRecommendationItemByOrigin(data);
        
        if(publisherContentItem) contentContainer.append(publisherContentItem);
      }
    } catch (error) {
      console.error(error);
    }
  });
}