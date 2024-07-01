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
    {
      name: 'lastDateOfVisit',
      type: 'date',
    },
    {
      name: 'tags',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default Places;
