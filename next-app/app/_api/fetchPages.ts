import type { Place } from '../../../payload-types'
import { PageParams } from '../places/page'

export const fetchPlaces = async (searchParams?: PageParams['searchParams']): Promise<Place[]> => {
  const locationQs = searchParams?.location
    ? `&where[location][equals]=${searchParams?.location}`
    : ''

  const tagQs = searchParams?.tag ? `&where[tags][contains]=${searchParams?.tag}` : ''

  console.log(tagQs)

  const pageRes: {
    docs: Place[]
  } = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/places?depth=0&limit=100&sort=-createdAt` +
      locationQs +
      tagQs,
  ).then(res => res.json()) // eslint-disable-line function-paren-newline

  return pageRes?.docs ?? []
}
