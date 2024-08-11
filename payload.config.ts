import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import Users from './collections/Users'
import { Media } from './collections/Media'
import Places from './collections/Places'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [Users, Media, Places],
  editor: lexicalEditor(),
  serverURL: process.env.NEXT_PUBLIC_URL,
  cors: {
    origins: [process.env.NEXT_PUBLIC_URL ?? ''],
  },
  secret: process.env.PAYLOAD_SECRET || 'test',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  sharp,
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: true, // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        [Media.slug]: true,
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN || 'vercel_blob_rw_somefakeid_nonce',
      cacheControlMaxAge: 60,
    }),
  ],
})
