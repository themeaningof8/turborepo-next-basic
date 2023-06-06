'use client'

import Link from 'next/link'

export default function PostCard(props: any) {
  const { title, slug, _createdAt } = props
  return (
    <Link
      href={`/post/${slug.current}`}
      className='block cursor-pointer no-underline'
    >
      <h3>{title}</h3>
      <span className='text-sm text-secondary font-normal'>{_createdAt}</span>
    </Link>
  )
}