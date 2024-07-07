import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Place } from '../../../../payload-types'
import { fetchPlace } from '../../_api/fetchPage'
import { fetchPlaces } from '../../_api/fetchPages'
import RichText from '../../_components/RichText'
import { formatDate } from '../../_utils/utils'
import { Card } from '../../_components/Card/LinkCard'
import { Tag } from '../../_components/Tag/Tag'
import Image from 'next/image'
import { Article } from '../../_components/Article/article'

interface PageParams {
  params: { slug: string }
}

export const PlaceTemplate: React.FC<{ place: Place | null | undefined }> = ({ place: place }) => (
  <Article>
    <h1>{place?.name}</h1>
    <Card shadowColour="blue">
      <div className="flex justify-between gap-4 flex-nowrap overflow-clip">
        <div className="not-prose flex flex-col gap-2">
          <p>
            <b>Location:</b> {place?.location}
          </p>
          <p>
            <b>Address:</b> {place?.address}
          </p>
          <p>
            <b>Website:</b>{' '}
            <a className="underline" href={`//${place?.website}`}>
              {place?.website}
            </a>
          </p>
          <p>
            <b>Fully GF?:</b> {place?.fullyGf ? 'Yes' : 'No'}
          </p>
          <p>
            <b>Last Visited:</b> {formatDate(place?.lastDateOfVisit)}
          </p>
          <div className="flex gap-2">
            {place?.tags?.split(', ').map((tag, i) => (
              <Tag key={i} tag={tag} />
            ))}
          </div>
        </div>
        <Image
          src="/bluejoanna.png"
          alt="blue joanna"
          width={150}
          height={300}
          className="hidden sm:block m-0"
        />
      </div>
    </Card>
    <blockquote>{place?.summary}</blockquote>
    <RichText content={place?.content} />
  </Article>
)

export default async function Page({ params: { slug = 'home' } }: PageParams) {
  const { isEnabled: isDraftMode } = draftMode()

  const page = await fetchPlace(slug, isDraftMode)

  if (page === null) {
    return notFound()
  }

  return <PlaceTemplate place={page} />
}

export async function generateStaticParams() {
  const pages = await fetchPlaces()

  return pages.map(({ slug }) =>
    slug !== 'home'
      ? {
          slug,
        }
      : {},
  ) // eslint-disable-line function-paren-newline
}
