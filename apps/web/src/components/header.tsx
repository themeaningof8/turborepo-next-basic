import Link from 'next/link'

import { siteConfig } from '@/src/config/site'
import { CommandMenu } from '@components/command-menu'
import { ModeToggle } from '@components/mode-toggle'
import { Button } from '@themeaningof8/ui/components/button'

export default function Header() {
  return (
    <header className="flex h-12 items-center gap-12 border-border border-b px-5">
      <Button size="sm" variant="ghost" asChild>
        <Link href="/">{siteConfig.name}</Link>
      </Button>
      <nav className="flex-1 flex items-center">
        <Button size="sm" variant="ghost" asChild>
          <Link href="/posts">Posts</Link>
        </Button>
      </nav>
      <CommandMenu />
      <ModeToggle />
    </header>
  )
}
