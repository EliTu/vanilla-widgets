type OriginOptions = 'sponsored' | 'organic';
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
    url: URL;
    categories: string[];
    thumbnail: ThumbnailObject[]
}

export interface HttpResult {
    id: string;
    list: PublisherContentMetadata[];
}
export interface PropOptions {
    attributes ? : Record < string, string | boolean > ;
    styles ? : Partial < CSSStyleDeclaration > ;
    text ? : string;
}