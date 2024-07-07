import {
  SlateToLexicalFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { CollectionConfig } from 'payload/types';

const Places: CollectionConfig = {
  slug: 'places',
  versions: {
    drafts: true,
  },
  access: {
    read: ({ req: { user } }) => {
      return true;
    },
  },
  upload: true,
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
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          SlateToLexicalFeature({}),
        ],
      }),
    },
  ],
};

export default Places;
