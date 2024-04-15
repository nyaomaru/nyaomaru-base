import { CommentArea } from './CommentArea';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommentArea> = {
  component: CommentArea,
  tags: ['autodocs'],
  render: ({ comment }) => <CommentArea comment={comment}></CommentArea>,
};
export default meta;

type Story = StoryObj<typeof CommentArea>;

export const Base: Story = {
  args: {
    comment: 'Test',
  },
};
