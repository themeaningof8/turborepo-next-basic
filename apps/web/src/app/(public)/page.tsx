import { Button } from '@themeaningof8/ui/components/button'
import Head from 'next/head'
import Link from 'next/link'

export default function RootPage() {
  return (
    <>
      <h1>Web</h1>
      <Button size="sm" asChild>
        <Link href="/posts">Post</Link>
      </Button>
    </>
  )
}
