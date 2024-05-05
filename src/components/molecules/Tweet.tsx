import React from 'react';

import { TweetImage } from '@/components/atoms/TweetImage';

type TweetProps = {
  tweet: string;
  url: string;
  tweetImages: string[];
};

export const Tweet: React.FC<TweetProps> = ({ tweet, url, tweetImages }) => (
  <div className="tweet-inner">
    <p className="tweet-text mt-4 text-primary-light">{tweet}</p>
    <div className="tweet-images flex flex-wrap items-center rounded-md">
      {tweetImages.map((image: string, index: number) => (
        <TweetImage key={index} url={url} src={image} alt={`twitter image${index}`} />
      ))}
    </div>
  </div>
);
