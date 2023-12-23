import type { Meta, StoryObj } from '@storybook/react';
import UserAccountButton from './index';

const meta = {
  title: 'molecules/UserAccountButton',
  component: UserAccountButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof UserAccountButton>;

export default meta;
type Story = StoryObj<typeof UserAccountButton>;

export const normal: Story = {
  args: {},
};
