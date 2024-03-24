import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@ui/components/button'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@ui/components/dialog'

/**
 * A window overlaid on either the primary window or another dialog window,
 * rendering the content underneath inert.
 */
const meta = {
  title: 'ui/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => (
    <Dialog {...args}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2">
          <Button variant="ghost">Cancel</Button>
          <DialogClose asChild>
            <Button>Continue</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the dialog.
 */
export const Default: Story = {}
