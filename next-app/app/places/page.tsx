import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'
import { Button } from '../_components/Button'
import { Tag } from '../_components/Tag/Tag'
import { formatDate } from '../_utils/utils'

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
        <div key={i} className="py-4 hover:bg-slate-100 border-b drop-shadow-sm">
          {/* tailwind extended shadows plugin */}
          <Link href={`places/${place.slug}`}>
            <h2>{place.name}</h2>
            <p className="text-xs italic">{formatDate(place.createdAt)}</p>
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
