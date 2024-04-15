import { Header } from './Header';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
  render: () => <Header></Header>,
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Base: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
