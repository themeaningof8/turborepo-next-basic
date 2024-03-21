import Image from 'next/image'
import Link from 'next/link'

import { siteConfig } from '@/src/config/site'
import { CommandMenu } from '@components/command-menu'
import { ModeToggle } from '@components/mode-toggle'
import { Button } from '@themeaningof8/ui/components/button'
import Logo from '../../public/logo.svg'

export default function Header() {
  return (
    <header className="flex h-14 items-center gap-12 px-5">
      <Button size="sm" variant="ghost" asChild>
        <Link href="/">
          <Logo className="h-4 fill-current dark:fill-background" />
        </Link>
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
