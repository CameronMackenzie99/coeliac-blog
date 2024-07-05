import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'
import { Button } from '../_components/Button'
import { Tag } from '../_components/Tag/Tag'

export default async function Page() {
  // const page = await fetchPlace(slug, isDraftMode)
  const places = await fetchPlaces()

  if (places === null || places.length === 0) {
    return notFound()
  }

  return (
    <>
      <h1>Places to eat</h1>
      {places.map((place, i) => (
        <div key={i} className="py-4 hover:bg-slate-50 border-b">
          <Link href={`places/${place.slug}`}>
            <h2>{place.name}</h2>
            <div className="flex gap-2">
              {place.tags?.split(',').map((tag, i) => {
                return <Tag key={i} tag={tag} />
              })}
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
