'use client'

import { usePathname } from 'next/navigation'

import { getPosts } from '../../client'
import PostCard from '../components/PostCard'

export default async function Post() {
  const pathname = usePathname()
  const posts = await getPosts()
  return (
    <article>
      <h2>{pathname}</h2>
      <section className="space-y-8">
        {posts.map((post) => {
          return <PostCard key={post._id} {...post} />
        })}
      </section>
    </article>
  )
}
