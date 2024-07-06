import React, { PropsWithoutRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import EmailLogo from '../Logos/Email'
import InstaLogo from '../Logos/Insta'

export const Footer = () => {
  return (
    <footer className="border-t sticky top-[100vh]">
      <section className="flex w-full items-center">
        <p className="basis-1/3 text-xs text-slate-400">
          Website by <br />{' '}
          <a
            className="text-slate-500 hover:underline"
            href="https://www.cameronmackenzie.dev"
            target="_blank"
          >
            Cameron Mackenzie
          </a>
        </p>
        <p className="flex basis-1/3 text-xs justify-center">© Coeliac Ducky 2024</p>
        <div className="flex gap-2 items-center justify-end basis-1/3">
          <a href="https://www.instagram.com/coeliacducky/" target="_blank">
            <InstaLogo className="h-[16px] w-[16px] fill-slate-700 hover:fill-slate-400" />
          </a>
          <a href="mailto:coeliacducky@gmail.com" target="_blank">
            <EmailLogo className="h-[18px] w-[18px] fill-slate-700 hover:fill-slate-400" />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
