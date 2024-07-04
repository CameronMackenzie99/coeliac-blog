import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Place } from '../../../payload-types'
import { fetchPlace } from '../../_api/fetchPage'
import { fetchPlaces } from '../../_api/fetchPages'
import { Gutter } from '../../_components/Gutter'
import RichText from '../../_components/RichText'

interface PageParams {
  params: { slug: string }
}

export const PlaceTemplate: React.FC<{ place: Place | null | undefined }> = ({ place: place }) => (
  <main>
    <Gutter>
      <h1>{place?.name}</h1>
      <section className="border-b">
        <p>Address: {place?.address}</p>
        <p>Fully GF?: {place?.fullyGf ? 'Yes' : 'No'}</p>
        <p>Location: {place?.location}</p>
        <p>Last Visited: {new Date(place?.lastDateOfVisit!).toLocaleDateString()}</p>
      </section>
      <RichText content={place?.content} />
    </Gutter>
  </main>
)

export default async function Page({ params: { slug = 'home' } }: PageParams) {
  const { isEnabled: isDraftMode } = draftMode()

  const page = await fetchPlace(slug, isDraftMode)

  if (page === null) {
    return notFound()
  }

  return <PlaceTemplate place={page} />
}

export async function generateStaticParams() {
  const pages = await fetchPlaces()

  return pages.map(({ slug }) =>
    slug !== 'home'
      ? {
          slug,
        }
      : {},
  ) // eslint-disable-line function-paren-newline
}
