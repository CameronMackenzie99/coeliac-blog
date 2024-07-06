import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'
import { Tag } from '../_components/Tag/Tag'
import { formatDate } from '../_utils/utils'
import Image from 'next/image'
import { Search } from '../_components/Search/search'
import { Card } from '../_components/Card/LinkCard'

export type PageParams = {
  searchParams: {
    location?: string
    tag?: string
  }
}

export default async function Page({ searchParams }: PageParams) {
  const places = await fetchPlaces()
  const filteredPlaces = await fetchPlaces(searchParams)

  if (filteredPlaces === null || filteredPlaces.length === 0) {
    return notFound()
  }

  return (
    <>
      <h1>Places to eat</h1>
      <article className="flex flex-col gap-4">
        <p>Here's a list of all the coeliac friendly places that I've found and would recommend!</p>
        <Search places={places} />
        {filteredPlaces.map((place, i) => (
          <Card key={i} href={`places/${place.slug}`} shadowColour="yellow">
            <div className="flex justify-between">
              <div className="max-w-64">
                <h2>{place.name}</h2>
                <div className="flex flex-col not-prose gap-2 pb-2">
                  <p className="text-xs">Location: {place.location}</p>
                  <p className="text-xs italic">
                    Last visited: {formatDate(place.lastDateOfVisit)}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {place.tags?.split(', ').map((tag, i) => {
                    return <Tag key={i} tag={tag} />
                  })}
                </div>
              </div>
              <div>
                <Image
                  src="/bluejoanna.png"
                  className="border"
                  alt="blue joanna"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </Card>
        ))}
      </article>
    </>
  )
}
