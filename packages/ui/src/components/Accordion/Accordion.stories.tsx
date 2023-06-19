import type { Meta, StoryObj } from '@storybook/react'

import { expect } from '@storybook/jest'
import { userEvent, waitFor, within } from '@storybook/testing-library';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
  // More on argTypes:,https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  title: 'themeaningof8/Accordion',
}

export default meta
type Story = StoryObj<typeof Accordion>

// Accordionに渡す文字列を定義します。
const data = [
  {
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
    title: 'Is it accessible?',
  },
  {
    content:
      'Yes. It comes with default styles that matches the other components aesthetic.',
    title: 'Is it styled?',
  },
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
  play: async ({ container }) => { },
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  render: () => (
    <Accordion className="w-full" type="multiple">
      {data.map((item) => (
        <AccordionItem key={item.title} value={item.title}>
          <AccordionTrigger>{item.title}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
