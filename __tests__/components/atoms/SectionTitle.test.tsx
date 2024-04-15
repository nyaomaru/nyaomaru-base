import { render } from '@testing-library/react';
import React from 'react';

import { SectionTitle } from '@/components/atoms/SectionTitle';

const testSetting = {
  title: 'タイトル',
  englishTitle: 'Title',
  className:
    'relative before:absolute before:top-[5px] before:inline-block before:size-full before:content-heading-stroke',
  h2: 'H2',
  dataJp: 'data-jp',
  span: 'SPAN',
} as const;

describe('SectionTitle', () => {
  it('renders title and englishTitle correctly', () => {
    const { getByText } = render(
      <SectionTitle title={testSetting.title} englishTitle={testSetting.englishTitle} />
    );

    const englishTitleElement = getByText(testSetting.englishTitle);
    const titleElement = englishTitleElement.parentElement;

    expect(titleElement).toBeInTheDocument();
    expect(titleElement?.tagName).toBe(testSetting.h2);
    expect(titleElement).toHaveAttribute(testSetting.dataJp, testSetting.title);

    expect(englishTitleElement).toBeInTheDocument();
    expect(englishTitleElement.tagName).toBe(testSetting.span);
    expect(englishTitleElement).toHaveClass(testSetting.className);
  });
});
