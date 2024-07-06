import type { Place } from '../../payload-types'
import { PageParams } from '../places/page'

export const fetchPlaces = async (searchParams?: PageParams['searchParams']): Promise<Place[]> => {
  const locationQs = searchParams?.location
    ? `&where[location][equals]=${searchParams?.location}`
    : ''

  console.log(locationQs)

  const pageRes: {
    docs: Place[]
  } = await fetch(
    `${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/places?depth=0&limit=100` + locationQs,
  ).then(res => res.json()) // eslint-disable-line function-paren-newline

  return pageRes?.docs ?? []
}
