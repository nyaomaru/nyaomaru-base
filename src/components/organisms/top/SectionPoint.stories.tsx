import { SectionPoint } from './SectionPoint';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionPoint> = {
  component: SectionPoint,
  tags: ['autodocs'],
  render: () => <SectionPoint></SectionPoint>,
};
export default meta;

type Story = StoryObj<typeof SectionPoint>;

export const Base: Story = {};
