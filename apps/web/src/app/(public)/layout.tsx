import Header from '@/src/components/header'

import '@app/global.css'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mx-6 my-10">
        <div className="prose dark:prose-invert mx-auto">{children}</div>
      </main>
      <footer>あああ</footer>
    </>
  )
}
