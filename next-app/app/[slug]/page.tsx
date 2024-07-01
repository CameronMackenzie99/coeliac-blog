import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import { Place } from '../../payload-types'
import { fetchPlace } from '../_api/fetchPage'
import { fetchPages } from '../_api/fetchPages'
import { Gutter } from '../_components/Gutter'
import RichText from '../_components/RichText'

import classes from './index.module.scss'

interface PageParams {
  params: { slug: string }
}

export const PageTemplate: React.FC<{ place: Place | null | undefined }> = ({ place: place }) => (
  <main className={classes.page}>
    <Gutter>
      <h1>{place?.name}</h1>
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

  return <PageTemplate place={page} />
}

export async function generateStaticParams() {
  const pages = await fetchPages()

  return pages.map(({ slug }) =>
    slug !== 'home'
      ? {
          slug,
        }
      : {},
  ) // eslint-disable-line function-paren-newline
}
