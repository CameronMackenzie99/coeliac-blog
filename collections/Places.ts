import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

const Places: CollectionConfig = {
  slug: 'places',
  versions: {
    drafts: true,
  },
  access: {
    read: () => {
      return true
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'fullyGf',
      type: 'checkbox',
    },
    { name: 'rating', type: 'radio', options: ['1', '2', '3', '4', '5'] },
    {
      name: 'lastDateOfVisit',
      type: 'date',
    },
    {
      name: 'tags',
      type: 'text',
    },
    { name: 'summary', type: 'textarea' },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
    },
  ],
}

export default Places
