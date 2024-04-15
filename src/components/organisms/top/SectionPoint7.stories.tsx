import { SectionPoint7 } from './SectionPoint7';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionPoint7> = {
  component: SectionPoint7,
  tags: ['autodocs'],
  render: () => <SectionPoint7></SectionPoint7>,
};
export default meta;

type Story = StoryObj<typeof SectionPoint7>;

export const Base: Story = {};
