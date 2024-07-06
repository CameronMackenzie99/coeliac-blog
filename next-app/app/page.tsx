import { fetchPlaces } from './_api/fetchPages'
import { Card } from './_components/Card/LinkCard'
import Image from 'next/image'

export default async function Page() {
  const recentPlaces = (await fetchPlaces()).slice(0, 2)
  return (
    <>
      <h1 className="">Coeliac safe recommendations, guides and recipes!</h1>
      <div className="flex flex-wrap">
        <div className="w-3/5 h-48 relative rounded-sm">
          <Image src="/bun.jpg" alt="cinnamon buns" layout="fill" objectFit="contain" />
        </div>
        <div className="w-2/5 relative rounded-sm hidden md:block">
          <Image layout="fill" objectFit="contain" src="/pizza.jpg" alt="pizza" />
        </div>
      </div>
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
    </>
  )
}
