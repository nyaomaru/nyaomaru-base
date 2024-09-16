import { render, fireEvent, waitFor, within } from '@testing-library/react';
import React from 'react';

import { Header } from '@/components/organisms/Header';

const testSetting = {
  alt: 'vercel',
  src: 'src',
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
  });

  test('renders header links correctly', () => {
    const { getByRole } = render(<Header />);
    const pcHeader = getByRole('navigation', { name: /pc-header/i });

    const customerLink = within(pcHeader).getByRole(testSetting.link, { name: /customer/i });
    expect(customerLink).toHaveAttribute(testSetting.href, testSetting.reviewLinkUrl);

    const featuresLink = within(pcHeader).getByRole(testSetting.link, { name: /features/i });
    expect(featuresLink).toHaveAttribute(testSetting.href, testSetting.pointsUrl);
  });

  test('toggles mobile menu correctly', async () => {
    const { getByRole } = render(<Header />);

    const hamburgerButton = getByRole('button', { name: /hamburger button/i });
    fireEvent.click(hamburgerButton);

    await waitFor(() => {
      expect(getByRole('navigation', { name: /drawer-menu/i })).toHaveClass('opacity-100');
    });

    fireEvent.click(hamburgerButton);

    await waitFor(() => {
      expect(getByRole('navigation', { name: /drawer-menu/i })).toHaveClass('opacity-0');
    });
  });
});
