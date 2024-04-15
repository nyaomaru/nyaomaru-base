import { PrivacyPolicy } from './PrivacyPolicy';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrivacyPolicy> = {
  component: PrivacyPolicy,
  tags: ['autodocs'],
  render: () => <PrivacyPolicy></PrivacyPolicy>,
};
export default meta;

type Story = StoryObj<typeof PrivacyPolicy>;

export const Base: Story = {};
