import React from 'react'
import EmailLogo from '../Logos/Email'
import InstaLogo from '../Logos/Insta'

export const Footer = () => {
  return (
    <footer className="border-t border-slate-600 mt-4 sticky top-[100vh]">
      <section className="flex w-full items-center">
        <p className="basis-1/3 text-md text-slate-500">
          Website by <br />{' '}
          <a
            className="text-slate-500 hover:underline"
            href="https://www.cameronmackenzie.dev"
            target="_blank"
          >
            Cameron Mackenzie
          </a>
        </p>
        <p className="flex basis-1/3 text-md text-center justify-center">© Coeliac Ducky 2024</p>
        <div className="flex gap-2 items-center justify-end basis-1/3">
          <a href="https://www.instagram.com/coeliacducky/" target="_blank" aria-label="instagram">
            <InstaLogo className="h-[32px] w-[32px] fill-slate-700 hover:fill-slate-400" />
          </a>
          <a href="mailto:coeliacducky@gmail.com" target="_blank" aria-label="email">
            <EmailLogo className="h-[38px] w-[38px] fill-slate-700 hover:fill-slate-400" />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
