import { TweetImage } from './TweetImage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TweetImage> = {
  component: TweetImage,
  tags: ['autodocs'],
  render: ({ ...args }) => <TweetImage {...args}></TweetImage>,
};
export default meta;

type Story = StoryObj<typeof TweetImage>;

export const Base: Story = {
  args: {
    url: 'Test',
    src: 'https://placehold.jp/150x150.png',
    alt: 'Test',
  },
};
