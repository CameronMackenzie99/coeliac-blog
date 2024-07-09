import { fetchPlaces } from './_api/fetchPages'
import { Card } from './_components/Card/LinkCard'
import Image from 'next/image'
import banner from '../../public/banner.png'
import { Article } from './_components/Article/article'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import configPromise from '@payload-config'
import { revalidatePath } from 'next/cache'

export default async function Page() {
  revalidatePath('/')
  const recentPlaces = (await fetchPlaces()).slice(0, 2)

  const payload = await getPayloadHMR({ config: configPromise })
  const url = payload.getAdminURL()
  // return <div>The admin panel is running at: {url}</div>
  return (
    <>
      <h1 className="bg-amber-200 mt-[-16px] not-prose text-center text-xl py-1 font-medium border-b border-slate-600">
        Coeliac-safe recommendations, guides and recipes!
      </h1>

      <Image src={banner} alt="banner" className="not-prose border-b border-slate-600" />
      <Article>
        <h2>Recent reviews:</h2>
        <div className="flex flex-col gap-4 pb-4 border-b w-full items-center justify-between">
          {recentPlaces.map((place, i) => {
            return (
              <Card key={i} href={`places/${place.slug}`} shadowColour="blue">
                <div>
                  <p className="font-bold">{place.name}</p>
                  <i>{place.location}</i>
                  <p>{place.summary}</p>
                </div>
              </Card>
            )
          })}
          <Card href="places" shadowColour="blue">
            <p className="not-prose">Discover more...</p>
          </Card>
        </div>
      </Article>
    </>
  )
}
