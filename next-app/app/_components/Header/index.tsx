import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { CMSLink } from '../CMSLink'
import { Gutter } from '../Gutter'

import classes from './index.module.scss'
import { Url } from 'url'

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
    <header className={classes.header}>
      <Gutter className={classes.wrap}>
        <Link href="/" className={classes.logo}>
          <picture>
            {/* <source
              srcSet="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
              media="(prefers-color-scheme: dark)"
            /> */}
            <Image width={100} height={100} alt="Logo" src="/duck.svg" />
          </picture>
        </Link>
        <h1>Coeliac Ducky</h1>
        {hasMenuItems && (
          <nav className={classes.nav}>
            {menuItems.map((item, i) => {
              return <CMSLink key={i} appearance="default" label={item.name} url={item.link} />
            })}
          </nav>
        )}
      </Gutter>
    </header>
  )
}

export default Header
