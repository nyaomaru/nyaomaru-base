import { render } from '@testing-library/react';
import React from 'react';

import { RoundTag } from '@/components/atoms/RoundTag';

const testSetting = {
  tagName: 'test',
  span: 'SPAN',
  className: 'rounded-full bg-accent-medium p-3 text-sm font-normal text-primary-light',
} as const;

describe('RoundTag', () => {
  it('renders tag name correctly', () => {
    const { getByText } = render(<RoundTag tagName={testSetting.tagName} />);
    const tagElement = getByText(testSetting.tagName);
    expect(tagElement).toBeInTheDocument();
    expect(tagElement.tagName).toBe(testSetting.span);
    expect(tagElement).toHaveClass(testSetting.className);
  });
});
