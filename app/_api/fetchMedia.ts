import type { Media, Place } from '../../payload-types'

export const fetchMedia = async (id: number): Promise<Media> => {
  // const mediaQs = `&where[tags][contains]=${searchParams?.tag}` : ''

  // console.log(tagQs)

  const pageRes: {
    docs: Place[]
  } = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_URL}/api/media?where[id][equals]=${id}`).then(
    res => res.json(),
  ) // eslint-disable-line function-paren-newline

  return pageRes?.docs?.[0] ?? []
}
