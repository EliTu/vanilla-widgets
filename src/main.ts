import './main.scss';
import {
  HttpResult,
  PublisherContentMetadata
} from './interfaces';

const app = document.querySelector < HTMLDivElement > ('#app');
const widgetContent = document.querySelector < HTMLElement > ('#widget-content');
const API_URL = 'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html';

function generatePublisherContentItem(publisherData: PublisherContentMetadata) {
  console.log(publisherData);
  const article = document.createElement('article');

  if (widgetContent) {
    widgetContent.append(article);
  }
}

if (app) {
  (async function () {
    const res: Promise < HttpResult > = (await fetch(API_URL)).json();
    const data = await res;
    const dataList = data.list;
    console.log(data);
    console.log(widgetContent);

    if (widgetContent) {
      for (const data of dataList) {
        generatePublisherContentItem(data);
      }
    }

  })()
}