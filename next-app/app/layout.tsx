import { AdminBar } from './_components/AdminBar'
import Footer from './_components/Footer'
import { Header } from './_components/Header'
import './globals.css'

export const metadata = {
  title: 'Coeliac Ducky',
  description: 'Coeliac friendly reviews and recipes!',
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
      <body className="bg-slate-50">
        <AdminBar />
        <div className="px-4 min-w-full prose prose-slate prose-sm font-serif">
          <section className="min-h-dvh">
            <Header />
            {children}
          </section>
          <Footer />
        </div>
      </body>
    </html>
  )
}
