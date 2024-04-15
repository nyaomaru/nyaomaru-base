import { ReviewCard } from './ReviewCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReviewCard> = {
  component: ReviewCard,
  tags: ['autodocs'],
  render: ({ ...args }) => <ReviewCard {...args}></ReviewCard>,
};
export default meta;

type Story = StoryObj<typeof ReviewCard>;

export const Base: Story = {
  decorators: [
    Story => (
      <div className="card relative mb-8 w-[380px] rounded-md md:w-[320px]">
        <Story />
      </div>
    ),
  ],
  args: {
    title: 'Test',
    message: 'Test',
    main: 'https://placehold.jp/100x60.png',
    sub: 'https://placehold.jp/120x70.png',
    clientImage: 'https://placehold.jp/116x116.png',
    tag: 'Test',
  },
};
