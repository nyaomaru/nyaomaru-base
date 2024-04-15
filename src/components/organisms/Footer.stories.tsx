import { Footer } from './Footer';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Footer> = {
  component: Footer,
  tags: ['autodocs'],
  render: () => <Footer></Footer>,
};
export default meta;

type Story = StoryObj<typeof Footer>;

export const Base: Story = {
  parameters: {
    backgrounds: { default: 'white' },
  },
};
