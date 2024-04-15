import { Tweet } from './Tweet';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Tweet> = {
  component: Tweet,
  tags: ['autodocs'],
  render: ({ ...args }) => <Tweet {...args}></Tweet>,
};
export default meta;

type Story = StoryObj<typeof Tweet>;

export const Base: Story = {
  decorators: [
    Story => (
      <div className="tweet-card w-full p-[22px] md:w-[320px]">
        <Story />
      </div>
    ),
  ],

  args: {
    tweet: 'Test',
    url: 'https://placehold.jp/150x150.png',
    tweetImages: [
      'https://placehold.jp/40x40.png',
      'https://placehold.jp/40x40.png',
      'https://placehold.jp/40x40.png',
      'https://placehold.jp/40x40.png',
    ],
  },
};
