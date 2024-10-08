import { Place } from '@payload-types'
import { fetchMedia } from '../../_api/fetchMedia'
import { formatDate } from '../../_utils/utils'
import { Card } from '../Card/LinkCard'
import Image from 'next/image'
import { Tag } from '../Tag/Tag'
import { Suspense } from 'react'
import { ImageSkeleton } from '../Skeleton/image'

type PlaceCardProps = {
  place: Place
}

export const PlaceCard = async ({ place }: PlaceCardProps): Promise<React.JSX.Element> => {
  const thumbnail =
    typeof place?.thumbnail === 'number' ? await fetchMedia(place?.thumbnail) : place?.thumbnail
  return (
    <Card href={`places/${place.slug}`} shadowColour="yellow">
      <div className="flex justify-between p-4">
        <div className="max-w-1/2">
          <div className="flex flex-col not-prose gap-2 pb-2">
            <h2 className="text-3xl font-bold">{place.name}</h2>
            <p className="text-md">Location: {place.location}</p>
            <p className="text-md italic">Last visited: {formatDate(place.lastDateOfVisit)}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {place.tags?.split(', ').map((tag, i) => {
              return (
                <Suspense key={i}>
                  <Tag tag={tag} />
                </Suspense>
              )
            })}
          </div>
        </div>
        <div>
          <div className="relative h-60 w-60 hidden md:flex">
            <Suspense fallback={<ImageSkeleton />}>
              <Image
                src={`${process.env.NEXT_PUBLIC_URL}${thumbnail?.url ?? ''}`}
                alt={thumbnail?.alt ?? ''}
                fill
                className="object-contain object-right self-center"
              />
            </Suspense>
          </div>
        </div>
      </div>
    </Card>
  )
}
