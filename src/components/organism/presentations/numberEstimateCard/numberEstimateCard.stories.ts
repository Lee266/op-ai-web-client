import type { Meta, StoryObj } from '@storybook/react';
import NumberEstimateCard from '.';

const meta = {
  title: 'organism/DeviceDetail',
  component: NumberEstimateCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof NumberEstimateCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const normal: Story = {
  args: {
    canvasId: 'yourCanvasId',
    onUndo: () => {},
    onRedo: () => {},
    onClear: () => {},
    onEstimateImage: () => {},
  },
};
