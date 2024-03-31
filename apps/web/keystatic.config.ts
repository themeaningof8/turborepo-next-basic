import { collection, config, fields } from '@keystatic/core'

export default config({
  collections: {
    posts: collection({
      entryLayout: 'content',
      format: { contentField: 'content' },
      label: 'Posts',
      path: 'src/content/posts/*',
      schema: {
        content: fields.document({
          dividers: true,
          formatting: true,
          images: true,
          label: 'Content',
          links: true
        }),
        title: fields.slug({ name: { label: 'Title' } })
      },
      slugField: 'title'
    })
  },
  singletons: {},
  storage: {
    kind: 'local'
  },
  cloud: {
    project: 'themeaningof8/kazkiueda'
  }
})
