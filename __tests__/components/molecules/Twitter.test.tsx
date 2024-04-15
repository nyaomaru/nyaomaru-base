import { render } from '@testing-library/react';
import React from 'react';

import { TwitterList } from '@/components/molecules/TwitterList';

// Mock twitterList data
jest.mock('@/domain/top/twitter', () => ({
  twitterList: [
    {
      no: 1,
      url: 'twitter.com/example1',
      logo: '/path/to/logo1.png',
      userIcon: '/path/to/userIcon1.png',
      tweet: 'Tweet text 1',
      tweetImages: ['/path/to/image1-1.png', '/path/to/image1-2.png'],
    },
    {
      no: 2,
      url: 'twitter.com/example2',
      logo: '/path/to/logo2.png',
      userIcon: '/path/to/userIcon2.png',
      tweet: 'Tweet text 2',
      tweetImages: ['/path/to/image2-1.png', '/path/to/image2-2.png'],
    },
  ],
}));

jest.mock('swiper/react', () => ({
  Swiper: jest.fn(({ children }) => <div>{children}</div>),
  SwiperSlide: jest.fn(({ children }) => <div>{children}</div>),
}));

const testSetting = {
  alt: 'user icon',
  text1: 'Tweet text 1',
  text2: 'Tweet text 2',
  tweetCard: 'tweet-card',
} as const;

describe('TwitterList', () => {
  test('renders correct number of slides', () => {
    const { getAllByTestId } = render(<TwitterList />);
    const slides = getAllByTestId(testSetting.tweetCard);
    expect(slides.length).toBe(2);
  });

  test('renders tweets correctly', () => {
    const { getByText, getAllByAltText } = render(<TwitterList />);
    expect(getByText(testSetting.text1)).toBeInTheDocument();
    expect(getByText(testSetting.text2)).toBeInTheDocument();
    expect(getAllByAltText(/^twitter image\d+$/i)).toHaveLength(4);
  });
});
