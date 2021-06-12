import { UrlParams } from '../interfaces';
import buildUrl from './buildUrl'
describe('Testing buildURL function', () => {
    it('should build the correct URL given the URL params', () => {
        const urlParams: UrlParams = {
            apiKey: 'abc123',
            appType: 'type_test',
            publisherId: 'qwerty',
            sourceId: '123456'
        };
        const buildUrlResult = buildUrl(urlParams);

        const expected = `http://api.taboola.com/1.0/json/${urlParams.publisherId}/recommendations.get?app.type=${urlParams.appType}&app.apikey=${urlParams.apiKey}&count=4&source.type=video&source.id=${urlParams.sourceId}&source.url=http://www.site.com/videos/214321562187.html`;

        expect(buildUrlResult).toEqual(expected);
    });
});