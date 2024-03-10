import * as React from 'react'

import { cn } from 'src/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white disabled:cursor-not-allowed dark:border-stone-800 file:border-0 dark:bg-stone-950 file:bg-transparent file:font-medium dark:placeholder:text-stone-400 file:text-sm placeholder:text-stone-500 disabled:opacity-50 focus-visible:outline-none dark:focus-visible:ring-stone-300 focus-visible:ring-2 focus-visible:ring-stone-950 dark:ring-offset-stone-950 focus-visible:ring-offset-2',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
