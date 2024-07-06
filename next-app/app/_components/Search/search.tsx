'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import { Place } from '../../../../payload-types'

export function Search({ places }: { places: Place[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams],
  )

  const locations = Array.from(new Set(places.map(place => place.location)))
  const tags = Array.from(new Set(places.map(place => place.tags?.split(', ')).flat()))

  const search = (name: string, value: string): void => {
    const query = createQueryString(name, value)
    router.push(pathname + '?' + query)
  }

  return (
    <div className="flex flex-wrap justify-between gap-2 pr-8">
      <section className="flex flex-col w-fit">
        <label className="mb-2" htmlFor="location">
          <b className="text-xl">Find somewhere in...</b>
        </label>
        <select
          name="locations"
          id="locations"
          className="bg-slate-100 border border-slate-600 px-2 rounded-md"
          defaultValue={searchParams.get('location')?.toString() ?? ''}
          onChange={$event => search('location', $event.target.value)}
        >
          <option value="">All locations</option>
          {locations.map((location, i) => {
            return (
              <option key={i} value={location!}>
                {location}
              </option>
            )
          })}
        </select>
      </section>
      <section className="flex flex-col w-fit">
        <label className="mb-2" htmlFor="tags">
          <b className="text-xl">What do you fancy?</b>
        </label>
        <select
          name="tags"
          id="tags"
          className="bg-slate-100 border border-slate-600 px-2 rounded-md"
          defaultValue={searchParams.get('tag')?.toString() ?? ''}
          onChange={$event => search('tag', $event.target.value)}
        >
          <option value="">Anything</option>
          {tags.map((tag, i) => {
            return (
              <option key={i} value={tag!}>
                {tag}
              </option>
            )
          })}
        </select>
      </section>
    </div>
  )
}
