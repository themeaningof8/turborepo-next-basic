import type { Meta, StoryObj } from '@storybook/react'

import { expect } from '@storybook/jest'
import { userEvent, waitFor, within } from '@storybook/testing-library'

import { Popover, PopoverContent, PopoverTrigger } from './Popover'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Popover> = {
  // More on argTypes:,https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Popover,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'themeaningof8/Popover'
}

export default meta
type Story = StoryObj<typeof Popover>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  play: async ({ container }) => {},
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: () => (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  )
}
