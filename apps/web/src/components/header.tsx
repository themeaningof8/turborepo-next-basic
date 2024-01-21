import { Button } from '@/src/components/ui/button'
import { siteConfig } from '@/src/config/site'

export default function Header() {
  return (
    <header className="flex items-center gap-12 px-5 h-16 border border-slate-100">
      <div>{siteConfig.name}</div>
      <nav className="flex items-center">
        <Button size="sm">Blog</Button>
      </nav>
    </header>
  )
}
