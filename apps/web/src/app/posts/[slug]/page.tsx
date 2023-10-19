import keystaticConfig from '@/keystatic.config';
import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';

const reader = createReader(process.cwd(), keystaticConfig)

export default async function Post({ params }) {
  const post = await reader.collections.posts.read(params.slug)
  console.log(post)
  return (
    <>
      {/* <h1>{post.title}</h1>
      <DocumentRenderer document={await post.content()} /> */}
    </>
  )
}