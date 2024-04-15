import { render } from '@testing-library/react';
import React from 'react';

import { FeaturesArea, FeaturesAreaProps } from '@/components/molecules/FeaturesArea';

const props: FeaturesAreaProps = {
  sectionType: 'right',
  imageSrc: '/path/to/image.jpg',
  sectionTitle: 'Section Title',
  sectionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

const testSetting = {
  altText: 'section image',
  src: 'src',
  h3: 'H3',
  p: 'P',
  left: 'left',
  mdOrder1: 'md:order-1',
  mdOrder2: 'md:order-2',
  imageContainerClassName: '.image-container',
  imageSrc: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
} as const;

describe('FeaturesArea', () => {
  it('renders correctly with provided props', () => {
    const { getByAltText, getByText } = render(
      <FeaturesArea
        sectionType={props.sectionType}
        imageSrc={props.imageSrc}
        sectionTitle={props.sectionTitle}
        sectionText={props.sectionText}
      />
    );

    const image = getByAltText(testSetting.altText);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(testSetting.src, testSetting.imageSrc);

    const sectionTitle = getByText(props.sectionTitle);
    expect(sectionTitle).toBeInTheDocument();
    expect(sectionTitle.parentElement?.tagName).toBe(testSetting.h3);

    const sectionText = getByText(props.sectionText);
    expect(sectionText).toBeInTheDocument();
    expect(sectionText.tagName).toBe(testSetting.p);

    const imageArea = document.querySelector(testSetting.imageContainerClassName)?.parentElement;
    expect(imageArea).toHaveClass(
      props.sectionType === testSetting.left ? testSetting.mdOrder1 : testSetting.mdOrder2
    );

    const sectionArea = sectionText.parentElement;
    expect(sectionArea).toHaveClass(
      props.sectionType === testSetting.left ? '' : testSetting.mdOrder2
    );
  });
});
