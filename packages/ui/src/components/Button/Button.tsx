import { cn } from '@lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

const buttonVariants = cva(
  'focus-visible:ring-ring ring-offset-background inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-10 px-4 py-2',
        lg: 'h-11 rounded-md px-8',
        sm: 'h-9 rounded-md px-3',
      },
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 dark:bg-primary-dark dark:text-primary-dark-foreground dark:hover:bg-primary-dark/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 dark:bg-destructive-dark dark:text-destructive-dark-foreground dark:hover:bg-destructive-dark/90',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent-dark dark:hover:text-accent-dark-foreground',
        link: 'text-primary dark:text-primary-dark underline-offset-4 hover:underline',
        outline:
          'border-input hover:bg-accent hover:text-accent-foreground dark:border-input-dark dark:hover:bg-accent-dark hover:text-accent-dark-foreground border',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 dark:bg-secondary-dark dark:text-secondary-dark-foreground dark:hover:bg-secondary-dark/80',
      },
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
