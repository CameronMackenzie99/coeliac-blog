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
      <h1>Places to eat!!</h1>
      {places.map((place, i) => (
        <>
          <Button
            appearance="primary"
            key={i}
            href={`places/${place.slug}`}
            label={place.name ?? 'oops'}
          />
          <div key={i}>{place.tags}</div>
        </>
      ))}
    </>
  )
}
