import keystaticConfig from '@/keystatic.config';
import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';
import { Suspense } from 'react';

const reader = createReader(process.cwd(), keystaticConfig);

export default async function Post({ params }) {
  const post = await reader.collections.posts.read(params.slug);
  return (
    <>
      <h1>{post.title}</h1>
      <Suspense>
        <DocumentRenderer document={await post.content()} />
      </Suspense>
    </>
  )
}