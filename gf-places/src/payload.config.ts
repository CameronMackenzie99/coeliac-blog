import path from 'path';

import { payloadCloud } from '@payloadcms/plugin-cloud';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { buildConfig } from 'payload/config';

import Users from './collections/Users';
import Places from './collections/Places';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { viteBundler } from '@payloadcms/bundler-vite';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: viteBundler(),
  },
  editor: lexicalEditor({}),
  collections: [Users, Places],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
});
