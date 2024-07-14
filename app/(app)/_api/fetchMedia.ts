import { unstable_cache } from 'next/cache'
import type { Media } from '../../../payload-types'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export const fetchMedia = async (id: number): Promise<Media> => {
  return unstable_cache(
    async () => {
      const payload = await getPayloadHMR({ config: configPromise })

      const mediaRes = await payload.find({
        collection: 'media',
        where: {
          id: {
            equals: id,
          },
        },
      })

      return mediaRes?.docs?.[0] ?? null
    },
    ['fetchMedia', 'id'],
    {
      tags: [typeof id === 'string' ? id : ''],
      revalidate: 60,
    },
  )()
}
