import { render } from '@testing-library/react';
import React from 'react';

import { ImageWithAlt } from '@/components/atoms/ImageWithAlt';

const testSetting = {
  src: 'https://example.com/image.jpg',
  alt: 'Test Image',
  width: 200,
  height: 100,
  className: 'custom-class',
  imageClassName: 'image-with-alt',
  imageSrc: '/_next/image?url=https%3A%2F%2Fexample.com%2Fimage.jpg&w=3840&q=75',
} as const;

describe('ImageWithAlt', () => {
  it('renders correctly with src and alt', () => {
    const { getByAltText } = render(<ImageWithAlt src={testSetting.src} alt={testSetting.alt} />);
    const imageElement = getByAltText(testSetting.alt);
    expect(imageElement).toBeTruthy();
    expect(imageElement).toHaveAttribute('src', testSetting.imageSrc);
  });

  it('renders correctly with width and height', () => {
    const { getByAltText } = render(
      <ImageWithAlt
        src={testSetting.src}
        alt={testSetting.alt}
        width={testSetting.width}
        height={testSetting.height}
      />
    );
    const imageElement = getByAltText(testSetting.alt);
    expect(imageElement).toBeTruthy();
  });

  it('renders correctly with className', () => {
    const { getByAltText } = render(
      <ImageWithAlt src={testSetting.src} alt={testSetting.alt} className={testSetting.className} />
    );
    const imageElement = getByAltText(testSetting.alt);
    expect(imageElement).toBeTruthy();
    expect(imageElement.parentElement).toHaveClass(testSetting.className);
    expect(imageElement).toHaveClass(testSetting.imageClassName);
  });
});
