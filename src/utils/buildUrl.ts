import { UrlParams } from "../interfaces";

export default function buildUrl({apiKey, appType, publisherId, sourceId}: UrlParams) {
    return `http://api.taboola.com/1.0/json/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=4&source.type=video&source.id=${sourceId}&source.url=http://www.site.com/videos/214321562187.html`;
}