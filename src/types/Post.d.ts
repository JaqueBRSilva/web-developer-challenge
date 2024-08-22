import { Buttons_Props } from "./Button";

export interface PostCard_Props {
    id?: string;
    postImage: string;
    postText: string;
    postAuthor: string;
    publishButton?: Buttons_Props;
    discardButton?: Buttons_Props;
}

export interface CardPublished_Props {
    id?: string | number | any;
    cardPublishedImage: string;
    cardPublishedText: string;
    cardPublishedAuthor: string;
    deletePostButton?: () => {} | void | Buttons_Props;
}