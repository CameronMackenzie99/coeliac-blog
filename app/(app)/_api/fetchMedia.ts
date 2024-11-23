import { unstable_cache } from 'next/cache'
import type { Media } from '../../../payload-types'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const fetchMedia = async (id: number): Promise<Media> => {
  return unstable_cache(
    async () => {
      const payload = await getPayload({ config: configPromise })

      const mediaRes = await payload.find({
        collection: 'media',
        where: {
          id: {
            equals: id,
          },
        },
      })
      console.log('fetchMedia result', mediaRes)
      return mediaRes?.docs?.[0] ?? null
    },
    ['fetchMedia', 'id'],
    {
      tags: [typeof id === 'string' ? id : ''],
      revalidate: 60,
    },
  )()
}
