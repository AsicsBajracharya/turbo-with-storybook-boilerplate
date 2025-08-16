import { Input } from '@repo/ui/components/atoms/Input/input';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';

const meta = {
  title: 'Components/atoms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
    placeholder: { control: 'text' },
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number', 'search', 'url', 'tel'],
    },
    disabled: { control: 'boolean' },
    defaultValue: { control: 'text' },
  },
  args: { onChange: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Type something…',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Secondary Input',
    className: 'bg-gray-500 hover:bg-gray-700 dark:bg-neutral-700 dark:hover:bg-neutral-800',
  },
};

export const Large: Story = {
  args: {
    placeholder: 'Large Input',
    className: 'px-6 py-3 text-lg',
  },
};

export const Small: Story = {
  args: {
    placeholder: 'Small Input',
    className: 'px-2 py-1 text-sm',
  },
};
