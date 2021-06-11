export enum OriginOptions {
    SPONSORED = 'sponsored',
    ORGANIC = 'organic'
}
type TypeOptions = 'video';

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

export interface HttpResult {
    id: string;
    list: PublisherContentMetadata[];
}
export interface PropOptions {
    attributes ? : Record < string, string | boolean > ;
    styles?: Partial < CSSStyleDeclaration > ;

    /**
     * @memberof PropOptions
     * @member text - a string text to pass to a node
     */
    text?: string;

    afterEndText?: string;
}