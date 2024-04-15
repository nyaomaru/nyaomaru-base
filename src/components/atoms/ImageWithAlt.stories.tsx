import { ImageWithAlt } from './ImageWithAlt';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ImageWithAlt> = {
  component: ImageWithAlt,
  tags: ['autodocs'],
  render: ({ ...args }) => <ImageWithAlt {...args}></ImageWithAlt>,
};
export default meta;

type Story = StoryObj<typeof ImageWithAlt>;

export const Base: Story = {
  args: {
    src: 'https://placehold.jp/150x150.png',
    alt: 'Test',
    width: 150,
    height: 150,
  },
};

export const Width: Story = {
  args: {
    src: 'https://placehold.jp/150x150.png',
    alt: 'Test',
    width: 200,
    height: 150,
    className: '',
  },
};

export const Height: Story = {
  args: {
    src: 'https://placehold.jp/150x150.png',
    alt: 'Test',
    width: 150,
    height: 200,
    className: '',
  },
};
