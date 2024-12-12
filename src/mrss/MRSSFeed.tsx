import { FeedItem as FeedItemComponent } from './components/FeedItem';
import { useFeedParser } from './hooks/useFeedParser';
import { xmlText } from './data/feedData';

export const MRSSFeed = () => {
  const { feedItems, loading, error } = useFeedParser(xmlText);

  if (loading) return <div>Loading feed...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="mrss-feed">
      <h1>Media RSS Feed</h1>
      <div className="feed-items">
        {feedItems.map((item, index) => (
          <FeedItemComponent key={index} item={item} />
        ))}
      </div>
    </div>
  );
};