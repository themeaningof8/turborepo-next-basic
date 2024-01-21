import Link from 'next/link'

import { Button } from '@components/ui/button'
import { CommandMenu } from '@components/command-menu'
import { siteConfig } from '@/src/config/site'

export default function Header() {
  return (
    <header className="flex items-center gap-12 px-5 h-16 border border-slate-100">
      <Button size="sm" variant="ghost" asChild>
        <Link href="/">{siteConfig.name}</Link>
      </Button>
      <nav className="flex flex-1 items-center">
        <Button size="sm" variant="ghost" asChild>
          <Link href="/posts">Posts</Link>
        </Button>
      </nav>
      <CommandMenu />
    </header>
  )
}
