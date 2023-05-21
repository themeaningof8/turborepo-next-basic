import { getPostBySlug } from "../../../client"
import { PortableText } from '@portabletext/react'
import blockContents from "../../components/blockContents"

export default async function PostSlug({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = await getPostBySlug(slug)
  const { _createdAt, title, body } = post
  return (
    <article>
      <p>{slug}</p>
      <h1>{title}</h1>
      <span>{_createdAt}</span>
      <PortableText value={body} components={blockContents} />
    </article>
  )
}