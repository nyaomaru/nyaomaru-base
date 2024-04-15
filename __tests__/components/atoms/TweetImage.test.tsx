import { render } from '@testing-library/react';
import React from 'react';

import { TweetImage } from '@/components/atoms/TweetImage'; // Adjust the path as necessary

const testSetting = {
  url: 'https://example.com',
  src: 'https://example.com/image.jpg',
  alt: 'Test Image',
} as const;

// Mock the Image component
jest.mock('next/legacy/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}));

describe('TweetImage', () => {
  it('renders image with correct props', () => {
    render(<TweetImage url={testSetting.url} src={testSetting.src} alt={testSetting.alt} />);

    expect(document.querySelector('img')).toBeInTheDocument();
    expect(document.querySelector('img')).toHaveAttribute('src', testSetting.src);
    expect(document.querySelector('img')).toHaveAttribute('alt', testSetting.alt);
  });
});
