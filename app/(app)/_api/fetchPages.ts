import type { Place } from '../../../payload-types'
import { PageParams } from '../places/page'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const fetchPlaces = async (searchParams?: PageParams['searchParams']): Promise<Place[]> => {
  const includeWhere = searchParams?.location || searchParams?.tag

  return unstable_cache(
    async () => {
      const payload = await getPayloadHMR({ config: configPromise })

      const data = await payload.find({
        collection: 'places',
        ...(includeWhere && {
          where: {
            ...(searchParams?.location && {
              location: {
                equals: searchParams?.location,
              },
            }),
            ...(searchParams?.tag && {
              tags: {
                contains: searchParams?.tag,
              },
            }),
          },
        }),
      })
      return data?.docs ?? []
    },
    ['fetchPlaces', searchParams?.location ?? '', searchParams?.tag ?? ''],
    {
      tags: [
        typeof searchParams?.location === 'string' ? searchParams.location : '',
        typeof searchParams?.tag === 'string' ? searchParams.tag : '',
      ],
      revalidate: 60,
    },
  )()
}
