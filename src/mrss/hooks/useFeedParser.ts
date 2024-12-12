import { useState, useEffect } from 'react';
import { FeedItem } from '../types';
import { parseXml } from '../utils/xmlParser';
import { formatDate } from '../utils/dateFormatter';

export const useFeedParser = (xmlContent: string) => {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const parseFeed = async () => {
      try {
        const result = await parseXml(xmlContent);
        const items = result.rss.channel.item || [];
        
        const parsedItems = items.map((item: any) => {
          const mediaContent = item['media:content'];
          
          return {
            title: item.title || 'No Title',
            description: item.description || 'No Description',
            date: item.pubDate ? formatDate(item.pubDate) : 'No Date',
            media: mediaContent
              ? {
                  url: mediaContent.url,
                  width: mediaContent.width,
                  height: mediaContent.height,
                }
              : null,
            link: item.link,
          };
        });

        setFeedItems(parsedItems);
      } catch (err) {
        console.error('Feed parsing error:', err);
        setError('Error parsing feed');
      } finally {
        setLoading(false);
      }
    };

    parseFeed();
  }, [xmlContent]);

  return { feedItems, loading, error };
};