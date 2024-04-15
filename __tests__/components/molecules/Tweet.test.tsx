import { render, screen } from '@testing-library/react';
import React from 'react';

import { Tweet } from '@/components/molecules/Tweet';

const testSetting = {
  tweet: 'This is a tweet',
  url: 'https://example.com',
} as const;

const tweet = () => {
  return (
    <Tweet
      tweet={testSetting.tweet}
      url={testSetting.url}
      tweetImages={['image1.jpg', 'image2.jpg', 'image3.jpg']}
    />
  );
};

describe('Tweet', () => {
  test('renders tweet text', () => {
    render(tweet());
    const tweetTextElement = screen.getByText(testSetting.tweet);
    expect(tweetTextElement).toBeInTheDocument();
  });

  test('renders tweet images', () => {
    render(tweet());
    const imageElements = screen.getAllByAltText(/twitter image\d+/i);
    expect(imageElements).toHaveLength(3);
  });
});
