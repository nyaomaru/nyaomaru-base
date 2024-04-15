import { SectionTitle } from './SectionTitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SectionTitle> = {
  component: SectionTitle,
  tags: ['autodocs'],
  render: ({ ...args }) => <SectionTitle {...args}></SectionTitle>,
};
export default meta;

type Story = StoryObj<typeof SectionTitle>;

export const Base: Story = {
  args: {
    title: 'Test',
    englishTitle: 'Test',
  },
};
