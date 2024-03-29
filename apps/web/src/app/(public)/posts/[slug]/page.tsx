import { createReader } from '@keystatic/core/reader'
import { DocumentRenderer } from '@keystatic/core/renderer'
import keystaticConfig from '@/keystatic.config'

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params

  const post = await reader.collections.posts.read(slug)

  if (!post) return <div>Post not found!</div>

  return (
    <>
      <h1>{post.title}</h1>
      <div>
        <DocumentRenderer document={await post.content()} />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list()

  return slugs.map((slug) => ({
    slug
  }))
}
