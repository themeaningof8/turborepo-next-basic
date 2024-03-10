'use client'

import { OTPInput, SlotProps } from 'input-otp'
import { Dot } from 'lucide-react'
import * as React from 'react'

import { cn } from 'src/lib/utils'

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn('flex items-center gap-2', className)}
    {...props}
  />
))
InputOTP.displayName = 'InputOTP'

const InputOTPGroup = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex items-center', className)} {...props} />
))
InputOTPGroup.displayName = 'InputOTPGroup'

const InputOTPSlot = React.forwardRef<
  React.ElementRef<'div'>,
  SlotProps & React.ComponentPropsWithoutRef<'div'>
>(({ char, hasFakeCaret, isActive, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 items-center justify-center border-stone-200 border-y border-r text-sm transition-all last:rounded-r-md first:rounded-l-md dark:border-stone-800 first:border-l',
        isActive &&
          'z-10 ring-2 ring-stone-950 ring-offset-white dark:ring-stone-300 dark:ring-offset-stone-950',
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-stone-950 duration-1000 dark:bg-stone-50" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = 'InputOTPSlot'

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
  <div
    ref={ref}
    // biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
    role="separator"
    {...props}
  >
    <Dot />
  </div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
