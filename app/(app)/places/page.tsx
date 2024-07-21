import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import { Search } from '../_components/Search/search'
import { Article } from '../_components/Article/article'
import { PlaceCard } from '../_components/PlaceCard/place-card'
import { Suspense } from 'react'
import { revalidatePath } from 'next/cache'

export type PageParams = {
  searchParams: {
    location?: string
    tag?: string
  }
}

export default async function Page({ searchParams }: PageParams) {
  revalidatePath('/places')

  const places = await fetchPlaces()
  const filteredPlaces = await fetchPlaces(searchParams)

  if (filteredPlaces === null || filteredPlaces.length === 0) {
    return notFound()
  }

  return (
    <Article>
      <h1>Places to eat</h1>
      <article className="flex flex-col gap-4">
        <p>
          Here&apos;s a list of all the coeliac friendly places that I&apos;ve found and would
          recommend!
        </p>
        <Suspense>
          <Search places={places} />
        </Suspense>
        {filteredPlaces.map((place, i) => (
          <PlaceCard place={place} key={i} />
        ))}
      </article>
    </Article>
  )
}
