import { render } from '@testing-library/react';
import React from 'react';

import { ReviewCard } from '@/components/molecules/ReviewCard';

const testSetting = {
  siteImageMain: 'site-image-main',
  siteImageSub: 'site-image-sub',
  siteImageClient: 'site-image-client',
} as const;

describe('ReviewCard', () => {
  it('renders with correct props', () => {
    const testProps = {
      title: 'Title',
      message: 'Message',
      main: '/path/to/main-image.jpg',
      sub: '/path/to/sub-image.jpg',
      clientImage: '/path/to/client-image.jpg',
      tag: 'Tag',
    };

    const { getByAltText, getByText } = render(
      <ReviewCard
        title={testProps.title}
        message={testProps.message}
        main={testProps.main}
        sub={testProps.sub}
        clientImage={testProps.clientImage}
        tag={testProps.tag}
      />
    );

    expect(getByAltText(testSetting.siteImageMain)).toBeInTheDocument();
    expect(getByAltText(testSetting.siteImageSub)).toBeInTheDocument();

    expect(getByAltText(testSetting.siteImageClient)).toBeInTheDocument();

    expect(getByText(testProps.title)).toBeInTheDocument();
    expect(getByText(testProps.message)).toBeInTheDocument();

    expect(getByText(testProps.tag)).toBeInTheDocument();
  });
});
