import Link from 'next/link'
import { fetchPlaces } from './_api/fetchPages'
import { LinkCard } from './_components/Card/LinkCard'

export default async function Page() {
  const recentPlaces = (await fetchPlaces()).slice(0, 2)
  return (
    <>
      <h2>Recent reviews:</h2>
      <div className="flex flex-wrap gap-4 pb-4 border-b w-full items-center justify-between">
        {recentPlaces.map((place, i) => {
          return (
            <LinkCard key={i} href={`places/${place.slug}`} shadowColour="blue">
              <div className="w-36">
                <p className="font-bold">{place.name}</p>
                <i>{place.location}</i>
              </div>
            </LinkCard>
          )
        })}
        <LinkCard href="places" shadowColour="blue">
          <p className="not-prose">Discover more...</p>
        </LinkCard>
      </div>
    </>
  )
}
