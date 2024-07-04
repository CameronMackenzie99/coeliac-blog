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
      <Gutter>
        <nav className="flex flex-row justify-between font-bold">
          <Link href="/">
            <h1>Coeliac Ducky</h1>
          </Link>
          {hasMenuItems && (
            <>
              {menuItems.map((item, i) => {
                return <CMSLink key={i} appearance="default" label={item.name} url={item.link} />
              })}
            </>
          )}
        </nav>
      </Gutter>
    </header>
  )
}

export default Header
