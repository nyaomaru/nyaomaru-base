import { TopPage } from './TopPage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TopPage> = {
  component: TopPage,
  tags: ['autodocs'],
  render: () => <TopPage></TopPage>,
};
export default meta;

type Story = StoryObj<typeof TopPage>;

export const Base: Story = {};
