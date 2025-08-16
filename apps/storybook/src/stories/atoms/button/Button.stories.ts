import { Button } from '@repo/ui/components/atoms/Button/button';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

// import { Button } from "@repo/ui/Button/button";

const meta = {
  title: 'Components/atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    children: { control: 'text' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    className: 'bg-gray-500 hover:bg-gray-700',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    className: 'px-6 py-3 text-lg',
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    className: 'px-2 py-1 text-sm',
  },
};
