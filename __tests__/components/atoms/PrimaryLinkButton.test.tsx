import { render } from '@testing-library/react';
import React from 'react';

import { PrimaryLinkButton } from '@/components/atoms/PrimaryLinkButton';

const testSetting = {
  span: 'SPAN',
  a: 'A',
  href: 'href',
  buttonName: 'Test',
  buttonLink: '/test',
} as const;

describe('PrimaryLinkButton', () => {
  it('renders button name and link correctly', () => {
    const { getByText } = render(
      <PrimaryLinkButton buttonName={testSetting.buttonName} buttonLink={testSetting.buttonLink} />
    );
    const buttonElement = getByText(testSetting.buttonName);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe(testSetting.span);
    expect(buttonElement.parentElement?.tagName).toBe(testSetting.a);
    expect(buttonElement.parentElement?.getAttribute(testSetting.href)).toBe(
      testSetting.buttonLink
    );
  });
});
