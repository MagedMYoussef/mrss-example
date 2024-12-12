import { FeedItem as FeedItemType } from '../types';

interface FeedItemProps {
  item: FeedItemType;
}

export const FeedItem = ({ item }: FeedItemProps) => {
  return (
    <div className="feed-item">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      {item.media && (
        <video
          controls
          width="100%"
          poster={item.media.url}
          className="feed-video"
        >
          <source src={item.media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read More
        </a>
      )}
    </div>
  );
};