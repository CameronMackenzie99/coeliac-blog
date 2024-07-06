'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useCallback } from 'react'
import { Place } from '../../../payload-types'

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

  const searchLocation = (value: string): void => {
    const query = createQueryString('location', value)
    router.push(pathname + '?' + query)
  }

  return (
    <section className="flex flex-col w-fit">
      <label htmlFor="locations" />
      Find somewhere in...
      <select
        name="locations"
        id="locations"
        defaultValue={searchParams.get('location')?.toString()}
        onChange={$event => searchLocation($event.target.value)}
      >
        <option value=""></option>
        {locations.map((location, i) => {
          return (
            <option key={i} value={location!}>
              {location}
            </option>
          )
        })}
      </select>
    </section>
  )
}
