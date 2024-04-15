import { FeaturesArea } from './FeaturesArea';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof FeaturesArea> = {
  component: FeaturesArea,
  tags: ['autodocs'],
  render: ({ ...args }) => <FeaturesArea {...args}></FeaturesArea>,
};
export default meta;

type Story = StoryObj<typeof FeaturesArea>;

export const Base: Story = {
  args: {
    sectionType: 'right',
    imageSrc: 'https://placehold.jp/150x150.png',
    sectionTitle: 'Test',
    sectionText: 'Test',
  },
};

export const Left: Story = {
  args: {
    sectionType: 'left',
    imageSrc: 'https://placehold.jp/150x150.png',
    sectionTitle: 'Test',
    sectionText: 'Test',
  },
};
