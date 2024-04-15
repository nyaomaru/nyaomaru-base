import { SectionReview } from './SectionReview';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionReview> = {
  component: SectionReview,
  tags: ['autodocs'],
  render: () => <SectionReview></SectionReview>,
};
export default meta;

type Story = StoryObj<typeof SectionReview>;

export const Base: Story = {};
