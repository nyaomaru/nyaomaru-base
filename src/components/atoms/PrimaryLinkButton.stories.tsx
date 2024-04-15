import { PrimaryLinkButton } from './PrimaryLinkButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimaryLinkButton> = {
  component: PrimaryLinkButton,
  tags: ['autodocs'],
  render: ({ ...args }) => <PrimaryLinkButton {...args}></PrimaryLinkButton>,
};
export default meta;

type Story = StoryObj<typeof PrimaryLinkButton>;

export const Base: Story = {
  args: {
    buttonName: 'Test',
    buttonLink: 'Test',
  },
};
