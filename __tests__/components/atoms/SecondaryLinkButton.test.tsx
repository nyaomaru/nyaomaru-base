import { render } from '@testing-library/react';
import React from 'react';

import { SecondaryLinkButton } from '@/components/atoms/SecondaryLinkButton';

const testSetting = {
  span: 'SPAN',
  a: 'A',
  href: 'href',
  buttonName: 'Test',
  buttonLink: '/test',
} as const;

describe('SecondaryLinkButton', () => {
  it('renders button name and link correctly', () => {
    const { getByText } = render(
      <SecondaryLinkButton
        buttonName={testSetting.buttonName}
        buttonLink={testSetting.buttonLink}
      />
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
