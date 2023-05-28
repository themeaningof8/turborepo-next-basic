import { createClient, groq } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET
const apiVersion = '2023-05-25'

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
  studioUrl: 'https://admin.kazkiueda.com/', // Or: 'https://my-cool-project.sanity.studio'
  encodeSourceMap: true, // Optional. Default to: process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview',
})

const clientFetch = client.fetch.bind(client)

export async function getPosts() {
  const posts = await clientFetch(
    groq`*[_type == 'post']{
      _id,
      title,
      slug,
      _createdAt
    }`)
  return posts
}

export async function getPostBySlug(slug) {
  const post = await clientFetch(
    groq`*[_type == 'post' && slug.current == $slug][0]`
    , { slug }
  )
  return post
}