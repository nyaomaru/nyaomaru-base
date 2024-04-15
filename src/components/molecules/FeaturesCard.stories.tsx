import { FeaturesCard } from './FeaturesCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FeaturesCard> = {
  component: FeaturesCard,
  tags: ['autodocs'],
  render: ({ ...args }) => <FeaturesCard {...args}></FeaturesCard>,
};
export default meta;

type Story = StoryObj<typeof FeaturesCard>;

export const Base: Story = {
  args: {
    imageSrc: 'https://placehold.jp/150x150.png',
    featureTitle: 'Test',
    featureText: 'Test',
  },
};
