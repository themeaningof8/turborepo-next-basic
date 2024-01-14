import { siteConfig } from '@/src/config/site'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>{siteConfig.name}</header>
      <main className="mx-6 my-10">
        <div className="prose dark:prose-invert mx-auto">{children}</div>
      </main>
      <footer>あああ</footer>
    </>
  )
}
