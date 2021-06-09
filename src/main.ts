import './style.scss';
import { HttpResult } from './interfaces';

const app = document.querySelector<HTMLDivElement>('#app')
const API_URL = 'http://api.taboola.com/1.0/json/taboola-templates/recommendations.get?app.type=desktop&app.apikey=f9040ab1b9c802857aa783c469d0e0ff7e7366e4&count=4&source.type=video&source.id=214321562187&source.url=http://www.site.com/videos/214321562187.html';

if(app) {
  (async function(){
    const res: Promise<HttpResult> = (await fetch(API_URL)).json();
    const data = await res;
    console.log(data);
    
    
  })()
  app.innerHTML = `
    <h1>Hello Vite!!!!</h1>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `
}
