import type { Place } from '../../payload-types'

export const fetchPlaces = async (): Promise<Place[]> => {
  const pageRes: {
    docs: Place[]
  } = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/places?depth=0&limit=100`).then(res =>
    res.json(),
  ) // eslint-disable-line function-paren-newline

  return pageRes?.docs ?? []
}
