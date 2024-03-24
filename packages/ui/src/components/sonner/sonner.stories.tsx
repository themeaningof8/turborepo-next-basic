import { action } from '@storybook/addon-actions'
import type { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'

import { Button } from '@ui/components/button'
import { Toaster } from '@ui/components/sonner'

/**
 * An opinionated toast component for React.
 */
const meta: Meta<typeof Toaster> = {
  title: 'ui/Sonner',
  component: Toaster,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    position: 'bottom-right'
  },
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Toaster>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the toaster.
 */
export const Default: Story = {
  render: (args) => (
    <div className="flex min-h-96 items-center justify-center space-x-2">
      <Button
        onClick={() =>
          toast('Event has been created', {
            description: new Date().toLocaleString(),
            action: {
              label: 'Undo',
              onClick: action('Undo clicked')
            }
          })
        }
      >
        Show Toast
      </Button>
      <Toaster {...args} />
    </div>
  )
}
