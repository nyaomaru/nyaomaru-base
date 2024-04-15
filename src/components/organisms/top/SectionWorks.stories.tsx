import { SectionWorks } from './SectionWorks';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionWorks> = {
  component: SectionWorks,
  tags: ['autodocs'],
  render: () => <SectionWorks></SectionWorks>,
};
export default meta;

type Story = StoryObj<typeof SectionWorks>;

export const Base: Story = {};
