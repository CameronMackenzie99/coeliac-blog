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
      <nav className="flex flex-row justify-between items-baseline font-bold border-b">
        <Link href="/">
          <h2>Coeliac Ducky</h2>
        </Link>
        {hasMenuItems && (
          <>
            {menuItems.map((item, i) => {
              return <CMSLink key={i} appearance="default" label={item.name} url={item.link} />
            })}
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
