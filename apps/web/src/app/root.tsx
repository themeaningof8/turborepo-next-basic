import Link from 'next/link'

export default function RootPage() {
  return (
    <div>
      <h1>Web</h1>
      <Link href="/posts">posts</Link>
    </div>
  )
}
