import { render } from '@testing-library/react';
import React from 'react';

import { CommentArea } from '@/components/atoms/CommentArea';

const testSetting = {
  comment: 'This is a test comment',
  expectedClassNames:
    'client-text review-card-shadow rounded-md bg-white px-4 py-2 font-semibold text-primary-medium',
} as const;

describe('CommentArea', () => {
  it('renders comment text correctly', () => {
    const { getByText } = render(<CommentArea comment={testSetting.comment} />);
    const commentElement = getByText(testSetting.comment);
    expect(commentElement).toBeTruthy();
  });

  it('renders with the correct class name', () => {
    const { container } = render(<CommentArea comment={testSetting.comment} />);

    const element = container.firstChild as HTMLElement;
    const classNames = element.getAttribute('class');

    expect(classNames).toBeDefined();
    testSetting.expectedClassNames.split(' ').forEach(className => {
      expect(classNames?.includes(className)).toBeTruthy();
    });
  });
});
