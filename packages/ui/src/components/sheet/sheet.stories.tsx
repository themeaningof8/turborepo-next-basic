import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@ui/components/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@ui/components/sheet'

/**
 * Extends the Dialog component to display content that complements the main
 * content of the screen.
 */
const meta: Meta<typeof SheetContent> = {
  title: 'ui/Sheet',
  component: Sheet,
  tags: ['autodocs'],
  argTypes: {
    side: {
      options: ['top', 'bottom', 'left', 'right'],
      control: {
        type: 'radio'
      }
    }
  },
  args: {
    side: 'right'
  },
  render: (args) => (
    <Sheet>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose>
            <Button variant="ghost">Cancel</Button>
          </SheetClose>
          <Button>Submit</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof SheetContent>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the sheet.
 */
export const Default: Story = {}
