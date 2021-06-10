import './main.scss';
import {
  HttpResult,
  PublisherContentMetadata
} from './interfaces';
import generateElement from './elements/generateElement';

const app = document.querySelector < HTMLDivElement > ('#app');
const widgetContent = document.querySelector < HTMLElement > ('#widget-content');
const API_URL = 'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html';

function generatePublisherContentItem(publisherData: PublisherContentMetadata) {
  // console.log(publisherData);
  const article = document.createElement('article');
  const img = document.createElement('img');
  img['src'] = publisherData.thumbnail[0].url;
  img['alt'] = publisherData.description;
  img['width'] = 200;
  img['height'] = 200;

  // console.log(img);
  article.appendChild(img)
  return article;
}

if (app) {
  (async function () {
    const res: Promise<HttpResult> = (await fetch(API_URL)).json();
    const data = await res;
    const dataList = data.list;
    // console.log(data);
    // console.log(widgetContent);
    const s = generateElement('div', {attributes: {class: "test", 'data-testid': '123', something: 'aaa'}, styles: {display: 'flex', alignItems: 'center', width: '50%'}});

console.log(s);

    if (widgetContent) {
      for (const data of dataList) {
        const article = generatePublisherContentItem(data);
        widgetContent.append(article);
      }
    }

  })()
}