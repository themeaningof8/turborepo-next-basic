import Header from '@components/header'

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="mx-6 my-10 min-h-dvh">
        <div className="mx-auto">{children}</div>
      </main>
      <footer>あああ</footer>
    </>
  )
}
