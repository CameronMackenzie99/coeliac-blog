import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'
import { Button } from '../_components/Button'

export default async function Page() {
  // const page = await fetchPlace(slug, isDraftMode)
  const places = await fetchPlaces()

  if (places === null || places.length === 0) {
    return notFound()
  }

  console.log(places)

  return (
    <>
      <h1>Places to eat</h1>
      {places.map((place, i) => (
        <Link href={`places/${place.slug}`} className="border-b py-4 w-2/3 hover:bg-slate-50">
          <h2 key={i}>{place.name}</h2>
          <div className="flex gap-2">
            {place.tags?.split(',').map((tag, i) => {
              return (
                <button key={i} className="px-2 py-1 border rounded-md">
                  {tag}
                </button>
              )
            })}
          </div>
        </Link>
      ))}
    </>
  )
}
