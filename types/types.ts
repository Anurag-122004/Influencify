export interface ChannelDetails {
    title: string;
    thumbnail: string;
    subscribers: string;
}

export interface VideoDetails {
    title: string;
    views: string;
    likes: string;
    comment: string;
    thumbnail: string;
    channel: ChannelDetails;
    publishedAt: string;
}