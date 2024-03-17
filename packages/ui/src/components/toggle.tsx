'use client'

import * as TogglePrimitive from '@radix-ui/react-toggle'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@ui/lib/utils'

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium text-sm ring-offset-white transition-colors disabled:pointer-events-none dark:data-[state=on]:bg-stone-800 dark:hover:bg-stone-800 data-[state=on]:bg-stone-100 hover:bg-stone-100 dark:data-[state=on]:text-stone-50 dark:hover:text-stone-400 data-[state=on]:text-stone-900 hover:text-stone-500 disabled:opacity-50 focus-visible:outline-none dark:focus-visible:ring-stone-300 focus-visible:ring-2 focus-visible:ring-stone-950 dark:ring-offset-stone-950 focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-stone-200 bg-transparent dark:border-stone-800 dark:hover:bg-stone-800 hover:bg-stone-100 dark:hover:text-stone-50 hover:text-stone-900'
      },
      size: {
        default: 'h-10 px-3',
        sm: 'h-9 px-2.5',
        lg: 'h-11 px-5'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
