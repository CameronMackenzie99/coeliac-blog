'use client'

import clsx from 'clsx'
import { TagColours, pickColour } from '../../_utils/utils'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

export function Tag({ tag }: { tag: string }) {
  const colourMap: Record<TagColours, string> = {
    blue: 'bg-cyan-200',
    green: 'bg-green-200',
    yellow: 'bg-amber-300',
  }

  const tagColour = pickColour(tag)

  const router = useRouter()
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

  const search = (name: string, value: string): void => {
    const query = createQueryString(name, value)
    router.push('/places' + '?' + query)
  }
  return (
    <button
      className={clsx('px-2 py-0.5 rounded-xl', colourMap[tagColour])}
      onClick={() => search('tag', tag)}
    >
      <span className="no-underline">{tag}</span>
    </button>
  )
}
