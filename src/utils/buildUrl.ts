import {
    UrlParams
} from "../interfaces";

/**
 * a util function that generates a URL string with the correct URL params build in.
 * @param param an object with the possible URL param options. 
 * @returns string
 */
export default function buildUrl({
    apiKey,
    appType,
    publisherId,
    sourceId
}: UrlParams) {
    return `http://api.taboola.com/1.0/json/${publisherId}/recommendations.get?app.type=${appType}&app.apikey=${apiKey}&count=4&source.type=video&source.id=${sourceId}&source.url=http://www.site.com/videos/214321562187.html`;
}