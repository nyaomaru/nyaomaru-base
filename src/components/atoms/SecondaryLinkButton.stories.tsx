import { SecondaryLinkButton } from './SecondaryLinkButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof SecondaryLinkButton> = {
  component: SecondaryLinkButton,
  tags: ['autodocs'],
  render: ({ ...args }) => <SecondaryLinkButton {...args}></SecondaryLinkButton>,
};
export default meta;

type Story = StoryObj<typeof SecondaryLinkButton>;

export const Base: Story = {
  args: {
    buttonName: 'Test',
    buttonLink: '/',
  },
};
