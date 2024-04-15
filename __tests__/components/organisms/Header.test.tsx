import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { Header } from '@/components/organisms/Header';

const testSetting = {
  alt: 'vercel',
  src: 'src',
  imageSrc: '/images/demo-logo.png',
  link: 'link',
  href: 'href',
  reviewLinkUrl: '/#review-link',
  pointsUrl: '/#points',
} as const;

describe('Header', () => {
  test('renders logo correctly', () => {
    const { getByAltText } = render(<Header />);
    const logo = getByAltText(testSetting.alt);
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute(testSetting.src, testSetting.imageSrc);
  });

  test('renders header links correctly', () => {
    const { getByRole } = render(<Header />);
    const customerLink = getByRole(testSetting.link, { name: /customer/i });
    expect(customerLink).toHaveAttribute(testSetting.href, testSetting.reviewLinkUrl);
    const featuresLink = getByRole(testSetting.link, { name: /features/i });
    expect(featuresLink).toHaveAttribute(testSetting.href, testSetting.pointsUrl);
  });

  test('toggles mobile menu correctly', () => {
    const { getByRole } = render(<Header />);
    const hamburgerButton = getByRole('button', { name: /hamburger button/i });
    expect(screen.queryByRole('navigation', { name: /drawer menu/i })).not.toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    expect(getByRole('navigation', { name: /drawer menu/i })).toBeInTheDocument();
    fireEvent.click(hamburgerButton);
    expect(screen.queryByRole('navigation', { name: /drawer menu/i })).not.toBeInTheDocument();
  });
});
