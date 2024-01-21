import Head from 'next/head'
import Link from 'next/link'

export default function RootPage() {
  return (
    <>
      <h1>Web</h1>
      <Link href="/posts">posts</Link>
    </>
  )
}
