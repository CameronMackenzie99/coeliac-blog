import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Place } from '@payload-types'
import { fetchPlace } from '../../_api/fetchPage'
import { fetchPlaces } from '../../_api/fetchPages'
import RichText from '../../_components/RichText'
import { formatDate } from '../../_utils/utils'
import { Card } from '../../_components/Card/LinkCard'
import { Tag } from '../../_components/Tag/Tag'
import Image from 'next/image'
import { Article } from '../../_components/Article/article'
import { fetchMedia } from '../../_api/fetchMedia'
import { Suspense } from 'react'
import { ImageSkeleton } from '../../_components/Skeleton/image'
import { revalidateTag } from 'next/cache'

interface PageParams {
  params: { slug: string }
}

const PlaceTemplate: React.FC<{ place: Place | null | undefined }> = async ({ place: place }) => {
  revalidateTag(typeof place?.slug === 'string' ? place.slug : '')
  const thumbnail =
    typeof place?.thumbnail === 'number' ? await fetchMedia(place?.thumbnail) : place?.thumbnail

  return (
    <Article>
      <h1>{place?.name}</h1>
      <Card shadowColour="blue">
        <div className="flex justify-between gap-4">
          <div className="not-prose flex flex-col text-wrap gap-2">
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
            <div className="flex gap-2 flex-wrap">
              {place?.tags?.split(', ').map((tag, i) => (
                <Suspense key={i}>
                  <Tag tag={tag} />
                </Suspense>
              ))}
            </div>
          </div>
          {thumbnail?.url && (
            <div className="relative h-66 w-1/2 hidden sm:flex py-2">
              <Suspense fallback={<ImageSkeleton />}>
                <Image
                  src={`${thumbnail.sizes?.tablet?.url ?? null}`}
                  alt={thumbnail.alt!}
                  fill
                  className="object-contain object-right self-center rounded-md"
                />
              </Suspense>
            </div>
          )}
        </div>
      </Card>
      <blockquote>{place?.summary}</blockquote>
      {thumbnail?.url && (
        <div className="relative h-72 w-full flex sm:hidden my-4">
          <Suspense fallback={<ImageSkeleton />}>
            <Image
              src={`${thumbnail.url}`}
              alt={thumbnail.alt!}
              fill
              className="object-contain self-center rounded-md"
            />
          </Suspense>
        </div>
      )}

      <RichText content={place?.content} />
    </Article>
  )
}

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
  )
}
