import { render, fireEvent, waitFor, within } from '@testing-library/react';
import React from 'react';

import { Header } from '@/components/organisms/Header';

const testSetting = {
  alt: 'vercel',
  src: 'src',
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

    const customerLink = within(pcHeader).getByLabelText('Customer');
    expect(customerLink).toHaveRole('generic');

    const featuresLink = within(pcHeader).getByLabelText('Features');
    expect(featuresLink).toHaveRole('generic');
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
