import { SectionFv } from './SectionFv';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionFv> = {
  component: SectionFv,
  tags: ['autodocs'],
  render: () => <SectionFv></SectionFv>,
};
export default meta;

type Story = StoryObj<typeof SectionFv>;

export const Base: Story = {};
