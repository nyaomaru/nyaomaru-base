import { render } from '@testing-library/react';
import React from 'react';

import { PrimaryScrollButton } from '@/components/atoms/PrimaryScrollButton';

const testSetting = {
  span: 'SPAN',
  a: 'A',
  href: 'href',
  smooth: 'smooth',
  to: 'to',
  true: 'true',
  buttonName: 'Test',
  scrollTo: 'top',
} as const;

describe('PrimaryScrollButton', () => {
  it('renders button name and scroll-to correctly', () => {
    const { getByText } = render(
      <PrimaryScrollButton buttonName={testSetting.buttonName} scrollTo={testSetting.scrollTo} />
    );
    const buttonElement = getByText(testSetting.buttonName);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe(testSetting.span);
    expect(buttonElement.parentElement?.tagName).toBe(testSetting.a);
  });
});
