import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@ui/components/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@ui/components/drawer'

/**
 * A drawer component for React.
 */
const meta: Meta<typeof Drawer> = {
  title: 'ui/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {},
  render: (args) => (
    <Drawer {...args}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Are you sure absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Drawer>

export default meta

type Story = StoryObj<typeof meta>

/**
 * The default form of the drawer.
 */
export const Default: Story = {}
