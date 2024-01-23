import Header from '@components/header'

import '@app/global.css'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mx-6 my-10 min-h-dvh">
        <div className="prose prose-slate dark:prose-invert mx-auto">
          {children}
        </div>
      </main>
      <footer>あああ</footer>
    </>
  )
}
