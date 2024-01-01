import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '../Header'

const meta: Meta<typeof Header> = {
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  title: 'Example/Header'
}

export default meta
type Story = StoryObj<typeof Header>

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}

export const LoggedOut: Story = {}
