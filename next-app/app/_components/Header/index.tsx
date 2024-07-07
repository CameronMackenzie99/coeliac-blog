import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CMSLink } from '../CMSLink'
import { Gutter } from '../Gutter'

type MenuItem = {
  name: string
  link: string
}

const menuItems: MenuItem[] = [
  {
    name: 'About me',
    link: '/about-me',
  },
  {
    name: 'Places to eat',
    link: '/places',
  },
  {
    name: 'Location guides',
    link: '/locations',
  },
  {
    name: 'Recipes',
    link: '/recipes',
  },
  {
    name: 'Blog',
    link: '/blog',
  },
]

export async function Header() {
  const hasMenuItems = menuItems.length > 0

  return (
    <header>
      <nav className="flex flex-row flex-wrap py-4 gap-3 justify-between items-baseline font-bold border-b border-slate-600 mb-4 w-full">
        <Link href="/">
          <h2 className="font-medium not-prose text-3xl hover:cursor-pointer hover:underline border-slate-600">
            Coeliac Ducky
          </h2>
        </Link>
        {hasMenuItems && (
          <>
            {menuItems.map((item, i) => {
              return (
                <Link
                  key={i}
                  href={item.link}
                  className="hover:underline px-1 border border-slate-600 shadow-[3px_3px_0_0_rgba(252,211,77,0.8)] hover:shadow-[5px_5px_0_0_rgba(252,211,77,1)] text-nowrap rounded-md"
                >
                  {item.name}
                </Link>
              )
            })}
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
