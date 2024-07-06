import Image from 'next/image'

export default async function Page() {
  return (
    <>
      <h1>Hello, I’m Holly, and welcome to my website!</h1>
      <article>
        <h2>About me</h2>{' '}
        <section className="flex gap-6">
          <div>
            <p>
              I’m 25, and currently living in London. I grew up in Derbyshire (hence the Ducky), and
              then Norwich, which still has my heart.
            </p>{' '}
            <p>
              I was diagnosed with coeliac disease in April 2021. I had struggled with a range of
              seemingly unconnected symptoms for many years, but my symptoms escalated during the
              pandemic (I partly put this down to the fact that we jumped on the pandemic craft-beer
              and sourdough bandwagons, and that was just too much gluten for my body to handle). I
              got back in touch with my GP who referred me for tests, and I found out a few days
              later that I have coeliac disease.
            </p>{' '}
          </div>
          <Image
            src="/holly.jpg"
            alt="picture of holly drinking with a cocktail"
            className="object-cover border border-slate-600 shadow-[3px_3px_0_0_rgba(252,211,77,0.8)]"
            width={200}
            height={200}
          />
        </section>
        <p>
          I am really grateful to have been diagnosed and to have an answer to what was wrong. But,
          I did initially feel very daunted by the idea of being 100% gluten-free forever (I still
          am sometimes…), and the transition to a fully GF diet hasn’t always been smooth-sailing. I
          think the thing I miss the most is being able to find something or somewhere to eat
          spontaneously, which can be really difficult when you have to avoid gluten, especially
          cross-contamination. I also still remember that first trip round the supermarket after
          finding out I could never eat gluten again, and that sinking feeling of seeing ‘may
          contains’ on some of my favourite foods…
        </p>{' '}
        <p>
          BUT, it’s not all bad! I’m so grateful to feel healthier and happier now I know to avoid
          gluten, and that there is such an incredible online coeliac and gluten-free community that
          I get to be a part of as a result of my diagnosis! So, I wanted to create my own website
          and blog, to hopefully contribute to this lovely community.
        </p>
      </article>{' '}
      <section>
        <h2>About this website</h2>{' '}
        <p>
          In the ‘Places to Eat’ section, I will be documenting, reviewing and cataloguing all of
          the gluten-free spots that I come across in the UK and beyond. I’ll always make sure to
          share key info, such as whether the place is fully GF or has safe cross-contamination
          practices. Once I’ve tried a few different places in a location, I’ll also write up a
          place-guide, which you’ll be able to find in the ‘Location Guides’ section. In the
          ‘Recipes’ section, I’ll be sharing recipes (shocker!), and in the ‘Blog’ section, anything
          and everything else that I think might be helpful or interesting to share with my fellow
          gluten-avoiders.
        </p>{' '}
        <p>Thanks for reading this, and I hope you find this website useful! Holly x 🦆</p>
      </section>
    </>
  )
}
