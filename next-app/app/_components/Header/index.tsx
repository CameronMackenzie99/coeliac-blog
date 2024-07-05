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
]

export async function Header() {
  const hasMenuItems = menuItems.length > 0

  return (
    <header>
      <nav className="flex flex-row justify-between items-baseline font-bold border-b mb-4 w-full">
        <Link href="/">
          <h2 className="font-medium">Coeliac Ducky</h2>
        </Link>
        {hasMenuItems && (
          <>
            {menuItems.map((item, i) => {
              return (
                <Link key={i} href={item.link} className="hover:underline">
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
