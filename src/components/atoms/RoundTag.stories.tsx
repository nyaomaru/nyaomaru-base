import { RoundTag } from './RoundTag';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RoundTag> = {
  component: RoundTag,
  tags: ['autodocs'],
  render: ({ ...args }) => <RoundTag {...args}></RoundTag>,
};
export default meta;

type Story = StoryObj<typeof RoundTag>;

export const Base: Story = {
  args: {
    tagName: 'Test',
  },
};
