import { AdminBar } from './_components/AdminBar'
import { Header } from './_components/Header'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Sanchez:ital@0;1&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="prose-sm font-serif">
        <AdminBar />
        <section className="mx-8 sm:mx-32 flex flex-col h-dvh">
          <Header />
          {children}
        </section>
      </body>
    </html>
  )
}
