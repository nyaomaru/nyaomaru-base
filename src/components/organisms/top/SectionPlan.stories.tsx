import { SectionPlan } from './SectionPlan';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionPlan> = {
  component: SectionPlan,
  tags: ['autodocs'],
  render: () => <SectionPlan></SectionPlan>,
};
export default meta;

type Story = StoryObj<typeof SectionPlan>;

export const Base: Story = {};
