import { render } from '@testing-library/react';
import React from 'react';

import { PrivacyPolicy } from '@/components/organisms/common/PrivacyPolicy';

const testSetting = {
  textPrivacyPolicy: 'Privacy Policy',
  textTitle1: 'Contact Us',
  buttonText: 'Ask with FORM',
  href: 'href',
  url: 'https://forms.gle/3Fyi4rh595kqGvw37',
} as const;

describe('PrivacyPolicy component', () => {
  it('renders privacy policy items correctly', () => {
    const { getByText } = render(<PrivacyPolicy />);

    expect(getByText(testSetting.textPrivacyPolicy)).toBeInTheDocument();
    expect(getByText(testSetting.textTitle1)).toBeInTheDocument();
  });

  it('generates correct button links', () => {
    const { getByText } = render(<PrivacyPolicy />);

    const button = getByText(testSetting.buttonText);
    expect(button).toBeInTheDocument();
    expect(button.parentElement).toHaveAttribute(testSetting.href, testSetting.url);
  });
});
