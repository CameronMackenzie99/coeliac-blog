import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */

import dotenvExpand from 'dotenv-expand'

dotenvExpand.expand({ parsed: { ...process.env } })

const nextConfig = {
  images: {
    minimumCacheTTL: 0,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
}

export default withPayload(nextConfig)
