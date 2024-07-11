import Image from 'next/image'
import { Article } from '../_components/Article/article'
import { Suspense } from 'react'
import { ContentSkeleton } from '../_components/Skeleton/content'
import { ImageSkeleton } from '../_components/Skeleton/image'

export default async function Page() {
  return (
    <Article>
      <h1>Hello, I’m Holly, welcome to my website!</h1>
      <article>
        <section className="flex flex-col-reverse flex-wrap-reverse sm:flex-row gap-6">
          <div className="basis-1/2 flex-grow">
            <h2 className="mt-2">About me</h2>{' '}
            <p>
              I currently live in London, but grew up in Derbyshire (hence the Ducky) and have spent
              the most time living in Norfolk and Norwich.
            </p>{' '}
            <p>
              I was diagnosed with coeliac disease in 2021 at the age of 22. I’d been struggling
              with a range of seemingly unconnected symptoms for many years, and these symptoms
              really escalated during the pandemic (which I put down to the fact that we jumped on
              the craft-beer and sourdough-baking bandwagons, and that was just too much gluten for
              my body to handle!).
            </p>{' '}
          </div>
          <div className="relative h-96 w-72">
            <Suspense fallback={<ImageSkeleton />}>
              <ImageSkeleton />
              {/* <Image
                src="/holly.jpg"
                alt="picture of holly drinking with a cocktail"
                className="object-contain border self-center border-slate-600 shadow-[3px_3px_0_0_rgba(252,211,77,0.8)]"
                fill
              /> */}
            </Suspense>
          </div>
        </section>
        <p>
          I do feel very grateful to have been diagnosed, and to know what was wrong . But I did
          feel very daunted by the idea of having to eat a 100% gluten-free forever, and the
          transition hasn’t been completely smooth-sailing. I think the thing I miss the most is
          being able to find something or somewhere to eat spontaneously, which can be really
          difficult when you have to avoid gluten, especially contamination. And I still remember
          that first trip round the supermarket, and realising just how many of my favourite foods
          (and so many random things!) contain or ‘may contain’ gluten…
        </p>{' '}
        <p>
          But, it’s not all bad! I am so much healthier and happier now that I know to avoid gluten,
          and there is such an incredible online coeliac and gluten-free community that I get to be
          a part of who have helped me so much! So, I wanted to create my own website and blog, to
          hopefully contribute to this lovely community.
        </p>
      </article>{' '}
      <section>
        <h2>About this website</h2>{' '}
        <p>
          In the ‘Places to eat’ section, I will be documenting, reviewing and cataloguing all of
          the gluten-free spots that I come across in the UK and beyond. I’ll always make sure to
          share key info, such as whether the place is fully GF or has safe cross-contamination
          practices. Once I’ve tried a few different places in a location, I’ll also write up a
          place-guide, which you’ll be able to find in the ‘Location guides’ section. In the
          ‘Recipes’ section, I’ll be sharing recipes (shocker!), and in the ‘Blog’ section, anything
          and everything else that I think might be helpful or interesting to share with my fellow
          gluten-avoiders.
        </p>{' '}
        <p>
          Thanks for reading this, and I hope you find this website useful! <br /> Holly x 🦆
        </p>
      </section>
    </Article>
  )
}
