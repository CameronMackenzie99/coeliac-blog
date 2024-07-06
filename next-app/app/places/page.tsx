import { notFound } from 'next/navigation'
import { fetchPlaces } from '../_api/fetchPages'
import Link from 'next/link'
import { Tag } from '../_components/Tag/Tag'
import { formatDate } from '../_utils/utils'
import Image from 'next/image'
import { Search } from '../_components/Search/search'

export default async function Page() {
  const places = await fetchPlaces()

  if (places === null || places.length === 0) {
    return notFound()
  }

  return (
    <>
      <h1>Places to eat</h1>
      <Search places={places} />
      {places.map((place, i) => (
        <div
          key={i}
          className="border-2 hover:bg-slate-100 hover:cursor-pointer shadow-[5px_5px_0_0_rgba(0,0,0,0.2)] hover:shadow-[8px_8px_0_0_rgba(0,0,0,0.2)]"
        >
          <Link href={`places/${place.slug}`}>
            <div className="flex p-4 justify-between">
              <div className="max-w-64">
                <h2>{place.name}</h2>
                <div className="flex flex-col not-prose gap-2 pb-2">
                  <p className="text-xs">Location: {place.location}</p>
                  <p className="text-xs italic">
                    Last visited: {formatDate(place.lastDateOfVisit)}
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {place.tags?.split(',').map((tag, i) => {
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
          </Link>
        </div>
      ))}
    </>
  )
}
