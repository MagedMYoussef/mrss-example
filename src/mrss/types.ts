export interface MediaContent {
  url: string;
  width?: string;
  height?: string;
}

export interface FeedItem {
  title: string;
  description: string;
  date: string;
  media: MediaContent | null;
  link?: string;
}