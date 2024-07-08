import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'
import { Tag } from '../_components/Tag/Tag'
import { formatDate } from '../_utils/utils'
import Image from 'next/image'
import { Search } from '../_components/Search/search'
import { Card } from '../_components/Card/LinkCard'
import { Article } from '../_components/Article/article'
import { PlaceCard } from '../_components/PlaceCard/place-card'

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
    <Article>
      <h1>Places to eat</h1>
      <article className="flex flex-col gap-4">
        <p>Here's a list of all the coeliac friendly places that I've found and would recommend!</p>
        <Search places={places} />
        {filteredPlaces.map((place, i) => (
          <PlaceCard place={place} key={i} />
        ))}
      </article>
    </Article>
  )
}
