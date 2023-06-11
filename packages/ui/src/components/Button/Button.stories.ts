import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    asChild: {
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'ボタン内の文字列を制御します。',
    },
    size: {
      control: {
        options: ['sm', 'md', 'lg'],
        type: 'select',
      },
      description: 'ボタンのサイズを制御します。',
    },
    variant: {
      control: {
        options: ['default', 'destructive', 'ghost', 'link', 'secondary'],
        type: 'select',
      },
      description: 'ボタンの見た目を制御します。',
    },
  },
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'themeaningof8/Button',
}

export default meta
type Story = StoryObj<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  args: {
    children: 'Button',
    variant: 'default',
  },
}
