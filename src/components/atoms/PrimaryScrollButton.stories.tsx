import { PrimaryScrollButton } from './PrimaryScrollButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof PrimaryScrollButton> = {
  component: PrimaryScrollButton,
  tags: ['autodocs'],
  render: ({ ...args }) => <PrimaryScrollButton {...args}></PrimaryScrollButton>,
};
export default meta;

type Story = StoryObj<typeof PrimaryScrollButton>;

export const Base: Story = {
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
        <div style={{ marginTop: '10rem' }}>{'test'}</div>
        <div style={{ marginTop: '10rem' }}>{'test'}</div>
        <div style={{ marginTop: '10rem' }}>{'test'}</div>
        <div style={{ marginTop: '10rem' }}>{'test'}</div>
        <div id="test" style={{ marginTop: '10rem' }}>
          {'here'}
        </div>
      </div>
    ),
  ],
  args: {
    buttonName: 'Test',
    scrollTo: 'test',
  },
};
