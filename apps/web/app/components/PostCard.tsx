'use client'

import Link from 'next/link'

export default function PostCard(props: any) {
  const { _createdAt, slug, title } = props
  return (
    <Link
      className="block cursor-pointer no-underline"
      href={`/post/${slug.current}`}
    >
      <h3>{title}</h3>
      <span className="text-secondary text-sm font-normal">{_createdAt}</span>
    </Link>
  )
}
