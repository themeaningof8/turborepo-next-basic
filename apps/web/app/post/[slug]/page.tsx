import { PortableText } from '@portabletext/react'

import { getPostBySlug } from '../../../client'
import blockContents from '../../components/blockContents'

export default async function PostSlug({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  const { _createdAt, body, title } = post
  return (
    <article>
      <p>{slug}</p>
      <h1>{title}</h1>
      <span>{_createdAt}</span>
      <PortableText components={blockContents} value={body} />
    </article>
  )
}
