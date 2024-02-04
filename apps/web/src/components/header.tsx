import Link from 'next/link'

import { siteConfig } from '@/src/config/site'
import { CommandMenu } from '@components/command-menu'
import { ModeToggle } from '@components/mode-toggle'
import { Button } from '@components/ui/button'

export default function Header() {
  return (
    <header className="flex h-16 items-center gap-12 px-5">
      <Button size="sm" variant="ghost" className="font-bold text-base" asChild>
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
