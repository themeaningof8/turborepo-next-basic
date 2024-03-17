'use client'

import * as TabsPrimitive from '@radix-ui/react-tabs'
import * as React from 'react'

import { cn } from '@ui/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-stone-100 p-1 text-stone-500 dark:bg-stone-800 dark:text-stone-400',
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium text-sm ring-offset-white transition-all disabled:pointer-events-none dark:data-[state=active]:bg-stone-950 data-[state=active]:bg-white dark:data-[state=active]:text-stone-50 data-[state=active]:text-stone-950 disabled:opacity-50 data-[state=active]:shadow-sm focus-visible:outline-none dark:focus-visible:ring-stone-300 focus-visible:ring-2 focus-visible:ring-stone-950 dark:ring-offset-stone-950 focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-2 ring-offset-white focus-visible:outline-none dark:focus-visible:ring-stone-300 focus-visible:ring-2 focus-visible:ring-stone-950 dark:ring-offset-stone-950 focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
