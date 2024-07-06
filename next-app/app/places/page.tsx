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
        <div
          key={i}
          className="border-2 hover:bg-slate-100 hover:cursor-pointer shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]"
        >
          <Link href={`places/${place.slug}`}>
            <div className="p-4">
              <h2>{place.name}</h2>
              <p className="text-xs italic">{formatDate(place.createdAt)}</p>
              <div className="flex gap-2">
                {place.tags?.split(',').map((tag, i) => {
                  return <Tag key={i} tag={tag} />
                })}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
