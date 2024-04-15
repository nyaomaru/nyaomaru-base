import { TsParticles } from './TsParticles';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof TsParticles> = {
  component: TsParticles,
  tags: ['autodocs'],
  render: () => <TsParticles></TsParticles>,
};
export default meta;

type Story = StoryObj<typeof TsParticles>;

export const Base: Story = {};
