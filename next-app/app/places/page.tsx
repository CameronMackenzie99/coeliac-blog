import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'

export default async function Page() {
  // const page = await fetchPlace(slug, isDraftMode)
  const places = await fetchPlaces()

  if (places === null || places.length === 0) {
    return notFound()
  }

  console.log(places)

  return (
    <>
      <h1>Places to eat!!</h1>
      {places.map((place, i) => (
        <Link key={i} href={`places/${place.slug}`}>
          <h3 key={i}>{place.name}</h3>
          <div key={i}>{place.tags}</div>
        </Link>
      ))}
    </>
  )
}
