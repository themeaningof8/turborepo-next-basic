'use client'

import { getPosts } from '@lib/client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@themeaningof8/ui'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default async function Post() {
  const pathname = usePathname()
  const posts = await getPosts()
  return (
    <article>
      <h2>{pathname}</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>CreatedAt</TableHead>
            <TableHead>Slug</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {posts.map((post) => {
            return (
              <TableRow key={post._id}>
                <TableCell className="font-medium">
                  <Link href={`/post/${post.slug.current}`}>{post.title}</Link>
                </TableCell>
                <TableCell>{post._createdAt}</TableCell>
                <TableCell>{post.slug.current}</TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </article>
  )
}
