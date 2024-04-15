import { TwitterList } from './TwitterList';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TwitterList> = {
  component: TwitterList,
  tags: ['autodocs'],
  render: ({ ...args }) => <TwitterList {...args}></TwitterList>,
};
export default meta;

type Story = StoryObj<typeof TwitterList>;

export const Base: Story = {
  parameters: {
    backgrounds: { default: 'twitter' },
  },
};
