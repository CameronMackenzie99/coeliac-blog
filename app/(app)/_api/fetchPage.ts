import type { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies'

import type { Place } from '../../../payload-types'

import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { unstable_cache } from 'next/cache'

export const fetchPlace = async (
  slug: string,
  draft?: boolean,
): Promise<Place | undefined | null> => {
  // let payloadToken: RequestCookie | undefined

  return unstable_cache(
    async () => {
      const payload = await getPayloadHMR({ config: configPromise })

      const placeRes = await payload.find({
        collection: 'places',
        where: {
          slug: {
            equals: slug,
          },
        },
      })

      return placeRes?.docs?.[0] ?? null
    },
    ['fetchPlace'],
    {
      tags: [typeof slug === 'string' ? slug : ''],
      revalidate: 60,
    },
  )()
}
// if (draft) {
//   const { cookies } = await import('next/headers')
//   payloadToken = cookies().get('payload-token')
// }

// const placeRes: {
//   docs: Place[]
// } = await fetch(
//   `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/places?where[slug][equals]=${slug}${
//     draft && payloadToken ? '&draft=true' : ''
//   }`,
//   {
//     method: 'GET',
//     // this is the key we'll use to on-demand revalidate pages that use this data
//     // we do this by calling `revalidateTag()` using the same key
//     // see `app/api/revalidate.ts` for more info
//     next: { tags: [`places_${slug}`] },
//     ...(draft && payloadToken
//       ? {
//           headers: {
//             Authorization: `JWT ${payloadToken?.value}`,
//           },
//         }
//       : {}),
//   },
// ).then(res => res.json())
