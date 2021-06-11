/**
 * an enum that contains all the possible content origin options. Can be expanded in the future
 * to contain more types of origin values.
 */
export enum OriginOptions {
    SPONSORED = 'sponsored',
    ORGANIC = 'organic'
}

/**
 * an enum that contain all the possible publisher content types.
 */
enum TypeOptions {
    VIDEO = 'video'
}

interface ThumbnailObject {
    url: string;
}

export interface PublisherContentMetadata {
    branding: string;
    type: TypeOptions;
    name: string;
    created: Date;
    description: string;
    duration: string;
    id: string;
    origin: OriginOptions;
    views: string;
    rating: string;
    url: string;
    categories: string[];
    thumbnail: ThumbnailObject[]
}

export interface UrlParams {
    publisherId: string;
    appType: string;
    apiKey: string;
    sourceId: string;
}
export interface HttpResult {
    id: string;
    list: PublisherContentMetadata[];
}

export type ChildrenType = HTMLElement[];
export interface PropOptions {
    attributes ? : Record < string, string | boolean > ;
    styles ? : Partial < CSSStyleDeclaration > ;
    text ? : string;
    afterEndText ? : string;
}