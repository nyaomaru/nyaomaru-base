import { ReviewModal } from './ReviewModal';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ReviewModal> = {
  component: ReviewModal,
  tags: ['autodocs'],
  render: ({ ...args }) => <ReviewModal {...args}></ReviewModal>,
};
export default meta;

type Story = StoryObj<typeof ReviewModal>;

export const Base: Story = {
  args: {
    title: 'Test',
    message: 'Test',
    main: 'https://placehold.jp/150x150.png',
    sub: 'https://placehold.jp/100x100.png',
    clientImage: 'https://placehold.jp/40x40.png',
    tag: 'Test',
    modalImageLogo: 'https://placehold.jp/80x80.png',
    modalImageLogoText: 'Test',
    modalImageSecond: 'https://placehold.jp/40x40.png',
    modalImageSecondText: 'Test',
  },
};
