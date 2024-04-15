import { render } from '@testing-library/react';
import React from 'react';

import { FeaturesCard } from '@/components/molecules/FeaturesCard';

const testSetting = {
  siteImage: 'site-image',
} as const;

describe('FeaturesCard', () => {
  it('renders with correct props', () => {
    const testProps = {
      imageSrc: '/path/to/image.jpg',
      featureTitle: 'Feature Title',
      featureText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    const { getByAltText, getByText } = render(
      <FeaturesCard
        imageSrc={testProps.imageSrc}
        featureTitle={testProps.featureTitle}
        featureText={testProps.featureText}
      />
    );

    expect(getByAltText(testSetting.siteImage)).toBeInTheDocument();

    expect(getByText(testProps.featureTitle)).toBeInTheDocument();
    expect(getByText(testProps.featureText)).toBeInTheDocument();
  });
});
