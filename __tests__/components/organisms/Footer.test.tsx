import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from '@/components/organisms/Footer';

const testSetting = {
  alt: 'nyaomaru_base',
  src: 'src',
  link: 'link',
  href: 'href',
  url: '/privacy-policy',
} as const;

jest.mock('@/components/layout/Container', () => {
  return jest.fn(({ children }) => <div>{children}</div>);
});

describe('Footer', () => {
  test('renders logo correctly', () => {
    const { getByAltText } = render(<Footer />);
    const logo = getByAltText(testSetting.alt);
    expect(logo).toBeInTheDocument();
  });

  test('renders footer links correctly', () => {
    const { getByRole } = render(<Footer />);
    const homeLink = getByRole(testSetting.link, { name: /home/i });
    expect(homeLink).toHaveAttribute(testSetting.href, '/');
    const privacyLink = getByRole(testSetting.link, { name: /privacy policy/i });
    expect(privacyLink).toHaveAttribute(testSetting.href, testSetting.url);
  });

  test('renders copyright text correctly', () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(/© 2024 Nyaomaru/i);
    expect(copyrightText).toBeInTheDocument();
  });
});
